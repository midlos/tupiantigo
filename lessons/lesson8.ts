
import { VocabItem, TranslationExercise } from '../types';

export const VOCABULARY_L8: VocabItem[] = [
    {
        id: 'guataporanga',
        tupi: 'Guataporanga',
        pt: 'Município de SP',
        type: 'Topônimo',
        icon: '🚶',
        breakdown: 'guatá + porang',
        explanation: ['guatá = caminhar, caminhada', 'porang = bonito'],
        literal: '"Caminhada bonita"',
        color: 'green'
    },
    {
        id: 'jaguatirica',
        tupi: 'Jaguatirica',
        pt: 'Felino',
        type: 'Fauna',
        icon: '🐆',
        breakdown: 'îagûara + tyryk',
        explanation: ['îagûara = onça', 'tyryk = escapulir, fugir'],
        literal: '"Onça que escapule / Onça arisca"',
        color: 'yellow'
    },
    {
        id: 'grauna',
        tupi: 'Graúna',
        pt: 'Pássaro',
        type: 'Fauna',
        icon: '🦅',
        breakdown: 'gûyrá + un',
        explanation: ['gûyrá = pássaro', 'un = preto'],
        literal: '"Pássaro preto"',
        color: 'gray'
    },
    {
        id: 'tucuruvi',
        tupi: 'Tucuruvi',
        pt: 'Bairro de SP',
        type: 'Topônimo',
        icon: '🦗',
        breakdown: 'tukura + oby',
        explanation: ['tukura = gafanhoto', 'oby = verde'],
        literal: '"Gafanhoto verde"',
        color: 'lime'
    },
    {
        id: 'tapirape',
        tupi: 'Tapirapé',
        pt: 'Grupo Indígena',
        type: 'Etnia',
        icon: '🌌',
        breakdown: "tapi'ira + pé",
        explanation: ["tapi'ira = anta", 'pé = caminho'],
        literal: '"Caminho de antas" (Via Láctea)',
        color: 'purple'
    },
    {
        id: 'itaipu',
        tupi: 'Itaipu',
        pt: 'Usina Hidrelétrica',
        type: 'Topônimo',
        icon: '🌊',
        breakdown: "itá + 'y + pu",
        explanation: ['itá = pedra', "'y = rio/água", 'pu = barulho'],
        literal: '"Barulho do rio das pedras"',
        color: 'blue'
    },
    {
        id: 'ajuruoca',
        tupi: 'Ajuruoca',
        pt: 'Localidade de MG',
        type: 'Topônimo',
        icon: '🦜',
        breakdown: 'aîuru + oka',
        explanation: ['aîuru = papagaio', 'oka = casa'],
        literal: '"Casa de papagaios"',
        color: 'amber'
    },
    {
        id: 'ipiranga',
        tupi: 'Ipiranga',
        pt: 'Bairro de SP',
        type: 'Topônimo',
        icon: '🩸',
        breakdown: "'y + pyrang",
        explanation: ["'y = rio", 'pyrang = vermelho'],
        literal: '"Rio vermelho"',
        color: 'red'
    },
    {
        id: 'iraci',
        tupi: 'Iraci',
        pt: 'Nome Próprio',
        type: 'Nome',
        icon: '🍯',
        breakdown: 'eíra + sy',
        explanation: ['eíra = mel', 'sy = mãe'],
        literal: '"Mãe do mel (abelha)"',
        color: 'orange'
    },
    {
        id: 'ipanema',
        tupi: 'Ipanema',
        pt: 'Bairro do RJ',
        type: 'Topônimo',
        icon: '🏖️',
        breakdown: 'upaba + nem',
        explanation: ['upaba = lago', 'nem = fedorento'],
        literal: '"Lago fedorento" (originalmente)',
        color: 'cyan'
    },
    {
        id: 'urucu',
        tupi: 'Urucu',
        pt: 'Planta',
        type: 'Flora',
        icon: '🔴',
        breakdown: 'uruku',
        explanation: ['Planta que fornece tinta vermelha para tingir o corpo'],
        literal: '"Urucu"',
        color: 'red'
    },
    {
        id: 'bartira',
        tupi: 'Bartira',
        pt: 'Nome Próprio',
        type: 'Nome',
        icon: '🌺',
        breakdown: 'mbotyra',
        explanation: ['= flor'],
        literal: '"Flor"',
        color: 'pink'
    },
    {
        id: 'taquarenduva',
        tupi: 'Taquarenduva',
        pt: 'Município de SP',
        type: 'Topônimo',
        icon: '🎋',
        breakdown: "takûara + e'e + tyba",
        explanation: ['takûara = bambu', "e'e = doce", 'tyba = ajuntamento'],
        literal: '"Ajuntamento de taquara-doce"',
        color: 'green'
    },
    {
        id: 'tiquinho',
        tupi: 'Tiquinho',
        pt: 'Expressão',
        type: 'Expressão',
        icon: '💧',
        breakdown: 'tykyra',
        explanation: ['= gota, pingo'],
        literal: '"Gota"',
        color: 'blue'
    },
    {
        id: 'mantiqueira',
        tupi: 'Mantiqueira',
        pt: 'Serra de MG',
        type: 'Topônimo',
        icon: '⛰️',
        breakdown: 'amana + tykyra',
        explanation: ['amana = chuva', 'tykyra = gota'],
        literal: '"Gotas de chuva"',
        color: 'indigo'
    },
    {
        id: 'ibiara',
        tupi: 'Ibiara',
        pt: 'Localidade da PB',
        type: 'Topônimo',
        icon: '📉',
        breakdown: 'yby + ar',
        explanation: ['yby = terra', 'ar = cair'],
        literal: '"Terra caída"',
        color: 'amber'
    },
    {
        id: 'ubaporanga',
        tupi: 'Ubaporanga',
        pt: 'Localidade de MG',
        type: 'Topônimo',
        icon: '⛅',
        breakdown: 'ybaka + porang',
        explanation: ['ybaka = céu', 'porang = bonito'],
        literal: '"Céu bonito"',
        color: 'cyan'
    }
];

export const EXERCISE_11: TranslationExercise[] = [
    {
        id: 1,
        question: "O menino fez feder a casa.",
        tip: "kunumi + mo-nem (fazer feder) + oka",
        answers: ["Kunumi o-mo-nem oka.", "Kunumi omonem oka"]
    },
    {
        id: 2,
        question: "A onça fez escapulir o menino.",
        tip: "îagûara + mo-tyryk (fazer escapulir) + kunumi. T -> ND",
        answers: ["Îagûara o-mo-ndyryk kunumi.", "Îagûara omondyryk kunumi"]
    },
    {
        id: 3,
        question: "Avermelhei a mãe de Pedro com urucu.",
        tip: "A-mo-pyrang (fazer ficar vermelho) Pedro sy uruku pupé. (pyrang tem nasal 'ng', não muda P)",
        answers: ["A-mo-pyrang Pedro sy uruku pupé.", "A-mo-pyrang Pedro-sy uruku pupé", "Amopyrang Pedro sy uruku pupé"]
    },
    {
        id: 4,
        question: "O barulho das antas fez escapulir os pássaros verdes.",
        tip: "tapi'ira pu (barulho das antas) + mo-tyryk (fazer escapulir) + gûyrá-oby-etá. T -> ND",
        answers: ["Tapi'ira pu o-mo-ndyryk gûyrá-oby-etá.", "Tapi'ira-pu o-mo-ndyryk gûyrá-oby-etá"]
    },
    {
        id: 5,
        question: "Embelezei a casa com as flores vermelhas.",
        tip: "A-mo-porang (fazer bonito) oka mbotyra pyrang pupé. (porang tem nasal 'ng', não muda P)",
        answers: ["A-mo-porang oka mbotyra pyrang pupé.", "Amoporang oka mbotyra pyrang pupé"]
    },
    {
        id: 6,
        question: "Pretejei o menino com a água escura.",
        tip: "A-mo-un (fazer preto) kunumi 'y un pupé.",
        answers: ["A-mo-un kunumi 'y un pupé.", "Amoun kunumi 'y un pupé"]
    },
    {
        id: 7,
        question: "As flores esverdeiam o lago bonito.",
        tip: "Mbotyra o-mo-oby (fazem verde) upaba porang.",
        answers: ["Mbotyra o-mo-oby upaba porang.", "Mbotyra omooby upaba porang"]
    },
    {
        id: 8,
        question: "As flores embelezam o caminho das onças.",
        tip: "Mbotyra o-mo-porang (fazem bonito) îagûara pé.",
        answers: ["Mbotyra o-mo-porang îagûara pé.", "Mbotyra omoporang îagûara pé"]
    },
    {
        id: 9,
        question: "O barulho das antas faz andar o menino.",
        tip: "Tapi'ira pu o-mo-guatá (faz andar) kunumi.",
        answers: ["Tapi'ira pu o-mo-guatá kunumi.", "Tapi'ira-pu o-mo-guatá kunumi"]
    },
    {
        id: 10,
        question: "O mel adoça a água.",
        tip: "Eíra o-mo-e'e (faz doce) 'y.",
        answers: ["Eíra o-mo-e'e 'y.", "Eíra omoe'e 'y"]
    },
    {
        id: 11,
        question: "A gota de chuva caiu do céu.",
        tip: "Amana tykyra (gota de chuva) o-kuî ybaka suí.",
        answers: ["Amana tykyra o-kuî ybaka suí.", "Amana-tykyra o-kuî ybaka suí"]
    }
];

export const EXERCISE_12: TranslationExercise[] = [
    {
        id: 1,
        question: "Cidade paulista cujo nome, em tupi, significa “ajuntamento de sal”",
        tip: "sal: îukyra + tyba",
        answers: ["Juquitiba", "Îukytiba"]
    },
    {
        id: 2,
        question: "Cidade paulista cujo nome, em tupi, significa “ajuntamento de cobras”",
        tip: "cobra: mboîa + tyba",
        answers: ["Boituva", "Mboîtyba"]
    },
    {
        id: 3,
        question: "Nome de cidade paulista que significa “ajuntamento de araçás”",
        tip: "araçá + tyba",
        answers: ["Araçatuba"]
    },
    {
        id: 4,
        question: "Nome de cidade paulista que significa “ajuntamento de mata dura”, ou seja, de cerrado",
        tip: "mata: ka'a, duro: atã + tyba (T -> ND)",
        answers: ["Catanduva", "Ka'atandyba"]
    },
    {
        id: 5,
        question: "Nome de localidade de Minas Gerais que significa “reunião de emas”",
        tip: "ema: nhandu + tyba",
        answers: ["Nhandutiba"]
    },
    {
        id: 6,
        question: "Nome de estrada do município de São Bernardo do Campo, SP, que significa “ajuntamento de taquara-faca”",
        tip: "faca: kysé + takûara + tyba",
        answers: ["Itaquaquecetuba", "Taquequicetuba"]
    },
    {
        id: 7,
        question: "Nome de rua de São Paulo que significa “ajuntamento de sapé”",
        tip: "sapé + tyba",
        answers: ["Sapetuba"]
    },
    {
        id: 8,
        question: "Nome de serra do Rio de Janeiro que significa “ajuntamento de palmeiras”",
        tip: "palmeira: pindoba + tyba",
        answers: ["Pindotiba", "Pindabatiba"]
    },
    {
        id: 9,
        question: "Nome de cidade paulista que significa “reunião de caraguatás”",
        tip: "caraguatá + tyba",
        answers: ["Caraguatatuba"]
    },
    {
        id: 10,
        question: "Nome de vila de São Paulo que significa “reunião de andorinhas”",
        tip: "andorinha: taperá + tyba",
        answers: ["Taperatiba"]
    }
];
