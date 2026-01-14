
import React from 'react';

interface SectionIntroL10Props {
    onNext: () => void;
}

export const SectionIntroL10: React.FC<SectionIntroL10Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <div className="text-center mb-8">
                <div className="inline-block bg-indigo-100 rounded-full p-6 mb-4">
                    <span className="text-6xl">⏳</span>
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">Ibirapuera, Anhanguera, Capoeira...</h2>
                <p className="text-xl text-gray-600 italic mb-6">Que significa <strong>-uera</strong>?</p>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 mb-8 border-l-4 border-indigo-500">
                <div className="flex items-center gap-4">
                    <div className="text-4xl pulse-icon">👻</div>
                    <div>
                        <p className="text-xl font-bold text-indigo-800">O Tempo Nominal</p>
                        <p className="text-lg text-gray-700">Em Tupi, as coisas (substantivos) também viajam no tempo!</p>
                    </div>
                </div>
            </div>

            <div className="prose max-w-none text-gray-700 mb-8 space-y-6">
                <p className="text-lg">
                    Você sabia que em Tupi podemos dizer "ex-árvore" ou "futura casa" apenas mudando o final da palavra?
                </p>
                <p className="text-lg">
                    Isso explica o nome de muitos lugares famosos no Brasil, como <strong>Ibirapuera</strong> ("árvore que já foi", ou seja, árvore caída ou velha) e <strong>Anhanguera</strong> ("diabo velho").
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200 text-center">
                        <span className="text-4xl block mb-2">🌱</span>
                        <h3 className="font-bold text-green-800 text-lg">Futuro (-RAMA)</h3>
                        <p className="text-sm text-gray-600">O que vai ser. Promissor.</p>
                        <p className="font-mono font-bold text-green-700 mt-2">ybyrá-rama</p>
                        <p className="text-xs italic">(futura árvore / muda)</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl border border-gray-300 text-center">
                        <span className="text-4xl block mb-2">💀</span>
                        <h3 className="font-bold text-gray-800 text-lg">Passado (-PÛERA)</h3>
                        <p className="text-sm text-gray-600">O que já foi. Velho. Morto.</p>
                        <p className="font-mono font-bold text-gray-700 mt-2">ybyrá-pûera</p>
                        <p className="text-xs italic">(árvore caída / madeira velha)</p>
                    </div>
                </div>
            </div>

            {/* Grammar Explanation Bubble */}
            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 mb-8">
                <div className="flex items-start gap-4">
                    <span className="text-3xl">🧠</span>
                    <div>
                        <h3 className="font-bold text-yellow-800 text-lg mb-2">Por que termina em -A?</h3>
                        <p className="text-gray-700 mb-4">
                            Na verdade, <strong>RAM</strong> e <strong>PÛER</strong> são adjetivos que significam "futuro/que vai ser" e "passado/velho".
                            <br/>
                            Como eles formam uma composição com o substantivo, eles recebem o sufixo <strong>-A</strong> no final.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="bg-white p-3 rounded shadow-sm border border-yellow-100">
                                <p className="font-bold text-green-700 mb-1">RAM (futuro)</p>
                                <p className="text-gray-500">+ sufixo -A</p>
                                <p className="font-mono mt-1 text-lg">= <span className="text-green-600 font-bold">-RAM-A</span></p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm border border-yellow-100">
                                <p className="font-bold text-red-700 mb-1">PÛER (passado)</p>
                                <p className="text-gray-500">+ sufixo -A</p>
                                <p className="font-mono mt-1 text-lg">= <span className="text-red-600 font-bold">-PÛER-A</span></p>
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
                    Continuar → Regras do Tempo
                </button>
            </div>
        </div>
    );
};
