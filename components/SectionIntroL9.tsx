
import React from 'react';

interface SectionIntroL9Props {
    onNext: () => void;
}

export const SectionIntroL9: React.FC<SectionIntroL9Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <div className="text-center mb-8">
                <div className="inline-block bg-orange-100 rounded-full p-6 mb-4">
                    <span className="text-6xl">🔥</span>
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">"A mulher sapeca o porco..."</h2>
                <p className="text-xl text-gray-600 italic mb-6">Donde vem <strong>sapecar</strong>?</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 mb-8 border-l-4 border-orange-500">
                <div className="flex items-center gap-4">
                    <div className="text-4xl pulse-icon">🐖</div>
                    <div>
                        <p className="text-xl font-bold text-orange-800">APEK</p>
                        <p className="text-lg text-gray-700">Verbo tupi que significa <em>sapecar, chamuscar, queimar ligeiramente</em>.</p>
                    </div>
                </div>
            </div>

            <div className="prose max-w-none text-gray-700 mb-8 space-y-6">
                <p className="text-lg">
                    Alguns verbos em Tupi são um pouco "exigentes". Eles gostam de receber um enfeite especial quando são conjugados.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center">
                    <p className="text-lg font-semibold text-blue-900 mb-2">
                        Observe a diferença:
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-3 rounded shadow-sm opacity-70">
                            <p className="text-sm text-gray-500">Verbo Comum</p>
                            <p className="font-mono text-lg">a-nhe'eng</p>
                            <p className="text-xs">eu falo</p>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm border-2 border-blue-400 transform scale-105">
                            <p className="text-sm text-blue-600 font-bold">Verbo Pluriforme</p>
                            <p className="font-mono text-lg">a-<span className="text-red-600 font-extrabold">s</span>-apek</p>
                            <p className="text-xs">eu sapeco</p>
                        </div>
                    </div>
                </div>
                <p className="text-lg">
                    Nesta lição, vamos aprender sobre os <strong>Verbos Pluriformes</strong> e esse misterioso <strong>-s-</strong> que aparece neles!
                </p>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Os Verbos Pluriformes
                </button>
            </div>
        </div>
    );
};
