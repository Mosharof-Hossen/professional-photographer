import React from 'react';
import "./Achivement.css"

const Achivement = () => {
    return (
        <section class="achievement-section container">
            <div class="achievement-box row ">
                <div class="achievement col-md-6 p-5 mt-2">
                    <h2 class="achievement-head">ACHIEVEMENT</h2>
                    <p>1. Diam invidunt aliquyam dolore tempor aliquyam diam gubergren. Nonumy tempor dolore duo no. Diam nonumy.</p>
                    <p>2. Thy not such not was shameless steel from if. Knew stalked the her to were.</p>
                    <p>3. Justo sadipscing vero dolores elitr duo et diam magna invidunt kasd, dolore et ut sed. </p>
                    <p>4. Sit tempor magna tempor dolor ea labore et ut ea kasd. At diam dolores et.</p>
                    <p>5. Ipsum sed tempor accusam aliquyam  est dolores et et stet, dolor.</p>
                    

                </div>
                <div class="achievement col-md-6 p-5 mt-2">
                    <h2 class="achievement-head">YOUR IDEA</h2>
                    <form action="">
                        <p><input type="text" name="" id="" placeholder="Your name"></input></p>
                        <p><input type="email" name="" id="" placeholder="Your Email"></input></p>
                        <textarea name="" placeholder="Your Message here" id="" cols="30" rows="10"></textarea>
                        <div className = "text-center">
                            <button className="btn btn-primary mt-2" type="reset">Your Message</button>
                        </div>
                    </form>

                </div>

            </div>
        </section>
    );
};

export default Achivement;