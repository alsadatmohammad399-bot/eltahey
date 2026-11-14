import { useState } from 'react';

const categories = [
  { id: 1, title: 'كباب ضاني', sub: 'بلدي فاخر', count: '12 طبق', img: 'https://images.unsplash.com/photo-1546964052-d9334ceb32ee?w=300' },
  { id: 2, title: 'ريش مشوية', sub: 'على الفحم', count: '8 أطباق', img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=300' },
  { id: 3, title: 'طرب', sub: 'خلطة الطاهي', count: '15 طبق', img: 'https://images.unsplash.com/photo-1558030006-450066393d65?w=300' },
  { id: 4, title: 'كفتة', sub: 'مخصوص', count: '10 أطباق', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300' },
];

export default function ElTaheyBlackGold() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EAE6DF] font-[Cairo]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');`}</style>
      
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-white/[0.06] px-6 md:px-10 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#C9A86A] text-black grid place-items-center font-bold">T</div>
          <span className="font-[Playfair_Display] text-xl">EL <span className="text-[#C9A86A] italic">TAHEY</span></span>
        </div>
        <button className="bg-[#C9A86A] text-black px-5 py-2 rounded-full text-[11px] font-bold">BOOK A TABLE →</button>
      </header>

      <section className="px-6 md:px-10 pt-14 pb-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12">
          <div>
            <div className="inline-flex border border-[#C9A86A]/30 rounded-full px-3 py-1 text-[10px] text-[#C9A86A]">✦ LUXURY KEBAB HOUSE</div>
            <h1 className="font-[Playfair_Display] text-[42px] md:text-[62px] font-bold leading-[0.9] mt-6">Feast On<br/>The Richness Of<br/><span className="text-[#C9A86A] italic">Arabian Nights</span></h1>
            <div className="flex gap-3 mt-8">
              <button className="bg-[#C9A86A] text-black px-7 py-3 rounded-full text-[13px] font-bold">اطلب دلوقتي →</button>
            </div>
          </div>

          <div className="flex gap-5 justify-center flex-wrap">
            {categories.slice(0,3).map((cat) => (
              <div key={cat.id} className="w-[145px] relative pt-[58px] group hover:-translate-y-2 transition-all duration-500">
                <img src={cat.img} className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full border-2 border-[#C9A86A] object-cover shadow-[0_0_30px_rgba(201,168,106,0.3)] z-20" alt={cat.title}/>
                <div className="absolute top-[58px] left-1/2 -translate-x-1/2 w-[1px] h-[30px] bg-gradient-to-b from-[#C9A86A] to-transparent"></div>
                <div className="bg-[#141414] border border-[#C9A86A]/20 rounded-[70px] pt-[52px] pb-[22px] px-3 text-center">
                  <div className="text-[#C9A86A] font-bold text-[13px]">{cat.title}</div>
                  <div className="text-white/40 text-[10px]">{cat.sub}</div>
                  <div className="mt-3 bg-black border border-[#C9A86A]/40 text-[#C9A86A] text-[9px] px-3 py-1 rounded-full inline-block">{cat.count}</div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#C9A86A] text-black rounded-full grid place-items-center">↗</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-y border-[#C9A86A]/15 py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-[marquee_25s_linear_infinite] text-[11px] tracking-[5px] text-[#C9A86A]/40">
          <span>• EL TAHEY • LUXURY KEBAB • EL TAHEY • LUXURY KEBAB • EL TAHEY • LUXURY KEBAB •&nbsp;</span>
          <span>• EL TAHEY • LUXURY KEBAB • EL TAHEY • LUXURY KEBAB • EL TAHEY • LUXURY KEBAB •&nbsp;</span>
        </div>
      </div>
    </div>
  )
}
