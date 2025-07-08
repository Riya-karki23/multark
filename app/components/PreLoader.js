"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const words = ["Automate", "Optimize", "Scale"];

const PreLoader = ({ onComplete }) => {
  const wordRefs = useRef([]);
  const containerRef = useRef(null);

  const [showMultark, setShowMultark] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Animate each word with stagger
    gsap.fromTo(
      wordRefs.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.4,
        ease: "power2.out",
        onComplete: () => {
          setTimeout(() => {
            // Fade out the words
            gsap.to(wordRefs.current, {
              opacity: 0,
              y: -20,
              duration: 0.5,
              stagger: 0.2,
              onComplete: () => {
                setShowMultark(true);
              },
            });
          }, 800); // Wait before showing Multark
        },
      }
    );
  }, []);

  useEffect(() => {
    if (done) {
      // Slide preloader up
      gsap.to(containerRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete?.();
        },
      });
    }
  }, [done]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen bg-black text-white flex items-center justify-center flex-col z-[9999]"
    >
      {/* Words row */}
      {!showMultark && (
        <div className="text-4xl font-bold mb-6 flex gap-4">
          {words.map((word, index) => (
            <span
              key={index}
              ref={(el) => (wordRefs.current[index] = el)}
              className="opacity-0"
            >
              {word}
            </span>
          ))}
        </div>
      )}

      {/* Multark Typewriter */}
      {showMultark && (
        <div className="text-3xl font-mono">
          <Typewriter
            text="Multark.com"
            speed={120}
            onTypingComplete={() => setDone(true)}
          />
        </div>
      )}
    </div>
  );
};

const Typewriter = ({ text, speed = 120, onTypingComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const textRef = useRef(text); // Store the text in a stable ref

  useEffect(() => {
    if (!textRef.current) return;

    let index = 0;
    const typing = setInterval(() => {
      const char = textRef.current[index];
      if (index >= textRef.current.length || char === undefined) {
        clearInterval(typing);
        setTimeout(() => {
          onTypingComplete?.();
        }, 500);
        return;
      }

      setDisplayedText((prev) => prev + char);
      index++;
    }, speed);

    return () => clearInterval(typing);
  }, [speed, onTypingComplete]);

  return <p>{displayedText}</p>;
};



export default PreLoader;

