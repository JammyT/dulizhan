# 🚀 Wmiwulien Store 快速部署指南

## 方案一：一键部署到云服务器（推荐）

### 1. 准备服务器
```bash
# 连接到您的云服务器
ssh root@your-server-ip

# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装必要软件
sudo apt install nginx git curl -y
```

### 2. 部署项目
```bash
# 克隆项目（或上传项目文件）
git clone https://github.com/your-username/wmiwulien-store.git
cd wmiwulien-store

# 运行一键部署脚本
./deploy.sh /var/www/wmiwulien-store
```

### 3. 配置域名
```bash
# 编辑 Nginx 配置
sudo nano /etc/nginx/sites-available/wmiwulien-store

# 将 server_name 改为您的域名
server_name your-domain.com www.your-domain.com;

# 启用站点
sudo ln -s /etc/nginx/sites-available/wmiwulien-store /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 方案二：Docker 快速部署

### 1. 安装 Docker
```bash
# 安装 Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 启动 Docker
sudo systemctl start docker
sudo systemctl enable docker
```

### 2. 部署应用
```bash
# 构建并运行
docker-compose up -d

# 查看状态
docker-compose ps
```

## 方案三：Vercel 一键部署

### 1. 准备项目
```bash
# 确保项目已推送到 GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. 部署到 Vercel
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录并部署
vercel login
vercel --prod
```

## 方案四：Netlify 一键部署

### 1. 构建项目
```bash
npm install
npm run build
```

### 2. 部署到 Netlify
```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录并部署
netlify login
netlify deploy --prod --dir=dist
```

## 🔧 常见问题解决

### 问题1：页面刷新后 404
**解决**：确保 Nginx 配置包含 React Router 支持
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### 问题2：静态资源加载失败
**解决**：检查文件权限
```bash
sudo chown -R www-data:www-data /var/www/wmiwulien-store
sudo chmod -R 755 /var/www/wmiwulien-store
```

### 问题3：Docker 容器无法启动
**解决**：检查端口占用
```bash
sudo netstat -tlnp | grep :80
docker logs wmiwulien-store
```

## 📊 部署后检查清单

- [ ] 网站可以正常访问
- [ ] 所有页面路由正常工作
- [ ] 静态资源加载正常
- [ ] 亚马逊链接功能正常
- [ ] 购物车功能正常
- [ ] 搜索功能正常
- [ ] 响应式设计正常

## 🔒 安全配置

### 配置 HTTPS（推荐）
```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取 SSL 证书
sudo certbot --nginx -d your-domain.com
```

### 配置防火墙
```bash
sudo ufw enable
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
```

## 📈 性能优化

### 启用 Gzip 压缩
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript;
```

### 配置缓存
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 🆘 获取帮助

如果遇到问题：

1. 查看详细部署文档：`DEPLOYMENT.md`
2. 检查服务器日志：`sudo tail -f /var/log/nginx/error.log`
3. 检查应用日志：`docker logs wmiwulien-store`

---

**🎉 恭喜！您的 Wmiwulien Store 已成功部署！** 