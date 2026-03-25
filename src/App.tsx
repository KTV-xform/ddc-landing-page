/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Shield, 
  Globe, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  Menu, 
  X, 
  Linkedin, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  ChevronRight,
  Database,
  Layers,
  Zap,
  Twitter,
  BarChart3,
  Users,
  Leaf,
  Play,
  ChevronDown,
  Award,
  Briefcase,
  Key
} from 'lucide-react';
import { useState, useEffect } from 'react';

const TreeIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Trunk */}
    <path d="M12 22V14" stroke="#8B4513" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 14L16 10" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 16L8 12" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round"/>
    
    {/* Leaves */}
    <path d="M12 12C12 12 8 10 8 6C8 2 12 1 12 1C12 1 16 2 16 6C16 10 12 12 12 12Z" fill="#22C55E"/>
    <path d="M8 12C8 12 5 11 5 8C5 5 8 4 8 4C8 4 11 5 11 8C11 11 8 12 8 12Z" fill="#4ADE80"/>
    <path d="M16 10C16 10 19 9 19 6C19 3 16 2 16 2C16 2 13 3 13 6C13 9 16 10 16 10Z" fill="#4ADE80"/>
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const navLinks = [
    { name: 'Về chúng tôi', href: '#about' },
    { name: 'Đối tác', href: '#partners' },
    { name: 'Sản phẩm & Dịch vụ', href: '#ecosystem' },
    { name: 'Dự án', href: '#projects' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light selection:bg-brand-green selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center text-white">
              <Leaf size={32} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold tracking-tight text-white leading-none">DDC HOLDINGS</span>
              <span className="text-[10px] text-white/80 font-medium">Grow Smarter, Harvest Better</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link font-medium">
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-brand-green transition-colors">
              <Globe size={16} /> VN <ChevronDown size={14} />
            </div>
            <button className="bg-brand-green hover:bg-brand-green-dark text-white px-6 py-2 rounded-full font-bold transition-all">
              Liên hệ
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-brand-dark border-b border-white/5 py-8 px-6"
          >
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <motion.a 
                  variants={itemVariants}
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-display text-white/80 hover:text-brand-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div variants={itemVariants} className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-brand-green transition-colors text-white">
                <Globe size={16} /> VN <ChevronDown size={14} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000" 
            alt="Nature Sprout" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
          {/* White gradient overlay at the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
        </div>

        <div className="container mx-auto px-6 pt-20 pb-24 relative z-10 flex flex-col items-center justify-center text-center h-full">
          <div className="max-w-5xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-8 leading-[1.1] tracking-tight text-white uppercase"
              >
                TIÊN PHONG SỐ HÓA <br />
                & QUẢN LÝ TÀI SẢN SỐ
              </motion.h1>
              <motion.div variants={itemVariants} className="flex justify-center">
                <button className="bg-brand-green hover:bg-brand-green-dark text-white px-10 py-4 text-lg font-bold rounded-full transition-all shadow-xl">
                  Liên hệ với chúng tôi
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center text-brand-green shadow-2xl border-4 border-[#F8FCF9]">
            <TreeIcon size={48} />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="about" className="py-32 bg-white text-brand-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-green text-2xl font-display font-medium mb-8 block">Tầm nhìn</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-20 text-[#1A1A1A]">
                Trở thành doanh nghiệp tiên phong trong lĩnh vực số hóa và quản lý tài sản số hóa ở Việt Nam và Châu Á
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t border-gray-200"
            >
              {[
                { value: '10+', label: 'Đối tác chiến lược' },
                { value: '10+', label: 'Dự án đang triển khai' },
                { value: '30%', label: 'Lợi nhuận trung bình' },
                { value: '$5M', label: 'Tài sản đang quản lý' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`flex flex-col ${i !== 0 ? 'lg:border-l lg:border-gray-200 lg:pl-12' : ''}`}
                >
                  <div className="text-6xl font-display font-bold text-[#1A1A1A] mb-4">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#F8FCF9] p-12 rounded-lg"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                  <Globe size={32} className="text-brand-green" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 text-[#1A1A1A]">Chúng tôi đang làm gì?</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Chúng tôi ứng dụng công nghệ blockchain, IoT để số hóa tài sản nông nghiệp, truy xuất nguồn gốc nông sản từ đó tạo ra một hệ sinh thái nông nghiệp hiệu quả, minh bạch
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#F8FCF9] p-12 rounded-lg"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                  <Award size={32} className="text-brand-green" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 text-[#1A1A1A]">Chúng tôi đem lại giá trị gì?</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Chúng tôi mang lại giá trị qua việc tăng tính minh bạch, nâng cao thanh khoản của tài sản nông nghiệp, tối ưu hóa sản xuất và mở ra cơ hội đầu tư bền vững cho nông dân và nhà đầu tư.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" 
            alt="Forest Mission" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Sứ mệnh của chúng tôi
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              Chúng tôi cam kết tạo ra những giá giá trị lâu dài. Với tầm nhìn dài hạn, chúng tôi đồng hành cùng khách hàng để tối ưu hóa lợi nhuận, giảm thiểu rủi ro và thúc đẩy tăng trưởng bền vững.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commitments Section */}
      <section id="ecosystem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            {/* Card 1: Xã hội */}
            <motion.div 
              variants={itemVariants}
              className="p-10 border border-gray-100 rounded-sm bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center mb-8">
                <Globe className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Đối với xã hội</h3>
              <p className="text-gray-600 leading-relaxed">
                Nâng tầm vị thế người nông dân Việt Nam và nông sản Việt Nam trên thị trường quốc tế
              </p>
            </motion.div>

            {/* Card 2: Đối tác */}
            <motion.div 
              variants={itemVariants}
              className="p-10 border border-gray-100 rounded-sm bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center mb-8">
                <Briefcase className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Đối với đối tác</h3>
              <p className="text-gray-600 leading-relaxed">
                Tôn trọng, hợp tác bền vững và tư duy cùng thắng
              </p>
            </motion.div>

            {/* Card 3: Nhân viên */}
            <motion.div 
              variants={itemVariants}
              className="p-10 border border-gray-100 rounded-sm bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Đối với nhân viên</h3>
              <p className="text-gray-600 leading-relaxed">
                Tạo một môi trường thuận lợi nhất để nhân sự làm việc bằng đam mê và nâng cao giá trị của bản thân
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Card 4: Nhà đầu tư */}
            <motion.div 
              variants={itemVariants}
              className="p-10 border border-gray-100 rounded-sm bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center mb-8">
                <Key className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Đối với nhà đầu tư</h3>
              <p className="text-gray-600 leading-relaxed">
                Mang lại hiệu quả tài chính cho nhà đầu tư và sự an tâm, tin cậy lâu dài
              </p>
            </motion.div>

            {/* Card 5: Khách hàng */}
            <motion.div 
              variants={itemVariants}
              className="p-10 border border-gray-100 rounded-sm bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Đối với khách hàng</h3>
              <p className="text-gray-600 leading-relaxed">
                Phụng sự tận tâm, chu đáo và hiệu quả
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section id="partners" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Field Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-20"
          >
            Đối tác chiến lược
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <span className="text-3xl font-bold text-white/80 tracking-tighter">BYBIT</span>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white/80 rounded-sm rotate-45" />
                </div>
                <span className="text-xl font-black text-white/80 uppercase">CK CAPITAL</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/80 rounded-sm" />
                <span className="text-xl font-bold text-white/80">Followin</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <span className="text-3xl font-bold text-white/80 italic">BingX</span>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center"
          >
            <motion.div variants={itemVariants}>
              <div className="flex flex-col items-center gap-2">
                <Award className="w-12 h-12 text-white/80" />
                <span className="text-lg font-bold text-white/80 uppercase tracking-widest">BTN GROUP</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="flex flex-col items-center gap-2">
                <Leaf className="w-12 h-12 text-white/80" />
                <span className="text-lg font-bold text-white/80 uppercase tracking-widest">Di-Agri Chain</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 border-2 border-white/80 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 text-white/80 rotate-90" />
                </div>
                <span className="text-lg font-bold text-white/80 uppercase tracking-widest">PRO INVEST</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founding Team Section */}
      <section className="py-32 bg-[#F8FCF9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-[#1A4D2E]"
            >
              Đội ngũ sáng lập
            </motion.h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {[
              { 
                name: 'Nguyễn Văn Chinh', 
                role: 'Chủ tịch kiêm CEO',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500' 
              },
              { 
                name: 'Vũ Hoài Vũ', 
                role: 'Phó chủ tịch',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500' 
              },
              { 
                name: 'Nguyễn Hùng Sơn', 
                role: 'Giám đốc vp Tây Nguyên',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500' 
              },
              { 
                name: 'Ngô Gia Long', 
                role: 'Giám đốc Vận Hành',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500' 
              },
              { 
                name: 'Trần Văn Diên', 
                role: 'Giám đốc công nghệ',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500' 
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white border border-gray-100 rounded-sm overflow-hidden text-center pb-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/5] mb-6 overflow-hidden bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 px-4">{member.name}</h3>
                <p className="text-gray-500 text-sm px-4">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-[#1A4D2E] mb-20"
          >
            Dự án của chúng tôi
          </motion.h2>

          <div className="space-y-0">
            {[
              {
                id: '01',
                title: 'VN01 - 5ha',
                desc: 'Dự án gồm 1,250 cây sầu riêng được trồng từ năm 2018',
                images: [
                  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600',
                  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=600'
                ]
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative border-t border-gray-200 py-16 cursor-pointer overflow-hidden"
              >
                {/* Hover Background Overlay */}
                <div className="absolute inset-0 bg-[#F8FCF9] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                <div className="relative z-10 flex items-center">
                  <span className="text-2xl font-display text-gray-400 mr-20">{project.id}</span>
                  
                  <div className="flex-1">
                    <motion.p 
                      className="text-gray-500 text-lg mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      {project.desc}
                    </motion.p>
                    <h3 className="text-4xl md:text-6xl font-display font-bold text-gray-900 group-hover:text-brand-green transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>

                  {/* Arrow - Hidden on hover */}
                  <div className="group-hover:opacity-0 transition-opacity duration-300">
                    <ArrowRight size={48} className="text-gray-900" />
                  </div>

                  {/* Hover Images */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-4 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-700 pointer-events-none">
                    <div className="w-48 h-32 rounded-xl overflow-hidden shadow-2xl rotate-[-5deg] translate-y-4">
                      <img src={project.images[0]} alt="Project 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="w-64 h-40 rounded-xl overflow-hidden shadow-2xl rotate-[5deg] -translate-x-12">
                      <img src={project.images[1]} alt="Project 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blog" className="py-32 bg-[#F8FCF9] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold text-[#1A4D2E]"
            >
              Các bài Blogs
            </motion.h2>
          </div>

          <div className="relative">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  title: 'Token Hóa Tài Sản Thực (RWA) Tại Việt Nam Và Châu Á: Cơ Hội, Thách Thức Và Tương Lai',
                  image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800'
                },
                {
                  title: 'Blockchain: Công Nghệ Đột Phá Định Hình Tương Lai Ngành Công Nghiệp và Xã Hội',
                  image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800'
                },
                {
                  title: 'Xu hướng RWA (Real World Asset) và tiềm năng phát triển vượt bậc',
                  image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=800'
                },
                {
                  title: 'Số Hóa – Chìa Khóa Cho Nông Nghiệp Hiện Đại',
                  image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800'
                }
              ].map((blog, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-transparent group cursor-pointer"
                >
                  <div className="aspect-[1.5/1] rounded-2xl overflow-hidden mb-6 bg-white">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A4D2E] leading-snug mb-4 group-hover:text-brand-green transition-colors">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-2 text-brand-green font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Đọc tiếp <ArrowRight size={16} />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right side overlay gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none hidden lg:block" />

            {/* Navigation Button - Square rounded */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center text-white shadow-xl hidden lg:flex"
            >
              <ChevronRight size={32} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#006400] to-[#004d00] py-16 px-6 text-center"
          >
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-20" style={{ 
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Bạn muốn hợp tác?</h2>
              <p className="text-white/90 text-lg md:text-xl mb-10">
                Vui lòng gửi mail đến: <span className="font-bold">business@ddcholdings.co</span>
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#32CD32] hover:bg-[#28a428] text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg"
              >
                Liên hệ với chúng tôi
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Footer Section */}
      <footer className="bg-[#1A2E26] pt-24 pb-0 text-white/80 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center">
                <Leaf size={32} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-display font-bold tracking-tight text-white leading-none uppercase">DDC HOLDINGS</span>
                <span className="text-sm text-white/60 font-medium mt-1">Grow Smarter, Harvest Better</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            <div>
              <h4 className="text-white font-bold text-lg mb-8">Chính sách & Điều khoản</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng dịch vụ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-8">Thông tin</h4>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <MapPin size={20} className="text-white shrink-0 mt-1" />
                  <p className="leading-relaxed">
                    Số 25 Vũ Ngọc Phan, phường Láng Hạ, quận Đống Đa, Hà Nội
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone size={20} className="text-white shrink-0" />
                  <p className="leading-relaxed">(+84) 969 961 905</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-8">Hỗ trợ</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp (FAQs)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn sử dụng dịch vụ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trung tâm hỗ trợ khách hàng trực tuyến</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-8">Tuyển dụng</h4>
              <p className="leading-relaxed">
                Cơ hội việc làm tại DDC Holdings.
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex gap-8">
              <a href="#" className="text-white/60 hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-white/60 hover:text-white transition-colors"><Send size={24} /></a>
              <a href="#" className="text-white/60 hover:text-white transition-colors"><Facebook size={24} /></a>
            </div>
          </div>
        </div>

        {/* Massive Background Text */}
        <div className="w-full overflow-hidden pointer-events-none select-none">
          <h2 className="text-[18vw] font-display font-bold text-white/[0.08] leading-none tracking-tighter text-center uppercase whitespace-nowrap">
            DDC HOLDINGS
          </h2>
        </div>
      </footer>
    </div>
  );
}
