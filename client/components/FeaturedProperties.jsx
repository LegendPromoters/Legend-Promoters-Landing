import { useState } from "react";
import { MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

// Automatically import all photos
const indhraPhotos = import.meta.glob('@/assets/indhra-nagar/*.jpeg', { eager: true, import: 'default' });
const jayabalanPhotos = import.meta.glob('@/assets/jayabalan-nagar/*.jpeg', { eager: true, import: 'default' });
const kumaranPhotos = import.meta.glob('@/assets/kumaran-nagar/*.jpeg', { eager: true, import: 'default' });
const legendPhotos = import.meta.glob('@/assets/legend-garden/*.jpeg', { eager: true, import: 'default' });
const sathiyavaniPhotos = import.meta.glob('@/assets/sathiyavani-muthu-nagar/*.jpeg', { eager: true, import: 'default' });
const sriThirumalaPhotos = import.meta.glob('@/assets/sri-thirumala-garden/*.jpeg', { eager: true, import: 'default' });
const sriVengateswaraPhotos = import.meta.glob('@/assets/sri-vengateswara-nagar/*.jpeg', { eager: true, import: 'default' });
const sriVigneshwaraPhotos = import.meta.glob('@/assets/sri-vigneshwara-nagar/*.jpeg', { eager: true, import: 'default' });
const starCityPhotos = import.meta.glob('@/assets/star-city/*.jpeg', { eager: true, import: 'default' });
const thangamPhotos = import.meta.glob('@/assets/thangam-nagar/*.jpeg', { eager: true, import: 'default' });
const vknPhotos = import.meta.glob('@/assets/vkn-nagar/*.jpeg', { eager: true, import: 'default' });

// Convert object to array of image URLs
const photos = Object.values(indhraPhotos);
const photos2 = Object.values(jayabalanPhotos);
const photos3 = Object.values(kumaranPhotos);
const photos4 = Object.values(legendPhotos);
const photos5 = Object.values(sathiyavaniPhotos);
const photos6 = Object.values(sriThirumalaPhotos);
const photos7 = Object.values(sriVengateswaraPhotos);
const photos8 = Object.values(sriVigneshwaraPhotos);
const photos9 = Object.values(starCityPhotos);
const photos10 = Object.values(thangamPhotos);
const photos11 = Object.values(vknPhotos);

const properties = [
    {
      id: 1,
      name: "INDHRA NAGAR",
      location: "Padapai orathur",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/fb66017c35c1c72d5011aafbe4e798f6d125b693?width=882",
        photos: [indhraPhotos],
    },
    {
      id: 2,
      name: "JAYABALAN NAGAR",
      location: "Somangalam",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/df945e2921b65d1c8d9fa491de3c8d14e0bd17db?width=882",
        photos: [jayabalanPhotos],
    },
    {
      id: 3,
      name: "KUMARAN NAGAR",
      location: "Manimangalam",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d146697588bc1a9bae672010f92efd0574c24a45?width=882",
        photos: [kumaranPhotos],
    },
    {
      id: 4,
      name: "Legend Garden",
      location: "Naduverrapattu",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/28a2a73a5149e6321de739e2abdfc8e3f0dc3f26?width=882",
        photos: [legendPhotos],
    },
    {
      id: 5,
      name: "SATHIYAVANI MUTHU NAGAR",
      location: "Periyar Nagar",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/54f9b2388ad6a4df9b026636b0919b82472cd135?width=882",
        photos: [sathiyavaniPhotos],
    },
    {
      id: 6,
      name: "SRI THIRUMALA GARDEN",
      location: "Vaiyavur",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/7cc8b3d7eb4bc015c7953979b0706f83211815d5?width=882",
        photos: [sriThirumalaPhotos],
    },
    {
      id: 7,
      name: "SRI VENGATESWARA NAGAR",
      location: "Manimangalam",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9a50c1083c9461eaa5d7faea014798cf531021dc?width=882",
        photos: [sriVengateswaraPhotos],
    },
    {
      id: 8,
      name: "SRI VIGNESHWARA NAGAR",
      location: "Padapi",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/051614008f9a479f61cf493b2bb6edc6a6514471?width=882",
        photos: [sriVigneshwaraPhotos],
    },
    {
      id: 9,
      name: "STAR CITY",
      location: "Amarabmedu",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/7c6495ebe1cb9ea6b3e4e96c6e269263dacb20b0?width=882",
        photos: [starCityPhotos],
    },
    {
      id: 10,
      name: "THANGAM NAGAR",
      location: "Somangalam",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ff3c04e2c697cceca692b0063e4619cd8f52641b?width=882",
        photos: [thangamPhotos],
    },
    {
      id: 11,
      name: "VKN NAGAR Padapai",
      location: "Orathur",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/86d22fb7333ae569bc448cf70b427e83422eb114?width=882",
        photos: [vknPhotos],
    },
  ];

export default function FeaturedProperties() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentPhotos, setCurrentPhotos] = useState(photos);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (photos) => {
    setCurrentPhotos(photos);
    setCurrentIndex(0);
    setGalleryOpen(true);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev === 0 ? currentPhotos.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev === currentPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="properties"
      className="bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="font-display text-heading text-4xl sm:text-5xl lg:text-6xl font-normal mb-12 md:mb-16">
          Featured <span className="font-bold text-primary_blue">Property</span>{" "}
          Collection
        </h2>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {properties.map((property) => (
  <div 
    key={property.id} 
    className="flex flex-col gap-4 cursor-pointer"  // make it clickable
    onClick={() => {
      if (property.name === "INDHRA NAGAR") {
        openGallery(photos);  // pass the imported Indhra photos
      } else if (property.name === "JAYABALAN NAGAR") {
        openGallery(photos2);  // pass the imported Jayabalan photos
      } else if (property.name === "KUMARAN NAGAR") {
        openGallery(photos3);  // pass the imported Kumaran photos
      } else if (property.name === "Legend Garden") {
        openGallery(photos4);  // pass the imported Legend Garden photos
      } else if (property.name === "SATHIYAVANI MUTHU NAGAR") {
        openGallery(photos5);  // pass the imported Sathiyavani Muthu Nagar photos
      } else if (property.name === "SRI THIRUMALA GARDEN") {
        openGallery(photos6);  // pass the imported Sri Thirumala Garden photos
      } else if (property.name === "SRI VENGATESWARA NAGAR") {
        openGallery(photos7);  // pass the imported Sri Vengateswara Nagar photos
      } else if (property.name === "SRI VIGNESHWARA NAGAR") {
        openGallery(photos8);  // pass the imported Sri Vengateswara Nagar Padapi photos
      } else if (property.name === "STAR CITY") {
        openGallery(photos9);  // pass the imported Star City photos
      } else if (property.name === "THANGAM NAGAR") {
        openGallery(photos10);  // pass the imported Thangam Nagar photos
      } else if (property.name === "VKN NAGAR Padapai") {
        openGallery(photos11);  // pass the imported VKN Nagar photos
      }
    }}
  >
    {/* Image Container */}
    <div className="relative h-64 sm:h-72 overflow-hidden rounded-lg bg-grey">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-full object-cover hover:scale-105 transition duration-300"
      />
    </div>

    {/* Property Info */}
    <div>
      <h3 className="font-display text-heading text-lg font-normal mb-3">
        {property.name}
      </h3>

      {/* Location Badge */}
      <div className="inline-flex items-center gap-2 bg-primary_blue text-white px-3 py-2 rounded-md">
        <MapPin className="w-5 h-5" />
        <span className="font-display text-white text-sm font-normal">
          {property.location}
        </span>
      </div>
    </div>
  </div>
))}
        </div>
      </div>
      {/* Gallery Modal */}
      {galleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-[9999] flex items-center justify-center">
          <div className="relative max-w-[90%] max-h-[90%]">
            <img
              src={currentPhotos[currentIndex]}
              alt={`Photo ${currentIndex + 1}`}
              className="h-[80vh] w-[80vw] object-cover rounded-lg"
            />

            <button
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50"
              onClick={prevPhoto}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50"
              onClick={nextPhoto}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <button
              className="absolute top-4 right-4 text-white p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50"
              onClick={() => setGalleryOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
