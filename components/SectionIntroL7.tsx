
import React from 'react';

interface SectionIntroL7Props {
    onNext: () => void;
}

export const SectionIntroL7: React.FC<SectionIntroL7Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <div className="text-center mb-8">
                <div className="inline-block bg-orange-100 rounded-full p-6 mb-4">
                    <span className="text-6xl">🤕</span>
                </div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">"Kunumi o-î-kutuk o pereba pinda'yba pupé pindamonhanga-pe."</h2>
                <p className="text-lg text-gray-700 italic">"O curumim cutucou sua pereba com a pindaíba em Pindamonhangaba (no lugar de fazer anzóis)..."</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-6 border-l-4 border-orange-500">
                <div className="flex items-center gap-4">
                    <div className="text-4xl pulse-icon">🎣</div>
                    <div>
                        <p className="text-xl font-bold text-orange-800">Verbos Transitivos</p>
                        <p className="text-lg text-gray-700">Como se diz "faço anzol" em Tupi?</p>
                    </div>
                </div>
            </div>

            <div className="prose max-w-none text-gray-700 mb-8 space-y-4">
                <p className="text-lg">
                    Nesta lição, vamos aprender como os <strong>verbos transitivos</strong> funcionam em Tupi.
                    Diferente do português, onde o objeto quase sempre vem depois do verbo, no Tupi ele pode aparecer em <strong>três posições diferentes</strong>!
                </p>
                <p className="text-lg">
                    Além disso, descobriremos o uso do pronome <strong>-î-</strong> (o, a, os, as) que marca a presença do objeto.
                </p>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Os Verbos Transitivos
                </button>
            </div>
        </div>
    );
};
