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
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${isNavOpen ? "open" : ""}`} id="mainNav" ref={navRef}>
                <div class="container px-4 px-lg-5">
                    <Link class="navbar-brand" to="/#page-top">Nkanyiso</Link>
                    <button class="navbar-toggler navbar-toggler-right" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={toggleNav}
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">{
                        props.isProjectPage ? 
                            <div>
                                <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/#about" >About</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/#services">Skill set</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/#contact">Contact</Link></li>
                            </div> : 
                            <div>
                                <li class="nav-item"><Link class="nav-link" to="/#about" >About</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/#services">Skill set</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/#portfolio">Portfolio</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/#contact">Contact</Link></li>
                            </div>
                    }
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}