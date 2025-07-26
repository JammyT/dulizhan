import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, Filter, Grid, List, Heart } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { useCart } from '../context/CartContext'
import { products, categories, searchProducts } from '../data/products'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' }
]

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  
  // 分页状态
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8
  
  // 从URL参数获取搜索查询
  const searchQuery = searchParams.get('search') || ''
  const categoryQuery = searchParams.get('category') || ''
  
  // 价格范围筛选状态
  const [priceRanges, setPriceRanges] = useState({
    under50: false,
    '50-100': false,
    '100-200': false,
    over200: false
  })
  
  // 评分筛选状态
  const [ratingFilters, setRatingFilters] = useState({
    '4': false,
    '3': false,
    '2': false,
    '1': false
  })
  
  const { dispatch } = useCart()

  // 处理URL参数
  useEffect(() => {
    if (categoryQuery && categoryQuery !== selectedCategory) {
      // 将URL参数转换为首字母大写的格式以匹配商品数据
      const formattedCategory = categoryQuery
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
      setSelectedCategory(formattedCategory)
    }
  }, [categoryQuery, selectedCategory])

  // 页面滚动到顶部
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [categoryQuery, searchQuery])

  // 当筛选条件改变时，重置到第一页
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery, priceRanges, ratingFilters, sortBy])

  const addToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }
    })
  }

  // 价格范围筛选函数
  const isInPriceRange = (price: number) => {
    if (!Object.values(priceRanges).some(Boolean)) return true // 如果没有选择任何价格范围，显示所有商品
    
    if (priceRanges.under50 && price < 50) return true
    if (priceRanges['50-100'] && price >= 50 && price <= 100) return true
    if (priceRanges['100-200'] && price > 100 && price <= 200) return true
    if (priceRanges.over200 && price > 200) return true
    
    return false
  }

  // 评分筛选函数
  const meetsRatingFilter = (rating: number) => {
    if (!Object.values(ratingFilters).some(Boolean)) return true // 如果没有选择任何评分，显示所有商品
    
    if (ratingFilters['4'] && rating >= 4) return true
    if (ratingFilters['3'] && rating >= 3) return true
    if (ratingFilters['2'] && rating >= 2) return true
    if (ratingFilters['1'] && rating >= 1) return true
    
    return false
  }

  // 首先应用搜索筛选
  const searchFilteredProducts = searchQuery 
    ? searchProducts(searchQuery)
    : products

  // 然后应用其他筛选条件
  const filteredProducts = searchFilteredProducts.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
    const priceMatch = isInPriceRange(product.price)
    const ratingMatch = meetsRatingFilter(product.rating)
    
    return categoryMatch && priceMatch && ratingMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  // 分页计算
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = sortedProducts.slice(startIndex, endIndex)

  // 生成页码数组
  const getPageNumbers = () => {
    const pages: number[] = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      // 如果总页数少于等于最大可见页数，显示所有页码
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // 否则显示当前页附近的页码
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
      
      // 调整起始页，确保显示足够的页码
      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1)
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }
    }
    
    return pages
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Products'}
          </h1>
          <p className="text-gray-600">
            {searchQuery 
              ? `Found ${filteredProducts.length} products matching your search`
              : 'Discover our amazing collection of products'
            }
          </p>
          {searchQuery && (
            <div className="mt-4">
              <Link 
                to="/products" 
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                ← Clear search and view all products
              </Link>
            </div>
          )}
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-100 text-primary-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    checked={priceRanges.under50}
                    onChange={(e) => setPriceRanges(prev => ({ ...prev, under50: e.target.checked }))}
                  />
                  <span className="text-sm text-gray-600">Under $50</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    checked={priceRanges['50-100']}
                    onChange={(e) => setPriceRanges(prev => ({ ...prev, '50-100': e.target.checked }))}
                  />
                  <span className="text-sm text-gray-600">$50 - $100</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    checked={priceRanges['100-200']}
                    onChange={(e) => setPriceRanges(prev => ({ ...prev, '100-200': e.target.checked }))}
                  />
                  <span className="text-sm text-gray-600">$100 - $200</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    checked={priceRanges.over200}
                    onChange={(e) => setPriceRanges(prev => ({ ...prev, over200: e.target.checked }))}
                  />
                  <span className="text-sm text-gray-600">Over $200</span>
                </label>
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2"
                      checked={ratingFilters[rating.toString() as keyof typeof ratingFilters]}
                      onChange={(e) => setRatingFilters(prev => ({ 
                        ...prev, 
                        [rating.toString()]: e.target.checked 
                      }))}
                    />
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-sm text-gray-600">& up</span>
                    </div>
                  </label>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    <Filter className="h-4 w-4" />
                    Filters
                  </button>
                  <span className="text-sm text-gray-600">
                    {filteredProducts.length} products found
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-primary-50 text-primary-600' : 'text-gray-600'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-primary-50 text-primary-600' : 'text-gray-600'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {currentProducts.map((product) => (
                <Card key={product.id} hover className="overflow-hidden">
                  <div className={`${viewMode === 'list' ? 'flex gap-4' : ''}`}>
                    <Link to={`/products/${product.id}`} className={`relative ${viewMode === 'list' ? 'w-32 h-32' : 'aspect-square mb-4'} block`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                      <button 
                        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 z-10"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Heart className="h-4 w-4 text-gray-600" />
                      </button>
                      {product.isOnSale && (
                        <div className="absolute top-2 left-2 bg-accent-500 text-white px-2 py-1 text-xs font-semibold rounded">
                          SALE
                        </div>
                      )}
                    </Link>
                    
                    <div className={`space-y-2 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <Link to={`/products/${product.id}`}>
                        <h3 className="font-semibold text-gray-900 line-clamp-2 hover:text-primary-600 transition-colors">{product.name}</h3>
                      </Link>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          className="flex-1"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </Button>
                        {product.amazonLink ? (
                          <a 
                            href={product.amazonLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button variant="outline" size="sm" className="w-full px-4 border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600">
                              View in Amazon
                            </Button>
                          </a>
                        ) : (
                          <Link to={`/products/${product.id}`}>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  
                  {getPageNumbers().map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "primary" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products 