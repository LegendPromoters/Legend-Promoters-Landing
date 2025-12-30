import { useState } from "react";
import { MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

/* ================= IMAGE IMPORTS ================= */
const indhraPhotos = import.meta.glob("@/assets/indhra-nagar/*.jpeg", { eager: true, import: "default" });
const jayabalanPhotos = import.meta.glob("@/assets/jayabalan-nagar/*.jpeg", { eager: true, import: "default" });
const kumaranPhotos = import.meta.glob("@/assets/kumaran-nagar/*.jpeg", { eager: true, import: "default" });
const legendPhotos = import.meta.glob("@/assets/legend-garden/*.jpeg", { eager: true, import: "default" });
const sathiyavaniPhotos = import.meta.glob("@/assets/sathiyavani-muthu-nagar/*.jpeg", { eager: true, import: "default" });
const sriThirumalaPhotos = import.meta.glob("@/assets/sri-thirumala-garden/*.jpeg", { eager: true, import: "default" });
const sriVengateswaraPhotos = import.meta.glob("@/assets/sri-vengateswara-nagar/*.jpeg", { eager: true, import: "default" });
const sriVigneshwaraPhotos = import.meta.glob("@/assets/sri-vigneshwara-nagar/*.jpeg", { eager: true, import: "default" });
const starCityPhotos = import.meta.glob("@/assets/star-city/*.jpeg", { eager: true, import: "default" });
const thangamPhotos = import.meta.glob("@/assets/thangam-nagar/*.jpeg", { eager: true, import: "default" });
const vknPhotos = import.meta.glob("@/assets/vkn-nagar/*.jpeg", { eager: true, import: "default" });

/* ================= ARRAYS ================= */
const properties = [
  { id: 1, name: "INDHRA NAGAR", location: "Padapai Orathur", image: "https://api.builder.io/api/v1/image/assets/TEMP/fb66017c35c1c72d5011aafbe4e798f6d125b693?width=882", photos: Object.values(indhraPhotos) },
  { id: 2, name: "JAYABALAN NAGAR", location: "Somangalam", image: "https://api.builder.io/api/v1/image/assets/TEMP/df945e2921b65d1c8d9fa491de3c8d14e0bd17db?width=882", photos: Object.values(jayabalanPhotos) },
  { id: 3, name: "KUMARAN NAGAR", location: "Manimangalam", image: "https://api.builder.io/api/v1/image/assets/TEMP/d146697588bc1a9bae672010f92efd0574c24a45?width=882", photos: Object.values(kumaranPhotos) },
  { id: 4, name: "Legend Garden", location: "Naduverrapattu", image: "https://api.builder.io/api/v1/image/assets/TEMP/28a2a73a5149e6321de739e2abdfc8e3f0dc3f26?width=882", photos: Object.values(legendPhotos) },
  { id: 5, name: "SATHIYAVANI MUTHU NAGAR", location: "Periyar Nagar", image: "https://api.builder.io/api/v1/image/assets/TEMP/54f9b2388ad6a4df9b026636b0919b82472cd135?width=882", photos: Object.values(sathiyavaniPhotos) },
  { id: 6, name: "SRI THIRUMALA GARDEN", location: "Vaiyavur", image: "https://api.builder.io/api/v1/image/assets/TEMP/7cc8b3d7eb4bc015c7953979b0706f83211815d5?width=882", photos: Object.values(sriThirumalaPhotos) },
  { id: 7, name: "SRI VENGATESWARA NAGAR", location: "Manimangalam", image: "https://api.builder.io/api/v1/image/assets/TEMP/9a50c1083c9461eaa5d7faea014798cf531021dc?width=882", photos: Object.values(sriVengateswaraPhotos) },
  { id: 8, name: "SRI VIGNESHWARA NAGAR", location: "Padapai", image: "https://api.builder.io/api/v1/image/assets/TEMP/051614008f9a479f61cf493b2bb6edc6a6514471?width=882", photos: Object.values(sriVigneshwaraPhotos) },
  { id: 9, name: "STAR CITY", location: "Amarambedu", image: "https://api.builder.io/api/v1/image/assets/TEMP/7c6495ebe1cb9ea6b3e4e96c6e269263dacb20b0?width=882", photos: Object.values(starCityPhotos) },
  { id: 10, name: "THANGAM NAGAR", location: "Somangalam", image: "https://api.builder.io/api/v1/image/assets/TEMP/ff3c04e2c697cceca692b0063e4619cd8f52641b?width=882", photos: Object.values(thangamPhotos) },
  { id: 11, name: "VKN NAGAR Padapai", location: "Orathur", image: "https://api.builder.io/api/v1/image/assets/TEMP/86d22fb7333ae569bc448cf70b427e83422eb114?width=882", photos: Object.values(vknPhotos) },
];

/* ================= COMPONENT ================= */
export default function FeaturedProperties() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section
  id="properties"
  className="relative py-28 overflow-hidden"
  style={{
    background: "linear-gradient(180deg, #0b0b0b 0%, #1a1a1a 100%)",
  }}
>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-20 text-center">
          Featured{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
            Property
          </span>{" "}
          Collection
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {properties.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                setCurrentPhotos(p.photos);
                setCurrentIndex(0);
                setGalleryOpen(true);
              }}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-[0_30px_60px_rgba(212,175,55,0.25)] transition-all duration-500"
            >
              {/* Image */}
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-80 object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-105"
              />
              {/* Name & Location */}
              <div className="bg-black rounded-b-2xl p-4 flex flex-col gap-2 border-t border-[#D4AF37]/30">
                <h3 className="text-lg text-white font-semibold">{p.name}</h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black text-sm shadow-md">
                  <MapPin className="w-4 h-4" />
                  {p.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {galleryOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center px-4 sm:px-0">
          <div className="relative w-full max-w-6xl">
            <img
              src={currentPhotos[currentIndex]}
              alt=""
              className="w-full h-[80vh] object-cover rounded-2xl shadow-[0_40px_100px_rgba(212,175,55,0.35)] transition-transform duration-500"
            />

            {/* Navigation */}
            <button
              onClick={() =>
                setCurrentIndex((i) =>
                  i === 0 ? currentPhotos.length - 1 : i - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() =>
                setCurrentIndex((i) =>
                  i === currentPhotos.length - 1 ? 0 : i + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronRight />
            </button>

            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] shadow-lg hover:scale-110 transition-transform"
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}