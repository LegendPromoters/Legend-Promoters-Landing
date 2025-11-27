import { MapPin } from "lucide-react";

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      name: "INDHRA NAGAR",
      location: "Padapai orathur",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/fb66017c35c1c72d5011aafbe4e798f6d125b693?width=882",
    },
    {
      id: 2,
      name: "JAYABALAN NAGAR",
      location: "Somangalam",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/df945e2921b65d1c8d9fa491de3c8d14e0bd17db?width=882",
    },
    {
      id: 3,
      name: "KUMARAN NAGAR",
      location: "Manimangalam",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d146697588bc1a9bae672010f92efd0574c24a45?width=882",
    },
    {
      id: 4,
      name: "Legend Garden",
      location: "Naduverrapattu",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/28a2a73a5149e6321de739e2abdfc8e3f0dc3f26?width=882",
    },
    {
      id: 5,
      name: "SATHIYAVANI MUTHU NAGAR",
      location: "Periyar Nagar",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/54f9b2388ad6a4df9b026636b0919b82472cd135?width=882",
    },
    {
      id: 6,
      name: "SRI THIRUMALA GARDEN",
      location: "Vaiyavur",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/7cc8b3d7eb4bc015c7953979b0706f83211815d5?width=882",
    },
    {
      id: 7,
      name: "SRI VENGATESWARA NAGAR",
      location: "Manimangalam",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9a50c1083c9461eaa5d7faea014798cf531021dc?width=882",
    },
    {
      id: 8,
      name: "SRI VIGNESHWARA NAGAR",
      location: "Padapi",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/051614008f9a479f61cf493b2bb6edc6a6514471?width=882",
    },
    {
      id: 9,
      name: "STAR CITY",
      location: "Amarabmedu",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/7c6495ebe1cb9ea6b3e4e96c6e269263dacb20b0?width=882",
    },
    {
      id: 10,
      name: "THANGAM NAGAR",
      location: "Somangalam",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ff3c04e2c697cceca692b0063e4619cd8f52641b?width=882",
    },
    {
      id: 11,
      name: "VKN NAGAR Padapai",
      location: "Orathur",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/86d22fb7333ae569bc448cf70b427e83422eb114?width=882",
    },
  ];

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
            <div key={property.id} className="flex flex-col gap-4">
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
    </section>
  );
}
