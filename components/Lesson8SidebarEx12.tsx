
import React from 'react';

export const Lesson8SidebarEx12: React.FC = () => {
    return (
        <div className="bg-green-50 p-4 rounded-xl border border-green-200 shadow-md text-sm">
            <h3 className="font-bold text-green-800 mb-3 text-center border-b border-green-200 pb-2">Vocabulário de Apoio</h3>
            
            <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
                
                {/* Gramática */}
                <div>
                    <h4 className="font-bold text-gray-800 mb-2 border-b border-gray-200 flex items-center gap-2">
                        <span>🧩</span> Gramática
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>ajuntamento</span> <span className="font-mono text-gray-700 font-bold">tyba</span></li>
                    </ul>
                </div>

                {/* Substantivos */}
                <div>
                    <h4 className="font-bold text-blue-800 mb-2 border-b border-blue-200 flex items-center gap-2">
                        <span>📦</span> Substantivos
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>andorinha</span> <span className="font-mono text-blue-700 font-bold">taperá</span></li>
                        <li className="flex justify-between"><span>araçá</span> <span className="font-mono text-blue-700 font-bold">arasá</span></li>
                        <li className="flex justify-between"><span>caraguatá</span> <span className="font-mono text-blue-700 font-bold">karaguatá</span></li>
                        <li className="flex justify-between"><span>cobra</span> <span className="font-mono text-blue-700 font-bold">mboîa</span></li>
                        <li className="flex justify-between"><span>ema</span> <span className="font-mono text-blue-700 font-bold">nhandu</span></li>
                        <li className="flex justify-between"><span>faca</span> <span className="font-mono text-blue-700 font-bold">kysé</span></li>
                        <li className="flex justify-between"><span>mata</span> <span className="font-mono text-blue-700 font-bold">ka'a</span></li>
                        <li className="flex justify-between"><span>palmeira</span> <span className="font-mono text-blue-700 font-bold">pindoba</span></li>
                        <li className="flex justify-between"><span>sal</span> <span className="font-mono text-blue-700 font-bold">îukyra</span></li>
                        <li className="flex justify-between"><span>sapé</span> <span className="font-mono text-blue-700 font-bold">sapé</span></li>
                        <li className="flex justify-between"><span>taquara</span> <span className="font-mono text-blue-700 font-bold">takûara</span></li>
                    </ul>
                </div>

                {/* Adjetivos */}
                <div>
                    <h4 className="font-bold text-amber-800 mb-2 border-b border-amber-200 flex items-center gap-2">
                        <span>✨</span> Adjetivos
                    </h4>
                    <ul className="space-y-1">
                        <li className="flex justify-between"><span>duro</span> <span className="font-mono text-amber-700 font-bold">atã</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
