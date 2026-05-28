'use client'

import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({
  component: QafilaLanding,
})

// ─── Header ────────────────────────────────────────────────────────────────────
function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F19]/80 border-b border-[#1E2943] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#D4AF37] to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/10">
            <i className="fa-solid fa-compass-drafting text-[#0B0F19] text-lg font-bold" />
          </div>
          <div>
            <span className="text-xl font-black tracking-wider text-white">الـقــافــلــة</span>
            <span className="block text-[9px] text-[#D4AF37] tracking-widest uppercase -mt-1">Al-Qafila System</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#hero" className="text-white hover:text-[#D4AF37] transition-colors">الرئيسية</a>
          <a href="#architecture" className="text-[#94A3B8] hover:text-white transition-colors">العمارة الدلالية</a>
          <a href="#calculator" className="text-[#94A3B8] hover:text-white transition-colors">حاسبة ROI</a>
          <a href="#agent" className="text-[#94A3B8] hover:text-white transition-colors">الوكيل السيادي</a>
          <a href="/social-dashboard" className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#D4AF37] transition-colors">
            <i className="fa-brands fa-buffer text-xs" />
            لوحة السوشيال
          </a>
        </nav>

        <a
          href="#contact"
          className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#AA8C2C] text-[#0B0F19] font-semibold rounded-lg text-sm transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20"
        >
          اطلب استشارة سيادية
        </a>
      </div>
    </header>
  )
}

// ─── Hero ───────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-32 flex items-center min-h-[90vh]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E2943]/80 border border-[#1E2943] text-xs text-[#D4AF37]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              شراكة تقنية متكاملة مخصصة لقطاع الأعمال في دمشق
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              السيادة المعرفية والذكاء <br />
              <span className="gold-gradient-text">الاصطناعي التخصصي</span>
            </h1>

            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              نحن لا نقدم مجرد برمجيات، بل نبني عقولاً رقمية سيادية مستقلة لحماية بياناتك، معايرة حساباتك، وأتمتة عملياتك بدقة دلالية متناهية ونسبة خطأ معدومة.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#calculator"
                className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#AA8C2C] text-[#0B0F19] font-bold rounded-lg transition-all shadow-lg shadow-amber-500/10 text-center flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-calculator" />
                احسب عائد الاستثمار لشركتك
              </a>
              <a
                href="#agent"
                className="w-full sm:w-auto px-8 py-4 bg-[#161D30] hover:bg-[#1E2943] text-white font-semibold rounded-lg border border-[#1E2943] transition-all text-center flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-comments" />
                دردش مع الوكيل السيادي
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1E2943]/50 max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="block text-3xl font-bold text-white">60%</span>
                <span className="text-xs text-[#94A3B8]">توفير الوقت التشغيلي</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">100%</span>
                <span className="text-xs text-[#94A3B8]">دقة البيانات وحمايتها</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">963Hz</span>
                <span className="text-xs text-[#94A3B8]">تناغم إبداعي بصري</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-[400px] aspect-square rounded-2xl bg-gradient-to-br from-[#161D30] to-[#0B0F19] p-1 border border-[#1E2943] shadow-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#D4AF37]/10 to-transparent pointer-events-none" />
              <div className="w-full h-full rounded-xl bg-[#0B0F19] flex flex-col justify-between p-6 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="flex items-center justify-between border-b border-[#1E2943] pb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold tracking-wider text-[#D4AF37]">AL-QAFILA MASTER AGENT</span>
                  </div>
                  <span className="text-[10px] text-[#94A3B8]">ACTIVE SECURE LAYER</span>
                </div>

                <div className="my-auto flex flex-col items-center justify-center relative z-10 space-y-4">
                  <div className="w-28 h-28 rounded-full border-2 border-dashed border-[#D4AF37]/30 flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
                    <div className="w-20 h-20 rounded-full border border-[#D4AF37]/50 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                        <i className="fa-solid fa-dharmachakra text-[#D4AF37] text-2xl" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="block text-sm font-bold tracking-widest text-white">PROCESSED BY GEMINI</span>
                    <span className="text-[10px] text-[#94A3B8]">963Hz Frequency Resonance System</span>
                  </div>
                </div>

                <div className="border-t border-[#1E2943] pt-4 text-[10px] text-[#94A3B8] flex justify-between relative z-10">
                  <span>SYSTEM STATUS: STABLE</span>
                  <span>LATENCY: 12ms (LOCAL)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Architecture ───────────────────────────────────────────────────────────────
function ArchitectureSection() {
  const protocols = [
    {
      icon: 'fa-shield-halved',
      title: 'بروتوكول الحوكمة الدلالية (SGP)',
      desc: 'طبقة وسيطة (Middleware) حاسمة تعمل قبل إنتاج البيانات لمنع الهلوسة التقنية، وضمان مطابقة مخرجات النظام لقواعد العمل المسبقة بنسبة دقة مطلقة.',
    },
    {
      icon: 'fa-wave-square',
      title: 'بروتوكول المزامنة الترددية (FAP)',
      desc: 'محرك متقدم لمعالجة الأصول الصوتية والبصرية ومزامنتها على تردد 963Hz المعياري لضمان التناغم الشعوري والجمالية الإخراجية والسينمائية الفخمة.',
    },
    {
      icon: 'fa-database',
      title: 'بحيرة الذاكرة المتجهة (VML)',
      desc: 'مستودع أصول ذكي يعتمد على تقنيات الاسترجاع المعزز (RAG)، يضمن حفظ وأرشفة كافة القرارات والتفاعلات وتحويلها لبلورات معرفية مستمرة.',
    },
  ]

  return (
    <section id="architecture" className="py-24 bg-[#0B0F19] border-t border-[#1E2943] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">المواصفات الفنية المعتمدة</h2>
          <h3 className="text-3xl sm:text-4xl font-black">العمارة الدلالية والبروتوكولات</h3>
          <p className="text-[#94A3B8]">
            تعتمد القافلة على بروتوكولات حوكمة ومعالجة مبتكرة تم تصميمها وبناؤها لتجاوز قيود الذكاء الاصطناعي التقليدي وتوفير استقرار كامل للأعمال.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {protocols.map((p) => (
            <div
              key={p.title}
              className="p-8 rounded-xl bg-[#161D30] border border-[#1E2943] hover:border-[#D4AF37]/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                <i className={`fa-solid ${p.icon} text-xl`} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{p.title}</h4>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── ROI Calculator ─────────────────────────────────────────────────────────────
function CalculatorSection() {
  const [avgSalary, setAvgSalary] = useState(1200)
  const [teamSize, setTeamSize] = useState(5)
  const [wasteHours, setWasteHours] = useState(10)
  const [projectVal, setProjectVal] = useState(50000)

  const hoursSaved = Math.round(wasteHours * teamSize * 4.33 * 0.6)
  const hourRate = avgSalary / 160
  const moneySaved = Math.round(hoursSaved * hourRate)
  const setupCost = 3000
  const payback = moneySaved > 0 ? (setupCost / moneySaved).toFixed(1) : null

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-[#0B0F19] to-[#161D30] border-t border-[#1E2943] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">محرك الجدوى الاقتصادية</h2>
            <h3 className="text-3xl sm:text-4xl font-black">احسب أثر "القافلة" المالي على منشأتك</h3>
            <p className="text-[#94A3B8] leading-relaxed">
              قم بتحديد مؤشرات العمل الحالية في شركتك، وسيقوم محركنا الحسابي المدرب بتقدير الساعات التشغيلية والسيولة النقدية التي سيتم استردادها فور تبني بروتوكولات القافلة المعرفية.
            </p>
            <div className="p-4 rounded-lg bg-[#0B0F19] border border-[#1E2943] space-y-3">
              {[
                'توفير فوري في تكاليف الأخطاء التقنية والمطبعية',
                'استرجاع القدرة الابتكارية بنسبة 40% لفريقك',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white">
                  <i className="fa-solid fa-circle-check text-[#D4AF37]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0B0F19] p-8 rounded-xl border border-[#1E2943] shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]" />
            <div className="flex items-center justify-between border-b border-[#1E2943] pb-4">
              <h4 className="font-bold text-lg text-white">حاسبة العائد الاستثماري (calculate_roi)</h4>
              <span className="text-[10px] text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/10 font-mono">B2B ENGINE v1.1</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'متوسط رواتب الفريق الشهري ($)', value: avgSalary, setter: setAvgSalary },
                { label: 'عدد أفراد الفريق المتأثرين', value: teamSize, setter: setTeamSize },
                { label: 'ساعات الهدر اليدوية الأسبوعية / للفرد', value: wasteHours, setter: setWasteHours },
                { label: 'القيمة التقريبية للمشروع السنوي ($)', value: projectVal, setter: setProjectVal },
              ].map(({ label, value, setter }) => (
                <div key={label} className="space-y-2">
                  <label className="block text-xs font-semibold text-[#94A3B8]">{label}</label>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => setter(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#161D30] border border-[#1E2943] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                  />
                </div>
              ))}
            </div>

            <div className="bg-[#161D30] p-6 rounded-lg border border-[#1E2943] space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-[#0B0F19] rounded-lg border border-[#1E2943]">
                  <span className="block text-xs text-[#94A3B8]">ساعات مستردة شهرياً</span>
                  <span className="text-xl font-bold text-[#D4AF37]">{hoursSaved} ساعة</span>
                </div>
                <div className="p-3 bg-[#0B0F19] rounded-lg border border-[#1E2943]">
                  <span className="block text-xs text-[#94A3B8]">توفير مالي شهري</span>
                  <span className="text-xl font-bold text-emerald-500">${moneySaved.toLocaleString()}</span>
                </div>
                <div className="p-3 bg-[#0B0F19] rounded-lg border border-[#1E2943]">
                  <span className="block text-xs text-[#94A3B8]">كفاءة تشغيلية مستعادة</span>
                  <span className="text-xl font-bold text-blue-400">+60%</span>
                </div>
              </div>
              <div className="pt-4 border-t border-[#1E2943]/50 text-xs text-[#94A3B8] text-center">
                الاسترداد المتوقع للاستثمار الأساسي للمنظومة يتم خلال{' '}
                <span className="font-bold text-white">{payback ? `${payback} أشهر` : 'مستمر'}</span> فقط.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Chat Agent ─────────────────────────────────────────────────────────────────
const PREDEFINED: Record<string, string> = {
  'كيف تضمن القافلة عدم هذيان الذكاء الاصطناعي؟':
    'نحن نطبق بروتوكول الحوكمة الدلالية (SGP) كطبقة حماية تفحص كل مخرج للـ LLM وتطابقه مع القواعد الصارمة لشركتك. النتيجة هي دقة كاملة وصفرية الأخطاء.',
  'ما هي الفوائد التشغيلية للـ RAG وبحيرة الذاكرة؟':
    'بحيرة الذاكرة تتيح للوكلاء حفظ سياقات وتفاصيل المحادثات التاريخية كبلورات معرفية متجهة. هذا يحمي شركتك من فقدان خبرة الموظفين إذا غادروا، ويبقي عقل الشركة في خزانة آمنة.',
  'كيف يعمل بروتوكول المزامنة الترددية 963Hz؟':
    'بروتوكولنا الترددي يعالج الأصول المرئية والموسيقية لضبط الإخراج والجمالية السينمائية، مما يمنح الأعمال عمقاً نفسياً وشعورياً استثنائياً يتجاوز المحتوى الرقمي التقليدي.',
}

interface ChatMessage {
  text: string
  isUser: boolean
}

function AgentSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: 'أهلاً بك في فضاء القافلة المعرفي. أنا وكيل المبيعات السيادي. كيف يمكنني مساعدتك اليوم في فحص البنية التحتية لشركتك وتحسين كفاءتها التشغيلية؟',
      isUser: false,
    },
  ])
  const [input, setInput] = useState('')
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [messages])

  const appendMessage = (text: string, isUser: boolean) =>
    setMessages((prev) => [...prev, { text, isUser }])

  const getReply = (text: string) => {
    if (PREDEFINED[text]) return PREDEFINED[text]
    if (text.includes('سعر') || text.includes('تكلفة'))
      return 'تكلفتنا تُحسب كـ "استثمار في السيادة الرقمية". نحن نضع تسعيراً مخصصاً يعتمد على حجم الهدر المالي الذي سنقوم بتوفيره لشركتك شهرياً.'
    if (text.includes('دمشق') || text.includes('البحصة'))
      return 'محيطنا في دمشق والبحصة هو العصب التجاري للحلول؛ نحن نوفر خوادم محلية آمنة وبنية تحتية سحابية متوافقة تماماً مع متطلبات السوق السورية.'
    return 'بصفتي وكيل القافلة السيادي، يسعدني فحص هذا الاحتياج. هذا يتطلب تفعيل طبقة المعايرة لدينا. يرجى حجز استشارة في النموذج أدناه لمناقشة التفاصيل تحت حماية اتفاقية عدم الإفشاء.'
  }

  const sendMessage = (text?: string) => {
    const msg = text ?? input.trim()
    if (!msg) return
    appendMessage(msg, true)
    setInput('')
    setTimeout(() => appendMessage(getReply(msg), false), 800)
  }

  const quickButtons = [
    'كيف تضمن القافلة عدم هذيان الذكاء الاصطناعي؟',
    'ما هي الفوائد التشغيلية للـ RAG وبحيرة الذاكرة؟',
    'كيف يعمل بروتوكول المزامنة الترددية 963Hz؟',
  ]

  const quickLabels = ['تجنب الهذيان الدلالي', 'فوائد بحيرة الذاكرة', 'تردد 963Hz الفني']

  return (
    <section id="agent" className="py-24 bg-[#0B0F19] border-t border-[#1E2943] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">مساعد تفاعلي تجريبي</h2>
          <h3 className="text-3xl sm:text-4xl font-black">استشر وكيل المبيعات السيادي</h3>
          <p className="text-[#94A3B8]">
            اختبر طريقة تفكير واستدلال الوكيل المخصص للقافلة بنفسك. اختر موضوعاً أو اسأله مباشرة لترى كيف يتعامل مع المشاكل التقنية والمعرفية.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#161D30] rounded-xl border border-[#1E2943] overflow-hidden shadow-2xl flex flex-col h-[500px]">
          <div className="bg-[#0B0F19] px-6 py-4 border-b border-[#1E2943] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className="block text-sm font-bold text-white">الوكيل التجاري للقافلة (Sovereign Sales Agent)</span>
                <span className="text-[9px] text-[#D4AF37]">قائم على عمارة دلالية مستقلة</span>
              </div>
            </div>
            <span className="text-xs text-[#94A3B8] font-mono">SECURE LIVE SESSION</span>
          </div>

          <div ref={chatRef} className="flex-1 p-6 overflow-y-auto space-y-4 text-sm scrollbar-thin">
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-start gap-3 ${msg.isUser ? 'flex-row-reverse' : ''}`}>
                <div
                  className={`w-8 h-8 rounded flex items-center justify-center text-xs flex-shrink-0 mt-1 ${
                    msg.isUser ? 'bg-[#D4AF37] text-[#0B0F19]' : 'bg-[#D4AF37]/10 text-[#D4AF37]'
                  }`}
                >
                  <i className={`fa-solid ${msg.isUser ? 'fa-user' : 'fa-robot'}`} />
                </div>
                <div
                  className={`p-4 rounded-lg max-w-[80%] leading-relaxed ${
                    msg.isUser
                      ? 'bg-[#D4AF37] text-[#0B0F19] font-semibold'
                      : 'bg-[#0B0F19] border border-[#1E2943] text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#0B0F19]/50 border-t border-[#1E2943] flex flex-wrap gap-2 justify-center">
            {quickButtons.map((q, i) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs px-3 py-1.5 rounded-full bg-[#0B0F19] hover:bg-[#1E2943] border border-[#1E2943] text-[#D4AF37] transition-all"
              >
                {quickLabels[i]}
              </button>
            ))}
          </div>

          <div className="p-4 bg-[#0B0F19] border-t border-[#1E2943] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="اكتب سؤالك التقني للوكيل هنا..."
              className="flex-1 bg-[#161D30] border border-[#1E2943] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
            />
            <button
              onClick={() => sendMessage()}
              className="px-5 bg-[#D4AF37] hover:bg-[#AA8C2C] text-[#0B0F19] font-bold rounded-lg transition-all flex items-center justify-center"
            >
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact Form ───────────────────────────────────────────────────────────────
function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [fields, setFields] = useState({
    'client-name': '',
    'client-phone': '',
    'client-company': '',
    'target-mod': 'SGP',
    'client-note': '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/qafila-lead.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'qafila-lead', ...fields }),
    })
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-[#161D30] border border-[#1E2943] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] text-sm'

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-[#0B0F19] to-[#161D30] border-t border-[#1E2943] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">بوابة حجز الاستشارات</h2>
          <h3 className="text-3xl font-black">اطلب دراسة الجدوى التقنية (ROI Analysis)</h3>
          <p className="text-[#94A3B8]">
            أدخل بياناتك الأساسية، وسيقوم فريق التطوير المعماري بالتواصل معك لجدولة لقاء تقني وعرض حي للمنظومة على بياناتك الفعلية.
          </p>
        </div>

        <div className="bg-[#0B0F19] p-8 rounded-xl border border-[#1E2943] shadow-2xl relative">
          {submitted ? (
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center text-emerald-500 text-3xl">
                <i className="fa-solid fa-circle-check" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-white">تم استلام طلبك بنجاح سيادي</h4>
                <p className="text-[#94A3B8] max-w-md mx-auto">
                  تم تسجيل بياناتك ضمن بحيرة الذاكرة لقسم الاستفسارات التجارية. سيقوم منسق الأنظمة بالتواصل معك هاتفياً أو عبر الواتساب خلال 24 ساعة لجدولة العرض الفني.
                </p>
              </div>
              <button
                onClick={() => { setSubmitted(false); setFields({ 'client-name': '', 'client-phone': '', 'client-company': '', 'target-mod': 'SGP', 'client-note': '' }) }}
                className="px-6 py-2 bg-[#161D30] hover:bg-[#1E2943] border border-[#1E2943] text-white text-sm rounded-lg transition-all"
              >
                تقديم طلب آخر
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="qafila-lead" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#94A3B8]">الاسم الكامل / الصفة الوظيفية</label>
                  <input
                    type="text"
                    name="client-name"
                    required
                    value={fields['client-name']}
                    onChange={handleChange}
                    placeholder="مثال: د. مازن - رئيس قسم هندسة النظم"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#94A3B8]">رقم الهاتف أو الواتساب</label>
                  <input
                    type="tel"
                    name="client-phone"
                    required
                    value={fields['client-phone']}
                    onChange={handleChange}
                    placeholder="مثال: 09XXXXXXXX"
                    className={`${inputClass} text-left`}
                    dir="ltr"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#94A3B8]">المنشأة أو قطاع العمل</label>
                  <input
                    type="text"
                    name="client-company"
                    required
                    value={fields['client-company']}
                    onChange={handleChange}
                    placeholder="مثال: مشفى خاص / شركة برمجيات بالبحصة"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#94A3B8]">البروتوكول المرغوب اختباره</label>
                  <select name="target-mod" value={fields['target-mod']} onChange={handleChange} className={inputClass}>
                    <option value="SGP">بروتوكول الحوكمة الدلالية (منع الأخطاء)</option>
                    <option value="FAP">بروتوكول المعايرة والمزامنة الترددية (الفني)</option>
                    <option value="VML">بحيرة الذاكرة المتجهة (أرشفة وحفظ السيادة)</option>
                    <option value="ALL">المنظومة الكاملة متكاملة</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-[#94A3B8]">وصف موجز للمشكلة أو الاحتياج الحالي</label>
                <textarea
                  name="client-note"
                  rows={4}
                  value={fields['client-note']}
                  onChange={handleChange}
                  placeholder="اكتب بضع كلمات عن طبيعة الأنظمة التي تريد أتمتتها أو تطويرها بالذكاء الاصطناعي..."
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#D4AF37] hover:bg-[#AA8C2C] text-[#0B0F19] font-bold rounded-lg transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-paper-plane" />
                إرسال الطلب واعتماده دلالياً
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0B0F19] border-t border-[#1E2943] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-xs">
            <i className="fa-solid fa-compass-drafting" />
          </div>
          <span className="text-sm font-bold text-white tracking-wider">الـقــافــلــة</span>
        </div>

        <p className="text-xs text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          كافة البروتوكولات المذكورة (SGP, FAP)، وهياكل الذاكرة المتجهة الموصوفة، وحاسبة العائد الاستثماري الدلالي، والرسوم البصرية وتصاميم النظم، هي حقوق ملكية فكرية مطلقة ومسجلة باسم المطور والمالك الرئيسي{' '}
          <strong className="text-white">Wissam Haj Mohammed</strong> وتراث{' '}
          <strong className="text-white">"بلا أهداف"</strong>. يُمنع تماماً نسخ هذه البنية أو استخدام مخرجاتها دون تصريح كتابي ومسبق.
        </p>

        <div className="text-[10px] text-[#94A3B8] pt-4 border-t border-[#1E2943]/30 max-w-md mx-auto">
          &copy; 2026 منظومة القافلة. تم التطوير بمعايير شراكات جوجل المعتمدة. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  )
}

// ─── Main Page ──────────────────────────────────────────────────────────────────
function QafilaLanding() {
  return (
    <>
      <Header />
      <HeroSection />
      <ArchitectureSection />
      <CalculatorSection />
      <AgentSection />
      <ContactSection />
      <Footer />
    </>
  )
}
