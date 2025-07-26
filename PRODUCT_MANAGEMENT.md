# 📦 商品信息管理指南

## 📍 商品信息存储位置

### 当前状态
商品信息目前存储在 `src/data/products.ts` 文件中，这是一个集中的数据管理文件。

### 文件结构
```
src/
├── data/
│   └── products.ts          # 📦 商品数据文件
├── pages/
│   ├── Home.tsx            # 🏠 主页（使用特色商品）
│   ├── Products.tsx        # 🛍️ 产品列表页
│   └── ProductDetail.tsx   # 🔍 产品详情页
```

## 🛠️ 如何编辑商品信息

### 方法一：直接编辑代码文件（推荐用于开发阶段）

1. **打开商品数据文件**
   ```bash
   # 在项目根目录下
   code src/data/products.ts
   ```

2. **编辑商品信息**
   ```typescript
   export const products: Product[] = [
     {
       id: '1',
       name: 'Premium Wireless Headphones',
       price: 199.99,
       originalPrice: 249.99,
       image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
       // ... 其他属性
     },
     // 添加新商品
     {
       id: '7',
       name: 'New Product Name',
       price: 99.99,
       // ... 其他属性
     }
   ]
   ```

3. **保存文件后自动更新**
   - 开发服务器会自动重新加载
   - 网站立即显示更新后的商品信息

### 方法二：使用环境变量（推荐用于生产环境）

1. **创建环境配置文件**
   ```bash
   # 创建 .env.local 文件
   touch .env.local
   ```

2. **配置商品数据**
   ```env
   # .env.local
   VITE_PRODUCTS_API_URL=https://your-api.com/products
   VITE_PRODUCTS_API_KEY=your-api-key
   ```

3. **修改数据获取逻辑**
   ```typescript
   // src/data/products.ts
   const fetchProducts = async () => {
     const response = await fetch(import.meta.env.VITE_PRODUCTS_API_URL)
     return response.json()
   }
   ```

### 方法三：集成CMS系统（推荐用于长期运营）

#### 选项A：Strapi CMS
```bash
# 安装Strapi
npx create-strapi-app@latest my-store-backend --quickstart

# 配置商品模型
# 在Strapi管理面板中创建Product内容类型
```

#### 选项B：Sanity CMS
```bash
# 安装Sanity
npm install @sanity/client

# 配置客户端
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
})
```

## 📊 商品数据结构

### 完整商品属性
```typescript
interface Product {
  id: string                    // 唯一标识符
  name: string                  // 商品名称
  price: number                 // 当前价格
  originalPrice?: number        // 原价（用于显示折扣）
  image: string                 // 主图片URL
  images?: string[]             // 多张图片URL数组
  rating: number                // 评分（1-5）
  reviews: number               // 评价数量
  category: string              // 商品分类
  description?: string          // 商品描述
  features?: string[]           // 特色功能列表
  specifications?: Record<string, string>  // 技术规格
  stock?: number                // 库存数量
  sku?: string                  // 商品编码
  weight?: number               // 重量（kg）
  dimensions?: {                // 尺寸
    length: number
    width: number
    height: number
  }
  tags?: string[]               // 标签数组
  isFeatured?: boolean          // 是否特色商品
  isOnSale?: boolean            // 是否促销
  createdAt?: string            // 创建时间
  updatedAt?: string            // 更新时间
}
```

### 必填字段
- `id`: 商品唯一标识
- `name`: 商品名称
- `price`: 价格
- `image`: 主图片
- `rating`: 评分
- `reviews`: 评价数量
- `category`: 分类

### 可选字段
- `originalPrice`: 原价（显示折扣）
- `images`: 多张图片
- `description`: 详细描述
- `features`: 功能特色
- `specifications`: 技术规格
- `stock`: 库存
- `isFeatured`: 特色商品标记
- `isOnSale`: 促销标记

## 🖼️ 图片管理

### 图片要求
- **格式**: JPG, PNG, WebP
- **尺寸**: 建议 400x400px（列表）和 600x600px（详情）
- **大小**: 小于 500KB
- **质量**: 高质量，清晰度好

### 图片存储选项

#### 1. 外部图片服务（当前使用）
```typescript
// 使用 Unsplash 等免费图片服务
image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
```

#### 2. 本地图片存储
```typescript
// 将图片放在 public/images/products/ 目录下
image: '/images/products/headphones.jpg'
```

#### 3. CDN服务
```typescript
// 使用 AWS S3, Cloudinary 等CDN服务
image: 'https://your-cdn.com/products/headphones.jpg'
```

## 📝 商品编辑最佳实践

### 1. 商品命名
- ✅ 使用清晰、描述性的名称
- ✅ 包含品牌和型号信息
- ❌ 避免过于复杂的名称

### 2. 价格设置
- ✅ 使用两位小数
- ✅ 设置合理的原价和现价
- ✅ 定期更新价格

### 3. 图片选择
- ✅ 使用高质量、清晰的产品图片
- ✅ 提供多个角度的图片
- ✅ 确保图片背景简洁

### 4. 描述编写
- ✅ 突出产品主要功能和优势
- ✅ 使用简洁明了的语言
- ✅ 包含技术规格和参数

### 5. 分类管理
- ✅ 选择合适的商品分类
- ✅ 保持分类体系的一致性
- ✅ 定期检查和更新分类

## 🔄 批量操作

### 添加多个商品
```typescript
// 在 products.ts 中添加多个商品
export const products: Product[] = [
  // 现有商品...
  {
    id: '7',
    name: 'New Product 1',
    price: 99.99,
    // ...
  },
  {
    id: '8',
    name: 'New Product 2',
    price: 149.99,
    // ...
  }
]
```

### 批量更新价格
```typescript
// 批量调整价格（例如：所有商品涨价10%）
export const products: Product[] = originalProducts.map(product => ({
  ...product,
  price: product.price * 1.1,
  originalPrice: product.originalPrice ? product.originalPrice * 1.1 : undefined
}))
```

### 批量设置促销
```typescript
// 批量设置促销商品
export const products: Product[] = originalProducts.map(product => ({
  ...product,
  isOnSale: product.price < 200, // 价格低于200的商品设为促销
  originalPrice: product.isOnSale ? product.price * 1.2 : product.originalPrice
}))
```

## 🚀 高级功能

### 1. 商品搜索
```typescript
// 在 products.ts 中已实现搜索功能
export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description?.toLowerCase().includes(lowercaseQuery) ||
    product.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}
```

### 2. 分类筛选
```typescript
// 按分类筛选商品
export const getProductsByCategory = (category: string) => {
  if (category === 'All') return products
  return products.filter(product => product.category === category)
}
```

### 3. 特色商品
```typescript
// 获取特色商品
export const getFeaturedProducts = () => products.filter(product => product.isFeatured)
```

## 📞 技术支持

如果在商品管理过程中遇到问题，可以：

1. **查看控制台错误**：打开浏览器开发者工具查看错误信息
2. **检查数据格式**：确保商品数据符合接口定义
3. **验证图片链接**：确保图片URL可以正常访问
4. **重启开发服务器**：`npm run dev`

## 🔮 未来改进计划

- [ ] 集成管理后台系统
- [ ] 添加商品库存管理
- [ ] 实现商品评价系统
- [ ] 添加商品推荐算法
- [ ] 集成支付系统
- [ ] 添加订单管理功能 