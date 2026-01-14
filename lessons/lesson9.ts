
import { VocabItem, TranslationExercise } from '../types';

export const VOCABULARY_L9: VocabItem[] = [
    {
        id: 'paranapiacaba',
        tupi: 'Paranapiacaba',
        pt: 'Serra do Sudeste',
        type: 'Topônimo',
        icon: '⛰️',
        breakdown: 'paranã + epîak (s) + aba',
        explanation: ['paranã = mar', 'epîak (s) = ver', 'aba = lugar'],
        literal: '"Lugar de ver o mar"',
        color: 'blue'
    },
    {
        id: 'cacapava',
        tupi: 'Caçapava',
        pt: 'Município de SP',
        type: 'Topônimo',
        icon: '🌳',
        breakdown: "ka'a + asab (s) + aba",
        explanation: ["ka'a = mata", 'asab (s) = atravessar, cruzar', 'aba = lugar'],
        literal: '"Lugar de atravessar a mata"',
        color: 'green'
    },
    {
        id: 'cunhau',
        tupi: 'Cunhaú',
        pt: 'Município do RN',
        type: 'Topônimo',
        icon: '👩',
        breakdown: "kunhã + 'y",
        explanation: ['kunhã = mulher', "'y = rio"],
        literal: '"Rio das mulheres"',
        color: 'pink'
    },
    {
        id: 'ibitipoca',
        tupi: 'Ibitipoca',
        pt: 'Localidade de MG',
        type: 'Topônimo',
        icon: '💥',
        breakdown: 'ybytyra + pok',
        explanation: ['ybytyra = montanha', 'pok = estourar'],
        literal: '"Montanha estourada (com grutas)"',
        color: 'gray'
    },
    {
        id: 'maira',
        tupi: 'Maíra',
        pt: 'Francês',
        type: 'Etnônimo',
        icon: '🇫🇷',
        breakdown: 'maíra',
        explanation: ['Entidade mitológica', 'Usado para designar os franceses (seres sobrenaturais)'],
        literal: '"Francês"',
        color: 'blue'
    },
    {
        id: 'jaguaquara',
        tupi: 'Jaguaquara',
        pt: 'Localidade da BA',
        type: 'Topônimo',
        icon: '🐆',
        breakdown: 'îagûara + kûara',
        explanation: ['îagûara = onça', 'kûara = toca'],
        literal: '"Toca da onça"',
        color: 'yellow'
    },
    {
        id: 'taiacutuba',
        tupi: 'Taiaçutuba',
        pt: 'Ilha do Amazonas',
        type: 'Topônimo',
        icon: '🐗',
        breakdown: 'taîasu + tyba',
        explanation: ['taîasu = porco do mato', 'tyba = ajuntamento'],
        literal: '"Ajuntamento de porcos do mato"',
        color: 'amber'
    },
    {
        id: 'guaibim',
        tupi: 'Guaibim',
        pt: 'Localidade da BA',
        type: 'Topônimo',
        icon: '👵',
        breakdown: 'gûaîbi',
        explanation: ['= velha'],
        literal: '"Velha"',
        color: 'purple'
    },
    {
        id: 'tatajuba',
        tupi: 'Tatajuba',
        pt: 'Localidade do CE',
        type: 'Topônimo',
        icon: '🔥',
        breakdown: 'tatá + îub',
        explanation: ['tatá = fogo', 'îub = amarelo'],
        literal: '"Fogo amarelo"',
        color: 'orange'
    },
    {
        id: 'itacolomi',
        tupi: 'Itacolomi',
        pt: 'Formação rochosa MG',
        type: 'Topônimo',
        icon: '🗿',
        breakdown: 'itá + kunumi',
        explanation: ['itá = pedra', 'kunumi = menino'],
        literal: '"Menino de pedra"',
        color: 'gray'
    }
];

export const EXERCISE_13: TranslationExercise[] = [
    {
        id: 1,
        question: "A mulher vê o céu azul.",
        tip: "kunhã + epîak (s) + ybaka + oby. Lembre do -s- pluriforme.",
        answers: ["Kunhã o-s-epîak ybaka oby.", "Kunhã osepîak ybaka oby"]
    },
    {
        id: 2,
        question: "O menino atravessa a montanha amarela.",
        tip: "kunumi + asab (s) + ybytyra + îub.",
        answers: ["Kunumi o-s-asab ybytyra îub.", "Kunumi osasab ybytyra îub"]
    },
    {
        id: 3,
        question: "A mulher má atravessa o mar dentro do navio do francês.",
        tip: "kunhã aíb + asab (s) + paranã + maíra ygarusu pupé.",
        answers: ["Kunhã aíb o-s-asab paranã maíra ygarusu pupé.", "Kunhã-aíb o-s-asab paranã maíra-ygarusu pupé"]
    },
    {
        id: 4,
        question: "O francês viu a mulher dentro da toca da onça.",
        tip: "maíra + epîak (s) + kunhã + îagûara kûara pupé.",
        answers: ["Maíra o-s-epîak kunhã îagûara kûara pupé.", "Maíra osepîak kunhã îagûara kûara pupé"]
    },
    {
        id: 5,
        question: "A velha sapecou o porco dentro de sua casa.",
        tip: "gûaîbi + apek (s) + taîasu + o oka pupé.",
        answers: ["Gûaîbi o-s-apek taîasu o oka pupé.", "Gûaîbi osapek taîasu o oka pupé"]
    },
    {
        id: 6,
        question: "A mulher bonita sapecou o francês dentro do fogo.",
        tip: "kunhã porang + apek (s) + maíra + tatá pupé.",
        answers: ["Kunhã porang o-s-apek maíra tatá pupé.", "Kunhã-porang-a o-s-apek maíra tatá pupé"]
    },
    {
        id: 7,
        question: "O menino ama a velha.",
        tip: "kunumi + aûsub (s) + gûaîbi.",
        answers: ["Kunumi o-s-aûsub gûaîbi.", "Kunumi osaûsub gûaîbi"]
    },
    {
        id: 8,
        question: "Amo as mulheres. As mulheres amam o francês.",
        tip: "aûsub (s) + kunhã-etá. Kunhã-etá + aûsub (s) + maíra.",
        answers: ["A-s-aûsub kunhã-etá. Kunhã-etá o-s-aûsub maíra.", "Asaûsub kunhã-etá. Kunhã-etá osaûsub maíra"]
    }
];
