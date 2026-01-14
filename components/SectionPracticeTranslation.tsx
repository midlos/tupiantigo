
import React, { useState, useEffect } from 'react';
import { TranslationExercise } from '../types';

interface SectionPracticeTranslationProps {
    title: string;
    subtitle: string;
    exercises: TranslationExercise[];
    inputPlaceholder?: string;
    onNext?: () => void;
    sidebar?: React.ReactNode;
}

export const SectionPracticeTranslation: React.FC<SectionPracticeTranslationProps> = ({ 
    title, 
    subtitle, 
    exercises, 
    inputPlaceholder = "Digite em Tupi...",
    onNext,
    sidebar
}) => {
    const [inputs, setInputs] = useState<Record<number, string>>({});
    const [results, setResults] = useState<Record<number, boolean>>({});
    const [finalScore, setFinalScore] = useState<number | null>(null);

    // Reset state when exercises change (e.g. switching sections)
    useEffect(() => {
        setInputs({});
        setResults({});
        setFinalScore(null);
    }, [exercises]);

    const handleCheck = () => {
        const newResults: Record<number, boolean> = {};
        let correctCount = 0;

        exercises.forEach(t => {
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
        exercises.forEach(t => {
            newInputs[t.id] = t.answers[0];
        });
        setInputs(newInputs);
        setResults({}); // Reset visual validation state
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-2 text-center">{title}</h2>
            <p className="text-center text-gray-600 mb-6">{subtitle}</p>

            <div className={`grid gap-6 ${sidebar ? 'lg:grid-cols-[200px_1fr]' : ''}`}>
                
                {/* Sidebar (Desktop Sticky / Mobile Collapsible) */}
                {sidebar && (
                    <div className="order-2 lg:order-1">
                        <div className="hidden lg:block sticky top-24">
                            {sidebar}
                        </div>
                        <div className="lg:hidden mb-4">
                            <details className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                <summary className="font-bold text-amber-800 cursor-pointer">📚 Ver Vocabulário de Apoio</summary>
                                <div className="mt-4">
                                    {sidebar}
                                </div>
                            </details>
                        </div>
                    </div>
                )}

                {/* Exercises */}
                <div className={`space-y-6 order-1 lg:order-2 ${sidebar ? 'lg:flex-1' : ''}`}>
                    {exercises.map((exercise) => (
                        <div key={exercise.id} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                    {exercise.id}
                                </span>
                                <div className="flex-1">
                                    <p className="text-lg font-semibold text-gray-800 mb-2">{exercise.question}</p>
                                    <p className="text-sm text-gray-500 mb-3">Dica: {exercise.tip}</p>
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
                                        className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition-colors ${
                                            results[exercise.id] === true ? 'border-green-500 bg-green-50' : 
                                            results[exercise.id] === false ? 'border-red-500 bg-red-50' : 
                                            'border-gray-300 focus:border-green-500'
                                        }`}
                                        placeholder={inputPlaceholder}
                                    />
                                    {results[exercise.id] === true && (
                                        <div className="mt-2 text-green-600 font-semibold slide-in">✅ Correto!</div>
                                    )}
                                    {results[exercise.id] === false && (
                                        <div className="mt-2 text-red-600 font-semibold slide-in">
                                            ❌ Resposta correta: {exercise.answers[0]}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 text-center space-x-4">
                <button 
                    onClick={handleCheck}
                    className="bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-amber-600 transition-all shadow-md"
                >
                    ✓ Verificar Traduções
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
                    <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-8 text-center border-2 border-green-200">
                        <span className="text-6xl">🎉</span>
                        <h3 className="text-2xl font-bold text-green-800 mt-4">Parabéns!</h3>
                        <p className="text-lg text-gray-700 mt-2">Você completou o exercício!</p>
                        <div className="mt-4">
                            <span className="text-4xl font-bold text-green-700">{finalScore}/{exercises.length}</span>
                            <p className="text-gray-600">respostas corretas</p>
                        </div>
                    </div>
                </div>
            )}
            
            {onNext && (
                <div className="mt-8 text-center">
                    <button 
                        onClick={onNext}
                        className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                    >
                        Continuar → Próxima Seção
                    </button>
                </div>
            )}
        </div>
    );
};
