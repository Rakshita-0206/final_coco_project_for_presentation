import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, BookOpen, Users, Trophy, Zap, Target, Brain, Star } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recommendations',
      description: 'Get personalized study materials based on your goals and preferences'
    },
    {
      icon: BookOpen,
      title: 'Curated Resources',
      description: 'Access handpicked books, videos, and study materials from top educators'
    },
    {
      icon: Target,
      title: 'Exam-Specific Roadmaps',
      description: 'Follow proven roadmaps designed by successful candidates'
    },
    {
      icon: Zap,
      title: 'Smart Learning Path',
      description: 'Optimize your preparation time with data-driven insights'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Students Helped' },
    { number: '1000+', label: 'Study Resources' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-sm">
              SmartPrep
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn Smart, Succeed Faster
            </p>
            <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
              Your AI-powered companion for competitive exam preparation
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/chat"
              className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Start AI Chat</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/streams"
              className="bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-slate-200/50 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Explore Streams</span>
            </Link>
          </div>

          {/* AI Chat Preview */}
          <div className="max-w-2xl mx-auto mb-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-indigo-500/10 p-8 border border-slate-200/50">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Try Our AI Assistant</h3>
                <p className="text-slate-600">Ask anything about exam preparation</p>
              </div>
              
              <div className="bg-slate-50/80 rounded-2xl p-4 mb-4 border border-slate-200/50">
                <input
                  type="text"
                  placeholder="e.g., Best books for NEET chemistry preparation"
                  className="w-full bg-transparent border-none outline-none text-slate-700 placeholder-slate-500"
                  readOnly
                />
              </div>
              
              <Link
                to="/chat"
                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-3 rounded-2xl font-medium hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Recommendations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50/50 via-indigo-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">About Our Project</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our mission is to provide curated, high-quality resources like books, videos, and exam roadmaps 
              to help students achieve their academic goals with clarity and confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 border border-slate-200/50 group hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50/80 via-purple-50/60 to-pink-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Students Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                exam: "NEET 2024 Qualifier",
                quote: "SmartPrep's AI recommendations helped me focus on the right resources. Cleared NEET in my first attempt!",
                rating: 5
              },
              {
                name: "Rahul Gupta",
                exam: "JEE Advanced 2024",
                quote: "The personalized roadmap and book recommendations saved me months of preparation time.",
                rating: 5
              },
              {
                name: "Anjali Patel",
                exam: "UPSC CSE 2023",
                quote: "SmartPrep's curated content and motivation section kept me on track throughout my UPSC journey.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl shadow-indigo-500/5 border border-slate-200/50">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.exam}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;