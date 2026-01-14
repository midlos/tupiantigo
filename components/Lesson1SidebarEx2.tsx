
import React from 'react';

export const Lesson1SidebarEx2: React.FC = () => {
    return (
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-md text-sm">
            <h3 className="font-bold text-amber-800 mb-3 text-center border-b border-amber-200 pb-2">Vocabulário de Apoio</h3>
            
            <div className="space-y-4">
                {/* Verbos */}
                <div>
                    <h4 className="font-bold text-green-800 mb-1 border-b border-green-200">Verbos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>brilhar</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">berab</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>cair</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">kuî</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>correr</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">nhan</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>dormir</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">ker</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>rasgar-se</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">sorok</span></li>
                    </ul>
                </div>

                {/* Substantivos */}
                <div>
                    <h4 className="font-bold text-blue-800 mb-1 border-b border-blue-200">Substantivos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>homem/índio</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">abá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>lua</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">îasy</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>maracujá</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">murukuîá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>roupa</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">aoba</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>sapo</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">kururu</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
