import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  X, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Shield,
  Palette,
  Code,
  Globe,
  MessageCircle,
  Figma,
  Layers,
  Smartphone,
  Monitor,
  Menu,
  Sun,
  Moon,
  Languages,
  ChevronDown,
  User,
  Zap,
  FolderOpen,
  Phone
} from 'lucide-react';

const FlagEN = () => (
  <span className="block w-6 h-6 rounded-full overflow-hidden bg-white flex items-center justify-center">
    <svg viewBox="0 0 60 60" width="24" height="24" style={{display:'block'}}>
      <circle cx="30" cy="30" r="30" fill="#00247d"/>
      {/* White diagonals */}
      <polygon points="0,0 8,0 60,52 60,60 52,60 0,8" fill="#fff"/>
      <polygon points="60,0 52,0 0,52 0,60 8,60 60,8" fill="#fff"/>
      {/* Red diagonals */}
      <polygon points="0,0 3.5,0 60,56.5 60,60 56.5,60 0,3.5" fill="#cf142b"/>
      <polygon points="60,0 56.5,0 0,56.5 0,60 3.5,60 60,3.5" fill="#cf142b"/>
      {/* White cross */}
      <rect x="25" y="0" width="10" height="60" fill="#fff"/>
      <rect x="0" y="25" width="60" height="10" fill="#fff"/>
      {/* Red cross */}
      <rect x="27.5" y="0" width="5" height="60" fill="#cf142b"/>
      <rect x="0" y="27.5" width="60" height="5" fill="#cf142b"/>
    </svg>
  </span>
);

const FlagVI = () => (
  <span className="block w-6 h-6 rounded-full overflow-hidden bg-white flex items-center justify-center">
    <svg viewBox="0 0 60 60" width="24" height="24" style={{display:'block'}}>
      <circle cx="30" cy="30" r="30" fill="#DA251D"/>
      <polygon points="30,13 33,25 46,25 35,32 38,45 30,37 22,45 25,32 14,25 27,25" fill="#FFCD00"/>
    </svg>
  </span>
);

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = {
    en: ['UX/UI Designer', 'Graphic Designer'],
    vi: ['UX/UI Designer', 'Thiết Kế Đồ Họa']
  };

  const translations = {
    en: {
      // Navigation
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      
      // Hero Section
      heroTitle: 'Le Phu',
      heroSubtitle: 'Crafting digital experiences that blend creativity with functionality.',
      heroExperience: '2+ years',
      heroExperienceText: 'of turning complex problems into elegant solutions.',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch',
      
      // About Section
      aboutTitle: 'About Me',
      aboutDescription: 'Creative and detail-oriented UX/UI designer with 2 years of experience in designing user-centered digital experiences. Proficient in conducting user research, creating wireframes, prototypes, and high-fidelity mockups. Passionate about solving complex problems and enhancing user satisfaction through innovative design solutions.',
      yearsExperience: 'Years Experience',
      projects: 'Projects',
      companies: 'Companies',
      satisfaction: 'Satisfaction',
      experienceEducation: 'Experience & Education',
      
      // Education
      university: 'Vinh Long University of Technology Education',
      universityMajor: 'Graphic Design - Information Technology',
      universityPeriod: '2019 - 2021',
      universityGrade: 'GPA: 3.47 (Very Good)',
      
      school: 'Nguyen Huu Canh Intermediate Professional School',
      schoolMajor: 'Applied Informatics Technology',
      schoolPeriod: '2015 - 2019',
      schoolAward: '3rd Place Website Design Competition',
      
      military: 'Vietnam People\'s Army',
      militaryRole: 'Military Service',
      militaryPeriod: '2022 - 2024',
      militaryUnit: 'Division 5, Regiment 271',
      
      englishGood: 'English - Good',
      koreanLearning: 'Korean - Learning',
      
      // Skills Section
      skillsTitle: 'Core Skills & Technologies',
      skillsSubtitle: 'A comprehensive toolkit for creating exceptional digital experiences',
      designTools: 'Design Tools',
      development: 'Development',
      research: 'Research',
      
      // Projects Section
      projectsTitle: 'Featured Projects',
      projectsSubtitle: 'Showcasing my journey through design challenges and creative solutions',
      viewDetails: 'View Details',
      projectOverview: 'Project Overview',
      technologiesUsed: 'Technologies Used',
      keyResponsibilities: 'Key Responsibilities',
      projectVisuals: 'Project Visuals',
      
      // Contact Section
      contactTitle: 'Let\'s Connect',
      contactSubtitle: 'Ready to bring your ideas to life? Let\'s discuss your next project',
      email: 'Email',
      connectWithMe: 'Connect with me',
      viewMyCode: 'View my code',
      
      // Project Data
      linktoTitle: 'LINKTO Viet Nam',
      linktoSubtitle: 'UX/UI & Graphic Design',
      linktoPeriod: '11/2024 – 03/2025',
      linktoDescription: 'Free commercial solution for influencers',
      linktoResponsibilities: [
        'Designed wireframes, prototypes, and web interfaces',
        'Proposed new features and visuals',
        'Made layout updates from feedback',
        'Designed logo and brand identity system'
      ],
      
      likelionTitle: 'LIKELION Vietnam',
      likelionSubtitle: 'Fresher UX/UI Web Design',
      likelionPeriod: '06/2024 – 10/2024',
      likelionDescription: 'Korean-led coder training center',
      likelionResponsibilities: [
        'Built wireframes, prototypes, and interactive mockups',
        'Collaborated with devs to implement designs',
        'Maintained design consistency',
        'Improved layout from user feedback'
      ],
      
      studioTitle: '25h Studio',
      studioSubtitle: 'Graphic Designer',
      studioPeriod: '05/2020 – 09/2021',
      studioDescription: 'Branding & marketing design',
      studioResponsibilities: [
        'Designed logos and brand identity',
        'Created brochures, packaging, POS materials',
        'Edited and mocked up visuals for e-commerce',
        'Supported team on design revisions and new products'
      ]
    },
    vi: {
      // Navigation
      about: 'Giới Thiệu',
      skills: 'Kỹ Năng',
      projects: 'Dự Án',
      contact: 'Liên Hệ',
      
      // Hero Section
      heroTitle: 'Phú Lê',
      heroSubtitle: 'Tạo ra những trải nghiệm số kết hợp sáng tạo với chức năng.',
      heroExperience: '2+ năm',
      heroExperienceText: 'biến những vấn đề phức tạp thành giải pháp tinh tế.',
      viewWork: 'Xem Công Việc',
      getInTouch: 'Liên Hệ',
      
      // About Section
      aboutTitle: 'Giới Thiệu',
      aboutDescription: 'Nhà thiết kế UX/UI sáng tạo và tỉ mỉ với 2 năm kinh nghiệm thiết kế trải nghiệm số lấy người dùng làm trung tâm. Thành thạo trong việc nghiên cứu người dùng, tạo wireframe, prototype và mockup chất lượng cao. Đam mê giải quyết các vấn đề phức tạp và nâng cao sự hài lòng của người dùng thông qua các giải pháp thiết kế sáng tạo.',
      yearsExperience: 'Năm Kinh Nghiệm',
      projects: 'Dự Án',
      companies: 'Công Ty',
      satisfaction: 'Hài Lòng',
      experienceEducation: 'Kinh Nghiệm & Học Vấn',
      
      // Education
      university: 'Trường Đại học Sư phạm Kỹ thuật Vĩnh Long',
      universityMajor: 'Thiết Kế Đồ Họa - Công Nghệ Thông Tin',
      universityPeriod: '2019 - 2021',
      universityGrade: 'GPA: 3.47 (Khá)',
      
      school: 'Trường Trung cấp Nghề Nguyễn Hữu Cảnh',
      schoolMajor: 'Công Nghệ Thông Tin Ứng Dụng',
      schoolPeriod: '2015 - 2019',
      schoolAward: 'Giải Ba - Cuộc thi Thiết kế Website',
      
      military: 'Quân Đội Nhân Dân Việt Nam',
      militaryRole: 'Nghĩa Vụ Quân Sự',
      militaryPeriod: '2022 - 2024',
      militaryUnit: 'Sư đoàn 5, Trung đoàn 271',
      
      englishGood: 'Tiếng Anh - Tốt',
      koreanLearning: 'Tiếng Hàn - Đang học',
      
      // Skills Section
      skillsTitle: 'Kỹ Năng & Công Nghệ Cốt Lõi',
      skillsSubtitle: 'Bộ công cụ toàn diện để tạo ra những trải nghiệm số đặc biệt',
      designTools: 'Công Cụ Thiết Kế',
      development: 'Phát Triển',
      research: 'Nghiên Cứu',
      
      // Projects Section
      projectsTitle: 'Dự Án Nổi Bật',
      projectsSubtitle: 'Thể hiện hành trình của tôi qua các thử thách thiết kế và giải pháp sáng tạo',
      viewDetails: 'Xem Chi Tiết',
      projectOverview: 'Tổng Quan Dự Án',
      technologiesUsed: 'Công Nghệ Sử Dụng',
      keyResponsibilities: 'Trách Nhiệm Chính',
      projectVisuals: 'Hình Ảnh Dự Án',
      
      // Contact Section
      contactTitle: 'Kết Nối',
      contactSubtitle: 'Sẵn sàng biến ý tưởng của bạn thành hiện thực? Hãy thảo luận về dự án tiếp theo',
      email: 'Email',
      connectWithMe: 'Kết nối với tôi',
      viewMyCode: 'Xem code của tôi',
      
      // Project Data
      linktoTitle: 'LINKTO Việt Nam',
      linktoSubtitle: 'Thiết Kế UX/UI & Đồ Họa',
      linktoPeriod: '11/2024 – 03/2025',
      linktoDescription: 'Giải pháp thương mại miễn phí cho influencer',
      linktoResponsibilities: [
        'Thiết kế wireframe, prototype và giao diện web',
        'Đề xuất tính năng và hình ảnh mới',
        'Cập nhật bố cục từ phản hồi',
        'Thiết kế logo và hệ thống nhận diện thương hiệu'
      ],
      
      likelionTitle: 'LIKELION Việt Nam',
      likelionSubtitle: 'Thiết Kế Web UX/UI Fresher',
      likelionPeriod: '06/2024 – 10/2024',
      likelionDescription: 'Trung tâm đào tạo lập trình do Hàn Quốc dẫn đầu',
      likelionResponsibilities: [
        'Xây dựng wireframe, prototype và mockup tương tác',
        'Hợp tác với dev để triển khai thiết kế',
        'Duy trì tính nhất quán trong thiết kế',
        'Cải thiện bố cục từ phản hồi người dùng'
      ],
      
      studioTitle: '25h Studio',
      studioSubtitle: 'Nhà Thiết Kế Đồ Họa',
      studioPeriod: '05/2020 – 09/2021',
      studioDescription: 'Thiết kế thương hiệu & marketing',
      studioResponsibilities: [
        'Thiết kế logo và nhận diện thương hiệu',
        'Tạo brochure, bao bì, vật liệu POS',
        'Chỉnh sửa và mockup hình ảnh cho thương mại điện tử',
        'Hỗ trợ team trong việc sửa đổi thiết kế và sản phẩm mới'
      ]
    }
  };

  const t = translations[language];

  // Typing effect
  useEffect(() => {
    const currentRole = roles[language][currentRoleIndex];
    let timeout;

    if (isTyping) {
      if (typedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles[language].length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentRoleIndex, language]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Language toggle
  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setTypedText('');
    setCurrentRoleIndex(0);
    setIsTyping(true);
  };
  // Projects Data
  const projects = [
    {
      id: 1,
      title: t.linktoTitle,
      subtitle: t.linktoSubtitle,
      period: t.linktoPeriod,
      description: t.linktoDescription,
      technologies: ["Figma", "Photoshop", "Illustrator", "Adobe Tools"],
      responsibilities: t.linktoResponsibilities,
      images: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: t.likelionTitle,
      subtitle: t.likelionSubtitle,
      period: t.likelionPeriod,
      description: t.likelionDescription,
      technologies: ["Figma", "Photoshop", "Illustrator", "HTML", "Tailwind CSS", "JavaScript"],
      responsibilities: t.likelionResponsibilities,
      images: [
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: t.studioTitle,
      subtitle: t.studioSubtitle,
      period: t.studioPeriod,
      description: t.studioDescription,
      technologies: ["Canva", "Photoshop", "Illustrator", "Premiere"],
      responsibilities: t.studioResponsibilities,
      images: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const skills = [
    { name: "Figma", icon: Figma, category: t.designTools },
    { name: "Photoshop", icon: Palette, category: t.designTools },
    { name: "Illustrator", icon: Layers, category: t.designTools },
    { name: "HTML/CSS", icon: Code, category: t.development },
    { name: "JavaScript", icon: Code, category: t.development },
    { name: "Tailwind CSS", icon: Code, category: t.development },
    { name: "Responsive Design", icon: Smartphone, category: t.designTools },
    { name: "Prototyping", icon: Monitor, category: t.designTools },
    { name: "User Research", icon: MessageCircle, category: t.research },
    { name: "Wireframing", icon: Layers, category: t.designTools },
    { name: "Brand Identity", icon: Palette, category: t.designTools },
    { name: "Web Design", icon: Globe, category: t.designTools }
  ];

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const themeClasses = isDarkMode 
    ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white'
    : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 text-gray-900';

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-slate-900/80 backdrop-blur-lg border-b border-white/10' 
          : 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'about', label: t.about, icon: User },
                { id: 'skills', label: t.skills, icon: Zap },
                { id: 'projects', label: t.projects, icon: FolderOpen },
                { id: 'contact', label: t.contact, icon: Phone }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Language Toggle Switch - Fixed UI/UX */}
              <div
                className={`relative w-28 h-11 flex items-center select-none cursor-pointer transition-colors duration-300
                  ${isDarkMode ? 'bg-[#232b36]' : 'bg-[#f3f4f6]'}
                  rounded-full border ${isDarkMode ? 'border-[#2d3748]' : 'border-[#e5e7eb]'} shadow-sm`}
                onClick={() => toggleLanguage(language === 'en' ? 'vi' : 'en')}
                role="button"
                tabIndex={0}
                aria-label="Toggle language"
              >
                {/* Labels */}
                <span
                  className={`absolute left-4 top-1/2 -translate-y-1/2 text-base font-bold tracking-widest transition-colors duration-200
                    ${language === 'vi' ? (isDarkMode ? 'text-white' : 'text-gray-800') : (isDarkMode ? 'text-gray-500' : 'text-gray-400')}`}
                  style={{ zIndex: 1 }}
                >
                  VI
                </span>
                <span
                  className={`absolute right-4 top-1/2 -translate-y-1/2 text-base font-bold tracking-widest transition-colors duration-200
                    ${language === 'en' ? (isDarkMode ? 'text-white' : 'text-gray-800') : (isDarkMode ? 'text-gray-500' : 'text-gray-400')}`}
                  style={{ zIndex: 1 }}
                >
                  EN
                </span>
                {/* Thumb */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center shadow-lg border-2 transition-all duration-300
                    ${language === 'vi' ? 'left-2' : 'right-2'}
                    ${isDarkMode ? 'bg-[#232b36] border-[#2d3748]' : 'bg-white border-white'}
                    hover:scale-105 active:scale-95`}
                  style={{ zIndex: 2 }}
                >
                  {language === 'vi' ? <FlagVI /> : <FlagEN />}
                </div>
              </div>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'text-yellow-400 hover:bg-white/10' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden mt-4 py-4 border-t ${
              isDarkMode ? 'border-white/10' : 'border-gray-200'
            }`}>
              <div className="flex flex-col space-y-2">
                {[
                  { id: 'about', label: t.about, icon: User },
                  { id: 'skills', label: t.skills, icon: Zap },
                  { id: 'projects', label: t.projects, icon: FolderOpen },
                  { id: 'contact', label: t.contact, icon: Phone }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20' 
            : 'bg-gradient-to-r from-blue-600/10 to-purple-600/10'
        }`}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} rounded-full px-6 py-2`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-medium">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t.heroTitle.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t.heroTitle.split(' ')[1]}</span>
          </h1>
          
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.heroSubtitle}
          </p>
          
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <span className="text-purple-400 font-semibold">{t.heroExperience}</span> {t.heroExperienceText}
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                {t.viewWork}
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 ${
                isDarkMode ? '' : 'hover:text-white'
              }`}
            >
              {t.getInTouch}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${
            isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className={`${
              isDarkMode 
                ? 'bg-white/5 backdrop-blur-lg border-white/10' 
                : 'bg-white/80 backdrop-blur-lg border-gray-200/50'
            } rounded-3xl p-8 md:p-12 border`}>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Profile Image */}
                <div className="md:col-span-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
                    <img 
                      src="/z6735531149233_75673d7bb4c1b2199b723d0e42e33453 copy.jpg" 
                      alt="Alex Johnson"
                      className={`relative w-full aspect-square object-cover rounded-2xl border-2 ${
                        isDarkMode ? 'border-white/20' : 'border-gray-200'
                      }`}
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{t.aboutTitle}</h2>
                    <p className={`text-lg leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {t.aboutDescription}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className={`${
                      isDarkMode 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-white/50 border-gray-200'
                    } rounded-xl p-4 text-center border`}>
                      <div className="text-2xl font-bold text-purple-400">2+</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t.yearsExperience}</div>
                    </div>
                    <div className={`${
                      isDarkMode 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-white/50 border-gray-200'
                    } rounded-xl p-4 text-center border`}>
                      <div className="text-2xl font-bold text-pink-400">15+</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t.projects}</div>
                    </div>
                    <div className={`${
                      isDarkMode 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-white/50 border-gray-200'
                    } rounded-xl p-4 text-center border`}>
                      <div className="text-2xl font-bold text-cyan-400">3</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t.companies}</div>
                    </div>
                    <div className={`${
                      isDarkMode 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-white/50 border-gray-200'
                    } rounded-xl p-4 text-center border`}>
                      <div className="text-2xl font-bold text-green-400">100%</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t.satisfaction}</div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-4">
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{t.experienceEducation}</h3>
                    
                    {/* Education */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.university}</h4>
                        <p className="text-purple-400 text-sm">{t.universityMajor}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t.universityPeriod} • {t.universityGrade}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.school}</h4>
                        <p className="text-purple-400 text-sm">{t.schoolMajor}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t.schoolPeriod} • {t.schoolAward}</p>
                      </div>
                    </div>

                    {/* Military Service */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.military}</h4>
                        <p className="text-purple-400 text-sm">{t.militaryRole}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t.militaryPeriod} • {t.militaryUnit}</p>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {t.englishGood}
                    </span>
                    <span className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {t.koreanLearning}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t.skillsTitle.split('&')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">&{t.skillsTitle.split('&')[1]}</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.skillsSubtitle}
            </p>
          </div>

          {/* Skills organized in two rows */}
          <div className="space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {skills.slice(0, 6).map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group ${
                    isDarkMode 
                      ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-purple-500/50 hover:bg-white/10' 
                      : 'bg-white/80 backdrop-blur-lg border-gray-200/50 hover:border-purple-500/50 hover:bg-white'
                  } rounded-2xl p-6 border transition-all duration-500 hover:scale-105 cursor-pointer ${
                    isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`font-semibold group-hover:text-purple-400 transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {skill.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      isDarkMode 
                        ? 'bg-purple-500/20 text-purple-300' 
                        : 'bg-purple-100 text-purple-600'
                    }`}>
                      {skill.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {skills.slice(6, 12).map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group ${
                    isDarkMode 
                      ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-purple-500/50 hover:bg-white/10' 
                      : 'bg-white/80 backdrop-blur-lg border-gray-200/50 hover:border-purple-500/50 hover:bg-white'
                  } rounded-2xl p-6 border transition-all duration-500 hover:scale-105 cursor-pointer ${
                    isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`font-semibold group-hover:text-blue-400 transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {skill.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      isDarkMode 
                        ? 'bg-blue-500/20 text-blue-300' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {skill.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t.projectsTitle.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t.projectsTitle.split(' ')[1]}</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.projectsSubtitle}
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-700 ${
                  isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => openProject(project)}
              >
                <div className={`${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-purple-500/50 hover:bg-white/10' 
                    : 'bg-white/80 backdrop-blur-lg border-gray-200/50 hover:border-purple-500/50 hover:bg-white'
                } rounded-3xl p-8 border transition-all duration-500 hover:scale-[1.02] flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}>
                  {/* Project Visual */}
                  <div className="flex-1 relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                    <div className={`relative ${
                      isDarkMode ? 'bg-white/10' : 'bg-white/50'
                    } rounded-2xl p-6 aspect-video flex items-center justify-center border ${
                      isDarkMode ? 'border-white/20' : 'border-gray-200'
                    }`}>
                      <div className="text-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Briefcase className="w-8 h-8 text-white" />
                        </div>
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                        <p className="text-purple-400">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                    
                    <h3 className={`text-2xl md:text-3xl font-bold group-hover:text-purple-400 transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-lg leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-purple-400 text-sm px-3 py-1">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="font-medium">{t.viewDetails}</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t.contactTitle.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t.contactTitle.split(' ')[1]}</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.contactSubtitle}
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a
              href="mailto:alex.johnson@email.com"
              className={`group ${
                isDarkMode 
                  ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-purple-500/50 hover:bg-white/10' 
                  : 'bg-white/80 backdrop-blur-lg border-gray-200/50 hover:border-purple-500/50 hover:bg-white'
              } rounded-2xl p-8 border transition-all duration-300 hover:scale-105 text-center`}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.email}</h3>
              <p className="text-purple-400">alex.johnson@email.com</p>
            </a>

            <a
              href="https://linkedin.com/in/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${
                isDarkMode 
                  ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-blue-500/50 hover:bg-white/10' 
                  : 'bg-white/80 backdrop-blur-lg border-gray-200/50 hover:border-blue-500/50 hover:bg-white'
              } rounded-2xl p-8 border transition-all duration-300 hover:scale-105 text-center`}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h3>
              <p className="text-blue-400">{t.connectWithMe}</p>
            </a>

            <a
              href="https://github.com/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${
                isDarkMode 
                  ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-green-500/50 hover:bg-white/10' 
                  : 'bg-white/80 backdrop-blur-lg border-gray-200/50 hover:border-green-500/50 hover:bg-white'
              } rounded-2xl p-8 border transition-all duration-300 hover:scale-105 text-center`}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</h3>
              <p className="text-green-400">{t.viewMyCode}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`${
            isDarkMode ? 'bg-slate-900' : 'bg-white'
          } rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border ${
            isDarkMode ? 'border-white/20' : 'border-gray-200'
          }`}>
            {/* Modal Header */}
            <div className={`sticky top-0 ${
              isDarkMode ? 'bg-slate-900/95' : 'bg-white/95'
            } backdrop-blur-sm border-b ${
              isDarkMode ? 'border-white/10' : 'border-gray-200'
            } p-6 flex justify-between items-center`}>
              <div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedProject.title}</h2>
                <p className="text-purple-400">{selectedProject.subtitle}</p>
              </div>
              <button
                onClick={closeProject}
                className={`w-10 h-10 ${
                  isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
                } rounded-full flex items-center justify-center transition-colors`}
              >
                <X className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Project Info */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.projectOverview}</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{selectedProject.description}</p>
                  <div className="flex items-center gap-2 text-purple-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedProject.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.technologiesUsed}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.keyResponsibilities}</h3>
                <ul className="space-y-2">
                  {selectedProject.responsibilities.map((responsibility, index) => (
                    <li key={index} className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Images */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.projectVisuals}</h3>
                <div className="relative">
                  <div className={`aspect-video ${
                    isDarkMode ? 'bg-white/5' : 'bg-gray-100'
                  } rounded-2xl overflow-hidden border ${
                    isDarkMode ? 'border-white/10' : 'border-gray-200'
                  }`}>
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </>
                  )}
                </div>

                {/* Image Indicators */}
                {selectedProject.images.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-purple-400' : isDarkMode ? 'bg-white/30' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;