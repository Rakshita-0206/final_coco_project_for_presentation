import React from 'react';
import { Github, Linkedin, Mail, Code, Database, FileText, Brain, Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  icon: React.ComponentType<any>;
  color: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Rakshita K Biradar',
      role: 'Frontend Developer',
      description: 'Crafting beautiful, responsive user interfaces with modern web technologies and ensuring exceptional user experiences.',
      avatar: '/WhatsApp Image 2025-08-07 at 13.21.26_c7ca6dc5.jpg',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX Design'],
      social: {
        github: 'https://github.com/rakshita',
        linkedin: 'https://linkedin.com/in/rakshita-biradar',
        email: 'rakshita@smartprep.com'
      },
      icon: Code,
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Anuradha',
      role: 'Backend Developer',
      description: 'Building robust, scalable server architectures and APIs that power the SmartPrep recommendation engine.',
      avatar: '/WhatsApp Image 2025-08-07 at 14.21.31_ea247dd2.jpg',
      skills: ['Node.js', 'Python', 'MongoDB', 'API Development'],
      social: {
        github: 'https://github.com/anuradha',
        linkedin: 'https://linkedin.com/in/anuradha-dev',
        email: 'anuradha@smartprep.com'
      },
      icon: Database,
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Jamal',
      role: 'Documentation Specialist',
      description: 'Creating comprehensive documentation, user guides, and ensuring clear communication across all project aspects.',
      avatar: '/WhatsApp Image 2025-08-07 at 15.56.25_16321d7d.jpg',
      skills: ['Technical Writing', 'Documentation', 'User Research', 'Content Strategy'],
      social: {
        github: 'https://github.com/jamal',
        linkedin: 'https://linkedin.com/in/jamal-docs',
        email: 'jamal@smartprep.com'
      },
      icon: FileText,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Cheerajeev',
      role: 'ML Model Training',
      description: 'Developing and training machine learning models for intelligent content recommendation and personalized learning paths.',
      avatar: '/WhatsApp Image 2025-08-08 at 15.31.22_9afd40ce.jpg',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science'],
      social: {
        github: 'https://github.com/cheerajeev',
        linkedin: 'https://linkedin.com/in/cheerajeev-ml',
        email: 'cheerajeev@smartprep.com'
      },
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Ritesh',
      role: 'ML Model Training',
      description: 'Specializing in deep learning algorithms and neural network optimization for educational content analysis and recommendation systems.',
      avatar: '/WhatsApp Image 2025-08-08 at 15.34.48_3db43c49.jpg',
      skills: ['Deep Learning', 'PyTorch', 'NLP', 'Model Optimization'],
      social: {
        github: 'https://github.com/ritesh',
        linkedin: 'https://linkedin.com/in/ritesh-ai',
        email: 'ritesh@smartprep.com'
      },
      icon: Brain,
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const stats = [
    { number: '5', label: 'Team Members' },
    { number: '10+', label: 'Technologies' },
    { number: '100%', label: 'Dedication' },
    { number: '24/7', label: 'Commitment' }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The passionate individuals behind SmartPrep, working together to revolutionize educational preparation
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl shadow-indigo-500/5 border border-slate-200/50">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group hover:-translate-y-2 border border-slate-200/50"
            >
              {/* Avatar and Role Icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
                  />
                  <div className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <member.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-100 hover:bg-slate-800 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-slate-100 hover:bg-red-500 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 text-white text-center shadow-2xl shadow-purple-500/25">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="w-8 h-8" />
            <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
          </div>
          <p className="text-indigo-100 text-lg max-w-3xl mx-auto leading-relaxed">
            We're committed to democratizing quality education and making exam preparation accessible to every student. 
            Through innovative technology and personalized learning experiences, we aim to empower students to achieve 
            their academic goals and realize their full potential.
          </p>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Innovation</h3>
              <p className="text-slate-600">
                Constantly pushing boundaries with cutting-edge AI and machine learning technologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Collaboration</h3>
              <p className="text-slate-600">
                Working together as a unified team to create exceptional educational experiences
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Excellence</h3>
              <p className="text-slate-600">
                Maintaining the highest standards in everything we do, from code to user experience
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Want to Join Our Team?</h2>
          <p className="text-slate-600 mb-6">
            We're always looking for talented individuals who share our vision of transforming education
          </p>
          <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;