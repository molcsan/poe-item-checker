'use client';
import React from 'react';
import ItemChecker from '@/app/components/ItemChecker';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-slate-900 p-8">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />

      <main className="relative max-w-2xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-6xl font-black bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
            Pewpewlazer&apos;s
          </h1>
          <p className="text-2xl font-medium text-white/80">
            PoE Item Checker
          </p>
          <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        </div>

        <ItemChecker />

        <div className="text-center text-sm text-white/60 backdrop-blur-sm bg-white/5 rounded-lg p-3">
          Paste your item stats and click search to check prices on PoE Trade
        </div>
      </main>
    </div>
  );
}
