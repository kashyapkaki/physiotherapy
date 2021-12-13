import React, { useEffect, useState } from 'react';

const Slider = ({images, slideCounter}) => {

    const [slideIndex,
        setIndex] = useState(1);

    let slides = [];
    let slideShowIndex = 0;

    useEffect(() => {
        slides = document.getElementsByClassName("showSlide");
        slides[slideIndex - 1].style.display = "block";
        startSlideShow();
    }, [])

    const startSlideShow = () => {
        let i;
        let slides = document.getElementsByClassName("slide");
        if (slides.length <= 1) {
            return () => clearTimeout();
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideShowIndex++;
        if (slideShowIndex > slides.length) {
            slideShowIndex = 1;
        }
        slides[slideShowIndex - 1].style.display = "block";
        setTimeout(startSlideShow, 4500);
    }

    // const nextSlide = () => {
    //     //toggleSlideShow('stop');
    //     if (slideIndex != (slideCounter - 1) && slideIndex >= 0) {
    //         setIndex(slideIndex + 1);
    //     } else {
    //         setIndex(slideIndex - (slideCounter - 1));
    //     }
    //     console.log("Next Slide INdex Value clicked")
    //     console.log(slideIndex);
    //     let i;
    //     let newSlideIndex = slideIndex;
    //     let slides = document.getElementsByClassName("showSlide");
    //     if (slideIndex >= slides.length) {
    //         console.log("Updating the slide index to 0");
    //         newSlideIndex = slides.length - 1;
    //         console.log("UpdatedIndex");
    //         console.log(newSlideIndex)
    //     }
    //     if (slideIndex < 0) {
    //         newSlideIndex = 0;
    //         console.log("Updating SLIDE INDEX < 0");
    //     }
    //     console.log("Next SLIDE INDEX UPDATED")
    //     console.log(slideIndex)
    //     for (i = 0; i < slides.length; i++) {
    //         if (i != newSlideIndex) {
    //             slides[i].style.display = "none";
    //         }
    //     }
    //     slides[newSlideIndex].style.display = "block";
    // }
    return (
        <div key="sliderContainer" className="slidercontainer">
            {images.map((value, index) => {
                return (
                    <div key={index + "slider"} id={index} className="slide showSlide">
                        <img className="slideImage fade" key={index + "sliderImage"} src={value.image} alt=""/>
                        <div className="slide-overlay"></div>
                        <div key={index + "sliderContent"} className="content">
                            {value.content}
                        </div>
                    </div>
                )
            })}
            {/*Navigation Arrows  */}
            {/* <div className="slidercontainer__nav">
                <a className="left" onClick={nextSlide}>❮</a>
                <a className="right" onClick={nextSlide}>❯</a>
            </div> */}
        </div>
    )
}
export default Slider