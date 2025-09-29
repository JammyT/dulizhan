import { FileText, CheckCircle, AlertTriangle, Scale, Users, Shield } from 'lucide-react'
import Card from '../components/ui/Card'
import { useEffect } from 'react'

const Terms = () => {
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
              <FileText className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using our website, you agree to these terms.
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
            
            {/* Agreement */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    By accessing and using Risepekt Store's website and services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  <p>
                    If you do not agree to abide by the above, please do not use this service. These terms apply to all visitors, users, and others who access or use the service.
                  </p>
                </div>
              </div>
            </Card>

            {/* Services Description */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Description of Services</h2>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Risepekt Store provides an e-commerce platform that connects customers with quality products from Risepekt sellers worldwide. Our services include:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-600">
                    <li>Online product catalog and shopping experience</li>
                    <li>Secure payment processing and order management</li>
                    <li>Customer support and order tracking</li>
                    <li>Product reviews and ratings system</li>
                    <li>Account management and personalization features</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* User Accounts */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">User Accounts</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Creation</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>You must provide accurate and complete information when creating an account</li>
                      <li>You are responsible for maintaining the security of your account credentials</li>
                      <li>You must be at least 18 years old to create an account</li>
                      <li>One account per person is allowed</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>You are responsible for all activities under your account</li>
                      <li>Notify us immediately of any unauthorized use</li>
                      <li>Keep your contact information up to date</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Ordering and Payment */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ordering and Payment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Order Process</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Orders are subject to product availability</li>
                      <li>We reserve the right to cancel orders at our discretion</li>
                      <li>Order confirmation will be sent via email</li>
                      <li>Prices are subject to change without notice</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Payment Terms</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Payment is required at the time of order</li>
                      <li>We accept major credit cards and digital wallets</li>
                      <li>All transactions are processed securely</li>
                      <li>Sales tax will be added where applicable</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Shipping and Delivery */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping and Delivery</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Shipping times vary by location and product availability</li>
                      <li>Delivery dates are estimates and not guaranteed</li>
                      <li>Shipping costs are calculated at checkout</li>
                      <li>International shipping may be subject to customs duties</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Delivery Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Risk of loss transfers upon delivery to carrier</li>
                      <li>You are responsible for providing accurate shipping addresses</li>
                      <li>Failed deliveries may result in additional charges</li>
                      <li>Signature may be required for certain items</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Returns and Refunds */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Returns and Refunds</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Return Policy</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>30-day return window for most items</li>
                      <li>Items must be unused and in original packaging</li>
                      <li>Return shipping costs are customer responsibility</li>
                      <li>Some items may not be returnable</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Refund Process</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Refunds processed within 5-10 business days</li>
                      <li>Original payment method will be credited</li>
                      <li>Processing fees may be deducted</li>
                      <li>Damaged items may be eligible for replacement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Prohibited Uses */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Prohibited Uses</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. Prohibited activities include:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-600">
                    <li>Violating any applicable laws or regulations</li>
                    <li>Infringing on intellectual property rights</li>
                    <li>Harassing, abusing, or harming others</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Using automated systems to access our services</li>
                    <li>Interfering with the proper functioning of our website</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Scale className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Intellectual Property</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Rights</h3>
                    <p className="text-gray-600 mb-4">
                      The service and its original content, features, and functionality are owned by Risepekt Store and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
                    <p className="text-gray-600">
                      You retain ownership of any content you submit to our service. By submitting content, you grant us a license to use, modify, and display that content in connection with our services.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    In no event shall Risepekt Store, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-600">
                    <li>Your use or inability to use the service</li>
                    <li>Any unauthorized access to or use of our servers</li>
                    <li>Any interruption or cessation of transmission to or from the service</li>
                    <li>Any bugs, viruses, or other harmful code</li>
                    <li>Any errors or omissions in any content</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We reserve the right to modify or replace these terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p>
                    What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-2">
                      <p><strong>Email:</strong> legal@risepektstore.com</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      <p><strong>Address:</strong> 123 Business Ave, NY 10001</p>
                      <p><strong>Legal Department:</strong> legal@risepektstore.com</p>
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

export default Terms 