import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./TrekList.css";

function TrekList() {
  const [treks, setTreks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://trail-blaze-backend-1.onrender.com/api/treks")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setTreks(response.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching trek details:", error));
  }, []);

  const handleSearch = () => {
    axios
      .get("https://trail-blaze-backend-1.onrender.com/api/treks")
      .then((response) => {
        if (Array.isArray(response.data)) {
          const filteredTreks = response.data.filter((trek) =>
            trek.type.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setTreks(filteredTreks);
        } else {
          console.error("API response is not an array:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching trek details:", error));
  };

  const handleKnowMoreClick = (trekId) => {
    navigate(`/trek/${trekId}`);
  };

  return (
    <div className="trek_container">
      <div className="search-bar">
        <div className="search_content">
          <input
            type="text"
            placeholder="Search for destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="trek_contain">
        {treks.map((trek) => (
          <div key={trek._id} className="card">
            <div className="topSection">
              <img src={trek.image} alt={trek.name} className="image" />
            </div>
            <div className="middleSection">
              <h2 className="title">{trek.name}</h2>
              <p>Location: {trek.location}</p>
              <p>Rating: {trek.rating}</p>
              <p>Type: {trek.type}</p>
            </div>
            <Link to={`/treks/${trek._id}`}>
              <button className="trekbtn">Know More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrekList;
