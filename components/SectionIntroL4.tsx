
import React from 'react';

interface SectionIntroL4Props {
    onNext: () => void;
}

export const SectionIntroL4: React.FC<SectionIntroL4Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <div className="text-center mb-8">
                <div className="inline-block bg-teal-100 rounded-full p-6 mb-4">
                    <span className="text-6xl">✨</span>
                </div>
                <h2 className="text-3xl font-bold text-green-800">Itaporanga, Iporanga, Botucatu, Ibicatu?<br/>Que significam poranga e catu?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Poranga Box */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200 hover:border-green-400 transition-all shadow-sm">
                    <div className="text-center">
                        <span className="text-4xl block mb-2">💎</span>
                        <h3 className="text-2xl font-bold text-green-800 mb-2">poranga</h3>
                        <p className="text-lg text-gray-700 font-semibold mb-3">= bonito, belo</p>
                        <div className="bg-white/60 rounded-lg p-3 text-sm text-gray-600">
                            <p className="italic">"Itaporanga" (Pedra Bonita)</p>
                            <p className="italic">"Iporanga" (Rio Bonito)</p>
                        </div>
                    </div>
                </div>

                {/* Catu Box */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200 hover:border-amber-400 transition-all shadow-sm">
                    <div className="text-center">
                        <span className="text-4xl block mb-2">👍</span>
                        <h3 className="text-2xl font-bold text-amber-800 mb-2">katu</h3>
                        <p className="text-lg text-gray-700 font-semibold mb-3">= bom</p>
                        <div className="bg-white/60 rounded-lg p-3 text-sm text-gray-600">
                            <p className="italic">"Botucatu" (Bons ares / Vento bom)</p>
                            <p className="italic">"Ibicatu" (Terra boa)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Adjetivos
                </button>
            </div>
        </div>
    );
};
