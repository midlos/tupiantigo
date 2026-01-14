
import React from 'react';

interface SectionAdjectivesL4Props {
    onNext: () => void;
}

export const SectionAdjectivesL4: React.FC<SectionAdjectivesL4Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🌟 Adjetivos em Tupi</h2>
            
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 mb-8 border-l-4 border-teal-500">
                <div className="flex items-center gap-4">
                    <div className="text-4xl pulse-icon">⭐</div>
                    <div>
                        <p className="text-xl font-bold text-teal-800">Tipos de Adjetivos</p>
                        <p className="text-lg text-gray-700">Podem ser <strong>qualificativos</strong> (junto ao nome) ou <strong>predicativos</strong> (com o verbo ser).</p>
                    </div>
                </div>
            </div>

            <div className="prose max-w-none text-gray-700 mb-8 space-y-8">
                
                {/* 1. Qualitative */}
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                    <h3 className="font-bold text-amber-800 text-lg mb-3 border-b border-amber-200 pb-2">1. Adjetivos Qualificativos (O menino bonito)</h3>
                    <p className="mb-4">
                        O adjetivo vem sempre <strong>depois</strong> do substantivo, formando uma composição.
                        <br/>
                        <span className="text-sm font-semibold text-amber-900">Regra de Ouro:</span> Se a composição terminar em consoante, acrescenta-se <strong>-a</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-3 rounded shadow-sm border-l-4 border-green-500">
                            <p className="text-sm text-gray-500">Adjetivo termina em vogal (katu)</p>
                            <p className="font-mono text-lg">abá + katu = <strong className="text-green-700">abá-katu</strong></p>
                            <p className="text-sm italic">homem bom</p>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm border-l-4 border-red-500">
                            <p className="text-sm text-gray-500">Adjetivo termina em consoante (porang)</p>
                            <p className="font-mono text-lg">taba + porang = <strong className="text-red-700">taba-porang-a</strong></p>
                            <p className="text-sm italic">aldeia bonita</p>
                        </div>
                    </div>
                </div>

                {/* 2. Predicative */}
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="font-bold text-blue-800 text-lg mb-3 border-b border-blue-200 pb-2">2. Adjetivos Predicativos (O menino É bonito)</h3>
                    <p className="mb-4">
                        Para dizer que algo "é" alguma coisa, usamos o pronome <strong>i</strong> (ele/ela) antes do adjetivo. O verbo "ser" não existe/é implícito.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-3 rounded shadow-sm text-center">
                            <p className="font-bold text-blue-800">Taba i porang</p>
                            <p className="text-sm text-gray-600">A aldeia, ela (é) bonita</p>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm text-center">
                            <p className="font-bold text-blue-800">'Y i pyrang</p>
                            <p className="text-sm text-gray-600">O rio, ele (é) vermelho</p>
                        </div>
                    </div>
                </div>

                {/* 3. Pronouns 2nd Series */}
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h3 className="font-bold text-green-800 text-lg mb-3 border-b border-green-200 pb-2">3. "Eu sou bonito" (Pronomes de 2ª Série)</h3>
                    <p className="mb-4">
                        Com adjetivos predicativos, usamos uma série diferente de pronomes pessoais:
                    </p>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left mb-4 bg-white rounded-lg overflow-hidden shadow-sm">
                            <thead className="bg-green-100 text-green-800 uppercase text-xs">
                                <tr>
                                    <th className="px-4 py-3">Pessoa</th>
                                    <th className="px-4 py-3">Pronome</th>
                                    <th className="px-4 py-3">Exemplo (katu)</th>
                                    <th className="px-4 py-3">Nota</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-green-50">
                                    <td className="px-4 py-2 font-semibold">1ª Sg</td>
                                    <td className="px-4 py-2 text-green-700 font-bold">xe</td>
                                    <td className="px-4 py-2 italic">xe katu</td>
                                    <td className="px-4 py-2 text-gray-500">eu sou bom</td>
                                </tr>
                                <tr className="hover:bg-green-50">
                                    <td className="px-4 py-2 font-semibold">2ª Sg</td>
                                    <td className="px-4 py-2 text-green-700 font-bold">nde</td>
                                    <td className="px-4 py-2 italic">nde katu</td>
                                    <td className="px-4 py-2 text-gray-500">usa-se <strong>nde</strong>, não <em>endé</em></td>
                                </tr>
                                <tr className="hover:bg-green-50">
                                    <td className="px-4 py-2 font-semibold">3ª Sg</td>
                                    <td className="px-4 py-2 text-green-700 font-bold">i</td>
                                    <td className="px-4 py-2 italic">i katu</td>
                                    <td className="px-4 py-2 text-gray-500">usa-se <strong>i</strong>, nunca <em>a'e</em></td>
                                </tr>
                                <tr className="hover:bg-green-50">
                                    <td className="px-4 py-2 font-semibold">1ª Pl (Ex)</td>
                                    <td className="px-4 py-2 text-green-700 font-bold">oré</td>
                                    <td className="px-4 py-2 italic">oré katu</td>
                                    <td className="px-4 py-2 text-gray-500">nós somos bons</td>
                                </tr>
                                <tr className="hover:bg-green-50">
                                    <td className="px-4 py-2 font-semibold">1ª Pl (In)</td>
                                    <td className="px-4 py-2 text-green-700 font-bold">îandé</td>
                                    <td className="px-4 py-2 italic">îandé katu</td>
                                    <td className="px-4 py-2 text-gray-500">nós somos bons</td>
                                </tr>
                                <tr className="hover:bg-green-50">
                                    <td className="px-4 py-2 font-semibold">2ª Pl</td>
                                    <td className="px-4 py-2 text-green-700 font-bold">pe</td>
                                    <td className="px-4 py-2 italic">pe katu</td>
                                    <td className="px-4 py-2 text-gray-500">usa-se <strong>pe</strong>, não <em>pee</em></td>
                                </tr>
                                <tr className="hover:bg-green-50">
                                    <td className="px-4 py-2 font-semibold">3ª Pl</td>
                                    <td className="px-4 py-2 text-green-700 font-bold">i</td>
                                    <td className="px-4 py-2 italic">i katu</td>
                                    <td className="px-4 py-2 text-gray-500">eles são bons (igual à 3ª sg)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 4. Noun Predication */}
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <h3 className="font-bold text-purple-800 text-lg mb-3 border-b border-purple-200 pb-2">4. Com Substantivos (Eu sou o cacique)</h3>
                    <p className="mb-4 text-gray-700">
                        Quando dizemos "Eu sou [substantivo]", a lógica é flexível. O verbo "ser" continua implícito.
                    </p>
                    
                    <div className="grid gap-4 mb-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">
                            <h4 className="font-bold text-gray-800 mb-2">Regras de Ouro:</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Servem as <strong>duas séries</strong> de pronomes (1ª ou 2ª).</li>
                                <li>O pronome pode vir <strong>antes ou depois</strong> do substantivo.</li>
                                <li><span className="text-red-600 font-bold">Exceção:</span> O pronome <strong>i</strong> (3ª pessoa) como sujeito só se usa com adjetivos, não com substantivos.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-3 text-center">
                        <div className="bg-white p-3 rounded border border-gray-100">
                            <p className="text-purple-700 font-mono font-bold">xe morubixaba</p>
                            <p className="text-xs text-gray-500 mt-1">eu (sou) cacique</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-100">
                            <p className="text-purple-700 font-mono font-bold">ixé morubixaba</p>
                            <p className="text-xs text-gray-500 mt-1">eu (sou) cacique</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-100">
                            <p className="text-purple-700 font-mono font-bold">morubixaba ixé</p>
                            <p className="text-xs text-gray-500 mt-1">o cacique (sou) eu</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Exercício 7
                </button>
            </div>
        </div>
    );
};
