import './App.css';
import React from 'react';
import About from './components/About';
import Masthead from './components/Masthead';
import Nav from './components/Nav';
import Skillset from './components/Skillset';
import Project from './components/Project';
import CV from './components/CV';
import Contact from './components/Contact';
import data from './data';
import Footer from './components/Footer';



export default function App() {


  // const  [isMobile, setIsMobile] = React.useState(!navigator.userAgent.match(/iphone|android|blackberry/ig) || false)

  // React.useEffect(()=>{
  //   setIsMobile(!navigator.userAgent.match(/iphone|android|blackberry/ig) || false)
  // },[isMobile] )
  let isMobile = false
  
  let count = 0


  
  const skill = data.skill.map(item => {

          return(
          <Skillset
              skill= {item.skillset}
              description={item.description}
        />
          )
  })

  const projects = data.projects.map(item => {
    count++;
      return(
        <Project
          name={item.name}
          category = {item.category}
          img = {item.img}
          count={count}
        />

      )
  })
  

  return (
    <div >
      <Nav/>
      <Masthead/>
      <About/>
      <section class="skillset-section" id="services">
            <div class="container px-4 px-lg-5">
                <h2 class="text-center mt-0">Skill set includes:</h2>
                <hr class="divider" />
                <div class="row gx-4 gx-lg-5"></div>
                {skill}
              </div>
      </section>
      <CV/>
      
      <div id="portfolio">
          <div class="container-fluid p-0">
            <div class="row g-0"></div>
            <div className={isMobile ? "project" : "project-grid"}>
                {projects}
            </div>
            

          </div>
          <Contact/>
          <Footer/>
      </div>

    </div>


  );
}