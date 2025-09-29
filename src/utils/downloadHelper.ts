// 下载辅助函数

export interface DownloadOptions {
  templateId: string
  format: string
  fileName: string
}

// 模拟下载功能 - 等待真实文件上传后替换
export const downloadTemplate = async ({ templateId, format, fileName }: DownloadOptions) => {
  try {
    // 构建文件路径
    const filePath = `/templates/${templateId}/${fileName}`
    
    // 检查文件是否存在（这里先模拟）
    const fileExists = await checkFileExists(filePath)
    
    if (!fileExists) {
      // 如果文件不存在，创建一个示例文件进行下载
      createSampleFile(fileName, format)
      return
    }
    
    // 创建下载链接
    const link = document.createElement('a')
    link.href = filePath
    link.download = fileName
    link.style.display = 'none'
    
    // 添加到DOM并触发下载
    document.body.appendChild(link)
    link.click()
    
    // 清理
    setTimeout(() => {
      document.body.removeChild(link)
    }, 100)
    
  } catch (error) {
    console.error('Download failed:', error)
    throw new Error('Download failed. Please try again later.')
  }
}

// 检查文件是否存在
const checkFileExists = async (filePath: string): Promise<boolean> => {
  try {
    const response = await fetch(filePath, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

// 创建示例文件进行下载（临时方案）
const createSampleFile = (fileName: string, format: string) => {
  let content = ''
  let mimeType = ''
  
  switch (format) {
    case 'doc':
      content = createDocContent(fileName)
      mimeType = 'application/msword'
      break
    case 'pdf':
      content = createPdfContent(fileName)
      mimeType = 'application/pdf'
      break
    case 'ai':
      content = createAiContent(fileName)
      mimeType = 'application/illustrator'
      break
    case 'pages':
      content = createPagesContent(fileName)
      mimeType = 'application/x-iwork-pages-sffpages'
      break
    default:
      content = `Template file: ${fileName}\nFormat: ${format}\nThis is a placeholder file.`
      mimeType = 'text/plain'
  }
  
  // 创建Blob并下载
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.style.display = 'none'
  
  document.body.appendChild(link)
  link.click()
  
  setTimeout(() => {
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }, 100)
}

// 创建不同格式的示例内容
const createDocContent = (fileName: string) => {
  return `This is a Microsoft Word template placeholder for ${fileName}.
  
Please replace this file with the actual template file.

Template Features:
- Professional label layout
- Print-ready format
- Easy to customize
- High-quality design

Instructions:
1. Open this file in Microsoft Word
2. Customize the labels with your content
3. Print on compatible label sheets
4. Apply labels as needed

For support, contact: support@risepekt.com`
}

const createPdfContent = (fileName: string) => {
  return `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
100 700 Td
(${fileName} - PDF Template Placeholder) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000015 00000 n 
0000000074 00000 n 
0000000120 00000 n 
0000000216 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
310
%%EOF`
}

const createAiContent = (fileName: string) => {
  return `Adobe Illustrator Template Placeholder
File: ${fileName}

This is a placeholder for the Adobe Illustrator template file.
Please replace with the actual .ai template file.

Template will include:
- Vector-based label designs
- Scalable graphics
- Professional typography
- Print-ready artwork

Contact support@risepekt.com for assistance.`
}

const createPagesContent = (fileName: string) => {
  return `Pages Template Placeholder
File: ${fileName}

This is a placeholder for the Apple Pages template file.
Please replace with the actual .pages template file.

Template features:
- Mac-optimized design
- Easy text editing
- Professional layouts
- Print-ready format

For help, contact: support@risepekt.com`
}

// 获取文件大小信息
export const getFileSize = (format: string): string => {
  const sizes = {
    doc: '890 KB',
    pdf: '1.2 MB',
    ai: '2.1 MB',
    pages: '1.5 MB'
  }
  
  return sizes[format as keyof typeof sizes] || '1.0 MB'
}
