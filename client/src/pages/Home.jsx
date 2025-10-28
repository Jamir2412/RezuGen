import Banner from '../Components/home/Banner'
import CallToAction from '../Components/home/CallToAction'
import FeatureSection from '../Components/home/FeatureSection'
import Footer from '../Components/home/Footer'
import HeroSection from '../Components/home/HeroSection'
import Testimonials from '../Components/home/Testimonials'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HeroSection/>
      <FeatureSection/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home