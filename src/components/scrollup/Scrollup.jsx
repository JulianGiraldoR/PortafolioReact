import React from 'react'
import "./scrollup.css"

const Scrollup = () => {
    window.addEventListener("scroll",function (){
        const scrollup = document.querySelector(".scrollup");
        //when the scroll is higher than 500 viewport height, add the show-scroll class to a tag with the scroll-top class
        if(this.scrollY >= 600 ) scrollup.classList.add("show-scroll");
        else scrollup.classList.remove("show-scroll");
    })
    return (
        <a href="" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default Scrollup;