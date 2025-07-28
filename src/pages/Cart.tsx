import { Link } from 'react-router-dom'
import { Plus, Minus, X, ShoppingBag, ExternalLink } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { useCart } from '../context/CartContext'
import { getProductById } from '../data/products'

const Cart = () => {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity }
    })
  }

  const removeItem = (id: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  // 获取有亚马逊链接的商品
  const getItemsWithAmazonLinks = () => {
    return state.items.filter(item => {
      const product = getProductById(item.id)
      return product?.amazonLink
    })
  }

  // 批量跳转到亚马逊
  const openAllAmazonLinks = () => {
    const itemsWithLinks = getItemsWithAmazonLinks()
    itemsWithLinks.forEach(item => {
      const product = getProductById(item.id)
      if (product?.amazonLink) {
        window.open(product.amazonLink, '_blank', 'noopener,noreferrer')
      }
    })
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container py-16">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/products">
              <Button size="lg">Start Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const itemsWithAmazonLinks = getItemsWithAmazonLinks()
  const hasAmazonItems = itemsWithAmazonLinks.length > 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{state.items.length} item(s) in your cart</p>
          {hasAmazonItems && (
            <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-orange-800 text-sm">
                💡 <strong>Note:</strong> Since we don't handle payments directly, you can purchase these items on Amazon. 
                Click "View in Amazon" buttons below to go directly to the product pages.
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => {
              const product = getProductById(item.id)
              const hasAmazonLink = product?.amazonLink
              
              return (
              <Card key={item.id}>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-3 py-1 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-50"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="text-right min-w-0">
                      <p className="font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-gray-400 hover:text-red-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                  
                  {/* Amazon Link Button */}
                  {hasAmazonLink && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a
                        href={product.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2"
                      >
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View in Amazon
                        </Button>
                      </a>
                    </div>
                  )}
              </Card>
              )
            })}

            <div className="flex justify-between items-center pt-4">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Link to="/products">
                <Button variant="ghost">Continue Shopping</Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-medium">${(state.total * 0.08).toFixed(2)}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Total:</span>
                  <span className="font-bold text-xl">${(state.total * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3">
                {hasAmazonItems ? (
                  <>
                    <Button 
                      className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600" 
                      size="lg"
                      variant="outline"
                      onClick={openAllAmazonLinks}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Buy All on Amazon
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Opens Amazon product pages in new tabs
                    </p>
                  </>
                ) : (
                  <Button className="w-full" size="lg" disabled>
                    No Amazon Links Available
                </Button>
                )}
                <Button variant="outline" className="w-full">
                  Save for Later
                </Button>
              </div>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure checkout on Amazon</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart 