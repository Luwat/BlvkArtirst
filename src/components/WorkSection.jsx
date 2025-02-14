import React, { useEffect, useState } from 'react';

const WorkGallery = () => {
  const [mediaFiles, setMediaFiles] = useState([]);

  useEffect(() => {
    fetch('/media-files.json')
      .then((res) => res.json())
      .then((files) => setMediaFiles(files))
      .catch((err) => console.error('Error loading media files:', err));
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Work Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mediaFiles.map((file, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              {file.endsWith('.mp4') ? (
                <video src={file} autoPlay loop muted className="w-full h-auto" />
              ) : (
                <img src={file} alt="Gallery item" className="w-full h-auto object-cover" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
