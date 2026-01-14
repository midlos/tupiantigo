
import { VocabItem, TranslationExercise } from '../types';

export const VOCABULARY_L2: VocabItem[] = [
    {
        id: 'avare',
        tupi: 'Avaré',
        pt: 'Município de SP',
        type: 'Topônimo',
        icon: '✝️',
        breakdown: 'abaré',
        explanation: ['= padre'],
        literal: '"Padre"',
        color: 'purple'
    },
    {
        id: 'coroca',
        tupi: 'Coroca',
        pt: 'Velha ranzinza',
        type: 'Expressão',
        icon: '👵',
        breakdown: 'kuruk',
        explanation: ['= resmungar, resmungão'],
        literal: '"Aquela que resmunga"',
        color: 'gray'
    },
    {
        id: 'itabira',
        tupi: 'Itabira',
        pt: 'Cidade de MG',
        type: 'Topônimo',
        icon: '⛰️',
        breakdown: 'itá + byr',
        explanation: ['itá = pedra', 'byr = levantar-se, erguer-se'],
        literal: '"Pedra levantada"',
        color: 'gray'
    },
    {
        id: 'itapecerica',
        tupi: 'Itapecerica',
        pt: 'Cidade de SP',
        type: 'Topônimo',
        icon: '⛷️',
        breakdown: 'itá + peb + syryk',
        explanation: ['itá = pedra', 'peb = achatado', 'syryk = escorregar'],
        literal: '"Pedra achatada escorregadia"',
        color: 'stone'
    },
    {
        id: 'comandacaia',
        tupi: 'Comandacaia',
        pt: 'Localidade da BA',
        type: 'Topônimo',
        icon: '🔥',
        breakdown: 'komandá + kaî',
        explanation: ['komandá = fava', 'kaî = queimar'],
        literal: '"Favas queimadas"',
        color: 'red'
    },
    {
        id: 'pirabebe',
        tupi: 'Pirabebé',
        pt: 'Peixe voador',
        type: 'Fauna',
        icon: '🐠',
        breakdown: 'pirá + bebé',
        explanation: ['pirá = peixe', 'bebé = voar'],
        literal: '"Peixe voador"',
        color: 'blue'
    },
    {
        id: 'pipoca',
        tupi: 'Pipoca',
        pt: 'Milho estourado',
        type: 'Alimento',
        icon: '🍿',
        breakdown: 'pira + pok',
        explanation: ['pira = pele', 'pok = estourar'],
        literal: '"Pele estourada"',
        color: 'yellow'
    },
    {
        id: 'vocoroca',
        tupi: 'Voçoroca',
        pt: 'Erosão',
        type: 'Fenômeno',
        icon: '🏜️',
        breakdown: 'yby + sorok',
        explanation: ['yby = terra', 'sorok = rasgar'],
        literal: '"Terra rasgada"',
        color: 'amber'
    },
    {
        id: 'boicucanga',
        tupi: 'Boiçucanga',
        pt: 'Município de SP',
        type: 'Topônimo',
        icon: '☠️',
        breakdown: 'mboîa + usu + kanga',
        explanation: ['mboîa = cobra', 'usu = grande (aumentativo)', 'kanga = esqueleto, osso'],
        literal: '"Esqueleto de cobra grande"',
        color: 'green'
    },
    {
        id: 'tocantins',
        tupi: 'Tocantins',
        pt: 'Estado brasileiro',
        type: 'Topônimo',
        icon: '🦜',
        breakdown: 'tukana + ti',
        explanation: ['tukana = tucano', 'ti = bico, nariz, saliência'],
        literal: '"Bico de tucano"',
        color: 'orange'
    }
];

export const MATCH_PAIRS_L2 = [
    { tupi: 'abaré', pt: 'padre' },
    { tupi: 'kuruk', pt: 'resmungar' },
    { tupi: 'byr', pt: 'erguer-se' },
    { tupi: 'syryk', pt: 'escorregar' },
    { tupi: 'kaî', pt: 'queimar' },
    { tupi: 'bebé', pt: 'voar' },
    { tupi: 'pok', pt: 'estourar' },
    { tupi: 'sorok', pt: 'rasgar' },
    { tupi: 'kanga', pt: 'esqueleto' },
    { tupi: 'ti', pt: 'bico' }
];

export const EXERCISE_3: TranslationExercise[] = [
    { 
        id: 1, 
        question: "A-sem Nhoesembé suí.", 
        tip: "sem (sair), suí (de/proveniência)", 
        answers: ["Saio de Nhoesembé.", "Saio de Nhoesembé", "Eu saio de Nhoesembé."] 
    },
    { 
        id: 2, 
        question: "Ere-só îakaré 'y-pe.", 
        tip: "só (ir), îakaré (jacaré), 'y (rio), -pe (para)", 
        answers: ["Tu vais ao rio dos jacarés.", "Você vai ao rio dos jacarés.", "Vais ao rio dos jacarés.", "Tu vais para o rio dos jacarés."] 
    },
    { 
        id: 3, 
        question: "Oro-pytá siri 'y-pe.", 
        tip: "pytá (ficar), siri (siri), oro- (nós excl.)", 
        answers: ["Nós ficamos no rio dos siris.", "Nós ficamos no rio dos siris (excl).", "Ficamos no rio dos siris."] 
    },
    { 
        id: 4, 
        question: "A-nhe'eng peró supé.", 
        tip: "nhe'eng (falar), peró (português), supé (para)", 
        answers: ["Falo ao português.", "Eu falo ao português.", "Falo para o português."] 
    },
    { 
        id: 5, 
        question: "Ere-nhe'eng abá supé.", 
        tip: "nhe'eng (falar), abá (índio/homem)", 
        answers: ["Falas ao índio.", "Tu falas ao índio.", "Falas para o índio.", "Você fala para o índio."] 
    },
    { 
        id: 6, 
        question: "Pe-îkó 'y pupé.", 
        tip: "ikó (estar), pupé (dentro)", 
        answers: ["Vós estais dentro do rio.", "Vocês estão dentro do rio.", "Estais dentro do rio.", "Vós estais dentro da água."] 
    },
    { 
        id: 7, 
        question: "Morubixaba supé pe-nhe'eng.", 
        tip: "morubixaba (cacique), nhe'eng (falar)", 
        answers: ["Falais ao cacique.", "Vós falais ao cacique.", "Vocês falam ao cacique.", "Falais para o cacique."] 
    },
    { 
        id: 8, 
        question: "Îakaré o-sem 'y suí.", 
        tip: "sem (sair), suí (de)", 
        answers: ["O jacaré sai do rio.", "O jacaré sai da água."] 
    },
    { 
        id: 9, 
        question: "Pe-sem tatu kûara suí.", 
        tip: "sem (sair), kûara (toca), suí (de)", 
        answers: ["Saís da toca do tatu.", "Vós saís da toca do tatu.", "Vocês saem da toca do tatu."] 
    },
    { 
        id: 10, 
        question: "Ka'a-pe ere-só.", 
        tip: "só (ir), ka'a (mato)", 
        answers: ["Vais ao mato.", "Tu vais ao mato.", "Você vai ao mato.", "Vais para o mato."] 
    }
];

export const EXERCISE_4: TranslationExercise[] = [
    { 
        id: 1, 
        question: "Fico em Nhoesembé.", 
        tip: "pytá (ficar)", 
        answers: ["A-pytá Nhoesembé-pe.", "Apytá Nhoesembé-pe", "A-îkó Nhoesembé-pe."] 
    },
    { 
        id: 2, 
        question: "Ficamos (incl.) no rio.", 
        tip: "pytá (ficar), incl -> îa-", 
        answers: ["Îa-pytá 'y-pe.", "Îapytá 'y-pe", "Îa-îkó 'y-pe."] 
    },
    { 
        id: 3, 
        question: "Moramos (excl.) em Nhoesembé.", 
        tip: "ikó (morar), excl -> oro-", 
        answers: ["Oro-îkó Nhoesembé-pe.", "Oroîkó Nhoesembé-pe", "Oro-pytá Nhoesembé-pe."] 
    },
    { 
        id: 4, 
        question: "Ficas dentro do navio.", 
        tip: "pytá (ficar), ygarusu (navio), pupé (dentro)", 
        answers: ["Ere-pytá ygarusu pupé.", "Erepytá ygarusu pupé", "Ere-îkó ygarusu pupé."] 
    },
    { 
        id: 5, 
        question: "Saímos (incl.) da canoa.", 
        tip: "sem (sair), ygara (canoa), suí (de)", 
        answers: ["Îa-sem ygara suí.", "Îasem ygara suí"] 
    },
    { 
        id: 6, 
        question: "Falaste aos índios.", 
        tip: "nhe'eng (falar), abá (índio), supé (para)", 
        answers: ["Ere-nhe'eng abá supé.", "Erenhe'eng abá supé"] 
    },
    { 
        id: 7, 
        question: "Os índios falam a Maria.", 
        tip: "abá (índios), nhe'eng (falar)", 
        answers: ["Abá o-nhe'eng Maria supé.", "Abá onhe'eng Maria supé"] 
    },
    { 
        id: 8, 
        question: "Ficamos (incl.) dentro do navio.", 
        tip: "pytá/ikó (ficar), ygarusu (navio)", 
        answers: ["Îa-pytá ygarusu pupé.", "Îa-îkó ygarusu pupé.", "Îapytá ygarusu pupé"] 
    },
    { 
        id: 9, 
        question: "Pedro está dentro do navio.", 
        tip: "ikó (estar)", 
        answers: ["Pedro o-îkó ygarusu pupé.", "Pedro oîkó ygarusu pupé"] 
    },
    { 
        id: 10, 
        question: "Saio da mata.", 
        tip: "sem (sair), ka'a (mato)", 
        answers: ["A-sem ka'a suí.", "Asem ka'a suí"] 
    }
];

export const EXERCISE_5: TranslationExercise[] = [
    { 
        id: 1, 
        question: "O tucano ergueu-se da terra. Voou para a mata.", 
        tip: "tukana (tucano) + byr (erguer-se) + yby (terra) ... bebé (voar) + ka'a (mato)", 
        answers: ["Tukana o-byr yby suí. O-bebé ka'a-pe.", "Tukana obyr yby suí. Obebé ka'a-pe."] 
    },
    { 
        id: 2, 
        question: "O padre escorregou na pedra. Resmungou, ergueu-se e foi para o rio.", 
        tip: "abaré + syryk + itá ... kuruk + byr + só + 'y", 
        answers: ["Abaré o-syryk itá-pe. O-kuruk, o-byr, o-só 'y-pe.", "Abaré osyryk itá-pe. Okuruk, obyr, osó 'y-pe."] 
    },
    { 
        id: 3, 
        question: "O esqueleto do tucano está na terra.", 
        tip: "tukana kanga (esqueleto) + ikó + yby", 
        answers: ["Tukana kanga o-îkó yby-pe.", "Tukana kanga oîkó yby-pe"] 
    },
    { 
        id: 4, 
        question: "A pele da cobra estourou.", 
        tip: "mboîa (cobra) + pira (pele) + pok (estourar)", 
        answers: ["Mboîa pira o-pok.", "Mboîa pira opok"] 
    },
    { 
        id: 5, 
        question: "O nariz do padre é achatado.", 
        tip: "abaré + ti (nariz) + i peb (é achatado)", 
        answers: ["Abaré ti i peb.", "Abaré-ti i peb"] 
    },
    { 
        id: 6, 
        question: "A casa queimou.", 
        tip: "oka (casa) + kaî (queimar)", 
        answers: ["Oka o-kaî.", "Oka okaî"] 
    },
    { 
        id: 7, 
        question: "As favas achatadas estouraram.", 
        tip: "komandá (fava) + peb (achatado) + pok (estourar)", 
        answers: ["Komandá peb o-pok.", "Komandá-peb o-pok", "Komandá-peb opok"] 
    },
    { 
        id: 8, 
        question: "O tucano grande dormiu.", 
        tip: "tukana (tucano) + gûasu (grande) + ker (dormir)", 
        answers: ["Tukana gûasu o-ker.", "Tukana-gûasu o-ker", "Tukana-gûasu oker"] 
    },
    { 
        id: 9, 
        question: "A casa de carijós queimou.", 
        tip: "kariîó (carijó) + oka (casa) + kaî (queimar)", 
        answers: ["Kariîó oka o-kaî.", "Kariîó oka okaî"] 
    },
    { 
        id: 10, 
        question: "Escorreguei dentro do rio das pedras.", 
        tip: "syryk (escorregar) + itá (pedra) + 'y (rio) + pupé (dentro)", 
        answers: ["A-syryk itá 'y pupé.", "Asyryk itá 'y pupé"] 
    }
];
