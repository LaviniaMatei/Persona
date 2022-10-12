import "./print.css"
import Paragraph from './components/Paragraph'
import About from "./components/About";
import SliderComp from "./components/SliderComp";
import Header from './components/Header'
import Image from './components/Image'
import Button from './components/Button'
import Footer from './components/Footer'
import {nanoid} from 'nanoid'



function App() {

  return (
      <div>
          <div className="container">
              <div className="header">
                  <Image/>
                  <Button/>
              </div>
              <div className="aside">
                  <div>
                      <Header  title='About'/>
                      <About/>
                  </div>
                  <div><Header  title='Goals'/>
                      <Paragraph />
                  </div>
                  <div>
                      <Header  title='Needs'/>
                      <Paragraph />
                  </div>
                  <div> <Header  title='Pain Points'/>
                      <Paragraph />
                  </div>
                  <div>
                      <Header  title='Personality'/>
                      <SliderComp/>
                  </div>
              </div>
          </div>
          <div className="footer">
              <Footer/>
          </div>
      </div>

  );
}

export default App;
