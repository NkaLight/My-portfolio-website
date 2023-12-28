import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props){

    const [isNavOpen, setIsNavOpen] = React.useState(false)

    const navRef = React.useRef(null)

    const toggleNav = () =>{
        setIsNavOpen(!isNavOpen)
    }

    const closeOnOutsideClick = (event) => {
        if(isNavOpen && navRef.current && !navRef.current.contains(event.target)){
            setIsNavOpen(false)
        }
    }

    React.useEffect(() => {
        document.addEventListener("click", closeOnOutsideClick);
    
        return () => {
          document.removeEventListener("click", closeOnOutsideClick);
        };
      }, [isNavOpen]);

    return(
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${isNavOpen ? "open" : "open"}`} id="mainNav" ref={navRef}>
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand" href="/#page-top">Nkanyiso Owethu</a>
                    <button class="navbar-toggler navbar-toggler-right" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={toggleNav}
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarResponsive">
                    {//{{ url('/') }}/#service
                        props.isProjectPage ? 
                            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                <li className="nav-item" onClick={toggleNav}><a class="nav-link" href="{{url('/')}}">Home</a></li>
                                <li className="nav-item" onClick={toggleNav}><a className="nav-link" href="/#about" >About</a></li>
                                
                                <li className="nav-item" onClick={toggleNav}><a className="nav-link" href="/#skillset">Skill set</a></li>
                                <li className="nav-item" onClick={toggleNav}><a className="nav-link" href="/#contact">Contact</a></li>
                            </ul> : 
                            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                <li className="nav-item"onClick={toggleNav}><a className="nav-link" href="#about" >About</a></li>
                                <li className="nav-item"onClick={toggleNav}><a className="nav-link" href="#services">Skill set</a></li>
                                <li className="nav-item"onClick={toggleNav}><a className="nav-link" href="#portfolio">Portfolio</a></li>
                                <li className="nav-item"onClick={toggleNav}><a className="nav-link" href="#contact">Contact</a></li>
                            </ul>
                    }
                            
                        </div>
                    </div>
            </nav>
    )
}