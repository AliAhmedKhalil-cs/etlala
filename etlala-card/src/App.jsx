"use client";

import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  X,
  Music2,
  Globe2,
  BriefcaseBusiness,
  FlaskConical,
  GraduationCap,
  Sparkles,
  MessageCircle,
  ArrowUpRight,
  ArrowDown,
  Users,
  BookOpenCheck,
  ArrowRight,
  MonitorSmartphone
} from 'lucide-react';

// تعريف أيقونة لينكدإن يدوياً
const Linkedin = ({ size = 24, strokeWidth = 2, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// تعريف أيقونة الفيسبوك يدوياً لتجنب مشاكل المكتبة
const Facebook = ({ size = 24, strokeWidth = 2, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WHATSAPP_URL =
  'https://wa.me/201006534067?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%AE%D8%AF%D9%85%D8%A7%20%D9%85%D8%B1%D9%83%D8%B2%20%D8%A5%D8%B7%D9%84%D8%A7%D9%84%D8%A9';

const socials = [
  {
    name: 'Facebook',
    handle: 'Follow our page',
    href: 'https://www.facebook.com/profile.php?id=100063690365460',
    Icon: Facebook,
  },
  {
    name: 'LinkedIn',
    handle: 'Connect professionally',
    href: 'https://www.linkedin.com/in/etlala-center-aa51552b4/',
    Icon: Linkedin,
  },
  {
    name: 'Instagram / X',
    handle: 'Follow our updates on X',
    href: 'https://twitter.com/NancyWahba95694',
    Icon: X,
  },
  {
    name: 'TikTok',
    handle: 'Explore our content',
    href: 'https://www.tiktok.com/@etlala44',
    Icon: Music2,
  },
  {
    name: 'Snapchat',
    handle: 'Profile link coming soon',
    href: null,
    Icon: Globe2,
  },
];

// الخدمات
const services = [
  {
    number: '01',
    title: 'البحث العلمي والتحليل الإحصائي',
    description:
      'النشر الدولي، النزاهة العلمية، التحليل الإحصائي (SPSS)، والأدوات والبحوث الميدانية والنوعية.',
    Icon: FlaskConical,
  },
  {
    number: '02',
    title: 'الإنتاج الفني والتسويق الرقمي',
    description:
      'التصميم الإبداعي (Branding)، السوشيال ميديا، الحملات الممولة، النشر العلمي، والتفريغ الصوتي.',
    Icon: BriefcaseBusiness,
  },
  {
    number: '03',
    title: 'الاستشارات التقنية والاقتصادية',
    description:
      'دراسات الجدوى، البوتات والذكاء الاصطناعي، الأمن السيبراني، وتحليل بيانات الشركات.',
    Icon: MonitorSmartphone,
  },
  {
    number: '04',
    title: 'الترجمة والأكاديمية الرقمية',
    description:
      'الترجمة التخصصية والمعتمدة، التدقيق اللغوي، دورات اللغات، والتدريب الأكاديمي.',
    Icon: GraduationCap,
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function App() {
  const servicesRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease,
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1D082A] px-5 pb-10 pt-8 text-slate-100 sm:px-8 sm:pt-12 font-sans dir-rtl">
      <div className="ambient" aria-hidden="true" />
      
      {/* إضاءات خلفية تعطي طابع الباذنجاني والذهبي */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#D4AF37]/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[300px] h-[300px] bg-[#4A154B]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-md">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={reveal} className="mb-5">
            <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-[#D4AF37]/30 bg-white/[0.02] shadow-[0_0_20px_rgba(212,175,55,0.15)] overflow-hidden">
              <div className="absolute inset-1.5 rounded-[1.3rem] border border-white/[0.05] overflow-hidden bg-[#260C36]">
                <img 
                  src="/logo.jfif" 
                  alt="لوجو مركز إطلالة" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#1D082A] bg-gradient-to-r from-[#D4AF37] to-[#B38B22]">
                <Sparkles size={13} className="text-white" />
              </span>
            </div>
          </motion.div>

          <motion.div variants={reveal} className="text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]/90" dir="ltr">
              Research · Strategy · Education
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-[2.2rem] text-white">
              مركز إطلالة <span className="bg-gradient-to-r from-[#F9E596] via-[#D4AF37] to-[#997A15] bg-clip-text text-transparent">للدراسات والبحوث</span>
            </h1>
            <p className="mx-auto mt-3 max-w-[310px] text-sm leading-7 text-white/70" dir="rtl">
              حلول متكاملة في البحث العلمي، التسويق الرقمي، والاستشارات الأكاديمية والتقنية.
            </p>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-6 flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2"
            dir="rtl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
            </span>
            <span className="text-[11px] tracking-wide text-white/80">
              متاحون الآن لتقديم الاستشارات
            </span>
          </motion.div>

          <motion.div variants={reveal} className="mt-8 w-full">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex min-h-[66px] w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 font-semibold shadow-lg bg-gradient-to-l from-[#3C1352] to-[#260C36] border border-[#D4AF37]/40 hover:border-[#D4AF37]/70 transition-all"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <MessageCircle size={24} strokeWidth={2} />
                </span>
                <span className="text-right" dir="rtl">
                  <span className="block text-[15px] text-white">
                    تواصل معنا عبر واتساب
                  </span>
                  <span className="mt-0.5 block text-[11px] font-medium text-white/50">
                    رد فوري على جميع الاستفسارات
                  </span>
                </span>
              </span>
              <ArrowUpRight size={21} className="shrink-0 text-[#D4AF37]" />
            </motion.a>
          </motion.div>

          <motion.button
            variants={reveal}
            type="button"
            onClick={scrollToServices}
            whileHover={shouldReduceMotion ? {} : { scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            className="mt-3 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5"
          >
            <span dir="rtl">اكتشف مجالات الاختصاص</span>
            <ArrowDown size={16} className="text-[#D4AF37]" />
          </motion.button>
        </motion.div>

        <motion.section
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-10"
          dir="rtl"
        >
          <motion.div
            variants={reveal}
            className="mb-4 flex items-center justify-between"
          >
            <div>
              <h2 className="text-sm font-semibold tracking-wide text-white">
                منصات التواصل الاجتماعي
              </h2>
              <p className="mt-1 text-xs text-white/50">
                تابع أحدث مشاريعنا وخدماتنا
              </p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-[#D4AF37]">
              <Users size={17} />
            </span>
          </motion.div>

          <div className="grid grid-cols-2 gap-3" dir="ltr">
            {socials.map(({ name, handle, href, Icon }) => {
              const isAvailable = Boolean(href);

              return (
                <motion.a
                  key={name}
                  variants={reveal}
                  href={href || undefined}
                  target={href ? '_blank' : undefined}
                  rel={href ? 'noopener noreferrer' : undefined}
                  aria-disabled={!isAvailable}
                  onClick={isAvailable ? undefined : (event) => event.preventDefault()}
                  whileHover={shouldReduceMotion || !isAvailable ? {} : { y: -3, scale: 1.015 }}
                  whileTap={isAvailable ? { scale: 0.98 } : {}}
                  className={`flex min-h-[94px] items-center gap-3 rounded-2xl p-3.5 border border-white/[0.05] bg-white/[0.02] backdrop-blur-sm transition-colors hover:bg-white/[0.04] ${
                    isAvailable ? '' : 'cursor-not-allowed opacity-50'
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block text-sm font-semibold text-white/90">
                      {name}
                    </span>
                    <span className="mt-1 block text-[10px] leading-4 text-white/40">
                      {handle}
                    </span>
                  </span>
                  {isAvailable && (
                    <ArrowUpRight size={14} className="shrink-0 text-white/30" />
                  )}
                </motion.a>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          ref={servicesRef}
          id="services"
          className="scroll-mt-6 pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={container}
          dir="rtl"
        >
          <motion.div variants={reveal} className="mb-5">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]/90">
              خدماتنا
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              حلولنا <span className="bg-gradient-to-r from-[#F9E596] to-[#D4AF37] bg-clip-text text-transparent">الاحترافية</span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              مجموعة واسعة من الخدمات الأكاديمية والتقنية لدعم الباحثين والمؤسسات.
            </p>
          </motion.div>

          <div className="space-y-3">
            {services.map(({ number, title, description, Icon }) => (
              <motion.article
                key={number}
                variants={reveal}
                whileHover={shouldReduceMotion ? {} : { x: -4 }}
                className="rounded-2xl p-4 border border-white/[0.05] bg-gradient-to-br from-white/[0.03] to-transparent hover:border-[#D4AF37]/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-[10px] font-medium tracking-widest text-[#D4AF37]/70" dir="ltr">
                        {number}
                      </span>
                      <h3 className="text-sm font-semibold text-white/90">{title}</h3>
                    </div>
                    <p className="text-xs leading-6 text-white/50">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.a
            variants={reveal}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 flex min-h-[54px] items-center justify-between rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-3 transition-colors hover:bg-[#D4AF37]/20"
          >
            <span className="flex items-center gap-3">
              <BookOpenCheck size={19} className="text-[#D4AF37]" />
              <span>
                <span className="block text-sm font-semibold text-white/90">
                  هل لديك استفسار محدد؟
                </span>
                <span className="mt-1 block text-[11px] text-white/50">
                  دعنا نناقش متطلباتك
                </span>
              </span>
            </span>
            <ArrowRight size={17} className="text-[#D4AF37] rotate-180" />
          </motion.a>
        </motion.section>

        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="mt-12 border-t border-white/[0.05] pb-4 pt-6 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-2">
            <img 
              src="/logo.jfif" 
              alt="Etlala" 
              className="h-6 w-6 rounded-md object-cover border border-[#D4AF37]/30"
            />
            <span className="text-sm font-semibold tracking-wide text-white/80">
              مركز إطلالة
            </span>
          </div>
          <p className="text-[11px] leading-5 text-white/40">
            أبحاث · تسويق · تقنية · استشارات
          </p>
          <p className="mt-2 text-[10px] text-white/30" dir="ltr">
            © {new Date().getFullYear()} Etlala Center. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </main>
  );
}
