import React from "react"

export default function About(){
    return(
        <div>
            <section class="page-section bg-dark text-white" id="about">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h2 class="text-white mt-0">A little bit about me</h2>
                            <hr class="divider divider-light" />
                            <p class="text-white-75 mb-4">My name is <strong>Nkanyiso Ndlovu</strong>, born and bread in <strong >South Africa</strong> but currently residing 
                                                            in <strong>New Zealand</strong>. I learned to code on my own, whilst in South Africa, and I have been in love with
                                                            it ever since, I am currently a student at the University of Otago, studying computer science & software engineering, 
                                                            whilst its still my first year, I feel as though I am ready to join the
                                                            professional space, to both to gain industry knowledge but also to put my skills to the test through internships.</p>
                            <a class="btn btn-light btn-xl" href="#skillset">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}