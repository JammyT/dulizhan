import { Shield, Eye, Lock, Database, Users, Globe } from 'lucide-react'
import Card from '../components/ui/Card'
import { useEffect } from 'react'

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [])
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-20">
        <div className="container">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-primary-100 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Information We Collect */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Database className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Name, email address, and contact information when you create an account</li>
                      <li>Shipping and billing addresses for order fulfillment</li>
                      <li>Payment information (processed securely through our payment partners)</li>
                      <li>Communication preferences and marketing consent</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Website usage data, including pages visited and time spent</li>
                      <li>Device information and browser type</li>
                      <li>IP address and general location data</li>
                      <li>Search queries and product preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* How We Use Information */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Order Processing</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Process and fulfill your orders</li>
                      <li>Send order confirmations and updates</li>
                      <li>Handle returns and refunds</li>
                      <li>Provide customer support</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Improving Our Services</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Analyze website usage and performance</li>
                      <li>Personalize your shopping experience</li>
                      <li>Develop new products and features</li>
                      <li>Conduct market research</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Information Sharing */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-600">
                    <li><strong>Service Providers:</strong> With trusted partners who help us operate our business (payment processors, shipping companies, etc.)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Data Security */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Lock className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    We implement appropriate technical and organizational measures to protect your personal information:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">Technical Measures</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>SSL encryption for data transmission</li>
                        <li>Secure payment processing</li>
                        <li>Regular security audits</li>
                        <li>Access controls and authentication</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">Organizational Measures</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Employee training on data protection</li>
                        <li>Limited access to personal data</li>
                        <li>Regular policy reviews</li>
                        <li>Incident response procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Your Rights */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Access and Control</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Access your personal information</li>
                      <li>Update or correct your data</li>
                      <li>Delete your account</li>
                      <li>Opt-out of marketing communications</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Data Portability</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Export your data</li>
                      <li>Transfer data to another service</li>
                      <li>Request data processing restrictions</li>
                      <li>Object to data processing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Cookies and Tracking */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    We use cookies and similar technologies to enhance your browsing experience:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">Essential Cookies</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Session management</li>
                        <li>Shopping cart functionality</li>
                        <li>Security features</li>
                        <li>Basic website operations</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">Analytics Cookies</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Website usage analysis</li>
                        <li>Performance monitoring</li>
                        <li>User behavior insights</li>
                        <li>Service improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-2">
                      <p><strong>Email:</strong> privacy@wmiwulienstore.com</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      <p><strong>Address:</strong> 123 Business Ave, NY 10001</p>
                      <p><strong>Data Protection Officer:</strong> dpo@wmiwulienstore.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy 