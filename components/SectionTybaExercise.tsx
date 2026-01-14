
import React, { useState } from 'react';
import { EXERCISE_12 } from '../constants';
import { Lesson8SidebarEx12 } from './Lesson8SidebarEx12';

interface SectionTybaExerciseProps {
    onNext?: () => void;
}

export const SectionTybaExercise: React.FC<SectionTybaExerciseProps> = ({ onNext }) => {
    const [inputs, setInputs] = useState<Record<number, string>>({});
    const [results, setResults] = useState<Record<number, boolean>>({});
    const [finalScore, setFinalScore] = useState<number | null>(null);

    const handleCheck = () => {
        const newResults: Record<number, boolean> = {};
        let correctCount = 0;

        EXERCISE_12.forEach(t => {
            const userVal = (inputs[t.id] || '').trim().toLowerCase().replace(/\s+/g, ' ');
            const isCorrect = t.answers.some(ans => 
                userVal === ans.toLowerCase() || 
                userVal === ans.toLowerCase().replace(/-/g, '') ||
                userVal === ans.toLowerCase().replace(/-/g, ' ')
            );
            newResults[t.id] = isCorrect;
            if (isCorrect) correctCount++;
        });

        setResults(newResults);
        setFinalScore(correctCount);
    };

    const handleShowAnswers = () => {
        const newInputs: Record<number, string> = {};
        EXERCISE_12.forEach(t => {
            newInputs[t.id] = t.answers[0];
        });
        setInputs(newInputs);
        setResults({}); // Reset visual validation state
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🗺️ O Substantivo TYBA</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                    <div className="text-4xl pulse-icon mt-1">🌿</div>
                    <div>
                        <p className="text-lg text-gray-700">
                            O substantivo <strong>TYBA</strong>, do tupi, forma muitos topônimos no Brasil. 
                            Ele significa “reunião’’, ‘‘ajuntamento’’, ‘‘multidão”.
                        </p>
                        <p className="text-lg text-gray-700 mt-2">
                            Tal coletivo realiza-se, em português, de várias maneiras:
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {['-tiba', '-tuba', '-nduva', '-ndiva', '-tuva', '-tiva'].map(suffix => (
                                <span key={suffix} className="bg-green-200 text-green-800 px-3 py-1 rounded-full font-bold font-mono">
                                    {suffix}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Exercício 12</h3>
            <p className="text-center text-gray-600 mb-8">
                Para conhecer topônimos com tal forma, complete as questões abaixo.
                <br/>
                <span className="text-sm italic">(Certos nomes de plantas são tomados do tupi sem alterações fonéticas.)</span>
            </p>

            <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
                
                {/* Sidebar (Desktop Sticky / Mobile Collapsible) */}
                <div className="order-2 lg:order-1">
                    <div className="hidden lg:block sticky top-24">
                        <Lesson8SidebarEx12 />
                    </div>
                    <div className="lg:hidden mb-4">
                        <details className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                            <summary className="font-bold text-amber-800 cursor-pointer">📚 Ver Vocabulário de Apoio</summary>
                            <div className="mt-4">
                                <Lesson8SidebarEx12 />
                            </div>
                        </details>
                    </div>
                </div>

                {/* Exercises */}
                <div className="space-y-6 order-1 lg:order-2 lg:flex-1">
                    {EXERCISE_12.map((exercise) => (
                        <div key={exercise.id} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100 hover:border-green-200 transition-colors">
                            <div className="flex items-start gap-4">
                                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                                    {exercise.id}
                                </span>
                                <div className="flex-1">
                                    <p className="text-lg font-semibold text-gray-800 mb-2">{exercise.question}</p>
                                    <div className="bg-yellow-50 text-yellow-800 px-3 py-1 rounded-lg text-sm inline-block mb-3 border border-yellow-100">
                                        💡 Dica: {exercise.tip}
                                    </div>
                                    <input 
                                        type="text" 
                                        value={inputs[exercise.id] || ''}
                                        onChange={(e) => {
                                            setInputs(prev => ({...prev, [exercise.id]: e.target.value}));
                                            if (results[exercise.id] !== undefined) {
                                                const newRes = {...results};
                                                delete newRes[exercise.id];
                                                setResults(newRes);
                                            }
                                        }}
                                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all shadow-inner ${
                                            results[exercise.id] === true ? 'border-green-500 bg-green-50' : 
                                            results[exercise.id] === false ? 'border-red-500 bg-red-50' : 
                                            'border-gray-300 focus:border-green-500 focus:bg-white'
                                        }`}
                                        placeholder="Nome da cidade/lugar..."
                                    />
                                    {results[exercise.id] === true && (
                                        <div className="mt-2 text-green-600 font-bold slide-in flex items-center gap-2">
                                            <span>✅</span> Correto!
                                        </div>
                                    )}
                                    {results[exercise.id] === false && (
                                        <div className="mt-2 text-red-600 font-semibold slide-in flex items-center gap-2">
                                            <span>❌</span> Resposta: {exercise.answers[0]}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center space-x-4">
                <button 
                    onClick={handleCheck}
                    className="bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:scale-105"
                >
                    ✓ Verificar Respostas
                </button>
                <button 
                    onClick={handleShowAnswers}
                    className="bg-gray-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-600 transition-all shadow-md"
                >
                    👁️ Ver Respostas
                </button>
            </div>

            {finalScore !== null && (
                <div className="mt-8 slide-in">
                    <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-8 text-center border-2 border-green-200 shadow-inner">
                        <span className="text-6xl block mb-4">🎉</span>
                        <h3 className="text-2xl font-bold text-green-800">Resultado Final</h3>
                        <div className="mt-4">
                            <span className="text-5xl font-extrabold text-green-700">{finalScore}</span>
                            <span className="text-2xl text-green-600 font-bold"> / {EXERCISE_12.length}</span>
                        </div>
                        <p className="text-gray-600 mt-2 font-medium">respostas corretas</p>
                    </div>
                </div>
            )}
            
            {onNext && (
                <div className="mt-8 text-center">
                    <button 
                        onClick={onNext}
                        className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                    >
                        Continuar → Próxima Lição
                    </button>
                </div>
            )}
        </div>
    );
};
