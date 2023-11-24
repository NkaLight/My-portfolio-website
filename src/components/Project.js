import React from "react";




export default function Project(props){

    return(
        <div>
            <div class={props.isMobile ? "" : "col"}>
                <a href="/my-files/fudel.html" class="portfolio-box" title={`Project ${props.name}`}>
                    <img class="img-fluid" src={require(`../assets/img/${props.img}`)}alt="..." />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">{props.category}</div>
                        <div class="project-name">{props.name}</div>
                    </div>
                </a>
            </div>
        </div>
    )
}