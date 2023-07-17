import Header from '../Header/Header';
import './Hero.css';



export const Hero = () => {
  return (
    <div className="bg-black-100 h-screen  hero-section relative ">
      
      <Header />
      <div className='lg:flex justify-between w-72  social hidden 2xl:flex '>
        <a href='' className='hover:text-[#F99D58] hover:tracking-widest hover:bg-gray-50 py-2 px-2 rounded-md transition-all '>Youtube</a>
        <a href='' className='hover:text-[#F99D58] hover:tracking-widest hover:bg-gray-50 py-2 px-2 rounded-md transition-all '>Instagram</a>
        <a href='' className='hover:text-[#F99D58] hover:tracking-widest hover:bg-gray-50 py-2 px-2 rounded-md transition-all '>Facebook</a>
      </div>
      <section className="dark:bg-gray-800 dark:text-gray-100  text-white h-[58rem]">
        <div className="container h-full flex flex-col justify-center lg:items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-left rounded-sm  xl:max-w-3xl lg:text-left">
            <span className='my-4 text-md intro-text'> Welcome to our Agency</span>
            <h1 className="leading-relaxed  text-5xl font-bold  sm:text-6xl ">Experience Design and Intelligent Marketing</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Your trusted partner in the development of intelligent and modern mobile and web applications. </p>
            <div className="flex space-y-4 items-center justify-center flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer " href="#" className="discover px-4 py-3 text-md font-semibold uppercase rounded dark:bg-violet-400 dark:text-gray-900">Discover More</a>
              <a rel="noopener noreferrer" href="#" className="px-2 py-3 text-lg font-semibold   dark:border-gray-100 flex items-center ">
                <span className='button mx-2'>
                  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="18px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
                </span>
                how it works
               </a>
            </div>
          </div>
          <div className="md:flex items-center justify-center p-6 mt-8  hidden lg:block  image-intro z-1">
           <img src="../../src/assets/images/introBg3.png" alt="" className="object-contain icons-hero" loading='lazy'/>
          </div>
        </div>
      </section>
    </div>
  )
}
