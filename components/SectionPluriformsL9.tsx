
import React, { useState } from 'react';

interface SectionPluriformsL9Props {
    onNext: () => void;
}

export const SectionPluriformsL9: React.FC<SectionPluriformsL9Props> = ({ onNext }) => {
    const [selectedVerb, setSelectedVerb] = useState<'apek' | 'epîak' | 'aûsub' | 'asab'>('apek');

    const verbs = {
        apek: { 
            root: 'apek', 
            meaning: 'sapecar', 
            icon: '🔥',
            pt: {
                s1: 'sapeco',
                s2: 'sapecas',
                s3: 'sapeca',
                p1: 'sapecamos',
                p2: 'sapecais',
                p3: 'sapecam'
            }
        },
        epîak: { 
            root: 'epîak', 
            meaning: 'ver', 
            icon: '👀', 
            pt: {
                s1: 'vejo',
                s2: 'vês',
                s3: 'vê',
                p1: 'vemos',
                p2: 'vedes',
                p3: 'veem'
            }
        },
        aûsub: { 
            root: 'aûsub', 
            meaning: 'amar', 
            icon: '❤️', 
            pt: {
                s1: 'amo',
                s2: 'amas',
                s3: 'ama',
                p1: 'amamos',
                p2: 'amais',
                p3: 'amam'
            }
        },
        asab: { 
            root: 'asab', 
            meaning: 'atravessar', 
            icon: '🚶', 
            pt: {
                s1: 'atravesso',
                s2: 'atravessas',
                s3: 'atravessa',
                p1: 'atravessamos',
                p2: 'atravessais',
                p3: 'atravessam'
            }
        }
    };

    const verb = verbs[selectedVerb];

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🔥 Verbos Pluriformes</h2>
            
            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 mb-8">
                <p className="text-lg text-gray-800">
                    Os <strong>verbos pluriformes</strong> recebem o pronome objetivo <strong>-s-</strong> (ou <em>-r-</em> em alguns casos que veremos depois) no modo indicativo.
                </p>
                <p className="text-sm text-gray-600 mt-2 italic">
                    Indicaremos esses verbos com um <strong>(s)</strong> no vocabulário. Ex: aûsub (s).
                </p>
            </div>

            {/* Verb Selector */}
            <div className="flex justify-center gap-2 mb-6 flex-wrap">
                {(Object.keys(verbs) as Array<keyof typeof verbs>).map((key) => (
                    <button
                        key={key}
                        onClick={() => setSelectedVerb(key)}
                        className={`px-4 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${
                            selectedVerb === key
                                ? 'bg-green-600 text-white shadow-lg scale-105'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        <span>{verbs[key].icon}</span>
                        {verbs[key].root.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Conjugation Table */}
            <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200 mb-8">
                <div className="bg-green-100 p-4 border-b border-green-200 text-center">
                    <h3 className="font-bold text-green-800 text-xl flex items-center justify-center gap-2">
                        <span>Conjugação de</span>
                        <span className="font-mono text-2xl uppercase">{verb.root}</span>
                        <span className="text-sm font-normal text-gray-600">({verb.meaning})</span>
                    </h3>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3">Pessoa</th>
                            <th className="px-6 py-3">Prefixo</th>
                            <th className="px-6 py-3 text-center text-red-600 font-bold text-lg">-S-</th>
                            <th className="px-6 py-3">Verbo</th>
                            <th className="px-6 py-3">Tradução</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-lg">
                        <tr className="hover:bg-green-50">
                            <td className="px-6 py-3 font-bold text-gray-700">ixé (eu)</td>
                            <td className="px-6 py-3 font-mono text-blue-600 font-bold">a-</td>
                            <td className="px-6 py-3 text-center font-mono text-red-600 font-bold">-s-</td>
                            <td className="px-6 py-3 font-mono font-bold text-green-700">{verb.root}</td>
                            <td className="px-6 py-3 text-gray-600 text-sm">eu {verb.pt.s1}</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-6 py-3 font-bold text-gray-700">endé (tu)</td>
                            <td className="px-6 py-3 font-mono text-blue-600 font-bold">ere-</td>
                            <td className="px-6 py-3 text-center font-mono text-red-600 font-bold">-s-</td>
                            <td className="px-6 py-3 font-mono font-bold text-green-700">{verb.root}</td>
                            <td className="px-6 py-3 text-gray-600 text-sm">tu {verb.pt.s2}</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-6 py-3 font-bold text-gray-700">a'e (ele)</td>
                            <td className="px-6 py-3 font-mono text-blue-600 font-bold">o-</td>
                            <td className="px-6 py-3 text-center font-mono text-red-600 font-bold">-s-</td>
                            <td className="px-6 py-3 font-mono font-bold text-green-700">{verb.root}</td>
                            <td className="px-6 py-3 text-gray-600 text-sm">ele {verb.pt.s3}</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-6 py-3 font-bold text-gray-700">oré (nós ex)</td>
                            <td className="px-6 py-3 font-mono text-blue-600 font-bold">oro-</td>
                            <td className="px-6 py-3 text-center font-mono text-red-600 font-bold">-s-</td>
                            <td className="px-6 py-3 font-mono font-bold text-green-700">{verb.root}</td>
                            <td className="px-6 py-3 text-gray-600 text-sm">nós {verb.pt.p1}</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-6 py-3 font-bold text-gray-700">îandé (nós in)</td>
                            <td className="px-6 py-3 font-mono text-blue-600 font-bold">îa-</td>
                            <td className="px-6 py-3 text-center font-mono text-red-600 font-bold">-s-</td>
                            <td className="px-6 py-3 font-mono font-bold text-green-700">{verb.root}</td>
                            <td className="px-6 py-3 text-gray-600 text-sm">nós {verb.pt.p1}</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-6 py-3 font-bold text-gray-700">pee (vós)</td>
                            <td className="px-6 py-3 font-mono text-blue-600 font-bold">pe-</td>
                            <td className="px-6 py-3 text-center font-mono text-red-600 font-bold">-s-</td>
                            <td className="px-6 py-3 font-mono font-bold text-green-700">{verb.root}</td>
                            <td className="px-6 py-3 text-gray-600 text-sm">vós {verb.pt.p2}</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-6 py-3 font-bold text-gray-700">a'e (eles)</td>
                            <td className="px-6 py-3 font-mono text-blue-600 font-bold">o-</td>
                            <td className="px-6 py-3 text-center font-mono text-red-600 font-bold">-s-</td>
                            <td className="px-6 py-3 font-mono font-bold text-green-700">{verb.root}</td>
                            <td className="px-6 py-3 text-gray-600 text-sm">eles {verb.pt.p3}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Example Box */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="font-bold text-blue-800 text-lg mb-4 text-center">Frases de Exemplo</h3>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="font-mono text-xl mb-1">
                            <span className="text-blue-600">A</span>-<span className="text-red-600 font-bold">s</span>-<span className="text-green-700 font-bold">apek</span> kunhã.
                        </p>
                        <p className="text-gray-600 italic">Sapeco a mulher.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="font-mono text-xl mb-1">
                            Kunumi <span className="text-blue-600">o</span>-<span className="text-red-600 font-bold">s</span>-<span className="text-green-700 font-bold">epîak</span> îagûara.
                        </p>
                        <p className="text-gray-600 italic">O menino vê a onça.</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Vocabulário
                </button>
            </div>
        </div>
    );
};
