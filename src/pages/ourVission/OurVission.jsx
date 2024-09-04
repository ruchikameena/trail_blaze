import React from 'react';
import "../AboutUs.css";
const Vision = () => {
    return (
        <section id="vision" className="vision-section">
            <div className="vision-container">
                <div className="vision-text">
                    <h2>OUR VISION</h2>
                    <p>
                        Our vision at Trail Blaze is to lead the way in sustainable adventure travel, where every trek
                        leaves a positive impact on the environment and the communities we visit. We strive to create a
                        world where exploring nature is synonymous with protecting it, and where every adventurer is
                        inspired to contribute to the conservation of our planet's precious landscapes.
                    </p>
                </div>
                <div className="vision-image">
                    <img src="https://media.istockphoto.com/id/649871644/photo/young-people-on-mountain-hike-at-sunset.jpg?s=612x612&w=0&k=20&c=OWyQdUNsCAIGwvHbS3qjr5JvSk8SShNU4_NLZsJDbQg=" alt="Vision Image" />
                </div>
            </div>
        </section>
    );
};

export default Vision;
