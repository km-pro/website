import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const categories = ['Все', ...Array.from(new Set(images.map((img) => img.category)))];

  const filteredImages =
    selectedCategory === 'Все' ? images : images.filter((img) => img.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowLeft') {
        navigateImage(-1);
      } else if (event.key === 'ArrowRight') {
        navigateImage(1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightboxIndex]);

  const navigateImage = (direction: number) => {
    if (lightboxIndex === null) return;

    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setLightboxIndex(newIndex);
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
        {filteredImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="break-inside-avoid relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform"
            onClick={() => openLightbox(index)}
          >
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                  <span className="text-xs bg-blue-600 px-2 py-1 rounded-full">{image.category}</span>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === lightboxRef.current && closeLightbox()}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="cursor-pointer absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-6 h-6" />
            </button>

            {lightboxIndex > 0 && (
              <button
                onClick={() => navigateImage(-1)}
                className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
                aria-label="Предыдущее изображение"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {lightboxIndex < filteredImages.length - 1 && (
              <button
                onClick={() => navigateImage(1)}
                className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
                aria-label="Следующее изображение"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            <div className="relative max-w-full max-h-full flex flex-col items-center">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />

              <div className="mt-4 text-center text-white max-w-2xl">
                <h3 className="text-xl font-bold mb-2">{filteredImages[lightboxIndex].title}</h3>
                <span className="inline-block bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {filteredImages[lightboxIndex].category}
                </span>
                <p className="mt-2 text-sm text-gray-300">
                  {lightboxIndex + 1} из {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
