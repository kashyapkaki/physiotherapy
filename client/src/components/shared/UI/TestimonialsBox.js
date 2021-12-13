import React from 'react'

function TestimonialsBox(props) {
    return (
        <div key="testimonial" className="testimonials">
            {props.testimonials.map((value, index) => {
                return (
            <div key={"testimonial_" + index} className="testimonial-box">
                <p className="text-center">{value.name}</p>
                <i className="fa fa-quote-left"></i>
                <blockquote>{value.content}</blockquote>
            </div>
            )})}
        </div>
    )
}

export default TestimonialsBox
