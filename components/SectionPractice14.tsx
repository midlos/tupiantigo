
import React, { useState } from 'react';
import { Lesson10SidebarEx14 } from './Lesson10SidebarEx14';

interface SectionPractice14Props {
    onNext?: () => void;
}

export const SectionPractice14: React.FC<SectionPractice14Props> = ({ onNext }) => {
    const pairs = [
        { id: '1', name: 'Ibirapuera', meaning: 'Árvore caída / velha' },
        { id: '2', name: 'Tabatinguera', meaning: 'Barreira branca esgotada' },
        { id: '3', name: 'Anhanguera', meaning: 'Diabo velho' },
        { id: '4', name: 'Piaçaguera', meaning: 'Porto extinto' },
        { id: '5', name: 'Tapera', meaning: 'Aldeia extinta' },
        { id: '6', name: 'Capoeira', meaning: 'Mata extinta' },
        { id: '7', name: 'Quirera', meaning: 'O que foi grão' },
        { id: '8', name: 'Pariquera', meaning: 'Barragem extinta' },
        { id: '9', name: 'Tipuera', meaning: 'Rio extinto' },
        { id: '10', name: 'Canguera', meaning: 'Ossada' },
    ];

    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    const [selectedRight, setSelectedRight] = useState<string | null>(null);
    const [matched, setMatched] = useState<string[]>([]);
    const [shuffledMeanings] = useState(() => [...pairs].sort(() => Math.random() - 0.5));

    const handleLeftClick = (id: string) => {
        if (matched.includes(id)) return;
        setSelectedLeft(id);
        if (selectedRight) {
            checkMatch(id, selectedRight);
        }
    };

    const handleRightClick = (id: string) => {
        if (matched.includes(id)) return;
        setSelectedRight(id);
        if (selectedLeft) {
            checkMatch(selectedLeft, id);
        }
    };

    const checkMatch = (leftId: string, rightId: string) => {
        if (leftId === rightId) {
            setMatched([...matched, leftId]);
            setSelectedLeft(null);
            setSelectedRight(null);
        } else {
            // Error feedback could go here
            setTimeout(() => {
                setSelectedLeft(null);
                setSelectedRight(null);
            }, 300);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🧩 Exercício 14: Relacione</h2>
            
            <p className="text-center text-gray-600 mb-8">
                Descubra a origem e o significado dos nomes abaixo relacionando as colunas.
            </p>

            <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
                {/* Sidebar */}
                <div className="order-2 lg:order-1">
                    <div className="hidden lg:block sticky top-24">
                        <Lesson10SidebarEx14 />
                    </div>
                    <div className="lg:hidden mb-4">
                        <details className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
                            <summary className="font-bold text-indigo-800 cursor-pointer">📚 Ver Vocabulário de Apoio</summary>
                            <div className="mt-4">
                                <Lesson10SidebarEx14 />
                            </div>
                        </details>
                    </div>
                </div>

                {/* Matching Game */}
                <div className="order-1 lg:order-2">
                    <div className="grid grid-cols-2 gap-4 md:gap-8">
                        {/* Left Column (Names) */}
                        <div className="space-y-3">
                            <h3 className="font-bold text-center text-gray-500 mb-2">Nome</h3>
                            {pairs.map((pair) => (
                                <button
                                    key={pair.id}
                                    onClick={() => handleLeftClick(pair.id)}
                                    disabled={matched.includes(pair.id)}
                                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                                        matched.includes(pair.id)
                                            ? 'bg-green-100 border-green-300 text-green-800 opacity-50'
                                            : selectedLeft === pair.id
                                                ? 'bg-indigo-100 border-indigo-500 text-indigo-900 shadow-md transform scale-105'
                                                : 'bg-white border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                                    }`}
                                >
                                    <span className="font-bold">{pair.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Right Column (Meanings) */}
                        <div className="space-y-3">
                            <h3 className="font-bold text-center text-gray-500 mb-2">Significado</h3>
                            {shuffledMeanings.map((pair) => (
                                <button
                                    key={pair.id}
                                    onClick={() => handleRightClick(pair.id)}
                                    disabled={matched.includes(pair.id)}
                                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                                        matched.includes(pair.id)
                                            ? 'bg-green-100 border-green-300 text-green-800 opacity-50'
                                            : selectedRight === pair.id
                                                ? 'bg-indigo-100 border-indigo-500 text-indigo-900 shadow-md transform scale-105'
                                                : 'bg-white border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                                    }`}
                                >
                                    {pair.meaning}
                                </button>
                            ))}
                        </div>
                    </div>

                    {matched.length === pairs.length && (
                        <div className="mt-8 bg-green-100 text-green-800 p-6 rounded-2xl text-center bounce-success border border-green-300">
                            <span className="text-4xl block mb-2">🎉</span>
                            <h3 className="text-2xl font-bold">Parabéns!</h3>
                            <p>Você desvendou todos os significados!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
