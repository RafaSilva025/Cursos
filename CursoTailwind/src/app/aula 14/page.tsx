import React from 'react';
import Link from 'next/link';

function Curso() {
  return (
    <>
      <html lang="pt">
        <head>
          <meta />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Curso gratuito TailwindCSS</title>
          <Link rel="stylesheet" href="tailwind.css" />
        </head>
        <body className="bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 py-8 space-y-8">
            <div>       
                <h6 className='dark:text-gray-50 font-bold mb-2'>Componente Dropdown</h6>
                <div className='relative'>
                              <button className="flex item-center bg-gray-50 border border-gray-300 focus:border-blue-500 rounded px-2 py-1 text-sm text-gray-800 placeholder-gray-300 focus:outline-none shadow">Botão
                              
                            <svg className='w-5 h-6' data-darkreader-inline-stroke="" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                  </svg></button>
                            <div className='absolute hidden bg-white border border-gray-300 py-1 shadow-md rounded-md text-black'>
                                  <a
                        href=""
                        className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-100"
                    >Link 1</a>
                    <a
                        href=""
                        className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-100"
                    >Link 2</a>
                                        <a
                        href=""
                        className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-100"
                    >Link 3</a>

                    <a
                        href=""
                        className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-100"
                    >Link 4</a>

                    <a
                        href=""
                        className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-100"
                    >Link 5</a>
                </div>
            </div>
              <h6 className="dark:text-gray-50 font-bold mb-2">Componente Input</h6>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 rounded px-2 py-1 text-sm text-gray-800 placeholder-gray-300 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 rounded px-3 py-3 text-lg text-gray-800 placeholder-gray-300 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-3 text-lg text-gray-800 placeholder-gray-300 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Digite seu nome com transition"
                  className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-3 text-lg text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                />
              </div>
            </div>
            <div>
              <h6 className="dark:text-gray-50 font-bold mb-2">Componente Badge/Tag</h6>
              <div className="mb-2">
                <div className="inline-flex item-center text-sm bg-green-100 px-1.5 py-0.5 rounded-md text-green-800 font-medium">
                  Ativo
                </div>

                <div className="inline-flex item-center text-sm bg-green-100 px-1.5 py-0.5 rounded-full text-green-800 font-medium">
                  Ativo
                </div>
              </div>

              <div className="mb-2">
                <div className="inline-flex item-center text-sm bg-red-100 px-1.5 py-0.5 rounded-md text-red-800 font-medium">
                  Inativo
                </div>

                <div className="inline-flex item-center text-sm bg-red-100 px-1.5 py-0.5 rounded-full text-red-800 font-medium">
                  Inativo
                </div>
              </div>

              <div>
                <div className="inline-flex item-center text-sm bg-yellow-100 px-1.5 py-0.5 rounded-md text-yellow-800 font-medium">
                  Em progresso
                </div>

                <div className="inline-flex item-center text-sm bg-yellow-100 px-1.5 py-0.5 rounded-full text-yellow-800 font-medium">
                  Em progresso
                </div>
              </div>
            </div>
            <div>
              <h6 className="dark:text-gray-50 font-bold mb-2">Componente Button</h6>
              <button class="text-sm bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded text-white shadow">
                Save
              </button>

              <button className="text-sm bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white shadow">
                Save
              </button>

              <button className="text-base bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded text-white shadow">
                Save
              </button>
            </div>
            <hr />
            <div>
              <h6 className="dark:text-gray-50 font-bold mb-2">Componente Card</h6>

              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                <div className="w-full bg-gray-100 dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-500">
                  <h4 className="font-bold dark:text-gray-50">Topo</h4>
                </div>

                <div className="p-4 dark:text-gray-50">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti eos error excepturi facere
                  iste laudantium perferendis voluptate. Assumenda, blanditiis dicta dolore ipsa magnam minus natus
                  perferendis provident quaerat rerum!
                </div>

                <div className="w-full dark:text-gray-50 bg-gray-50 dark:bg-gray-900 p-3 border-t border-gray-100 dark:border-gray-500">
                  Rodapé
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>


    </>
  );
}

export default Curso;