import { Link } from 'react-router-dom'
import { TemplateProduct } from '../data/templates'

interface TemplateCardProps {
  template: TemplateProduct
}

// 生成标签格式的SVG图像
const generateLabelSVG = (perSheet: number, size: string) => {
  let rows = 1, cols = 1
  
  // 根据每页数量确定布局
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
  
  // 计算适当的宽高比，保持A4比例
  const aspectRatio = 210 / 297 // A4纸张比例 (宽/高)
  const containerWidth = 200
  const containerHeight = containerWidth / aspectRatio // 约283
  
  // 限制最大高度避免卡片过高
  const maxHeight = 180
  const finalHeight = Math.min(containerHeight, maxHeight)
  const finalWidth = finalHeight * aspectRatio
  
  return (
    <div className="flex justify-center items-center" style={{ height: '180px' }}>
      <svg 
        width={finalWidth} 
        height={finalHeight} 
        viewBox={`0 0 ${finalWidth} ${finalHeight}`} 
        className="border border-gray-300 bg-white rounded shadow-sm"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* A4 页面背景 */}
        <rect 
          x="0" 
          y="0" 
          width={finalWidth} 
          height={finalHeight} 
          fill="white" 
          stroke="#E5E7EB" 
          strokeWidth="1"
        />
        
        {/* 标签网格 */}
        {Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols }, (_, col) => (
            <rect
              key={`${row}-${col}`}
              x={8 + col * ((finalWidth - 16) / cols)}
              y={8 + row * ((finalHeight - 16) / rows)}
              width={(finalWidth - 16) / cols - 1}
              height={(finalHeight - 16) / rows - 1}
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="0.8"
            />
          ))
        )}
      </svg>
    </div>
  )
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  return (
    <Link to={`/template/${template.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 p-6">
        {/* 标签预览图 */}
        <div className="flex justify-center mb-4">
          {generateLabelSVG(template.perSheet, template.size)}
        </div>
        
        {/* 产品信息 */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {template.name}
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            Model: {template.model}
          </p>
          <p className="text-sm text-gray-600">
            {template.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default TemplateCard
