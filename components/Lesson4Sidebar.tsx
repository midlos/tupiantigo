
import React from 'react';

export const Lesson4Sidebar: React.FC = () => {
    return (
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-md text-sm">
            <h3 className="font-bold text-amber-800 mb-3 text-center border-b border-amber-200 pb-2">Vocabulário de Apoio</h3>
            
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold text-green-800 mb-1 border-b border-green-200">Adjetivos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>alto</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">puku</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>bom</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">katu</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>bonito</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">porang</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>fedorento</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">nem</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>pequeno</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">miri</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>sujo</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">ky'a</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>vermelho</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">pyrang</span></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-blue-800 mb-1 border-b border-blue-200">Substantivos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>aldeia</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">taba</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>árvore</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">ybyrá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>Cunhambebe</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">Kunhambeba</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>homem</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">abá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>menino</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">kunumi</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>mulher</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">kunhã</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>padre</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">abaré</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>Potira</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">Potyra</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>Reritiba</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">Rerityba</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>rio</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">'y</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
