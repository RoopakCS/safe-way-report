import DomeGallery from './DomeGallery';
import { useEffect, useState } from 'react';

export const GallerySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Gallery images - replace with actual hackathon/event photos
  const galleryImages = [
    { src: '/IMG_6816.JPG', alt: 'Hackathon event' },
    { src: '/IMG_2907.JPG', alt: 'Team collaboration' },
    { src: '/IMG_2888.JPG', alt: 'Coding session' },
    { src: '/IMG_2476.JPG', alt: 'Presentation' },
    { src: '/IMG_6927.JPG', alt: 'Workshop' },
    { src: '/IMG_6922.JPG', alt: 'Networking' },
    { src: '/IMG_2019.JPG', alt: 'Awards ceremony' },
  ];

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      {/* Section Header - positioned above the gallery */}
      <div className="container mx-auto px-6 mb-16 md:mb-48 relative z-20 pointer-events-none">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-primary">GALLERY</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Moments captured from our previous events and hackathons
          </p>
        </div>
      </div>

      {/* Dome Gallery */}
      <div className="w-full h-[50vh] min-h-[350px] md:h-[70vh] md:min-h-[500px] relative z-10">
        <DomeGallery
          images={galleryImages}
          fit={isMobile ? 0.85 : 0.6}
          fitBasis="auto"
          minRadius={isMobile ? 200 : 400}
          maxRadius={isMobile ? 400 : 800}
          padFactor={0.2}
          overlayBlurColor="rgba(0, 0, 0, 0.9)"
          maxVerticalRotationDeg={8}
          dragSensitivity={isMobile ? 12 : 18}
          enlargeTransitionMs={350}
          segments={isMobile ? 20 : 30}
          dragDampening={1.5}
          openedImageWidth={isMobile ? "85vw" : "500px"}
          openedImageHeight={isMobile ? "85vw" : "500px"}
          imageBorderRadius="16px"
          openedImageBorderRadius="12px"
          grayscale={false}
        />
      </div>
    </section>
  );
};

export default GallerySection;
