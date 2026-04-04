import React, { useState, useRef, useEffect } from "react";
import "./Restoration.css";
import bgImage from "../images/Horticulture/IMG20240604183156.jpg";

export const Restoration = () => {
  const [showCard, setShowCard] = useState(false);
  const [cardReady, setCardReady] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (showCard) {
      const timer = setTimeout(() => setCardReady(true), 1300);
      return () => clearTimeout(timer);
    }
  }, [showCard]);

  const handlePointerMove = (e) => {
    if (!wrapperRef.current || flipped) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / 18).toFixed(2);
    const rotateY = (x / 18).toFixed(2);

    wrapperRef.current.style.transform = `
      translate(-50%, -50%)
      rotateY(${flipped ? 180 : 0}deg)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handlePointerLeave = () => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style.transform = `
      translate(-50%, -50%)
      rotateY(${flipped ? 180 : 0}deg)
      scale(1)
    `;
  };

  const handleFlip = () => {
    if (!wrapperRef.current) return;
    setFlipped((prev) => !prev);
    wrapperRef.current.style.transform = `
      translate(-50%, -50%)
      rotateY(${!flipped ? 180 : 0}deg)
      scale(1)
    `;
  };

  return (
    <div className="restoration-page">
      <div
        className="restoration-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="restoration-overlay" />

      <div className={`restoration-content ${showCard ? "fade-up" : ""}`}>
        <h1 className="restoration-title">Restoration</h1>
        <p className="restoration-subtitle">
          We take pride in transforming outdoor spaces into breathtaking natural havens.
          Serving Northern Colorado, our expert team combines innovative design and
          skilled craftsmanship to bring your vision to life.
        </p>

        {!showCard && (
          <button className="arrow-button" onClick={() => setShowCard(true)}>
            ^
          </button>
        )}
      </div>

      {cardReady && (
        <>
          <div className="fog-layer"></div>
          <div className="petal-layer"></div>
          <div className="vine-layer"></div>
          <div className="sunbeam"></div>

          <div
            className={`card-wrapper ${flipped ? "flipped" : ""}`}
            ref={wrapperRef}
            onClick={handleFlip}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            <div className="business-card card-front sprout-grow spin-up foil-shimmer botanical-frame">
              <h2>Soulshine Mountain</h2>
              <p>Restoration & Landscaping</p>
              <p>Serving Northern Colorado</p>
              <p><strong>Contact:</strong> 555‑123‑4567</p>
            </div>

            <div className="business-card card-back wood-texture">
              <div className="wood-engraving">🌄 Soulshine Mountain 🌿</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
