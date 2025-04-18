import React, { useState, useEffect, useRef } from 'react';
import landingImage from '../images/Horticulture/IMG20240604183156.jpg';
import './Landing.css';

export const Landing = () => {

  const phrases = ["phrase1", "phrase2", "phrase3"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const isFadingOut = useRef(false);

  const FADE_SECONDS = 2;
  const IMAGE_SECONDS = 7;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFadingOut.current) {
        setOpacity(0); // Start fade-out
        isFadingOut.current = true;

        setTimeout(() => {
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          // Introduce a very short delay before starting the fade-in
          setTimeout(() => {
            setOpacity(1); // Start fade-in
            isFadingOut.current = false;
          }, 50); // Adjust this delay if needed (milliseconds)
        }, FADE_SECONDS * 1000);
      }
    }, IMAGE_SECONDS * 1000);

    return () => clearInterval(interval);
  }, [phrases]);

  return (
    <>
      <div id="landing-page">
        <div id="image-container">
          <img
            src={landingImage}
            alt="Holder Image"
            id="landing-image"
          />
          <div id="landing-text">
            <div id="landing-headline-container">
              <h2 id="landing-phrase"
                style={{
                  opacity: opacity,
                  transition: `opacity ${FADE_SECONDS}s ease-in-out`,
                }}
              >
                {phrases[currentPhraseIndex]}
              </h2>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};