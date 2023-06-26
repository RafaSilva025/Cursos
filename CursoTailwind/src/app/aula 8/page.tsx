import React from 'react';
import Link from 'next/link'; 
    
function Curso() {
  return (
    <>
      <html lang="pt">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Curso gratuito TailwindCSS</title>
          <Link rel="stylesheet" href="tailwind.css" />
        </head>
        <body className="bg-gray-100 m-6 h-screen">
          <div className="grid grid-cols-3 gap-4 bg-gray-300 h-36">
            <div className="p-4 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
            <div className="p-4 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
            <div className="p-4 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
          </div>
          <h1 className='text-blue-300 hover:text-gray-800 hover:underline'>Drogas</h1>
          <br />

          <div className='group w-72 h-24 bg-gray-100 p-4 text-black text-center'>
            <h4 className='font-bold group-hover:text-blue-800 text-center'>Título</h4>
            <p className='hover:bg-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>  
          <div className="flex justify-center items-center space-x-4 bg-gray-300 h-36">
            <div className="w-24 h-24 p-4 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
            <div className="flex-grow flex-shrink-0 w-24 h-24 p-4 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
            <div className="w-24 h-24 p-4 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
          </div>
          <br />
          <input
              type="text"
              class="bg=gray-100 text-lg px-4 py-2 focus:text-red-300 "
          />
        </body>
      </html>
    </>
  );
}

export default Curso;