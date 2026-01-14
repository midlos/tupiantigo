
import React, { useState } from 'react';

interface SectionNosL1Props {
    onNext: () => void;
}

export const SectionNosL1: React.FC<SectionNosL1Props> = ({ onNext }) => {
    const [quizResult, setQuizResult] = useState<'correct' | 'incorrect' | null>(null);

    const checkAnswer = (answer: 'ore' | 'iande') => {
        if (answer === 'ore') {
            setQuizResult('correct');
        } else {
            setQuizResult('incorrect');
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">👥 Nós Inclusivo vs. Exclusivo</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Exclusive */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-2 border-red-300">
                    <div className="text-center mb-4">
                        <span className="text-5xl">🚫👤</span>
                        <h3 className="text-2xl font-bold text-red-700 mt-2">ORÉ (Exclusivo)</h3>
                        <p className="text-red-600">Exclui o ouvinte</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                        <p className="font-semibold text-gray-700 mb-2">Exemplo:</p>
                        <p className="text-lg italic">"Nós somos portugueses"</p>
                        <p className="text-sm text-gray-500 mt-2">
                            (falando para índios - eles não são portugueses, não estão incluídos)
                        </p>
                        <div className="mt-3 bg-red-50 rounded p-3">
                            <p className="text-red-700 font-bold">oré oro-nhe'eng</p>
                            <p className="text-sm">nós falamos (mas você não)</p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">EU</div>
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">+</div>
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold line-through">TU</div>
                        </div>
                    </div>
                </div>

                {/* Inclusive */}
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border-2 border-teal-300">
                    <div className="text-center mb-4">
                        <span className="text-5xl">✅👤</span>
                        <h3 className="text-2xl font-bold text-teal-700 mt-2">ÎANDÉ (Inclusivo)</h3>
                        <p className="text-teal-600">Inclui o ouvinte</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                        <p className="font-semibold text-gray-700 mb-2">Exemplo:</p>
                        <p className="text-lg italic">"Nós morreremos um dia"</p>
                        <p className="text-sm text-gray-500 mt-2">
                            (todos, incluindo quem ouve, vão morrer)
                        </p>
                        <div className="mt-3 bg-teal-50 rounded p-3">
                            <p className="text-teal-700 font-bold">îandé îa-nhe'eng</p>
                            <p className="text-sm">nós falamos (você também)</p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">EU</div>
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">+</div>
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">TU</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ASÉ section */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-300 mb-6">
                <div className="text-center mb-4">
                    <span className="text-4xl">👥👤👤</span>
                    <h3 className="text-2xl font-bold text-purple-700 mt-2">ASÉ (Impessoal)</h3>
                    <p className="text-purple-600">"A gente" / sujeito indeterminado</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                    <p className="text-lg text-center">Equivale a "a gente" ou ao "se" impessoal:</p>
                    <p className="text-center text-gray-600 mt-2">"Bebe-se aqui" / "Come-se bem ali"</p>
                    <div className="mt-3 bg-purple-50 rounded p-3 text-center">
                        <p className="text-purple-700 font-bold">asé o-nhe'eng</p>
                        <p className="text-sm">a gente fala / fala-se</p>
                    </div>
                </div>
            </div>

            {/* Interactive Quiz */}
            <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-300">
                <h3 className="text-xl font-bold text-amber-800 mb-4">🎯 Teste seu conhecimento:</h3>
                <div>
                    <p className="text-lg mb-4">Você está falando para um grupo de índios: "Nós viemos de Portugal". Qual forma de "nós" usar?</p>
                    <div className="grid grid-cols-2 gap-4">
                        <button 
                            onClick={() => checkAnswer('ore')} 
                            className={`rounded-xl p-4 border-2 transition-all ${
                                quizResult === 'correct' 
                                    ? 'bg-green-50 border-green-500' 
                                    : 'bg-white border-gray-300 hover:border-amber-500'
                            }`}
                        >
                            <span className="text-2xl font-bold text-green-700 block">ORÉ</span>
                            <span className="text-sm text-gray-600">Exclusivo</span>
                        </button>
                        <button 
                            onClick={() => checkAnswer('iande')} 
                            className={`rounded-xl p-4 border-2 transition-all ${
                                quizResult === 'incorrect' 
                                    ? 'bg-red-50 border-red-500' 
                                    : 'bg-white border-gray-300 hover:border-amber-500'
                            }`}
                        >
                            <span className="text-2xl font-bold text-green-700 block">ÎANDÉ</span>
                            <span className="text-sm text-gray-600">Inclusivo</span>
                        </button>
                    </div>
                    {quizResult && (
                        <div className="mt-4">
                            {quizResult === 'correct' ? (
                                <div className="bg-green-100 text-green-800 p-4 rounded-xl bounce-success">
                                    <span className="text-2xl">✅</span> Correto! ORÉ (exclusivo) é a resposta certa, pois os índios não vieram de Portugal.
                                </div>
                            ) : (
                                <div className="bg-red-100 text-red-800 p-4 rounded-xl shake">
                                    <span className="text-2xl">❌</span> Quase! A resposta certa é ORÉ (exclusivo), pois os índios não vieram de Portugal - eles não estão incluídos nesse "nós".
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Exercício 1
                </button>
            </div>
        </div>
    );
};
