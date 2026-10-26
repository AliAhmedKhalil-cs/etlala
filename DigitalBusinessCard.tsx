"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Share2,
  Download,
  ExternalLink,
  GraduationCap,
  TrendingUp,
  FileSearch,
  ChevronDown,
  CheckCircle2,
  Phone,
  Sparkles,
  X,
  QrCode
} from 'lucide-react';

// Custom Brand Icons
const BrandIcons = {
  Facebook: () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  TwitterX: () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  TikTok: () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  ),
  Snapchat: () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12.003 2c-3.743 0-6.19 2.763-6.19 6.136 0 1.258.411 2.44 1.053 3.328.16.223.187.42.062.627-.187.311-.53.518-.89.652-.452.169-.982.203-1.408.435-.494.27-.678.718-.54 1.253.158.608.73.978 1.404 1.077.58.085 1.056.326 1.344.864.21.394.512.607.962.61.517.004.975.228 1.38.571.745.631 1.748.784 2.68.785.922 0 1.916-.15 2.662-.777.409-.344.869-.57 1.39-.574.455-.003.754-.216.965-.61.288-.538.764-.78 1.344-.864.674-.099 1.246-.469 1.404-1.077.138-.535-.046-.983-.54-1.253-.426-.232-.956-.266-1.408-.435-.36-.134-.703-.341-.89-.652-.125-.207-.098-.404.062-.627.642-.888 1.053-2.07 1.053-3.328 0-3.373-2.447-6.136-6.19-6.136z" />
    </svg>
  ),
};

export default function DigitalBusinessCardPage() {
  const [showQRModal, setShowQRModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Etlala Center | مركز إطلالة
ORG:Etlala Center for Marketing & Research
TITLE:Marketing, Research & Higher Education Solutions
TEL;TYPE=CELL,VOICE:+201006534067
URL:https://wa.me/201006534067
NOTE:Pioneering Marketing, Research & Higher Education Solutions
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Etlala_Center.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (typeof window !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Etlala Center | مركز إطلالة',
          text: 'Pioneering Marketing, Research & Higher Education Solutions',
          url: window.location.href,
        });
      } catch (err) {
        // user cancelled
      }
    } else if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToServices = () => {
    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      handle: 'Etlala Center',
      icon: BrandIcons.Facebook,
      url: 'https://www.facebook.com/profile.php?id=100063690365460',
      color: 'hover:text-blue-500 hover:border-blue-500/40',
      badge: 'تواصل وتفاعل',
    },
    {
      name: 'LinkedIn',
      handle: 'etlala-center',
      icon: BrandIcons.LinkedIn,
      url: 'https://www.linkedin.com/in/etlala-center-aa51552b4/',
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
      badge: 'شبكة الأعمال',
    },
    {
      name: 'X (Twitter)',
      handle: '@NancyWahba95694',
      icon: BrandIcons.TwitterX,
      url: 'https://twitter.com/NancyWahba95694',
      color: 'hover:text-sky-400 hover:border-sky-500/40',
      badge: 'تحديثات حصرية',
    },
    {
      name: 'TikTok',
      handle: '@etlala44',
      icon: BrandIcons.TikTok,
      url: 'https://www.tiktok.com/@etlala44',
      color: 'hover:text-pink-400 hover:border-pink-500/40',
      badge: 'فيديوهات تفاعلية',
    },
    {
      name: 'Snapchat',
      handle: 'Etlala Center',
      icon: BrandIcons.Snapchat,
      url: 'https://www.snapchat.com',
      color: 'hover:text-yellow-400 hover:border-yellow-500/40',
      badge: 'يوميات وكواليس',
    },
  ];

  const services = [
    {
      icon: TrendingUp,
      title: 'Marketing & Brand Strategy',
      titleAr: 'حلول التسويق الرقمي وبناء الهوية',
      desc: 'استراتيجيات نمو متقدمة، حملات إعلانية مستهدفة، وإدارة شاملة للتواجد الرقمي.',
    },
    {
      icon: GraduationCap,
      title: 'Higher Education Consulting',
      titleAr: 'استشارات التعليم العالي والأكاديمي',
      desc: 'إرشاد جامعي، استشارات القبول، وتطوير المناهج والبرامج الأكاديمية التخصصية.',
    },
    {
      icon: FileSearch,
      title: 'Market Research & Analytics',
      titleAr: 'الأبحاث السوقية والدراسات الميدانية',
      desc: 'تحليل دقيق لسلوك المستهلك، دراسات الجدوى، وتقارير سوقية تدعم اتخاذ القرار.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex justify-center selection:bg-emerald-500 selection:text-black font-sans antialiased relative overflow-x-hidden">
      {/* Background Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-emerald-500/15 rounded-full blur-[110px]" />
        <div className="absolute top-[45%] -right-24 w-[320px] h-[320px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 -left-20 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md px-4 py-8 sm:py-12 z-10 flex flex-col items-center"
      >
        {/* Top Controls */}
        <div className="w-full flex justify-between items-center mb-6 px-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>متاحون الآن للرد</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              aria-label="Share"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all active:scale-90 relative"
            >
              <Share2 className="w-4 h-4" />
              {copied && (
                <span className="absolute -bottom-8 right-0 text-[10px] bg-emerald-500 text-black font-bold px-2 py-0.5 rounded shadow">
                  تم النسخ!
                </span>
              )}
            </button>
            <button
              onClick={() => setShowQRModal(true)}
              aria-label="Show QR Code"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all active:scale-90"
            >
              <QrCode className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Profile Header */}
        <div className="flex flex-col items-center text-center w-full">
          <div className="relative mb-4 group cursor-pointer">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-75 blur-md group-hover:opacity-100 transition duration-700" />
            <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/20 p-1 flex items-center justify-center shadow-2xl">
              <div className="w-full h-full rounded-xl bg-slate-900/90 flex flex-col items-center justify-center">
                <Sparkles className="w-9 h-9 text-emerald-400 mb-0.5" />
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">ETLALA</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 p-1 rounded-full shadow-lg ring-2 ring-[#07090E]">
              <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-slate-950" />
            </div>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-1.5 justify-center">
            مركز إطلالة
            <span className="text-emerald-400 font-medium text-lg">|</span>
            <span className="text-slate-200">Etlala Center</span>
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium max-w-[320px] leading-relaxed">
            Pioneering Marketing, Research & Higher Education Solutions
          </p>
          <p className="text-[11px] text-slate-400 mt-1" dir="rtl">
            حلول رائدة ومبتكرة في التسويق الرقمي، الأبحاث الميدانية، واستشارات التعليم العالي
          </p>
        </div>

        {/* Quick Actions */}
        <div className="w-full grid grid-cols-2 gap-2.5 mt-5">
          <button
            onClick={downloadVCard}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-xs font-semibold text-slate-200 transition-all active:scale-95"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>حفظ جهة الاتصال</span>
          </button>

          <a
            href="tel:+201006534067"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-xs font-semibold text-slate-200 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span dir="ltr">+20 100 653 4067</span>
          </a>
        </div>

        {/* Primary CTA (WhatsApp) */}
        <div className="w-full mt-4">
          <motion.a
            href="https://wa.me/201006534067?text=مرحباً،%20أنا%20مهتم%20بخدمات%20التسويق%20والأبحاث%20الخاصة%20بكم"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group block w-full p-[1.5px] rounded-2xl overflow-hidden focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-400 to-teal-500 rounded-2xl opacity-80 group-hover:opacity-100 blur-sm transition-opacity duration-300 animate-pulse" />
            <div className="relative flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#0d2a1b] to-[#0b1f14] border border-emerald-400/40 rounded-2xl shadow-xl transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shadow-inner group-hover:rotate-6 transition-transform">
                  <MessageCircle className="w-6 h-6 text-emerald-400 fill-emerald-400/30" />
                </div>
                <div className="text-right" dir="rtl">
                  <div className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                    تواصل معنا عبر واتساب
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-300/80 font-normal">
                    رد فوري على جميع الاستفسارات والخدمات
                  </div>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:translate-x-[-2px] transition-transform">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        </div>

        {/* Secondary Action */}
        <div className="w-full mt-3">
          <button
            onClick={scrollToServices}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-200 transition-all group active:scale-[0.99]"
          >
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
            <span className="text-xs font-semibold tracking-wide flex items-center gap-2" dir="rtl">
              <span>اكتشف خدماتنا ومجالات التميز</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="w-full mt-7">
          <div className="flex items-center gap-2 mb-3.5 px-1">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
              تابعنا على منصات التواصل
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-between p-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-white/5 transition-all duration-200 backdrop-blur-md group ${item.color}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-200">
                      <Icon />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-white">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {item.handle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      {item.badge}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div id="services-section" className="w-full mt-10 pt-6 border-t border-white/10">
          <div className="text-center mb-5">
            <h2 className="text-base font-bold text-white tracking-wide" dir="rtl">
              مجالات اختصاص مركز إطلالة
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              حلول استراتيجية متكاملة مصممة للارتقاء بأعمالك ومسارك الأكاديمي
            </p>
          </div>

          <div className="space-y-3">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 hover:border-emerald-500/30 transition-all duration-300"
                  dir="rtl"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-100">{srv.titleAr}</h3>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5" dir="ltr">
                        {srv.title}
                      </p>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full mt-10 text-center pb-4">
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} Etlala Center. All rights reserved.
          </div>
        </footer>
      </motion.div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQRModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-xs bg-slate-900 border border-white/15 rounded-3xl p-6 text-center relative shadow-2xl"
            >
              <button
                onClick={() => setShowQRModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-base font-bold text-white mb-1">رمز الاستجابة السريع QR</h3>
              <p className="text-xs text-slate-400 mb-4">امسح الرمز لمشاركة هذه البطاقة فوراً</p>

              <div className="bg-white p-3 rounded-2xl inline-block shadow-inner">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                    typeof window !== 'undefined' ? window.location.href : 'https://wa.me/201006534067'
                  )}&color=07090e`}
                  alt="QR Code"
                  className="w-44 h-44 rounded-lg"
                />
              </div>

              <div className="mt-4 text-[11px] text-slate-400">مركز إطلالة | Etlala Center</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
