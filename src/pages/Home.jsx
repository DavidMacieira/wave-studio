import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Services from '../components/Services';
import Clients from '../components/Clients';
import About from '../components/About';
import Contact from '../components/Contact/Contact';

function Home() {
  return <><Navbar /><main><Hero /><Problem /><Services /><Clients /><About /><Contact /></main></>;
}

export default Home;
