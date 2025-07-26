import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Star, Heart, Truck, Shield, RefreshCw, Plus, Minus } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { useCart } from '../context/CartContext'
import { getProductById } from '../data/products'

const reviews = [
  {
    id: 1,
    user: 'John Smith',
    rating: 5,
    date: '2024-01-15',
    comment: 'Excellent sound quality and comfort. The noise cancellation works perfectly!'
  },
  {
    id: 2,
    user: 'Sarah Johnson',
    rating: 4,
    date: '2024-01-10',
    comment: 'Great headphones, battery life is amazing. Highly recommended.'
  },
  {
    id: 3,
    user: 'Mike Wilson',
    rating: 5,
    date: '2024-01-08',
    comment: 'Best purchase I made this year. Perfect for work and music.'
  }
]

const ProductDetail = () => {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const { dispatch } = useCart()

  // 滚动到页面顶部（无动画）
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [id])

  const product = getProductById(id || '')

  if (!product) {
    return <Navigate to="/products" replace />
  }

  const addToCart = () => {
    for (let i = 0; i < quantity; i++) {
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
  }

  const productImages = product.images || [product.image]

  // 根据评分范围显示星星
  const renderStars = (rating: number, size: 'sm' | 'md' = 'md') => {
    let fullStars = 0
    let hasHalfStar = false
    
    if (rating >= 4.8) {
      fullStars = 5
    } else if (rating >= 4.3) {
      fullStars = 4
      hasHalfStar = true
    } else if (rating >= 3.8) {
      fullStars = 4
    } else if (rating >= 3.3) {
      fullStars = 3
      hasHalfStar = true
    } else if (rating >= 2.8) {
      fullStars = 3
    } else if (rating >= 2.3) {
      fullStars = 2
      hasHalfStar = true
    } else if (rating >= 1.8) {
      fullStars = 2
    } else if (rating >= 1.3) {
      fullStars = 1
      hasHalfStar = true
    } else if (rating >= 0.8) {
      fullStars = 1
    }

    const starSize = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'

    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="relative">
            {i < fullStars ? (
              <Star className={`${starSize} text-yellow-400 fill-current`} />
            ) : i === fullStars && hasHalfStar ? (
              <div className="relative">
                <Star className={`${starSize} text-gray-300`} />
                <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                  <Star className={`${starSize} text-yellow-400 fill-current`} />
                </div>
              </div>
            ) : (
              <Star className={`${starSize} text-gray-300`} />
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-primary-600">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-primary-600">Products</a>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-accent-500 text-white px-2 py-1 text-sm font-semibold rounded">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button size="lg" onClick={addToCart} className="flex-1">
                  Add to Cart
                </Button>
                {product.amazonLink && (
                  <a 
                    href={product.amazonLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline" className="px-6 border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600">
                      View in Amazon
                    </Button>
                  </a>
                )}
                <Button size="lg" variant="outline" className="px-4">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            {product.features && (
              <Card>
                <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Shipping Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 text-sm">
                <Truck className="h-5 w-5 text-primary-600" />
                <span className="text-gray-600">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Shield className="h-5 w-5 text-primary-600" />
                <span className="text-gray-600">2 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <RefreshCw className="h-5 w-5 text-primary-600" />
                <span className="text-gray-600">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card>
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
              <p className="text-gray-600 leading-relaxed">
                These premium products are designed for customers who demand the best in quality and performance. 
                With advanced technology and superior craftsmanship, they're perfect for everyday use and special occasions.
              </p>
            </div>
          )}

          {activeTab === 'specifications' && product.specifications && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-900">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
                <Button variant="outline" size="sm">Write a Review</Button>
              </div>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{review.user}</span>
                        <div className="flex items-center">
                          {renderStars(review.rating, 'sm')}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

export default ProductDetail 