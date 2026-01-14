
import { VocabItem, TranslationExercise } from '../types';

export const VOCABULARY_L5: VocabItem[] = [
    {
        id: 'pari',
        tupi: 'Pari',
        pt: 'Bairro de SP',
        type: 'Topônimo',
        icon: '🐟',
        breakdown: 'pari',
        explanation: ['= canal para apanhar peixes'],
        literal: '"Curral de peixes"',
        color: 'blue'
    },
    {
        id: 'itaquera',
        tupi: 'Itaquera',
        pt: 'Bairro de SP',
        type: 'Topônimo',
        icon: '🗿',
        breakdown: 'itá + ker',
        explanation: ['itá = pedra', 'ker = dormir'],
        literal: '"Pedra dormente"',
        color: 'gray'
    },
    {
        id: 'capibaribe',
        tupi: 'Capibaribe',
        pt: 'Rio de PE',
        type: 'Topônimo',
        icon: '🦦',
        breakdown: "kapibara + 'y + -pe",
        explanation: ['kapibara = capivara', "'y = rio", "-pe = em"],
        literal: '"No rio das capivaras"',
        color: 'amber'
    },
    {
        id: 'itapororoca',
        tupi: 'Itapororoca',
        pt: 'Município da PB',
        type: 'Topônimo',
        icon: '💥',
        breakdown: 'itá + pororok',
        explanation: ['itá = pedra', 'pororok = explodir/estrondo'],
        literal: '"Pedras explodidas / Explosão das pedras"',
        color: 'red'
    },
    {
        id: 'pirapora',
        tupi: 'Pirapora',
        pt: 'Município da BA/MG/SP',
        type: 'Topônimo',
        icon: '🐠',
        breakdown: 'pirá + por',
        explanation: ['pirá = peixe', 'por = pular'],
        literal: '"Pulo dos peixes / Peixes que pulam"',
        color: 'cyan'
    },
    {
        id: 'iquiririm',
        tupi: 'Iquiririm',
        pt: 'Rua de SP',
        type: 'Topônimo',
        icon: '🤫',
        breakdown: "'y + kyriri",
        explanation: ["'y = rio/água", "kyriri = silencioso"],
        literal: '"Rio silencioso"',
        color: 'teal'
    },
    {
        id: 'carioca',
        tupi: 'Carioca',
        pt: 'Natural do RJ',
        type: 'Gentílico',
        icon: '🏠',
        breakdown: 'kariîó + oka',
        explanation: ['kariîó = carijó (grupo indígena)', 'oka = casa'],
        literal: '"Casa de carijós"',
        color: 'orange'
    }
];

export const EXERCISE_9: TranslationExercise[] = [
    { 
        id: 1, 
        question: "A mãe de Pedro é bonita.", 
        tip: "Pedro + sy (mãe) + i porang (é bonita)", 
        answers: ["Pedro sy i porang.", "Pedro-sy i porang"] 
    },
    { 
        id: 2, 
        question: "A toca da onça é comprida.", 
        tip: "îagûara (onça) + kûara (toca) + i puku (é comprida)", 
        answers: ["Îagûara kûara i puku.", "Îagûara-kûara i puku"] 
    },
    { 
        id: 3, 
        question: "O filho de Maria é bom.", 
        tip: "Maria + membyra (filho) + i katu (é bom)", 
        answers: ["Maria membyra i katu.", "Maria-membyra i katu"] 
    },
    { 
        id: 4, 
        question: "Nadei no rio dos peixes.", 
        tip: "a-'ytab (nadei) + pirá (peixe) + 'y (rio) + -pe (em)", 
        answers: ["A-'ytab pirá 'y-pe.", "A'ytab pirá 'y-pe", "A-'ytab pirá-'y-pe"] 
    },
    { 
        id: 5, 
        question: "Pedro nadou no rio dos gravatás.", 
        tip: "Pedro + o-'ytab (nadou) + karaguatá (gravatá) + 'y-pe", 
        answers: ["Pedro o-'ytab karaguatá 'y-pe.", "Pedro o'ytab karaguatá 'y-pe"] 
    },
    { 
        id: 6, 
        question: "Dormi na toca das araras.", 
        tip: "a-ker (dormi) + arará (arara) + kûara (toca) + -pe", 
        answers: ["A-ker arará kûara-pe.", "Aker arará kûara-pe"] 
    },
    { 
        id: 7, 
        question: "Maria ficou no rio dos tatus.", 
        tip: "Maria + o-pytá (ficou) + tatu (tatu) + 'y-pe", 
        answers: ["Maria o-pytá tatu 'y-pe.", "Maria opytá tatu 'y-pe"] 
    },
    { 
        id: 8, 
        question: "Vou para a enseada de pedra.", 
        tip: "a-só (vou) + itá (pedra) + kûá (enseada) + -pe", 
        answers: ["A-só itá kûá-pe.", "Asó itá kûá-pe"] 
    },
    { 
        id: 9, 
        question: "Maria mora na casa de pedra.", 
        tip: "Maria + o-îkó (mora) + itá (pedra) + oka (casa) + -pe", 
        answers: ["Maria o-îkó itá oka-pe.", "Maria oîkó itá oka-pe"] 
    },
    { 
        id: 10, 
        question: "O rio dos siris é bonito.", 
        tip: "siri + 'y + i porang", 
        answers: ["Siri 'y i porang.", "Siri-'y i porang"] 
    }
];

export const EXERCISE_10: TranslationExercise[] = [
    { 
        id: 1, 
        question: "A capivara saiu do pari.", 
        tip: "kapibara (capivara) + o-sem (saiu) + pari + suí (de)", 
        answers: ["Kapibara o-sem pari suí.", "Kapibara osem pari suí"] 
    },
    { 
        id: 2, 
        question: "O carijó pulou dentro do rio.", 
        tip: "kariîó (carijó) + o-por (pulou) + 'y (rio) + pupé (dentro)", 
        answers: ["Kariîó o-por 'y pupé.", "Kariîó opor 'y pupé"] 
    },
    { 
        id: 3, 
        question: "O carijó silencioso dormiu dentro da casa.", 
        tip: "kariîó kyriri (silencioso) + o-ker (dormiu) + oka pupé", 
        answers: ["Kariîó kyriri o-ker oka pupé.", "Kariîó-kyriri o-ker oka pupé"] 
    },
    { 
        id: 4, 
        question: "A casa explodiu.", 
        tip: "oka (casa) + o-pororok (explodiu)", 
        answers: ["Oka o-pororok.", "Oka opororok"] 
    },
    { 
        id: 5, 
        question: "A capivara dormiu no rio das pedras.", 
        tip: "kapibara + o-ker + itá (pedra) + 'y (rio) + -pe", 
        answers: ["Kapibara o-ker itá 'y-pe.", "Kapibara oker itá 'y-pe"] 
    }
];
