export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  rating: number
  reviews: number
  category: string
  description?: string
  features?: string[]
  specifications?: Record<string, string>
  stock?: number
  sku?: string
  weight?: number
  dimensions?: {
    length: number
    width: number
    height: number
  }
  tags?: string[]
  isFeatured?: boolean
  isOnSale?: boolean
  amazonLink?: string
  createdAt?: string
  updatedAt?: string
}

export const products: Product[] =[
  {
    id: '1',
    name: '8 Sheet 240 Pcs Cable Labels',
    price: 4.96,
    originalPrice: 5.99,
    image: 'https://m.media-amazon.com/images/I/718EsoqDa2L._AC_SL1500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/718EsoqDa2L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61tJP-ezv4L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71TeI6vZjRL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71fOpufWc8L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51tXZEaNafL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61eAfFqNL5L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/617P3AvxCRL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61iEsbyzBAL._AC_SL1500_.jpg'
    ],
    rating: 4.4,
    reviews: 1247,
    category: 'Cable Labels',
    description: '8 Sheet 240 Pcs Cable Labels for Management, Colorful Waterproof Cord Tags for Electronics, Self Adhesive Tear Resistant Wire Labels for Laser Printer and Handwriting.',
    features: [
      'Cable Labels Tag Size - A4 size 210 mm x 297 mm (sheet size); 3.31 x 1.02 inch (each sticker size, please see the Second Pictures). Quantity: 8 sheets (30 pcs small label per sheet, 240 pcs totally). Contains 8 colors, Including: Pink, Green, Red, White, Blue, Orange, Brown, Yellow.',
      'Advantages – these durable cord labels for electronics are tear resistant, oil-proof, high temperature resistant, can stay in shape and last long, these ethernet cable labels are perfect for both indoor and outdoor use.',
      'Widely Usages - Our waterproof cord labels tags write on can be used in homes, offices, cars, and other places. They can help you organize messy cables and wires more efficiently. Different colors allow you to distinguish different cables in a bunch of cables easily. Perfect for organizing ethernet cords, computer cords, charger cords, electrical cords, power cords, and so on.',
      'Suitable for Handwriting & Laser Printer - This cable labels are suitable for laser printer, you can print the text on the label. And you can write on it with pens or markers as you need. (PLEASE NOTE: NOT compatible with inkjet printers.)',
      'We are responsible for every speaker labels sold.If you have any product problems, please contact us. Our service team will respond quickly to your problems within 24 hours.'
    ],
    specifications: { 
      'Size': 'A4',
      'Number of Labels': '240',
      'Material Type': 'Vinyl',
      'Sensitivity': '110dB',
      'Color': '8 Sheet/8 Colors (240 Pcs)',
      'Item Shape': 'Rectangular'
    },
    stock: 50,
    sku: 'Cable-8240',
    weight: 0.25,
    dimensions: {
      length: 18,
      width: 16,
      height: 8
    },
    tags: ['wireless'],
    isFeatured: true,
    isOnSale: true,
    amazonLink: 'https://www.amazon.com/dp/B09R29CL8P',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15'
  },
  {
    id: '2',
    name: '16 Sheet 480 Pcs Cable Labels',
    price: 7.17,
    originalPrice: 7.99,
    image: 'https://m.media-amazon.com/images/I/718EsoqDa2L._AC_SL1500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/718EsoqDa2L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61QpZKWGJCL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71TeI6vZjRL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71fOpufWc8L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51tXZEaNafL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61eAfFqNL5L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/617P3AvxCRL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61iEsbyzBAL._AC_SL1500_.jpg'
    ],
    rating: 4.9,
    reviews: 2156,
    category: 'Cable Labels',
    description: '16 Sheet 480 Pcs Cable Labels - Colorful Waterproof Cord Tags for Electronics, Self-Adhesive, Tear Resistant Wire Labels.',
    features: [
      'Cable Labels Tag Size - A4 size 210 mm x 297 mm (sheet size); 3.31 x 1.02 inch (each sticker size, please see the Second Pictures). Quantity: 16 sheets (30 pcs small label per sheet, 480 pcs totally). Contains 8 colors, Including: Pink, Green, Red, White, Blue, Orange, Brown, Yellow.',
      'Advantages – these durable cord labels for electronics are tear resistant, oil-proof, high temperature resistant, can stay in shape and last long, these ethernet cable labels are perfect for both indoor and outdoor use.',
      'Widely Usages - Our waterproof cord labels tags write on can be used in homes, offices, cars, and other places. They can help you organize messy cables and wires more efficiently. Different colors allow you to distinguish different cables in a bunch of cables easily. Perfect for organizing ethernet cords, computer cords, charger cords, electrical cords, power cords, and so on.',
      'Suitable for Handwriting & Laser Printer - This cable labels are suitable for laser printer, you can print the text on the label. And you can write on it with pens or markers as you need. (PLEASE NOTE: NOT compatible with inkjet printers.)',
      'We are responsible for every speaker labels sold.If you have any product problems, please contact us. Our service team will respond quickly to your problems within 24 hours.'    ],
    specifications: {
      'Size': 'A4',
      'Number of Labels': '480',
      'Material Type': 'Vinyl',
      'Sensitivity': '220dB',
      'Color': '16 Sheet/8 Colors (480 Pcs)',
      'Item Shape': 'Rectangular'
    },
    stock: 350,
    sku: 'Cable-16480',
    weight: 0.05,
    dimensions: {
        length: 18,
        width: 16,
        height: 8
    },
    tags: ['wireless'],
    isFeatured: true,
    isOnSale: true,
    amazonLink: 'https://www.amazon.com/dp/B0B2N1J2SF',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-20'
  },
  {
    id: '3',
    name: '3500 Pcs 1 Inch Size Stickers for Clothing XS-XXXL',
    price: 8.99,
    originalPrice: 9.99,
    image: 'https://m.media-amazon.com/images/I/71wUQWuwnjL._AC_SL1500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/71wUQWuwnjL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/710Xqxpy4YL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71cwH+0remL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61S8bRk7LjL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71jkypAQzGL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71Q84IZnBIL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71nFkJi-S6L._AC_SL1500_.jpg'
    ],
    rating: 4.7,
    reviews: 892,
    category: 'Clothing Size Stickers',
    description: '3500 Pcs 1 Inch Size Stickers for Clothing XS-XXXL, Self Adhesive Clothing Shirt Size Stickers Rolls, Round Black Apparel Size Labels Stickers for T-Shirts Trousers Skirt Retail & Home.',
    features: [
      'Package Including - 7 sizes of 3500 pcs 1 inch size stickers for clothing (XS, S, M, L, XL, XXL, XXXL), each size has 500 stickers, enough to meet all your needs.',
      'Premium Material - The Wmiwulien clothing size stickers are made of high-quality paper, and it will not stain or damage the fabric.',
      'Versatile & Organize - Self-Adhesive size stickers work finely on fabric, plastic packaging, paper and most surfaces. It is a good way to organize and quickly view the size in the inventory.',
      'Easy to Use - Simply easy to peel and stick, then sell! Stickers are round, ensuring they are easy to peel off of the adhesive roll.',
      'Long Lasting - The majority of these size stickers are safe to be put on clothing or fabric, and many are made with environment-friendly ink that will last for a long time. Permanent adhesive are made from durable coating and adhere firmly which can stick on most surfaces, so you do not have to be afraid that it will come down.'
    ],
    specifications: {
      'Color': '7 Rolls',
      'Size': 'XS, S, M, L, XL, XXL, XXXL',
      'Material': 'Paper',
      'quantity': '3500',
      'Diameter': '1 Inch',
      'Item Shape': 'Round'
    },
    stock: 15,
    sku: 'CMBQ-7-500',
    weight: 1.2,
    dimensions: {
      length: 12,
      width: 8,
      height: 8
    },
    tags: ['Size Stickers'],
    isFeatured: true,
    isOnSale: true,
    amazonLink: 'https://www.amazon.com/dp/B0D5HWZ878',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18'
  },
  {
    id: '4',
    name: '2500 Pcs 1 Inch Size Stickers for Clothing S-XXL',
    price: 8.59,
    originalPrice: 9.59,
    image: 'https://m.media-amazon.com/images/I/61zF4jMJWwL._AC_SL1500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/61zF4jMJWwL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/711JVMT-gYL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61-BbgI6l7L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71PXwXgH2OL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71vKv6b2V8L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71SRzUbdvUL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71RDwoFnn0L._AC_SL1500_.jpg'
    ],
    rating: 4.6,
    reviews: 756,
    category: 'Clothing Size Stickers',
    description: '2500 Pcs 1 Inch Size Stickers for Clothing S-XXL, Self Adhesive Round Clothing Shirt Labels Rolls for T-Shirts Trousers Skirt Retail & Home.',
    features: [
      'Package Including - 5 sizes of 2500 pcs 1 inch size stickers for clothing (S, M, L, XL, XXL), each size has 500 stickers, enough to meet all your needs.',
      'Premium Material - The Wmiwulien clothing size stickers are made of high-quality paper, and it will not stain or damage the fabric.',
      'Versatile & Organize - Self-Adhesive size stickers work finely on fabric, plastic packaging, paper and most surfaces. It is a good way to organize and quickly view the size in the inventory.',
      'Easy to Use - Simply easy to peel and stick, then sell! Stickers are round, ensuring they are easy to peel off of the adhesive roll.',
      'Long Lasting - The majority of these size stickers are safe to be put on clothing or fabric, and many are made with environment-friendly ink that will last for a long time. Permanent adhesive are made from durable coating and adhere firmly which can stick on most surfaces, so you do not have to be afraid that it will come down.'
    ],
    specifications: {
      'Color': '5 Rolls',
      'Size': 'S, M, L, XL, XXL',
      'Material': 'Paper',
      'quantity': '2500',
      'Diameter': '1 Inch',
      'Item Shape': 'Round'
    },
    stock: 25,
    sku: 'CMBQ-5-500',
    weight: 0.8,
    dimensions: {
      length: 10,
      width: 6,
      height: 6
    },
    tags: ['Size Stickers', 'Clothing Labels'],
    isFeatured: true,
    isOnSale: true,
    amazonLink: 'https://www.amazon.com/dp/B0DG32J7PS',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: '5',
    name: 'Size Stickers Strips for Clothing',
    price: 28.99,
    originalPrice: 29.99,
    image: 'https://m.media-amazon.com/images/I/71iIJ6gNWsL._AC_SL1500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/71iIJ6gNWsL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71j6zA9rM2L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71hpGBL90UL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/716OqZZ8bpL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/812XnWRxv0L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81hjppwUe9L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/810iO8-8hIL._AC_SL1500_.jpg'
    ],
    rating: 4.8,
    reviews: 56,
    category: 'Clothing Size Stickers',
    description: '1.25"x5" 1750 Pcs Clear Tshirt Size Long Stickers Strips for Clothing Retail Apparel Adhesive Label (XS-XXXL), 7 Rolls 250-Strip Black Apparel Size Label Stickers for T-Shirt Trouser Skirt Retail Home',
    features: [
      'Seven clear size stickers strips rolls include seven distinct sizes: X-Small, Small, Medium, Large, X-Large, XX-Large, and XXX-Large, with 250 labels per roll. This 1750-label set is designed to meet diverse labeling requirements with versatile sizing options.',
      'Transparent size stickers strips feature bold black lettering on a white background, offering a sleek and highly visible design. Each strip measures 1.25” x 5”, perfectly sized for labeling shirts, sweaters, coats, trousers, and more. Effortlessly identify the right size at a glance with this intuitive classification solution.',
      'Wmiwulien size strips labels feature high-strength adhesive backing, ensuring secure attachment to shirts, sweaters, pants, and most surfaces. The premium glue formula offers durable adhesion that resists peeling while remaining fabric-safe, no risk of damage or residue on clothing.',
      'These clothing size strips peel off smoothly without leaving any sticky residue, making them ideal for temporarily labeling clothing sizes. Perfect for retail use, they let you inform customers about sizing while keeping products damage-free.',
      'Wmiwulien prioritizes safety in both production and use, selecting top-grade plastics for our size strip stickers. Engineered to resist water, oil, and tearing, these odorless labels combine durability with peace of mind, shop with confidence!'
    ],
    specifications: {
      'Color': 'Clear',
      'Size': '1.25"x5" Size Stickers Strips',
      'Material': 'Paper',
      'quantity': '1750 Pcs - 7 Rolls',
      'Diameter': '1.25"x5"',
      'Item Shape': 'Rectangular'
    },
    stock: 25,
    sku: 'CMBQ-7R-250S',
    weight: 0.8,
    dimensions: {
      length: 10,
      width: 6,
      height: 6
    },
    tags: ['Size Stickers', 'Clothing Labels'],
    isFeatured: true,
    isOnSale: true,
    amazonLink: 'https://www.amazon.com/dp/B0F9LKPXBJ',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: '6',
    name: 'Size Stickers for Clothing',
    price: 5.99,
    originalPrice: 6.99,
    image: 'https://m.media-amazon.com/images/I/71qEky21MrL._AC_SL1500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/71qEky21MrL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81NmW20rsXL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61uRuM5duvL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71277wYPHnL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81r33Uau+1L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81p+cn8BBjL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/811XmXQXuCL._AC_SL1500_.jpg'
    ],
    rating: 4.9,
    reviews: 112,
    category: 'Clothing Size Stickers',
    description: '4200 Pcs Size Stickers for Clothing XS-XXXL, Wmiwulien 1/2" 28 Sheets Self Adhesive Labels, Round Black Apparel Size Label Stickers for T-Shirts Trousers Skirt Retail Home.',
    features: [
      'Package Including - 7 sizes of 28 sheets 4200 pcs 0.5 inch size stickers for clothing (XS, S, M, L, XL, XXL, 3XL), XS-2 Sheets-300 Pcs / S-5 Sheets-750 pcs/ M-5 Sheets-750 pcs/ L-7 Sheets-1050 pcs/ XL-5 Sheets-750 pcs/ 2XL-2 Sheets-300 pcs / 3XL-2 Sheets-300 pcs, enough to meet all your needs.',
      'Premium Material - The Wmiwulien clothing size stickers are made of high-quality paper, and it will not stain or damage the fabric.',
      'Versatile & Organize - Self-Adhesive size stickers work finely on fabric, plastic packaging, paper and most surfaces. It is a good way to organize and quickly view the size in the inventory.',
      'Easy to Use - Simply easy to peel and stick, then sell! Stickers are round, ensuring they are easy to peel off of the adhesive roll.',
      'Long Lasting - The majority of these size stickers are safe to be put on clothing or fabric, and many are made with environment-friendly ink that will last for a long time. Permanent adhesive are made from durable coating and adhere firmly which can stick on most surfaces, so you do not have to be afraid that it will come down.'
    ],
    specifications: {
      'Color': 'Black',
      'Material': 'Paper',
      'quantity': '4200',
      'Diameter': '1/2"',
      'Item Shape': 'Round'
    },
    stock: 25,
    sku: 'WM-CMBQ-4200',
    weight: 0.8,
    dimensions: {
      length: 10,
      width: 6,
      height: 6
    },
    tags: ['Size Stickers', 'Clothing Labels'],
    isFeatured: true,
    isOnSale: true,
    amazonLink: 'https://www.amazon.com/dp/B0DSG8NVZP',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  }
]

export const categories = ['All', 'Cable Labels', 'Clothing Size Stickers']

export const getFeaturedProducts = () => products.filter(product => product.isFeatured)

export const getProductById = (id: string) => products.find(product => product.id === id)

export const getProductsByCategory = (category: string) => {
  if (category === 'All') return products
  return products.filter(product => product.category === category)
}

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description?.toLowerCase().includes(lowercaseQuery) ||
    product.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
} 