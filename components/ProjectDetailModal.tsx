import React from "react";
import Image from "next/image";

interface ProjectDetailModalProps {
  imageFiles: string[];
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  imageFiles,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-primary-dark bg-opacity-75 flex items-center justify-center z-50 overflow-auto">
      <div className="bg-secondary-dark/70  p-4 shadow-2xl shadow-accent-dark/10 sm:p-6 rounded-lg w-full max-w-md sm:max-w-3xl mx-4 sm:mx-auto">
        <div className="flex justify-end">
          <button
            className="text-white font-bold mb-4 bg-accent-dark hover:bg-accent-dark/80 rounded-lg px-4 py-2 transition-colors"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {imageFiles.map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg border-2 border-secondary-dark hover:border-accent-dark/50 transition-all"
              style={{ height: "200px" }}
            >
              <Image
                src={image}
                alt={`Screenshot ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
