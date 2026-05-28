'use client'

import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/social-dashboard')({
  component: SocialDashboard,
})

const PLATFORMS = [
  { id: 'facebook',  label: 'فيسبوك',   icon: 'fa-facebook',   color: '#1877F2' },
  { id: 'instagram', label: 'إنستغرام', icon: 'fa-instagram',  color: '#E4405F' },
  { id: 'telegram',  label: 'تليغرام',  icon: 'fa-telegram',   color: '#26A5E4' },
  { id: 'x',         label: 'منصة X',   icon: 'fa-x-twitter',  color: '#FFFFFF' },
]

const SCHEDULED = [
  { text: 'إطلاق حملة التوعية بالذكاء الاصطناعي', time: '2026-05-29 09:00', platforms: ['facebook', 'instagram'] },
  { text: 'نشرة أسبوعية — مستجدات منظومة القافلة', time: '2026-05-29 14:00', platforms: ['telegram', 'x'] },
  { text: 'عرض ترويجي: خصم 20% على خدمة SGP',      time: '2026-05-30 11:00', platforms: ['facebook', 'instagram', 'x'] },
]

const PERFORMANCE = [
  { platform: 'فيسبوك',   icon: 'fa-facebook',  color: '#1877F2', views: '18.4K', likes: '1.2K' },
  { platform: 'إنستغرام', icon: 'fa-instagram', color: '#E4405F', views: '24.1K', likes: '3.6K' },
  { platform: 'تليغرام',  icon: 'fa-telegram',  color: '#26A5E4', views: '9.7K',  likes: '541'  },
  { platform: 'منصة X',   icon: 'fa-x-twitter', color: '#FFFFFF', views: '31.2K', likes: '2.8K' },
]

const BOT_STATUS = [
  { label: 'Facebook Graph API', connected: true },
  { label: 'Instagram Basic Display API', connected: true },
  { label: 'Telegram Bot API', connected: true },
  { label: 'X (Twitter) API v2', connected: false },
]

function PlatformIcon({ id, color }: { id: string; color: string }) {
  const p = PLATFORMS.find((p) => p.id === id)
  if (!p) return null
  return <i className={`fa-brands ${p.icon} text-xs`} style={{ color }} />
}

export default function SocialDashboard() {
  const [postText, setPostText] = useState('')
  const [selected, setSelected] = useState<Set<string>>(new Set(['facebook', 'instagram', 'telegram', 'x']))
  const [sent, setSent] = useState(false)

  function togglePlatform(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function handleSend() {
    if (!postText.trim() || selected.size === 0) return
    setSent(true)
    setPostText('')
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-50 font-sans" dir="rtl">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F19]/90 border-b border-[#1E2943]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors text-sm">
              <i className="fa-solid fa-arrow-right" />
              <span>الرئيسية</span>
            </a>
            <span className="text-[#1E2943]">|</span>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#D4AF37] to-amber-500 flex items-center justify-center">
                <i className="fa-brands fa-buffer text-[#0B0F19] text-xs" />
              </div>
              <span className="font-bold text-white text-sm">لوحة تحكم السوشيال ميديا</span>
            </div>
          </div>
          <span className="text-[10px] text-[#D4AF37] tracking-widest border border-[#D4AF37]/30 px-2 py-0.5 rounded-full">
            AL-QAFILA SOCIAL HUB
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* ── Top grid: Post + Status ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── 1. إنشاء منشور ── */}
          <div className="lg:col-span-2 bg-[#161D30] rounded-xl border border-[#1E2943] p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#1E2943] pb-3">
              <i className="fa-solid fa-pen-to-square text-[#D4AF37]" />
              <h2 className="font-bold text-white">إنشاء منشور</h2>
            </div>

            <textarea
              rows={4}
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="اكتب منشورك هنا..."
              className="w-full bg-[#0B0F19] border border-[#1E2943] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-white placeholder-[#475569] text-sm resize-none focus:outline-none transition-colors"
            />

            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => togglePlatform(p.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                    selected.has(p.id)
                      ? 'border-[#D4AF37]/50 bg-[#D4AF37]/10 text-white'
                      : 'border-[#1E2943] bg-[#0B0F19] text-[#94A3B8]'
                  }`}
                >
                  <i className={`fa-brands ${p.icon}`} style={{ color: selected.has(p.id) ? p.color : '#475569' }} />
                  {p.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={handleSend}
                disabled={!postText.trim() || selected.size === 0}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] hover:bg-[#AA8C2C] disabled:opacity-40 disabled:cursor-not-allowed text-[#0B0F19] font-bold rounded-lg text-sm transition-all"
              >
                <i className="fa-solid fa-paper-plane" />
                إرسال وتوزيع تلقائي
              </button>
              {sent && (
                <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <i className="fa-solid fa-circle-check" />
                  تم الإرسال بنجاح
                </span>
              )}
            </div>
          </div>

          {/* ── 3. حالة البوت والربط ── */}
          <div className="bg-[#161D30] rounded-xl border border-[#1E2943] p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#1E2943] pb-3">
              <i className="fa-solid fa-plug-circle-bolt text-[#D4AF37]" />
              <h2 className="font-bold text-white">حالة الربط والبوت</h2>
            </div>

            <div className="space-y-3">
              {BOT_STATUS.map((s) => (
                <div key={s.label} className="flex items-center justify-between gap-3">
                  <span className="text-xs text-[#94A3B8] leading-tight">{s.label}</span>
                  <span
                    className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                      s.connected
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${s.connected ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
                    {s.connected ? 'متصل' : 'منفصل'}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-2 pt-3 border-t border-[#1E2943]">
              <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                <i className="fa-brands fa-telegram text-[#26A5E4]" />
                <span>بوت التليغرام: <span className="text-emerald-400 font-semibold">فعّال</span></span>
              </div>
              <p className="text-[10px] text-[#475569] mt-1">يمكنك إرسال الأوامر عبر @QafilaBot</p>
            </div>
          </div>
        </div>

        {/* ── Bottom grid: Schedule + Performance ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── 2. جدولة المحتوى ── */}
          <div className="bg-[#161D30] rounded-xl border border-[#1E2943] p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#1E2943] pb-3">
              <i className="fa-solid fa-calendar-days text-[#D4AF37]" />
              <h2 className="font-bold text-white">جدولة المحتوى</h2>
              <span className="mr-auto text-[10px] text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-0.5 rounded-full">
                {SCHEDULED.length} منشورات قادمة
              </span>
            </div>

            <div className="space-y-3">
              {SCHEDULED.map((item, i) => (
                <div key={i} className="flex gap-3 p-3 bg-[#0B0F19] rounded-lg border border-[#1E2943] group hover:border-[#D4AF37]/20 transition-colors">
                  <div className="flex flex-col items-center justify-center w-10 shrink-0 bg-[#D4AF37]/10 rounded-lg text-center p-1.5">
                    <span className="text-[10px] font-bold text-[#D4AF37] leading-tight">
                      {item.time.split(' ')[0].split('-')[2]}
                    </span>
                    <span className="text-[9px] text-[#94A3B8]">
                      {item.time.split(' ')[1]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white leading-snug line-clamp-2">{item.text}</p>
                    <div className="flex items-center gap-1 mt-1.5">
                      {item.platforms.map((pid) => {
                        const p = PLATFORMS.find((p) => p.id === pid)!
                        return <PlatformIcon key={pid} id={pid} color={p.color} />
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 4. الأداء ── */}
          <div className="bg-[#161D30] rounded-xl border border-[#1E2943] p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#1E2943] pb-3">
              <i className="fa-solid fa-chart-bar text-[#D4AF37]" />
              <h2 className="font-bold text-white">الأداء والتفاعل</h2>
              <span className="mr-auto text-[10px] text-[#94A3B8]">آخر 30 يوماً</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[10px] text-[#94A3B8] uppercase tracking-wider">
                    <th className="text-right pb-3 font-semibold">المنصة</th>
                    <th className="text-center pb-3 font-semibold">المشاهدات</th>
                    <th className="text-center pb-3 font-semibold">اللايكات</th>
                    <th className="text-center pb-3 font-semibold">التفاعل</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E2943]">
                  {PERFORMANCE.map((row) => {
                    const viewNum = parseFloat(row.views)
                    const likeNum = parseFloat(row.likes)
                    const rate = ((likeNum / viewNum) * 100).toFixed(1)
                    return (
                      <tr key={row.platform} className="hover:bg-[#0B0F19]/50 transition-colors">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <i className={`fa-brands ${row.icon} text-sm`} style={{ color: row.color }} />
                            <span className="text-white text-xs font-medium">{row.platform}</span>
                          </div>
                        </td>
                        <td className="py-3 text-center text-xs text-[#94A3B8]">{row.views}</td>
                        <td className="py-3 text-center text-xs text-[#94A3B8]">{row.likes}</td>
                        <td className="py-3 text-center">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-semibold">
                            {rate}%
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="pt-2 border-t border-[#1E2943] grid grid-cols-3 gap-3 text-center">
              <div>
                <span className="block text-base font-bold text-white">83.4K</span>
                <span className="text-[10px] text-[#94A3B8]">إجمالي المشاهدات</span>
              </div>
              <div>
                <span className="block text-base font-bold text-[#D4AF37]">8.1K</span>
                <span className="text-[10px] text-[#94A3B8]">إجمالي اللايكات</span>
              </div>
              <div>
                <span className="block text-base font-bold text-emerald-400">9.7%</span>
                <span className="text-[10px] text-[#94A3B8]">متوسط التفاعل</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
