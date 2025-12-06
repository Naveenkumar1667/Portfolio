import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, ExternalLink, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from './Navigation';
import ContactForm from './ContactForm';
import naveenImage from '@/assets/naveen-profile.jpg';
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'services', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const skills = {
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    'MERN Stack': ['MongoDB', 'Express.js', 'React.js', 'Node.js','Figma'],
    'Java Full Stack': ['Java', 'Spring Boot', 'J2EE', 'JDK','MySQL','Micro Services'],
    'Programming Language':['C','Fundamentals of Python'],
    'Soft Skills': ['Creative Thinking', 'Adaptability', 'Team Leadership','Problem-Solving']
  };
  const services = [{
    title: 'Web Development',
    description: 'Turning ideas into responsive, beautiful websites that speak for your brand',
    icon: '🌐'
  }, {
    title: 'Java Developer',
    description: 'Building robust backend systems and scalable applications using Java and Spring Boot technologies.',
    icon: '🧑‍💻'
  }];
  const projects = [{
    title: 'Built FoodLine – A Full-Stack Food Ordering Web App with React & Node.js',
    description: 'A MERN full-stack food ordering website with features like user authentication, dynamic menus, cart management, and real-time order tracking. Built using MongoDB, Express.js, React, and Node.js for a smooth and responsive experience.',
    technologies: ['MongoDB', 'Node.js', 'React.js', 'Express.js'],
    link: '#'
  }, {
    title: 'Object Detection System',
    description: 'Implemented a real-time object detection system leveraging YOLOv8n for accurate detection and classification. Features include image preprocessing, model training, and real-time inference for various object categories.',
    technologies: ['Python', 'OpenCV'],
    link: '#'
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-current" />
                Available for new opportunities
              </div>
              
              <h1 className="text-5xl mb-6 leading-tight lg:text-7xl font-bold">
                Hello, I'm <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Naveen Kumar M
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 mb-4 font-medium"> Java and MERN Developer</p>
              
              <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                Crafting digital experiences through code & design. Passionate about building scalable Java applications and innovative full-stack web solutions using the MERN stack.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105">
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Picture */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Profile Picture */}
                <div className="relative w-60 h-70 lg:w-96 lg:h-96">
                  <img src={naveenImage} alt="Naveen Kumar M" className="w-full h-full object-cover rounded-full shadow-2xl shadow-blue-500/50 border-4 border-blue-400/30 relative z-10" />
                  {/* Glowing ring effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-20 blur-md animate-pulse"></div>
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400/20 via-indigo-500/20 to-purple-500/20 blur-xl animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce cursor-pointer text-blue-400 hover:text-blue-300 transition-colors" onClick={() => scrollToSection('about')} />
            <p className="text-sm text-slate-400 mt-2">Scroll to explore</p>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Get to know me better</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <CardContent className="p-8">
                <div className="text-lg leading-relaxed space-y-4 text-slate-300">
                  <p>
                    I'm Naveen Kumar M, currently pursuing my MCA at Dayananda Sagar Arts, Science, and Commerce College. I completed my Bachelor's in Computer Applications from KLE Society's Degree College in 2024 with a CGPA of 8.71.
                  </p>
                  <p>
                    During my academic journey, I have built projects focused on full-stack web development and Java-based applications. For example, I worked on building dynamic and interactive web solutions using the MERN stack, and developed Java-based applications that emphasize problem-solving and clean, modular design.
                  </p>
                  <p>
                    My technical skill set includes Java alongside MERN stack technologies (MongoDB, Express.js, React.js, Node.js). I also have experience with SQL and Power BI, which support my ability to handle both back-end logic and data-driven insights.
                  </p>
                  <p>
                    I am deeply passionate about application development—whether it's building efficient back-end systems in Java or delivering seamless web experiences using MERN. I value time management, creative problem-solving, and team collaboration in every project I work on.
                  </p>
                  <p>
                    Outside academics, I love playing games and chess, which sharpen my strategic thinking and patience—skills that I also bring into my approach toward coding and problem-solving.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">🎯 My Mission</h3>
                <p className="text-slate-300">To design and develop robust applications by leveraging Java and MERN stack technologies, delivering scalable and efficient solutions that solve real-world problems.</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">💡 My Vision</h3>
                <p className="text-slate-300">To build modern digital platforms—whether through Java-powered backends or full-stack MERN applications—that enhance user experiences and empower businesses with reliable technology.</p>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">🚀 My Values</h3>
                <p className="text-slate-300">Commitment to continuous learning in emerging frameworks, clean and creative problem-solving in coding, and collaborative teamwork to deliver impactful software solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-20 px-4 bg-slate-800/30 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-slate-400 text-lg">My academic journey</p>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/30 backdrop-blur-sm hover:from-blue-500/20 hover:to-indigo-500/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">🎓</span>
                  </div>
                  <div>
                    <CardTitle className="text-blue-400 text-xl">Master of Computer Applications</CardTitle>
                    <CardDescription className="text-slate-300 text-lg">Dayananda sagar arts science and commerce</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Currently Pursuing</Badge>
                  <span className="text-slate-400">
2024-2026

                </span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 backdrop-blur-sm hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <CardTitle className="text-purple-400 text-xl">Bachelor of Computer Applications</CardTitle>
                    <CardDescription className="text-slate-300 text-lg">KLE Society's Degree College, Nagarbhavi</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Completed - 2024</Badge>
                  <div className="text-purple-400 font-semibold text-lg">CGPA: 8.71</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
            const gradients = ['from-blue-500/10 to-indigo-500/10 border-blue-500/30', 'from-purple-500/10 to-pink-500/10 border-purple-500/30', 'from-cyan-500/10 to-blue-500/10 border-cyan-500/30', 'from-indigo-500/10 to-purple-500/10 border-indigo-500/30'];
            const textColors = ['text-blue-400', 'text-purple-400', 'text-cyan-400', 'text-indigo-400'];
            return <Card key={category} className={`bg-gradient-to-r ${gradients[index]} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20`}>
                  <CardHeader>
                    <CardTitle className={`${textColors[index]} text-xl flex items-center gap-3`}>
                      <span className="text-2xl">
                        {index === 0 && '🌐'}
                        {index === 1 && '⚛️'}
                        {index === 2 && '🧑‍💻'}
                        {index === 3 && '🔷'}
                        {index === 4 && '🧠'}
                      </span>
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skillList.map(skill => <Badge key={skill} variant="secondary" className="bg-slate-700/50 text-slate-200 border-slate-600/50 hover:bg-slate-600/50 transition-colors text-sm py-1 px-3">
                          {skill}
                        </Badge>)}
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-800/30 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-slate-400 text-lg">What I can do for you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
            const gradients = ['from-blue-500/10 to-indigo-500/10 border-blue-500/30', 'from-purple-500/10 to-pink-500/10 border-purple-500/30'];
            const textColors = ['text-blue-400', 'text-purple-400'];
            return <Card key={index} className={`bg-gradient-to-r ${gradients[index]} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20`}>
                  <CardHeader className="text-center pb-4">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <CardTitle className={`${textColors[index]} text-2xl`}>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-center text-lg leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
            const gradients = ['from-blue-500/10 to-indigo-500/10 border-blue-500/30', 'from-purple-500/10 to-pink-500/10 border-purple-500/30'];
            const textColors = ['text-blue-400', 'text-purple-400'];
            return <Card key={index} className={`bg-gradient-to-r ${gradients[index]} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className={`${textColors[index]} text-xl leading-tight`}>{project.title}</CardTitle>
                      <ExternalLink className={`w-6 h-6 ${textColors[index]} cursor-pointer hover:scale-110 transition-transform`} />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => <Badge key={tech} variant="outline" className={`border-${textColors[index].split('-')[1]}-500 ${textColors[index]} bg-slate-800/50`}>
                          {tech}
                        </Badge>)}
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Excel Dashboard Projects Section */}
      

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Ready to start your next project?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-500/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <a href="mailto:naveenkumarm16675@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                    naveenkumarm16675@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-300">9019823263</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-xl border border-slate-600/50">
                  <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full flex items-center justify-center">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <a href="https://github.com/Naveenkumar1667" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-100 transition-colors">
                    GitHub Profile
                  </a>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <a href="https://www.linkedin.com/in/naveen-kumar-m-1a4b81350" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              Naveen Kumar M
            </div>
            <p className="text-slate-400">Java Developer</p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/Naveenkumar1667" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/naveen-kumar-m-1a4b81350" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:naveenkumarm16675@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-500">
            © 2024 Naveen Kumar M. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default Portfolio;