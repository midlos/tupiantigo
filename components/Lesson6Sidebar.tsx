
import React from 'react';

export const Lesson6Sidebar: React.FC = () => {
    return (
        <div className="bg-green-50 p-4 rounded-xl border border-green-200 shadow-md text-sm">
            <h3 className="font-bold text-green-800 mb-3 text-center border-b border-green-200 pb-2">Vocabulário de Apoio</h3>
            
            <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
                
                {/* Substantivos */}
                <div>
                    <h4 className="font-bold text-blue-800 mb-2 border-b border-blue-200 flex items-center gap-2">
                        <span>📦</span> Substantivos
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>ajuntamento</span> <span className="font-mono text-blue-700 font-bold">tyba</span></li>
                        <li className="flex justify-between"><span>anzol</span> <span className="font-mono text-blue-700 font-bold">pindá</span></li>
                        <li className="flex justify-between"><span>barulho</span> <span className="font-mono text-blue-700 font-bold">pu</span></li>
                        <li className="flex justify-between"><span>bica d'água</span> <span className="font-mono text-blue-700 font-bold">'y-tororoma</span></li>
                        <li className="flex justify-between"><span>cabeça</span> <span className="font-mono text-blue-700 font-bold">akanga</span></li>
                        <li className="flex justify-between"><span>caixa</span> <span className="font-mono text-blue-700 font-bold">karamemûã</span></li>
                        <li className="flex justify-between"><span>camarão</span> <span className="font-mono text-blue-700 font-bold">poti</span></li>
                        <li className="flex justify-between"><span>campo</span> <span className="font-mono text-blue-700 font-bold">nhu</span></li>
                        <li className="flex justify-between"><span>cana de açúcar</span> <span className="font-mono text-blue-700 font-bold">takûar-e'e</span></li>
                        <li className="flex justify-between"><span>cerrado</span> <span className="font-mono text-blue-700 font-bold">ka'a-atã</span></li>
                        <li className="flex justify-between"><span>chuva</span> <span className="font-mono text-blue-700 font-bold">amana</span></li>
                        <li className="flex justify-between"><span>dança</span> <span className="font-mono text-blue-700 font-bold">poraseîa</span></li>
                        <li className="flex justify-between"><span>enseada</span> <span className="font-mono text-blue-700 font-bold">kûá</span></li>
                        <li className="flex justify-between"><span>fenda</span> <span className="font-mono text-blue-700 font-bold">puka</span></li>
                        <li className="flex justify-between"><span>gota</span> <span className="font-mono text-blue-700 font-bold">tykyra</span></li>
                        <li className="flex justify-between"><span>guará (ave)</span> <span className="font-mono text-blue-700 font-bold">gûará</span></li>
                        <li className="flex justify-between"><span>hálito</span> <span className="font-mono text-blue-700 font-bold">pytu</span></li>
                        <li className="flex justify-between"><span>lugar</span> <span className="font-mono text-blue-700 font-bold">aba</span></li>
                        <li className="flex justify-between"><span>mãe</span> <span className="font-mono text-blue-700 font-bold">sy</span></li>
                        <li className="flex justify-between"><span>mar</span> <span className="font-mono text-blue-700 font-bold">paranã</span></li>
                        <li className="flex justify-between"><span>marido</span> <span className="font-mono text-blue-700 font-bold">mena</span></li>
                        <li className="flex justify-between"><span>mata</span> <span className="font-mono text-blue-700 font-bold">ka'a</span></li>
                        <li className="flex justify-between"><span>menino</span> <span className="font-mono text-blue-700 font-bold">kunumi</span></li>
                        <li className="flex justify-between"><span>mulher</span> <span className="font-mono text-blue-700 font-bold">kunhã</span></li>
                        <li className="flex justify-between"><span>nuvem</span> <span className="font-mono text-blue-700 font-bold">ybatinga</span></li>
                        <li className="flex justify-between"><span>osso</span> <span className="font-mono text-blue-700 font-bold">kanga</span></li>
                        <li className="flex justify-between"><span>passarinho</span> <span className="font-mono text-blue-700 font-bold">gûyrá-'i</span></li>
                        <li className="flex justify-between"><span>pião</span> <span className="font-mono text-blue-700 font-bold">pyryryma</span></li>
                        <li className="flex justify-between"><span>prato</span> <span className="font-mono text-blue-700 font-bold">nha'e</span></li>
                        <li className="flex justify-between"><span>rede (de dormir)</span> <span className="font-mono text-blue-700 font-bold">ini</span></li>
                        <li className="flex justify-between"><span>região</span> <span className="font-mono text-blue-700 font-bold">tetama</span></li>
                    </ul>
                </div>

                {/* Adjetivos */}
                <div>
                    <h4 className="font-bold text-amber-800 mb-2 border-b border-amber-200 flex items-center gap-2">
                        <span>✨</span> Adjetivos
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>bonito</span> <span className="font-mono text-amber-700 font-bold">porang</span></li>
                        <li className="flex justify-between"><span>branco</span> <span className="font-mono text-amber-700 font-bold">ting(a)</span></li>
                        <li className="flex justify-between"><span>cansado</span> <span className="font-mono text-amber-700 font-bold">kane'õ</span></li>
                        <li className="flex justify-between"><span>comprido</span> <span className="font-mono text-amber-700 font-bold">puku</span></li>
                        <li className="flex justify-between"><span>silencioso</span> <span className="font-mono text-amber-700 font-bold">kyriri</span></li>
                        <li className="flex justify-between"><span>vermelho</span> <span className="font-mono text-amber-700 font-bold">pyrang</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
