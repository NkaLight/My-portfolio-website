import React from "react";

export default function Contact(props){

    return(
        <div>
           <section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">Get in touch.</h2>
                        <hr class="divider" />
                        <p class="text-muted mb-5">Thank you for making it this far, my contact details can be found below. </p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">
                        
                            <div class="container px-4 px-lg-5 text-center">
                                <h1><a class="btn btn-light btn-xl" rel="noreferrer" href="http://www.linkedin.com/in/nkanyiso-ndlovu-46a30821b" target="_blank" title="click">LinkedIN</a></h1>
                              
                            </div>

                            <div class="container px-4 px-lg-5 text-center">
                                <h1><a  class="btn btn-light btn-xl" rel="noreferrer" href="mailto:nkanyisoowethu@gamil.com" target="_blank" title="click" >Send email</a></h1>
                              
                            </div>

                        <div class="container px-4 px-lg-5 text-center">
                            <h1><a  class="btn btn-light btn-xl" rel="noreferrer" href="tel:0223062870" target="_blank" title="click"><strong>Call me</strong></a></h1>
                          
                        </div>
                         
                    </div>
                </div> 
                </div>
            </section>
        </div>
    )
}