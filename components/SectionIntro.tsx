
import React from 'react';

interface SectionIntroProps {
    onNext: () => void;
    lessonId: number;
}

export const SectionIntro: React.FC<SectionIntroProps> = ({ onNext, lessonId }) => {
    
    // Lesson 2 Intro is technically the Postpositions section, 
    // but we can have a generic Intro if needed. 
    // Since the design is "closely following", Lesson 1 has a dedicated Intro component.
    // For Lesson 2, I created SectionPostpositions.
    // If this component is reused, I should add logic. 
    // However, in App.tsx I'm mapping sections. Lesson 1 has 'intro'. Lesson 2 has 'intro' too in my constants.
    // Let's implement Lesson 2 Intro here too.

    if (lessonId === 2) {
        return (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
                <div className="text-center mb-8">
                    <div className="inline-block bg-blue-100 rounded-full p-6 mb-4">
                        <span className="text-6xl">📍</span>
                    </div>
                    <h2 className="text-3xl font-bold text-green-800">Por que Iguape, Cotegipe e Sergipe terminam em -pe?</h2>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-6 border-l-4 border-blue-500">
                    <div className="flex items-center gap-4">
                        <div className="text-4xl pulse-icon">🌊</div>
                        <div>
                            <p className="text-xl font-bold text-blue-800">Topônimos em Tupi</p>
                            <p className="text-lg text-gray-700">Muitos nomes de lugares no Brasil explicam sua própria localização.</p>
                        </div>
                    </div>
                </div>

                <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 mb-4">
                        Nesta lição, aprenderemos sobre as <strong>posposições</strong>, que em Tupi funcionam como as preposições do português, 
                        mas vêm <em>depois</em> da palavra.
                    </p>
                    <p className="text-lg text-gray-700">
                        Isso explica por que tantos nomes de cidades terminam em <strong>-pe</strong> (que significa "em" ou "no/na").
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <button 
                        onClick={onNext}
                        className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                    >
                        Continuar → Posposições
                    </button>
                </div>
            </div>
        );
    }

    // Default to Lesson 1
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <div className="text-center mb-8">
                <div className="inline-block bg-amber-100 rounded-full p-6 mb-4">
                    <span className="text-6xl">🗣️</span>
                </div>
                <h2 className="text-3xl font-bold text-green-800">Donde vem "nhen nhen nhen"?</h2>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-6 border-l-4 border-amber-500">
                <div className="flex items-center gap-4">
                    <div className="text-4xl pulse-icon">💡</div>
                    <div>
                        <p className="text-xl font-bold text-amber-800">Ixé anhe'eng</p>
                        <p className="text-lg text-gray-700">Eu falo.</p>
                    </div>
                </div>
            </div>

            <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                    A expressão popular brasileira <strong>"nhen nhen nhen"</strong> (usada para indicar reclamação ou fala repetitiva) 
                    vem do verbo Tupi <strong className="text-green-700 text-xl">nhe'eng</strong> que significa <strong>"falar"</strong>.
                </p>
                
                <div className="bg-green-50 rounded-xl p-6 mt-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4">🌟 Característica especial do Tupi:</h3>
                    <p className="text-gray-700 mb-4">
                        Em Tupi Antigo, os verbos são flexionados <strong>no início</strong> (à esquerda), 
                        não no final como em português.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Portuguese Example */}
                        <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                            <h4 className="font-bold text-red-800 mb-2">PT Português</h4>
                            <p className="text-sm text-gray-600 mb-3">Flexão à direita (sufixos):</p>
                            <div className="space-y-2 font-mono text-lg">
                                <div className="bg-white px-3 py-2 rounded shadow-sm">
                                    fal-<span className="bg-red-200 rounded px-1">o</span>
                                </div>
                                <div className="bg-white px-3 py-2 rounded shadow-sm">
                                    fal-<span className="bg-red-200 rounded px-1">as</span>
                                </div>
                                <div className="bg-white px-3 py-2 rounded shadow-sm">
                                    fal-<span className="bg-red-200 rounded px-1">a</span>
                                </div>
                            </div>
                        </div>

                        {/* Tupi Example */}
                        <div className="bg-green-100 rounded-xl p-4 border border-green-200">
                            <h4 className="font-bold text-green-800 mb-2">🌿 Tupi Antigo</h4>
                            <p className="text-sm text-gray-600 mb-3">Flexão à esquerda (prefixos):</p>
                            <div className="space-y-2 font-mono text-lg">
                                <div className="bg-white px-3 py-2 rounded shadow-sm">
                                    <span className="bg-green-200 rounded px-1">a-</span>nhe'eng
                                </div>
                                <div className="bg-white px-3 py-2 rounded shadow-sm">
                                    <span className="bg-green-200 rounded px-1">ere-</span>nhe'eng
                                </div>
                                <div className="bg-white px-3 py-2 rounded shadow-sm">
                                    <span className="bg-green-200 rounded px-1">o-</span>nhe'eng
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Conjugação
                </button>
            </div>
        </div>
    );
};
