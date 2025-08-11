import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Stethoscope, Scale, Calculator, Palette, Globe, Users, ArrowRight, GitCompare, CheckCircle, XCircle } from 'lucide-react';

interface Stream {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  examCount: number;
  popularExams: string[];
}

interface ExamComparison {
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  attempts: string;
  eligibility: string;
  syllabus: string[];
  careerOptions: string[];
  averageSalary: string;
  examPattern: string;
}

const Streams: React.FC = () => {
  const [selectedExams, setSelectedExams] = React.useState<string[]>([]);
  const [showComparison, setShowComparison] = React.useState(false);

  const streams: Stream[] = [
    {
      id: 'engineering',
      name: 'Engineering',
      description: 'Technical and engineering entrance exams including JEE, GATE, and state-level engineering exams.',
      icon: GraduationCap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      examCount: 15,
      popularExams: ['JEE Main', 'JEE Advanced', 'GATE', 'BITSAT']
    },
    {
      id: 'medical',
      name: 'Medical',
      description: 'Medical entrance exams for MBBS, BDS, AYUSH, and other healthcare programs.',
      icon: Stethoscope,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      examCount: 12,
      popularExams: ['NEET UG', 'NEET PG', 'AIIMS', 'JIPMER']
    },
    {
      id: 'civil-services',
      name: 'Civil Services',
      description: 'Government job preparation including UPSC, SSC, Banking, and other competitive exams.',
      icon: Scale,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      examCount: 25,
      popularExams: ['UPSC CSE', 'SSC CGL', 'Bank PO', 'Railway']
    },
    {
      id: 'commerce',
      name: 'Commerce',
      description: 'Business and commerce related exams including CA, CS, CMA, and management entrance tests.',
      icon: Calculator,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      examCount: 10,
      popularExams: ['CAT', 'XAT', 'CA Foundation', 'CS Executive']
    },
    {
      id: 'arts',
      name: 'Arts & Humanities',
      description: 'Liberal arts, literature, journalism, and humanities entrance exams.',
      icon: Palette,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
      examCount: 8,
      popularExams: ['CUET', 'JMI', 'BHU', 'DU Entrance']
    },
    {
      id: 'defense',
      name: 'Defense Services',
      description: 'Military and defense services preparation including NDA, CDS, and AFCAT.',
      icon: Globe,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      examCount: 6,
      popularExams: ['NDA', 'CDS', 'AFCAT', 'Indian Navy']
    }
  ];

  const examDetails: Record<string, ExamComparison> = {
    'JEE Main': {
      name: 'JEE Main',
      difficulty: 'Hard',
      duration: '3 hours',
      attempts: '2 per year',
      eligibility: '12th with PCM (75% marks)',
      syllabus: ['Physics', 'Chemistry', 'Mathematics'],
      careerOptions: ['Software Engineer', 'Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer'],
      averageSalary: '₹8-15 LPA',
      examPattern: 'MCQ + Numerical'
    },
    'GATE': {
      name: 'GATE',
      difficulty: 'Hard',
      duration: '3 hours',
      attempts: 'Once per year',
      eligibility: 'BE/BTech (Final year or passed)',
      syllabus: ['Core Engineering', 'Mathematics', 'General Aptitude'],
      careerOptions: ['PSU Jobs', 'M.Tech', 'Research', 'Higher Studies'],
      averageSalary: '₹12-25 LPA',
      examPattern: 'MCQ + NAT'
    },
    'BITSAT': {
      name: 'BITSAT',
      difficulty: 'Medium',
      duration: '3 hours',
      attempts: 'Once per year',
      eligibility: '12th with PCM (75% marks)',
      syllabus: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Logical Reasoning'],
      careerOptions: ['Software Engineer', 'Data Scientist', 'Product Manager', 'Research Engineer'],
      averageSalary: '₹10-18 LPA',
      examPattern: 'MCQ only (Computer Based)'
    },
    'NEET UG': {
      name: 'NEET UG',
      difficulty: 'Hard',
      duration: '3 hours 20 minutes',
      attempts: 'Once per year',
      eligibility: '12th with PCB (50% marks)',
      syllabus: ['Physics', 'Chemistry', 'Biology'],
      careerOptions: ['Doctor', 'Surgeon', 'Medical Researcher', 'Healthcare Professional'],
      averageSalary: '₹6-20 LPA',
      examPattern: 'MCQ only'
    },
    'NEET PG': {
      name: 'NEET PG',
      difficulty: 'Hard',
      duration: '3 hours 30 minutes',
      attempts: 'Once per year',
      eligibility: 'MBBS degree',
      syllabus: ['Pre-clinical', 'Para-clinical', 'Clinical subjects'],
      careerOptions: ['Specialist Doctor', 'Surgeon', 'Medical Professor', 'Hospital Administrator'],
      averageSalary: '₹15-50 LPA',
      examPattern: 'MCQ only (Computer Based)'
    },
    'UPSC CSE': {
      name: 'UPSC CSE',
      difficulty: 'Hard',
      duration: 'Multi-stage',
      attempts: '6 attempts (General)',
      eligibility: 'Graduate degree',
      syllabus: ['General Studies', 'Optional Subject', 'Essay', 'Ethics'],
      careerOptions: ['IAS', 'IPS', 'IFS', 'IRS'],
      averageSalary: '₹56K-2.5L per month',
      examPattern: 'Prelims + Mains + Interview'
    },
    'SSC CGL': {
      name: 'SSC CGL',
      difficulty: 'Medium',
      duration: '2 hours (per tier)',
      attempts: 'Once per year',
      eligibility: 'Graduate degree',
      syllabus: ['General Intelligence', 'General Awareness', 'Quantitative Aptitude', 'English'],
      careerOptions: ['Income Tax Inspector', 'Excise Inspector', 'Assistant Audit Officer', 'Statistical Investigator'],
      averageSalary: '₹4-8 LPA',
      examPattern: 'Tier 1 + Tier 2 + Tier 3'
    },
    'CAT': {
      name: 'CAT',
      difficulty: 'Hard',
      duration: '2 hours',
      attempts: 'Once per year',
      eligibility: 'Graduate degree (50% marks)',
      syllabus: ['Quantitative Ability', 'Verbal Ability', 'Data Interpretation'],
      careerOptions: ['Management Consultant', 'Investment Banker', 'Product Manager', 'Business Analyst'],
      averageSalary: '₹15-30 LPA',
      examPattern: 'MCQ + TITA'
    },
    'XAT': {
      name: 'XAT',
      difficulty: 'Hard',
      duration: '3 hours',
      attempts: 'Once per year',
      eligibility: 'Graduate degree',
      syllabus: ['Verbal Ability', 'Decision Making', 'Quantitative Ability', 'Data Interpretation', 'General Knowledge'],
      careerOptions: ['Management Consultant', 'Marketing Manager', 'Finance Manager', 'Operations Manager'],
      averageSalary: '₹12-25 LPA',
      examPattern: 'MCQ + Essay'
    },
    'NDA': {
      name: 'NDA',
      difficulty: 'Medium',
      duration: '4.5 hours (total)',
      attempts: '2 per year',
      eligibility: '12th pass (unmarried male)',
      syllabus: ['Mathematics', 'General Ability Test'],
      careerOptions: ['Army Officer', 'Navy Officer', 'Air Force Officer', 'Defense Services'],
      averageSalary: '₹56K-1.8L per month',
      examPattern: 'Written + SSB Interview'
    },
    'CUET': {
      name: 'CUET',
      difficulty: 'Medium',
      duration: '2-3 hours',
      attempts: 'Once per year',
      eligibility: '12th pass',
      syllabus: ['Domain Subjects', 'General Test', 'Language'],
      careerOptions: ['Journalist', 'Content Writer', 'Teacher', 'Civil Servant'],
      averageSalary: '₹3-8 LPA',
      examPattern: 'MCQ (Computer Based)'
    }
  };

  const handleExamSelect = (examName: string) => {
    if (selectedExams.includes(examName)) {
      setSelectedExams(selectedExams.filter(exam => exam !== examName));
    } else if (selectedExams.length < 3) {
      setSelectedExams([...selectedExams, examName]);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
            Choose Your Stream
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select your academic stream to explore relevant exams, study materials, and preparation strategies
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-indigo-500/5 text-center border border-slate-200/50">
            <div className="text-2xl font-bold text-indigo-600 mb-1">75+</div>
            <div className="text-sm text-slate-600">Total Exams</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-purple-500/5 text-center border border-slate-200/50">
            <div className="text-2xl font-bold text-purple-600 mb-1">500+</div>
            <div className="text-sm text-slate-600">Study Resources</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-emerald-500/5 text-center border border-slate-200/50">
            <div className="text-2xl font-bold text-emerald-600 mb-1">50K+</div>
            <div className="text-sm text-slate-600">Success Stories</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-amber-500/5 text-center border border-slate-200/50">
            <div className="text-2xl font-bold text-amber-600 mb-1">24/7</div>
            <div className="text-sm text-slate-600">AI Support</div>
          </div>
        </div>

        {/* Streams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {streams.map((stream) => (
            <Link
              key={stream.id}
              to={`/exams?stream=${stream.id}`}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 border border-slate-200/50 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stream.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stream.icon className={`w-6 h-6 ${stream.color}`} />
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">{stream.examCount} exams</div>
                  <div className="flex items-center text-indigo-600 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                {stream.name}
              </h3>
              
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {stream.description}
              </p>

              <div className="space-y-2">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Popular Exams</div>
                <div className="flex flex-wrap gap-2">
                  {stream.popularExams.map((exam, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        handleExamSelect(exam);
                      }}
                      className={`px-2 py-1 text-xs rounded-full transition-all duration-200 ${
                        selectedExams.includes(exam)
                          ? 'bg-blue-500 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-blue-100'
                      }`}
                    >
                      {exam}
                    </button>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Exam Comparison Section */}
        {selectedExams.length > 0 && (
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-indigo-500/10 border border-slate-200/50 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <GitCompare className="w-6 h-6" />
                    <h2 className="text-2xl font-bold">Exam Comparison</h2>
                  </div>
                  <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    {selectedExams.length}/3 selected
                  </div>
                </div>
                <p className="text-blue-100 mt-2">
                  Compare selected exams to make an informed decision
                </p>
              </div>

              {selectedExams.length >= 2 ? (
                <div className="p-6">
                  {/* Key Differences Summary */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Key Differences at a Glance
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {(() => {
                        const exams = selectedExams.map(name => examDetails[name]).filter(Boolean);
                        const differences = [];
                        
                        // Difficulty comparison
                        const difficulties = [...new Set(exams.map(e => e.difficulty))];
                        if (difficulties.length > 1) {
                          differences.push({
                            title: 'Difficulty Levels Vary',
                            description: `Ranges from ${difficulties.includes('Medium') ? 'Medium' : 'Hard'} to Hard difficulty`,
                            icon: '⚡'
                          });
                        }
                        
                        // Duration comparison
                        const durations = [...new Set(exams.map(e => e.duration))];
                        if (durations.length > 1) {
                          differences.push({
                            title: 'Different Time Commitments',
                            description: `Exam durations vary significantly`,
                            icon: '⏱️'
                          });
                        }
                        
                        // Salary comparison
                        const salaries = exams.map(e => e.averageSalary);
                        if (salaries.length > 1) {
                          differences.push({
                            title: 'Salary Ranges Differ',
                            description: `Career earning potential varies widely`,
                            icon: '💰'
                          });
                        }
                        
                        // Career paths
                        const allCareers = exams.flatMap(e => e.careerOptions);
                        const uniqueCareers = [...new Set(allCareers)];
                        if (uniqueCareers.length > allCareers.length / 2) {
                          differences.push({
                            title: 'Diverse Career Paths',
                            description: `Each exam opens different career opportunities`,
                            icon: '🎯'
                          });
                        }
                        
                        return differences.slice(0, 4).map((diff, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-slate-200">
                            <span className="text-xl">{diff.icon}</span>
                            <div>
                              <h4 className="font-semibold text-slate-800 text-sm">{diff.title}</h4>
                              <p className="text-slate-600 text-xs">{diff.description}</p>
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 px-4 font-semibold text-slate-700">Criteria</th>
                          {selectedExams.map((examName) => (
                            <th key={examName} className="text-left py-3 px-4 font-semibold text-slate-700 min-w-48">
                              <div className="flex items-center justify-between">
                                <span>{examName}</span>
                                <button
                                  onClick={() => handleExamSelect(examName)}
                                  className="text-red-500 hover:text-red-700 ml-2"
                                >
                                  <XCircle className="w-4 h-4" />
                                </button>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { key: 'difficulty', label: 'Difficulty Level' },
                          { key: 'duration', label: 'Exam Duration' },
                          { key: 'attempts', label: 'Attempts per Year' },
                          { key: 'eligibility', label: 'Eligibility' },
                          { key: 'examPattern', label: 'Exam Pattern' },
                          { key: 'averageSalary', label: 'Average Salary' }
                        ].map((row) => (
                          <tr key={row.key} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="py-3 px-4 font-medium text-slate-600">{row.label}</td>
                            {selectedExams.map((examName) => {
                              const exam = examDetails[examName];
                              if (!exam) return <td key={examName} className="py-3 px-4 text-slate-500">-</td>;
                              
                              const value = exam[row.key as keyof ExamComparison];
                              
                              // Highlight differences with background colors
                              const allValues = selectedExams.map(name => examDetails[name]?.[row.key as keyof ExamComparison]).filter(Boolean);
                              const isUnique = allValues.filter(v => v === value).length === 1;
                              
                              return (
                                <td key={examName} className={`py-3 px-4 ${isUnique ? 'bg-yellow-50 border-l-2 border-yellow-400' : ''}`}>
                                  {row.key === 'difficulty' ? (
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(value as string)}`}>
                                      {value}
                                    </span>
                                  ) : (
                                    <span className={`text-slate-700 ${isUnique ? 'font-semibold' : ''}`}>{value}</span>
                                  )}
                                  {isUnique && (
                                    <span className="ml-2 text-xs text-yellow-600 font-medium">Unique</span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                        <tr className="border-b border-slate-100">
                          <td className="py-3 px-4 font-medium text-slate-600">Syllabus</td>
                          {selectedExams.map((examName) => {
                            const exam = examDetails[examName];
                            return (
                              <td key={examName} className="py-3 px-4">
                                <div className="flex flex-wrap gap-1">
                                  {exam?.syllabus.map((subject, index) => (
                                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                      {subject}
                                    </span>
                                  ))}
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-slate-600">Career Options</td>
                          {selectedExams.map((examName) => {
                            const exam = examDetails[examName];
                            return (
                              <td key={examName} className="py-3 px-4">
                                <div className="space-y-1">
                                  {exam?.careerOptions.slice(0, 3).map((career, index) => (
                                    <div key={index} className="flex items-center space-x-1">
                                      <CheckCircle className="w-3 h-3 text-green-500" />
                                      <span className="text-sm text-slate-600">{career}</span>
                                    </div>
                                  ))}
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Recommendation Section */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      AI Recommendation
                    </h3>
                    <div className="text-slate-700">
                      {(() => {
                        const exams = selectedExams.map(name => examDetails[name]).filter(Boolean);
                        if (exams.length === 2) {
                          const [exam1, exam2] = exams;
                          if (exam1.difficulty !== exam2.difficulty) {
                            return `${exam1.difficulty === 'Medium' ? exam1.name : exam2.name} might be easier to start with, while ${exam1.difficulty === 'Hard' ? exam1.name : exam2.name} offers potentially higher rewards.`;
                          }
                          if (exam1.averageSalary !== exam2.averageSalary) {
                            return `Consider ${exam1.name} for ${exam1.averageSalary.includes('L') ? 'higher' : 'stable'} earning potential vs ${exam2.name} for ${exam2.averageSalary.includes('L') ? 'corporate' : 'government'} career path.`;
                          }
                        }
                        return "Both exams have their unique advantages. Consider your career goals, preparation time, and personal interests when making your choice.";
                      })()}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <div className="text-slate-500 mb-4">
                    Select at least 2 exams to see detailed comparison
                  </div>
                  <div className="text-sm text-slate-400">
                    Click on exam tags above to add them for comparison
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
         <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 text-white shadow-2xl shadow-purple-500/25">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Not Sure Which Stream to Choose?
            </h2>
           <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Our AI assistant can help you identify the best career path based on your interests and goals
            </p>
            <Link
              to="/chat"
             className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-indigo-600 px-6 py-3 rounded-2xl font-semibold hover:shadow-xl hover:shadow-white/25 transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              <span>Get Personalized Guidance</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streams;