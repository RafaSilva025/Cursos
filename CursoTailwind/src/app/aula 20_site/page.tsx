import React from 'react';
import Link from 'next/link';

function Curso() {
  return (
    <html lang="pt">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <title>Home Page</title>
        </head>
          <body className="bg-gray-50 text-gray-600">
            {/*header*/}
            <div>
                <div className='container max-w-5xl mx-auto px-4 h-24 flex items-center'>
                    <div className='font-black'>
                          LOGO
                    </div>    
                    
                    <ul className='flex items-center ml-auto space-x-4'>
                      <li>
                        <a href="text-sm text-gray-500 hover:text-gray-800 hover:underline">Como reservar</a>
                        </li>
                        <li><a href="text-sm text-gray-500 hover:text-gray-800 hover:underline">Sobre nós</a></li>
                        <li><a href="text-sm text-gray-500 hover:text-gray-800 hover:underline">informações</a></li>
                        <li><a href="text-sm text-gray-500 hover:text-gray-800 hover:underline">Contato</a></li>
                        
                      
                    </ul>        
                </div>
            </div>
        {/*Fim header*/} 
        
        {/*banner*/}
        <div
          style={{background: `url('./img/hero-image-1.png')`,
          height: '450px',
          }}>
          <div className="container max-w-5xl mx-auto px-4 h-full flex items-center justify-center">
            <div className='text-center'>
              <h1 className='text-gray-200 text-3xl mb-2'>Onde voce quer ir?</h1>
              <p className='text-green-100'>Escolha o estado e cidade para achar os melhores resorts.</p>
            </div>

            <div className='mt-7'>
              <form className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                <select className='bg-grey-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                  <option value="">Escolha o Estado</option>
                </select>

                <select className='bg-grey-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                  <option value="">Escolha cidade</option>
                </select>

                <button className='col-span-2 lg:col-span-1 inline-flex items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>  
                Pesquisar Resorts</button>
              </form>
            </div>
          </div>
        </div>
        {/*Fim banner*/} 

        {/*Featured*/}
        <div>
          <div className='container max-w-5xl mx-auto px-4 py-20'>
            <div className='flex flex-col-reverse lg:flex-row'>
              <div className='lg:pr-10'>
                  <div className='text-sm text-gray-400 font-medium'>RESORT EM DESTAQUE</div>
                   <div className="text-2xl">Ecoresort Praia do Forte Bahia</div>
                    <div className="text-sm text-gray-400 font-medium mt-2">Hotel qualidade 5 estrelas</div>
                    <div className="text-sm text-gray-400 font-medium mt-4">
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ea non quasi? Deleniti error illum necessitatibus officia ullam. Dicta harum laborum minima nam nobis perspiciatis quaerat unde. Aspernatur corporis, voluptas.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ea non quasi? Deleniti error illum necessitatibus officia ullam. Dicta harum laborum minima nam nobis perspiciatis quaerat unde. Aspernatur corporis, voluptas.</p>
                    </div>
                
                <div className='mt-4'>
                  <a href="" className="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
                            Solicitar reserva
                  <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0 lg:ml-auto mb-5 lg:mb-0">
              <img src="./img/featured-img.png" width="450" alt="Imagem de destaque" />
                    </div>

                </div>
              </div>
            </div>
        {/*Fim Featured*/} 


        {/* resorts grid */}
<div>
  <div className="container max-w-5xl mx-auto px-4">
    <h3 className="text-2xl text-gray-500 font-semibold text-center mb-8">Conheça mais resorts</h3>

    <div className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6 space-y-6 md:space-y-0">
      <div className="relative md:col-span-2 md:row-span-2 rounded-md overflow-hidden">
        <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
          Beach Park Resort
        </div>
        <img src="./img/image-shadow.png" className="absolute bottom-0 left-0 right-0 h-20 z-10" alt="Shadow" />
        <img src="./img/hotel-1.jpeg" className="w-full h-full object-cover" alt="Resort 1" />
      </div>
      <div className="relative md:col-span-2 md:h-40 rounded-md overflow-hidden">
        <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
          Salinas do Maragogi Resort
        </div>
        <img src="./img/image-shadow.png" className="absolute bottom-0 left-0 right-0 h-20 z-10" alt="Shadow" />
        <img src="./img/hotel-2.jpeg" className="w-full h-full object-cover" alt="Resort 2" />
      </div>
      <div className="relative rounded-lg overflow-hidden">
        <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
          Grand Palladium
        </div>
        <img src="./img/image-shadow.png" className="absolute bottom-0 left-0 right-0 h-20 z-10" alt="Shadow" />
        <img src="./img/hotel-3.jpeg" className="w-full h-full object-cover" alt="Resort 3" />
      </div>
      <div className="relative rounded-lg overflow-hidden">
        <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
          Arraial dAjuda Eco Resort
        </div>
        <img src="./img/image-shadow.png" className="absolute bottom-0 left-0 right-0 h-20 z-10" alt="Shadow" />
        <img src="./img/hotel-4.jpeg" className="w-full h-full object-cover" alt="Resort 4" />
      </div>
    </div>
  </div>
</div>
{/* Fim resorts grid */}

    {/* Form search*/}
    <div className='py-20'>
          <div className='container max-w-5xl mx-auto px-4 flex justify-center'>
            <form className='space-x-4'>
                <select className='bg-grey-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                  <option value="">Escolha o Estado</option>
                </select>

                <select className='bg-grey-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                  <option value="">Escolha cidade</option>
                </select>

                <button className='inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>  
                Pesquisar Resorts</button>
              </form>      
          </div>      
    </div>    
    {/* Fim form search */}
        
{/* Footer */}
<div className="border-t border-gray-200">
  <div className="container max-w-5xl mx-auto p-4 flex items-center justify-between">
    <div className="text-gray-400 font-black">
      LOGO
    </div>

    <div className="flex items-center space-x-3">
      <a href="#"><img src="./img/icon-facebook.png" alt="Facebook"/></a>
      <a href="#"><img src="./img/icon-instagram.png" alt="Instagram"/></a>
    </div>
  </div>
</div>
{/* Fim Footer */}
 

    </body>
    </html>
  );
}

export default Curso;      