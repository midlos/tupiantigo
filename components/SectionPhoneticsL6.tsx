
import React from 'react';

interface SectionPhoneticsL6Props {
    onNext: () => void;
}

export const SectionPhoneticsL6: React.FC<SectionPhoneticsL6Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🗣️ Algumas Regras Fonéticas</h2>
            
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-8">
                <p className="text-lg text-gray-800 mb-4">
                    Quando uma consoante surda (<strong>K, T, P, S</strong>) vem depois de um som nasal (m, n, ng, ˜, nh), ela muda para facilitar a pronúncia.
                </p>
                <p className="text-sm text-gray-600 italic">
                    Regra importante: Isso <strong>não acontece</strong> se a palavra seguinte já tiver outro som nasal.
                </p>
            </div>

            {/* Rules Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* K -> NG */}
                <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-red-500 hover:bg-red-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-gray-400">K</span>
                        <span className="text-xl">➡️</span>
                        <span className="text-2xl font-bold text-red-600">NG</span>
                    </div>
                    <p className="text-gray-600 text-sm">kunumi + <span className="font-bold text-red-800">k</span>atu</p>
                    <p className="text-lg font-bold text-green-800">kunumi-<span className="text-red-600">ng</span>atu</p>
                    <p className="text-xs text-gray-500">(menino bom)</p>
                </div>

                {/* T -> ND */}
                <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-blue-500 hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-gray-400">T</span>
                        <span className="text-xl">➡️</span>
                        <span className="text-2xl font-bold text-blue-600">ND</span>
                    </div>
                    <p className="text-gray-600 text-sm">ka'a-atã + <span className="font-bold text-blue-800">t</span>yba</p>
                    <p className="text-lg font-bold text-green-800">ka'atã-<span className="text-blue-600">nd</span>yba</p>
                    <p className="text-xs text-gray-500">(Catanduva)</p>
                </div>

                {/* P -> MB/M */}
                <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-green-500 hover:bg-green-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-gray-400">P</span>
                        <span className="text-xl">➡️</span>
                        <span className="text-2xl font-bold text-green-600">MB / M</span>
                    </div>
                    <p className="text-gray-600 text-sm">nhu + -<span className="font-bold text-green-800">p</span>e</p>
                    <p className="text-lg font-bold text-green-800">nhu-<span className="text-green-600">m</span>e</p>
                    <p className="text-xs text-gray-500">(no campo)</p>
                </div>

                {/* S -> ND */}
                <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-purple-500 hover:bg-purple-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-gray-400">S</span>
                        <span className="text-xl">➡️</span>
                        <span className="text-2xl font-bold text-purple-600">ND</span>
                    </div>
                    <p className="text-gray-600 text-sm">mena + <span className="font-bold text-purple-800">s</span>y</p>
                    <p className="text-lg font-bold text-green-800">me<span className="text-gray-400 line-through">na</span>-<span className="text-purple-600">nd</span>y</p>
                    <p className="text-xs text-gray-500">(sogra)</p>
                </div>
            </div>

            {/* Exceptions */}
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-300">
                <h3 className="font-bold text-gray-700 text-lg mb-3">⚠️ Atenção: Exceções</h3>
                <p className="mb-2 text-gray-600">
                    Se a palavra seguinte já tiver um som nasal, a mudança <strong>não ocorre</strong>.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                        <span className="font-mono font-bold text-gray-800">kunumi + pora<span className="text-red-500">ng</span></span> → 
                        <span className="font-mono text-green-700 ml-2">kunumi-porang-a</span> 
                        (não vira mb porque já tem 'ng')
                    </li>
                    <li>
                        <span className="font-mono font-bold text-gray-800">Tupã + <span className="text-red-500">s</span>y</span> → 
                        <span className="font-mono text-green-700 ml-2">Tupã sy</span> 
                        (não há composição, palavras separadas)
                    </li>
                </ul>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Exercício
                </button>
            </div>
        </div>
    );
};
