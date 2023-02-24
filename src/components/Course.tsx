import React from 'react'

export default function Course({ image, title, description }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-5by3">
                    <img src={image} alt={title} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                    </div>
                </div>


                <div className="content">
                    {description}
                    <hr />
                    <time dateTime="2023-02-24">11:09 PM - 24 Feb 2023</time>
                </div>
            </div>
        </div>
    )
}
