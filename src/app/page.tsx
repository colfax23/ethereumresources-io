"use client"

import React, { useState } from 'react';
import './globals.css';
import LinkItem from './components/LinkItem';
import { links } from './data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <main className="py-8 flex min-h-screen flex-col items-center justify-evenly ">
      <header className="py-4 md:py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold">Ethereum Resources</h1>
        </div>
      </header>

      <div className="py-4 md:py-8 mx-auto max-w-md md:max-w-2xl xl:max-w-4xl">
        <table className="border-collapse table-auto">
          <thead>
            <tr className="bg-white border-b dark:bg-gray-400 dark:border-gray-700">
              <th className="p-4 border text-left">Website</th>
              <th className="p-4 border text-left">Description</th>
              <th className="p-4 border text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {links.map((link, index) => (
              <LinkItem key={index} link={link} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="py-8">
        Is something missing or wrong?  Drop me a PR or Issue on
        <a 
          href="https://github.com/colfax23/ethereumresources-io" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 ml-2"
        >
          GitHub
        </a>.
      </div>
    </main>
  );
}

export default App;
