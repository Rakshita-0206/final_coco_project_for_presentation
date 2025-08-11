import React, { useState } from 'react';
import { Send, Book, Video, Map, Star, ExternalLink, Loader2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  recommendations?: Recommendation[];
}

interface Recommendation {
  id: number;
  type: 'book' | 'video' | 'roadmap';
  title: string;
  author?: string;
  publisher?: string;
  price?: string;
  pages?: number;
  edition?: string;
  language?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  subjects: string[];
  rating: number;
  description: string;
  link?: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with exam preparation. Ask me about books, study materials, or preparation strategies for any competitive exam!",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sampleRecommendations: Recommendation[] = [
    {
      id: 1,
      type: 'book',
      title: 'Concepts of Physics',
      author: 'H.C. Verma',
      publisher: 'Bharti Bhawan',
      price: '₹850',
      pages: 462,
      edition: '2019 Edition',
      language: 'English',
      difficulty: 'Intermediate',
      subjects: ['Mechanics', 'Thermodynamics', 'Optics', 'Electromagnetism'],
      rating: 4.8,
      description: 'Comprehensive physics textbook with detailed explanations and practice problems.',
      link: 'https://example.com/book1'
    },
    {
      id: 2,
      type: 'book',
      title: 'Organic Chemistry',
      author: 'Morrison & Boyd',
      publisher: 'Pearson',
      price: '₹1,200',
      pages: 1283,
      edition: '7th Edition',
      language: 'English',
      difficulty: 'Advanced',
      subjects: ['Organic Reactions', 'Stereochemistry', 'Spectroscopy', 'Biomolecules'],
      rating: 4.6,
      description: 'Detailed coverage of organic chemistry concepts with modern applications.',
      link: 'https://example.com/book2'
    },
    {
      id: 3,
      type: 'video',
      title: 'Complete JEE Mathematics Course',
      author: 'Physics Wallah',
      price: 'Free',
      difficulty: 'Intermediate',
      subjects: ['Calculus', 'Algebra', 'Coordinate Geometry', 'Trigonometry'],
      rating: 4.7,
      description: '200+ hours of comprehensive mathematics lectures for JEE preparation.',
      link: 'https://example.com/video1'
    }
  ];

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const isBookQuery = inputText.toLowerCase().includes('book') || 
                         inputText.toLowerCase().includes('material') ||
                         inputText.toLowerCase().includes('preparation');

      const botMessage: Message = {
        id: messages.length + 2,
        text: isBookQuery 
          ? "Here are some excellent preparation materials I recommend for your studies:"
          : "I'd be happy to help! Could you please specify what exam you're preparing for or what type of study materials you need?",
        isUser: false,
        timestamp: new Date(),
        recommendations: isBookQuery ? sampleRecommendations : undefined
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'book': return <Book className="w-5 h-5" />;
      case 'video': return <Video className="w-5 h-5" />;
      case 'roadmap': return <Map className="w-5 h-5" />;
      default: return <Book className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'book': return 'from-blue-500 to-purple-600';
      case 'video': return 'from-red-500 to-pink-600';
      case 'roadmap': return 'from-green-500 to-teal-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">AI Study Assistant</h1>
            <p className="text-blue-100">Get personalized book and material recommendations</p>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.isUser 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}

            {/* Recommendations Cards */}
            {messages.map((message) => 
              message.recommendations && (
                <div key={`rec-${message.id}`} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {message.recommendations.map((rec) => (
                      <div key={rec.id} className="group bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        {/* Card Header */}
                        <div className={`bg-gradient-to-r ${getTypeColor(rec.type)} p-4 text-white`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {getTypeIcon(rec.type)}
                              <span className="text-sm font-medium capitalize">{rec.type}</span>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(rec.difficulty)}`}>
                              {rec.difficulty}
                            </span>
                          </div>
                          <h3 className="font-bold text-lg leading-tight">{rec.title}</h3>
                          {rec.author && (
                            <p className="text-sm opacity-90 mt-1">by {rec.author}</p>
                          )}
                        </div>

                        {/* Card Body */}
                        <div className="p-4 space-y-3">
                          {/* Rating */}
                          {renderStars(rec.rating)}

                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed">{rec.description}</p>

                          {/* Details Grid */}
                          {(rec.publisher || rec.pages || rec.edition || rec.language) && (
                            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                              {rec.publisher && (
                                <div>
                                  <span className="font-medium">Publisher:</span>
                                  <br />
                                  {rec.publisher}
                                </div>
                              )}
                              {rec.pages && (
                                <div>
                                  <span className="font-medium">Pages:</span>
                                  <br />
                                  {rec.pages}
                                </div>
                              )}
                              {rec.edition && (
                                <div>
                                  <span className="font-medium">Edition:</span>
                                  <br />
                                  {rec.edition}
                                </div>
                              )}
                              {rec.language && (
                                <div>
                                  <span className="font-medium">Language:</span>
                                  <br />
                                  {rec.language}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Subjects */}
                          <div>
                            <p className="text-xs font-medium text-gray-700 mb-2">Subjects Covered:</p>
                            <div className="flex flex-wrap gap-1">
                              {rec.subjects.map((subject, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Price and Action */}
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            {rec.price && (
                              <div className="text-lg font-bold text-green-600">
                                {rec.price}
                              </div>
                            )}
                            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
                              {rec.type === 'book' ? 'Buy Now' : rec.type === 'video' ? 'Watch' : 'View'}
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pro Tips */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 mt-6">
                    <h4 className="font-bold text-amber-800 mb-2">💡 Pro Study Tips</h4>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• Start with easier books and gradually move to advanced ones</li>
                      <li>• Combine multiple resources for comprehensive understanding</li>
                      <li>• Practice regularly with the recommended materials</li>
                      <li>• Join study groups to discuss concepts from these books</li>
                    </ul>
                  </div>
                </div>
              )
            )}

            {/* Loading */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-3 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                  <span className="text-sm text-gray-600">Finding the best recommendations for you...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask for books, preparation materials, or study advice..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputText.trim()}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;