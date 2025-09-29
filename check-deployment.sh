#!/bin/bash

# Risepekt Store 部署状态检查脚本

echo "🔍 开始检查 Risepekt Store 部署状态..."
echo "=================================="

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 检查函数
check_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
        return 0
    else
        echo -e "${RED}❌ $2${NC}"
        return 1
    fi
}

# 1. 检查 Nginx 服务状态
echo -e "${BLUE}📋 检查 Nginx 服务状态...${NC}"
if systemctl is-active --quiet nginx; then
    check_status 0 "Nginx 服务正在运行"
    NGINX_STATUS=0
else
    check_status 1 "Nginx 服务未运行"
    NGINX_STATUS=1
fi

# 2. 检查网站目录
echo -e "${BLUE}📁 检查网站文件...${NC}"
if [ -d "/var/www/risepekt-store" ]; then
    check_status 0 "网站目录存在"
    DIR_STATUS=0
else
    check_status 1 "网站目录不存在"
    DIR_STATUS=1
fi

# 3. 检查 index.html 文件
if [ -f "/var/www/risepekt-store/index.html" ]; then
    check_status 0 "index.html 文件存在"
    HTML_STATUS=0
else
    check_status 1 "index.html 文件不存在"
    HTML_STATUS=1
fi

# 4. 检查 assets 目录
if [ -d "/var/www/risepekt-store/assets" ]; then
    check_status 0 "assets 目录存在"
    ASSETS_STATUS=0
else
    check_status 1 "assets 目录不存在"
    ASSETS_STATUS=1
fi

# 5. 检查端口监听
echo -e "${BLUE}🌐 检查端口监听...${NC}"
if netstat -tlnp 2>/dev/null | grep -q ":80 "; then
    check_status 0 "端口 80 正在监听"
    PORT_STATUS=0
else
    check_status 1 "端口 80 未监听"
    PORT_STATUS=1
fi

# 6. 检查 HTTPS 端口（如果配置了）
if netstat -tlnp 2>/dev/null | grep -q ":443 "; then
    check_status 0 "端口 443 (HTTPS) 正在监听"
    HTTPS_STATUS=0
else
    echo -e "${YELLOW}⚠️  端口 443 未监听 (HTTPS 未配置)${NC}"
    HTTPS_STATUS=1
fi

# 7. 测试本地访问
echo -e "${BLUE}🔗 测试本地访问...${NC}"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost 2>/dev/null || echo "000")
if [ "$HTTP_CODE" = "200" ]; then
    check_status 0 "本地访问正常 (HTTP 200)"
    LOCAL_STATUS=0
else
    check_status 1 "本地访问失败 (HTTP $HTTP_CODE)"
    LOCAL_STATUS=1
fi

# 8. 检查文件权限
echo -e "${BLUE}🔐 检查文件权限...${NC}"
if [ -r "/var/www/risepekt-store/index.html" ]; then
    check_status 0 "文件权限正常"
    PERM_STATUS=0
else
    check_status 1 "文件权限异常"
    PERM_STATUS=1
fi

# 9. 获取服务器信息
echo -e "${BLUE}📊 服务器信息...${NC}"
SERVER_IP=$(hostname -I | awk '{print $1}' 2>/dev/null || echo "未知")
EXTERNAL_IP=$(curl -s ifconfig.me 2>/dev/null || echo "未知")
echo -e "${GREEN}🌐 服务器 IP: $SERVER_IP${NC}"
echo -e "${GREEN}🌍 外网 IP: $EXTERNAL_IP${NC}"

# 10. 检查最近的错误日志
echo -e "${BLUE}📝 检查错误日志...${NC}"
ERROR_COUNT=$(sudo tail -100 /var/log/nginx/error.log 2>/dev/null | grep -c "error" || echo "0")
if [ "$ERROR_COUNT" -eq 0 ]; then
    check_status 0 "无最近错误日志"
    ERROR_STATUS=0
else
    echo -e "${YELLOW}⚠️  发现 $ERROR_COUNT 条错误日志${NC}"
    ERROR_STATUS=1
fi

# 11. 显示网站访问地址
echo -e "${BLUE}🎯 网站访问地址...${NC}"
echo -e "${GREEN}本地访问: http://localhost${NC}"
echo -e "${GREEN}内网访问: http://$SERVER_IP${NC}"
echo -e "${GREEN}外网访问: http://$EXTERNAL_IP${NC}"

# 12. 总体状态评估
echo -e "${BLUE}📈 总体状态评估...${NC}"
TOTAL_CHECKS=8
PASSED_CHECKS=0

[ $NGINX_STATUS -eq 0 ] && PASSED_CHECKS=$((PASSED_CHECKS + 1))
[ $DIR_STATUS -eq 0 ] && PASSED_CHECKS=$((PASSED_CHECKS + 1))
[ $HTML_STATUS -eq 0 ] && PASSED_CHECKS=$((PASSED_CHECKS + 1))
[ $ASSETS_STATUS -eq 0 ] && PASSED_CHECKS=$((PASSED_CHECKS + 1))
[ $PORT_STATUS -eq 0 ] && PASSED_CHECKS=$((PASSED_CHECKS + 1))
[ $LOCAL_STATUS -eq 0 ] && PASSED_CHECKS=$((PASSED_CHECKS + 1))
[ $PERM_STATUS -eq 0 ] && PASSED_CHECKS=$((PASSED_CHECKS + 1))
[ $ERROR_STATUS -eq 0 ] && PASSED_CHECKS=$((PASSED_CHECKS + 1))

SUCCESS_RATE=$((PASSED_CHECKS * 100 / TOTAL_CHECKS))

if [ $SUCCESS_RATE -eq 100 ]; then
    echo -e "${GREEN}🎉 部署状态: 完美 (${PASSED_CHECKS}/${TOTAL_CHECKS})${NC}"
    echo -e "${GREEN}✅ 您的网站已成功部署并可以正常访问！${NC}"
elif [ $SUCCESS_RATE -ge 80 ]; then
    echo -e "${YELLOW}⚠️  部署状态: 良好 (${PASSED_CHECKS}/${TOTAL_CHECKS})${NC}"
    echo -e "${YELLOW}💡 网站基本可用，但建议检查未通过的项目${NC}"
else
    echo -e "${RED}❌ 部署状态: 异常 (${PASSED_CHECKS}/${TOTAL_CHECKS})${NC}"
    echo -e "${RED}🔧 请检查未通过的项目并修复问题${NC}"
fi

# 13. 提供故障排除建议
if [ $SUCCESS_RATE -lt 100 ]; then
    echo -e "${BLUE}🔧 故障排除建议...${NC}"
    
    if [ $NGINX_STATUS -ne 0 ]; then
        echo -e "${YELLOW}• 启动 Nginx: sudo systemctl start nginx${NC}"
    fi
    
    if [ $DIR_STATUS -ne 0 ] || [ $HTML_STATUS -ne 0 ]; then
        echo -e "${YELLOW}• 重新部署: ./deploy.sh /var/www/risepekt-store${NC}"
    fi
    
    if [ $PORT_STATUS -ne 0 ]; then
        echo -e "${YELLOW}• 检查防火墙: sudo ufw status${NC}"
    fi
    
    if [ $PERM_STATUS -ne 0 ]; then
        echo -e "${YELLOW}• 修复权限: sudo chown -R www-data:www-data /var/www/risepekt-store${NC}"
    fi
    
    echo -e "${YELLOW}• 查看详细日志: sudo tail -f /var/log/nginx/error.log${NC}"
fi

echo "=================================="
echo -e "${GREEN}检查完成！${NC}" 