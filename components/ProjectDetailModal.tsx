import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

interface ProjectDetailModalProps {
  imageFiles: string[];
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  imageFiles,
  onClose,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < imageFiles.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-75 flex items-center justify-center z-50 overflow-auto p-4">
      {selectedIndex !== null ? (
        <div className="fixed inset-0 bg-black/90 bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-accent-dark hover:text-accent-dark/70 font-bold rounded-full w-10 h-10 flex items-center justify-center bg-transparent"
            onClick={() => setSelectedIndex(null)}
          >
            <FaTimes size={20} />
          </button>
          <button
            className="absolute left-4 text-accent-dark hover:text-accent-dark/70 font-bold rounded-full w-10 h-10 flex items-center justify-center bg-transparent disabled:opacity-50"
            onClick={handlePrev}
            disabled={selectedIndex === 0}
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            className="absolute right-4 text-accent-dark hover:text-accent-dark/70 font-bold rounded-full w-10 h-10 flex items-center justify-center bg-transparent disabled:opacity-50"
            onClick={handleNext}
            disabled={selectedIndex === imageFiles.length - 1}
          >
            <FaArrowRight size={20} />
          </button>
          <div className="relative w-full h-[70vh] sm:h-[80vh] max-w-lg sm:max-w-2xl md:max-w-4xl">
            <Image
              src={imageFiles[selectedIndex]}
              alt={`Screenshot ${selectedIndex + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      ) : (
        <div className="bg-secondary-dark rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide">
          <div className="sticky top-0 bg-secondary-dark p-4 sm:p-6 flex justify-between items-center border-b border-gray-700 z-10">
            <h2 className="text-lg sm:text-xl font-bold text-accent-dark">
              Project Images
            </h2>
            <button
              className="text-accent-dark hover:text-accent-dark/70 font-bold rounded-full w-10 h-10 flex items-center justify-center bg-transparent flex-shrink-0"
              onClick={onClose}
            >
              <FaTimes size={20} />
            </button>
          </div>
          <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {imageFiles.map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden cursor-pointer transition-all rounded-lg border-2 border-secondary-dark hover:border-accent-dark/50"
                style={{ height: "150px", minHeight: "150px" }}
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailModal;
