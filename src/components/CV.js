import React from "react";
import Cv from "../assets/documets/Favicons/My CV1.docx"

export default function CV(){
    return(
        <section class="page-section bg-dark text-white">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mb-4">Download my CV for more info</h2>
                <a class="btn btn-light btn-xl" href={Cv}>Download</a>
            </div>
        </section> 
    )
}