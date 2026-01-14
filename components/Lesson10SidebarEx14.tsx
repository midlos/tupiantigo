
import React from 'react';

export const Lesson10SidebarEx14: React.FC = () => {
    return (
        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200 shadow-md text-sm">
            <h3 className="font-bold text-indigo-800 mb-3 text-center border-b border-indigo-200 pb-2">Vocabulário de Apoio</h3>
            
            <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
                
                {/* Tempo Nominal */}
                <div>
                    <h4 className="font-bold text-red-800 mb-2 border-b border-red-200 flex items-center gap-2">
                        <span>⏳</span> Sufixos de Tempo
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>passado (oxítono)</span> <span className="font-mono text-red-700 font-bold">-pûera</span></li>
                        <li className="flex justify-between"><span>passado (paroxítono)</span> <span className="font-mono text-red-700 font-bold">-ûera</span></li>
                        <li className="flex justify-between"><span>futuro (oxítono)</span> <span className="font-mono text-green-700 font-bold">-rama</span></li>
                        <li className="flex justify-between"><span>futuro (paroxítono)</span> <span className="font-mono text-green-700 font-bold">-ûama</span></li>
                    </ul>
                </div>

                {/* Substantivos */}
                <div>
                    <h4 className="font-bold text-blue-800 mb-2 border-b border-blue-200 flex items-center gap-2">
                        <span>📦</span> Substantivos Originais
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between items-center"><span>aldeia</span> <span className="font-mono text-blue-700 font-bold">taba</span></li>
                        <li className="flex justify-between items-center"><span>árvore</span> <span className="font-mono text-blue-700 font-bold">ybyrá</span></li>
                        <li className="flex justify-between items-center"><span>barro branco</span> <span className="font-mono text-blue-700 font-bold">tobatinga</span></li>
                        <li className="flex justify-between items-center"><span>curral de peixe</span> <span className="font-mono text-blue-700 font-bold">pari</span></li>
                        <li className="flex justify-between items-center"><span>diabo</span> <span className="font-mono text-blue-700 font-bold">anhanga</span></li>
                        <li className="flex justify-between items-center"><span>grão/caroço</span> <span className="font-mono text-blue-700 font-bold">kuruba</span></li>
                        <li className="flex justify-between items-center"><span>mata</span> <span className="font-mono text-blue-700 font-bold">ka'a</span></li>
                        <li className="flex justify-between items-center"><span>osso</span> <span className="font-mono text-blue-700 font-bold">kanga</span></li>
                        <li className="flex justify-between items-center"><span>porto</span> <span className="font-mono text-blue-700 font-bold">peasaba</span></li>
                        <li className="flex justify-between items-center"><span>rio</span> <span className="font-mono text-blue-700 font-bold">ty</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
