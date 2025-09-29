import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import TemplateCard from '../components/TemplateCard'
import { templateProducts, templateCategories, templateSizes, getTemplatesByCategory, getTemplatesBySize } from '../data/templates'

const Template = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSize, setSelectedSize] = useState('')
  const [showSizeFilter, setShowSizeFilter] = useState(false)
  
  // 获取筛选后的模板
  const getFilteredTemplates = () => {
    let filtered = getTemplatesByCategory(selectedCategory)
    
    if (selectedSize) {
      filtered = filtered.filter(template => template.size === selectedSize)
    }
    
    return filtered
  }
  
  const filteredTemplates = getFilteredTemplates()
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-4">
          <nav className="text-sm text-gray-600">
            <span>Home</span> / <span className="text-gray-900">Templates</span>
          </nav>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-64 flex-shrink-0">
            {/* Type Filter */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Type</h3>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="space-y-2">
                {templateCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Size</h3>
                <button 
                  onClick={() => setShowSizeFilter(!showSizeFilter)}
                  className="p-1"
                >
                  <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${
                    showSizeFilter ? 'rotate-180' : ''
                  }`} />
                </button>
              </div>
              
              {showSizeFilter && (
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedSize('')}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedSize === ''
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    All Sizes
                  </button>
                  {templateSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedSize === size
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''}
                {selectedCategory !== 'all' && (
                  <span> in {templateCategories.find(c => c.id === selectedCategory)?.name}</span>
                )}
                {selectedSize && (
                  <span> with size {selectedSize}</span>
                )}
              </p>
            </div>

            {/* Templates Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredTemplates.map((template) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <TemplateCard template={template} />
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No templates found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template
