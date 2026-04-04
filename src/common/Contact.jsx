import React, { useState } from "react";
import "./Contact.css";
import bgImage from "../images/Horticulture/IMG20240604183156.jpg";

const Contact = () => {
  const [stage, setStage] = useState("form"); 
  // form → vines → dirt → success

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger vine takeover
    setStage("vines");

    // After vines appear, fade to dirt
    setTimeout(() => setStage("dirt"), 2000);

    // After dirt fade, show success
    setTimeout(() => setStage("success"), 4000);
  };

  return (
    <div className="contact-page">
      <div
        className="contact-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="contact-overlay" />

      <div className="contact-content">
        {stage === "form" && (
          <>
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              We’d love to help bring your outdoor vision to life.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" required />

              <label>Email</label>
              <input type="email" name="email" required />

              <label>Message</label>
              <textarea name="message" rows="4" required />

              <button type="submit" className="contact-button">
                Send Message
              </button>
            </form>
          </>
        )}

        {stage === "success" && (
          <div className="success-message">
            <h1>Message Sent</h1>
            <p>We’ll reach out soon. New growth begins.</p>
          </div>
        )}
      </div>

      {/* Vine takeover */}
      <div className={`vines-overlay ${stage === "vines" ? "active" : ""}`} />

      {/* Dirt fade */}
      <div className={`dirt-overlay ${stage === "dirt" ? "active" : ""}`} />
    </div>
  );
};

export default Contact;
