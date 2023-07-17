import {
  Card,
  CardBody,
  Typography
} from "@material-tailwind/react";
import './Choose.css'

let resons =[
  {
    'id':1,
    'title':'Understanding Customer Needs',
    'disc': 'we make sure that your project match your perception on how your project going to look like.'
  },
  {
    'id':2,
    'title':'Design and Development',
    'disc': 'We provide solutions for all aspects of corporate communication and collaboration to create.'
  },
  {
    'id':3,
    'title':'Enterprise app integration',
    'disc': 'We integrate enterprise systems to create interconnected ecosystems for seamless enterprise management.'
  },
  {
    'id':4,
    'title':'Choose Your coding language',
    'disc': 'We have varaiety of coding languages at hand for you to choose which one work for you the best'
  },
  {
    'id':5,
    'title':'QA & testing',
    'disc': 'We make application testing a part of the software delivery cycle as well as offering it as a standalone service.'
  },
  {
    'id':6,
    'title':'Maintenance',
    'disc': 'We provide multi-tier maintenance and technical support on flexible service delivery terms to match your project scope.'
  },

]

const Choose = () => {
  return (
    <section className='bg-red py-10 choose-section'>
        <div className='flex flex-col items-center'>
              <span className='text-[#F99D58] tracking-wide font-semibold px-6 py-2 w-40 my-6 text-center choose-span relative'>Why Us</span>
              <h3 className='text-4xl lg:text-5xl xl:text-6xl font-bold uppercase my-8 '>Our Company Activities</h3>
              <p className='my-5 lg:my-8 text-gray-700 text-md lg:text-lg text-center px-3 capitalize'>we keep track of every success and we keep growing with each project to prove we are the best at what we do.</p>
        </div>  
          <div className=' container mx-auto'>
            <section className='intro-video w-1/2 h-80 flex justify-center items-center mx-auto z-1 rounded-lg '>
                 <span className='button mx-2 my-50 cursor-pointer'>
                  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="18px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
                </span>
              </section>
              <section className='bg-[#2C3437] -mt-20 lg:-mt-10 -z-50 relative w-full  rounded-lg pt-32 pb-32 '>
                <div className='grid items-center justify-around md:gap-8 lg:gap-6  mb-6 grid-cols-2 lg:grid-cols-4 border-b-4 border-gray-300 mx-4 pb-24'>
                    <div className='flex flex-col text-white  text-center font-bold text-3xl mx-2 my-4 px-4'>
                        <span>+ 50 </span> 
                        <span>Clients </span> 
                    </div>
                    <div className='flex flex-col text-white  text-center font-bold text-3xl mx-2 my-4 px-4'>
                        <span>+3 Years </span> 
                        <span>Experience </span> 
                    </div>
                    <div className='flex flex-col text-white  text-center font-bold text-3xl mx-2 my-4 px-4'>
                        <span>+ 100  </span> 
                        <span>Project </span> 
                    </div>
                    <div className='flex flex-col text-white  text-center font-bold text-3xl mx-2 my-4 px-4'>
                        <span>+ 20K  </span> 
                        <span>Using Our Apps </span> 
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                  <span className='text-[#F99D58] tracking-wide font-semibold px-6 py-2 w-40 my-6 text-center choose-span relative'>What We Offer</span>
                  <h3 className='text-2xl lg:text-3xl xl:text-4xl font-bold uppercase my-5 text-white'>Reasons to choose Us</h3>
                  <p className='my-3 lg:my-8 text-white text-md lg:text-lg text-center px-3 capitalize'>You Get a variety of speacial feauteurs provided by EasyBox team that help your project grow and generate more income.</p>
                </div>  
                <div className='grid md:gap-8 lg:gap-6  mb-6 md:grid-cols-2 lg:grid-cols-3   items-stretch'>
                  {
                    resons.map(reson =>
                    {
                        return <Card className="mt-6 mx-4 relative bg-white text-[#2C3437] hover:bg-[#F99D58] hover:" key={reson.id}>
                                <CardBody>
                                    <span className=' bg-[#F99D58] px-5 py-3 text-xl font-bold text-white hover:text-black absolute -top-5 rounded-xl '>
                                      0{reson.id}
                                    </span>
                                    <Typography variant="h5"  className="my-6">
                                    {reson.title}
                                    </Typography>
                                    <Typography>
                                    {reson.disc}
                                    </Typography>
                                </CardBody>
                            
                            </Card>
                    })
                  }
                </div>  
              </section>
        </div>  
    </section>
  )
}

export default Choose