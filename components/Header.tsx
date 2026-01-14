import React, { useState, useEffect, useRef } from 'react';
import { LESSONS } from '../constants';

interface HeaderProps {
    progress: number;
    currentLessonId: number;
    onLessonChange: (lessonId: number | null) => void;
}

export const Header: React.FC<HeaderProps> = ({ progress, currentLessonId, onLessonChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const currentLesson = LESSONS.find(l => l.id === currentLessonId) || LESSONS[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="bg-gradient-to-r from-green-800 via-green-700 to-amber-600 text-white py-6 shadow-xl relative z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div>
                        <button 
                            onClick={() => onLessonChange(null)}
                            className="text-3xl md:text-4xl font-extrabold flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
                        >
                            <span>🌿</span> 
                            <span>Tupi Antigo em 10 Lições</span>
                        </button>
                        
                        <div className="relative mt-2" ref={menuRef}>
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-amber-200 text-lg hover:text-white transition-colors flex items-center gap-2 text-left focus:outline-none group"
                            >
                                <span className="font-semibold">
                                    Lição {currentLesson.id} - {currentLesson.title}
                                </span>
                                <span className={`transform transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>

                            {/* Dropdown Menu */}
                            {isMenuOpen && (
                                <div className="absolute top-full left-0 mt-2 w-full md:w-96 bg-white text-gray-800 rounded-lg shadow-2xl overflow-hidden animate-fade-in border border-green-100 max-h-[80vh] overflow-y-auto">
                                    <div className="bg-green-50 p-3 border-b border-green-100 flex justify-between items-center">
                                        <span className="font-bold text-green-800 text-sm uppercase tracking-wider">Selecione uma lição</span>
                                        <button 
                                            onClick={() => {
                                                onLessonChange(null);
                                                setIsMenuOpen(false);
                                            }}
                                            className="text-xs text-green-600 hover:text-green-800 font-bold underline"
                                        >
                                            Voltar ao Início
                                        </button>
                                    </div>
                                    <ul className="divide-y divide-gray-100">
                                        {LESSONS.map((lesson) => (
                                            <li key={lesson.id}>
                                                <button
                                                    onClick={() => {
                                                        onLessonChange(lesson.id);
                                                        setIsMenuOpen(false);
                                                    }}
                                                    className={`w-full text-left px-4 py-3 hover:bg-green-50 transition-colors flex items-start gap-3 ${
                                                        currentLessonId === lesson.id ? 'bg-amber-50' : ''
                                                    }`}
                                                >
                                                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                                        currentLessonId === lesson.id 
                                                            ? 'bg-amber-500 text-white' 
                                                            : 'bg-green-100 text-green-700'
                                                    }`}>
                                                        {lesson.id}
                                                    </span>
                                                    <span className={`${currentLessonId === lesson.id ? 'font-bold text-green-900' : 'text-gray-700'}`}>
                                                        {lesson.title}
                                                    </span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-right hidden sm:block">
                        <div className="bg-white/20 rounded-full px-4 py-2">
                            <span className="text-sm">Progresso</span>
                            <div className="w-32 bg-white/30 rounded-full h-3 mt-1">
                                <div 
                                    className="bg-amber-400 h-3 rounded-full transition-all duration-500" 
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};