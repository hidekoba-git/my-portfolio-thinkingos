import React, { useEffect, useRef, useState } from 'react';
import { MoveRight, ArrowRight } from 'lucide-react';

/**
 * The Architect of Meaning
 * * Design Concept:
 * - Intellectual / Minimal / Editorial / Textured
 * - No Icons (except minimal functional arrows)
 * - Typography driven
 * - Dark Ink background (#1a1a1a) with Noise Texture
 */

const NoiseBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay">
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
      <filter id='noiseFilter'>
        <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch' />
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>
  </div>
);

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 }); // Trigger earlier
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if(currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#e5e5e5] font-serif overflow-x-hidden selection:bg-[#C5A059] selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Shippori+Mincho:wght@400;500;600;800&family=Zen+Old+Mincho:wght@400;700;900&display=swap');
        
        .font-jp-serif { font-family: 'Shippori Mincho', serif; }
        .font-jp-old { font-family: 'Zen Old Mincho', serif; }
        .font-en-serif { font-family: 'Cormorant Garamond', serif; }
        
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: upright;
          letter-spacing: 0.15em;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>

      <NoiseBackground />

      {/* 01. First View (The Concept) */}
      <section className="relative h-screen flex flex-col items-center justify-center p-8 md:p-16">
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between h-full">
          
          {/* Main Typography */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start h-full mt-20 md:mt-0">
            {/* Adjusted typography size for better balance: text-5xl/8xl/9xl -> text-4xl/6xl/8xl */}
            <h1 className="font-jp-old text-4xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tight text-center md:text-left mix-blend-screen opacity-90">
              <span className="block mb-4 md:mb-6">ひとりで悩む時間を<br className="md:hidden"/>ゼロに。</span>
              <span className="block text-[#C5A059] opacity-90">正解へ導く<br className="md:hidden"/>思考整理パートナー</span>
            </h1>
          </div>

          {/* Sub Copy (Vertical & English) */}
          <div className="md:h-full flex flex-col md:justify-between items-center md:items-end py-12 md:py-20 gap-8 md:gap-0">
            <div className="vertical-text text-sm md:text-base tracking-widest leading-loose h-64 md:h-auto text-gray-400 font-jp-serif border-l md:border-l-0 md:border-r border-gray-800 pr-4 pl-4 md:pl-0">
              言葉にならない想いを編集し、<br />
              ジャイアントキリングの設計図を描く。
            </div>
            
            <div className="text-center md:text-right font-en-serif">
              <p className="text-xl md:text-2xl italic text-gray-500 font-light">
                単なる施策提案ではなく、<br />「目的の明確化」「価値の整理」「導線設計」「顧客理解」を軸に、<br />戦略から実務まで一貫して支援します。
              </p>
              <p className="text-sm tracking-widest uppercase mt-2 text-gray-600">
                
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-[1px] h-16 bg-gray-500 animate-pulse"></div>
          <span className="font-en-serif text-xs tracking-widest">SCROLL</span>
        </div>
      </section>


      {/* 02. The Philosophy (Introduction) */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Structure / Grid Visualization */}
          <div className="md:col-span-5 relative min-h-[40vh] md:min-h-auto hidden md:flex flex-col justify-center border-r border-gray-800 pr-12">
             {/* Animated Structure Concept */}
             <div className="space-y-24 opacity-40 font-en-serif text-5xl pointer-events-none select-none text-right">
                <div className="relative group">
                  <span className="block text-gray-600 transition-colors duration-500 group-hover:text-gray-400">Chaos</span>
                  <div className="absolute top-1/2 right-[-56px] w-12 h-[1px] bg-gray-800"></div>
                </div>
                <div className="relative group">
                  <span className="block text-gray-400 transition-colors duration-500 group-hover:text-gray-200">Order</span>
                  <div className="absolute top-1/2 right-[-56px] w-12 h-[1px] bg-gray-600"></div>
                </div>
                <div className="relative group">
                  <span className="block text-[#C5A059] transition-colors duration-500 group-hover:text-[#e0b86a]">Design</span>
                  <div className="absolute top-1/2 right-[-56px] w-12 h-[1px] bg-[#C5A059]"></div>
                </div>
             </div>
          </div>

          {/* Right: Text Content */}
          <div className="md:col-span-7 flex flex-col justify-center pl-0 md:pl-12">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-jp-old font-bold mb-12 leading-relaxed">
                混沌を整理し、<br/>
                再設計する。
              </h2>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="font-jp-serif text-lg leading-loose text-gray-300 space-y-8 text-justify">
                <p>
                  「想い」だけでは、ビジネスは動きません。<br/>
                  多くの現場で起きているのは、情報の氾濫と、導線の不在です。<br/>
                  素晴らしいビジョンがありながら、複雑さに溺れてしまっている。
                </p>
                <div className="pl-6 border-l-2 border-[#C5A059] py-2">
                  <p className="font-medium text-white">
                    私が提供するのは、徹底的な「整理」と「設計」です。<br/>
                    絡まり合った課題を因数分解し（整理）、<br/>
                    あるべき場所に配置し直し（構造化）、<br/>
                    人が自然と動く流れを作る（設計）。
                  </p>
                </div>
                <p>
                  それは、ビジネスの基礎工事のようなものです。<br/>
                  地味かもしれません。しかし、構造なき熱狂は脆い。<br/>
                  強固な骨組みがあって初めて、あなたの想いは遠くまで届くのです。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* 03. The Methodology (Thinking OS) */}
      <section className="py-24 md:py-40 px-6 bg-[#161616] border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-baseline gap-8 mb-20 border-b border-gray-800 pb-8">
              <span className="font-en-serif text-6xl md:text-8xl text-gray-800">03</span>
              <div>
                <h2 className="font-en-serif text-4xl md:text-5xl italic text-[#C5A059]">My Thinking OS</h2>
                <p className="font-jp-serif text-sm tracking-widest mt-2 text-gray-500">私の仕事の中心には、状況や情報を「観察し、整理し、設計し、実行へつなげる」という一連の思考プロセスがあります。  
これは単なるフレームワークではなく、日々の実務・コミュニケーション・戦略設計のすべてに通底する“思考OS”として機能しています。</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", en: "Insight", jp: "観察", desc: "データには表れない「行間」を読む。言語化されていない微細な違和感を捉える。" },
              { num: "02", en: "Structure", jp: "整理", desc: "混在する事実と感情を分解する。カオスに秩序を与える構造化のプロセス。" },
              { num: "03", en: "Meaning", jp: "解釈", desc: "事象の裏にある「意味」を定義する。なぜ、その問題が起きているのか。" },
              { num: "04", en: "Design", jp: "設計", desc: "目的から逆算された導線を引く。どこを突けば、オセロが裏返るのか。" },
              { num: "05", en: "Craft", jp: "実行", desc: "戦略を実務という現実へ落とし込む。泥臭く、かつ精密に。" },
              { num: "06", en: "Review", jp: "改善", desc: "結果を構造として読み解く。次なる観察への回帰。" },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100} className="group border-r border-b border-gray-800 p-8 md:p-12 hover:bg-[#1f1f1f] transition-colors duration-500 cursor-default min-h-[320px] flex flex-col justify-between">
                <div>
                  <div className="font-en-serif text-sm text-gray-600 mb-4">{item.num}</div>
                  <h3 className="text-2xl md:text-3xl font-en-serif mb-1 group-hover:text-[#C5A059] transition-colors">
                    {item.en} <span className="font-jp-serif text-lg text-gray-500 ml-2 group-hover:text-gray-400">{item.jp}</span>
                  </h3>
                </div>
                <div className="w-8 h-[1px] bg-gray-700 my-6 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                <p className="font-jp-serif text-sm text-gray-400 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* 04. The Depth (Three Layers) */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Abstract Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#1a1a1a] to-[#222]"></div>
          <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-b from-[#222] to-[#2a2a2a]"></div>
          <div className="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed grayscale mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-jp-old text-4xl md:text-6xl font-bold mb-20 tracking-wider">深度を、変える。</h2>
          </FadeIn>

          <div className="space-y-4">
            {/* Layer 1 */}
            <FadeIn delay={100} className="bg-black/40 backdrop-blur-sm border border-gray-800 p-8 mx-auto max-w-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <h3 className="font-en-serif text-2xl text-gray-500 mb-2">Surface / 表面</h3>
              <p className="font-jp-serif text-gray-400 text-sm">「売上が落ちた」「SNSが伸びない」。多くの目はここに留まりますが、それは単なる現象に過ぎません。</p>
            </FadeIn>
            
            {/* Layer 2 */}
            <FadeIn delay={200} className="bg-black/60 backdrop-blur-md border border-gray-700 p-8 mx-auto max-w-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <h3 className="font-en-serif text-2xl text-gray-400 mb-2">Structure / 構造</h3>
              <p className="font-jp-serif text-gray-300 text-sm">導線の断絶、ペルソナの矛盾。現象を引き起こしている「歪み」はこの層に潜んでいます。</p>
            </FadeIn>

            {/* Layer 3 */}
            <FadeIn delay={300} className="bg-[#C5A059]/10 backdrop-blur-lg border border-[#C5A059]/50 p-10 mx-auto max-w-2xl shadow-[0_0_30px_rgba(197,160,89,0.1)] transform scale-105">
              <h3 className="font-en-serif text-3xl text-[#C5A059] mb-4">Essence / 本質</h3>
              <p className="font-jp-serif text-gray-100 leading-relaxed">
                私がアプローチするのは、ここです。<br/>
                顧客理解の欠如、あるいは、あなた自身の「譲れない想い」の言語化不足。<br/>
                最も深い場所にメスを入れない限り、真の解決は訪れません。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* 05. Case Study (Narrative) */}
      <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="mb-24 ml-4 md:ml-12 border-l-4 border-[#C5A059] pl-6">
          <h2 className="font-en-serif text-5xl md:text-7xl">Project Logs</h2>
          <p className="font-jp-serif text-sm md:text-base mt-2 text-gray-400 tracking-widest">実績｜プロジェクト</p>
        </div>

        <div className="space-y-32">
          {/* Case 01 */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 md:order-1 font-jp-serif">
              <div className="text-[#C5A059] font-en-serif text-sm tracking-widest mb-4">LOG 01 : THE ARCHITECT</div>
              <h3 className="text-2xl md:text-3xl font-jp-old mb-8 leading-normal">
                工務店｜<br/>
                世界観の調律と導線設計
              </h3>
              <p className="text-gray-400 leading-loose text-justify mb-8">
                「見られる」から「選ばれる」へ。<br/>
                強引な集客ではなく、入口から出口の統一感、自然な導線設計で「この会社で建てたい」となる共感性の高い出会いを設計しました。数値としての成約だけでなく、顧客と企業の幸福なマッチングを実現した事例です。
              </p>
              <div className="text-xs text-gray-600 font-mono border-t border-gray-800 pt-4">
                SCOPE: Branding / SNS Strategy / Line Marketing
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] w-full bg-gray-800 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
               {/* Fixed Image URL */}
               <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Japanese House Architecture" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-50"></div>
            </div>
          </FadeIn>

          {/* Case 02 */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="md:col-start-2 font-jp-serif">
              <div className="text-[#C5A059] font-en-serif text-sm tracking-widest mb-4">LOG 02 : THE CLUB</div>
              <h3 className="text-2xl md:text-3xl font-jp-old mb-8 leading-normal">
                サッカークラブ｜<br/>
                組織の背骨を通すリブランディング
              </h3>
              <p className="text-gray-400 leading-loose text-justify mb-8">
                入会率1.75倍という数字は、結果に過ぎません。<br/>
                ブランドの再設計により、競合との比較にならない「一本の揺るぎない軸」が通ったことで独自化に向け走り出しました。組織としてのアイデンティティが確立され、地域の信頼を勝ち取る基盤を創りました。
              </p>
              <div className="text-xs text-gray-600 font-mono border-t border-gray-800 pt-4">
                SCOPE: Rebranding / CX Design / Internal Identity
              </div>
            </div>
            <div className="md:col-start-1 md:row-start-1 relative h-[400px] w-full bg-gray-800 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2070&auto=format&fit=crop" 
                alt="Soccer texture" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-50"></div>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* 06. Vision Translation & Method - REDESIGNED */}
      <section className="py-24 md:py-40 px-6 bg-[#181818]">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <FadeIn>
              <h2 className="font-en-serif text-4xl md:text-6xl text-gray-200 mb-2">Vision & Method</h2>
              <p className="font-jp-serif text-sm text-gray-500 mb-20 tracking-widest">想いの翻訳と、実行のメソッド</p>
            </FadeIn>

            <div className="flex flex-col gap-24">
              
              {/* Part 1: Vision Translation (Process Flow) */}
              <FadeIn delay={100}>
                <div className="border-l-2 border-[#C5A059] pl-6 mb-12">
                   <h3 className="text-2xl font-jp-old mb-2 text-[#C5A059]">Vision Translation</h3>
                   <p className="text-gray-400 text-sm font-jp-serif">抽象的な想いを、実行可能な戦略へ。</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 relative">
                  {/* Flow Steps */}
                  {[
                    { title: "Abstract", sub: "抽象的な想い", desc: "言語化されていない\n願望やビジョン" },
                    { title: "Verbalize", sub: "言語化", desc: "背景・動機を汲み取り\n定義する" },
                    { title: "Structure", sub: "構造化", desc: "優先順位をつけ\n戦略へ落とす" },
                    { title: "Design", sub: "導線設計", desc: "実務への接続と\nフロー構築" },
                    { title: "Execution", sub: "実行・成果", desc: "迷いのない\nアクションへ" },
                  ].map((step, i, arr) => (
                    <div key={i} className="relative flex flex-col p-6 border border-gray-800 bg-[#1a1a1a] z-10 hover:border-[#C5A059] transition-colors duration-300">
                       <div className="font-en-serif text-xs text-gray-600 mb-2">0{i+1}</div>
                       <div className="font-en-serif text-xl text-gray-300 mb-1">{step.title}</div>
                       <div className="font-jp-serif text-sm text-[#C5A059] mb-4">{step.sub}</div>
                       <p className="font-jp-serif text-xs text-gray-500 whitespace-pre-line leading-relaxed">{step.desc}</p>
                       
                       {/* Arrow for Desktop */}
                       {i !== arr.length - 1 && (
                         <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20 text-gray-700">
                           <ArrowRight size={24} />
                         </div>
                       )}
                       {/* Arrow for Mobile */}
                       {i !== arr.length - 1 && (
                         <div className="md:hidden flex justify-center py-2 text-gray-700">
                           <ArrowRight size={20} className="rotate-90" />
                         </div>
                       )}
                    </div>
                  ))}
                </div>
              </FadeIn>


              {/* Part 2: Core Methods (5 Axes) */}
              <FadeIn delay={300}>
                 <div className="border-l-2 border-gray-700 pl-6 mb-12">
                   <h3 className="text-2xl font-jp-old mb-2 text-gray-300">Core Method</h3>
                   <p className="text-gray-400 text-sm font-jp-serif">成果を再現する5つの軸</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {[
                     { title: "Purpose", jp: "目的の明確化", desc: "「なぜやるのか」「誰のためか」。プロジェクトの北極星を定義し、チームの判断軸を統一する。" },
                     { title: "Customer", jp: "顧客理解", desc: "属性ではなく、行動・状況・判断基準を分析。「なぜその人が動くのか」という動機を特定する。" },
                     { title: "Value", jp: "価値の言語化", desc: "機能的な強みだけでなく、その背景にある物語や必然性を整理し、選ばれる理由を作る。" },
                     { title: "Journey", jp: "導線設計", desc: "認知から契約まで、顧客心理が自然に変化する「流れ」を設計。断絶のないスムーズな動線を作る。" },
                     { title: "Verify", jp: "実行と検証", desc: "やりっ放しにしない。「なぜうまくいったか」を構造的に分析し、成果の再現性を高める。" },
                   ].map((method, i) => (
                     <div key={i} className="group">
                        <div className="flex items-baseline gap-3 mb-3 border-b border-gray-800 pb-2 group-hover:border-gray-600 transition-colors">
                           <span className="font-en-serif text-lg text-[#C5A059]">{method.title}</span>
                           <span className="font-jp-serif text-sm text-gray-300">{method.jp}</span>
                        </div>
                        <p className="font-jp-serif text-sm text-gray-500 leading-loose text-justify">
                           {method.desc}
                        </p>
                     </div>
                   ))}
                   
                   {/* Summary Block */}
                   <div className="bg-gray-800/30 p-6 flex items-center justify-center border border-gray-800">
                      <p className="font-jp-serif text-sm text-gray-400 text-center leading-relaxed">
                        これらを複合的に組み合わせ、<br/>
                        <span className="text-[#C5A059]">「点」の施策を「線」の戦略へ</span><br/>
                        昇華させます。
                      </p>
                   </div>
                </div>
              </FadeIn>
            </div>
        </div>
      </section>


      {/* 07. Contact (Invitation) */}
      <section className="py-32 md:py-48 px-6 text-center bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-gray-700 to-transparent"></div>
        
        <FadeIn>
          <p className="font-jp-serif text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
            考え方を整え、「新しい視点」で描く、迷いのない地図。<br/>
            進めない原因を整理し、再設計する。
          </p>
          <p className="font-jp-serif text-sm text-gray-600 mb-16">
            まずは、まとまりのない言葉のままで構いません。<br/>
            そのカオスの中にこそ、次のジャイアントキリングの種が眠っています。
          </p>

          <a href="#contact" className="group inline-flex flex-col items-center gap-2 cursor-pointer transition-all duration-300">
             <span className="font-en-serif text-2xl md:text-3xl tracking-widest text-[#C5A059] group-hover:text-white transition-colors">Start a Dialogue</span>
             <div className="w-0 group-hover:w-full h-[1px] bg-[#C5A059] transition-all duration-500 ease-out"></div>
             <span className="sr-only">Contact Form</span>
          </a>
          
          <div className="mt-24 text-gray-700 font-en-serif text-xs tracking-widest">
            © 2024 The Architect of Meaning.
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
