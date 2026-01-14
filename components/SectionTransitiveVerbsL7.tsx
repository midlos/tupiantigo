
import React from 'react';

interface SectionTransitiveVerbsL7Props {
    onNext: () => void;
}

export const SectionTransitiveVerbsL7: React.FC<SectionTransitiveVerbsL7Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🔄 Verbos Transitivos</h2>
            
            <p className="text-lg text-gray-700 mb-8 text-center">
                Todo verbo transitivo em tupi pode levar o objeto a <strong>três posições diferentes</strong>:
            </p>

            <div className="space-y-8">
                
                {/* 1. Anteposto */}
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="font-bold text-blue-800 text-lg mb-3 border-b border-blue-200 pb-2 flex items-center gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs">A</span>
                        Anteposto ao Verbo
                    </h3>
                    <p className="mb-4 text-gray-700">
                        O objeto vem <strong>antes</strong> do verbo. É a colocação mais comum em Tupi.
                    </p>
                    <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
                        <p className="font-mono text-xl mb-1">
                            <span className="text-blue-600 font-bold">Pindá</span> a-î-monhang.
                        </p>
                        <p className="text-gray-600 italic">Anzol faço.</p>
                        <p className="text-xs text-gray-400 mt-2">Lit: O anzol, faço-o.</p>
                    </div>
                </div>

                {/* 2. Incorporado */}
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h3 className="font-bold text-green-800 text-lg mb-3 border-b border-green-200 pb-2 flex items-center gap-2">
                        <span className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-xs">B</span>
                        Incorporado no Verbo
                    </h3>
                    <p className="mb-4 text-gray-700">
                        O objeto fica <strong>entre</strong> o prefixo (a-, ere-, etc.) e o tema verbal. Isso é uma forma de <strong>composição</strong>.
                        <br/>
                        <span className="text-sm text-green-600 italic">(Aqui se aplicam as regras fonéticas da Lição 3!)</span>
                    </p>
                    <div className="bg-white p-4 rounded shadow-sm border-l-4 border-green-500">
                        <p className="font-mono text-xl mb-1">
                            A-<span className="text-green-600 font-bold">pindá</span>-monhang.
                        </p>
                        <p className="text-gray-600 italic">Faço anzol.</p>
                    </div>
                </div>

                {/* 3. Posposto */}
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <h3 className="font-bold text-orange-800 text-lg mb-3 border-b border-orange-200 pb-2 flex items-center gap-2">
                        <span className="bg-orange-200 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-xs">C</span>
                        Posposto ao Verbo
                    </h3>
                    <p className="mb-4 text-gray-700">
                        O objeto vem <strong>depois</strong> do verbo.
                    </p>
                    <div className="bg-white p-4 rounded shadow-sm border-l-4 border-orange-500">
                        <p className="font-mono text-xl mb-1">
                            A-î-monhang <span className="text-orange-600 font-bold">pindá</span>.
                        </p>
                        <p className="text-gray-600 italic">Faço anzol.</p>
                    </div>
                    
                    <div className="mt-4 bg-orange-100 p-3 rounded-lg text-sm text-orange-900">
                        <p className="mb-2"><strong>⚠️ Atenção:</strong> Se o substantivo objeto não ficar incorporado no verbo, deve-se usar o pronome objetivo da 3ª pessoa <strong>-Î-</strong>, mesmo que o substantivo esteja presente na frase.</p>
                        <p className="font-mono text-base bg-white/50 p-2 rounded">
                            <span className="text-purple-700 font-bold">A-î-monhang</span> <span className="text-orange-700 font-bold">pindá</span> = <span className="text-purple-700 font-bold">Faço-o</span> <span className="text-orange-700 font-bold">o anzol</span>. <span className="text-gray-600 font-normal italic font-sans text-sm ml-1">(Objeto pleonástico)</span>
                        </p>
                    </div>
                </div>

            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → O Pronome Objetivo
                </button>
            </div>
        </div>
    );
};
