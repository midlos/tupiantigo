
import { VocabItem, TranslationExercise } from '../types';

export const VOCABULARY_L1: VocabItem[] = [
    {
        id: 'sorocaba',
        tupi: 'Sorocaba',
        pt: 'Nome de cidade',
        type: 'Nome de cidade',
        icon: '🏙️',
        breakdown: 'sorok + -aba',
        explanation: ['sorok = rasgar-se', '-aba = lugar, sufixo substantivador'],
        literal: '"A rasgadura [da terra]"',
        color: 'amber'
    },
    {
        id: 'cucuia',
        tupi: 'Ir para a cucuia',
        pt: 'Expressão popular',
        type: 'Expressão popular',
        icon: '📉',
        breakdown: 'kukuî',
        explanation: ['Reduplicação de kuî (cair)', '= ficar caindo, ficar-se desprendendo (o fruto, o cabelo, etc.)'],
        literal: '"Ir para a decadência"',
        color: 'green'
    },
    {
        id: 'maracuja',
        tupi: 'Maracujá',
        pt: 'Fruta',
        type: 'Fruta',
        icon: '🍈',
        breakdown: 'murukuîá',
        explanation: ['Nome original da fruta em Tupi'],
        literal: 'Verbo relacionado: kuî (cair)',
        color: 'yellow'
    },
    {
        id: 'aoba',
        tupi: 'Aoba',
        pt: 'Roupa',
        type: 'Substantivo',
        icon: '👕',
        breakdown: 'aoba',
        explanation: ['= roupa'],
        literal: 'Palavra para roupas/vestimentas',
        color: 'blue'
    },
    {
        id: 'cururu',
        tupi: 'Sapo Cururu',
        pt: 'Cantiga folclórica',
        type: 'Cantiga folclórica',
        icon: '🐸',
        breakdown: 'kururu',
        explanation: ['= sapo'],
        literal: '"Sapo cururu na beira do rio..."',
        color: 'lime'
    },
    {
        id: 'avanhandava',
        tupi: 'Avanhandava',
        pt: 'Nome de cidade',
        type: 'Nome de cidade',
        icon: '🏃',
        breakdown: 'abá + nhan + -aba',
        explanation: ['abá = homem, pessoa, índio', 'nhan = correr', 'aba = lugar'],
        literal: '"Lugar da corrida dos homens"',
        color: 'red'
    },
    {
        id: 'jaci',
        tupi: 'Jaci',
        pt: 'Nome próprio',
        type: 'Nome próprio',
        icon: '🌙',
        breakdown: 'îasy',
        explanation: ['= lua'],
        literal: 'Nome bonito que significa "lua"',
        color: 'purple'
    },
    {
        id: 'itaberaba',
        tupi: 'Itaberaba',
        pt: 'Município de MG',
        type: 'Município de MG',
        icon: '💎',
        breakdown: 'itá + berab',
        explanation: ['itá = pedra', 'berab = brilhante'],
        literal: '"Pedra brilhante"',
        color: 'gray'
    },
    {
        id: 'piracema',
        tupi: 'Piracema',
        pt: 'Fenômeno natural',
        type: 'Fenômeno natural',
        icon: '🐟',
        breakdown: 'pirá + sem',
        explanation: ['pirá = peixe', 'sem = sair'],
        literal: '"Saída dos peixes"',
        color: 'cyan'
    },
    {
        id: 'piracicaba',
        tupi: 'Piracicaba',
        pt: 'Nome de cidade',
        type: 'Nome de cidade',
        icon: '🐠',
        breakdown: 'pirá + syk + -aba',
        explanation: ['pirá = peixe', 'syk = chegar', 'aba = lugar'],
        literal: '"Lugar de chegada dos peixes"',
        color: 'teal'
    }
];

export const MATCH_PAIRS_L1 = [
    { tupi: 'sorok', pt: 'rasgar-se' },
    { tupi: 'kururu', pt: 'sapo' },
    { tupi: 'îasy', pt: 'lua' },
    { tupi: 'aoba', pt: 'roupa' }
];

export const EXERCISE_2: TranslationExercise[] = [
    { 
        id: 1, 
        question: "A roupa rasgou-se.", 
        tip: "roupa (aoba) + rasgar-se (sorok) + 3ª pessoa (o-)", 
        answers: ["Aoba o-sorok.", "Aoba osorok"] 
    },
    { 
        id: 2, 
        question: "O maracujá caiu.", 
        tip: "maracujá (murukuîá) + cair (kuî)", 
        answers: ["Murukuîá o-kuî.", "Murukuîá okuî"] 
    },
    { 
        id: 3, 
        question: "O sapo dormiu.", 
        tip: "sapo (kururu) + dormir (ker)", 
        answers: ["Kururu o-ker.", "Kururu oker"] 
    },
    { 
        id: 4, 
        question: "O homem correu.", 
        tip: "homem (abá) + correr (nhan)", 
        answers: ["Abá o-nhan.", "Abá onhan"] 
    },
    { 
        id: 5, 
        question: "A lua brilhou.", 
        tip: "lua (îasy) + brilhar (berab)", 
        answers: ["Îasy o-berab.", "Îasy oberab"] 
    }
];
