
import React from 'react';

interface SectionIntroL2Props {
    onNext: () => void;
}

export const SectionIntroL2: React.FC<SectionIntroL2Props> = ({ onNext }) => {
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
};
