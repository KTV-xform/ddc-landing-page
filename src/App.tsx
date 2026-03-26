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
  ChevronLeft,
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
import Lottie from 'lottie-react';

const TREE_LOTTIE_URL = 'https://lottie.host/b7d11a4b-862e-4fdb-bdba-069a9166b0e2/BXaexx9f6Y.json';
import ddcLogo from './assets/ddc-logo.svg';

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

const blogData = [
  {
    title: 'Token Hóa Tài Sản Thực (RWA) Tại Việt Nam Và Châu Á: Cơ Hội, Thách Thức Và Tương Lai',
    image: 'https://framerusercontent.com/images/X0Ew6djGg32epjWCQL12UVqLak.png?scale-down-to=512',
    link: 'https://substack.com/home/post/p-158491061'
  },
  {
    title: 'Blockchain: Công Nghệ Đột Phá Định Hình Tương Lai Ngành Công Nghiệp và Xã Hội',
    image: 'https://framerusercontent.com/images/Z0Us1UN9NK4leaLCZ7u1q5tqh8w.webp?scale-down-to=512&width=1456&height=819',
    link: 'https://substack.com/home/post/p-158491036'
  },
  {
    title: 'Xu hướng RWA (Real World Asset) và tiềm năng phát triển vượt bậc',
    image: 'https://framerusercontent.com/images/cTFQvUzOlGZGuClwuogKW2pxTGk.jpg?scale-down-to=512&width=1600&height=900',
    link: 'https://substack.com/home/post/p-158490935'
  },
  {
    title: 'Số Hóa – Chìa Khóa Cho Nông Nghiệp Hiện Đại',
    image: 'https://framerusercontent.com/images/hELaa26izgeVbrgyiueqkWRU5E.jpg?scale-down-to=512&width=1000&height=560',
    link: 'https://substack.com/home/post/p-159652984'
  },
  {
    title: 'DDC Holdings – Tiên Phong Trong Số Hoá Tài Sản Nông Nghiệp',
    image: 'https://framerusercontent.com/images/EzDaBR2jE7h0MZKsfSLurlbDNL8.jpg?scale-down-to=512&width=1600&height=900',
    link: 'https://substack.com/home/post/p-160261208'
  },
  {
    title: 'Blockchain & RWA – Xu hướng tất yếu trong số hóa tài sản nông nghiệp',
    image: 'https://framerusercontent.com/images/zdEJA4yabVOvnofTrGOUHBZJk.jpg?scale-down-to=512&width=1600&height=900',
    link: 'https://substack.com/home/post/p-160261489'
  }
];

function BlogCarousel() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkTablet = () => setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    checkTablet();
    window.addEventListener('resize', checkTablet);
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  const gap = 24; // px gap between cards
  const visibleCount = isMobile ? 1 : isTablet ? 2 : 4;
  const maxOffset = blogData.length - visibleCount;
  const canNext = offset < maxOffset;
  const canPrev = offset > 0;

  const handleNext = () => setOffset(Math.min(offset + (isMobile ? 1 : 2), maxOffset));
  const handlePrev = () => setOffset(Math.max(offset - (isMobile ? 1 : 2), 0));

  return (
    <div className="relative overflow-hidden px-6 md:px-0">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ gap: `${gap}px` }}
      >
        {blogData.map((blog, i) => (
          <a
            key={i}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent group cursor-pointer flex-shrink-0 no-underline"
            style={{
              width: `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`,
              transform: `translateX(calc(-${offset} * (100% + ${gap}px)))`,
              transition: 'transform 700ms ease-in-out',
            }}
          >
            <div className="aspect-video rounded-none overflow-hidden mb-4 md:mb-6 bg-white">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-sans font-semibold text-[#232823] mb-3 md:mb-4 text-[16px] md:text-[20px] leading-[24px] md:leading-[28px]">
              {blog.title}
            </h3>
            <div className="flex items-center gap-3 text-brand-green font-bold text-base md:text-lg opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300">
              Đọc tiếp <ArrowRight size={18} />
            </div>
          </a>
        ))}
      </div>

      {/* Gradient overlays */}
      {canNext && (
        <div className="absolute right-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-l from-[#F0FBF5] to-transparent z-10 pointer-events-none transition-opacity duration-500" />
      )}
      {canPrev && (
        <div className="absolute left-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-r from-[#F0FBF5] to-transparent z-10 pointer-events-none transition-opacity duration-500" />
      )}

      {/* Navigation buttons */}
      {canPrev && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-[40%] z-20 w-10 h-10 md:w-16 md:h-16 bg-brand-green rounded-xl flex items-center justify-center text-white shadow-xl"
        >
          <ChevronLeft size={20} className="md:hidden" />
          <ChevronLeft size={32} className="hidden md:block" />
        </button>
      )}
      {canNext && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-[40%] z-20 w-10 h-10 md:w-16 md:h-16 bg-brand-green rounded-xl flex items-center justify-center text-white shadow-xl"
        >
          <ChevronRight size={20} className="md:hidden" />
          <ChevronRight size={32} className="hidden md:block" />
        </button>
      )}
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [treeLottie, setTreeLottie] = useState<Record<string, unknown> | null>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch(TREE_LOTTIE_URL).then(r => r.json()).then(setTreeLottie).catch(() => {});
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
    <div className="min-h-screen bg-white text-brand-light selection:bg-brand-green selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className={`absolute top-0 left-0 right-0 z-50 bg-transparent py-[24px]`}>
        <div className="w-full px-4 md:px-[36px] flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo-ddc.svg" alt="DDC Holdings" className="h-9" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-6 h-[44px]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-1 text-[16px] font-display font-semibold leading-[20px] h-[44px] cursor-pointer text-white hover:text-[#23A717] transition-all duration-300">
              <Globe size={16} /> VN <ChevronDown size={14} />
            </div>
            <a href="mailto:business@ddcholdings.co" className="bg-[#23A717] hover:bg-white text-white hover:text-[#23A717] px-6 py-2 rounded-full font-display font-bold text-sm leading-[20px] transition-all duration-300 inline-flex items-center">
              Liên hệ
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Modal */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden absolute top-full right-4 left-4 bg-white rounded-2xl shadow-2xl py-8 px-6 mt-2"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-display font-semibold text-brand-dark hover:text-brand-green transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-1 text-sm font-medium cursor-pointer text-brand-dark hover:text-brand-green transition-colors">
                <Globe size={16} /> VN <ChevronDown size={14} />
              </div>
              <a href="mailto:business@ddcholdings.co" className="bg-[#23A717] text-white font-bold py-3 px-12 rounded-full text-sm hover:bg-[#1d8c13] transition-all w-full text-center">
                Liên hệ
              </a>
            </div>
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
            src="https://framerusercontent.com/images/i5l5h69tIPMyA3dxJy1PwslcTg.png?width=2400&height=1200"
            alt="DDC Holdings Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30 z-5" />
          {/* White gradient overlay at the bottom — seamless blend into white section */}
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-white via-white/60 to-transparent z-10" />
        </div>

        <div className="max-w-[1600px] mx-auto px-4 md:px-16 pt-16 md:pt-20 pb-16 md:pb-32 relative z-10 flex flex-col items-center justify-center mt-20 md:mt-32 text-center h-full" style={{zIndex: 15}}>
          <div className="max-w-5xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1
                variants={itemVariants}
                className="text-[44px] md:text-[56px] lg:text-[80px] font-display font-bold mb-6 md:mb-8 leading-[1.15] md:leading-[1.2] lg:leading-[100px] tracking-normal text-white uppercase text-center lg:text-left max-w-[874px]"
              >
                <span className="hidden md:block">TIÊN PHONG SỐ HÓA</span>
                <span className="hidden md:block">& QUẢN LÝ TÀI SẢN SỐ</span>
                <span className="block md:hidden">TIÊN PHONG</span>
                <span className="block md:hidden">SỐ HÓA</span>
                <span className="block md:hidden">& QUẢN LÝ TÀI</span>
                <span className="block md:hidden">SẢN SỐ</span>
              </motion.h1>
              <motion.div variants={itemVariants} className="flex justify-center">
                <a href="mailto:business@ddcholdings.co" className="bg-[#23A717] hover:bg-white hover:text-[#23A717] text-white px-6 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-base md:text-lg lg:text-xl font-bold rounded-[40px] transition-all inline-flex items-center">
                  Liên hệ với chúng tôi
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30">
          <div className="w-[120px] h-[120px] rounded-full bg-white flex items-center justify-center overflow-hidden">
            {treeLottie ? (
              <Lottie animationData={treeLottie} loop autoplay className="w-16 h-16 md:w-20 md:h-20" />
            ) : (
              <TreeIcon size={48} />
            )}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="about" className="pt-20 pb-16 md:py-16 bg-white text-brand-dark">
        <div className="max-w-[1600px] mx-auto px-4 md:px-16">
          <div className="w-full flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start gap-8"
            >
              <span className="text-[#23A717] text-[20px] md:text-[32px] leading-[28px] md:leading-[40px] font-display font-semibold block tracking-normal">Tầm nhìn</span>
              <h2 className="text-[28px] md:text-[36px] lg:text-[64px] font-display font-bold leading-[44px] md:leading-[48px] lg:leading-[84px] tracking-normal mb-8 text-[#283628] w-full">
                Trở thành doanh nghiệp tiên phong trong lĩnh vực số hóa và quản lý tài sản số hóa ở Việt Nam và Châu Á
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 pt-8 md:pt-20 border-t border-gray-200 w-full"
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
                  className={`flex flex-col p-6 md:p-8 lg:p-10 ${i % 2 !== 0 ? 'border-l border-gray-200' : ''} ${i < 2 ? 'border-b border-gray-200 lg:border-b-0' : ''} ${i !== 0 && i % 2 === 0 ? 'lg:border-l lg:border-gray-200' : ''}`}
                >
                  <div className="text-[32px] md:text-[40px] lg:text-6xl font-display font-semibold text-[#1A1A1A] mb-2 md:mb-3 lg:mb-4 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base lg:text-lg text-gray-500 font-medium leading-relaxed">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#F0FBF5] p-8 md:p-8 lg:p-10 rounded-2xl md:rounded-none"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-6 md:mb-10">
                  <Globe size={48} className="text-brand-green md:hidden" />
                  <Globe size={64} className="text-brand-green hidden md:block" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 md:mb-6 text-[#1A1A1A]">Chúng tôi đang làm gì?</h3>
                <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#6C6C6C] font-display font-normal">
                  Chúng tôi ứng dụng công nghệ blockchain, IoT để số hóa tài sản nông nghiệp, truy xuất nguồn gốc nông sản từ đó tạo ra một hệ sinh thái nông nghiệp hiệu quả, minh bạch
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#F0FBF5] p-8 md:p-8 lg:p-10 rounded-2xl md:rounded-none"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-6 md:mb-10">
                  <Award size={48} className="text-brand-green md:hidden" />
                  <Award size={64} className="text-brand-green hidden md:block" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 md:mb-6 text-[#1A1A1A]">Chúng tôi đem lại giá trị gì?</h3>
                <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#6C6C6C] font-display font-normal">
                  Chúng tôi mang lại giá trị qua việc tăng tính minh bạch, nâng cao thanh khoản của tài sản nông nghiệp, tối ưu hóa sản xuất và mở ra cơ hội đầu tư bền vững cho nông dân và nhà đầu tư.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <div className="bg-white py-0 md:py-4 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-0 md:px-16">
          <section className="relative aspect-[1/2] md:aspect-auto md:h-[480px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              src="https://framerusercontent.com/assets/oPeBAHTZt0DLb3vt8KnQyE5iZM.mp4"
              poster="https://framerusercontent.com/images/Y1v3ReSbUXQlCpjcLA5SyQSt3F0.jpg?width=4032&height=2268"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>
          <div className="relative z-10 px-4 md:px-16 flex items-end h-full pb-6 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl"
            >
              <h2 className="text-[22px] md:text-[64px] leading-[30px] md:leading-[84px] font-sans font-bold text-white tracking-normal mb-3 md:mb-0">
                Sứ mệnh của chúng tôi
              </h2>
              <p className="text-[14px] md:text-[20px] leading-[22px] md:leading-[28px] font-display font-normal text-white tracking-normal">
                Chúng tôi cam kết tạo ra những giá giá trị lâu dài. Với tầm nhìn dài hạn, chúng tôi đồng hành cùng khách hàng để tối ưu hóa lợi nhuận, giảm thiểu rủi ro và thúc đẩy tăng trưởng bền vững.
              </p>
            </motion.div>
          </div>
          </section>
        </div>
      </div>

      {/* Commitments Section */}
      <section id="ecosystem" className="py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Card 1: Xã hội */}
            <motion.div
              variants={itemVariants}
              className="p-6 md:p-8 lg:p-10 border border-gray-200 bg-white"
            >
              <div className="w-14 h-14 md:w-[82px] md:h-[80px] border border-[#D7DDD7] flex items-center justify-center mb-5 md:mb-8 rounded-full">
                <Globe className="w-6 h-6 md:w-8 md:h-8 text-brand-green" />
              </div>
              <h3 className="text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-display font-semibold text-[#283628] mb-3 md:mb-4">Đối với xã hội</h3>
              <p className="text-[15px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[28px] text-[#6C6C6C] font-display font-normal">
                Nâng tầm vị thế người nông dân Việt Nam và nông sản Việt Nam trên thị trường quốc tế
              </p>
            </motion.div>

            {/* Card 2: Đối tác */}
            <motion.div
              variants={itemVariants}
              className="p-6 md:p-8 lg:p-10 border border-gray-200 bg-white"
            >
              <div className="w-14 h-14 md:w-[82px] md:h-[80px] border border-[#D7DDD7] flex items-center justify-center mb-5 md:mb-8 rounded-full">
                <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-brand-green" />
              </div>
              <h3 className="text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-display font-semibold text-[#283628] mb-3 md:mb-4">Đối với đối tác</h3>
              <p className="text-[15px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[28px] text-[#6C6C6C] font-display font-normal">
                Tôn trọng, hợp tác bền vững và tư duy cùng thắng
              </p>
            </motion.div>

            {/* Card 3: Nhân viên */}
            <motion.div
              variants={itemVariants}
              className="p-6 md:p-8 lg:p-10 border border-gray-200 bg-white md:col-span-2 lg:col-span-1"
            >
              <div className="w-14 h-14 md:w-[82px] md:h-[80px] border border-[#D7DDD7] flex items-center justify-center mb-5 md:mb-8 rounded-full">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-brand-green" />
              </div>
              <h3 className="text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-display font-semibold text-[#283628] mb-3 md:mb-4">Đối với nhân viên</h3>
              <p className="text-[15px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[28px] text-[#6C6C6C] font-display font-normal">
                Tạo một môi trường thuận lợi nhất để nhân sự làm việc bằng đam mê và nâng cao giá trị của bản thân
              </p>
            </motion.div>

            {/* Card 4: Nhà đầu tư */}
            <motion.div
              variants={itemVariants}
              className="p-6 md:p-8 lg:p-10 border border-gray-200 bg-white"
            >
              <div className="w-14 h-14 md:w-[82px] md:h-[80px] border border-[#D7DDD7] flex items-center justify-center mb-5 md:mb-8 rounded-full">
                <Key className="w-6 h-6 md:w-8 md:h-8 text-brand-green" />
              </div>
              <h3 className="text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-display font-semibold text-[#283628] mb-3 md:mb-4">Đối với nhà đầu tư</h3>
              <p className="text-[15px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[28px] text-[#6C6C6C] font-display font-normal">
                Mang lại hiệu quả tài chính cho nhà đầu tư và sự an tâm, tin cậy lâu dài
              </p>
            </motion.div>

            {/* Card 5: Khách hàng */}
            <motion.div
              variants={itemVariants}
              className="p-6 md:p-8 lg:p-10 border border-gray-200 bg-white"
            >
              <div className="w-14 h-14 md:w-[82px] md:h-[80px] border border-[#D7DDD7] flex items-center justify-center mb-5 md:mb-8 rounded-full">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-brand-green" />
              </div>
              <h3 className="text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-display font-semibold text-[#283628] mb-3 md:mb-4">Đối với khách hàng</h3>
              <p className="text-[15px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[28px] text-[#6C6C6C] font-display font-normal">
                Phụng sự tận tâm, chu đáo và hiệu quả
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <div className="bg-white px-0 md:px-16 py-0 md:py-16">
      <section id="partners" className="relative min-h-[100vh] md:min-h-[650px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://framerusercontent.com/images/ooL8koykW4spza57oTnr3U18ADY.jpg?width=1520&height=1013" 
            alt="Field Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* No overlay - matches Framer design */}
        </div>
        
        <div className="max-w-[1600px] mx-auto px-4 md:px-16 py-12 md:py-[120px] relative z-10 text-center flex flex-col items-center gap-8 md:gap-[64px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-white text-center text-[40px] md:text-[64px] leading-[48px] md:leading-[84px]"
          >
            Đối tác chiến lược
          </motion.h2>

          {/* Row 1: 4 partner logos */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center"
          >
            <motion.div variants={itemVariants}>
              <img src="https://framerusercontent.com/images/FyDf4sC6VKMLjhu1ncxFB4DpBKQ.png" alt="BYBIT" className="h-[50px] md:h-[60px] object-contain max-w-full" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <img src="https://framerusercontent.com/images/RG85tPHjTc0UPrvU7pUBZU6kWvQ.png" alt="CK Capital" className="h-[50px] md:h-[60px] object-contain max-w-full" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <img src="https://framerusercontent.com/images/Mg3epEAannHMF1AivCv0vgIBtEM.png" alt="Followin" className="h-[50px] md:h-[60px] object-contain max-w-full" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <img src="https://framerusercontent.com/images/RoGR2LFGSTUNTkTiAeTLXsFuTQ.png" alt="BingX" className="h-[50px] md:h-[60px] object-contain max-w-full" />
            </motion.div>
          </motion.div>

          {/* Row 2: 3 partner logos */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full grid grid-cols-3 md:flex md:flex-wrap justify-center gap-8 md:gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="flex justify-center">
              <img src="https://framerusercontent.com/images/lJkYR3hloYZ7tIMRsb80IdQdKXE.png" alt="BTN Group" className="h-[70px] md:h-[135px] object-contain max-w-full" />
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <img src="https://framerusercontent.com/images/G3fIbNlrvlnRnPWJxxYwvPbso.png" alt="Di-Agri Chain" className="h-[70px] md:h-[135px] object-contain max-w-full" />
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <img src="https://framerusercontent.com/images/3a02l0Il3E1JxKbjmwdvbSBQhNQ.png" alt="PRO INVEST" className="h-[70px] md:h-[135px] object-contain max-w-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      </div>

      {/* Founding Team Section */}
      <section className="py-12 md:py-32 bg-[#F0FBF5]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-16">
          <div className="text-center mb-10 md:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans font-bold text-[#283628] text-center text-[32px] md:text-[64px] leading-[40px] md:leading-[84px]"
            >
              Đội ngũ sáng lập
            </motion.h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-5 gap-4 md:gap-6"
          >
            {[
              {
                name: 'Nguyễn Văn Chinh',
                role: 'Chủ tịch kiêm CEO',
                image: 'https://framerusercontent.com/images/4r74TKST61diM4HQrWUSH9RYiZ8.jpg',
                objectPosition: 'center top',
                tabletSpan: 'md:col-span-3 xl:col-span-1',
              },
              {
                name: 'Vũ Hoài Vũ',
                role: 'Phó chủ tịch',
                image: 'https://framerusercontent.com/images/ioYQDRbODilH3Kmxk8Cie33hjI8.png',
                objectPosition: '50% 32%',
                tabletSpan: 'md:col-span-3 xl:col-span-1',
              },
              {
                name: 'Nguyễn Hùng Sơn',
                role: 'Giám đốc vp Tây Nguyên',
                image: 'https://framerusercontent.com/images/CLpXvk8mrMJZn1ZK1RSQjnBIdWo.png',
                objectPosition: 'center top',
                tabletSpan: 'md:col-span-2 xl:col-span-1',
              },
              {
                name: 'Ngô Gia Long',
                role: 'Giám đốc Vận Hành',
                image: 'https://framerusercontent.com/images/ieoLLdZatksyIQDKL6Mdym2qLY.jpg',
                objectPosition: 'center center',
                tabletSpan: 'md:col-span-2 xl:col-span-1',
              },
              {
                name: 'Trần Văn Diên',
                role: 'Giám đốc công nghệ',
                image: 'https://framerusercontent.com/images/k5vOg8U9CrWK1ouKzcJgXqc1Q.jpg',
                objectPosition: 'center center',
                tabletSpan: 'md:col-span-2 xl:col-span-1',
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`bg-white border border-gray-100 overflow-hidden text-center shadow-sm hover:shadow-md transition-shadow ${member.tabletSpan}`}
              >
                <div className="h-[240px] overflow-hidden bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.objectPosition }}
                  />
                </div>
                <div className="min-h-[80px] md:min-h-[100px] flex flex-col items-center justify-center gap-1 px-2 md:px-4 py-3">
                  <h3 className="font-display font-semibold text-[#283628] text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[28px]">{member.name}</h3>
                  <p className="font-display font-normal text-[#6C6C6C] text-[12px] md:text-[13px] lg:text-[16px] leading-[18px] md:leading-[20px] lg:leading-[28px]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 xl:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-16">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-sans font-bold text-[#283628] text-left mb-10 xl:mb-20 text-[32px] md:text-[40px] xl:text-[64px] leading-[40px] md:leading-[52px] xl:leading-[84px]"
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
                  'https://framerusercontent.com/images/yiG1H9svCDMzfrbjQJ5lc41Zs4o.jpg?scale-down-to=1024&width=4032&height=2268',
                  'https://framerusercontent.com/images/NRESjfUZ8dc4awCLODa6bEfFSc.jpg?scale-down-to=1024&width=4032&height=2268'
                ]
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative border-t border-gray-200 py-6 xl:py-16 hover:py-10 xl:hover:py-24 cursor-pointer overflow-hidden transition-all duration-500"
              >
                {/* Hover Background Overlay */}
                <div className="absolute inset-0 bg-[#F0FBF5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                {/* Desktop layout */}
                <div className="relative z-10 hidden xl:flex items-center">
                  <span className="font-sans font-medium text-[#707070] mr-20 text-[36px] leading-[44px]" style={{ letterSpacing: '-0.02em', width: '48px', flexShrink: 0 }}>{project.id}</span>
                  <div className="flex-1 min-w-0">
                    <motion.p className="font-sans font-medium text-[#707070] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[28px] leading-[36px]" style={{ letterSpacing: '-0.02em' }}>{project.desc}</motion.p>
                    <h3 className="font-sans font-medium text-[#2B2A2A] group-hover:text-brand-green transition-colors duration-500 text-[64px] leading-none">{project.title}</h3>
                  </div>
                  <div className="group-hover:opacity-0 transition-opacity duration-300 flex-shrink-0 ml-4">
                    <svg width="91" height="46" viewBox="0 0 91 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M90.1213 25.1213C91.2929 23.9498 91.2929 22.0503 90.1213 20.8787L71.0294 1.7868C69.8579 0.615229 67.9584 0.615229 66.7868 1.7868C65.6152 2.95838 65.6152 4.85787 66.7868 6.02944L83.7574 23L66.7868 39.9706C65.6152 41.1421 65.6152 43.0416 66.7868 44.2132C67.9584 45.3848 69.8579 45.3848 71.0294 44.2132L90.1213 25.1213ZM-2.62268e-07 26L88 26L88 20L2.62268e-07 20L-2.62268e-07 26Z" fill="#2B2A2A"/>
                    </svg>
                  </div>
                  <div className="absolute right-[-100px] top-1/2 -translate-y-[40%] z-10 w-[398px] h-[224px] rounded-[16px] overflow-visible border border-white/20 shadow-2xl opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-700 pointer-events-none" style={{ transform: 'rotate(4deg)' }}>
                    <img src={project.images[1]} alt="Project 2" className="w-full h-full object-cover rounded-[16px]" referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute right-[-10px] top-1/2 -translate-y-[15%] z-20 w-[398px] h-[224px] rounded-[16px] overflow-visible border border-white/20 shadow-2xl opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-700 delay-100 pointer-events-none" style={{ transform: 'rotate(4deg)' }}>
                    <img src={project.images[0]} alt="Project 1" className="w-full h-full object-cover rounded-[16px]" referrerPolicy="no-referrer" />
                  </div>
                </div>

                {/* Mobile/Tablet layout - vertical card */}
                <div className="relative z-10 xl:hidden flex flex-col gap-4">
                  <div className="flex items-start gap-6">
                    <span className="font-sans font-medium text-[#707070] text-[32px] leading-[40px] shrink-0">{project.id}</span>
                    <p className="font-sans font-medium text-[#707070] text-[18px] leading-[28px] pt-1">{project.desc}</p>
                  </div>
                  <h3 className="font-sans font-medium text-[#2B2A2A] text-[32px] leading-[40px] ml-[56px]">{project.title}</h3>
                  <div className="relative mt-4 h-[280px] md:h-[180px] md:ml-auto md:w-[45%]">
                    <div className="absolute top-0 right-0 w-[75%] h-[180px] md:h-[130px] rounded-xl overflow-hidden z-0 shadow-lg" style={{ transform: 'rotate(4deg)' }}>
                      <img src={project.images[1]} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-[85%] h-[210px] md:h-[150px] rounded-xl overflow-hidden z-10 shadow-xl" style={{ transform: 'rotate(-3deg)' }}>
                      <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
      <section id="blog" className="py-12 md:py-32 bg-[#F0FBF5] relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-16">
          <div className="text-center mb-10 md:mb-20">
            <motion.h2
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sans font-bold text-[#283628] text-center text-[32px] md:text-[64px] leading-[40px] md:leading-[84px]"
            >
              Các bài Blogs
            </motion.h2>
          </div>

          <BlogCarousel />
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="py-8 md:py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-none bg-[#195e13] min-h-[220px] lg:h-[304px]"
          >
            {/* Left image - mobile/tablet: top decorative strip, desktop: absolute left */}
            <img
              src="https://framerusercontent.com/images/l11Xtoi9WJ3nXTxs7XrKH9PfXCM.png?scale-down-to=1024&width=1185&height=640"
              alt=""
              className="w-full h-[60px] object-cover lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-auto"
            />
            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-10 py-10 lg:py-0">
              <h2 className="font-sans font-bold text-white mb-3 md:mb-4 text-[24px] md:text-[48px] lg:text-[64px] leading-[32px] md:leading-[60px] lg:leading-[84px]">Bạn muốn hợp tác?</h2>
              <p className="font-sans font-medium text-white mb-6 md:mb-10 text-[14px] md:text-[20px] leading-[22px] md:leading-[28px]">
                Vui lòng gửi mail đến: business@ddcholdings.co
              </p>
              <a href="mailto:business@ddcholdings.co" className="bg-[#23A717] hover:bg-white hover:text-[#23A717] text-white font-bold py-3 px-8 text-sm rounded-[40px] transition-all inline-flex items-center">
                Liên hệ với chúng tôi
              </a>
            </div>
            {/* Right image - mobile/tablet: bottom decorative strip, desktop: absolute right */}
            <img
              src="https://framerusercontent.com/images/lpufNMEmZlFoTRTX5iMVyL6gQA.png?scale-down-to=1024&width=1248&height=570"
              alt=""
              className="w-full h-[60px] object-cover lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* New Footer Section */}
      <footer className="bg-[#213328] text-[#AFAFAF] relative overflow-hidden px-4 md:px-12 py-12 md:py-12" style={{ gap: '80px' }}>
        <div className="relative z-10 flex flex-col" style={{ gap: '80px' }}>
          {/* Logo - hidden on mobile, shown on desktop at top */}
          <div className="hidden md:block">
            <img src="/logo-ddc.svg" alt="DDC Holdings" style={{ width: 'min(402px, 70vw)', height: 'auto', filter: 'brightness(0) invert(1)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h4 className="text-white font-semibold text-[16px] leading-[24px] mb-3">Chính sách & Điều khoản</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#AFAFAF] text-[16px] leading-[28px] hover:text-white transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="text-[#AFAFAF] text-[16px] leading-[28px] hover:text-white transition-colors">Điều khoản sử dụng dịch vụ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-[16px] leading-[24px] mb-3">Thông tin</h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <MapPin size={20} className="text-[#AFAFAF] shrink-0 mt-1" />
                  <p className="text-[#AFAFAF] text-[16px] leading-[28px]">
                    Số 25 Vũ Ngọc Phan, phường Láng Hạ, quận Đống Đa, Hà Nội
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone size={20} className="text-[#AFAFAF] shrink-0" />
                  <p className="text-[#AFAFAF] text-[16px] leading-[28px]">(+84) 969 961 905</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold text-[16px] leading-[24px] mb-3">Hỗ trợ</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#AFAFAF] text-[16px] leading-[28px] hover:text-white transition-colors">Câu hỏi thường gặp (FAQs)</a></li>
                <li><a href="#" className="text-[#AFAFAF] text-[16px] leading-[28px] hover:text-white transition-colors">Hướng dẫn sử dụng dịch vụ</a></li>
                <li><a href="#" className="text-[#AFAFAF] text-[16px] leading-[28px] hover:text-white transition-colors">Trung tâm hỗ trợ khách hàng trực tuyến</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-[16px] leading-[24px] mb-3">Tuyển dụng</h4>
              <p className="text-[#AFAFAF] text-[16px] leading-[28px]">
                Cơ hội việc làm tại DDC Holdings.
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-[#AFAFAF]/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
            <div className="flex gap-8">
              <a href="#" className="hover:opacity-80 transition-opacity"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="white"/></svg></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57348 13.2411C5.65819 13.2678 5.74596 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6857 15.9067 12.0769 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" fill="white"/></svg></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_179_2479)"><mask id="mask0_179_2479" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="-5" y="-5" width="34" height="34"><path d="M-4.80078 -4.79919H28.7992V28.8008H-4.80078V-4.79919Z" fill="white"/></mask><g mask="url(#mask0_179_2479)"><path fillRule="evenodd" clipRule="evenodd" d="M17.3719 12.0003L16.6985 15.6673H13.4522V23.9121C19.3928 23.1934 23.9961 18.1347 23.9961 12.0003C23.9961 5.37289 18.6235 0.000301361 11.9961 0.000301361C5.36868 0.000301361 -0.00390625 5.37289 -0.00390625 12.0003C-0.00390625 17.628 3.87041 22.3501 9.09717 23.6469V15.6673L6.625 15.6673L6.62268 15.6673V12.0003H9.09717V10.4202C9.09717 6.41713 10.8726 4.51894 14.7184 4.4449C14.7973 4.44337 14.8771 4.4426 14.9578 4.4426C15.718 4.4426 17.0298 4.59169 17.5664 4.74078V8.06492C17.5657 8.06484 17.5649 8.06476 17.5641 8.06468V8.06497C17.3167 8.03893 16.9099 8.02423 16.4035 8.02093C16.331 8.02047 16.2565 8.02023 16.1801 8.02023C14.2125 8.02023 13.4522 8.76553 13.4522 10.7034V12.0003L17.3695 12.0003L17.3719 12.0003Z" fill="white"/></g></g><defs><clipPath id="clip0_179_2479"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></a>
            </div>
          </div>

          {/* Logo - shown on mobile at bottom */}
          <div className="md:hidden -mt-12">
            <h2 className="font-display font-semibold text-[#AFAFAF] leading-none uppercase whitespace-nowrap text-left" style={{ fontSize: '8.5vw', letterSpacing: '0.15em' }}>
              DDC HOLDINGS
            </h2>
          </div>
        </div>

      </footer>

      {/* DDC HOLDINGS large text section - desktop only */}
      <div className="hidden md:flex bg-[#213328] w-full h-[80px] lg:h-[114px] overflow-hidden select-none items-center -mt-px">
        <h2 className="font-display font-semibold text-[#AFAFAF] leading-none uppercase whitespace-nowrap w-full text-center" style={{ fontSize: '8.5vw', letterSpacing: '0.25em' }}>
          DDC HOLDINGS
        </h2>
      </div>
    </div>
  );
}
