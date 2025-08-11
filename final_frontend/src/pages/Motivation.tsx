import React from 'react';
import { Play, Star, Clock, User, Heart, Trophy, Target, Zap } from 'lucide-react';

const Motivation: React.FC = () => {
  const motivationalVideos = [
    {
      id: '1',
      title: 'From Failure to NEET Success - Real Journey',
      speaker: 'Dr. Priya Sharma',
      description: 'How I overcame multiple failures to finally crack NEET and become a doctor',
      duration: '12:45',
      views: '2.1M',
      thumbnail: '/WhatsApp Image 2025-08-07 at 13.21.26_c7ca6dc5.jpg',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '2',
      title: 'JEE Topper Reveals Secret Strategy',
      speaker: 'Rahul Gupta (AIR 47)',
      description: 'The mindset and daily routine that helped me crack JEE Advanced',
      duration: '18:30',
      views: '1.8M',
      thumbnail: '/WhatsApp Image 2025-08-07 at 14.21.31_ea247dd2.jpg',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '3',
      title: 'UPSC Success Story - From Village to IAS',
      speaker: 'IAS Anita Singh',
      description: 'Overcoming financial struggles and social barriers to achieve the impossible',
      duration: '25:15',
      views: '3.5M',
      thumbnail: '/WhatsApp Image 2025-08-07 at 15.56.25_16321d7d.jpg',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '4',
      title: 'Consistency is Key - CAT Success Mantras',
      speaker: 'Vikash Kumar (99.8%ile)',
      description: 'How daily discipline and smart work led to CAT success',
      duration: '14:22',
      views: '850K',
      thumbnail: '/WhatsApp Image 2025-08-08 at 15.31.22_9afd40ce.jpg',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  const successStories = [
    {
      id: '1',
      name: 'Anjali Patel',
      exam: 'NEET 2023',
      rank: 'AIR 156',
      image: '/WhatsApp Image 2025-08-07 at 13.21.26_c7ca6dc5.jpg',
      story: `Coming from a small town in Gujarat, I had limited resources but unlimited determination. My journey began with a single NCERT book and a dream to become a doctor.

**Preparation Strategy:**
- **Foundation (6 months):** Thoroughly read NCERT 3 times
- **Practice Phase (8 months):** Solved 15,000+ MCQs from various sources  
- **Revision (2 months):** Created personal notes and formulas

**Daily Routine:**
- 5:00 AM - Morning study (Physics)
- 8:00 AM - Breakfast and light exercise
- 9:00 AM - Chemistry concepts
- 1:00 PM - Lunch break
- 2:00 PM - Biology (my strongest subject)
- 6:00 PM - Evening walk and reflection
- 7:00 PM - Mock tests and analysis
- 10:00 PM - Light revision before sleep

**Key Learnings:**
Consistency trumps perfection. Even on tough days, I maintained my routine. The SmartPrep AI helped me identify my weak areas and suggested targeted practice materials.`,
      timeline: [
        { month: 'Month 1-6', activity: 'NCERT Foundation Building' },
        { month: 'Month 7-14', activity: 'Intensive Practice & Mock Tests' },
        { month: 'Month 15-16', activity: 'Final Revision & Strategy' }
      ]
    },
    {
      id: '2',
      name: 'Arjun Mehta',
      exam: 'JEE Advanced 2023',
      rank: 'AIR 423',
      image: '/WhatsApp Image 2025-08-07 at 14.21.31_ea247dd2.jpg',
      story: `After failing JEE Main in my first attempt, I was devastated. But failure taught me more than success ever could. I analyzed my mistakes, rebuilt my strategy, and came back stronger.

**Second Attempt Strategy:**
- **Mindset Reset:** Treated failure as feedback, not defeat
- **Targeted Improvement:** Focused on Mathematics (my weakest subject)
- **Smart Practice:** Quality over quantity in problem solving

**Daily Schedule (Revised):**
- 4:30 AM - Mathematics problem solving
- 7:00 AM - Physics concepts and numericals  
- 10:00 AM - Chemistry theory and reactions
- 1:00 PM - Lunch and mandatory rest
- 2:30 PM - Mock tests (alternate days)
- 5:00 PM - Sports/physical activity
- 7:00 PM - Revision and doubt clearing
- 9:30 PM - Light reading and sleep

**Mental Health:**
Meditation, regular exercise, and staying connected with family kept me grounded. The SmartPrep motivation section became my daily dose of inspiration.`,
      timeline: [
        { month: 'Month 1-3', activity: 'Failure Analysis & Strategy Reset' },
        { month: 'Month 4-10', activity: 'Focused Preparation & Practice' },
        { month: 'Month 11-12', activity: 'Peak Preparation & Mock Tests' }
      ]
    }
  ];

  const quotes = [
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "The expert in anything was once a beginner.",
      author: "Helen Hayes"
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Stay Motivated
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Draw inspiration from success stories, motivational videos, and proven strategies from toppers
          </p>
        </div>

        {/* Motivational Quotes */}
        <div className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl text-white">
                <div className="mb-4">
                  <Heart className="w-8 h-8 text-pink-200" />
                </div>
                <blockquote className="text-lg font-medium mb-4 italic">
                  "{quote.text}"
                </blockquote>
                <cite className="text-blue-100 font-semibold">— {quote.author}</cite>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Videos */}
        <section className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <Play className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Inspirational Videos</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {motivationalVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-blue-600 mb-2">{video.speaker}</p>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section>
          <div className="flex items-center space-x-2 mb-8">
            <Trophy className="w-6 h-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-800">Success Stories</h2>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{story.name}</h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            {story.exam}
                          </span>
                          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                            {story.rank}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="prose prose-gray max-w-none mb-6">
                      {story.story.split('\n\n').map((paragraph, pIndex) => {
                        if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                          return (
                            <h4 key={pIndex} className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                              {paragraph.replace(/\*\*/g, '')}
                            </h4>
                          );
                        } else if (paragraph.startsWith('- **')) {
                          return (
                            <div key={pIndex} className="ml-4 mb-2">
                              <strong>{paragraph.match(/\*\*(.*?)\*\*/)?.[1]}:</strong>
                              <span className="text-gray-600"> {paragraph.replace(/- \*\*.*?\*\*: /, '')}</span>
                            </div>
                          );
                        } else if (paragraph.startsWith('- ')) {
                          return (
                            <div key={pIndex} className="ml-4 mb-1 text-gray-600">
                              • {paragraph.replace('- ', '')}
                            </div>
                          );
                        } else {
                          return (
                            <p key={pIndex} className="text-gray-700 leading-relaxed mb-3">
                              {paragraph}
                            </p>
                          );
                        }
                      })}
                    </div>

                    {/* Timeline */}
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                        <Target className="w-5 h-5" />
                        <span>Preparation Timeline</span>
                      </h4>
                      <div className="space-y-3">
                        {story.timeline.map((phase, tIndex) => (
                          <div key={tIndex} className="flex items-center space-x-4">
                            <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <div className="flex-1">
                              <span className="font-medium text-gray-800">{phase.month}:</span>
                              <span className="text-gray-600 ml-2">{phase.activity}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-8 h-8" />
              <h2 className="text-2xl md:text-3xl font-bold">Your Success Story Awaits</h2>
            </div>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Every topper was once a beginner. Start your journey today with personalized guidance and proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                Share Your Story
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-200">
                Get Motivated Daily
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivation;