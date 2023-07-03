import Navigation from '.././components/ui/navigation';
import Header from '../components/header/header';
import About from '.././components/about/about';
import Menu from '.././components/menu/menu';
import Coffee from '.././components/coffee/coffee';
import Crew from '.././components/crew/crew';
import Reviews from '.././components/reviews/reviews';
import Reservation from '.././components/reservation/reservation';
import Footer from '.././components/footer/footer';

function HomePage() {
  return (
  <>
   <Navigation/>
   <Header bgi={process.env.PUBLIC_URL + '/header-_1_.webp'} headerText='CSSpresso: The perfect blend of caffeine and code' headerParagraph='A haven for IT professionals, CSSpresso is the ideal spot for a much-needed caffeine boost and coding session.' />
  <About/>
  <Menu/>
  <Coffee/>
  <Crew/>
  <Reviews/>
  <Reservation/>
  <Footer/>
  </>
  );
}

export default HomePage;
