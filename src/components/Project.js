import React from "react";
import { Link } from "react-router-dom";




export default function Project(props){
    return(
        <div>
            <div class={props.isMobile ? "coll" : "col"}>
                <Link to={`/projects/${props.name}`} class="portfolio-box" title={`Project ${props.name}`}>
                    <img class="img-fluid" src={require(`../assets/img/thumbnails/${props.img}.png`)}alt="..." />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">{props.category}</div>
                        <div class="project-name">{props.name}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}