import React from 'react';
import Link from 'next/link';

function Curso() {
  return (
    <>
      <html lang="pt">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Curso gratuito TailwindCSS</title>
          <Link rel="stylesheet" href="tailwind.css" />
        </head>
        <body className="bg-gray-100 h-screen">
          <div className="flex justify-center items-center space-x-4 bg-gray-300 h-36">
            <div className="w-24 h-24 p-4 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
            <div className="w-24 h-24 p-4 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
            <div className="w-24 h-24 p-4 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
          </div>
          <br />

          <div className="flex justify-center items-center space-x-4 bg-gray-300 h-36">
            <div className="w-24 h-24 p-4 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
            <div className="flex-grow flex-shrink-0 w-24 h-24 p-4 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
            <div className="w-24 h-24 p-4 text-white bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500"></div>
          </div>
        </body>
      </html>
    </>
  );
}

export default Curso;