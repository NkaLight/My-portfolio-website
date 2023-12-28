import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" to="/#page-top">Nkanyiso</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><Link class="nav-link" to="/#about">About</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/#services">Skill set</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/#portfolio">Portfolio</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/#contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}