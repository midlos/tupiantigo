
import React from 'react';

interface SectionGenitiveL5Props {
    onNext: () => void;
}

export const SectionGenitiveL5: React.FC<SectionGenitiveL5Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🔗 A Relação Genitiva</h2>
            
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-8 text-center">
                <p className="text-lg text-gray-700 mb-4">
                    Em Tupi, <strong>não existe</strong> a preposição "DE".
                    <br/>Para indicar posse ("casa de Pedro") ou origem ("rio do tatu"), usamos a ordem inversa:
                </p>
                <div className="text-2xl font-bold text-amber-800 font-mono mb-2 bg-white inline-block px-4 py-2 rounded shadow-sm">
                    Possuidor + Possuído
                </div>
                <p className="text-sm text-gray-500 mt-2">(Igual ao inglês e alemão: <em>Peter's house</em> ou <em>Volkswagen</em>)</p>
            </div>

            <div className="grid gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-2">Exemplos Clássicos:</h4>
                    <ul className="space-y-3">
                        <li className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-600">mãe de Pindobuçu</span>
                            <span className="font-bold text-green-700">Pindobusu sy</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-600">rio do tatu (Tatuí)</span>
                            <span className="font-bold text-green-700">tatu 'y</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-600">rio do jacaré (Jacareí)</span>
                            <span className="font-bold text-green-700">îakaré 'y</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-600">enseada do rio</span>
                            <span className="font-bold text-green-700">'y kûá</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-600">navio dos portugueses</span>
                            <span className="font-bold text-green-700">peró ygar-usu</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-600">língua dos índios</span>
                            <span className="font-bold text-green-700">abá nhe'enga</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-600">menino de pedra (Itacolomi)</span>
                            <span className="font-bold text-green-700">itá kunumi</span>
                        </li>
                        <li className="flex justify-between pb-2">
                            <span className="text-gray-600">prato de pedra (Itanhaém)</span>
                            <span className="font-bold text-green-700">itá nha'e</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <p className="text-blue-800 text-center">
                    <strong>Dica:</strong> Chamamos o primeiro termo de <em>genitivo</em> ou <em>determinante</em>. Ele determina o segundo termo.
                </p>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Exercício 9
                </button>
            </div>
        </div>
    );
};
