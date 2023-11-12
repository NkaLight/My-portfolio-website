import React from "react";

export default function Project(props){
    

    return(
        <div className="project">
            <div class="col-lg-4 col-sm-6">
                <a href="/my-files/fudel.html" class="portfolio-box" title="Project Fudel">
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