
import React from 'react';

interface SectionObjectPronounsL7Props {
    onNext?: () => void;
}

export const SectionObjectPronounsL7: React.FC<SectionObjectPronounsL7Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🔤 O Pronome Objetivo -Î-</h2>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
                <p className="text-lg text-gray-700 mb-4">
                    Quando o objeto não está incorporado, usamos <strong>-Î-</strong> logo após o prefixo pessoal para indicar "o, a, os, as".
                </p>
                <p className="text-md text-gray-600 italic">
                    Exemplo com <strong>MONHANG</strong> (fazer):
                </p>
            </div>

            {/* Table 1: MONHANG */}
            <div className="overflow-x-auto mb-8 bg-white rounded-lg shadow border border-gray-200">
                <table className="w-full text-left">
                    <thead className="bg-green-100 text-green-800 uppercase text-xs">
                        <tr>
                            <th className="px-4 py-3">Pessoa</th>
                            <th className="px-4 py-3">Tupi</th>
                            <th className="px-4 py-3">Tradução</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">Eu</td>
                            <td className="px-4 py-2 font-mono text-green-700">a-<span className="text-red-600 font-bold">î</span>-monhang pindá</td>
                            <td className="px-4 py-2">faço / fiz anzol</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">Tu</td>
                            <td className="px-4 py-2 font-mono text-green-700">ere-<span className="text-red-600 font-bold">î</span>-monhang pindá</td>
                            <td className="px-4 py-2">fazes / fizeste anzol</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">Ele</td>
                            <td className="px-4 py-2 font-mono text-green-700">o-<span className="text-red-600 font-bold">î</span>-monhang pindá</td>
                            <td className="px-4 py-2">faz / fez anzol</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">Nós (ex)</td>
                            <td className="px-4 py-2 font-mono text-green-700">oro-<span className="text-red-600 font-bold">î</span>-monhang pindá</td>
                            <td className="px-4 py-2">fazemos / fizemos anzol</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">Nós (in)</td>
                            <td className="px-4 py-2 font-mono text-green-700">îa-<span className="text-red-600 font-bold">î</span>-monhang pindá</td>
                            <td className="px-4 py-2">fazemos / fizemos anzol</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">Vós</td>
                            <td className="px-4 py-2 font-mono text-green-700">pe-<span className="text-red-600 font-bold">î</span>-monhang pindá</td>
                            <td className="px-4 py-2">fazeis / fizestes anzol</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="px-4 py-2 font-bold">Eles</td>
                            <td className="px-4 py-2 font-mono text-green-700">o-<span className="text-red-600 font-bold">î</span>-monhang pindá</td>
                            <td className="px-4 py-2">fazem / fizeram anzol</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
                <p className="text-md text-gray-600 italic">
                    Outro exemplo com <strong>KUTUK</strong> (espetar, furar):
                </p>
            </div>

            {/* Table 2: KUTUK */}
            <div className="overflow-x-auto mb-8 bg-white rounded-lg shadow border border-gray-200">
                <table className="w-full text-left">
                    <thead className="bg-red-100 text-red-800 uppercase text-xs">
                        <tr>
                            <th className="px-4 py-3">Pessoa</th>
                            <th className="px-4 py-3">Tupi</th>
                            <th className="px-4 py-3">Tradução</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        <tr className="hover:bg-red-50">
                            <td className="px-4 py-2 font-bold">Eu</td>
                            <td className="px-4 py-2 font-mono text-green-700">a-<span className="text-red-600 font-bold">î</span>-kutuk pereba</td>
                            <td className="px-4 py-2">espeto / espetei a ferida</td>
                        </tr>
                        <tr className="hover:bg-red-50">
                            <td className="px-4 py-2 font-bold">Tu</td>
                            <td className="px-4 py-2 font-mono text-green-700">ere-<span className="text-red-600 font-bold">î</span>-kutuk pereba</td>
                            <td className="px-4 py-2">espetas / espetaste a ferida</td>
                        </tr>
                        <tr className="hover:bg-red-50">
                            <td className="px-4 py-2 font-bold">Ele</td>
                            <td className="px-4 py-2 font-mono text-green-700">o-<span className="text-red-600 font-bold">î</span>-kutuk pereba</td>
                            <td className="px-4 py-2">espeta / espetou a ferida</td>
                        </tr>
                        <tr className="hover:bg-red-50">
                            <td className="px-4 py-2 font-bold">Nós (ex)</td>
                            <td className="px-4 py-2 font-mono text-green-700">oro-<span className="text-red-600 font-bold">î</span>-kutuk pereba</td>
                            <td className="px-4 py-2">espetamos / espetamos a ferida</td>
                        </tr>
                        <tr className="hover:bg-red-50">
                            <td className="px-4 py-2 font-bold">Nós (in)</td>
                            <td className="px-4 py-2 font-mono text-green-700">îa-<span className="text-red-600 font-bold">î</span>-kutuk pereba</td>
                            <td className="px-4 py-2">espetamos / espetamos a ferida</td>
                        </tr>
                        <tr className="hover:bg-red-50">
                            <td className="px-4 py-2 font-bold">Vós</td>
                            <td className="px-4 py-2 font-mono text-green-700">pe-<span className="text-red-600 font-bold">î</span>-kutuk pereba</td>
                            <td className="px-4 py-2">espetais / espetastes a ferida</td>
                        </tr>
                        <tr className="hover:bg-red-50">
                            <td className="px-4 py-2 font-bold">Eles</td>
                            <td className="px-4 py-2 font-mono text-green-700">o-<span className="text-red-600 font-bold">î</span>-kutuk pereba</td>
                            <td className="px-4 py-2">espetam / espetaram a ferida</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Child-friendly Explanation Bubble */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10 border-2 border-blue-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                    <span className="text-9xl">💡</span>
                </div>
                <div className="flex gap-4">
                    <div className="text-4xl">🤔</div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-blue-800">Por que tem esse -î- no meio?</h3>
                        
                        <div className="bg-white/80 p-4 rounded-xl text-gray-700 shadow-sm">
                            <p className="mb-2">
                                Imagine que em Português a gente dissesse:
                            </p>
                            <p className="font-bold text-center text-lg text-blue-900 mb-2">
                                "Eu <span className="text-red-500 bg-red-100 px-1 rounded">a</span> como <span className="text-green-600 underline">a comida</span>"
                            </p>
                            <p>
                                Fica repetitivo, né? A gente diz "Eu como a comida" <strong>OU</strong> "Eu a como".
                            </p>
                        </div>

                        <p className="text-gray-700">
                            Mas o Tupi adora ser bem claro! Se a palavra <strong>comida</strong> (o objeto) não estiver grudada no verbo, o Tupi coloca o <strong>-î-</strong> para apontar para ela.
                        </p>
                        
                        <p className="text-sm bg-blue-100 text-blue-800 p-2 rounded inline-block font-semibold">
                            É como dizer: "Faço-o o anzol" ou "Conheço-os os meninos".
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                
                {/* Monosyllabic Verbs Rule */}
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                    <h3 className="font-bold text-amber-800 text-lg mb-3 border-b border-amber-200 pb-2">⚠️ Verbos Monossilábicos</h3>
                    <p className="mb-4 text-gray-700">
                        Com verbos de uma só sílaba, usa-se <strong>-îo-</strong> (ou <em>-nho-</em> antes de nasais).
                    </p>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <p className="text-sm font-bold text-gray-500 mb-3 border-b border-gray-100 pb-1">SOK (socar, pilar)</p>
                        <div className="space-y-3">
                            <div>
                                <p className="font-mono text-lg mb-1">
                                    a-<span className="text-amber-600 font-bold">îo</span>-sok akaîu
                                </p>
                                <p className="text-gray-600 italic text-sm">soco o caju</p>
                            </div>
                            <div>
                                <p className="font-mono text-lg mb-1">
                                    ere-<span className="text-amber-600 font-bold">îo</span>-sok akaîu
                                </p>
                                <p className="text-gray-600 italic text-sm">socas o caju</p>
                            </div>
                            <div>
                                <p className="font-mono text-lg mb-1">
                                    o-<span className="text-amber-600 font-bold">îo</span>-sok akaîu
                                </p>
                                <p className="text-gray-600 italic text-sm">soca o caju</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phonetic Fusion Rule */}
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <h3 className="font-bold text-purple-800 text-lg mb-3 border-b border-purple-200 pb-2">🔄 Fusão Fonética</h3>
                    <p className="mb-4 text-gray-700">
                        Quando <strong>-Î-</strong> encontra outro <strong>Î</strong> ou <strong>I</strong>, eles se fundem.
                    </p>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded shadow-sm">
                            <p className="text-sm font-bold text-gray-500 mb-2 border-b border-gray-100 pb-1">ÎUKÁ (matar)</p>
                            <div className="space-y-2">
                                <div>
                                    <p className="font-mono text-sm">a-î-îuká {'>'} <strong className="text-purple-700 text-lg">a-îuká</strong></p>
                                    <p className="text-gray-600 italic text-sm">mato-o</p>
                                </div>
                                <div>
                                    <p className="font-mono text-sm">o-î-îuká {'>'} <strong className="text-purple-700 text-lg">o-îuká</strong></p>
                                    <p className="text-gray-600 italic text-sm">mata-o</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm">
                            <p className="text-sm font-bold text-gray-500 mb-2 border-b border-gray-100 pb-1">ITYK (atirar)</p>
                            <div className="space-y-2">
                                <div>
                                    <p className="font-mono text-sm">a-î-ityk {'>'} <strong className="text-purple-700 text-lg">a-îtyk</strong></p>
                                    <p className="text-gray-600 italic text-sm">atiro-o</p>
                                </div>
                                <div>
                                    <p className="font-mono text-sm">o-î-ityk {'>'} <strong className="text-purple-700 text-lg">o-îtyk</strong></p>
                                    <p className="text-gray-600 italic text-sm">atira-o</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
