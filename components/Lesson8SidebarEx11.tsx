
import React from 'react';

export const Lesson8SidebarEx11: React.FC = () => {
    return (
        <div className="bg-pink-50 p-4 rounded-xl border border-pink-200 shadow-md text-sm">
            <h3 className="font-bold text-pink-800 mb-3 text-center border-b border-pink-200 pb-2">Vocabulário de Apoio</h3>
            
            <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
                
                {/* Verbos */}
                <div>
                    <h4 className="font-bold text-green-800 mb-2 border-b border-green-200 flex items-center gap-2">
                        <span>⚡</span> Verbos
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>cair</span> <span className="font-mono text-green-700 font-bold">kuî</span></li>
                        <li className="flex justify-between"><span>fazer andar</span> <span className="font-mono text-green-700 font-bold">mo-guatá</span></li>
                        <li className="flex justify-between"><span>fazer bonito</span> <span className="font-mono text-green-700 font-bold">mo-porang</span></li>
                        <li className="flex justify-between"><span>fazer doce</span> <span className="font-mono text-green-700 font-bold">mo-e'e</span></li>
                        <li className="flex justify-between"><span>fazer escapulir</span> <span className="font-mono text-green-700 font-bold">mo-ndyryk</span></li>
                        <li className="flex justify-between"><span>fazer feder</span> <span className="font-mono text-green-700 font-bold">mo-nem</span></li>
                        <li className="flex justify-between"><span>fazer preto</span> <span className="font-mono text-green-700 font-bold">mo-un</span></li>
                        <li className="flex justify-between"><span>fazer verde</span> <span className="font-mono text-green-700 font-bold">mo-oby</span></li>
                        <li className="flex justify-between"><span>fazer vermelho</span> <span className="font-mono text-green-700 font-bold">mo-pyrang</span></li>
                    </ul>
                </div>

                {/* Substantivos */}
                <div>
                    <h4 className="font-bold text-blue-800 mb-2 border-b border-blue-200 flex items-center gap-2">
                        <span>📦</span> Substantivos
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>água/rio</span> <span className="font-mono text-blue-700 font-bold">'y</span></li>
                        <li className="flex justify-between"><span>anta</span> <span className="font-mono text-blue-700 font-bold">tapi'ira</span></li>
                        <li className="flex justify-between"><span>barulho</span> <span className="font-mono text-blue-700 font-bold">pu</span></li>
                        <li className="flex justify-between"><span>caminho</span> <span className="font-mono text-blue-700 font-bold">pé</span></li>
                        <li className="flex justify-between"><span>casa</span> <span className="font-mono text-blue-700 font-bold">oka</span></li>
                        <li className="flex justify-between"><span>céu</span> <span className="font-mono text-blue-700 font-bold">ybaka</span></li>
                        <li className="flex justify-between"><span>chuva</span> <span className="font-mono text-blue-700 font-bold">amana</span></li>
                        <li className="flex justify-between"><span>flor</span> <span className="font-mono text-blue-700 font-bold">mbotyra</span></li>
                        <li className="flex justify-between"><span>gota</span> <span className="font-mono text-blue-700 font-bold">tykyra</span></li>
                        <li className="flex justify-between"><span>lago</span> <span className="font-mono text-blue-700 font-bold">upaba</span></li>
                        <li className="flex justify-between"><span>mãe</span> <span className="font-mono text-blue-700 font-bold">sy</span></li>
                        <li className="flex justify-between"><span>mel</span> <span className="font-mono text-blue-700 font-bold">eíra</span></li>
                        <li className="flex justify-between"><span>menino</span> <span className="font-mono text-blue-700 font-bold">kunumi</span></li>
                        <li className="flex justify-between"><span>onça</span> <span className="font-mono text-blue-700 font-bold">îagûara</span></li>
                        <li className="flex justify-between"><span>pássaro</span> <span className="font-mono text-blue-700 font-bold">gûyrá</span></li>
                        <li className="flex justify-between"><span>urucu</span> <span className="font-mono text-blue-700 font-bold">uruku</span></li>
                    </ul>
                </div>

                {/* Adjetivos */}
                <div>
                    <h4 className="font-bold text-amber-800 mb-2 border-b border-amber-200 flex items-center gap-2">
                        <span>✨</span> Adjetivos
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>bonito</span> <span className="font-mono text-amber-700 font-bold">porang</span></li>
                        <li className="flex justify-between"><span>preto</span> <span className="font-mono text-amber-700 font-bold">un</span></li>
                        <li className="flex justify-between"><span>verde</span> <span className="font-mono text-amber-700 font-bold">oby</span></li>
                        <li className="flex justify-between"><span>vermelho</span> <span className="font-mono text-amber-700 font-bold">pyrang</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
