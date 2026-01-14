import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { WelcomeScreen } from './components/WelcomeScreen';

// Lesson 1 Components
import { SectionIntroL1 } from './components/SectionIntroL1';
import { SectionConjugationL1 } from './components/SectionConjugationL1';
import { SectionNosL1 } from './components/SectionNosL1';
import { SectionPracticeConjugationL1 } from './components/SectionPracticeConjugationL1';
import { Lesson1SidebarEx2 } from './components/Lesson1SidebarEx2';

// Lesson 2 Components
import { SectionIntroL2 } from './components/SectionIntroL2';
import { SectionPostpositionsL2 } from './components/SectionPostpositionsL2';
import { Lesson2SidebarEx3 } from './components/Lesson2SidebarEx3';
import { Lesson2SidebarEx4 } from './components/Lesson2SidebarEx4';
import { Lesson2SidebarEx5 } from './components/Lesson2SidebarEx5';

// Lesson 3 Components
import { SectionIntroL3 } from './components/SectionIntroL3';
import { Lesson3Sidebar } from './components/Lesson3Sidebar';

// Lesson 4 Components
import { SectionIntroL4 } from './components/SectionIntroL4';
import { SectionAdjectivesL4 } from './components/SectionAdjectivesL4';
import { Lesson4Sidebar } from './components/Lesson4Sidebar';
import { Lesson4SidebarEx8 } from './components/Lesson4SidebarEx8';

// Lesson 5 Components
import { SectionIntroL5 } from './components/SectionIntroL5';
import { SectionGenitiveL5 } from './components/SectionGenitiveL5';
import { Lesson5Sidebar } from './components/Lesson5Sidebar';
import { Lesson5SidebarEx10 } from './components/Lesson5SidebarEx10';

// Lesson 6 Components
import { SectionIntroL6 } from './components/SectionIntroL6';
import { SectionPhoneticsL6 } from './components/SectionPhoneticsL6';
import { Lesson6Sidebar } from './components/Lesson6Sidebar';

// Lesson 7 Components
import { SectionIntroL7 } from './components/SectionIntroL7';
import { SectionTransitiveVerbsL7 } from './components/SectionTransitiveVerbsL7';
import { SectionObjectPronounsL7 } from './components/SectionObjectPronounsL7';

// Lesson 8 Components
import { SectionIntroL8 } from './components/SectionIntroL8';
import { SectionCausativeL8 } from './components/SectionCausativeL8';
import { Lesson8SidebarEx11 } from './components/Lesson8SidebarEx11';
import { SectionTybaExercise } from './components/SectionTybaExercise';

// Lesson 9 Components
import { SectionIntroL9 } from './components/SectionIntroL9';
import { SectionPluriformsL9 } from './components/SectionPluriformsL9';
import { Lesson9SidebarEx13 } from './components/Lesson9SidebarEx13';

// Lesson 10 Components
import { SectionIntroL10 } from './components/SectionIntroL10';
import { SectionNominalTenseL10 } from './components/SectionNominalTenseL10';
import { SectionPractice14 } from './components/SectionPractice14';

// Shared Components
import { SectionVocabulary } from './components/SectionVocabulary';
import { SectionPracticeTranslation } from './components/SectionPracticeTranslation';

import { SectionId } from './types';
import { 
    LESSON_SECTIONS, 
    VOCABULARY_L1, MATCH_PAIRS_L1, EXERCISE_2, 
    EXERCISE_3, EXERCISE_4, VOCABULARY_L2, MATCH_PAIRS_L2, EXERCISE_5,
    VOCABULARY_L3, MATCH_PAIRS_L3, EXERCISE_6,
    VOCABULARY_L4, MATCH_PAIRS_L4, EXERCISE_7, EXERCISE_8,
    VOCABULARY_L5, EXERCISE_9, EXERCISE_10,
    EXERCISE_10_L6, VOCABULARY_L8, EXERCISE_11,
    VOCABULARY_L9, EXERCISE_13
} from './constants';

const App: React.FC = () => {
    // Start with null to show Welcome Screen
    const [currentLessonId, setCurrentLessonId] = useState<number | null>(null);
    const [currentSection, setCurrentSection] = useState<SectionId>('intro');
    const [progress, setProgress] = useState(0);

    const sections = currentLessonId ? (LESSON_SECTIONS[currentLessonId] || LESSON_SECTIONS[1]) : [];

    // Reset section when lesson changes
    useEffect(() => {
        if (currentLessonId) {
            setCurrentSection('intro');
        }
    }, [currentLessonId]);

    // Calculate progress based on current section index
    useEffect(() => {
        if (!currentLessonId) {
            setProgress(0);
            return;
        }
        const index = sections.findIndex(s => s.id === currentSection);
        const percentage = ((index + 1) / sections.length) * 100;
        setProgress(percentage);
    }, [currentSection, sections, currentLessonId]);

    // Scroll to top when section changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentSection, currentLessonId]);

    const handleSectionChange = (section: SectionId) => {
        setCurrentSection(section);
    };

    const goToNextSection = () => {
        const currentIndex = sections.findIndex(s => s.id === currentSection);
        if (currentIndex < sections.length - 1) {
            setCurrentSection(sections[currentIndex + 1].id as SectionId);
        }
    };

    const renderContent = () => {
        if (currentLessonId === 1) {
            switch (currentSection) {
                case 'intro': return <SectionIntroL1 onNext={goToNextSection} />;
                case 'conjugation': return <SectionConjugationL1 onNext={goToNextSection} />;
                case 'nos': return <SectionNosL1 onNext={goToNextSection} />;
                case 'practice1': return <SectionPracticeConjugationL1 onNext={goToNextSection} />;
                case 'vocab': return <SectionVocabulary onNext={goToNextSection} items={VOCABULARY_L1} matchPairs={MATCH_PAIRS_L1} />;
                case 'practice2': return (
                    <SectionPracticeTranslation 
                        title="🎯 Exercício 2: Tradução" 
                        subtitle="Traduza as frases para o Tupi Antigo!" 
                        exercises={EXERCISE_2}
                        sidebar={<Lesson1SidebarEx2 />}
                    />
                );
                default: return <SectionIntroL1 onNext={goToNextSection} />;
            }
        } else if (currentLessonId === 2) {
            switch (currentSection) {
                case 'intro': return <SectionIntroL2 onNext={goToNextSection} />;
                case 'postpositions': return <SectionPostpositionsL2 onNext={goToNextSection} />;
                case 'practice3': return (
                    <SectionPracticeTranslation 
                        title="✏️ Exercício 3: Tradução" 
                        subtitle="Traduza as frases para Português!" 
                        exercises={EXERCISE_3} 
                        inputPlaceholder="Digite em Português..." 
                        onNext={goToNextSection}
                        sidebar={<Lesson2SidebarEx3 />}
                    />
                );
                case 'practice4': return (
                    <SectionPracticeTranslation 
                        title="✏️ Exercício 4: Versão" 
                        subtitle="Verta para o Tupi!" 
                        exercises={EXERCISE_4} 
                        inputPlaceholder="Digite em Tupi..." 
                        onNext={goToNextSection}
                        sidebar={<Lesson2SidebarEx4 />}
                    />
                );
                case 'vocab2': return <SectionVocabulary onNext={goToNextSection} items={VOCABULARY_L2} matchPairs={MATCH_PAIRS_L2} />;
                case 'practice5': return (
                    <SectionPracticeTranslation 
                        title="🎯 Exercício 5: Fixação" 
                        subtitle="Traduza usando o vocabulário mnemônico!" 
                        exercises={EXERCISE_5} 
                        inputPlaceholder="Digite em Tupi..." 
                        sidebar={<Lesson2SidebarEx5 />}
                    />
                );
                default: return <SectionIntroL2 onNext={goToNextSection} />;
            }
        } else if (currentLessonId === 3) {
            switch (currentSection) {
                case 'intro': return <SectionIntroL3 onNext={goToNextSection} />;
                case 'vocab3': return <SectionVocabulary onNext={goToNextSection} items={VOCABULARY_L3} matchPairs={MATCH_PAIRS_L3} />;
                case 'practice6': return (
                    <SectionPracticeTranslation 
                        title="✏️ Exercício 6: Etá" 
                        subtitle="Traduza para o Tupi usando -etá!" 
                        exercises={EXERCISE_6} 
                        inputPlaceholder="Digite em Tupi..."
                        sidebar={<Lesson3Sidebar />} 
                    />
                );
                default: return <SectionIntroL3 onNext={goToNextSection} />;
            }
        } else if (currentLessonId === 4) {
            switch (currentSection) {
                case 'intro': return <SectionIntroL4 onNext={goToNextSection} />;
                case 'adjetivos': return <SectionAdjectivesL4 onNext={goToNextSection} />;
                case 'practice7': return (
                    <SectionPracticeTranslation 
                        title="✏️ Exercício 7: Adjetivos" 
                        subtitle="Traduza para o Tupi (Qualificativo vs Predicativo)" 
                        exercises={EXERCISE_7} 
                        inputPlaceholder="Digite em Tupi..." 
                        onNext={goToNextSection} 
                        sidebar={<Lesson4Sidebar />}
                    />
                );
                case 'vocab4': return <SectionVocabulary onNext={goToNextSection} items={VOCABULARY_L4} matchPairs={MATCH_PAIRS_L4} />;
                case 'practice8': return (
                    <SectionPracticeTranslation 
                        title="🎯 Exercício 8: Tradução" 
                        subtitle="Traduza para o Português usando o vocabulário!" 
                        exercises={EXERCISE_8} 
                        inputPlaceholder="Digite em Português..."
                        sidebar={<Lesson4SidebarEx8 />} 
                    />
                );
                default: return <SectionIntroL4 onNext={goToNextSection} />;
            }
        } else if (currentLessonId === 5) {
            switch (currentSection) {
                case 'intro': return <SectionIntroL5 onNext={goToNextSection} />;
                case 'genitive': return <SectionGenitiveL5 onNext={goToNextSection} />;
                case 'practice9': return (
                    <SectionPracticeTranslation 
                        title="✏️ Exercício 9: Relação Genitiva" 
                        subtitle="Verta para o Tupi (Inverta a ordem!)" 
                        exercises={EXERCISE_9} 
                        inputPlaceholder="Digite em Tupi..." 
                        onNext={goToNextSection} 
                        sidebar={<Lesson5Sidebar />}
                    />
                );
                case 'vocab5': return <SectionVocabulary onNext={goToNextSection} items={VOCABULARY_L5} matchPairs={[]} />;
                case 'practice10': return (
                    <SectionPracticeTranslation 
                        title="🎯 Fixação" 
                        subtitle="Traduza com base no vocabulário mnemônico" 
                        exercises={EXERCISE_10} 
                        inputPlaceholder="Digite em Tupi..." 
                        sidebar={<Lesson5SidebarEx10 />}
                    />
                );
                default: return <SectionIntroL5 onNext={goToNextSection} />;
            }
        } else if (currentLessonId === 6) {
            switch (currentSection) {
                case 'intro': return <SectionIntroL6 onNext={goToNextSection} />;
                case 'phonetics': return <SectionPhoneticsL6 onNext={goToNextSection} />;
                case 'practice11': return (
                    <SectionPracticeTranslation 
                        title="✏️ Exercício 10: Fixação" 
                        subtitle="Aplique as regras fonéticas para traduzir!" 
                        exercises={EXERCISE_10_L6} 
                        inputPlaceholder="Digite em Tupi..." 
                        sidebar={<Lesson6Sidebar />}
                    />
                );
                default: return <SectionIntroL6 onNext={goToNextSection} />;
            }
        } else if (currentLessonId === 7) {
            switch (currentSection) {
                case 'intro': return <SectionIntroL7 onNext={goToNextSection} />;
                case 'transitive': return <SectionTransitiveVerbsL7 onNext={goToNextSection} />;
                case 'pronouns': return <SectionObjectPronounsL7 />;
                default: return <SectionIntroL7 onNext={goToNextSection} />;
            }
        } else if (currentLessonId === 8) {
            switch (currentSection) {
                case 'intro': return <SectionIntroL8 onNext={goToNextSection} />;
                case 'causative': return <SectionCausativeL8 onNext={goToNextSection} />;
                case 'vocab7': return <SectionVocabulary onNext={goToNextSection} items={VOCABULARY_L8} matchPairs={[]} />;
                case 'practice12': return (
                    <SectionPracticeTranslation 
                        title="✏️ Exercício 11: Voz Causativa" 
                        subtitle="Use mo- e as regras fonéticas para traduzir!" 
                        exercises={EXERCISE_11} 
                        inputPlaceholder="Digite em Tupi..." 
                        onNext={goToNextSection}
                        sidebar={<Lesson8SidebarEx11 />}
                    />
                );
                case 'practice13': return <SectionTybaExercise onNext={goToNextSection} />;
                default: return <SectionIntroL8 onNext={goToNextSection} />;
            }
        } else if (currentLessonId === 9) {
            switch (currentSection) {
                case 'intro': return <SectionIntroL9 onNext={goToNextSection} />;
                case 'pluriforms': return <SectionPluriformsL9 onNext={goToNextSection} />;
                case 'vocab9': return <SectionVocabulary onNext={goToNextSection} items={VOCABULARY_L9} matchPairs={[]} />;
                case 'practice14': return (
                    <SectionPracticeTranslation 
                        title="✏️ Exercício 13: Verbos Pluriformes" 
                        subtitle="Use -s- quando necessário!" 
                        exercises={EXERCISE_13} 
                        inputPlaceholder="Digite em Tupi..." 
                        sidebar={<Lesson9SidebarEx13 />}
                    />
                );
                default: return <SectionIntroL9 onNext={goToNextSection} />;
            }
        } else if (currentLessonId === 10) {
            switch (currentSection) {
                case 'intro': return <SectionIntroL10 onNext={goToNextSection} />;
                case 'nominal_tense': return <SectionNominalTenseL10 onNext={goToNextSection} />;
                case 'practice15': return <SectionPractice14 />;
                default: return <SectionIntroL10 onNext={goToNextSection} />;
            }
        }
        return <div className="text-center p-8">Lição em construção...</div>;
    };

    return (
        <div className="min-h-screen flex flex-col bg-amber-50">
            {currentLessonId === null ? (
                // Show Welcome Screen if no lesson is selected
                <WelcomeScreen onSelectLesson={setCurrentLessonId} />
            ) : (
                // Show Lesson Content if a lesson is selected
                <>
                    <Header 
                        progress={progress} 
                        currentLessonId={currentLessonId} 
                        onLessonChange={setCurrentLessonId} 
                    />
                    
                    <Navigation 
                        currentLessonId={currentLessonId}
                        currentSection={currentSection} 
                        onSectionChange={handleSectionChange} 
                    />

                    <main className="container mx-auto px-4 py-8 flex-grow max-w-5xl">
                        {renderContent()}
                    </main>

                    <footer className="bg-green-800 text-white py-6 mt-8">
                        <div className="container mx-auto px-4 text-center">
                            <p className="text-amber-200">Baseado no Curso Breve de Tupi Antigo</p>
                            <p className="text-sm text-green-300 mt-1">Prof. Eduardo de Almeida Navarro (USP)</p>
                        </div>
                    </footer>
                </>
            )}
        </div>
    );
};

export default App;