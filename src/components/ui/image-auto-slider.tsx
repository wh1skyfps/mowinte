import React, { useRef, useState, useCallback, useEffect } from 'react';

interface ImageAutoSliderProps {
  images: string[];
  speed?: number;
}

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({ images, speed = 20 }) => {
  const duplicatedImages = [...images, ...images, ...images];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleDragStart = useCallback((clientX: number) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(clientX);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.animationPlayState = 'paused';
  }, []);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging || !scrollRef.current) return;
    const diff = clientX - startX;
    scrollRef.current.scrollLeft = scrollLeft - diff;
  }, [isDragging, startX, scrollLeft]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'running';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);
    return () => {
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [handleDragEnd]);

  return (
    <>
      <style>{`
        .scroll-container-portfolio {
          mask: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
        }
        @keyframes auto-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .auto-scroll-track {
          animation: auto-scroll ${speed}s linear infinite;
        }
        .auto-scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="w-full relative overflow-hidden scroll-container-portfolio cursor-grab active:cursor-grabbing"
        ref={scrollRef}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      >
        <div className="auto-scroll-track flex gap-5 w-max py-4" style={isDragging ? { animationPlayState: 'paused' } : {}}>
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Portfolio ${(index % images.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
