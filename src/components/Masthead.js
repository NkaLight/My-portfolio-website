import React from "react"

export default function Masthead(){
    return(
        <div>
            <header class="masthead">
                <div class="container px-4 px-lg-5 h-100">
                    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div class="col-lg-8 align-self-end">
                            <h1 class="text-white font-weight-bold">Welcome to my portfolio.</h1>
                            <hr class="divider" />
                        </div>
                        <div class="col-lg-8 align-self-baseline">
                            <p class="text-white-75 mb-5" /*style="color: white;"*/>This is where you will find all my recent projects and more!</p>
                            <a class="btn btn-primary btn-xl" href="#about" >Find Out More</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}