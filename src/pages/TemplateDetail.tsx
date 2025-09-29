import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, ArrowLeft } from 'lucide-react'
import { getTemplateById } from '../data/templates'
import { downloadTemplate } from '../utils/downloadHelper'

// 软件图标组件
const SoftwareIcon = ({ format }: { format: string }) => {
  const icons = {
    doc: (
      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
        <div className="w-10 h-12 bg-blue-600 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">W</span>
        </div>
      </div>
    ),
    pdf: (
      <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
        <div className="w-10 h-12 bg-red-600 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">PDF</span>
        </div>
      </div>
    ),
    ai: (
      <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
        <div className="w-10 h-12 bg-orange-600 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">Ai</span>
        </div>
      </div>
    ),
    pages: (
      <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
        <div className="w-10 h-12 bg-yellow-600 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">P</span>
        </div>
      </div>
    )
  }
  
  return icons[format as keyof typeof icons] || icons.doc
}

// 生成标签预览SVG
const generateLabelPreview = (perSheet: number) => {
  let rows = 1, cols = 1
  
  switch (perSheet) {
    case 30:
      rows = 10
      cols = 3
      break
    case 6:
      rows = 3
      cols = 2
      break
    case 10:
      rows = 5
      cols = 2
      break
    case 60:
      rows = 15
      cols = 4
      break
    case 80:
      rows = 20
      cols = 4
      break
    default:
      rows = 3
      cols = 2
  }
  
  // A4 纸张比例 (210mm × 297mm)
  const aspectRatio = 210 / 297
  const baseWidth = 300
  const baseHeight = baseWidth / aspectRatio // 约424
  
  return (
    <div className="bg-white p-8 border-2 border-gray-300 rounded-lg shadow-lg">
      <div className="flex justify-center">
        <svg 
          width={baseWidth} 
          height={baseHeight} 
          viewBox={`0 0 ${baseWidth} ${baseHeight}`} 
          className="max-w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* A4 页面背景 */}
          <rect 
            x="0" 
            y="0" 
            width={baseWidth} 
            height={baseHeight} 
            fill="white" 
            stroke="#E5E7EB" 
            strokeWidth="2"
          />
          
          {/* 页面标题 */}
          <text 
            x={baseWidth / 2} 
            y="20" 
            textAnchor="middle" 
            className="text-xs fill-gray-400"
            fontSize="12"
          >
            A4 Size Template ({perSheet} labels per sheet)
          </text>
          
          {/* 标签网格 */}
          {Array.from({ length: rows }, (_, row) =>
            Array.from({ length: cols }, (_, col) => (
              <rect
                key={`${row}-${col}`}
                x={20 + col * ((baseWidth - 40) / cols)}
                y={30 + row * ((baseHeight - 50) / rows)}
                width={(baseWidth - 40) / cols - 2}
                height={(baseHeight - 50) / rows - 2}
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1"
                rx="2"
              />
            ))
          )}
          
          {/* 边距指示线 */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F3F4F6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width={baseWidth} height={baseHeight} fill="url(#grid)" opacity="0.3"/>
        </svg>
      </div>
    </div>
  )
}

const TemplateDetail = () => {
  const { id } = useParams<{ id: string }>()
  const template = id ? getTemplateById(id) : null
  
  if (!template) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Template not found</h2>
          <Link 
            to="/template" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Templates
          </Link>
        </div>
      </div>
    )
  }

  const handleDownload = async (downloadFormat: any) => {
    try {
      await downloadTemplate({
        templateId: template.id,
        format: downloadFormat.format,
        fileName: downloadFormat.fileName
      })
    } catch (error) {
      alert('Download failed. Please try again.')
      console.error('Download error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with dark background */}
      <div className="bg-gray-800 text-white py-12">
        <div className="container">
          <div className="mb-6">
            <nav className="text-sm text-gray-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/template" className="hover:text-white">Templates</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{template.category} labels</span>
            </nav>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold"
          >
            Software driver download
          </motion.h1>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Template Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {generateLabelPreview(template.perSheet)}
          </motion.div>

          {/* Right Column - Template Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Template Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {template.name}
              </h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Model:</strong> {template.model}</p>
                <p><strong>Size:</strong> {template.description}</p>
              </div>
            </div>

            {/* Download Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Download blank templates 
                <span className="text-gray-500 font-normal">(Select your software below)</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {template.downloadFormats.map((format) => (
                  <motion.button
                    key={format.id}
                    onClick={() => handleDownload(format)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 text-center group"
                  >
                    <div className="flex justify-center mb-3">
                      <SoftwareIcon format={format.format} />
                    </div>
                    <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {format.name}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {format.fileSize}
                    </p>
                    <div className="flex items-center justify-center mt-2 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download className="h-4 w-4 mr-1" />
                      <span className="text-sm">Download</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-6">
              <Link 
                to="/template" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Templates
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TemplateDetail
