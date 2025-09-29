import { useState, useEffect } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // 重置表单
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    // 3秒后隐藏成功消息
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with us for any questions, 
              feedback, or support you might need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Left Right Layout */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Side - Contact Form (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-gray-600">
                  Have a question or need assistance? We're here to help! Send us a message and we'll get back to you within 24 hours.
                </p>
              </div>
              <Card>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Customer Support</option>
                        <option value="order">Order Status</option>
                        <option value="return">Returns & Refunds</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Right Side - Contact Info (1/3 width) */}
            <div className="space-y-6">
              {/* Email Card */}
              <Card>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-3">We'll respond within 24 hours</p>
                  <a 
                    href="mailto:support@risepekt.com" 
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    support@risepekt.com
                  </a>
                </div>
              </Card>

              {/* Quick Info Card */}
              <Card>
                <h4 className="font-semibold text-gray-900 mb-4">Quick Information</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Response Time</span>
                    <span className="text-gray-900 font-medium">24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Support Hours</span>
                    <span className="text-gray-900 font-medium">24/7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Languages</span>
                    <span className="text-gray-900 font-medium">English</span>
                  </div>
                </div>
              </Card>

              {/* Help Topics Card */}
              <Card>
                <h4 className="font-semibold text-gray-900 mb-4">Common Topics</h4>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">• Product Questions</div>
                  <div className="text-sm text-gray-600">• Order Support</div>
                  <div className="text-sm text-gray-600">• Technical Issues</div>
                  <div className="text-sm text-gray-600">• Template Downloads</div>
                  <div className="text-sm text-gray-600">• Account Management</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our products and services
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does shipping take?
              </h3>
              <p className="text-gray-600">
                Standard shipping typically takes 3-5 business days within the continental US. 
                Express shipping is available for 1-2 business days delivery.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is your return policy?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day return policy for most items. Products must be in original 
                condition with all packaging intact. Return shipping is free for defective items.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer international shipping?
              </h3>
              <p className="text-gray-600">
                Yes, we ship to most countries worldwide. Shipping times and costs vary by location. 
                Please contact us for specific rates to your country.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can I track my order?
              </h3>
              <p className="text-gray-600">
                Once your order ships, you'll receive a tracking number via email. 
                You can also track your order in your account dashboard.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 