import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ShoppingCart, Search, User, Menu, X, Clock, TrendingUp } from 'lucide-react'
import { useCart } from '../context/CartContext'
import Button from './ui/Button'
import { products, searchProducts } from '../data/products'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchHistory, setSearchHistory] = useState<string[]>([])
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { state } = useCart()

  // 从localStorage加载搜索历史
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory')
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory))
    }
  }, [])

  // 保存搜索历史到localStorage
  const saveSearchHistory = (query: string) => {
    const trimmedQuery = query.trim()
    if (trimmedQuery) {
      const newHistory = [trimmedQuery, ...searchHistory.filter(item => item !== trimmedQuery)].slice(0, 10)
      setSearchHistory(newHistory)
      localStorage.setItem('searchHistory', JSON.stringify(newHistory))
    }
  }

  // 生成搜索建议
  const generateSuggestions = (query: string) => {
    if (!query.trim()) {
      setSearchSuggestions([])
      return
    }
    
    const suggestions = products
      .map(product => product.name)
      .filter(name => name.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5)
    
    setSearchSuggestions(suggestions)
  }

  // 检查当前页面是否为指定路径
  const isCurrentPage = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const userInput = searchQuery.trim()
    if (userInput) {
      console.log('Searching with user input:', userInput) // 调试信息
      saveSearchHistory(userInput)
      navigate(`/products?search=${encodeURIComponent(userInput)}`)
      setSearchQuery('')
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    console.log('Searching with suggestion:', suggestion) // 调试信息
    setSearchQuery(suggestion)
    saveSearchHistory(suggestion)
    navigate(`/products?search=${encodeURIComponent(suggestion)}`)
    setShowSuggestions(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    generateSuggestions(value)
    setShowSuggestions(true)
  }

  const handleInputFocus = () => {
    setShowSuggestions(true)
  }

  const handleInputBlur = () => {
    // 延迟隐藏，让用户有时间点击建议
    setTimeout(() => setShowSuggestions(false), 200)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 确保Enter键使用用户输入的内容，而不是自动选择推荐
    if (e.key === 'Enter') {
      e.preventDefault()
      const userInput = searchQuery.trim()
      if (userInput) {
        console.log('Enter pressed - searching with user input:', userInput)
        saveSearchHistory(userInput)
        navigate(`/products?search=${encodeURIComponent(userInput)}`)
        setSearchQuery('')
        setShowSuggestions(false)
      }
    }
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Template', href: '/template' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AS</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Risepekt Store</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isCurrentPage(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:block flex-1 max-w-lg mx-8" ref={searchRef}>
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              
              {/* Search Suggestions Dropdown */}
              {showSuggestions && (searchQuery || searchHistory.length > 0) && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                  {/* Search Suggestions */}
                  {searchSuggestions.length > 0 && (
                    <div className="p-2">
                      <div className="flex items-center text-xs text-gray-500 mb-2 px-2">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Suggestions
                      </div>
                      {searchSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center"
                        >
                          <Search className="h-4 w-4 mr-2 text-gray-400" />
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Search History */}
                  {searchHistory.length > 0 && !searchQuery && (
                    <div className="p-2 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2 px-2">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          Recent searches
                        </div>
                        <button
                          onClick={() => {
                            setSearchHistory([])
                            localStorage.removeItem('searchHistory')
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          Clear
                        </button>
                      </div>
                      {searchHistory.slice(0, 5).map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(item)}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center"
                        >
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
            </div>
              )}
            </form>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon for Mobile */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-primary-600">
              <Search className="h-6 w-6" />
            </button>

            {/* User Account */}
            <Link to="/login" className="p-2 text-gray-600 hover:text-primary-600">
              <User className="h-6 w-6" />
            </Link>

            {/* Shopping Cart */}
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary-600">
              <ShoppingCart className="h-6 w-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent-500 text-white rounded-full text-xs flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isCurrentPage(item.href)
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <form onSubmit={handleSearch} className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onKeyDown={handleKeyDown}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  
                  {/* Mobile Search Suggestions Dropdown */}
                  {showSuggestions && (searchQuery || searchHistory.length > 0) && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                      {/* Search Suggestions */}
                      {searchSuggestions.length > 0 && (
                        <div className="p-2">
                          <div className="flex items-center text-xs text-gray-500 mb-2 px-2">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Suggestions
                          </div>
                          {searchSuggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center"
                            >
                              <Search className="h-4 w-4 mr-2 text-gray-400" />
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                      
                      {/* Search History */}
                      {searchHistory.length > 0 && !searchQuery && (
                        <div className="p-2 border-t border-gray-100">
                          <div className="flex items-center justify-between text-xs text-gray-500 mb-2 px-2">
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              Recent searches
                            </div>
                            <button
                              onClick={() => {
                                setSearchHistory([])
                                localStorage.removeItem('searchHistory')
                              }}
                              className="text-red-500 hover:text-red-700"
                            >
                              Clear
                            </button>
                          </div>
                          {searchHistory.slice(0, 5).map((item, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(item)}
                              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center"
                            >
                              <Clock className="h-4 w-4 mr-2 text-gray-400" />
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 