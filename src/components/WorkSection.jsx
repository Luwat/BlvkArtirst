import { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, mediaUrl, isVideo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {isVideo ? (
          <video
            src={mediaUrl}
            autoPlay
            controls
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        ) : (
          <img
            src={mediaUrl}
            alt="Enlarged view"
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        )}
      </div>
    </div>
  );
};

const WorkGallery = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    fetch('/media-files.json')
      .then((res) => res.json())
      .then((files) => {
        setMediaFiles(files);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading media files:', err);
        setLoading(false);
      });
  }, []);

  const handleMediaClick = (file) => {
    setSelectedMedia(file);
  };

  return (
    <section  id='work' className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Gallery</h2>
          <div className="w-20 h-1 bg-gray-900 rounded"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-900 border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {mediaFiles.map((file, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer"
                onClick={() => handleMediaClick(file)}
              >
                <div className="aspect-square w-full"> {/* Fixed aspect ratio container */}
                  {file.endsWith('.mp4') ? (
                    <video 
                      src={file} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <img 
                      src={file} 
                      alt={`Gallery item ${index + 1}`}
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 px-4 py-2 rounded-full">
                      <p className="text-gray-900 text-sm font-medium">
                        Click to {file.endsWith('.mp4') ? 'Play' : 'View'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Modal
          isOpen={selectedMedia !== null}
          onClose={() => setSelectedMedia(null)}
          mediaUrl={selectedMedia}
          isVideo={selectedMedia?.endsWith('.mp4')}
        />

        {!loading && mediaFiles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No media files found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGallery;