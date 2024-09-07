import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Footer, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
