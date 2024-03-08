import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      location: "Istanbul",
    },
    {
      id: 2,
      location: "London",
    },
    {
      id: 3,
      location: "Tokyo",
    },
    {
      id: 4,
      location: "Paris",
    },
    {
      id: 5,
      location: "Chicago",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.location })}
        >
          {city.location}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
