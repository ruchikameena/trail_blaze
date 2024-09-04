import React, { useEffect } from "react";
import "../homePage/homePage.css";

const TrekPage = () => {
  useEffect(() => {
    // Load the script for dotlottie-player
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    script.onload = () => {
      console.log("dotLottie script loaded");
    };
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Thought bubble animation script
    const thoughtBubble = document.querySelector(".thought-bubble");

    const messages = [
      "Hey there! Ready for an adventure?",
      "Don't forget your gear!",
      "Explore the unknown!",
      "Ready to blaze a trail?",
      "Take only memories, leave only footprints.",
      "Adventure awaits!",
    ];

    function showRandomMessage() {
      const randomIndex = Math.floor(Math.random() * messages.length);
      thoughtBubble.textContent = messages[randomIndex];
      thoughtBubble.classList.add("show");
      thoughtBubble.classList.remove("hide");

      setTimeout(() => {
        thoughtBubble.classList.add("hide");
        thoughtBubble.classList.remove("show");
      }, 5000); // Increase duration to 5 seconds
    }

    function startThoughtBubbleLoop() {
      showRandomMessage();
      const randomInterval = Math.floor(Math.random() * 8000) + 4000; // Adjust timing for longer intervals
      setTimeout(startThoughtBubbleLoop, randomInterval);
    }

    startThoughtBubbleLoop();
  }, []); // Empty dependency array ensures this runs only once after component mounts

  return (
    <div>
      <div className="home_hero">
        <h1>Explore the Great Outdoors</h1>
      </div>

      <div className="popular-treks">
        <h2>POPULAR TREKS</h2>
        <div className="trek_cards">
          {[
            {
              imgSrc:
                "https://lh3.googleusercontent.com/p/AF1QipMso_JfXFE_uQTORlELxSiTUpSH_ODIsDacf8yM=s680-w680-h510",
              title: "HATHINI KUND",
              description:
                "Explore Hathni Kund's lush forests and serene waterfalls for breathtaking vistas.",
            },
            {
              imgSrc:
                "https://lh3.googleusercontent.com/p/AF1QipP167b8NnYx_DtheIoXq2rTbQ_03K-enCBFLG1C=s680-w680-h510",
              title: "SAGAR LAKE",
              description:
                "A scenic trek to Sagar Lake, featuring stunning mountain views and vibrant wildlife.",
            },
            {
              imgSrc:
                "https://lh3.googleusercontent.com/p/AF1QipN8U_1_pMxG-ztZ92WrjYT63k19UCQQLOnsa8os=s680-w680-h510",
              title: "TWIN TOWER",
              description:
                "Tackle the rugged Twin Tower Trek for panoramic views and unique rock formations.",
            },
            {
              imgSrc:
                "https://lh3.googleusercontent.com/p/AF1QipOMlqe3XO363vCLbggLi78mfDKvT4_y5jqt2Z7x=s680-w680-h510",
              title: "Chulgiri Hill",
              description:
                "Chulgiri Hill Trek offers a serene climb with panoramic views and a peaceful escape into nature.",
            },
          ].map((trek, index) => (
            <div className="trek_card" key={index}>
              <img src={trek.imgSrc} alt={`Trek ${index + 1}`} />
              <div className="card-content">
                <h3>{trek.title}</h3>
                <p>{trek.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="robot"></div>
      <div className="thought-bubble">Hey there! Ready for an adventure?</div>

      <div className="why-trek">
        <h2>WHY TREK WITH US?</h2>
        <div className="why-trek-container">
          <div className="homefeatures-container">
            <div className="homefeatures">
              {[
                {
                  icon: "fa-hiking",
                  title: "Expert Guides",
                  description:
                    "Our seasoned guides have years of experience to ensure a safe and enjoyable trek.",
                },
                {
                  icon: "fa-map-marked-alt",
                  title: "Unique Trails",
                  description:
                    "Explore exclusive and less-traveled trails, handpicked for the best trekking experience.",
                },
                {
                  icon: "fa-leaf",
                  title: "Sustainability",
                  description:
                    "We prioritize eco-friendly practices to protect nature while enjoying it.",
                },
                {
                  icon: "fa-users",
                  title: "Community",
                  description:
                    "Join a community of like-minded adventurers and make lasting memories together.",
                },
              ].map((homefeature, index) => (
                <div className="homefeature" key={index}>
                  <i className={`fas ${homefeature.icon} fa-3x`}></i>
                  <h3>{homefeature.title}</h3>
                  <p>{homefeature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="animation-container">
            <dotlottie-player
              src="https://lottie.host/3c2121ab-4295-4814-be53-f1413addfa33/4X2IlbGFuV.json"
              background="transparent"
              speed="0.5" // Adjust speed for smoother animation
              loop
              autoplay
              style={{ width: "100%", height: "auto" }}
            ></dotlottie-player>
          </div>
        </div>
      </div>

      <div className="happy-trekkers">
        <h2>HAPPY TREKKERS!!</h2>
        <div className="trek_cards">
          {[
            {
              imgSrc:
                "https://github.com/ayushkjangid/project-image/blob/main/sushi.jpg?raw=true",
              name: "ARYAN SUSAWAT",
              review:
                "This was the most incredible experience of my life! The views were stunning.",
            },
            {
              imgSrc:
                "https://images.hindustantimes.com/img/2023/01/10/1600x900/While-the-past-year-was-about-revenge-and-revival-_1673351689949.jpg",
              name: "RUCHIKA MEENA",
              review:
                "The guides were so knowledgeable and friendly. I felt safe and had a great time.",
            },
            {
              imgSrc:
                "https://www.freakytravel.com/wp-content/uploads/hiker-ocean-extreme.jpg",
              name: "VATSAL VASHIST",
              review:
                "The trek was challenging but rewarding. I can't wait to go on another one!",
            },
            {
              imgSrc:
                "https://github.com/ayushkjangid/project-image/blob/main/ayush.jpg?raw=true",
              name: "AYUSH JANGID",
              review:
                "This was a once-in-a-lifetime adventure. I highly recommend it to anyone.",
            },
          ].map((trekker, index) => (
            <div className="trek_card" key={index}>
              <img src={trekker.imgSrc} alt={`Trekker ${index + 1}`} />
              <div className="card-content">
                <h3>{trekker.name}</h3>
                <p>"{trekker.review}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrekPage;
