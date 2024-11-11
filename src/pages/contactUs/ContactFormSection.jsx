import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    interest: "treks",
    purpose: "booking",
    callback: [],
    source: [],
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...formData[name], value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract name and email from formData
    const { name, email } = formData;
    console.log("Name:", name);
    console.log("Email:", email);

    // Send form data to the backend
    axios
      .post("https://trail-blaze-backend-1.onrender.com/api/contact", formData)
      .then((response) => {
        console.log(response.data);
        alert("Form submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Failed to submit the form");
      });
  };

  return (
    <section className="contact-form-section" id="contact-form-section">
      <h3>Get in Touch</h3>
      <div className="contact-form">
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="top_form">
            <div className="form-group top_one">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="interest">I am interested in</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="treks">Treks</option>
                <option value="camping">Camping</option>
                <option value="hiking">Hiking</option>
                <option value="travel">Travel</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="purpose">I am</label>
              <select
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
              >
                <option value="booking">Looking to book an adventure</option>
                <option value="inquiry">Making an inquiry</option>
                <option value="feedback">Giving feedback</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Do you want our expert to call you back? (required)</label>
            <div className="checkbox-group">
              <div className="one">
                <input
                  type="checkbox"
                  id="noCall"
                  name="callback"
                  value="noCall"
                  onChange={handleChange}
                  className="styled-checkbox"
                />
                <label htmlFor="noCall">Do not call me, I prefer Mail</label>
              </div>
              <div className="one">
                <input
                  type="checkbox"
                  id="morning"
                  name="callback"
                  value="morning"
                  onChange={handleChange}
                  className="styled-checkbox"
                />
                <label htmlFor="morning">Between 10 am - 12 noon</label>
              </div>
              <div className="one">
                <input
                  type="checkbox"
                  id="afternoon"
                  name="callback"
                  value="afternoon"
                  onChange={handleChange}
                  className="styled-checkbox"
                />
                <label htmlFor="afternoon">Between 2 pm - 5 pm</label>
              </div>
              <div className="one">
                <input
                  type="checkbox"
                  id="evening"
                  name="callback"
                  value="evening"
                  onChange={handleChange}
                  className="styled-checkbox"
                />
                <label htmlFor="evening">After 5 pm</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Where did you hear about us? (required)</label>
            <div className="checkbox-group">
              <div className="one">
                <input
                  type="checkbox"
                  id="google"
                  name="source"
                  value="google"
                  onChange={handleChange}
                  className="styled-checkbox"
                />
                <label htmlFor="google">Google</label>
              </div>
              <div className="one">
                <input
                  type="checkbox"
                  id="quora"
                  name="source"
                  value="quora"
                  onChange={handleChange}
                  className="styled-checkbox"
                />
                <label htmlFor="quora">Quora</label>
              </div>
              <div className="one">
                <input
                  type="checkbox"
                  id="social"
                  name="source"
                  value="social"
                  onChange={handleChange}
                  className="styled-checkbox"
                />
                <label htmlFor="social">Social Media</label>
              </div>
              <div className="one">
                <input
                  type="checkbox"
                  id="friend"
                  name="source"
                  value="friend"
                  onChange={handleChange}
                  className="styled-checkbox"
                />
                <label htmlFor="friend">From a friend</label>
              </div>
              <div className="one">
                <input
                  type="checkbox"
                  id="news"
                  name="source"
                  value="news"
                  onChange={handleChange}
                  className="styled-checkbox"
                />
                <label htmlFor="news">Newspaper/Magazine</label>
              </div>
              <div className="one">
                <input
                  type="checkbox"
                  id="other"
                  name="source"
                  value="other"
                  onChange={handleChange}
                  className="styled-checkbox"
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">
              Add a brief description (optional)
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="submit_button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
