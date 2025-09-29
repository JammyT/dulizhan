export interface TemplateProduct {
  id: string
  name: string
  model: string
  description: string
  size: string
  perSheet: number
  color: string
  category: 'address' | 'shipping' | 'return'
  image: string
  downloadFormats: DownloadFormat[]
}

export interface DownloadFormat {
  id: string
  name: string
  format: 'doc' | 'pdf' | 'ai' | 'pages'
  icon: string
  fileName: string
  fileSize: string
}

// 可用的模板分类
export const templateCategories = [
  { id: 'all', name: 'ALL', active: true },
  { id: 'address', name: 'Address Labels' }
]

// 可用的尺寸筛选
export const templateSizes = [
  '1"×2-5/8',
  '3-1/3"×4"'
]

// 下载格式配置
export const downloadFormats: DownloadFormat[] = [
  {
    id: 'word',
    name: 'Word (.doc)',
    format: 'doc',
    icon: '📄',
    fileName: '',
    fileSize: ''
  },
  {
    id: 'pdf',
    name: 'Adobe PDF (.pdf)',
    format: 'pdf',
    icon: '📋',
    fileName: '',
    fileSize: ''
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    format: 'ai',
    icon: '🎨',
    fileName: '',
    fileSize: ''
  },
  {
    id: 'pages',
    name: 'Pages',
    format: 'pages',
    icon: '📝',
    fileName: '',
    fileSize: ''
  }
]

// 模板产品数据
export const templateProducts: TemplateProduct[] = [
  {
    id: 'aplt30',
    name: 'Address Labels',
    model: 'APLT30',
    description: '1"×2-5/8", 30 per Sheet, White',
    size: '1"×2-5/8',
    perSheet: 30,
    color: 'White',
    category: 'address',
    image: '/api/placeholder/300/300',
    downloadFormats: downloadFormats.map(format => ({
      ...format,
      fileName: `APLT30_template.${format.format}`,
      fileSize: format.format === 'pdf' ? '1.2 MB' : format.format === 'doc' ? '890 KB' : format.format === 'ai' ? '2.1 MB' : '1.5 MB'
    }))
  },
  {
    id: 'aplt06',
    name: 'Address Labels',
    model: 'APLT06',
    description: '3-1/3×4, 6 per sheet, White',
    size: '3-1/3"×4"',
    perSheet: 6,
    color: 'White',
    category: 'address',
    image: '/api/placeholder/300/300',
    downloadFormats: downloadFormats.map(format => ({
      ...format,
      fileName: `APLT06_template.${format.format}`,
      fileSize: format.format === 'pdf' ? '980 KB' : format.format === 'doc' ? '750 KB' : format.format === 'ai' ? '1.8 MB' : '1.2 MB'
    }))
  }
]

// 根据分类筛选模板
export const getTemplatesByCategory = (category: string): TemplateProduct[] => {
  if (category === 'all') {
    return templateProducts
  }
  return templateProducts.filter(template => template.category === category)
}

// 根据尺寸筛选模板
export const getTemplatesBySize = (size: string): TemplateProduct[] => {
  return templateProducts.filter(template => template.size === size)
}

// 根据ID获取模板
export const getTemplateById = (id: string): TemplateProduct | undefined => {
  return templateProducts.find(template => template.id === id)
}
