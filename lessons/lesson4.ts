
import { VocabItem, TranslationExercise } from '../types';

export const VOCABULARY_L4: VocabItem[] = [
    {
        id: 'potengi',
        tupi: 'Potengi',
        pt: 'Rio do RN',
        type: 'Topônimo',
        icon: '🦐',
        breakdown: 'poti + îy',
        explanation: ['poti = camarão', 'îy = rio'],
        literal: '"Rio dos camarões"',
        color: 'red'
    },
    {
        id: 'tiete',
        tupi: 'Tietê',
        pt: 'Rio de SP',
        type: 'Topônimo',
        icon: '🌊',
        breakdown: 'ty + eté',
        explanation: ['ty = rio, água', 'eté = muito bom, verdadeiro, genuíno'],
        literal: '"Rio verdadeiro / Rio muito bom"',
        color: 'blue'
    },
    {
        id: 'tijuca',
        tupi: 'Tijuca',
        pt: 'Bairro/Rio no RJ',
        type: 'Topônimo',
        icon: '🤢',
        breakdown: 'ty + îuk',
        explanation: ['ty = rio, água', 'îuk = podre'],
        literal: '"Rio podre / Água podre"',
        color: 'green'
    },
    {
        id: 'paraiba',
        tupi: 'Paraíba',
        pt: 'Estado/Rio',
        type: 'Topônimo',
        icon: '🌊',
        breakdown: 'pará + aíb',
        explanation: ['pará = rio grande, mar', 'aíb = ruim, mau'],
        literal: '"Rio ruim"',
        color: 'gray'
    },
    {
        id: 'paranapanema',
        tupi: 'Paranapanema',
        pt: 'Rio (SP/PR)',
        type: 'Topônimo',
        icon: '🏞️',
        breakdown: 'paranã + panem',
        explanation: ['paranã = mar ou rio grande', 'panem = imprestável, azarado'],
        literal: '"Rio imprestável"',
        color: 'amber'
    },
    {
        id: 'bauru',
        tupi: 'Bauru',
        pt: 'Município de SP',
        type: 'Topônimo',
        icon: '🧺',
        breakdown: "'ybá + uru",
        explanation: ["'ybá = fruta", 'uru = vasilha, cesto'],
        literal: '"Cesto de frutas"',
        color: 'yellow'
    },
    {
        id: 'peruibe',
        tupi: 'Peruíbe',
        pt: 'Município de SP',
        type: 'Topônimo',
        icon: '🦈',
        breakdown: "iperu + 'y + -pe",
        explanation: ['iperu = tubarão', "'y = rio", "-pe = em (no)"],
        literal: '"No rio dos tubarões"',
        color: 'cyan'
    }
];

export const MATCH_PAIRS_L4 = [
    { tupi: 'poti', pt: 'camarão' },
    { tupi: 'îuk', pt: 'podre' },
    { tupi: 'aíb', pt: 'ruim' },
    { tupi: 'panem', pt: 'imprestável' },
    { tupi: 'eté', pt: 'verdadeiro' }
];

export const EXERCISE_7: TranslationExercise[] = [
    { 
        id: 1, 
        question: "O homem fedorento é bom.", 
        tip: "homem = abá, fedorento = nem, bom = katu. 'nem' termina em consoante (m).", 
        answers: ["Abá-nem-a i katu.", "Abá-nema i katu", "Abá nem-a i katu"] 
    },
    { 
        id: 2, 
        question: "O menino pequeno é bonito.", 
        tip: "menino = kunumi, pequeno = miri, bonito = porang.", 
        answers: ["Kunumi miri i porang.", "Kunumi-miri i porang"] 
    },
    { 
        id: 3, 
        question: "O menino bonito é pequeno.", 
        tip: "menino = kunumi, bonito = porang, pequeno = miri. 'porang' termina em consoante.", 
        answers: ["Kunumi-porang-a i miri.", "Kunumi-poranga i miri"] 
    },
    { 
        id: 4, 
        question: "O rio vermelho é sujo.", 
        tip: "rio = 'y, vermelho = pyrang, sujo = ky'a. 'pyrang' termina em consoante.", 
        answers: ["'Y-pyrang-a i ky'a.", "'Y-pyranga i ky'a", "Y-pyrang-a i ky'a"] 
    },
    { 
        id: 5, 
        question: "O rio sujo é vermelho.", 
        tip: "rio = 'y, sujo = ky'a, vermelho = pyrang.", 
        answers: ["'Y-ky'a i pyrang.", "'Y-ky'a i pyrang"] 
    },
    { 
        id: 6, 
        question: "O homem bonito é alto.", 
        tip: "homem = abá, bonito = porang, alto = puku. 'porang' termina em consoante.", 
        answers: ["Abá-porang-a i puku.", "Abá-poranga i puku"] 
    },
    { 
        id: 7, 
        question: "O homem alto é bonito.", 
        tip: "homem = abá, alto = puku, bonito = porang.", 
        answers: ["Abá puku i porang.", "Abá-puku i porang"] 
    },
    { 
        id: 8, 
        question: "A árvore pequena é vermelha.", 
        tip: "árvore = ybyrá, pequeno = miri, vermelho = pyrang.", 
        answers: ["Ybyrá miri i pyrang.", "Ybyrá-miri i pyrang"] 
    },
    { 
        id: 9, 
        question: "A árvore vermelha é pequena.", 
        tip: "árvore = ybyrá, vermelho = pyrang, pequeno = miri. 'pyrang' termina em consoante.", 
        answers: ["Ybyrá-pyrang-a i miri.", "Ybyrá-pyranga i miri"]
    }
];

export const EXERCISE_8: TranslationExercise[] = [
    { 
        id: 1, 
        question: "Poti i pyrang.", 
        tip: "poti (camarão), pyrang (vermelho)", 
        answers: ["O camarão é vermelho.", "O camarão é vermelho", "Camarão é vermelho"] 
    },
    { 
        id: 2, 
        question: "Poti o-'ytab ty-îuka pupé.", 
        tip: "'ytab (nadar), ty-îuka (rio podre), pupé (dentro)", 
        answers: ["O camarão nada dentro do rio podre.", "O camarão nada no rio podre.", "O camarão nada na água podre."] 
    },
    { 
        id: 3, 
        question: "'Ybá o-kuî ybyrá suí.", 
        tip: "'ybá (fruta), kuî (cair), ybyrá (árvore), suí (de)", 
        answers: ["A fruta caiu da árvore.", "A fruta cai da árvore."] 
    },
    { 
        id: 4, 
        question: "'Ybá i îuk.", 
        tip: "'ybá (fruta), îuk (podre)", 
        answers: ["A fruta é podre.", "A fruta está podre."] 
    },
    { 
        id: 5, 
        question: "Kunumi-aíb-a o-só pará-gûasu-pe.", 
        tip: "kunumi-aíb-a (menino mau), pará-gûasu (rio grande/mar)", 
        answers: ["O menino mau vai para o rio grande.", "O menino ruim vai para o rio grande.", "O menino mau vai ao rio grande.", "O menino mau vai para o mar grande."] 
    },
    { 
        id: 6, 
        question: "Abá-panema o-ker pirá-îy-pe.", 
        tip: "abá-panema (homem imprestável), pirá-îy (rio de peixe)", 
        answers: ["O homem imprestável dorme no rio dos peixes.", "O homem azarado dorme no rio dos peixes."] 
    },
    { 
        id: 7, 
        question: "Iperu o-sem paraná suí.", 
        tip: "iperu (tubarão), paraná (mar/rio grande)", 
        answers: ["O tubarão sai do mar.", "O tubarão saiu do mar.", "O tubarão sai do rio grande."] 
    },
    { 
        id: 8, 
        question: "'Ybá-îuk-a o-îkó uru pupé.", 
        tip: "'ybá-îuk-a (fruta podre), uru (cesto)", 
        answers: ["A fruta podre está dentro do cesto.", "A fruta podre está no cesto."] 
    },
    { 
        id: 9, 
        question: "Kunhã-aíb-a o-nhe'eng aba-panema supé.", 
        tip: "kunhã (mulher), abá (homem), supé (para)", 
        answers: ["A mulher má fala para o homem imprestável.", "A mulher ruim fala para o homem imprestável."] 
    },
    { 
        id: 10, 
        question: "Iperu-panema o-'ytab pira-îy-pe.", 
        tip: "iperu (tubarão), panem (imprestável)", 
        answers: ["O tubarão imprestável nada no rio dos peixes.", "O tubarão imprestável nada no rio de peixe."] 
    }
];
