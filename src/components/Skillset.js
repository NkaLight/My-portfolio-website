import React from "react";

export default function Skillset(props){
    

    return(
        <div>
            <div class="col-lg-4 col-md-6 text-center">
                <div class="mt-5">
                    <div class="mb-2"><i className={`${props.favicon} fs-1 text-primary`}></i></div>
                    <h3 class="h4 mb-2"><strong>{props.skill}</strong></h3>
                    <p class="text-muted mb-0">{props.description}</p>
                    
                </div>
            </div> 
        </div>
    )
}