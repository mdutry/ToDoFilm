import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export default function CustomCarousel({ articles, ...props }) {

    return (
        <Carousel
            infiniteLoop
            centerMode
            centerSlidePercentage="33.3%"
            renderArrowPrev={(onClickHandler, hasPrev) => hasPrev && (
                <div onClick={onClickHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ height:'20px', width: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                </div>
            )}
            renderArrowNext={(onClickHandler, hasNext) => hasNext && (
                <div onClick={onClickHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ height:'20px', width: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </div>
            )}
            showStatus={false}
            showThumbs={false}
        >
            {
                [
                    { title: 'TITRE 1', description: 'DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION 1' },
                    { title: 'TITRE 2', description: 'DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION 2' },
                    { title: 'TITRE 3', description: 'DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION 3' }
                ].map((article, key) => (
                <div key={key}>
                    <img src alt="carousel" />
                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', position: 'absolute', top: 0 }}
                    >
                        <Link to='#' style={{ textDecoration: 'none', color: '#000', width: '70%' }}>
                            <div
                                className={{ display: 'flex', flexDirection:"column", justifyContent: 'space-around', alignContent: 'center', alignItems: 'center' }}
                                spacing={0}
                            >
                                <h5 style={{ marginTop: 20 }}>{article.title}</h5>
                                <p variant="body2">{article.description}</p>
                            </div>
                        </Link>
                    </div>
                </div>
                ))
            }
        </Carousel>
    );
}