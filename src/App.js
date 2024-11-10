import Clients from './components/Hello/Clients';
import Features from './components/Hello/Features';
import Footer from './components/Hello/Footer';
import Header from './components/Hello/Header';
import Hero from './components/Hello/Hero';
import Pricing from './components/Hello/Pricing';

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Clients />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;


