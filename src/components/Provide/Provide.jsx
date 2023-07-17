import Carousel from '../Carousel/Carousel'
import './Provide.css'

const Provide = () => {
  return (
    <div className='offers mb-10 pt-10'>
        <div className='flex flex-col items-center'>
              <span className='text-[#F99D58] tracking-wide font-semibold px-6 py-2 w-40 my-6 text-center offer-span relative'>What We Offer</span>
              <h3 className='text-4xl lg:text-5xl xl:text-6xl font-bold uppercase my-8'>Our Best Solutions</h3>
              <p className='my-5 lg:my-8 text-gray-700 text-md lg:text-lg text-center px-3 capitalize'>our most popular solutions at your hand, let us bring your ideas into reality.</p>
        </div>  
      <section className=' my-20 container mx-auto'>
        <Carousel /> 
      </section>       
    </div>
  )
}

export default Provide