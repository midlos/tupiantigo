
import React from 'react';

interface SectionCausativeL8Props {
    onNext: () => void;
}

export const SectionCausativeL8: React.FC<SectionCausativeL8Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">⚡ A Voz Causativa (MO-)</h2>
            
            <p className="text-lg text-gray-700 mb-8 text-center">
                A voz causativa ocorre quando o sujeito <strong>faz alguém</strong> praticar uma ação, em vez de praticá-la ele mesmo.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Intransitive */}
                <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                    <div className="text-center mb-4">
                        <span className="text-4xl">🚶</span>
                        <h3 className="text-xl font-bold text-gray-700 mt-2">Ação Direta</h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="font-mono text-lg font-bold text-green-700 mb-2">
                            Gûarini o-sem.
                        </p>
                        <p className="text-gray-600">
                            O guerreiro saiu.
                        </p>
                    </div>
                </div>

                {/* Causative */}
                <div className="bg-pink-50 p-6 rounded-xl border-2 border-pink-200">
                    <div className="text-center mb-4">
                        <span className="text-4xl">👋👵</span>
                        <h3 className="text-xl font-bold text-pink-700 mt-2">Ação Causativa (MO-)</h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-500">
                        <p className="font-mono text-lg font-bold text-green-700 mb-2">
                            Gûarini o-î-<span className="text-pink-600">mo</span>-sem gûaîbi.
                        </p>
                        <p className="text-gray-600">
                            O guerreiro <span className="font-bold text-pink-600">fez</span> a velha sair.
                        </p>
                    </div>
                </div>
            </div>

            <div className="prose max-w-none text-gray-700 mb-8">
                <p>
                    O prefixo <strong>MO-</strong> transforma verbos intransitivos, substantivos e adjetivos em verbos transitivos causais.
                </p>
            </div>

            {/* Examples Table */}
            <div className="overflow-x-auto mb-8 bg-white rounded-lg shadow border border-gray-200">
                <table className="w-full text-left">
                    <thead className="bg-green-100 text-green-800 uppercase text-xs">
                        <tr>
                            <th className="px-4 py-3">Palavra Original</th>
                            <th className="px-4 py-3">Tradução</th>
                            <th className="px-4 py-3">Com MO-</th>
                            <th className="px-4 py-3">Tradução Causativa</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">sem</td>
                            <td className="px-4 py-2">sair</td>
                            <td className="px-4 py-2 font-mono text-pink-600 font-bold">mo-sem</td>
                            <td className="px-4 py-2">fazer sair</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">îebyr</td>
                            <td className="px-4 py-2">voltar</td>
                            <td className="px-4 py-2 font-mono text-pink-600 font-bold">mo-îebyr</td>
                            <td className="px-4 py-2">fazer voltar</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">akub</td>
                            <td className="px-4 py-2">quente</td>
                            <td className="px-4 py-2 font-mono text-pink-600 font-bold">mo-akub</td>
                            <td className="px-4 py-2">esquentar (fazer quente)</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">endy</td>
                            <td className="px-4 py-2">luz</td>
                            <td className="px-4 py-2 font-mono text-pink-600 font-bold">mo-endy</td>
                            <td className="px-4 py-2">iluminar, acender</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">eté</td>
                            <td className="px-4 py-2">verdadeiro</td>
                            <td className="px-4 py-2 font-mono text-pink-600 font-bold">mo-eté</td>
                            <td className="px-4 py-2">honrar, legitimar</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">abaré</td>
                            <td className="px-4 py-2">padre</td>
                            <td className="px-4 py-2 font-mono text-pink-600 font-bold">mo-abaré</td>
                            <td className="px-4 py-2">tornar padre</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">paîé</td>
                            <td className="px-4 py-2">curandeiro</td>
                            <td className="px-4 py-2 font-mono text-pink-600 font-bold">mo-paîé</td>
                            <td className="px-4 py-2">tornar pajé</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Sentence Examples */}
            <div className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500 mb-8">
                <h3 className="font-bold text-pink-800 text-lg mb-3">💬 Exemplos em Frases</h3>
                <div className="space-y-4">
                    <div className="bg-white p-3 rounded shadow-sm">
                        <p className="font-mono text-lg text-green-700 font-bold">A-î-mo-abaré Pedro.</p>
                        <p className="text-gray-600">Faço Pedro ser padre. (Torno Pedro padre)</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                        <p className="font-mono text-lg text-green-700 font-bold">Oro-î-mo-endy t-atá.</p>
                        <p className="text-gray-600">Acendemos o fogo.</p>
                    </div>
                </div>
            </div>

            {/* Phonetic Rules for MO- */}
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-8">
                <h3 className="font-bold text-amber-800 text-lg mb-4 text-center">🔊 Transformações Fonéticas com MO-</h3>
                <p className="text-gray-700 mb-4 text-center">
                    <strong>MO-</strong> é uma sílaba nasal. Ela nasaliza as consoantes surdas (K, T, P, S) que vêm logo depois.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* K -> NG */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-gray-500">K → NG</span>
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Nasalização</span>
                        </div>
                        <p className="font-mono text-lg">
                            mo- + <span className="text-red-600">k</span>er (dormir)
                        </p>
                        <p className="font-mono text-xl font-bold text-green-700 mt-1">
                            mo-<span className="text-green-600">ng</span>er
                        </p>
                        <p className="text-sm text-gray-500 italic">fazer dormir</p>
                    </div>

                    {/* T -> ND */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-gray-500">T → ND</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Nasalização</span>
                        </div>
                        <p className="font-mono text-lg">
                            mo- + <span className="text-blue-600">t</span>ykyra (gota)
                        </p>
                        <p className="font-mono text-xl font-bold text-green-700 mt-1">
                            mo-<span className="text-green-600">nd</span>ykyr
                        </p>
                        <p className="text-sm text-gray-500 italic">fazer gotejar / destilar</p>
                    </div>

                    {/* P -> MB */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-gray-500">P → MB</span>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Nasalização</span>
                        </div>
                        <p className="font-mono text-lg">
                            mo- + <span className="text-green-600">p</span>ak (acordar)
                        </p>
                        <p className="font-mono text-xl font-bold text-green-700 mt-1">
                            mo-<span className="text-green-600">mb</span>ak
                        </p>
                        <p className="text-sm text-gray-500 italic">fazer acordar</p>
                    </div>

                    {/* S -> ND */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-gray-500">S → ND</span>
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Nasalização</span>
                        </div>
                        <p className="font-mono text-lg">
                            mo- + <span className="text-purple-600">s</span>ó (ir)
                        </p>
                        <p className="font-mono text-xl font-bold text-green-700 mt-1">
                            mo-<span className="text-green-600">nd</span>ó
                        </p>
                        <p className="text-sm text-gray-500 italic">fazer ir / enviar</p>
                    </div>
                </div>

                <div className="mt-4 bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-sm text-yellow-800 text-center">
                    ⚠️ <strong>Exceção:</strong> Se a palavra já tiver nasal (m, n, nh, ˜), a mudança não ocorre.
                    <br/>
                    <em>Ex: mo- + tym = motym (não vira mondym porque tem 'm')</em>
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
