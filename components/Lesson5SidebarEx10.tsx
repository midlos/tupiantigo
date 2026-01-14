
import React from 'react';

export const Lesson5SidebarEx10: React.FC = () => {
    return (
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-md text-sm">
            <h3 className="font-bold text-amber-800 mb-3 text-center border-b border-amber-200 pb-2">Vocabulário de Apoio</h3>
            
            <div className="space-y-4">
                {/* Substantivos */}
                <div>
                    <h4 className="font-bold text-blue-800 mb-1 border-b border-blue-200">Substantivos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>capivara</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">kapibara</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>carijó</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">kariîó</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>casa</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">oka</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>pari</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">pari</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>pedra</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">itá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>rio</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">'y</span></li>
                    </ul>
                </div>

                {/* Verbos */}
                <div>
                    <h4 className="font-bold text-green-800 mb-1 border-b border-green-200">Verbos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>dormir</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">ker</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>explodir</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">pororok</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>pular</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">por</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>sair</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">sem</span></li>
                    </ul>
                </div>

                {/* Adjetivos */}
                <div>
                    <h4 className="font-bold text-amber-800 mb-1 border-b border-amber-200">Adjetivos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>silencioso</span> <span className="font-mono text-amber-700 font-bold bg-amber-100 px-1 rounded">kyriri</span></li>
                    </ul>
                </div>

                {/* Gramática */}
                <div>
                    <h4 className="font-bold text-purple-800 mb-1 border-b border-purple-200">Posposições</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>de</span> <span className="font-mono text-purple-700 font-bold bg-purple-100 px-1 rounded">suí</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>dentro</span> <span className="font-mono text-purple-700 font-bold bg-purple-100 px-1 rounded">pupé</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>em/no</span> <span className="font-mono text-purple-700 font-bold bg-purple-100 px-1 rounded">-pe</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
