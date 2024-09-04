import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/DescriptionPage.css";

function DescriptionPage() {
  const { trekId } = useParams();
  const [trek, setTrek] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://trail-blaze-backend.onrender.com/api/treks/${trekId}`)
      .then((response) => {
        setTrek(response.data);
      })
      .catch((error) => {
        console.error("Error fetching trek details:", error);
        setError(error);
      });
  }, [trekId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!trek) {
    return <div>Loading...</div>;
  }

  return (
    <div className="description-container">
      {/* Section 1: Trek Name and Basic Info */}
      <div className="section-one">
        <h1 className="trek-name">{trek.name}</h1>
        <div className="trek-info">
          <span className="side">
            <strong>Type:</strong> {trek.type}
          </span>
          <span className="side">
            <strong>Location:</strong> {trek.location}
          </span>
          <span className="side">
            <strong>Rating:</strong> {trek.rating}
          </span>
          <span>
            <strong>Best Month to Visit:</strong> {trek.best_month_to_visit}
          </span>
        </div>
      </div>

      {/* Section 2: Trek Image and Slider */}
      <div className="section section-2">
        <img src={trek.image} alt={trek.name} className="trek-image" />
        <div className="image-slider">
          {trek.additionalImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Additional ${index + 1}`}
              className="slider-image"
              onClick={() =>
                (document.querySelector(".trek-image").src = image)
              }
            />
          ))}
        </div>
      </div>

      {/* Section 3: Overview and Description */}
      <div className="section section-3">
        <div className="overview">
          <h2>Overview</h2>
          <p>{trek.overview}</p>
        </div>
        <div className="description">
          <p>{trek.description}</p>
        </div>
      </div>

      {/* Section 4: Map and Highlights */}
      <div className="section section-4">
        <div className="map">
          <iframe
            src={trek.googleMapLink}
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        <div className="trek-highlights">
          <h2>Highlights</h2>
          <ul>
            {trek.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
          <h3>Best For:</h3>
          <ul>
            {trek.bestFor.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional Section: Reviews */}
      <div className="section section-reviews">
        <div className="reviews-left">
          <h2>Reviews</h2>
          <p className="short-quote">
            "Your adventure starts here. Share your journey!"
          </p>
        </div>
        <div className="reviews-right">
          {trek.reviews.map((review, index) => (
            <div key={index} className="review">
              <p>
                <strong>{review.user}</strong>
                <br />
                <strong>({review.rating}/5)</strong>
                <br />
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DescriptionPage;
