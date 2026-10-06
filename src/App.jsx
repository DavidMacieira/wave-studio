import './App.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import Clients from './components/Clients';
import About from './components/About';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Services />
        <Clients />
        <About />
        <Contact />

        <section
          id="services"
          style={{
            minHeight: '100vh',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <h2>Services</h2>
        </section>
      </main>
    </>
  );
}

export default App;