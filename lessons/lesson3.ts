
import { VocabItem, TranslationExercise } from '../types';

export const VOCABULARY_L3: VocabItem[] = [
    {
        id: 'paqueta',
        tupi: 'Paquetá',
        pt: 'Ilha do RJ',
        type: 'Topônimo',
        icon: '🏝️',
        breakdown: 'paka + etá',
        explanation: ['paka = paca', 'etá = muitos/muitas'],
        literal: '"Muitas pacas"',
        color: 'green'
    },
    {
        id: 'itaeta',
        tupi: 'Itaetá',
        pt: 'Arroio no RS',
        type: 'Topônimo',
        icon: '🗿',
        breakdown: 'itá + etá',
        explanation: ['itá = pedra', 'etá = muitos/muitas'],
        literal: '"Muitas pedras"',
        color: 'gray'
    },
    {
        id: 'igaracu',
        tupi: 'Igaraçu',
        pt: 'Cidade do Tietê',
        type: 'Topônimo',
        icon: '🚢',
        breakdown: 'ygarusu + etá',
        explanation: ['ygarusu = navio, canoa grande', 'etá = muitos'],
        literal: '"Muitos navios"',
        color: 'blue'
    },
    {
        id: 'guaratingueta',
        tupi: 'Guaratinguetá',
        pt: 'Cidade de SP',
        type: 'Topônimo',
        icon: '🦢',
        breakdown: 'gûyrá + tinga + etá',
        explanation: ['gûyrá = pássaro', 'tinga = branco', 'etá = muitos'],
        literal: '"Muitas garças/aves brancas"',
        color: 'teal'
    }
];

export const MATCH_PAIRS_L3 = [
    { tupi: 'etá', pt: 'muitos' },
    { tupi: 'paka', pt: 'paca' },
    { tupi: 'itá', pt: 'pedra' },
    { tupi: 'gûyrá', pt: 'pássaro' }
];

export const EXERCISE_6: TranslationExercise[] = [
    { 
        id: 1, 
        question: "Muitos índios vão para o rio.", 
        tip: "abá-etá + só + 'y-pe", 
        answers: ["Abá-etá o-só 'y-pe.", "Abá-etá osó 'y-pe"] 
    },
    { 
        id: 2, 
        question: "Muitos índios saem da canoa.", 
        tip: "abá-etá + sem + ygara (canoa) + suí", 
        answers: ["Abá-etá o-sem ygara suí.", "Abá-etá osem ygara suí"] 
    },
    { 
        id: 3, 
        question: "Muitos navios estão na enseada.", 
        tip: "ygarusu-etá + ikó + kûá-pe", 
        answers: ["Ygarusu-etá o-îkó kûá-pe.", "Ygarusu-etá oîkó kûá-pe"] 
    },
    { 
        id: 4, 
        question: "Muitos portugueses falam aos índios.", 
        tip: "peró-etá + nhe'eng + abá supé", 
        answers: ["Peró-etá o-nhe'eng abá supé.", "Peró-etá onhe'eng abá supé"] 
    },
    { 
        id: 5, 
        question: "Muitas pacas ficam dentro da mata.", 
        tip: "pak-etá (paka perde o -a) + pytá + ka'a pupé", 
        answers: ["Pak-etá o-pytá ka'a pupé.", "Pak-etá opytá ka'a pupé"] 
    },
    { 
        id: 6, 
        question: "Muitas garças saem do rio.", 
        tip: "gûyrá-ting-etá (tinga perde o -a) + sem + 'y suí", 
        answers: ["Gûyrá-ting-etá o-sem 'y suí.", "Gûyrá-ting-etá osem 'y suí"] 
    },
    { 
        id: 7, 
        question: "Muitos índios moram em Nhoesembé.", 
        tip: "abá-etá + ikó + Nhoesembé-pe", 
        answers: ["Abá-etá o-îkó Nhoesembé-pe.", "Abá-etá oîkó Nhoesembé-pe"] 
    },
    { 
        id: 8, 
        question: "Muitos tatus vão para a mata.", 
        tip: "tatu-etá + só + ka'a-pe", 
        answers: ["Tatu-etá o-só ka'a-pe.", "Tatu-etá osó ka'a-pe"] 
    },
    { 
        id: 9, 
        question: "Muitos meninos estão dentro do navio.", 
        tip: "kunumi-etá + ikó + ygarusu pupé", 
        answers: ["Kunumi-etá o-îkó ygarusu pupé.", "Kunumi-etá oîkó ygarusu pupé"] 
    },
    { 
        id: 10, 
        question: "Muitas pacas moram na mata.", 
        tip: "pak-etá + ikó + ka'a-pe", 
        answers: ["Pak-etá o-îkó ka'a-pe.", "Pak-etá oîkó ka'a-pe"] 
    }
];
