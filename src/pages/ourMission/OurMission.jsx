import React from 'react';
import "../AboutUs.css";
const Mission = () => {
    return (
        <section id="mission" className="mission-section">
            <div className="mission-container">
                <div className="mission-image">
                    <img src="https://media.istockphoto.com/id/504040198/photo/adventures-on-the-dolomites-friends-hiking-with-dog.jpg?s=612x612&w=0&k=20&c=hcVv1lqqwwfgD1rmMNvIo3H1AsRbPPzsYNpp4xf7JY8=" alt="Adventures on the Dolomites" />
                </div>
                <div className="mission-text">
                    <h2>OUR MISSION</h2>
                    <p>
                        At Trail Blaze, our mission is to connect people with nature, foster a deep appreciation for
                        the world's diverse ecosystems, and inspire a sense of responsibility for the environment. 
                        We believe that through immersive trekking experiences, we can promote a harmonious 
                        relationship between humans and the natural world. Join us on an adventure that will not 
                        only expand your horizons but also leave a positive mark on our planet.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Mission;
