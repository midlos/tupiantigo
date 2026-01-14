
import React, { useState } from 'react';
import { PRONOUNS, VERBS } from '../constants';
import { Verb } from '../types';

interface SectionConjugationProps {
    onNext: () => void;
}

const ConjugationCard: React.FC<{
    icon: string;
    title: string;
    colorClasses: string;
    children: React.ReactNode;
}> = ({ icon, title, colorClasses, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div 
            className={`rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent ${colorClasses}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex items-center justify-between">
                <div>
                    <span className="text-2xl mr-2">{icon}</span>
                    <span className="font-bold">{title}</span>
                </div>
                {!isOpen && <span className="text-gray-400 text-sm">clique</span>}
            </div>
            {isOpen && (
                <div className="mt-3 pt-3 border-t border-black/10 slide-in">
                    {children}
                </div>
            )}
        </div>
    );
};

export const SectionConjugation: React.FC<SectionConjugationProps> = ({ onNext }) => {
    const [selectedVerb, setSelectedVerb] = useState<Verb>(VERBS[0]);

    // Helper to determine Tupi conjugation (handling special 'ikó' case)
    const getTupiConjugation = (verbRoot: string, prefix: string) => {
        // Since all prefixes (a-, ere-, o-, oro-, îa-, pe-) end in a vowel,
        // and 'ikó' starts with an unstressed 'i', it becomes 'î' (semivowel).
        if (verbRoot === 'ikó') {
            return `${prefix}îkó`;
        }
        return `${prefix}${verbRoot}`;
    };

    // Helper to get Portuguese translation based on pronoun key
    const getPtTranslation = (pronounKey: string, ptConjs: Verb['pt']) => {
        switch (pronounKey) {
            case 'ixe': return `eu ${ptConjs.s1}`;
            case 'ende': return `tu ${ptConjs.s2}`;
            case 'ae_sing': return `ele ${ptConjs.s3}`;
            case 'ase': return `a gente ${ptConjs.s3}`;
            case 'ore': return `nós ${ptConjs.p1} (excl.)`;
            case 'iande': return `nós ${ptConjs.p1} (incl.)`;
            case 'pee': return `vós ${ptConjs.p2}`;
            case 'ae_plur': return `eles ${ptConjs.p3}`;
            default: return '';
        }
    };

    const tableData = PRONOUNS.map(pronoun => ({
        pt: pronoun.meaning,
        tupi: pronoun.label,
        prefix: pronoun.prefix,
        conj: getTupiConjugation(selectedVerb.root, pronoun.prefix),
        trans: getPtTranslation(pronoun.key, selectedVerb.pt)
    }));

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🔤 Verbos da Primeira Classe</h2>
            
            <p className="text-lg text-gray-700 mb-6 text-center">
                Observe a conjugação do verbo <strong className="text-black">nhe'eng (falar)</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8 items-start">
                {/* Singular Column + Asé */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-center font-bold text-gray-500 uppercase text-sm tracking-wider mb-2">Singular</h3>
                    
                    <ConjugationCard 
                        icon="👤" 
                        title="1ª pessoa singular" 
                        colorClasses="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 hover:border-blue-400"
                    >
                        <p className="text-xl"><strong className="text-green-700">ixé</strong> <strong className="text-amber-600">a-</strong><span className="text-black">nhe'eng</span></p>
                        <p className="text-gray-600">eu falo / eu falei</p>
                        <div className="mt-2 bg-white/50 rounded p-2">
                            <span className="text-sm text-gray-500">Prefixo:</span>
                            <span className="font-bold text-amber-600 text-lg ml-2">a-</span>
                        </div>
                    </ConjugationCard>

                    <ConjugationCard 
                        icon="👤" 
                        title="2ª pessoa singular" 
                        colorClasses="bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 hover:border-purple-400"
                    >
                        <p className="text-xl"><strong className="text-green-700">endé</strong> <strong className="text-amber-600">ere-</strong><span className="text-black">nhe'eng</span></p>
                        <p className="text-gray-600">tu falas / tu falaste</p>
                        <div className="mt-2 bg-white/50 rounded p-2">
                            <span className="text-sm text-gray-500">Prefixo:</span>
                            <span className="font-bold text-amber-600 text-lg ml-2">ere-</span>
                        </div>
                    </ConjugationCard>

                    <ConjugationCard 
                        icon="👤" 
                        title="3ª pessoa singular" 
                        colorClasses="bg-gradient-to-r from-green-50 to-green-100 text-green-800 hover:border-green-400"
                    >
                        <p className="text-xl"><strong className="text-green-700">a'e</strong> <strong className="text-amber-600">o-</strong><span className="text-black">nhe'eng</span></p>
                        <p className="text-gray-600">ele fala / ele falou</p>
                        <div className="mt-2 bg-white/50 rounded p-2">
                            <span className="text-sm text-gray-500">Prefixo:</span>
                            <span className="font-bold text-amber-600 text-lg ml-2">o-</span>
                        </div>
                    </ConjugationCard>

                    <ConjugationCard 
                        icon="👥👤" 
                        title="ASÉ (impessoal)" 
                        colorClasses="bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-800 hover:border-indigo-400"
                    >
                        <p className="text-xl"><strong className="text-green-700">asé</strong> <strong className="text-amber-600">o-</strong><span className="text-black">nhe'eng</span></p>
                        <p className="text-gray-600">a gente fala / fala-se</p>
                        <div className="mt-2 bg-white/50 rounded p-2">
                            <span className="text-sm text-gray-500">Prefixo:</span>
                            <span className="font-bold text-amber-600 text-lg ml-2">o-</span>
                            <span className="text-sm text-gray-500 ml-2">(mesmo da 3ª pessoa!)</span>
                        </div>
                    </ConjugationCard>
                </div>

                {/* Plural Column */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-center font-bold text-gray-500 uppercase text-sm tracking-wider mb-2">Plural</h3>

                    <ConjugationCard 
                        icon="👥" 
                        title="1ª pessoa plural (EXCL.)" 
                        colorClasses="bg-gradient-to-r from-red-50 to-red-100 text-red-800 hover:border-red-400"
                    >
                        <p className="text-xl"><strong className="text-green-700">oré</strong> <strong className="text-amber-600">oro-</strong><span className="text-black">nhe'eng</span></p>
                        <p className="text-gray-600">nós falamos (excluindo você)</p>
                        <div className="mt-2 bg-white/50 rounded p-2">
                            <span className="text-sm text-gray-500">Prefixo:</span>
                            <span className="font-bold text-amber-600 text-lg ml-2">oro-</span>
                        </div>
                    </ConjugationCard>

                    <ConjugationCard 
                        icon="👥" 
                        title="1ª pessoa plural (INCL.)" 
                        colorClasses="bg-gradient-to-r from-teal-50 to-teal-100 text-teal-800 hover:border-teal-400"
                    >
                        <p className="text-xl"><strong className="text-green-700">îandé</strong> <strong className="text-amber-600">îa-</strong><span className="text-black">nhe'eng</span></p>
                        <p className="text-gray-600">nós falamos (incluindo você)</p>
                        <div className="mt-2 bg-white/50 rounded p-2">
                            <span className="text-sm text-gray-500">Prefixo:</span>
                            <span className="font-bold text-amber-600 text-lg ml-2">îa-</span>
                        </div>
                    </ConjugationCard>

                    <ConjugationCard 
                        icon="👥" 
                        title="2ª pessoa plural" 
                        colorClasses="bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 hover:border-orange-400"
                    >
                        <p className="text-xl"><strong className="text-green-700">pee</strong> <strong className="text-amber-600">pe-</strong><span className="text-black">nhe'eng</span></p>
                        <p className="text-gray-600">vós falais / vós falastes</p>
                        <div className="mt-2 bg-white/50 rounded p-2">
                            <span className="text-sm text-gray-500">Prefixo:</span>
                            <span className="font-bold text-amber-600 text-lg ml-2">pe-</span>
                        </div>
                    </ConjugationCard>

                    <ConjugationCard 
                        icon="👥👥" 
                        title="3ª pessoa plural" 
                        colorClasses="bg-gradient-to-r from-pink-50 to-pink-100 text-pink-800 hover:border-pink-400"
                    >
                        <p className="text-xl"><strong className="text-green-700">a'e</strong> <strong className="text-amber-600">o-</strong><span className="text-black">nhe'eng</span></p>
                        <p className="text-gray-600">eles falam / eles falaram</p>
                        <div className="mt-2 bg-white/50 rounded p-2">
                            <span className="text-sm text-gray-500">Prefixo:</span>
                            <span className="font-bold text-amber-600 text-lg ml-2">o-</span>
                        </div>
                    </ConjugationCard>
                </div>
            </div>

            {/* Prefix Summary */}
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-amber-800 mb-4">📋 Resumo dos Prefixos:</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Singular */}
                    <div>
                        <h4 className="font-bold text-amber-700 mb-3 text-center">Singular</h4>
                        <div className="space-y-3">
                            <div className="bg-white rounded-lg p-3 text-center shadow">
                                <span className="text-2xl font-bold text-green-700">a-</span>
                                <p className="text-sm text-gray-600">eu</p>
                            </div>
                            <div className="bg-white rounded-lg p-3 text-center shadow">
                                <span className="text-2xl font-bold text-green-700">ere-</span>
                                <p className="text-sm text-gray-600">tu</p>
                            </div>
                            <div className="bg-white rounded-lg p-3 text-center shadow">
                                <span className="text-2xl font-bold text-green-700">o-</span>
                                <p className="text-sm text-gray-600">ele/ela</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Plural */}
                    <div>
                        <h4 className="font-bold text-amber-700 mb-3 text-center">Plural</h4>
                        <div className="space-y-3">
                            <div className="bg-white rounded-lg p-3 text-center shadow">
                                <span className="text-2xl font-bold text-green-700">oro-</span>
                                <p className="text-sm text-gray-600">nós (excl.)</p>
                            </div>
                            <div className="bg-white rounded-lg p-3 text-center shadow">
                                <span className="text-2xl font-bold text-green-700">îa-</span>
                                <p className="text-sm text-gray-600">nós (incl.)</p>
                            </div>
                            <div className="bg-white rounded-lg p-3 text-center shadow">
                                <span className="text-2xl font-bold text-green-700">pe-</span>
                                <p className="text-sm text-gray-600">vós</p>
                            </div>
                            <div className="bg-white rounded-lg p-3 text-center shadow">
                                <span className="text-2xl font-bold text-green-700">o-</span>
                                <p className="text-sm text-gray-600">eles/elas</p>
                            </div>
                            <div className="bg-white rounded-lg p-3 text-center shadow">
                                <span className="text-2xl font-bold text-green-700">o-</span>
                                <p className="text-sm text-gray-600">a gente (asé)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conjugation Table */}
            <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                <div className="bg-green-800 text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-center">Tabela de Conjugação</h3>
                    
                    {/* Verb Selector */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="verb-select" className="text-green-100 font-semibold text-sm">Verbo:</label>
                        <select 
                            id="verb-select"
                            value={selectedVerb.root}
                            onChange={(e) => {
                                const verb = VERBS.find(v => v.root === e.target.value);
                                if (verb) setSelectedVerb(verb);
                            }}
                            className="bg-green-700 text-white border border-green-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            {VERBS.map(verb => (
                                <option key={verb.root} value={verb.root}>
                                    {verb.root.toUpperCase()} ({verb.meaning})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-white">
                        <thead>
                            <tr className="bg-green-700 text-white border-b border-green-800">
                                <th className="p-3 font-semibold text-sm uppercase tracking-wider">Português</th>
                                <th className="p-3 font-semibold text-sm uppercase tracking-wider">Pessoa (Tupi)</th>
                                <th className="p-3 font-semibold text-sm uppercase tracking-wider">Prefixo</th>
                                <th className="p-3 font-semibold text-sm uppercase tracking-wider">Forma Tupi</th>
                                <th className="p-3 font-semibold text-sm uppercase tracking-wider">Tradução</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {tableData.map((row, index) => (
                                <tr key={index} className="hover:bg-amber-50 transition-colors even:bg-gray-50">
                                    <td className="p-3 text-gray-800 font-medium">{row.pt}</td>
                                    <td className="p-3 text-green-700 font-bold">{row.tupi}</td>
                                    <td className="p-3">
                                        <span className={`inline-block px-2 py-1 rounded text-sm font-bold ${
                                            ['a-', 'ere-', 'o-'].includes(row.prefix) ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                                        }`}>
                                            {row.prefix}
                                        </span>
                                    </td>
                                    <td className="p-3 font-mono text-gray-700">{row.conj}</td>
                                    <td className="p-3 text-gray-600 italic">{row.trans}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Nós Inclusivo/Exclusivo
                </button>
            </div>
        </div>
    );
};
