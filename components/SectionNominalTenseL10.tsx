
import React, { useState } from 'react';

interface SectionNominalTenseL10Props {
    onNext: () => void;
}

export const SectionNominalTenseL10: React.FC<SectionNominalTenseL10Props> = ({ onNext }) => {
    const [nounType, setNounType] = useState<'oxytone' | 'paroxytone'>('oxytone');

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">⏳ Como formar o Tempo</h2>
            
            <p className="text-lg text-gray-700 mb-6 text-center">
                A forma como adicionamos o tempo depende da "força" da palavra (acentuação).
            </p>

            {/* Selector */}
            <div className="flex justify-center gap-4 mb-8">
                <button 
                    onClick={() => setNounType('oxytone')}
                    className={`px-6 py-3 rounded-full font-bold transition-all ${
                        nounType === 'oxytone' 
                        ? 'bg-blue-600 text-white shadow-lg scale-105' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    Palavras Fortes no Fim<br/><span className="text-xs font-normal">(Oxítonas)</span>
                </button>
                <button 
                    onClick={() => setNounType('paroxytone')}
                    className={`px-6 py-3 rounded-full font-bold transition-all ${
                        nounType === 'paroxytone' 
                        ? 'bg-purple-600 text-white shadow-lg scale-105' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    Palavras Fortes no Meio<br/><span className="text-xs font-normal">(Paroxítonas)</span>
                </button>
            </div>

            {/* Content Display */}
            <div className="min-h-[300px]">
                {nounType === 'oxytone' ? (
                    <div className="slide-in">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Regra das Oxítonas</h3>
                            <p className="text-gray-700">
                                Se a palavra tem a última sílaba forte (como <strong>ybyrá</strong>, <strong>só</strong>), usamos as formas completas:
                            </p>
                            <div className="flex justify-center gap-8 mt-4 font-mono font-bold text-lg">
                                <span className="text-green-600">-RAMA</span>
                                <span className="text-gray-400">|</span>
                                <span className="text-red-600">-PÛERA</span>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 flex items-center justify-between">
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase font-bold">Futuro</span>
                                    <p className="text-lg">ybyrá + rama = <strong className="text-green-700">ybyrá-rama</strong></p>
                                    <p className="text-sm text-gray-600">a futura árvore</p>
                                </div>
                                <span className="text-4xl">🌱</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500 flex items-center justify-between">
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase font-bold">Passado</span>
                                    <p className="text-lg">ybyrá + pûera = <strong className="text-red-700">ybyrá-pûera</strong></p>
                                    <p className="text-sm text-gray-600">a ex-árvore / tronco caído</p>
                                </div>
                                <span className="text-4xl">🍂</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="slide-in">
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 mb-6">
                            <h3 className="text-xl font-bold text-purple-800 mb-2">Regra das Paroxítonas</h3>
                            <p className="text-gray-700">
                                Se a palavra é paroxítona (como <strong>oka</strong>, <strong>taba</strong>), ela perde o <strong>-a</strong> final e muda o sufixo:
                            </p>
                            <div className="flex justify-center gap-8 mt-4 font-mono font-bold text-lg">
                                <span className="text-green-600">-ÛAMA</span>
                                <span className="text-gray-400">|</span>
                                <span className="text-red-600">-ÛERA</span>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 flex items-center justify-between">
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase font-bold">Futuro</span>
                                    <p className="text-lg">oka + rama = <strong className="text-green-700">ok-ûama</strong></p>
                                    <p className="text-sm text-gray-600">a futura casa</p>
                                </div>
                                <span className="text-4xl">🏗️</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500 flex items-center justify-between">
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase font-bold">Passado</span>
                                    <p className="text-lg">anhanga + pûera = <strong className="text-red-700">anhang-ûera</strong></p>
                                    <p className="text-sm text-gray-600">o diabo velho / ex-diabo</p>
                                </div>
                                <span className="text-4xl">👹</span>
                            </div>
                        </div>

                        <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm">
                            <p className="font-bold text-yellow-800 mb-1">⚠️ Exceção Especial (Peasaba)</p>
                            <p className="text-gray-700">
                                Palavras terminadas em <strong>-aba</strong> (como <em>peasaba</em> - porto) perdem o <strong>b</strong> e ganham um <strong>g</strong> antes do ditongo.
                                <br/>
                                <span className="font-mono text-black mt-1 block bg-white/50 p-1 rounded w-fit">peasa<span className="text-red-500 line-through">b</span>a + uera → peasa-<strong className="text-purple-600">g</strong>-ûera (Piaçaguera)</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Exercício 14
                </button>
            </div>
        </div>
    );
};
