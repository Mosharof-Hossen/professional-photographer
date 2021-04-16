import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <section id="banner ">
            <div class="banner-container container d-flex justify-content-center align-items-center">
                <div class="banner-contents text-center">
                    <h1 style = {{color:"#3A4256"}} class="font-weight-bolder mb-5 ">Capturing Moments , Preserving Memories !!!</h1>
                    <button style = {{color:"#3A4256"}}class="btn btn-lg btn-primary mx-3"><i class="fas fa-play me-2"></i> Sign in</button>
                    <button style = {{color:"#3A4256"}}class="btn btn-lg btn-primary mx-3"><i class="fas fa-sign me-2"></i> Sign up</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;