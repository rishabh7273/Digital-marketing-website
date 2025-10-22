import Navbar from '../Components/Navbar';
import Hero from './Hero';
import Display from './Display';
import Services from './Services';
import WhyUs from './WhyUs';
import Clint from './Clint';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import Faq from './FAQ';
import Footer from "./Footer";


function Structure() {
  return (
    
    <>
    <Navbar/>
      <Hero />
      <Display />
      <Services />
      <WhyUs />
      <Clint />
      <AboutUs />
      <Testimonials />
      <Faq />
      <Footer /> 
   </>

  );
}

export default Structure;
