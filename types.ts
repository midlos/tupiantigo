

export type SectionId = 'intro' | 'conjugation' | 'nos' | 'practice1' | 'vocab' | 'practice2' | 'postpositions' | 'practice3' | 'practice4' | 'vocab2' | 'practice5' | 'vocab3' | 'practice6' | 'practice7' | 'vocab4' | 'practice8' | 'adjetivos' | 'genitive' | 'practice9' | 'vocab5' | 'practice10' | 'phonetics' | 'practice11' | 'vocab6' | 'transitive' | 'pronouns' | 'causative' | 'vocab7' | 'practice12' | 'practice13' | 'pluriforms' | 'vocab9' | 'practice14' | 'nominal_tense' | 'practice15';

export interface PtConjugations {
    s1: string;
    s2: string;
    s3: string;
    p1: string;
    p2: string;
    p3: string;
}

export interface Verb {
    root: string;
    meaning: string;
    pt: PtConjugations;
}

export interface Pronoun {
    key: string;
    label: string;
    meaning: string;
    prefix: string;
}

export interface VocabItem {
    id: string;
    tupi: string;
    pt: string;
    type: string;
    icon: string;
    breakdown: string;
    explanation: string[];
    literal: string;
    color: string;
}

export interface TranslationExercise {
    id: number;
    question: string; // Can be PT or Tupi depending on direction
    tip: string;
    answers: string[];
}