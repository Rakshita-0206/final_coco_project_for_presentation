import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MessageSquare, Video, BookOpen, MapPin, ExternalLink, Clock, Users, Star, Send } from 'lucide-react';

interface Exam {
  id: string;
  name: string;
  fullName: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  eligibility: string;
  applicationDeadline: string;
  examDate: string;
  videoUrl: string;
  books: Array<{
    title: string;
    author: string;
    price: string;
    rating: number;
    link: string;
  }>;
  roadmap: string[];
}

const Exams: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'bot', message: string}>>([]);
  
  const stream = searchParams.get('stream') || 'engineering';

  const examData: Record<string, Exam[]> = {
    engineering: [
      {
        id: 'jee-main',
        name: 'JEE Main',
        fullName: 'Joint Entrance Examination Main',
        description: 'National level engineering entrance exam conducted by NTA for admission to NITs, IIITs, and other centrally funded technical institutions.',
        difficulty: 'Hard',
        duration: '3 hours',
        eligibility: '12th pass with PCM',
        applicationDeadline: 'March 2024',
        examDate: 'April 2024',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        books: [
          {
            title: 'Concepts of Physics',
            author: 'H.C. Verma',
            price: '₹750',
            rating: 4.9,
            link: 'https://amazon.in/concepts-physics'
          },
          {
            title: 'Mathematics for JEE',
            author: 'R.D. Sharma',
            price: '₹850',
            rating: 4.7,
            link: 'https://amazon.in/rd-sharma-jee'
          }
        ],
        roadmap: [
          'Complete NCERT thoroughly (Physics, Chemistry, Mathematics)',
          'Practice previous year questions (2015-2023)',
          'Take weekly mock tests',
          'Focus on weak areas through targeted practice',
          'Revise important formulas and concepts',
          'Final revision and stress management'
        ]
      },
      {
        id: 'gate',
        name: 'GATE',
        fullName: 'Graduate Aptitude Test in Engineering',
        description: 'National level examination for admission to postgraduate programs and PSU recruitment.',
        difficulty: 'Hard',
        duration: '3 hours',
        eligibility: 'BE/BTech or equivalent',
        applicationDeadline: 'October 2024',
        examDate: 'February 2025',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        books: [
          {
            title: 'GATE Computer Science',
            author: 'Made Easy Publications',
            price: '₹650',
            rating: 4.6,
            link: 'https://amazon.in/gate-cs'
          }
        ],
        roadmap: [
          'Understand GATE syllabus thoroughly',
          'Study core subjects with standard textbooks',
          'Practice numerical problems regularly',
          'Solve previous year papers',
          'Take online mock tests',
          'Focus on high-weightage topics'
        ]
      }
    ],
    medical: [
      {
        id: 'neet-ug',
        name: 'NEET UG',
        fullName: 'National Eligibility cum Entrance Test',
        description: 'National level medical entrance exam for MBBS, BDS, AYUSH, and veterinary courses.',
        difficulty: 'Hard',
        duration: '3 hours 20 minutes',
        eligibility: '12th pass with PCB',
        applicationDeadline: 'March 2024',
        examDate: 'May 2024',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        books: [
          {
            title: 'NCERT Biology Class 11 & 12',
            author: 'NCERT',
            price: '₹400',
            rating: 4.9,
            link: 'https://amazon.in/ncert-biology'
          },
          {
            title: 'Organic Chemistry',
            author: 'Morrison & Boyd',
            price: '₹850',
            rating: 4.8,
            link: 'https://amazon.in/organic-chemistry'
          }
        ],
        roadmap: [
          'Master NCERT thoroughly (Biology, Physics, Chemistry)',
          'Practice MCQs from standard reference books',
          'Focus heavily on Biology (50% weightage)',
          'Regular revision and note-making',
          'Take full-length mock tests',
          'Analyze mistakes and improve weak areas'
        ]
      }
    ],
    'civil-services': [
      {
        id: 'upsc-cse',
        name: 'UPSC CSE',
        fullName: 'Civil Services Examination',
        description: 'Premier examination for recruitment to various Civil Services including IAS, IPS, IFS.',
        difficulty: 'Hard',
        duration: 'Multi-stage (Prelims + Mains + Interview)',
        eligibility: 'Graduate degree',
        applicationDeadline: 'March 2024',
        examDate: 'June 2024 (Prelims)',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        books: [
          {
            title: 'Indian Polity',
            author: 'M. Laxmikanth',
            price: '₹650',
            rating: 4.9,
            link: 'https://amazon.in/indian-polity'
          },
          {
            title: 'Modern History of India',
            author: 'Bipan Chandra',
            price: '₹550',
            rating: 4.7,
            link: 'https://amazon.in/modern-history'
          }
        ],
        roadmap: [
          'Read NCERT books (Class 6-12) for foundation',
          'Study standard reference books for each subject',
          'Practice answer writing for Mains',
          'Current affairs preparation (The Hindu/PIB)',
          'Take regular mock tests',
          'Personality development for Interview'
        ]
      }
    ]
  };

  const streamNames: Record<string, string> = {
    engineering: 'Engineering',
    medical: 'Medical',
    'civil-services': 'Civil Services',
    commerce: 'Commerce',
    arts: 'Arts & Humanities',
    defense: 'Defense Services'
  };

  const exams = examData[stream] || [];

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [
      ...prev,
      { type: 'user', message: chatInput },
      { type: 'bot', message: `Here are some quick tips for ${chatInput}: Focus on understanding concepts rather than rote learning. Practice regularly and maintain consistency in your preparation.` }
    ]);
    setChatInput('');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link to="/streams" className="hover:text-blue-600">Streams</Link>
            <span>/</span>
            <span>{streamNames[stream]}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {streamNames[stream]} Exams
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive preparation resources for {streamNames[stream].toLowerCase()} entrance exams
          </p>
        </div>

        {exams.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              We're working on adding exam content for this stream. Check back soon!
            </p>
            <Link
              to="/chat"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Ask AI for Help</span>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Exams List */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Exams</h2>
              <div className="space-y-4">
                {exams.map((exam) => (
                  <div
                    key={exam.id}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                      selectedExam === exam.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedExam(exam.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{exam.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exam.difficulty)}`}>
                        {exam.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{exam.fullName}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{exam.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{exam.eligibility}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exam Details */}
            <div className="lg:col-span-2">
              {selectedExam ? (
                <div className="space-y-6">
                  {(() => {
                    const exam = exams.find(e => e.id === selectedExam)!;
                    return (
                      <>
                        {/* Exam Info */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">{exam.fullName}</h2>
                          <p className="text-gray-600 mb-6">{exam.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="space-y-3">
                              <div>
                                <span className="text-sm font-medium text-gray-500">Duration</span>
                                <p className="text-gray-800">{exam.duration}</p>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-500">Eligibility</span>
                                <p className="text-gray-800">{exam.eligibility}</p>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <span className="text-sm font-medium text-gray-500">Application Deadline</span>
                                <p className="text-gray-800">{exam.applicationDeadline}</p>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-500">Exam Date</span>
                                <p className="text-gray-800">{exam.examDate}</p>
                              </div>
                            </div>
                          </div>

                          {/* Quick Chat */}
                          <div className="bg-gray-50 rounded-xl p-4">
                            <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                              <MessageSquare className="w-5 h-5" />
                              <span>Quick AI Chat</span>
                            </h3>
                            <div className="flex space-x-2">
                              <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                placeholder={`Ask about ${exam.name} preparation...`}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                              />
                              <button
                                onClick={handleChatSubmit}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                              >
                                <Send className="w-4 h-4" />
                              </button>
                            </div>
                            {chatMessages.length > 0 && (
                              <div className="mt-3 space-y-2 max-h-32 overflow-y-auto">
                                {chatMessages.slice(-2).map((msg, index) => (
                                  <div key={index} className={`text-sm ${msg.type === 'user' ? 'text-blue-600' : 'text-gray-600'}`}>
                                    <strong>{msg.type === 'user' ? 'You:' : 'AI:'}</strong> {msg.message}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Video Section */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                            <Video className="w-5 h-5" />
                            <span>Preparation Video</span>
                          </h3>
                          <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                              <Video className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                              <p className="text-gray-500">Video content will be embedded here</p>
                              <p className="text-sm text-gray-400">YouTube integration ready</p>
                            </div>
                          </div>
                        </div>

                        {/* Roadmap */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                            <MapPin className="w-5 h-5" />
                            <span>Preparation Roadmap</span>
                          </h3>
                          <div className="space-y-3">
                            {exam.roadmap.map((step, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                                  {index + 1}
                                </div>
                                <p className="text-gray-700">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Books */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                            <BookOpen className="w-5 h-5" />
                            <span>Recommended Books</span>
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {exam.books.map((book, index) => (
                              <div key={index} className="border border-gray-200 rounded-xl p-4">
                                <h4 className="font-semibold text-gray-800 mb-1">{book.title}</h4>
                                <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <div className="flex items-center space-x-1">
                                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                      <span className="text-sm text-gray-600">{book.rating}</span>
                                    </div>
                                    <span className="text-green-600 font-semibold">{book.price}</span>
                                  </div>
                                  <a
                                    href={book.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                                  >
                                    <span>Buy</span>
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Select an Exam</h3>
                  <p className="text-gray-600">
                    Choose an exam from the list to view detailed preparation resources, roadmaps, and study materials.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exams;