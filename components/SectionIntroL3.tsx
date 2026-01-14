
import React from 'react';

interface SectionIntroL3Props {
    onNext: () => void;
}

export const SectionIntroL3: React.FC<SectionIntroL3Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <div className="text-center mb-8">
                <div className="inline-block bg-teal-100 rounded-full p-6 mb-4">
                    <span className="text-6xl">🔢</span>
                </div>
                <h2 className="text-3xl font-bold text-green-800">Que significa etá em Guaratinguetá e Paquetá?</h2>
            </div>
            
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-6 mb-6 border-l-4 border-teal-500">
                <div className="flex items-center gap-4">
                    <div className="text-4xl pulse-icon">📦</div>
                    <div>
                        <p className="text-xl font-bold text-teal-800">O Indefinido ETÁ</p>
                        <p className="text-lg text-gray-700">Usado para indicar "muitos" ou "muitas".</p>
                    </div>
                </div>
            </div>

            <div className="prose max-w-none text-gray-700 mb-8">
                <p className="text-lg mb-4">
                    O indefinido <strong>ETÁ</strong> vem sempre posposto ao substantivo, formando uma composição com ele (ligado por hífen).
                </p>
                
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-6">
                    <h3 className="font-bold text-amber-800 text-lg mb-3">⚠️ Regra Importante:</h3>
                    <p>O sufixo <strong>-A</strong> final do substantivo, se existir, <strong>cai</strong> antes de juntar com <em>-etá</em>.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">paka (paca) + etá</p>
                        <p className="text-xl font-bold text-green-700">pak-etá</p>
                        <p className="text-gray-600 italic">Paquetá (muitas pacas)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">itá (pedra) + etá</p>
                        <p className="text-xl font-bold text-green-700">itá-etá</p>
                        <p className="text-gray-600 italic">Itaetá (muitas pedras)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">ygarusu (navio) + etá</p>
                        <p className="text-xl font-bold text-green-700">ygarusu-etá</p>
                        <p className="text-gray-600 italic">Igaraçu (muitos navios)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">peró (português) + etá</p>
                        <p className="text-xl font-bold text-green-700">peró-etá</p>
                        <p className="text-gray-600 italic">muitos portugueses</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Indefinido
                </button>
            </div>
        </div>
    );
};
