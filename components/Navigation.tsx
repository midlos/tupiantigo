
import React from 'react';
import { SectionId } from '../types';
import { LESSON_SECTIONS } from '../constants';

interface NavigationProps {
    currentLessonId: number;
    currentSection: SectionId;
    onSectionChange: (section: SectionId) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentLessonId, currentSection, onSectionChange }) => {
    const sections = LESSON_SECTIONS[currentLessonId] || LESSON_SECTIONS[1];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-4">
                <div className="flex overflow-x-auto py-2 gap-2 scrollbar-hide">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => onSectionChange(section.id as SectionId)}
                            className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                                currentSection === section.id
                                    ? 'bg-green-600 text-white shadow-md'
                                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                            }`}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};
