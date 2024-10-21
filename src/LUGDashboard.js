import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Terminal, Shield, Paintbrush, Megaphone, TrendingUp, Lightbulb, Film, FileText } from 'lucide-react';
import logoImage from '../src/data/logo.png'; // Import the logo image

const departments = [
    {
      name: 'Tech',
      color: '#1793D1',
      icon: Terminal,
      eb: ['Ankit', 'Radhesh'],
      core: ['Vansh', 'Ansh', 'Dhruv', 'Nupur'],
      additional: ['Aditya', 'Sunita', 'Harsh', 'Rupinderjeet', 'Devansh']
    },
    {
      name: 'Cyber Security',
      color: '#87CF3E',
      icon: Shield,
      eb: ['Radhesh', 'Ankit'],
      core: ['Lakshita'],
      additional: ['Harsh', 'Jayant', 'Keshav', 'Aarzu', 'Suryanshu', 'Rupinderjeet kaur']
    },
    {
      name: 'Design',
      color: '#DD4814',
      icon: Paintbrush,
      eb: ['Advit'],
      core: ['Dhruv', 'Kushagra', 'Shipra', 'Nupur', 'Mehak'],
      additional: ['Jayant', 'Harsh', 'Riya', 'Sunita', 'Aarzu']
    },
    {
      name: 'Publicity',
      color: '#FBBC05',
      icon: Megaphone,
      eb: ['Inesh', 'Parth'],
      core: ['Ansh'],
      additional: ['Pulkit', 'Rupinderjeet kaur', 'Aarzu', 'Riya', 'Devansh', 'Sunita']
    },
    {
      name: 'Marketing',
      color: '#73BA25',
      icon: TrendingUp,
      eb: ['Inesh', 'Parth'],
      core: ['Kushagra'],
      additional: ['Pulkit', 'Aditya', 'Jayant', 'Keshav', 'Suryansh']
    },
    {
      name: 'Creativity',
      color: '#0DB7ED',
      icon: Lightbulb,
      eb: ['Aanchal'],
      core: ['Nancy', 'Mehak'],
      additional: ['Aditya', 'Sunita', 'Keshav', 'Aarzu', 'Riya']
    },
    {
      name: 'Media',
      color: '#FF8C00',
      icon: Film,
      eb: ['Amish'],
      core: ['Nancy', 'Ansh', 'Kushagra', 'Mehak'],
      additional: ['Devansh']
    },
    {
      name: 'Content',
      color: '#7B3F00',
      icon: FileText,
      eb: ['Aanchal'],
      core: ['Shipra', 'Nancy'],
      additional: ['Riya']
    }
  ];

const Department = ({ dept }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = dept.icon;

  return (
    <div className="mb-6 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer transition-colors duration-300 bg-gradient-to-r"
        style={{ backgroundImage: `linear-gradient(135deg, ${dept.color}, ${dept.color}CC)` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="bg-white p-2 rounded-full mr-3 shadow-inner">
            <Icon className="text-gray-800" size={24} />
          </div>
          <h2 className="text-xl font-bold text-white">{dept.name}</h2>
        </div>
        {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
      </div>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-64' : 'max-h-0'}`}
        style={{ backgroundColor: `${dept.color}11` }}
      >
        <div className="p-4 overflow-y-auto max-h-64">
          {['eb', 'core', 'additional'].map((category) => (
            <div key={category} className="mb-3">
              <h3 className="font-semibold capitalize">{category === 'eb' ? 'Executive Board (EB)' : category}:</h3>
              <ul className="list-none">
                {dept[category].map((member, index) => (
                  <li key={index} className="transition-all duration-300 hover:translate-x-2 flex items-center my-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TerminalAnimation = () => {
    const [text, setText] = useState('');
    const fullText = '> Welcome to LUG\n> Exploring Linux & Open Source\n> Enhancing Cybersecurity\n> $ sudo ./start_adventure.sh';
    useEffect(() => {
      let i = 0;
      const timer = setInterval(() => {
        setText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="bg-gray-900 p-4 rounded-lg text-green-400 font-mono text-sm mb-6 shadow-lg">
        <pre>{text}<span className="animate-pulse">_</span></pre>
      </div>
    );
  };
const LUGDashboard = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <img src={logoImage} alt="LUG Logo" className="w-24 h-24 mx-auto mb-4 object-contain" />
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 animate-bounce">
        LUG Department Structure (2024-25)
      </h1>
      <TerminalAnimation />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept, index) => (
          <Department key={index} dept={dept} />
        ))}
      </div>
      <p className="mt-8 text-sm text-gray-600 italic text-center">
        Note: All Departments will be assisted by Executive Board (EB) and Core Members.
      </p>
    </div>
  );
};

export default LUGDashboard;