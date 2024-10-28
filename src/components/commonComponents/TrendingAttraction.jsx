import React from 'react';

const famousLocations = [
  "Colosseum",
  "Louvre Museum",
  "Eiffel Tower",
  "Hoover Dam",
  "Sagrada Familia",
  "Statue of Liberty",
  "Acropolis",
  "St. Mark's Basilica (Basilica di San Marco)",
  "Burj Khalifa",
  "French Quarter",
  "Roman Forum (Foro Romano)",
  "Edinburgh Castle",
  "Na Pali Coast",
  "Tower of London",
  "Sistine Chapel (Cappella Sistina)",
  "Florence Duomo (Cattedrale di Santa Maria dei Fiori)",
  "Road to Hana (Hana Highway)",
  "Milan Duomo",
  "Molokini Crater",
  "Vatican Museums (Musei Vaticani)"
];
const popularOnViator = [
    "Statue of Liberty Tours and Tickets",
    "The White House Tours and Tickets",
    "Antelope Canyon Tours and Tickets",
    "Hoover Dam Tours and Tickets",
    "Alcatraz Tours and Tickets",
    "Stonehenge Tours and Tickets",
    "Auschwitz-Birkenau Memorial and Museum Tours and Tickets",
    "Beverly Hills Tours and Tickets",
    "Colosseum Tours and Tickets",
    "Washington Monument Tours and Tickets",
    "San Diego Zoo Tours and Tickets",
    "Space Needle Tours and Tickets",
    "Eiffel Tower Tours and Tickets",
    "Pearl Harbor National Memorial Tours and Tickets",
    "Empire State Building Tours and Tickets",
    "Art Institute of Chicago Tours and Tickets",
    "Aquarium of the Pacific Tours and Tickets",
    "Blue Lagoon Tours and Tickets",
    "Burj Khalifa Tours and Tickets",
    "Metropolitan Museum of Art (The Met) Tours and Tickets"
  ];
  

const TrendingAttraction = () => {
  return (
    <>
   
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Trending attractions</h2>
      <div className="flex flex-wrap text-lg text-gray-800">
        {famousLocations.map((location, index) => (
          <span key={index} className="flex items-center text-[15px] text-black">
            {location}
            {index < famousLocations.length - 1 && (
              <span className="mx-2">|</span>
            )}
          </span>
        ))}
      </div>
    </div>

    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Popular on Viator</h2>
      <div className="flex flex-wrap text-lg text-gray-800">
        {popularOnViator.map((location, index) => (
          <span key={index} className="flex items-center text-[15px] text-black">
            {location}
            {index < famousLocations.length - 1 && (
              <span className="mx-2">|</span>
            )}
          </span>
        ))}
      </div>
    </div>

    </>
  );
};

export default TrendingAttraction;
