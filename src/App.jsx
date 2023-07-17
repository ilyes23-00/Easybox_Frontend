
import { Hero } from './components/Hero/Hero';
import Provide  from './components/Provide/Provide';
import Service  from './components/Service/Service';
import Choose  from './components/Choose/Choose';
import Client  from './components/Clients/Client';
import Footer  from './components/Footer/Footer';


function App() {
 
  return (
    <>
      <div className=''>
         <Hero />
      </div>
      
      {/* what we provide section  */}
        <Provide />
      {/* what we provide section  */}

      {/* Why us  section  */}
        <Choose />
      {/* Why us  section  */}

      {/* services section  */}
        <Service />
      {/* services section  */}

      {/* Our partner section  */}
        <Client />
      {/* Our partner section  */}

      {/* Our partner section  */}
        <Footer />
      {/* Our partner section  */}
      



      
    </>
  )
}

export default App
