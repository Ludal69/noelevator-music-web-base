import React from "react";

interface Photo {
  id: string;
  url: string;
  alt: string;
}

const photos: Photo[] = [
  {
    id: "photo_1",
    url: require("../../assets/images/Bateau_El_Alamein.jpg"),
    alt: "Bateau_El_Alamein",
  },
  {
    id: "photo_2",
    url: require("../../assets/images/Bus Palladium.jpg"),
    alt: "Bus Palladium",
  },
  {
    id: "photo_3",
    url: require("../../assets/images/Residence.jpg"),
    alt: "Residence",
  },
  {
    id: "photo_4",
    url: require("../../assets/images/background.jpg"),
    alt: "background",
  },
  // Ajouter d'autres photos ici
];

const PhotoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {photos.map((photo) => (
        <div key={photo.id} className="flex justify-center">
          <img src={photo.url} alt={photo.alt} className="max-w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
