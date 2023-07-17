import './service.css';
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const services = [
    {
        'id': 1,
        'color':'#F99D58',
        'icon': '../../src/assets/images/Svg/service2.svg',
        'service': 'Web Devlopment',
        'discp': 'we addapt to your buisness model starting from e-commerce solutions to pesonalized web applications.'
    },
    {
        'id': 2,
        'color':'#F99D58',
        'icon': '../../src/assets/images/Svg/service-mobile.svg',
        'service': 'Mobile App Devlelopment',
        'discp': "we've been trusted by global brands and disruptive startups to deliver world-class mobile experiance.",
    },
    {
        'id': 3,
        'color':'#F99D58',
        'icon': '../../src/assets/images/Svg/video.svg',
        'service': 'Video & Mostion Graphics',
        'discp': "we deliver high quality presentaion for your brand to expand your clients base and bring you closer to ther world.",
    },
    {
        'id': 4,
        'color':'#F99D58',
        'icon': '../../src/assets/images/Svg/service3.svg',
        'service': 'Multi Platform Development',
        'discp': "a good solution for fast building with less expenses so you can speed up and launch your project.",
    },
    {
        'id': 5,
        'color':'#F99D58',
        'icon': '../../src/assets/images/Svg/e-commerce-svg.svg',
        'service': 'E-commerce Solutions',
        'discp': "Our complete e-commerce solutions offer the best features and capabilities while beign fully customizable.",
    },
    {
        'id': 6,
        'color':'#F99D58',
        'icon': '../../src/assets/images/Svg/service4.svg',
        'service': 'E-Marketing & SEO',
        'discp': "your audience should feel connected with your content. therfor, you need to understand your audience better than your competitors.",
    },
    {
        'id': 7,
        'color':'#F99D58',
        'icon': '../../src/assets/images/Svg/service5.svg',
        'service': 'Graphic Design & 3D Design',
        'discp': "we're professional when it comes to delivering the most impressive designs including graphic and 3D design.",
    },
    {
        'id': 8,
        'color':'#F99D58',
        'icon': '../../src/assets/images/Svg/service6.svg',
        'service': 'Logo & Identity Design',
        'discp': "Get the most of reduction in your team’s operating costs for the whole. reduction in your team’s.",
    },
    {
        'id': 9,
        'color':'#F99D58',
        'icon': '../../src/assets/images/Svg/service1.svg',
        'service': 'Ui/Ux Design',
        'discp': "We plan Ui/Ux design plans depending on your needs to provide the best user experience to atract more mouvment into your buisness.",
    },
    {
        'id': 10,
        'color':'#F99D58',
        'icon': '../../src/assets/images/Svg/printing-design.svg',
        'service': 'Print & Packaging Design',
        'discp': "to build brand recognition our experts will help you create packaging with stand-out shelf appeal, provide your customer with simple, digestible information, or redesign existing packaging.",
    },
]
const Service = () => {
  return (
    <div className='services mb-10 pt-10 bg-white'>
        <div className='flex flex-col items-center'>
              <span className='text-[#F99D58] tracking-wide font-semibold px-6 py-2 w-40 my-6 text-center service-span relative'>Our Services</span>
              <h3 className='text-4xl lg:text-5xl xl:text-6x uppercase my-8 font-bold'>This is What We Do</h3>
              <p className='my-5 lg:my-8 text-gray-700 text-md lg:text-lg text-center px-3 capitalize'>we have all the services you need to provide fast, modern, and functioning project.</p>
        </div>  
      <section className=' my-20 container mx-auto'>
            <div className='grid items-center md:gap-8 lg:gap-6  mb-6 md:grid-cols-2 lg:grid-cols-3 '>
                {
                services.map(service => {
                    return <Card className="mt-6 mx-2 card-services" key={service.id}>
                        <CardBody >
                            <div className='flex items-center justify-between mb-5'>
                                    <img src={service.icon} className='text-[#fff] rounded-lg p-2 w-20 h-20 mb-4' loading='lazy'/>
                                    <a href="#" className="inline-block">
                                    <Button size="sm" variant="text" className="flex items-center gap-2"> 
                                        <ArrowLongRightIcon strokeWidth={2} className="w-6 h-6" />
                                    </Button>
                                    </a>
                            </div>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                            {service.service}
                            </Typography>
                            <Typography>
                            {service.discp}
                            </Typography>
                        </CardBody>
                    
                    </Card>
                    })  
                }  
                 
        </div>
      </section>       
    </div>
  )
}

export default Service