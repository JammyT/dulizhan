import { Link } from 'react-router-dom'
import { ArrowRight, Package, TrendingUp } from 'lucide-react'
import Card from '../components/ui/Card'
import { products } from '../data/products'
import { useEffect } from 'react'

const Categories = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [])
  // 获取所有分类及其商品数量
  const getCategoriesWithCounts = () => {
    const categoryCounts = products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    // 为每个分类分配图片和描述
    const categoryInfo = {
      'Cable Labels': {
        image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop',
        description: 'Professional cable management solutions for organized workspaces',
        color: 'from-blue-500 to-cyan-500'
      },
      'Clothing Size Stickers': {
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
        description: 'High-quality size labels for clothing and retail businesses',
        color: 'from-purple-500 to-pink-500'
      }
    }

    return Object.entries(categoryCounts).map(([category, count]) => ({
      name: category,
      count,
      image: categoryInfo[category as keyof typeof categoryInfo]?.image || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      description: categoryInfo[category as keyof typeof categoryInfo]?.description || 'Quality products for your needs',
      color: categoryInfo[category as keyof typeof categoryInfo]?.color || 'from-gray-500 to-gray-600'
    }))
  }

  const categories = getCategoriesWithCounts()

  // 获取每个分类的代表性商品
  const getFeaturedProductsByCategory = (categoryName: string) => {
    return products
      .filter(product => product.category === categoryName)
      .slice(0, 3) // 只取前3个商品作为代表
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Product Categories
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Explore our wide range of product categories and find exactly what you're looking for
            </p>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated product categories, each designed to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} hover className="overflow-hidden">
                <Link to={`/products?category=${category.name.toLowerCase()}`} className="block">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90 mb-2">{category.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                          {category.count} products
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Details */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get a preview of what each category has to offer with our featured products
            </p>
          </div>

          {categories.map((category, index) => {
            const featuredProducts = getFeaturedProductsByCategory(category.name)
            
            return (
              <div key={index} className="mb-16 last:mb-0">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  <Link 
                    to={`/products?category=${category.name.toLowerCase()}`}
                    className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    View all {category.count} products
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredProducts.map((product) => (
                    <Card key={product.id} hover className="overflow-hidden">
                      <Link to={`/products/${product.id}`} className="block">
                        <div className="aspect-square relative mb-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                          />
                          {product.isOnSale && (
                            <div className="absolute top-2 left-2 bg-accent-500 text-white px-2 py-1 text-xs font-semibold rounded">
                              SALE
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 line-clamp-2 mb-2 hover:text-primary-600 transition-colors">
                            {product.name}
                          </h4>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-900">${product.price}</span>
                            {product.originalPrice && product.originalPrice > product.price && (
                              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                            )}
                          </div>
                        </div>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {categories.length}
              </h3>
              <p className="text-gray-600">Product Categories</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {products.length}
              </h3>
              <p className="text-gray-600">Total Products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {Math.max(...categories.map(c => c.count))}
              </h3>
              <p className="text-gray-600">Largest Category</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Explore Our Products?
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Browse our complete product catalog and find the perfect items for your needs
            </p>
            <Link to="/products">
              <button className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
                View All Products
                <ArrowRight className="h-5 w-5 ml-2 inline" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Categories 