import React from 'react';
import Link from 'next/link';

function Curso() {
  return (
    <html lang="pt">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <title>Login</title>
      </head>
      <body className="h-screen flex items-center justify-center bg-red-100">
        <div className="w-80 mx-auto bg-black">
          <h2 className="text-lg font-bold text-center mb-4">Login</h2>
          <div className="bg-white shadow-md rounded-md p-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-800 mb-1">
                E-mail
              </label>
              <input
                id="email"
                type="text"
                className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-800 mb-1">
                Senha
              </label>
              <input
                id="password"
                type="text"
                className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
              />
            </div>

            <div className="text-center">
              <a href="" className="text-sm text-gray-500 hover:underline">
                Esqueci minha senha
              </a>
            </div>

            <div>
              <button className="w-full text-sm bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white shadow">
                Login
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Curso;
