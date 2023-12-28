import React from "react";
import data from "../data";
import { useParams } from "react-router-dom";


/*The function implements algorithms to determine the Lightness of background image 0 beinging darkest and 255 being the brightest
    got the algorithm online stackoverflow: https://stackoverflow.com/questions/13762864/image-brightness-detection-in-client-side-script
*/

function getImageLightness(imageSrc, callback) {
    var img = new Image();
    img.crossOrigin = "Anonymous"; // Set crossOrigin attribute
    img.src = imageSrc;
  
    img.onload = function () {
      var canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;
  
      var ctx = canvas.getContext("2d");
      ctx.drawImage(this, 0, 0);
  
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var colorSum = 0;
  
      for (var x = 0, len = data.length; x < len; x += 4) {
        var r = data[x];
        var g = data[x + 1];
        var b = data[x + 2];
        var avg = Math.floor((r + g + b) / 3);
        colorSum += avg;
      }
  
      var brightness = Math.floor(colorSum / (this.width * this.height));
      callback(brightness);
    }
    img.onerror = (error) => {
        console.error("Error loading the image")
    }
    return img;
  }


const ProjectPage = () =>{

    const {projectName} = useParams()
    const project = data.projects.find((item) => item.name === projectName)
    const [brightness , setBrightness] = React.useState(null)

    React.useEffect(() =>{
        const url = require(`../assets/img/thumbnails/${project.img}.png`)
        const img = getImageLightness(url, (brightness) =>{
            setBrightness(brightness)
        });
        
        //clean up remove the element img 
        const removeImage = () =>{
            if(document.body.contains(img)){
                document.body.removeChild(img)
            }
        }
        
        //attach a Cleanup function to the beforeunloead event to ensure removal on page unload
        window.addEventListener('beforeunload', removeImage)

        //cleanup on the component unmount
        return () =>{
            removeImage();
            window.removeEventListener('beforeunload', removeImage)
        }
    }, [])
    
    if(!project){
        return(
            <div className="project-page-section" >
                <h1>Project not found</h1>
            </div>
        )
    }
    return (
        <div className="project-page-section">
            <div className="project-page-masthead" style={{backgroundImage : `url(${require(`../assets/img/thumbnails/${project.img}.png`)})`}}>
                <h1 style={{color: brightness > 127.5 ? "black" : "white"}}>{project.name}</h1>
            </div>

        </div>
    )
}
export default ProjectPage