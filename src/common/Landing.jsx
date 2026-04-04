import React, { useState, useEffect, useRef } from 'react';
import './Landing.css';

const images = Object.values(
  import.meta.glob('../images/Horticulture/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default'
  })
);

export const Landing = () => {
  const phrases = [
    "Where Ancient Light Awakens",
    "Whispers of the Mountain Spirit",
    "Soulshine Mountain"
  ];

  const [frontIndex, setFrontIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(1);

  const [showFront, setShowFront] = useState(true);
  const [textFade, setTextFade] = useState(true);

  const isTransitioning = useRef(false);

  const IMAGE_FADE = 4;   // slower, elegant
  const TEXT_FADE = 6;    // even slower, mystical
  const IMAGE_SECONDS = 10;

  // Preload images
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;

      // Fade out text first
      setTextFade(false);

      // After text fades, fade the image
      setTimeout(() => {
        setShowFront(prev => !prev);

        // After image fade completes, update hidden layer
        setTimeout(() => {
          if (showFront) {
            setFrontIndex((backIndex + 1) % images.length);
          } else {
            setBackIndex((frontIndex + 1) % images.length);
          }

          // Fade text back in AFTER the image settles
          setTimeout(() => {
            setTextFade(true);
            isTransitioning.current = false;
          }, 400); // small delay for elegance

        }, IMAGE_FADE * 1000);

      }, 500); // slight offset before image fade

    }, IMAGE_SECONDS * 1000);

    return () => clearInterval(interval);
  }, [showFront, frontIndex, backIndex]);

  const currentPhrase =
    phrases[(showFront ? frontIndex : backIndex) % phrases.length];

  return (
    <div id="landing-page">

      {/* FRONT LAYER */}
      <div
        className={`bg-layer ${showFront ? "visible" : "hidden"} kenburns`}
        style={{ backgroundImage: `url(${images[frontIndex]})` }}
      />

      {/* BACK LAYER */}
      <div
        className={`bg-layer ${showFront ? "hidden" : "visible"} kenburns`}
        style={{ backgroundImage: `url(${images[backIndex]})` }}
      />

      {/* CINEMATIC OVERLAYS */}
      <div className="color-grade"></div>
      <div className="bloom-glow"></div>
      <div className="film-grain"></div>
      <div className="fog fog-front"></div>
      <div className="fog fog-back"></div>
      <div className="dust"></div>

      {/* TEXT */}
      <div className="hero-content">
        <h2
          className="hero-phrase"
          style={{
            opacity: textFade ? 1 : 0,
            transition: `opacity ${TEXT_FADE}s ease-in-out`,
          }}
        >
          {currentPhrase}
        </h2>
      </div>
    </div>
  );
};
