import { Link } from 'react-router-dom'
import { Users, Award, Target, Heart, Shield, Truck } from 'lucide-react'
import Card from '../components/ui/Card'
import { useEffect } from 'react'

const About = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Risepekt Store
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We are passionate about providing high-quality products and exceptional customer service to customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide customers with the highest quality products at competitive prices, 
                while delivering exceptional customer service and building long-term relationships 
                based on trust and satisfaction.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-primary-600" />
                <span className="text-gray-600">Quality First</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To become the leading online marketplace for quality products, 
                known for our commitment to customer satisfaction, innovation, 
                and sustainable business practices.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="h-8 w-8 text-primary-600" />
                <span className="text-gray-600">Excellence in Everything</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-gray-600">
                  We put our customers at the heart of everything we do, 
                  ensuring their satisfaction is our top priority.
                </p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of quality in all our products 
                  and services, never compromising on excellence.
                </p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
                <p className="text-gray-600">
                  We provide fast, reliable shipping and exceptional customer support 
                  to ensure a seamless shopping experience.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Risepekt Store was founded with a simple mission: to provide customers with 
                high-quality products at competitive prices. What started as a small online 
                store has grown into a trusted marketplace serving customers worldwide.
              </p>
              <p className="mb-6">
                Our journey began when we recognized the need for a reliable platform that 
                offers quality products with exceptional customer service. We believe that 
                every customer deserves the best, and we work tirelessly to deliver on that promise.
              </p>
              <p className="mb-6">
                Today, we're proud to offer a wide range of products, from electronics and 
                fashion to home and garden items. Our commitment to quality, customer satisfaction, 
                and innovation continues to drive our growth and success.
              </p>
              <p>
                We're excited about the future and look forward to serving our customers 
                with even better products and services in the years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who make Risepekt Store possible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Support Team</h3>
                <p className="text-gray-600 mb-4">
                  Our dedicated support team is available 24/7 to help you with any questions or concerns.
                </p>
                <p className="text-sm text-primary-600">Always here to help</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600 mb-4">
                  Our QA team ensures every product meets our high standards before reaching customers.
                </p>
                <p className="text-sm text-primary-600">Quality guaranteed</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Logistics Team</h3>
                <p className="text-gray-600 mb-4">
                  Our logistics experts ensure fast and reliable delivery to customers worldwide.
                </p>
                <p className="text-sm text-primary-600">Fast & reliable shipping</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Shop with Us?
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Discover our amazing collection of products and experience the Risepekt Store difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <button className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
                  Shop Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 