import React from 'react'
import Title from './components/Title'
import Converter from './components/Converter'
import Footer from './components/Footer';
import ConverterReverse from './components/ConverterReverse';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-initial w-full bg-slate-500">
        <main>
          <Title />
        </main>
      </header>

      <div className="flex-grow flex justify-center w-full p-12 pb-0 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center w-full max-w-lg">
          <div className="bg-slate-500 p-8 rounded w-full">
            <Converter />
            <ConverterReverse />
          </div> 

        </main>
      </div>

      <footer className='flex flex-initial justify-center py-6 text-slate-600'>
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
