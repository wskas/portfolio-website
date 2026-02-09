import Hero from './components/Hero';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import Footer from './components/footer';
import Header from './components/Header';
import About from './components/About';
import WorkExperiences from './components/WorkExperiences';
import './App.css';

function App() {

  return (
    <>
      <div className="fixed inset-0 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:24px_24px]"/>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-soft-light filter blur-[60px] opacity-30">
            </div>
            <div className="absolute top-0 left-0 md:w-96 md:h-96 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-[60px] opacity-30">
              </div><div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-soft-light filter blur-[60px] opacity-30">
                </div>
                 <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-soft-light filter blur-[60px] opacity-20">
                  </div>
                  </div>
                  </div>
      <div className='main'>
          <div className='gradient' />
      </div>
      <div className='content relative'>
        <Header />
        <Hero />
        <About />
        <Projects />
        <WorkExperiences />
        {/* <ContactMe /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
