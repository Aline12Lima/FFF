import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
import About from "./componentes/About";
import Services from "./componentes/Services";
import Projects from "./componentes/Projects";

function App() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />

      {/* Próximas seções aqui: Portfólio e Contato */}
    </main>
  );
}

export default App;
