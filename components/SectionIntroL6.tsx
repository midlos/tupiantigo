
import React from 'react';

interface SectionIntroL6Props {
    onNext: () => void;
}

export const SectionIntroL6: React.FC<SectionIntroL6Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <div className="text-center mb-8">
                <div className="inline-block bg-purple-100 rounded-full p-6 mb-4">
                    <span className="text-6xl">🗺️</span>
                </div>
                <h2 className="text-3xl font-bold text-green-800">Taquarenduva, Mantiqueira, Itaipu...</h2>
                <p className="text-xl text-gray-600 mt-2">Pindamonhangaba, Pernambuco, Catanduva...</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-6 border-l-4 border-purple-500">
                <div className="flex items-center gap-4">
                    <div className="text-4xl pulse-icon">🔊</div>
                    <div>
                        <p className="text-xl font-bold text-purple-800">O que esses nomes têm em comum?</p>
                        <p className="text-lg text-gray-700">Eles sofreram <strong>nasalização</strong>.</p>
                    </div>
                </div>
            </div>

            <div className="prose max-w-none text-gray-700 mb-8 space-y-4">
                <p className="text-lg">
                    Depois de ler esta lição, você saberá exatamente por que dizemos <strong>Mantiqueira</strong> (e não <em>Matatiqueira</em>) ou <strong>Catanduva</strong> (e não <em>Catatuba</em>).
                </p>
                <p className="text-lg">
                    Existem regras fonéticas em Tupi Antigo que alteram consoantes quando elas encontram sons nasais.
                    Isso mudou a cara de centenas de topônimos brasileiros!
                </p>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Regras Fonéticas
                </button>
            </div>
        </div>
    );
};
