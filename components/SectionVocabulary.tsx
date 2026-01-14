
import React, { useState, useEffect } from 'react';
import { VocabItem } from '../types';

interface SectionVocabularyProps {
    onNext: () => void;
    items: VocabItem[];
    matchPairs: { tupi: string; pt: string }[];
}

// Map colors to exact Tailwind classes
const COLOR_MAP: Record<string, { front: string; back: string; icon: string; text: string; backText: string; literal: string }> = {
    amber: { front: 'bg-gradient-to-br from-amber-50 to-amber-100 hover:border-amber-400', back: '', icon: 'text-amber-800', text: 'text-gray-600', backText: 'text-amber-800', literal: 'text-amber-700' },
    green: { front: 'bg-gradient-to-br from-green-50 to-green-100 hover:border-green-400', back: '', icon: 'text-green-800', text: 'text-gray-600', backText: 'text-green-800', literal: 'text-green-700' },
    yellow: { front: 'bg-gradient-to-br from-yellow-50 to-yellow-100 hover:border-yellow-400', back: '', icon: 'text-yellow-800', text: 'text-gray-600', backText: 'text-yellow-800', literal: 'text-yellow-700' },
    blue: { front: 'bg-gradient-to-br from-blue-50 to-blue-100 hover:border-blue-400', back: '', icon: 'text-blue-800', text: 'text-gray-600', backText: 'text-blue-800', literal: 'text-blue-700' },
    lime: { front: 'bg-gradient-to-br from-lime-50 to-lime-100 hover:border-lime-400', back: '', icon: 'text-lime-800', text: 'text-gray-600', backText: 'text-lime-800', literal: 'text-lime-700' },
    red: { front: 'bg-gradient-to-br from-red-50 to-red-100 hover:border-red-400', back: '', icon: 'text-red-800', text: 'text-gray-600', backText: 'text-red-800', literal: 'text-red-700' },
    purple: { front: 'bg-gradient-to-br from-purple-50 to-purple-100 hover:border-purple-400', back: '', icon: 'text-purple-800', text: 'text-gray-600', backText: 'text-purple-800', literal: 'text-purple-700' },
    gray: { front: 'bg-gradient-to-br from-gray-50 to-gray-100 hover:border-gray-400', back: '', icon: 'text-gray-800', text: 'text-gray-600', backText: 'text-gray-800', literal: 'text-gray-700' },
    cyan: { front: 'bg-gradient-to-br from-cyan-50 to-cyan-100 hover:border-cyan-400', back: '', icon: 'text-cyan-800', text: 'text-gray-600', backText: 'text-cyan-800', literal: 'text-cyan-700' },
    teal: { front: 'bg-gradient-to-br from-teal-50 to-teal-100 hover:border-teal-400', back: '', icon: 'text-teal-800', text: 'text-gray-600', backText: 'text-teal-800', literal: 'text-teal-700' },
    orange: { front: 'bg-gradient-to-br from-orange-50 to-orange-100 hover:border-orange-400', back: '', icon: 'text-orange-800', text: 'text-gray-600', backText: 'text-orange-800', literal: 'text-orange-700' },
};

export const SectionVocabulary: React.FC<SectionVocabularyProps> = ({ onNext, items, matchPairs }) => {
    // Flashcard State
    const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

    const toggleCard = (id: string) => {
        setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
    };

    // Matching Game State
    const [selectedTupi, setSelectedTupi] = useState<string | null>(null);
    const [selectedPt, setSelectedPt] = useState<string | null>(null);
    const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
    const [matchFeedback, setMatchFeedback] = useState<'success' | 'error' | null>(null);

    // Reset game state if matchPairs change
    useEffect(() => {
        setMatchedPairs([]);
        setSelectedTupi(null);
        setSelectedPt(null);
        setMatchFeedback(null);
    }, [matchPairs]);

    const handleMatchSelect = (type: 'tupi' | 'pt', value: string) => {
        if (matchedPairs.includes(value)) return;
        
        setMatchFeedback(null); // clear previous feedback

        if (type === 'tupi') {
            setSelectedTupi(value);
            if (selectedPt) checkMatch(value, selectedPt);
        } else {
            setSelectedPt(value);
            if (selectedTupi) checkMatch(selectedTupi, value);
        }
    };

    const checkMatch = (tupi: string, pt: string) => {
        const pair = matchPairs.find(p => p.tupi === tupi && p.pt === pt);
        
        if (pair) {
            setMatchedPairs(prev => [...prev, tupi, pt]);
            setMatchFeedback('success');
            setSelectedTupi(null);
            setSelectedPt(null);
        } else {
            setMatchFeedback('error');
            setTimeout(() => {
                setSelectedTupi(null);
                setSelectedPt(null);
                setMatchFeedback(null);
            }, 500);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">📚 Vocabulário Mnemônico</h2>
            <p className="text-center text-gray-600 mb-6">Clique nos cards para ver a origem das palavras!</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" id="vocabCards">
                {items.map((item) => {
                    const colors = COLOR_MAP[item.color] || COLOR_MAP['amber'];
                    const isFlipped = flippedCards[item.id];

                    return (
                        <div 
                            key={item.id}
                            className={`vocab-card rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent ${colors.front}`}
                            onClick={() => toggleCard(item.id)}
                        >
                            {/* Front */}
                            <div className={isFlipped ? 'hidden' : 'card-front'}>
                                <h3 className={`text-xl font-bold ${colors.icon}`}>{item.tupi}</h3>
                                <p className="text-gray-600">{item.pt}</p>
                                <span className="text-4xl block mt-2">{item.icon}</span>
                            </div>

                            {/* Back */}
                            <div className={!isFlipped ? 'hidden' : 'card-back'}>
                                <p className="font-bold text-green-700">{item.breakdown}</p>
                                {item.explanation.map((line, idx) => (
                                    <p key={idx} className="text-sm mt-2">{line}</p>
                                ))}
                                {item.literal && (
                                    <p className={`mt-2 font-semibold ${colors.literal}`}>{item.literal}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Matching Game */}
            {matchPairs.length > 0 && (
                <div className="mt-8 bg-amber-50 rounded-2xl p-6 border-2 border-amber-300">
                    <h3 className="text-xl font-bold text-amber-800 mb-4">🎮 Jogo Rápido: Combine!</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <p className="font-semibold text-gray-700 mb-2">Tupi:</p>
                            {matchPairs.map((pair) => (
                                <button
                                    key={pair.tupi}
                                    onClick={() => handleMatchSelect('tupi', pair.tupi)}
                                    disabled={matchedPairs.includes(pair.tupi)}
                                    className={`w-full text-left px-4 py-2 rounded-lg border-2 transition-all ${
                                        matchedPairs.includes(pair.tupi)
                                            ? 'bg-white opacity-50 cursor-not-allowed border-gray-200'
                                            : selectedTupi === pair.tupi
                                                ? matchFeedback === 'error' ? 'bg-red-100 border-red-500 shake' : 'bg-amber-100 border-amber-500'
                                                : 'bg-white border-gray-200 hover:border-amber-400'
                                    }`}
                                >
                                    {pair.tupi}
                                </button>
                            ))}
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-gray-700 mb-2">Português:</p>
                            {matchPairs.map((pair) => (
                                <button
                                    key={pair.pt}
                                    onClick={() => handleMatchSelect('pt', pair.pt)}
                                    disabled={matchedPairs.includes(pair.pt)}
                                    className={`w-full text-left px-4 py-2 rounded-lg border-2 transition-all ${
                                        matchedPairs.includes(pair.pt)
                                            ? 'bg-white opacity-50 cursor-not-allowed border-gray-200'
                                            : selectedPt === pair.pt
                                                ? matchFeedback === 'error' ? 'bg-red-100 border-red-500 shake' : 'bg-green-100 border-green-500'
                                                : 'bg-white border-gray-200 hover:border-green-400'
                                    }`}
                                >
                                    {pair.pt}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-4 text-center min-h-[60px]">
                        {matchFeedback === 'success' && (
                            <div className="inline-block bg-green-100 text-green-800 p-3 rounded-lg bounce-success">
                                ✅ Correto!
                            </div>
                        )}
                        {matchFeedback === 'error' && (
                            <div className="inline-block bg-red-100 text-red-800 p-3 rounded-lg shake">
                                ❌ Tente novamente!
                            </div>
                        )}
                        {matchedPairs.length === matchPairs.length * 2 && (
                            <div className="bg-green-100 text-green-800 p-3 rounded-lg">
                                🎉 Parabéns! Você combinou todas as palavras!
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Próxima Seção
                </button>
            </div>
        </div>
    );
};
