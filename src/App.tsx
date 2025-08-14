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
  Phone,
  Sparkles,
  Cpu,
  Database,
  Network,
  Wallet,
  Coins,
  Rocket,
  Target,
  Brain,
  Eye,
  Fingerprint,
  Building
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

type Language = 'en' | 'vi';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  images: string[];
  color: string;
  figma?: string;
}

// Web3 Background Components
const Web3Background = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {/* Animated Grid */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-800">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>
    </div>
    
    {/* Enhanced Floating Particles */}
    <div className="absolute top-20 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-80"></div>
    <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-90"></div>
    <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-pink-400 rounded-full animate-bounce opacity-85"></div>
    <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-70"></div>
    <div className="absolute bottom-20 right-20 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-80"></div>
    <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-75"></div>
    
    {/* Enhanced Geometric Shapes */}
    <div className="absolute top-10 right-10 w-40 h-40 border border-indigo-500/30 rotate-45 animate-spin" style={{animationDuration: '25s'}}></div>
    <div className="absolute bottom-10 left-10 w-32 h-32 border border-purple-500/30 rounded-full animate-pulse"></div>
    <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg rotate-12 animate-bounce" style={{animationDuration: '4s'}}></div>
    <div className="absolute top-2/3 right-1/4 w-16 h-16 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
  </div>
);

const Web3Card = ({ children, className = "", glowColor = "purple", style }: { children: React.ReactNode, className?: string, glowColor?: string, style?: React.CSSProperties }) => {
  const glowClasses = {
    purple: "hover:shadow-purple-500/30",
    cyan: "hover:shadow-cyan-500/30", 
    pink: "hover:shadow-pink-500/30",
    blue: "hover:shadow-blue-500/30",
    emerald: "hover:shadow-emerald-500/30",
    indigo: "hover:shadow-indigo-500/30"
  };
  
  return (
    <div className={`relative group ${className}`} style={style}>
      {/* Enhanced Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${glowColor}-500/25 to-${glowColor}-600/25 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
      
      {/* Card Content */}
      <div className={`relative bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-2xl border border-white/25 rounded-3xl p-6 transition-all duration-700 hover:scale-105 hover:border-${glowColor}-500/60 ${glowClasses[glowColor as keyof typeof glowClasses]}`}>
        {children}
      </div>
    </div>
  );
};

const Web3Button = ({ children, onClick, variant = "primary", className = "" }: { children: React.ReactNode, onClick?: () => void, variant?: "primary" | "secondary" | "outline", className?: string }) => {
  const baseClasses = "relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-110 active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white shadow-xl hover:shadow-indigo-500/40",
    secondary: "bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 text-white shadow-xl hover:shadow-cyan-500/40",
    outline: "border-3 border-indigo-500/60 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400 backdrop-blur-xl"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

const App = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Default to dark for Web3
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('en');
  const [typedText, setTypedText] = useState<string>('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const roles: Record<Language, string[]> = {
    en: ['UX/UI Designer', 'Graphic Designer'],
    vi: ['UX/UI Designer', 'Thiết Kế Đồ Họa']
  };

  const translations: Record<Language, any> = {
    en: {
      // Navigation
      about: 'About',
      skills: 'Skills',
      projectsNav: 'Projects',
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
      projectsNav: 'Dự Án',
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
    let timeout: ReturnType<typeof setTimeout>;

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
  const scrollToSection = (sectionId: string) => {
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
  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    setTypedText('');
    setCurrentRoleIndex(0);
    setIsTyping(true);
  };

  // Projects Data
  const projects = [
    {
      id: 1,
       title: "Water – Blockchain Platform Landing Page",
       subtitle: "UX/UI Web Design (Freelance Project)",
       period: "05/2025 - 06/2025",
       description: "Blockchain platform landing page with focus on sustainability and modern design",
       technologies: ["Figma", "Responsive Design", "UI/UX Design", "Prototyping"],
       responsibilities: [
         "Created desktop and mobile mockups in Figma, ensuring responsive layouts and consistent visual hierarchy",
         "Developed a clean and modern UI that reflected the brand's identity and sustainability message",
         "Collaborated with the development team to provide design specifications, component guidelines, and visual assets",
         "Suggested UI improvements for call-to-action placement and content structure to improve conversion potential",
         "Delivered high-fidelity prototypes on time, enabling smooth developer handoff and efficient build process"
       ],
       images: [
         "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
         "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
       ],
       color: "from-blue-500 to-cyan-500",
       figma: "https://www.figma.com/design/gZN376p4mky6FFVbk975lk/Web-3-Landing-page--Freelance-?node-id=0-1&t=N3ZTdbjvHkZz2Ong-1"
     },
    {
      id: 2,
      title: "LINKTO Viet Nam",
      subtitle: "UX/UI & Graphic Design",
      period: "11/2024 - 03/2025",
      description: "Comprehensive design solutions for influencer platform",
      technologies: ["Figma", "Photoshop", "Illustrator", "Responsive Design", "Brand Identity"],
      responsibilities: [
        "Designed wireframes, interactive prototypes, and responsive web interfaces to ensure a seamless user experience across devices",
        "Proposed and visualized new features and creative concepts that aligned with brand guidelines and project objectives",
        "Implemented layout enhancements and design adjustments based on user testing results and stakeholder feedback",
        "Created a professional logo and a comprehensive brand identity system, including typography, color palette, and iconography"
      ],
      images: [
        "/linkto/linkto1.png",
        "/linkto/linkto2.png",
        "/linkto/linkto3.png"
      ],
      color: "from-purple-500 to-pink-500",
      figma: "https://www.figma.com/design/w45MpynaLvHlAbaOGOIl2I/APP-LINKTO?node-id=0-1&t=AtL10unOJdyIvN60-1"
    },
    {
      id: 3,
      title: "LIKELION Viet Nam",
      subtitle: "UX/UI Web Design",
      period: "06/2024 - 10/2024",
      description: "Korean-led coding training center website design",
      technologies: ["Figma", "Photoshop", "Illustrator", "HTML", "Tailwind CSS", "JavaScript"],
      responsibilities: [
        "Built wireframes, high-fidelity prototypes, and interactive mockups to visualize and refine user flows",
        "Collaborated closely with developers to ensure pixel-perfect implementation of designs",
        "Maintained design system consistency across all screens and components",
        "Improved layouts and interactions based on user testing insights and stakeholder feedback"
      ],
      images: [
        "/likelion/likelion1.png",
        "/likelion/likelion2.jpg",
        "/likelion/likelion3.png"
      ],
             color: "from-green-500 to-emerald-500",
       figma: "https://www.figma.com/design/2yXyFNJkuaGIbdrXBnvkXc/Jobspot?node-id=1-48&t=wzrN82kDH09DqiFp-1"
    },
    {
      id: 4,
      title: "UrbanFit – Fashion & Lifestyle Onboarding App",
      subtitle: "UX/UI & Graphic Design (Freelance Project)",
      period: "03/2024 - 07/2024",
      description: "Mobile app onboarding experience for fashion and lifestyle brand",
      technologies: ["Figma", "Mobile Design", "UI/UX Design", "Brand Design", "Prototyping"],
      responsibilities: [
        "Created splash screen, onboarding flow, and responsive mobile layouts with brand-consistent typography, color palette, and imagery",
        "Developed interactive high-fidelity mockups and design prototypes in Figma for developer handoff",
        "Collaborated closely with developers to ensure design feasibility and pixel-perfect implementation",
        "Participated in brainstorming sessions with the marketing team to align visuals with campaign messages",
        "Delivered final design assets on schedule, resulting in a smooth development process and positive client feedback"
      ],
             images: [
         "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
         "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
       ],
       color: "from-pink-500 to-rose-500",
       figma: "https://www.figma.com/design/p3Pvh4KHq82PDEgD6TP6Hc/Freelance---Ecommerce-App?node-id=0-1&t=4IO0rKhZV5qviD5u-1"
    },
    {
      id: 5,
      title: "25h Studio",
      subtitle: "Branding & Marketing Design",
      period: "05/2020 - 09/2021",
      description: "Comprehensive branding and marketing design services",
      technologies: ["Canva", "Photoshop", "Illustrator", "Premiere", "Brand Identity"],
      responsibilities: [
        "Designed logos and developed comprehensive brand identity systems, including typography, color palettes, and visual guidelines",
        "Created marketing collateral such as brochures, packaging, and POS materials to support product launches and brand campaigns",
        "Edited product images and created realistic mockups for e-commerce platforms to enhance visual appeal and conversion rates",
        "Collaborated with the design team on revisions and new product concepts based on client requirements and market trends"
      ],
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

  const openProject = (project: Project) => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-800 text-white relative overflow-hidden">
      {/* Web3 Background */}
      <Web3Background />
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-800/30 backdrop-blur-2xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Le Phu
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'about', label: t.about, icon: User, color: 'indigo' },
                { id: 'skills', label: t.skills, icon: Zap, color: 'purple' },
                { id: 'projects', label: t.projectsNav, icon: FolderOpen, color: 'pink' },
                { id: 'contact', label: t.contact, icon: Phone, color: 'cyan' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-500 hover:scale-110 text-gray-200 hover:text-white font-semibold"
                >
                  {/* Enhanced Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}-500/30 to-${item.color}-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <item.icon className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6">
              {/* Language Toggle Switch */}
              <div
                className="relative w-32 h-12 flex items-center select-none cursor-pointer bg-slate-700/60 backdrop-blur-2xl rounded-full border border-white/30 shadow-xl"
                onClick={() => toggleLanguage(language === 'en' ? 'vi' : 'en')}
                role="button"
                tabIndex={0}
                aria-label="Toggle language"
              >
                {/* Labels */}
                <span
                  className={`absolute left-5 top-1/2 -translate-y-1/2 text-sm font-black tracking-widest transition-colors duration-300 ${
                    language === 'vi' ? 'text-white' : 'text-gray-400'
                  }`}
                  style={{ zIndex: 1 }}
                >
                  VI
                </span>
                <span
                  className={`absolute right-5 top-1/2 -translate-y-1/2 text-sm font-black tracking-widest transition-colors duration-300 ${
                    language === 'en' ? 'text-white' : 'text-gray-400'
                  }`}
                  style={{ zIndex: 1 }}
                >
                  EN
                </span>
                {/* Thumb */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-xl border-2 transition-all duration-500 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 border-indigo-400 hover:scale-110 active:scale-95 ${
                    language === 'vi' ? 'left-2' : 'right-2'
                  }`}
                  style={{ zIndex: 2 }}
                >
                  {language === 'vi' ? <FlagVI /> : <FlagEN />}
                </div>
              </div>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-3 rounded-2xl bg-slate-700/60 backdrop-blur-2xl border border-white/30 text-yellow-300 hover:text-white hover:bg-indigo-500/30 transition-all duration-500 hover:scale-110 shadow-xl"
              >
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-3 rounded-2xl bg-slate-700/60 backdrop-blur-2xl border border-white/30 text-gray-200 hover:text-white hover:bg-indigo-500/30 transition-all duration-500 shadow-xl"
              >
                <Menu className="w-6 h-6" />
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
                  { id: 'projects', label: t.projectsNav, icon: FolderOpen },
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
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Web3 Hero Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-800/60 to-purple-900/40"></div>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Web3 Badge */}
          <div className="inline-block mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-60 animate-pulse"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-2xl border border-indigo-500/40 rounded-3xl px-10 py-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-black text-xl">
                {typedText}
                  <span className="animate-pulse text-indigo-400">|</span>
              </span>
              </div>
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-tight">
            <span className="text-white">{t.heroTitle.split(' ')[0]}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
              {t.heroTitle.split(' ')[1]}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl max-w-5xl mx-auto leading-relaxed mb-6 text-gray-200 font-medium">
            {t.heroSubtitle}
          </p>
          
          {/* Experience */}
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-16 text-gray-300">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-black">
              {t.heroExperience}
            </span> {t.heroExperienceText}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Web3Button 
              onClick={() => scrollToSection('projects')}
              variant="primary"
              className="group"
            >
              <span className="flex items-center justify-center gap-3">
                <Rocket className="w-5 h-5" />
                {t.viewWork}
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Web3Button>
            
            <Web3Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="group"
            >
              <span className="flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5" />
              {t.getInTouch}
              </span>
            </Web3Button>
          </div>
          
          {/* Enhanced Floating Elements */}
          <div className="absolute top-20 left-20 w-5 h-5 bg-indigo-400 rounded-full animate-bounce opacity-80"></div>
          <div className="absolute top-40 right-32 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-90"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-85"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-75"></div>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-80"></div>
        </div>
      </section>

      {/* About Section - Web3 Redesign */}
      <section id="about" className="py-32 px-6 relative">
        {/* Web3 Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="text-white">{t.aboutTitle.split(' ')[0]}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                {t.aboutTitle.split(' ')[1]}
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className={`grid lg:grid-cols-12 gap-12 transition-all duration-1000 ${
            isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            {/* Left Column - Profile & Stats */}
            <div className="lg:col-span-5 space-y-8">
              {/* Profile Card */}
              <Web3Card className="p-8" glowColor="indigo">
                <div className="text-center">
                {/* Profile Image */}
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                    <img 
                      src="/z6735531149233_75673d7bb4c1b2199b723d0e42e33453 copy.jpg" 
                      alt="Le Trieu Phu"
                      className="relative w-48 h-48 object-top object-cover rounded-full border-4 border-white/30 shadow-2xl"
                      style={{ objectPosition: 'top' }}
                    />
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-400 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                </div>

                  {/* Name & Title */}
                  <h3 className="text-2xl font-black text-white mb-2">Le Trieu Phu</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-bold text-lg mb-4">
                    {typedText}
                    <span className="animate-pulse text-indigo-400">|</span>
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                      {t.aboutDescription}
                    </p>
                  </div>
              </Web3Card>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2+", label: t.yearsExperience, color: "indigo", icon: Target },
                  { value: "5", label: t.projects, color: "purple", icon: FolderOpen },
                  { value: "5", label: t.companies, color: "pink", icon: Building },
                  { value: "100%", label: t.satisfaction, color: "cyan", icon: Award }
                ].map((stat, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/40 to-${stat.color}-600/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    <div className="relative bg-slate-700/70 backdrop-blur-2xl border border-white/30 rounded-2xl p-4 text-center group-hover:border-indigo-500/60 transition-all duration-700 group-hover:scale-110">
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                    </div>
                      <div className={`text-2xl font-black text-${stat.color}-400`}>{stat.value}</div>
                      <div className="text-xs text-gray-300 font-medium">{stat.label}</div>
                    </div>
                    </div>
                ))}
                    </div>
                  </div>

            {/* Right Column - Timeline & Languages */}
            <div className="lg:col-span-7 space-y-8">
              {/* Experience Timeline */}
              <Web3Card className="p-8" glowColor="purple">
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  {t.experienceEducation}
                </h3>
                
                <div className="space-y-6">
                  {/* Education Items */}
                  <div className="relative pl-8 border-l-2 border-indigo-500/30">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <div className="bg-slate-700/50 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                      <h4 className="font-bold text-white mb-1">{t.university}</h4>
                      <p className="text-indigo-400 text-sm font-medium">{t.universityMajor}</p>
                      <p className="text-gray-400 text-sm">{t.universityPeriod} • {t.universityGrade}</p>
                      </div>
                    </div>

                  <div className="relative pl-8 border-l-2 border-purple-500/30">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <div className="bg-slate-700/50 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                      <h4 className="font-bold text-white mb-1">{t.school}</h4>
                      <p className="text-purple-400 text-sm font-medium">{t.schoolMajor}</p>
                      <p className="text-gray-400 text-sm">{t.schoolPeriod} • {t.schoolAward}</p>
                      </div>
                    </div>

                  <div className="relative pl-8 border-l-2 border-pink-500/30">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                    <div className="bg-slate-700/50 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                      <h4 className="font-bold text-white mb-1">{t.military}</h4>
                      <p className="text-pink-400 text-sm font-medium">{t.militaryRole}</p>
                      <p className="text-gray-400 text-sm">{t.militaryPeriod} • {t.militaryUnit}</p>
                      </div>
                      </div>
                    </div>
              </Web3Card>

                  {/* Languages */}
              <Web3Card className="p-8" glowColor="cyan">
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  Languages
                </h3>
                
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 text-indigo-300 px-6 py-3 rounded-2xl text-lg font-bold backdrop-blur-xl">
                      {t.englishGood}
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-cyan-300 px-6 py-3 rounded-2xl text-lg font-bold backdrop-blur-xl">
                      {t.koreanLearning}
                  </div>
                </div>
              </Web3Card>
            </div>
          </div>
        </div>
      </section>

                     {/* Skills Section - Web3 Redesign */}
        <section id="skills" className="py-32 px-6 relative">
          {/* Web3 Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="text-white">{t.skillsTitle.split('&')[0]}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  &{t.skillsTitle.split('&')[1]}
                </span>
            </h2>
              <p className="text-xl max-w-4xl mx-auto text-gray-200 font-medium mb-8">
              {t.skillsSubtitle}
            </p>
              <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

            {/* Skills Categories */}
            <div className={`transition-all duration-1000 ${
                    isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              
              {/* Design Tools Category */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white">{t.designTools}</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills.filter(skill => skill.category === t.designTools).map((skill, index) => (
                    <div key={skill.name} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="relative bg-slate-700/70 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 text-center group-hover:border-indigo-500/60 transition-all duration-700 group-hover:scale-110">
                        <div className="relative mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                            <skill.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          {/* Floating Particles */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                        </div>
                        <h4 className="font-bold text-lg text-white group-hover:text-indigo-300 transition-colors duration-300 mb-3">
                      {skill.name}
                        </h4>
                        <div className="w-full bg-slate-600/50 rounded-full h-3 group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-500">
                          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 group-hover:w-full shadow-lg" style={{ width: '90%' }}></div>
                        </div>
                  </div>
                </div>
              ))}
                </div>
            </div>

              {/* Development Category */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Code className="w-6 h-6 text-white" />
                    </div>
                  <h3 className="text-3xl font-black text-white">{t.development}</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills.filter(skill => skill.category === t.development).map((skill, index) => (
                    <div key={skill.name} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="relative bg-slate-700/70 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 text-center group-hover:border-cyan-500/60 transition-all duration-700 group-hover:scale-110">
                        <div className="relative mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                            <skill.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          {/* Floating Particles */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                        </div>
                        <h4 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors duration-300 mb-3">
                      {skill.name}
                        </h4>
                        <div className="w-full bg-slate-600/50 rounded-full h-3 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-500">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000 group-hover:w-full shadow-lg" style={{ width: '85%' }}></div>
                        </div>
                  </div>
                </div>
              ))}
                </div>
              </div>

              {/* Research Category */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white">{t.research}</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills.filter(skill => skill.category === t.research).map((skill, index) => (
                    <div key={skill.name} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="relative bg-slate-700/70 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 text-center group-hover:border-emerald-500/60 transition-all duration-700 group-hover:scale-110">
                        <div className="relative mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                            <skill.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          {/* Floating Particles */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                        </div>
                        <h4 className="font-bold text-lg text-white group-hover:text-emerald-300 transition-colors duration-300 mb-3">
                          {skill.name}
                        </h4>
                        <div className="w-full bg-slate-600/50 rounded-full h-3 group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-green-400 transition-all duration-500">
                          <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all duration-1000 group-hover:w-full shadow-lg" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        {/* Web3 Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">{t.projectsTitle.split(' ')[0]}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                {t.projectsTitle.split(' ')[1]}
              </span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              {t.projectsSubtitle}
            </p>
          </div>

          {/* Enhanced Web3 Timeline Container */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
              <div className="w-full h-full bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400 shadow-lg rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400 rounded-full animate-pulse opacity-50"></div>
            </div>
            
            {/* Projects Timeline */}
            <div className="space-y-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                  className={`relative transition-all duration-700 ${
                  isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 md:left-1/2 w-5 h-5 rounded-full border-3 transform -translate-x-1/2 shadow-lg ${
                    isDarkMode ? 'bg-slate-900 border-purple-400' : 'bg-white border-purple-400'
                  } z-10`}></div>
                   
                  {/* Project Card - Left Side (Even Index) */}
                  {index % 2 === 0 ? (
                    <div className="ml-16 md:mr-auto md:pr-8 md:w-[48%]">
                <div className={`${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-purple-500/50 hover:bg-white/10' 
                    : 'bg-white/80 backdrop-blur-lg border-gray-200/50 hover:border-purple-500/50 hover:bg-white'
                      } rounded-2xl p-6 border transition-all duration-500 hover:scale-[1.02] cursor-pointer group shadow-lg hover:shadow-xl`}
                      onClick={() => openProject(project)}>
                         
                        {/* Project Header */}
                        <div className="mb-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg`}>
                              {index + 1}
                            </div>
                            <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full border border-purple-400/20">
                              {project.period}
                            </span>
                          </div>
                          <h3 className={`text-xl font-bold group-hover:text-purple-400 transition-colors mb-1 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {project.title}
                          </h3>
                          <p className="text-purple-400 text-sm font-medium">{project.subtitle}</p>
                        </div>

                        {/* Project Description */}
                        <p className={`text-sm leading-relaxed mb-4 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {project.description}
                        </p>

                        {/* Project Thumbnails */}
                        <div className="flex gap-2 mb-4">
                          {project.images.slice(0, 3).map((image, imgIndex) => (
                            <div key={imgIndex} className="w-16 h-16 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-purple-400 transition-all duration-300 shadow-md">
                              <img
                                src={image}
                                alt={`${project.title} - ${imgIndex + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                        </div>
                          ))}
                      </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies.slice(0, 2).map((tech) => (
                            <span
                              key={tech}
                              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 2 && (
                            <span className="text-purple-400 text-xs px-2 py-1 bg-purple-400/10 rounded-full border border-purple-400/20">
                              +{project.technologies.length - 2} more
                            </span>
                          )}
                    </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                            <span className="text-sm font-medium">{t.viewDetails}</span>
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                          {/* Figma Button */}
                          {project.figma && (
                            <a
                              href={project.figma}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium text-xs shadow-lg transition-all duration-300 hover:scale-105 ${
                                isDarkMode 
                                  ? 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-purple-500/25' 
                                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200 hover:shadow-purple-500/25'
                              }`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Figma className="w-3 h-3" />
                              Figma
                            </a>
                          )}
                    </div>
                      </div>
                    </div>
                  ) : (
                    /* Project Card - Right Side (Odd Index) */
                    <div className="ml-16 md:ml-auto md:pl-8 md:w-[48%]">
                      <div className={`${
                        isDarkMode 
                          ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-purple-500/50 hover:bg-white/10' 
                          : 'bg-white/80 backdrop-blur-lg border-gray-200/50 hover:border-purple-500/50 hover:bg-white'
                      } rounded-2xl p-6 border transition-all duration-500 hover:scale-[1.02] cursor-pointer group shadow-lg hover:shadow-xl`}
                      onClick={() => openProject(project)}>
                         
                        {/* Project Header */}
                        <div className="mb-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg`}>
                              {index + 1}
                            </div>
                            <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full border border-purple-400/20">
                              {project.period}
                            </span>
                          </div>
                          <h3 className={`text-xl font-bold group-hover:text-purple-400 transition-colors mb-1 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                          <p className="text-purple-400 text-sm font-medium">{project.subtitle}</p>
                        </div>
                    
                        {/* Project Description */}
                        <p className={`text-sm leading-relaxed mb-4 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>

                        {/* Project Thumbnails */}
                        <div className="flex gap-2 mb-4">
                          {project.images.slice(0, 3).map((image, imgIndex) => (
                            <div key={imgIndex} className="w-16 h-16 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-purple-400 transition-all duration-300 shadow-md">
                              <img
                                src={image}
                                alt={`${project.title} - ${imgIndex + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                          {project.technologies.length > 2 && (
                            <span className="text-purple-400 text-xs px-2 py-1 bg-purple-400/10 rounded-full border border-purple-400/20">
                              +{project.technologies.length - 2} more
                        </span>
                      )}
                    </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                            <span className="text-sm font-medium">{t.viewDetails}</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                          
                          {/* Figma Button */}
                          {project.figma && (
                            <a
                              href={project.figma}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium text-xs shadow-lg transition-all duration-300 hover:scale-105 ${
                                isDarkMode 
                                  ? 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-purple-500/25' 
                                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200 hover:shadow-purple-500/25'
                              }`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Figma className="w-3 h-3" />
                              Figma
                            </a>
                          )}
                  </div>
                </div>
                    </div>
                  )}
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className={`text-6xl md:text-5xl font-bold mb-6 ${
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

          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Email */}
            <a
              href="mailto:trieuphuisme@gmail.com"
              className={`group ${
                isDarkMode 
                  ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-purple-500/50 hover:bg-white/10' 
                  : 'bg-white/80 backdrop-blur-lg border-gray-200/50 hover:border-purple-500/50 hover:bg-white'
              } rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:scale-105 text-center flex flex-col items-center`}
              style={{ minWidth: 0 }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className={`text-lg md:text-xl font-semibold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.email}</h3>
              <p 
                className="text-purple-400 text-sm md:text-base break-all"
                style={{ wordBreak: 'break-all' }}
              >
                trieuphuisme@gmail.com
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/phule0520/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${
                isDarkMode 
                  ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-blue-500/50 hover:bg-white/10' 
                  : 'bg-white/80 backdrop-blur-lg border-gray-200/50 hover:border-blue-500/50 hover:bg-white'
              } rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:scale-105 text-center flex flex-col items-center`}
              style={{ minWidth: 0 }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className={`text-lg md:text-xl font-semibold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h3>
              <p className="text-blue-400 text-sm md:text-base">{t.connectWithMe}</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/capt4inb"
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${
                isDarkMode 
                  ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-green-500/50 hover:bg-white/10' 
                  : 'bg-white/80 backdrop-blur-lg border-gray-200/50 hover:border-green-500/50 hover:bg-white'
              } rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:scale-105 text-center flex flex-col items-center`}
              style={{ minWidth: 0 }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className={`text-lg md:text-xl font-semibold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</h3>
              <p className="text-green-400 text-sm md:text-base">{t.viewMyCode}</p>
            </a>

            {/* Phone */}
            <div
              className={`group ${
                isDarkMode 
                  ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-pink-500/50 hover:bg-white/10' 
                  : 'bg-white/80 backdrop-blur-lg border-gray-200/50 hover:border-pink-500/50 hover:bg-white'
              } rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:scale-105 text-center flex flex-col items-center justify-center`}
              style={{ minWidth: 0 }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className={`text-lg md:text-xl font-semibold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.phone || 'Phone'}</h3>
              <p className="text-pink-400 text-sm md:text-base break-all">036 5454 067</p>
            </div>
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

              {/* Figma Button for project 1 and 2 */}
              {('figma' in selectedProject) && selectedProject.figma && (
                <div className="mt-4 flex">
                  <a
                    href={selectedProject.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow transition-all duration-300 hover:scale-105
                      ${isDarkMode ? 'bg-purple-700 text-white hover:bg-purple-800' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`}
                  >
                    <Figma className="w-5 h-5" />
                    {language === 'vi' ? 'Xem Figma' : 'View Figma'}
                  </a>
                </div>
              )}

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