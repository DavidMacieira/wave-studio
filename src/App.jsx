import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

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