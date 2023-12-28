import React from "react";
import data from "../data";
import { useParams } from "react-router-dom";

const ProjectPage = () =>{

    const {projectName} = useParams()
    const project = data.projects.find((item) => item.name === projectName)

    if(!project){
        return(
            <div className="project-page-section" >
                <h1>Project not found</h1>
            </div>
        )
    }
//style={{ backgroundImage: `url(${require("./resources/img/banners/3.jpg")})` }}

    return (
        <div className="project-page-section">
            <div className="project-page-masthead" style={{backgroundImage : `url(${require(`../assets/img/thumbnails/${project.img}.png`)})`}}>
                <h1>{project.name}</h1>
            </div>
            

        </div>
    )
}
export default ProjectPage