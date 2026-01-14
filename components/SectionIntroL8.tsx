
import React from 'react';

interface SectionIntroL8Props {
    onNext: () => void;
}

export const SectionIntroL8: React.FC<SectionIntroL8Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <div className="text-center mb-8">
                <div className="inline-block bg-pink-100 rounded-full p-6 mb-4">
                    <span className="text-6xl">🤱</span>
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">Por que a indígena Iracema chamou seu filho de Moacyr?</h2>
                <p className="text-lg text-gray-700 italic mb-6">"O primeiro cearense..." - José de Alencar</p>
            </div>
            
            <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-6 mb-8 border-l-4 border-pink-500">
                <div className="flex items-center gap-4">
                    <div className="text-4xl pulse-icon">😭</div>
                    <div>
                        <p className="text-xl font-bold text-pink-800">MOACYR</p>
                        <p className="text-lg text-gray-700">De onde vem esse nome?</p>
                    </div>
                </div>
            </div>

            <div className="prose max-w-none text-gray-700 mb-8 space-y-6">
                <p className="text-lg">
                    Iracema, a "virgem dos lábios de mel", teve um filho com o guerreiro branco Martim. O parto foi muito doloroso e difícil.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">Etimologia:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong className="text-green-700">mo-</strong> = prefixo causativo (fazer com que)</li>
                        <li><strong className="text-red-700">asy</strong> = dor, sofrimento</li>
                        <li><strong className="text-blue-700">-r</strong> = sufixo de agente (aquele que)</li>
                    </ul>
                    <p className="mt-3 text-xl text-center font-bold text-pink-700">
                        mo-asy-r = "Aquele que faz sofrer"
                    </p>
                </div>
                <p className="text-lg">
                    Nesta lição, vamos aprender sobre esse poderoso prefixo <strong>MO-</strong>, que cria a <strong>Voz Causativa</strong>.
                </p>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → A Voz Causativa
                </button>
            </div>
        </div>
    );
};
