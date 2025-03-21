import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleSkills, setVisibleSkills] = useState([]);
  
  const techStackRef = useRef(null);

  const skillCategories = ['All', 'AI', 'Frontend', 'Design','Database'];
  
  const skills = [
    { name: 'C++', level: 90, category: 'Language' },
    { name: 'Python', level: 75, category: 'Language' },
    { name: 'JavaScript', level: 85, category: 'Language' },
    { name: 'LangChain', level: 85, category: 'AI' },
    { name: 'Datastax', level: 85, category: 'AI' },
    { name: 'Tensorflow', level: 85, category: 'AI' },
    { name: 'Pytorch', level: 85, category: 'AI' },
    { name: 'Numpy', level: 85, category: 'AI' },
    { name: 'Pandas', level: 85, category: 'AI' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
    { name: 'GSAP', level: 85, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 65, category: 'Database' },
    { name: 'AstraDB', level: 65, category: 'Database' },
    { name: 'Neo4j', level: 60, category: 'Database' },
    { name: 'Figma', level: 80, category: 'Design' },
    { name: 'UI/UX', level: 75, category: 'Design' },
    { name: 'Git', level: 85, category: 'DevOps' },
  ];
  
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  // Animate skill bars when category changes
  useEffect(() => {
    setVisibleSkills([]);
    const timers = [];
    
    filteredSkills.forEach((skill, index) => {
      const timer = setTimeout(() => {
        setVisibleSkills(prev => [...prev, skill.name]);
      }, 100 * index);
      timers.push(timer);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [activeCategory]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've cultivated a diverse set of skills throughout my journey as a developer.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 dark:text-white text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 ${
                visibleSkills.includes(skill.name) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-300 py-1 px-3 rounded-full">
                  {skill.category}
                </span>
              </div>

              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Proficiency</span>
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-300">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full transition-all duration-700"
                  style={{ width: visibleSkills.includes(skill.name) ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies I Work With Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          <div 
            ref={techStackRef} 
            id="tech-stack"
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { name: "React", icon: "⚛️" },
              { name: "JavaScript", icon: "🟨" },
              { name: "TypeScript", icon: "🔵" },
              { name: "Node.js", icon: "🟢" },
              { name: "MongoDB", icon: "🍃" },
              { name: "Tailwind", icon: "🌊" }
            ].map((tech, index) => (
              <div key={tech.name} className="flex flex-col items-center group">
                <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-700 shadow-md rounded-xl mb-2 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
