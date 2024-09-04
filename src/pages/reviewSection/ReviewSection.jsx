import React, { useState, useEffect } from 'react';
import '../review.css'; // Ensure this path is correct

const reviews = [
  {
    text: "Trail Blaze provides exceptional support and guidance. Their knowledge of the trails and commitment to safety ensured that our trek was both thrilling and secure.",
    rating: 5,
    name: "Riya Sharma",
    role: "Adventure Seeker",
    imgSrc: "https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg"
  },
  {
    text: "Our trek with Trail Blaze was nothing short of spectacular. Their team’s dedication to providing a personalized trekking experience made every moment memorable.",
    rating: 4.5,
    name: "Vikram Patel",
    role: "Travel Blogger",
    imgSrc: "https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg"
  },
  {
    text: "Trekking with Trail Blaze was an exhilarating experience. Their expertise and passion for trekking made our journey truly unforgettable!",
    rating: 4,
    name: "Aarav Mehta",
    role: "Outdoor Enthusiast",
    imgSrc: "https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg"
  },
  {
    text: "I had an amazing trek with Trail Blaze. Their professionalism and enthusiasm were evident throughout the journey. Highly recommended for any trekking enthusiast!",
    rating: 4.5,
    name: "Neha Singh",
    role: "Fitness Coach",
    imgSrc: "https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3"
  },
  {
    text: "The trek with Trail Blaze was a fantastic experience. Their attention to detail and dedication to ensuring a memorable adventure were remarkable.",
    rating: 5,
    name: "Sara Ali",
    role: "Travel Photographer",
    imgSrc: "https://media.istockphoto.com/id/1394963357/photo/portrait-of-female-fashion-model-in-cotton-shirt-isolated-on-purple-background-in-neon-light.jpg?s=612x612&w=0&k=20&c=Zrh9ZnOFwklEVrfsdiQQjJoI4cB86VGtVgfL_kA-4tc="
  },
  {
    text: "Trail Blaze exceeded my expectations. The trek was well-organized, and the team’s expertise made the challenging paths enjoyable and safe.",
    rating: 4,
    name: "Raj Kumar",
    role: "Mountain Enthusiast",
    imgSrc: "https://rare-gallery.com/uploads/posts/5396734-man-male-glasses-neon-light-city-urban-glow-reflection-portrait-street-window-glass-tree-night-light-mojito-love-rose-blue-orange-creative-commons-images.jpg"
  },
  {
    text: "Trail Blaze’s team is incredible. Their guidance and support during the trek were invaluable. I highly recommend them for any trekking expeditions!",
    rating: 4.5,
    name: "Arjun Rao",
    role: "Adventure Guide",
    imgSrc: "https://media.istockphoto.com/id/1196057932/photo/portrait-of-handsome-man-lit-by-neon-lights-at-night.jpg?s=612x612&w=0&k=20&c=ynUIauiTBtMQ42E04KDgkrQ2AsMW6pZLCBgR00LF5v8="
  },
  {
    text: "Trekking with Trail Blaze was an extraordinary adventure. Their knowledgeable team and passionate guidance made every step of the journey memorable and exhilarating.",
    rating: 4.5,
    name: "Ravi Sharma",
    role: "Adventure Enthusiast",
    imgSrc: "https://media.istockphoto.com/id/1153387473/photo/a-young-man-fashionably-dressed-standing-in-the-street-at-night-illuminated-signboards-neon.jpg?s=612x612&w=0&k=20&c=aE9eDSPgWOq20kNio9-Cfiu-nmChK186nakntfCUkhA="
  }
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="review">
      <div className="review_container">
        <main>
          <h1>Trail Reviews</h1>
          <div className="slider">
            <div className="slide-row" id="slide-row">
              {reviews.map((review, index) => (
                <div
                  className="slide-col"
                  key={index}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  <div className="reviewcontent">
                    <p>{review.text}</p>
                    <p className="rating">
                      {Array.from({ length: 5 }, (_, i) => (
                        <i
                          key={i}
                          className={`fa-solid fa-star${i < Math.floor(review.rating) ? '' : '-half-stroke'}`}
                        />
                      ))}
                    </p>
                    <h2>{review.name}</h2>
                    <p>{review.role}</p>
                  </div>
                  <div className="hero">
                    <img src={review.imgSrc} alt={`${review.name}'s avatar`} />
                  </div>
                </div>
              ))}
            </div>
            <button className="arrow arrow-left" onClick={goToPrevSlide}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="arrow arrow-right" onClick={goToNextSlide}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="indicator">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={`btn${index === currentIndex ? ' active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default ReviewsSection;
