import Navigation from '.././components/ui/navigation';
import Header from '.././components/header/header';
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
   <Header />
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
