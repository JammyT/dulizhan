# Wmiwulien Store 部署文档

## 项目概述

Wmiwulien Store 是一个基于 React + TypeScript + Vite 的电商网站，集成了亚马逊商品链接功能。

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite 4.5.14
- **样式**: Tailwind CSS
- **路由**: React Router DOM
- **状态管理**: React Context API
- **图标**: Lucide React

## 部署方案

### 方案一：静态文件部署（推荐）

#### 1. 本地构建

```bash
# 安装依赖
npm install

# 构建生产版本
npm run build
```

构建完成后，会在 `dist/` 目录生成静态文件。

#### 2. 部署到 Nginx 服务器

##### 2.1 安装 Nginx

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install nginx
```

**CentOS/RHEL:**
```bash
sudo yum install epel-release
sudo yum install nginx
```

##### 2.2 配置 Nginx

创建配置文件 `/etc/nginx/sites-available/wmiwulien-store`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /var/www/wmiwulien-store;
    index index.html;

    # 启用 gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # React Router 支持
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

##### 2.3 部署文件

```bash
# 创建网站目录
sudo mkdir -p /var/www/wmiwulien-store

# 复制构建文件
sudo cp -r dist/* /var/www/wmiwulien-store/

# 设置权限
sudo chown -R www-data:www-data /var/www/wmiwulien-store
sudo chmod -R 755 /var/www/wmiwulien-store

# 启用站点
sudo ln -s /etc/nginx/sites-available/wmiwulien-store /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

#### 3. 配置 HTTPS（推荐）

使用 Let's Encrypt 免费 SSL 证书：

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# 自动续期
sudo crontab -e
# 添加：0 12 * * * /usr/bin/certbot renew --quiet
```

### 方案二：Docker 部署

#### 1. 创建 Dockerfile

```dockerfile
# 构建阶段
FROM node:18-alpine as build

WORKDIR /app

# 复制 package 文件
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# 生产阶段
FROM nginx:alpine

# 复制构建文件
COPY --from=build /app/dist /usr/share/nginx/html

# 复制 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
```

#### 2. 创建 nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # React Router 支持
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### 3. 构建和运行 Docker 容器

```bash
# 构建镜像
docker build -t wmiwulien-store .

# 运行容器
docker run -d -p 80:80 --name wmiwulien-store wmiwulien-store

# 使用 Docker Compose（可选）
```

创建 `docker-compose.yml`:

```yaml
version: '3.8'
services:
  wmiwulien-store:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

运行：
```bash
docker-compose up -d
```

### 方案三：云平台部署

#### 1. Vercel 部署（推荐）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署
vercel --prod
```

#### 2. Netlify 部署

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 部署
netlify deploy --prod --dir=dist
```

#### 3. GitHub Pages 部署

创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 环境配置

### 1. 环境变量

创建 `.env.production`:

```env
VITE_APP_TITLE=Wmiwulien Store
VITE_APP_DESCRIPTION=Your trusted source for quality products
VITE_APP_URL=https://your-domain.com
```

### 2. 构建优化

修改 `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
})
```

## 性能优化

### 1. 代码分割

```typescript
// 路由懒加载
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const Cart = lazy(() => import('./pages/Cart'))

// 在 App.tsx 中使用
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
</Suspense>
```

### 2. 图片优化

```typescript
// 使用 WebP 格式
// 添加图片懒加载
<img 
  src={image} 
  alt={name}
  loading="lazy"
  onError={(e) => {
    e.currentTarget.src = '/fallback-image.jpg'
  }}
/>
```

### 3. 缓存策略

```nginx
# Nginx 缓存配置
location ~* \.(js|css)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location ~* \.(png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public";
}
```

## 监控和维护

### 1. 日志监控

```bash
# 查看 Nginx 访问日志
sudo tail -f /var/log/nginx/access.log

# 查看错误日志
sudo tail -f /var/log/nginx/error.log
```

### 2. 性能监控

```bash
# 安装监控工具
sudo apt install htop iotop

# 监控系统资源
htop
```

### 3. 备份策略

```bash
# 创建备份脚本
#!/bin/bash
BACKUP_DIR="/backup/$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR

# 备份网站文件
cp -r /var/www/wmiwulien-store $BACKUP_DIR/

# 备份 Nginx 配置
cp /etc/nginx/sites-available/wmiwulien-store $BACKUP_DIR/

echo "Backup completed: $BACKUP_DIR"
```

## 故障排除

### 1. 常见问题

**问题**: 页面刷新后 404
**解决**: 确保 Nginx 配置包含 `try_files $uri $uri/ /index.html;`

**问题**: 静态资源加载失败
**解决**: 检查文件权限和路径配置

**问题**: HTTPS 重定向循环
**解决**: 检查 SSL 配置和重定向规则

### 2. 调试命令

```bash
# 检查 Nginx 配置
sudo nginx -t

# 检查端口占用
sudo netstat -tlnp | grep :80

# 检查服务状态
sudo systemctl status nginx

# 查看实时日志
sudo tail -f /var/log/nginx/access.log
```

## 安全建议

### 1. 服务器安全

```bash
# 更新系统
sudo apt update && sudo apt upgrade

# 配置防火墙
sudo ufw enable
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
```

### 2. 应用安全

```nginx
# 安全头配置
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

### 3. SSL 配置

```nginx
# 现代 SSL 配置
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
ssl_prefer_server_ciphers off;
```

## 更新部署

### 1. 自动化部署脚本

创建 `deploy.sh`:

```bash
#!/bin/bash

echo "开始部署 Wmiwulien Store..."

# 拉取最新代码
git pull origin main

# 安装依赖
npm install

# 构建项目
npm run build

# 备份当前版本
sudo cp -r /var/www/wmiwulien-store /var/www/wmiwulien-store.backup.$(date +%Y%m%d_%H%M%S)

# 部署新版本
sudo rm -rf /var/www/wmiwulien-store/*
sudo cp -r dist/* /var/www/wmiwulien-store/

# 设置权限
sudo chown -R www-data:www-data /var/www/wmiwulien-store
sudo chmod -R 755 /var/www/wmiwulien-store

# 重启 Nginx
sudo systemctl restart nginx

echo "部署完成！"
```

### 2. 回滚脚本

```bash
#!/bin/bash

if [ -z "$1" ]; then
    echo "请指定回滚版本目录"
    exit 1
fi

BACKUP_DIR="/var/www/wmiwulien-store.backup.$1"

if [ ! -d "$BACKUP_DIR" ]; then
    echo "备份目录不存在: $BACKUP_DIR"
    exit 1
fi

echo "回滚到版本: $1"

# 停止 Nginx
sudo systemctl stop nginx

# 恢复备份
sudo rm -rf /var/www/wmiwulien-store
sudo cp -r $BACKUP_DIR /var/www/wmiwulien-store

# 设置权限
sudo chown -R www-data:www-data /var/www/wmiwulien-store
sudo chmod -R 755 /var/www/wmiwulien-store

# 启动 Nginx
sudo systemctl start nginx

echo "回滚完成！"
```

## 联系支持

如果在部署过程中遇到问题，请检查：

1. 服务器日志文件
2. 网络连接状态
3. 文件权限设置
4. 配置文件语法

---

**注意**: 请根据您的具体服务器环境和需求调整配置参数。 