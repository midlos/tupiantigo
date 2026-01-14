
import React from 'react';

export const Lesson5Sidebar: React.FC = () => {
    return (
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-md text-sm">
            <h3 className="font-bold text-blue-800 mb-3 text-center border-b border-blue-200 pb-2">Vocabulário de Apoio</h3>
            
            <div className="space-y-4">
                {/* Substantivos */}
                <div>
                    <h4 className="font-bold text-blue-800 mb-1 border-b border-blue-200">Substantivos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>arara</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">arará</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>casa</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">oka</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>enseada</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">kûá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>filho (da mãe)</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">membyra</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>gravatá</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">karaguatá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>mãe</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">sy</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>onça</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">îagûara</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>pedra</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">itá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>peixe</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">pirá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>rio</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">'y</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>siri</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">siri</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>tatu</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">tatu</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>toca/buraco</span> <span className="font-mono text-blue-700 font-bold bg-blue-100 px-1 rounded">kûara</span></li>
                    </ul>
                </div>

                {/* Adjetivos */}
                <div>
                    <h4 className="font-bold text-amber-800 mb-1 border-b border-amber-200">Adjetivos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>bom</span> <span className="font-mono text-amber-700 font-bold bg-amber-100 px-1 rounded">katu</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>bonito</span> <span className="font-mono text-amber-700 font-bold bg-amber-100 px-1 rounded">porang</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>comprido</span> <span className="font-mono text-amber-700 font-bold bg-amber-100 px-1 rounded">puku</span></li>
                    </ul>
                </div>

                {/* Verbos */}
                <div>
                    <h4 className="font-bold text-green-800 mb-1 border-b border-green-200">Verbos</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>dormir</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">ker</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>ficar</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">pytá</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>ir</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">só</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>morar</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">ikó</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>nadar</span> <span className="font-mono text-green-700 font-bold bg-green-100 px-1 rounded">'ytab</span></li>
                    </ul>
                </div>

                {/* Gramática */}
                <div>
                    <h4 className="font-bold text-purple-800 mb-1 border-b border-purple-200">Gramática</h4>
                    <ul className="space-y-1 mt-2">
                        <li className="flex justify-between items-center text-gray-700"><span>em/para</span> <span className="font-mono text-purple-700 font-bold bg-purple-100 px-1 rounded">-pe</span></li>
                        <li className="flex justify-between items-center text-gray-700"><span>Genitivo</span> <span className="font-mono text-red-700 font-bold bg-red-100 px-1 rounded">Ordem Inversa</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
