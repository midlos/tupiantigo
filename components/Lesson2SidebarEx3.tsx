
import React from 'react';

export const Lesson2SidebarEx3: React.FC = () => {
    return (
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-md text-sm">
            <h3 className="font-bold text-blue-800 mb-3 text-center border-b border-blue-200 pb-2">Vocabulário de Apoio</h3>
            
            <div className="space-y-4">
                {/* Posposições */}
                <div>
                    <h4 className="font-bold text-purple-800 mb-1 border-b border-purple-200">Posposições</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>de (origem)</span> <span className="font-mono text-purple-700 font-bold bg-purple-50 px-1 rounded">suí</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>dentro de</span> <span className="font-mono text-purple-700 font-bold bg-purple-50 px-1 rounded">pupé</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>em / para</span> <span className="font-mono text-purple-700 font-bold bg-purple-50 px-1 rounded">-pe</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>para (alguém)</span> <span className="font-mono text-purple-700 font-bold bg-purple-50 px-1 rounded">supé</span></li>
                    </ul>
                </div>

                {/* Verbos */}
                <div>
                    <h4 className="font-bold text-green-800 mb-1 border-b border-green-200">Verbos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>estar</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">ikó</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>falar</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">nhe'eng</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>ficar</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">pytá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>ir</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">só</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>sair</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">sem</span></li>
                    </ul>
                </div>

                {/* Substantivos */}
                <div>
                    <h4 className="font-bold text-blue-800 mb-1 border-b border-blue-200">Substantivos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>cacique</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">morubixaba</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>índio</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">abá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>jacaré</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">îakaré</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>mato</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">ka'a</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>português</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">peró</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>rio</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">'y</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>siri</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">siri</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>tatu</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">tatu</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>toca</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">kûara</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
