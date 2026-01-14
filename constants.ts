
import { Pronoun, Verb, SectionId } from './types';

// Re-export lesson data
export * from './lessons/lesson1';
export * from './lessons/lesson2';
export * from './lessons/lesson3';
export * from './lessons/lesson4';
export * from './lessons/lesson5';
export * from './lessons/lesson6';
// Lesson 7 has no specific vocabulary/exercise constants in the previous file
export * from './lessons/lesson8';
export * from './lessons/lesson9';

export const LESSONS = [
    { id: 1, title: '"Vamos parar de nhen nhen nhen..."' },
    { id: 2, title: 'Por que Iguape, Cotegipe e Sergipe terminam em -pe?' },
    { id: 3, title: 'Que significa etá em Guaratinguetá e Paquetá?' },
    { id: 4, title: 'Itaporanga, Iporanga... Que significam poranga e catu?' },
    { id: 5, title: '"Eu fui ao Itororó beber água e não achei.."' },
    { id: 6, title: 'Taquarenduva, Mantiqueira... Algumas regras fonéticas' },
    { id: 7, title: '"Kunumi o-î-kutuk o pereba..." Verbos Transitivos' },
    { id: 8, title: 'Por que Iracema chamou seu filho de Moacyr?' },
    { id: 9, title: '"A mulher sapeca o porco..." Verbos Pluriformes' },
    { id: 10, title: 'Ibirapuera, Anhanguera... Que significa -uera?' },
] as const;

export const LESSON_SECTIONS: Record<number, { id: SectionId; label: string }[]> = {
    1: [
        { id: 'intro', label: '📖 Introdução' },
        { id: 'conjugation', label: '🔤 Conjugação' },
        { id: 'nos', label: '👥 Nós' },
        { id: 'practice1', label: '✏️ Exercício 1' },
        { id: 'vocab', label: '📚 Vocabulário' },
        { id: 'practice2', label: '🎯 Exercício 2' },
    ],
    2: [
        { id: 'intro', label: '📖 Introdução' },
        { id: 'postpositions', label: '📍 Posposições' },
        { id: 'practice3', label: '✏️ Exercício 3' },
        { id: 'practice4', label: '✏️ Exercício 4' },
        { id: 'vocab2', label: '📚 Vocabulário' },
        { id: 'practice5', label: '🎯 Exercício 5' },
    ],
    3: [
        { id: 'intro', label: '📖 Introdução' },
        { id: 'vocab3', label: '📚 Indefinido' },
        { id: 'practice6', label: '✏️ Exercício 6' },
    ],
    4: [
        { id: 'intro', label: '📖 Introdução' },
        { id: 'adjetivos', label: '🌟 Adjetivos' },
        { id: 'practice7', label: '✏️ Exercício 7' },
        { id: 'vocab4', label: '📚 Vocabulário' },
        { id: 'practice8', label: '🎯 Exercício 8' },
    ],
    5: [
        { id: 'intro', label: '📖 Introdução' },
        { id: 'genitive', label: '🔗 Relação Genitiva' },
        { id: 'practice9', label: '✏️ Exercício 9' },
        { id: 'vocab5', label: '📚 Vocabulário' },
        { id: 'practice10', label: '🎯 Fixação' },
    ],
    6: [
        { id: 'intro', label: '📖 Introdução' },
        { id: 'phonetics', label: '🗣️ Regras Fonéticas' },
        { id: 'practice11', label: '✏️ Exercício 10' },
    ],
    7: [
        { id: 'intro', label: '📖 Introdução' },
        { id: 'transitive', label: '🔄 Verbos Transitivos' },
        { id: 'pronouns', label: '🔤 Pronome Objetivo' },
    ],
    8: [
        { id: 'intro', label: '📖 Introdução' },
        { id: 'causative', label: '⚡ A Voz Causativa' },
        { id: 'vocab7', label: '📚 Vocabulário' },
        { id: 'practice12', label: '✏️ Exercício 11' },
        { id: 'practice13', label: '🗺️ Exercício 12' },
    ],
    9: [
        { id: 'intro', label: '📖 Introdução' },
        { id: 'pluriforms', label: '🔥 Verbos Pluriformes' },
        { id: 'vocab9', label: '📚 Vocabulário' },
        { id: 'practice14', label: '✏️ Exercício 13' },
    ],
    10: [
        { id: 'intro', label: '📖 Introdução' },
        { id: 'nominal_tense', label: '⏳ Tempo Nominal' },
        { id: 'practice15', label: '🧩 Exercício 14' },
    ]
};

export const PRONOUNS: Pronoun[] = [
    { key: 'ixe', label: 'ixé', meaning: 'eu', prefix: 'a-' },
    { key: 'ende', label: 'endé', meaning: 'tu', prefix: 'ere-' },
    { key: 'ae_sing', label: "a'e", meaning: 'ele/ela', prefix: 'o-' },
    { key: 'ase', label: 'asé', meaning: 'a gente', prefix: 'o-' },
    { key: 'ore', label: 'oré', meaning: 'nós (excl.)', prefix: 'oro-' },
    { key: 'iande', label: 'îandé', meaning: 'nós (incl.)', prefix: 'îa-' },
    { key: 'pee', label: 'pee', meaning: 'vós', prefix: 'pe-' },
    { key: 'ae_plur', label: "a'e", meaning: 'eles/elas', prefix: 'o-' }
];

export const VERBS: Verb[] = [
    { 
        root: "nhe'eng", 
        meaning: 'falar',
        pt: {
            s1: 'falo / falei',
            s2: 'falas / falaste',
            s3: 'fala / falou',
            p1: 'falamos',
            p2: 'falais / falastes',
            p3: 'falam / falaram'
        }
    },
    { 
        root: 'só', 
        meaning: 'ir',
        pt: {
            s1: 'vou / fui',
            s2: 'vais / foste',
            s3: 'vai / foi',
            p1: 'vamos / fomos',
            p2: 'ides / fostes',
            p3: 'vão / foram'
        }
    },
    { 
        root: 'kopir', 
        meaning: 'carpir',
        pt: {
            s1: 'carpo / carpi',
            s2: 'carpes / carpiste',
            s3: 'carpe / carpiu',
            p1: 'carpimos',
            p2: 'carpis / carpistes',
            p3: 'carpem / carpiram'
        }
    },
    { 
        root: 'pytá', 
        meaning: 'ficar',
        pt: {
            s1: 'fico / fiquei',
            s2: 'ficas / ficaste',
            s3: 'fica / ficou',
            p1: 'ficamos',
            p2: 'ficais / ficastes',
            p3: 'ficam / ficaram'
        }
    },
    { 
        root: 'sykyîé', 
        meaning: 'temer',
        pt: {
            s1: 'temo / temi',
            s2: 'temes / temeste',
            s3: 'teme / temeu',
            p1: 'tememos',
            p2: 'temeis / temestes',
            p3: 'temem / temeram'
        }
    },
    { 
        root: "'ytab", 
        meaning: 'nadar',
        pt: {
            s1: 'nado / nadei',
            s2: 'nadas / nadaste',
            s3: 'nada / nadou',
            p1: 'nadamos',
            p2: 'nadais / nadastes',
            p3: 'nadam / nadaram'
        }
    },
    { 
        root: 'syk', 
        meaning: 'chegar',
        pt: {
            s1: 'chego / cheguei',
            s2: 'chegas / chegaste',
            s3: 'chega / chegou',
            p1: 'chegamos',
            p2: 'chegais / chegastes',
            p3: 'chegam / chegaram'
        }
    },
    { 
        root: 'sem', 
        meaning: 'sair',
        pt: {
            s1: 'saio / saí',
            s2: 'sais / saíste',
            s3: 'sai / saiu',
            p1: 'saímos',
            p2: 'saís / saístes',
            p3: 'saem / saíram'
        }
    },
    { 
        root: 'ikó', 
        meaning: 'estar',
        pt: {
            s1: 'estou / estive',
            s2: 'estás / estiveste',
            s3: 'está / esteve',
            p1: 'estamos / estivemos',
            p2: 'estais / estivestes',
            p3: 'estão / estiveram'
        }
    }
];