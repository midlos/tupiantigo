
import React from 'react';

interface SectionIntroL5Props {
    onNext: () => void;
}

export const SectionIntroL5: React.FC<SectionIntroL5Props> = ({ onNext }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 slide-in">
            <div className="text-center mb-8">
                <div className="inline-block bg-blue-100 rounded-full p-6 mb-4">
                    <span className="text-6xl">💧</span>
                </div>
                <h2 className="text-3xl font-bold text-green-800">"Eu fui ao Itororó beber água e não achei..."</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-6 border-l-4 border-blue-500">
                <div className="flex items-center gap-4">
                    <div className="text-4xl pulse-icon">🎵</div>
                    <div>
                        <p className="text-xl font-bold text-blue-800">Que quer dizer Itororó?</p>
                        <p className="text-lg text-gray-700">E a expressão "estar na pindaíba"?</p>
                    </div>
                </div>
            </div>

            <div className="prose max-w-none text-gray-700 mb-8 space-y-4">
                <p className="text-lg">
                    A famosa cantiga folclórica menciona o <strong>Itororó</strong> (do tupi <em>'y-tororoma</em>, "jorro d'água").
                </p>
                <p className="text-lg">
                    E quando dizemos que alguém está na <strong>pindaíba</strong> (falta de dinheiro, maré de azar)?
                    <br/>
                    Vem de <em>pindá</em> (anzol) + <em>'yba</em> (planta, vara), ou seja, "vara de pescar".
                    Antigamente, dizia-se que alguém "estava na pindaíba" quando estava tão pobre que só lhe restava pescar para comer!
                </p>
                <p className="text-lg">
                    Nesta lição, vamos aprender a estrutura gramatical por trás dessas palavras: a <strong>Relação Genitiva</strong> (indicando posse, origem, ou matéria).
                </p>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNext}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                    Continuar → A Relação Genitiva
                </button>
            </div>
        </div>
    );
};
