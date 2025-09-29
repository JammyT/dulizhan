import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react'
import Card from '../components/ui/Card'
import { useEffect } from 'react'

const Blog = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [])
  // 模拟博客文章数据
  const blogPosts = [
    {
      id: 1,
      title: "New Product Launch: Premium Cable Management Solutions",
      excerpt: "We're excited to announce our latest line of professional cable management solutions designed for modern workspaces...",
      content: "Our new cable management line includes innovative features like self-adhesive backing, tear-resistant materials, and vibrant color coding options. These products are perfect for IT professionals, office managers, and anyone looking to organize their workspace efficiently.",
      author: "Risepekt Team",
      date: "2024-01-15",
      category: "Product Updates",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop",
      tags: ["Product Launch", "Cable Management", "Organization"]
    },
    {
      id: 2,
      title: "The Future of Retail: Digital Transformation in E-commerce",
      excerpt: "As the retail landscape continues to evolve, businesses are embracing digital transformation to meet changing customer expectations...",
      content: "Digital transformation in retail is not just about having an online presence. It's about creating seamless customer experiences across all touchpoints, from mobile apps to physical stores. We explore the key trends shaping the future of retail.",
      author: "Marketing Team",
      date: "2024-01-10",
      category: "Industry Insights",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["E-commerce", "Digital Transformation", "Retail"]
    },
    {
      id: 3,
      title: "Customer Success Story: How ABC Company Improved Efficiency",
      excerpt: "Learn how ABC Company increased their operational efficiency by 40% using our cable management solutions...",
      content: "ABC Company, a leading technology firm, was struggling with cable organization in their data center. After implementing our cable management solutions, they saw a 40% improvement in operational efficiency and reduced cable-related downtime by 60%.",
      author: "Customer Success",
      date: "2024-01-05",
      category: "Customer Stories",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      tags: ["Case Study", "Efficiency", "Customer Success"]
    },
    {
      id: 4,
      title: "Sustainability in Business: Our Commitment to Green Practices",
      excerpt: "Discover how Risepekt Store is leading the way in sustainable business practices and environmental responsibility...",
      content: "At Risepekt Store, we believe that business success and environmental responsibility go hand in hand. We've implemented comprehensive sustainability initiatives across our operations, from eco-friendly packaging to energy-efficient facilities.",
      author: "Sustainability Team",
      date: "2023-12-28",
      category: "Company News",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      tags: ["Sustainability", "Green Business", "Environment"]
    },
    {
      id: 5,
      title: "Top 10 Organization Tips for Small Businesses",
      excerpt: "Practical organization tips that can help small businesses improve productivity and create a better work environment...",
      content: "Organization is key to business success. From implementing proper labeling systems to creating efficient workflows, these tips can help small businesses create a more productive and organized work environment.",
      author: "Business Development",
      date: "2023-12-20",
      category: "Tips & Tricks",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["Organization", "Productivity", "Small Business"]
    },
    {
      id: 6,
      title: "Holiday Season Shipping Guide: Ensuring On-Time Delivery",
      excerpt: "Everything you need to know about our holiday shipping policies and how to ensure your orders arrive on time...",
      content: "The holiday season is our busiest time of year. We've prepared this comprehensive guide to help customers understand our shipping policies, delivery times, and how to ensure their orders arrive when expected.",
      author: "Operations Team",
      date: "2023-12-15",
      category: "Shipping & Delivery",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Shipping", "Holiday", "Delivery"]
    }
  ]

  const categories = [
    "All",
    "Product Updates",
    "Industry Insights", 
    "Customer Stories",
    "Company News",
    "Tips & Tricks",
    "Shipping & Delivery"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Stay updated with the latest news, product launches, industry insights, and helpful tips from the Risepekt Store team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container">
          {/* Categories Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-square">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${blogPosts[0].id}`}
                      className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} hover className="overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary-600 to-accent-500 text-white">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter to receive the latest blog posts, product updates, and exclusive offers directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400 text-gray-900"
                  />
                  <button className="bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog 