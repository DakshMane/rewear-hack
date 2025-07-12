import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Users, Star, Leaf, Heart, Globe, Sparkles } from 'lucide-react';
import { mockItems } from '../data/mockData';
import { ItemCard } from '../components/ItemCard';

export function LandingPage() {
  const featuredItems = mockItems.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream-50 via-sage-50 to-brown-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-sage-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-sage-600" />
              <span className="text-sage-700 font-medium text-sm">Sustainable Fashion Revolution</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brown-900 mb-8 leading-tight">
              Where Style Meets
              <span className="text-sage-600 block">Sustainability</span>
            </h1>
            <p className="text-xl text-brown-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your wardrobe sustainably. Exchange preloved clothing, earn rewards, 
              and join a community that values conscious fashion choices.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/browse"
                className="bg-sage-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-sage-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Start Swapping</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/browse"
                className="border-2 border-sage-600 text-sage-600 px-8 py-4 rounded-full font-semibold hover:bg-sage-50 transition-all duration-300"
              >
                Browse Items
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-brown-900 mb-6">
              How ReWear Works
            </h2>
            <p className="text-brown-600 max-w-2xl mx-auto text-lg">
              Three simple steps to transform your wardrobe sustainably
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-brown-900 mb-4">Share Your Style</h3>
              <p className="text-brown-600 leading-relaxed">
                Upload beautiful photos of your preloved pieces and share their stories with our conscious community
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-brown-100 to-brown-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-brown-600" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-brown-900 mb-4">Connect & Exchange</h3>
              <p className="text-brown-600 leading-relaxed">
                Discover unique pieces and connect with like-minded fashion lovers through meaningful exchanges
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-cream-100 to-cream-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-cream-600" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-brown-900 mb-4">Impact Together</h3>
              <p className="text-brown-600 leading-relaxed">
                Create positive environmental impact while building a diverse, sustainable wardrobe that reflects your values
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-brown-900 mb-6">
              Curated Finds
            </h2>
            <p className="text-brown-600 text-lg">
              Handpicked treasures from our conscious community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/browse"
              className="inline-flex items-center space-x-2 text-sage-600 font-semibold hover:text-sage-700 transition-colors text-lg"
            >
              <span>View All Items</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-sage-600 to-brown-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Join the Movement
            </h2>
            <p className="text-sage-100 mb-10 max-w-2xl mx-auto text-xl leading-relaxed">
              Be part of a community that's redefining fashion through conscious choices and meaningful connections.
            </p>
            <Link
              to="/signup"
              className="bg-white text-sage-600 px-10 py-4 rounded-full font-bold hover:bg-cream-50 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-brown-900 mb-6">
              Our Values
            </h2>
            <p className="text-brown-600 max-w-2xl mx-auto text-lg">
              Every exchange on ReWear contributes to a more sustainable future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="font-display font-semibold text-brown-900 mb-2">Sustainable</h3>
              <p className="text-brown-600 text-sm">Reducing textile waste one swap at a time</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-brown-600" />
              </div>
              <h3 className="font-display font-semibold text-brown-900 mb-2">Community</h3>
              <p className="text-brown-600 text-sm">Building connections through shared values</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-cream-600" />
              </div>
              <h3 className="font-display font-semibold text-brown-900 mb-2">Quality</h3>
              <p className="text-brown-600 text-sm">Curating beautiful, well-loved pieces</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="font-display font-semibold text-brown-900 mb-2">Conscious</h3>
              <p className="text-brown-600 text-sm">Making mindful fashion choices together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-display font-bold text-sage-600 mb-2">2,500+</div>
              <div className="text-brown-600">Items Exchanged</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-brown-600 mb-2">850+</div>
              <div className="text-brown-600">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-cream-600 mb-2">1,200kg</div>
              <div className="text-brown-600">Waste Prevented</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-sage-600 mb-2">95%</div>
              <div className="text-brown-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-brown-900 mb-4">
            Stay Connected
          </h2>
          <p className="text-brown-600 mb-8 max-w-2xl mx-auto">
            Get the latest sustainable fashion tips, community highlights, and exclusive early access to new features.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-full sm:rounded-r-none rounded-r-full border border-brown-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            />
            <button className="bg-sage-600 text-white px-6 py-3 rounded-r-full sm:rounded-l-none rounded-l-full hover:bg-sage-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}