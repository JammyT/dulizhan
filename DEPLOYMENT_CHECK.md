# 🔍 Wmiwulien Store 部署状态检查指南

## 1. 基础服务状态检查

### 检查 Nginx 服务状态
```bash
# 检查 Nginx 是否运行
sudo systemctl status nginx

# 检查 Nginx 进程
ps aux | grep nginx

# 检查 Nginx 端口监听
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
```

### 检查网站文件
```bash
# 检查网站目录是否存在
ls -la /var/www/wmiwulien-store/

# 检查关键文件
ls -la /var/www/wmiwulien-store/index.html
ls -la /var/www/wmiwulien-store/assets/

# 检查文件权限
ls -la /var/www/wmiwulien-store/ | head -10
```

## 2. 网站访问测试

### 本地访问测试
```bash
# 测试本地访问
curl -I http://localhost
curl -I http://127.0.0.1

# 测试完整页面
curl http://localhost | head -20
```

### 外部访问测试
```bash
# 获取服务器 IP
curl ifconfig.me
hostname -I

# 测试外部访问（替换为您的服务器 IP）
curl -I http://your-server-ip
```

### 浏览器访问测试
```
# 在浏览器中访问以下地址：
http://your-server-ip
http://your-domain.com (如果配置了域名)
https://your-domain.com (如果配置了 HTTPS)
```

## 3. 功能测试清单

### ✅ 基础功能测试
- [ ] 网站首页能正常加载
- [ ] 页面样式正常显示
- [ ] 导航菜单正常工作
- [ ] 页面切换无 404 错误

### ✅ 核心功能测试
- [ ] 产品列表页面正常
- [ ] 产品详情页面正常
- [ ] 搜索功能正常
- [ ] 购物车功能正常
- [ ] 亚马逊链接跳转正常

### ✅ 响应式测试
- [ ] 桌面端显示正常
- [ ] 平板端显示正常
- [ ] 手机端显示正常

## 4. 日志检查

### 检查 Nginx 访问日志
```bash
# 查看实时访问日志
sudo tail -f /var/log/nginx/access.log

# 查看最近的访问记录
sudo tail -100 /var/log/nginx/access.log

# 查看特定 IP 的访问
sudo grep "your-ip" /var/log/nginx/access.log
```

### 检查 Nginx 错误日志
```bash
# 查看错误日志
sudo tail -f /var/log/nginx/error.log

# 查看最近的错误
sudo tail -50 /var/log/nginx/error.log

# 查看特定错误
sudo grep "error" /var/log/nginx/error.log
```

### 检查系统日志
```bash
# 查看系统服务日志
sudo journalctl -u nginx -f

# 查看最近的系统日志
sudo journalctl -u nginx --since "1 hour ago"
```

## 5. 性能检查

### 检查服务器资源
```bash
# 查看 CPU 和内存使用
htop
# 或者
top

# 查看磁盘使用
df -h

# 查看内存使用详情
free -h
```

### 检查网络连接
```bash
# 检查网络接口
ip addr show

# 检查网络连接
ss -tuln

# 检查防火墙状态
sudo ufw status
```

## 6. 配置检查

### 检查 Nginx 配置
```bash
# 测试 Nginx 配置语法
sudo nginx -t

# 查看 Nginx 配置
sudo nginx -T | grep -A 20 "server {"

# 检查配置文件
sudo cat /etc/nginx/sites-available/wmiwulien-store
```

### 检查文件权限
```bash
# 检查网站目录权限
ls -ld /var/www/wmiwulien-store/

# 检查文件所有者
ls -la /var/www/wmiwulien-store/ | head -5

# 检查 Nginx 用户
ps aux | grep nginx | grep -v grep
```

## 7. 常见问题诊断

### 问题1：网站无法访问
```bash
# 检查 Nginx 是否运行
sudo systemctl status nginx

# 检查端口是否监听
sudo netstat -tlnp | grep :80

# 检查防火墙
sudo ufw status
```

### 问题2：页面显示 404
```bash
# 检查文件是否存在
ls -la /var/www/wmiwulien-store/index.html

# 检查 Nginx 配置中的 root 路径
sudo grep "root" /etc/nginx/sites-available/wmiwulien-store

# 检查文件权限
ls -la /var/www/wmiwulien-store/
```

### 问题3：静态资源加载失败
```bash
# 检查 assets 目录
ls -la /var/www/wmiwulien-store/assets/

# 检查文件权限
sudo chown -R www-data:www-data /var/www/wmiwulien-store/
sudo chmod -R 755 /var/www/wmiwulien-store/
```

### 问题4：页面刷新后 404
```bash
# 检查 Nginx 配置是否包含 React Router 支持
sudo grep -A 5 "try_files" /etc/nginx/sites-available/wmiwulien-store
```

## 8. 自动化检查脚本

创建检查脚本 `check-deployment.sh`:

```bash
#!/bin/bash

echo "🔍 开始检查部署状态..."

# 检查 Nginx 状态
echo "📋 检查 Nginx 服务状态..."
if systemctl is-active --quiet nginx; then
    echo "✅ Nginx 服务正在运行"
else
    echo "❌ Nginx 服务未运行"
    exit 1
fi

# 检查网站文件
echo "📁 检查网站文件..."
if [ -f "/var/www/wmiwulien-store/index.html" ]; then
    echo "✅ index.html 文件存在"
else
    echo "❌ index.html 文件不存在"
    exit 1
fi

# 检查端口监听
echo "🌐 检查端口监听..."
if netstat -tlnp | grep -q ":80 "; then
    echo "✅ 端口 80 正在监听"
else
    echo "❌ 端口 80 未监听"
    exit 1
fi

# 测试本地访问
echo "🔗 测试本地访问..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200"; then
    echo "✅ 本地访问正常"
else
    echo "❌ 本地访问失败"
    exit 1
fi

echo "🎉 部署检查完成！网站应该可以正常访问了。"
```

## 9. 快速诊断命令

```bash
# 一键检查所有状态
echo "=== Nginx 状态 ===" && systemctl status nginx --no-pager -l
echo "=== 端口监听 ===" && netstat -tlnp | grep :80
echo "=== 网站文件 ===" && ls -la /var/www/wmiwulien-store/ | head -5
echo "=== 本地测试 ===" && curl -I http://localhost
echo "=== 错误日志 ===" && sudo tail -5 /var/log/nginx/error.log
```

## 10. 成功部署的标志

✅ **服务状态正常**
- Nginx 服务正在运行
- 端口 80/443 正在监听

✅ **文件部署完整**
- index.html 文件存在
- assets 目录包含 JS/CSS 文件
- 文件权限正确

✅ **访问测试通过**
- 本地访问返回 200 状态码
- 页面内容正常显示
- 无 404 错误

✅ **功能测试通过**
- 所有页面路由正常
- 静态资源加载正常
- 核心功能正常工作

---

**🎯 如果所有检查都通过，说明您的网站已成功部署！** 