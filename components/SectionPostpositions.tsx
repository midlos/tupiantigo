
import React from 'react';

interface SectionPostpositionsProps {
    onNext: () => void;
}

export const SectionPostpositions: React.FC<SectionPostpositionsProps> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">📍 A Posposição em Tupi</h2>
            
            {/* Intro Example */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-8 border-l-4 border-amber-500 text-center">
                <div className="text-4xl mb-2">🤔</div>
                <h3 className="text-2xl font-bold text-amber-800 mb-2">Ixé a-ker ka'a-pe.</h3>
                <p className="text-lg text-gray-700">Eu durmo no mato.</p>
            </div>

            <div className="prose max-w-none text-gray-700 mb-8">
                <p className="mb-4">
                    As preposições do português correspondem, em tupi, a <strong>posposições</strong>, porque aparecem <strong>depois</strong> dos termos que regem.
                </p>
            </div>

            {/* PE */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-600 text-white font-bold text-xl px-4 py-2 rounded-lg shadow">-PE</span>
                    <span className="text-lg font-semibold text-green-800">= em, para (geralmente locativo). É átona (usa-se hífen).</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="font-bold text-green-700">siri 'y-pe</p>
                        <p className="text-sm text-gray-600">no rio dos siris (Sergipe)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="font-bold text-green-700">akuti îy-pe</p>
                        <p className="text-sm text-gray-600">no rio das cotias (Cotegipe)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="font-bold text-green-700">îakaré 'y-pe</p>
                        <p className="text-sm text-gray-600">no rio dos jacarés</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="font-bold text-green-700">'y kûá-pe</p>
                        <p className="text-sm text-gray-600">na enseada do rio (Iguape)</p>
                    </div>
                </div>
            </div>

            {/* SUPE */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-600 text-white font-bold text-xl px-4 py-2 rounded-lg shadow">SUPÉ</span>
                    <span className="text-lg font-semibold text-blue-800">= para (pessoas ou coisas - dativo). Tônica.</span>
                </div>
                <p className="text-sm text-gray-500 mb-3 italic">Só usada para a 3ª pessoa.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="font-bold text-blue-700">abá supé</p>
                        <p className="text-sm text-gray-600">para o índio</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="font-bold text-blue-700">morubixaba supé</p>
                        <p className="text-sm text-gray-600">para o cacique</p>
                    </div>
                </div>
            </div>

            {/* SUI */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-500 text-white font-bold text-xl px-4 py-2 rounded-lg shadow">SUÍ</span>
                    <span className="text-lg font-semibold text-red-800">= de (proveniência, causa). Tônica.</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <p className="font-bold text-red-700">îakaré 'y suí</p>
                        <p className="text-sm text-gray-600">do rio dos jacarés</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <p className="font-bold text-red-700">Piratininga suí</p>
                        <p className="text-sm text-gray-600">de Piratininga</p>
                    </div>
                </div>
            </div>

            {/* PUPE */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-600 text-white font-bold text-xl px-4 py-2 rounded-lg shadow">PUPÉ</span>
                    <span className="text-lg font-semibold text-purple-800">= dentro de. Tônica.</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <p className="font-bold text-purple-700">arará kûara pupé</p>
                        <p className="text-sm text-gray-600">dentro do buraco das ararás</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <p className="font-bold text-purple-700">oka pupé</p>
                        <p className="text-sm text-gray-600">dentro da casa</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → Exercício 3
                </button>
            </div>
        </div>
    );
};
