
import React from 'react';

export const Lesson2SidebarEx5: React.FC = () => {
    return (
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-md text-sm">
            <h3 className="font-bold text-blue-800 mb-3 text-center border-b border-blue-200 pb-2">Vocabulário de Apoio</h3>
            
            <div className="space-y-4">
                {/* Verbos */}
                <div>
                    <h4 className="font-bold text-green-800 mb-1 border-b border-green-200">Verbos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>dormir</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">ker</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>erguer-se</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">byr</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>escorregar</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">syryk</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>estar</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">ikó</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>estourar</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">pok</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>ir</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">só</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>queimar</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">kaî</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>resmungar</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">kuruk</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>voar</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">bebé</span></li>
                    </ul>
                </div>

                {/* Substantivos */}
                <div>
                    <h4 className="font-bold text-blue-800 mb-1 border-b border-blue-200">Substantivos</h4>
                    <ul className="space-y-1 mt-2 max-h-60 overflow-y-auto custom-scrollbar pr-1">
                        <li className="flex justify-between items-center text-gray-700"><span>carijó</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">kariîó</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>casa</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">oka</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>cobra</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">mboîa</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>esqueleto</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">kanga</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>fava</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">komandá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>mata</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">ka'a</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>nariz/bico</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">ti</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>padre</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">abaré</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>pedra</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">itá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>pele</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">pira</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>rio</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">'y</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>terra</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">yby</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>tucano</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">tukana</span></li>
                    </ul>
                </div>
                
                {/* Adjetivos */}
                <div>
                    <h4 className="font-bold text-amber-800 mb-1 border-b border-amber-200">Adjetivos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>achatado</span> <span className="font-mono text-amber-700 font-bold bg-amber-100 px-1 rounded">peb</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>grande</span> <span className="font-mono text-amber-700 font-bold bg-amber-100 px-1 rounded">gûasu</span></li>
                    </ul>
                </div>

                {/* Posposições */}
                <div>
                    <h4 className="font-bold text-purple-800 mb-1 border-b border-purple-200">Posposições</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>de</span> <span className="font-mono text-purple-700 font-bold bg-purple-50 px-1 rounded">suí</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>dentro</span> <span className="font-mono text-purple-700 font-bold bg-purple-50 px-1 rounded">pupé</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>em/para</span> <span className="font-mono text-purple-700 font-bold bg-purple-50 px-1 rounded">-pe</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
