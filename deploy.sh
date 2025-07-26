#!/bin/bash

# Wmiwulien Store 自动化部署脚本

set -e  # 遇到错误时退出

echo "🚀 开始部署 Wmiwulien Store..."

# 检查是否在项目根目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 请在项目根目录运行此脚本"
    exit 1
fi

# 检查 Node.js 版本
NODE_VERSION=$(node -v)
echo "📦 Node.js 版本: $NODE_VERSION"

# 安装依赖
echo "📥 安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建是否成功
if [ ! -d "dist" ]; then
    echo "❌ 构建失败: dist 目录不存在"
    exit 1
fi

echo "✅ 构建完成!"

# 如果提供了部署路径，则自动部署
if [ ! -z "$1" ]; then
    DEPLOY_PATH=$1
    
    echo "📤 部署到: $DEPLOY_PATH"
    
    # 备份当前版本
    if [ -d "$DEPLOY_PATH" ]; then
        BACKUP_DIR="${DEPLOY_PATH}.backup.$(date +%Y%m%d_%H%M%S)"
        echo "💾 备份当前版本到: $BACKUP_DIR"
        sudo cp -r "$DEPLOY_PATH" "$BACKUP_DIR"
    fi
    
    # 创建部署目录
    sudo mkdir -p "$DEPLOY_PATH"
    
    # 复制构建文件
    echo "📋 复制文件..."
    sudo rm -rf "$DEPLOY_PATH"/*
    sudo cp -r dist/* "$DEPLOY_PATH"/
    
    # 设置权限
    echo "🔐 设置权限..."
    sudo chown -R www-data:www-data "$DEPLOY_PATH"
    sudo chmod -R 755 "$DEPLOY_PATH"
    
    # 重启 Nginx（如果存在）
    if command -v nginx &> /dev/null; then
        echo "🔄 重启 Nginx..."
        sudo nginx -t && sudo systemctl restart nginx
    fi
    
    echo "✅ 部署完成!"
    echo "🌐 网站地址: http://$(hostname -I | awk '{print $1}')"
else
    echo "📁 构建文件已生成在 dist/ 目录"
    echo "💡 提示: 运行 ./deploy.sh /var/www/wmiwulien-store 进行自动部署"
fi

echo "🎉 部署脚本执行完成!" 