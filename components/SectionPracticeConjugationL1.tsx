
import React, { useState, useEffect } from 'react';
import { PRONOUNS, VERBS } from '../constants';
import { Verb } from '../types';

interface SectionPracticeConjugationL1Props {
    onNext: () => void;
}

export const SectionPracticeConjugationL1: React.FC<SectionPracticeConjugationL1Props> = ({ onNext }) => {
    const [currentVerb, setCurrentVerb] = useState<Verb>(VERBS[0]);
    const [inputs, setInputs] = useState<Record<string, string>>({});
    const [results, setResults] = useState<Record<string, boolean | null>>({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState<number | null>(null);

    // Reset state when verb changes
    useEffect(() => {
        setInputs({});
        setResults({});
        setShowResults(false);
        setScore(null);
    }, [currentVerb]);

    const handleInputChange = (pronounKey: string, value: string) => {
        setInputs(prev => ({ ...prev, [pronounKey]: value }));
    };

    const checkAnswers = () => {
        let correctCount = 0;
        const newResults: Record<string, boolean> = {};

        PRONOUNS.forEach(p => {
            let expectedVerb = currentVerb.root;
            // Special rule for 'ikó' vowel shift (applies to all prefixes as they end in vowel)
            if (currentVerb.root === 'ikó') {
                expectedVerb = 'îkó';
            }

            const expected = p.prefix + expectedVerb;
            const userAnswer = (inputs[p.key] || '').trim().toLowerCase();
            
            // Allow answer with or without hyphen
            const isCorrect = userAnswer === expected.toLowerCase() || userAnswer === expected.toLowerCase().replace('-', '');
            newResults[p.key] = isCorrect;
            if (isCorrect) correctCount++;
        });

        setResults(newResults);
        setScore(correctCount);
        setShowResults(true);
    };

    const showAnswers = () => {
        const newInputs: Record<string, string> = {};
        PRONOUNS.forEach(p => {
             let expectedVerb = currentVerb.root;
            if (currentVerb.root === 'ikó') {
                expectedVerb = 'îkó';
            }
            newInputs[p.key] = p.prefix + expectedVerb;
            // Also mark them as visually correct (green border)
            results[p.key] = true;
        });
        setInputs(newInputs);
        // Force update of visual state to green
        const allCorrect: Record<string, boolean> = {};
        PRONOUNS.forEach(p => allCorrect[p.key] = true);
        setResults(allCorrect);
        setShowResults(false);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-2 text-center">✏️ Exercício 1: Conjugação</h2>
            <p className="text-center text-gray-600 mb-6">Pratique conjugando os verbos. Selecione o verbo e complete as conjugações.</p>

            {/* Verb Selector */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {VERBS.map(verb => (
                    <button
                        key={verb.root}
                        onClick={() => setCurrentVerb(verb)}
                        className={`verb-btn px-4 py-2 rounded-full font-semibold transition-all ${
                            currentVerb.root === verb.root
                                ? 'bg-green-600 text-white active'
                                : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                    >
                        {verb.root.toUpperCase()} ({verb.meaning})
                    </button>
                ))}
            </div>

            {/* Current Verb Display */}
            <div className="text-center mb-6">
                <span className="text-5xl font-bold text-green-700" id="currentVerb">{currentVerb.root.toUpperCase()}</span>
                <span className="text-2xl text-gray-500" id="currentMeaning">({currentVerb.meaning})</span>
            </div>

            {/* Conjugation Practice Grid */}
            <div className="grid md:grid-cols-2 gap-4" id="conjugationPractice">
                {PRONOUNS.map((p) => (
                    <div key={p.key} className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="font-bold text-green-700">{p.label}</span>
                            <span className="text-gray-500">({p.meaning})</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={inputs[p.key] || ''}
                                onChange={(e) => handleInputChange(p.key, e.target.value)}
                                className={`flex-1 px-3 py-2 border-2 rounded-lg focus:outline-none transition-colors ${
                                    results[p.key] === true ? 'border-green-500' :
                                    results[p.key] === false ? 'border-red-500' :
                                    'border-gray-300 focus:border-green-500'
                                }`}
                                placeholder="Digite a conjugação..."
                            />
                        </div>
                        {results[p.key] !== undefined && (
                            <div className="mt-2">
                                {results[p.key] ? (
                                    <span className="text-green-600 font-semibold">✅ Correto!</span>
                                ) : (
                                    <span className="text-red-600 font-semibold">
                                        ❌ Resposta: {p.prefix}{currentVerb.root === 'ikó' ? 'îkó' : currentVerb.root}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6 text-center">
                <button 
                    onClick={checkAnswers}
                    className="bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-amber-600 transition-all"
                >
                    ✓ Verificar Respostas
                </button>
                <button 
                    onClick={showAnswers}
                    className="ml-4 bg-gray-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-600 transition-all"
                >
                    👁️ Ver Respostas
                </button>
            </div>

            {score !== null && (
                <div className="mt-6 text-center" id="conjugationScore">
                    <div className="inline-block bg-green-100 rounded-xl p-4">
                        <p className="text-2xl font-bold text-green-700">Você acertou {score}/{PRONOUNS.length}!</p>
                    </div>
                </div>
            )}

            {/* Special Note */}
            <div className="mt-6 bg-blue-50 rounded-xl p-4 border-l-4 border-blue-400">
                <p className="text-blue-800">
                    <strong>💡 Dica:</strong> A vogal <strong>i</strong> átona após outra vogal forma ditongo, tornando-se <strong>î</strong> (semivogal).<br />
                    Exemplo: o- + ikó → <strong>o-îkó</strong>
                </p>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Vocabulário
                </button>
            </div>
        </div>
    );
};
