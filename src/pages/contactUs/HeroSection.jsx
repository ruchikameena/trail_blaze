import React, { useEffect } from "react";
const HeroSection = () => {
  useEffect(() => {
    // Typing Animation for Contact Us Today!
    const typingElement = document.getElementById("typing-text");
    const typingText = "Contact Us Today!";
    const typingSpeed = 100; // Speed of typing in milliseconds
    const delayBetweenLoops = 1000; // Delay before restarting the typing

    function typeText(index) {
      if (index < typingText.length) {
        typingElement.textContent = typingText.substring(0, index + 1);
        setTimeout(() => typeText(index + 1), typingSpeed);
      } else {
        setTimeout(() => {
          typingElement.textContent = "";
          typeText(0); // Restart typing
        }, delayBetweenLoops);
      }
    }

    typeText(0);

    // Cleanup function to stop typing animation when component unmounts
    return () => {
      clearTimeout(typeText);
    };
  }, []);

  return (
    <div className="caption">
      <div className="caption_text">
        <h1>Embark on Your Next Adventure with Us</h1>
        <h2> - Unleash the Explorer Within.</h2>
      </div>
      <button className="connect">
        <a href="#contact-form-section">
          <h2>
            <span id="typing-text">Contact Us Today!</span>
          </h2>
        </a>
      </button>
    </div>
  );
};

export default HeroSection;
