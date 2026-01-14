
import React from 'react';

export const Lesson3Sidebar: React.FC = () => {
    return (
        <div className="bg-teal-50 p-4 rounded-xl border border-teal-200 shadow-md text-sm">
            <h3 className="font-bold text-teal-800 mb-3 text-center border-b border-teal-200 pb-2">Vocabulário de Apoio</h3>
            
            <div className="space-y-4">
                {/* Gramática */}
                <div>
                    <h4 className="font-bold text-red-800 mb-1 border-b border-red-200">Gramática</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>muitos</span> <span className="font-mono text-red-700 font-bold bg-red-50 px-1 rounded">-etá</span></li>
                    </ul>
                </div>

                {/* Substantivos */}
                <div>
                    <h4 className="font-bold text-blue-800 mb-1 border-b border-blue-200">Substantivos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>canoa</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">ygara</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>enseada</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">kûá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>garça</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">gûyrá-tinga</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>índio</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">abá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>mata</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">ka'a</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>menino</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">kunumi</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>navio</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">ygarusu</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>paca</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">paka</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>português</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">peró</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>rio</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">'y</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>tatu</span> <span className="font-mono text-blue-700 font-bold bg-blue-50 px-1 rounded">tatu</span></li>
                    </ul>
                </div>

                {/* Verbos */}
                <div>
                    <h4 className="font-bold text-green-800 mb-1 border-b border-green-200">Verbos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>estar/morar</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">ikó</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>falar</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">nhe'eng</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>ficar</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">pytá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>ir</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">só</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>sair</span> <span className="font-mono text-green-700 font-bold bg-green-50 px-1 rounded">sem</span></li>
                    </ul>
                </div>

                {/* Posposições */}
                <div>
                    <h4 className="font-bold text-purple-800 mb-1 border-b border-purple-200">Posposições</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>de</span> <span className="font-mono text-purple-700 font-bold bg-purple-50 px-1 rounded">suí</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>dentro</span> <span className="font-mono text-purple-700 font-bold bg-purple-50 px-1 rounded">pupé</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>em/para</span> <span className="font-mono text-purple-700 font-bold bg-purple-50 px-1 rounded">-pe</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>para (dativo)</span> <span className="font-mono text-purple-700 font-bold bg-purple-50 px-1 rounded">supé</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
