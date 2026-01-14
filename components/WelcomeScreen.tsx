import React from 'react';
import { LESSONS, LESSON_SECTIONS } from '../constants';

interface WelcomeScreenProps {
    onSelectLesson: (id: number) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectLesson }) => {
    return (
        <div className="min-h-screen bg-amber-50 p-4 md:p-6 lg:p-8 flex items-center justify-center">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
                
                {/* 1. Hero Block (Large) */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-green-700 to-green-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden group flex flex-col justify-between min-h-[400px] slide-up shadow-xl border-4 border-green-800">
                    <div className="absolute bottom-12 right-8 opacity-20 group-hover:opacity-30 transition-opacity duration-700 transform group-hover:scale-110 group-hover:rotate-6">
                        <span className="text-9xl">🐆</span>
                    </div>
                    <div className="absolute top-1/2 right-6 transform -translate-y-1/2 opacity-10 text-8xl float-animation">🌿</div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-bold tracking-wide mb-6 text-yellow-100">
                            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                            CURSO ONLINE GRATUITO
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 drop-shadow-md">
                            Tupi Antigo 🏹<br/>
                            <span className="text-yellow-300">em 10 Lições</span>
                        </h1>
                        <p className="text-green-100 text-lg max-w-md leading-relaxed font-medium">
                            Descubra a alma das palavras brasileiras. De "Pipoca" a "Ibirapuera", entenda a língua que nomeou o Brasil.
                        </p>
                    </div>

                    <div className="relative z-10 mt-8">
                        <button 
                            onClick={() => onSelectLesson(1)}
                            className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-extrabold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1"
                        >
                            Começar Agora <span className="text-xl">☀️</span>
                        </button>
                    </div>
                </div>

                {/* 2. Intro/Context Block */}
                <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-white rounded-3xl p-8 border-2 border-orange-200 flex flex-col justify-center slide-up shadow-sm hover:border-orange-300 transition-colors" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl bg-orange-100 p-2 rounded-lg">🦜</span>
                        <h2 className="text-xl font-bold text-orange-800">Por que aprender?</h2>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                        O Tupi Antigo foi a língua mais falada no Brasil colonial. Entender Tupi é entender nossa geografia, nossa culinária e nossa cultura. 
                        <span className="block mt-2 font-bold text-green-700">Piracicaba, Tatuapé, Ipanema... tudo é Tupi.</span>
                    </p>
                </div>

                {/* 3. Author Block (Expanded) */}
                <div className="bg-orange-100 rounded-3xl p-6 flex flex-col justify-center border-2 border-orange-200 slide-up shadow-sm gap-5" style={{ animationDelay: '0.15s' }}>
                    
                    {/* Text Author */}
                    <div>
                        <p className="text-[10px] font-bold text-orange-600 uppercase tracking-wider mb-2">AUTORIA DO TEXTO</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-lg border border-orange-300 flex-shrink-0">👨‍🏫</div>
                            <div>
                                <p className="font-bold text-orange-900 text-sm leading-tight">Prof. Eduardo Navarro</p>
                                <p className="text-orange-700/80 text-[10px] font-semibold">Universidade de São Paulo</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-orange-200/60"></div>

                    {/* App Author */}
                    <div>
                        <p className="text-[10px] font-bold text-orange-600 uppercase tracking-wider mb-2">AUTORIA DO APP</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-lg border border-orange-300 flex-shrink-0">🧑🏻</div>
                            <div>
                                <p className="font-bold text-orange-900 text-sm leading-tight">Suã Marangatu</p>
                                <p className="text-orange-700/80 text-[10px] font-semibold leading-tight">Feito em Salvador, Bahia, em 2026</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 4. Interactive Fun Fact (Compact) */}
                <div className="bg-red-500 text-white rounded-3xl p-6 flex flex-col justify-center slide-up hover:bg-red-600 transition-colors cursor-default shadow-md border-b-4 border-red-700" style={{ animationDelay: '0.2s' }}>
                    <span className="text-3xl mb-2">🍿</span>
                    <p className="font-bold text-lg leading-tight">"Pipoca"</p>
                    <p className="text-sm opacity-90 mt-1 font-medium">Vem de <em>pira</em> (pele) + <em>pok</em> (estourar).</p>
                </div>

                {/* 5. Lessons Grid Title */}
                <div className="col-span-1 md:col-span-3 lg:col-span-4 mt-6 mb-2 flex items-center justify-between slide-up" style={{ animationDelay: '0.25s' }}>
                    <h3 className="text-xl font-bold text-green-800 uppercase tracking-widest pl-2 flex items-center gap-2">
                        <span>🗺️</span> As Lições
                    </h3>
                    <div className="h-1 bg-green-200 flex-grow ml-4 rounded-full opacity-50"></div>
                </div>

                {/* 6. Lesson Cards */}
                {LESSONS.map((lesson, index) => {
                    // Quick tag logic
                    const sections = LESSON_SECTIONS[lesson.id] || [];
                    const tags = sections
                        .filter(s => s.id !== 'intro' && s.id !== 'vocab' && s.id !== 'practice1')
                        .slice(0, 1)
                        .map(s => s.label.replace(/^[^\w]*\s*/, ''));

                    return (
                        <button
                            key={lesson.id}
                            onClick={() => onSelectLesson(lesson.id)}
                            className="group bg-white hover:bg-yellow-50 rounded-3xl p-6 border-2 border-stone-100 hover:border-orange-300 transition-all duration-300 text-left flex flex-col h-full slide-up hover:shadow-xl relative overflow-hidden"
                            style={{ animationDelay: `${0.3 + (index * 0.05)}s` }}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="text-6xl font-black text-orange-900">{lesson.id}</span>
                            </div>
                            
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-full bg-orange-100 group-hover:bg-orange-200 text-orange-700 group-hover:text-orange-900 flex items-center justify-center font-bold text-xs transition-colors border border-orange-200">
                                    {lesson.id}
                                </span>
                                {index === 0 && (
                                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded-full border border-green-200">INÍCIO</span>
                                )}
                            </div>
                            
                            <h4 className="font-bold text-stone-800 group-hover:text-orange-900 mb-2 leading-tight">
                                {lesson.title}
                            </h4>
                            
                            <div className="mt-auto pt-4">
                                {tags.map((tag, i) => (
                                    <span key={i} className="inline-block text-[10px] font-bold uppercase tracking-wider text-green-600 group-hover:text-green-800 bg-green-50 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </button>
                    );
                })}

                {/* Footer Link */}
                <div className="col-span-1 md:col-span-3 lg:col-span-4 py-8 text-center text-green-700/60 text-sm slide-up font-medium" style={{ animationDelay: '0.8s' }}>
                    <p>Baseado no material didático do Prof. Eduardo de Almeida Navarro (USP)</p>
                </div>

            </div>
        </div>
    );
};