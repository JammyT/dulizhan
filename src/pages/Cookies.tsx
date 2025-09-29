import { Cookie, Settings, Shield, Eye, Globe, Clock } from 'lucide-react'
import Card from '../components/ui/Card'
import { useEffect } from 'react'

const Cookies = () => {
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
              <Cookie className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Learn how we use cookies and similar technologies to enhance your browsing experience and improve our services.
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
            
            {/* What Are Cookies */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better browsing experience and allow us to improve our services.
                  </p>
                  <p>
                    Cookies can be "session" cookies (temporary and deleted when you close your browser) or "persistent" cookies (stored on your device for a longer period).
                  </p>
                </div>
              </div>
            </Card>

            {/* Types of Cookies We Use */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Settings className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
                </div>
                <div className="space-y-8">
                  
                  {/* Essential Cookies */}
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                    <p className="text-gray-600 mb-3">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Session management and user authentication</li>
                      <li>Shopping cart functionality</li>
                      <li>Security features and fraud prevention</li>
                      <li>Basic website operations and navigation</li>
                    </ul>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border-l-4 border-accent-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                    <p className="text-gray-600 mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Website usage statistics and performance metrics</li>
                      <li>User behavior analysis and insights</li>
                      <li>Page load times and error tracking</li>
                      <li>Service improvement and optimization</li>
                    </ul>
                  </div>

                  {/* Functional Cookies */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                    <p className="text-gray-600 mb-3">
                      These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Language and region preferences</li>
                      <li>User interface customization</li>
                      <li>Form data retention</li>
                      <li>Personalized content and recommendations</li>
                    </ul>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                    <p className="text-gray-600 mb-3">
                      These cookies are used to track visitors across websites to display relevant advertisements.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Targeted advertising and remarketing</li>
                      <li>Social media integration</li>
                      <li>Campaign performance tracking</li>
                      <li>Cross-site user behavior analysis</li>
                    </ul>
                  </div>

                </div>
              </div>
            </Card>

            {/* Cookie Duration */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Cookie Duration</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Session Cookies</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Temporary storage during your visit</li>
                      <li>Automatically deleted when you close your browser</li>
                      <li>Used for shopping cart and session management</li>
                      <li>Essential for website functionality</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Persistent Cookies</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Stored for a longer period (up to 2 years)</li>
                      <li>Remember your preferences and settings</li>
                      <li>Used for analytics and marketing purposes</li>
                      <li>Can be manually deleted through browser settings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Third-Party Cookies */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Third-Party Cookies</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    We may use third-party services that place cookies on your device. These services help us provide better functionality and analyze website performance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">Analytics Services</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Google Analytics - Website usage analysis</li>
                        <li>Hotjar - User behavior tracking</li>
                        <li>Mixpanel - Event tracking and analytics</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">Marketing Services</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Facebook Pixel - Social media advertising</li>
                        <li>Google Ads - Search advertising</li>
                        <li>Mailchimp - Email marketing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Managing Cookies */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h3>
                    <p className="text-gray-600 mb-4">
                      You can control and manage cookies through your browser settings. However, disabling certain cookies may affect website functionality.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Chrome</h4>
                        <p className="text-sm text-gray-600">Settings → Privacy and security → Cookies and other site data</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Firefox</h4>
                        <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies and Site Data</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                        <p className="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Edge</h4>
                        <p className="text-sm text-gray-600">Settings → Cookies and site permissions → Cookies and site data</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Consent</h3>
                    <p className="text-gray-600">
                      When you first visit our website, you'll see a cookie consent banner. You can change your preferences at any time by clicking the "Cookie Settings" link in our footer.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Data Protection */}
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-primary-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Data Protection and Privacy</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Collection</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cookies collect anonymous usage data</li>
                      <li>No personally identifiable information is stored in cookies</li>
                      <li>Data is used for website improvement and user experience</li>
                      <li>We do not sell cookie data to third parties</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Measures</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Secure transmission of cookie data</li>
                      <li>Regular security audits and updates</li>
                      <li>Compliance with data protection regulations</li>
                      <li>Transparent data handling practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Updates to Policy */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                  </p>
                  <p>
                    When we make changes, we will update the "Last updated" date at the top of this policy. We encourage you to review this policy periodically to stay informed about how we use cookies.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-2">
                      <p><strong>Email:</strong> support@risepekt.com</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      <p><strong>Address:</strong> 123 Business Ave, NY 10001</p>
                      <p><strong>Data Protection Officer:</strong> support@risepekt.com</p>
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

export default Cookies 