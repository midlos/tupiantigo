
import React from 'react';

export const Lesson9SidebarEx13: React.FC = () => {
    return (
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 shadow-md text-sm">
            <h3 className="font-bold text-purple-800 mb-3 text-center border-b border-purple-200 pb-2">Vocabulário de Apoio</h3>
            
            <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
                
                {/* Verbos Pluriformes */}
                <div>
                    <h4 className="font-bold text-red-800 mb-2 border-b border-red-200 flex items-center gap-2">
                        <span>🔥</span> Verbos (s)
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>amar</span> <span className="font-mono text-red-700 font-bold">aûsub (s)</span></li>
                        <li className="flex justify-between"><span>atravessar</span> <span className="font-mono text-red-700 font-bold">asab (s)</span></li>
                        <li className="flex justify-between"><span>sapecar</span> <span className="font-mono text-red-700 font-bold">apek (s)</span></li>
                        <li className="flex justify-between"><span>ver</span> <span className="font-mono text-red-700 font-bold">epîak (s)</span></li>
                    </ul>
                </div>

                {/* Substantivos */}
                <div>
                    <h4 className="font-bold text-blue-800 mb-2 border-b border-blue-200 flex items-center gap-2">
                        <span>📦</span> Substantivos
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>casa</span> <span className="font-mono text-blue-700 font-bold">oka</span></li>
                        <li className="flex justify-between"><span>céu</span> <span className="font-mono text-blue-700 font-bold">ybaka</span></li>
                        <li className="flex justify-between"><span>fogo</span> <span className="font-mono text-blue-700 font-bold">tatá</span></li>
                        <li className="flex justify-between"><span>francês</span> <span className="font-mono text-blue-700 font-bold">maíra</span></li>
                        <li className="flex justify-between"><span>mar</span> <span className="font-mono text-blue-700 font-bold">paranã</span></li>
                        <li className="flex justify-between"><span>menino</span> <span className="font-mono text-blue-700 font-bold">kunumi</span></li>
                        <li className="flex justify-between"><span>montanha</span> <span className="font-mono text-blue-700 font-bold">ybytyra</span></li>
                        <li className="flex justify-between"><span>mulher</span> <span className="font-mono text-blue-700 font-bold">kunhã</span></li>
                        <li className="flex justify-between"><span>navio</span> <span className="font-mono text-blue-700 font-bold">ygarusu</span></li>
                        <li className="flex justify-between"><span>onça</span> <span className="font-mono text-blue-700 font-bold">îagûara</span></li>
                        <li className="flex justify-between"><span>porco</span> <span className="font-mono text-blue-700 font-bold">taîasu</span></li>
                        <li className="flex justify-between"><span>toca</span> <span className="font-mono text-blue-700 font-bold">kûara</span></li>
                        <li className="flex justify-between"><span>velha</span> <span className="font-mono text-blue-700 font-bold">gûaîbi</span></li>
                    </ul>
                </div>

                {/* Adjetivos */}
                <div>
                    <h4 className="font-bold text-amber-800 mb-2 border-b border-amber-200 flex items-center gap-2">
                        <span>✨</span> Adjetivos
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>amarelo</span> <span className="font-mono text-amber-700 font-bold">îub</span></li>
                        <li className="flex justify-between"><span>azul/verde</span> <span className="font-mono text-amber-700 font-bold">oby</span></li>
                        <li className="flex justify-between"><span>bonito</span> <span className="font-mono text-amber-700 font-bold">porang</span></li>
                        <li className="flex justify-between"><span>mau/ruim</span> <span className="font-mono text-amber-700 font-bold">aíb</span></li>
                    </ul>
                </div>

                {/* Posposições */}
                <div>
                    <h4 className="font-bold text-purple-800 mb-2 border-b border-purple-200 flex items-center gap-2">
                        <span>📍</span> Posposições
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>dentro de</span> <span className="font-mono text-purple-700 font-bold">pupé</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
