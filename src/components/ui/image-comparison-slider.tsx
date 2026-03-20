import React, { useState, useRef, useCallback, useEffect } from 'react';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
}

export const ImageComparison: React.FC<ImageComparisonProps> = ({ beforeImage, afterImage, altBefore = 'Before', altAfter = 'After' }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!isDragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        let newPosition = ((clientX - rect.left) / rect.width) * 100;
        newPosition = Math.max(0, Math.min(100, newPosition));
        setSliderPosition(newPosition);
    }, [isDragging]);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = useCallback(() => setIsDragging(false), []);
    const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
    const handleTouchStart = () => setIsDragging(true);
    const handleTouchEnd = () => setIsDragging(false);
    const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        return () => window.removeEventListener('mouseup', handleMouseUp);
    }, [handleMouseUp]);

    return (
        <div 
            ref={containerRef}
            className="relative w-full select-none rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className="absolute top-0 left-0 h-full w-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img src={afterImage} alt={altAfter} className="h-full w-full object-cover object-center" draggable="false" />
            </div>

            <img src={beforeImage} alt={altBefore} className="block h-full w-full object-contain bg-white" draggable="false" />

            {/* Labels */}
            <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm border border-amber-400/20 rounded-lg px-3 py-1.5">
                <span className="text-amber-400 text-[11px] font-bold tracking-[0.15em] uppercase">Depois</span>
            </div>
            <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-sm border border-red-500/20 rounded-lg px-3 py-1.5">
                <span className="text-red-400/90 text-[11px] font-bold tracking-[0.15em] uppercase">Antes</span>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white/70 cursor-ew-resize flex items-center justify-center z-20"
                style={{ left: `calc(${sliderPosition}% - 2px)` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <div className={`bg-white rounded-full h-11 w-11 flex items-center justify-center shadow-lg transition-transform duration-200 ${isDragging ? 'scale-110' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                        <polyline points="15 18 9 12 15 6" />
                        <polyline points="9 18 15 12 9 6" transform="translate(6,0)" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
