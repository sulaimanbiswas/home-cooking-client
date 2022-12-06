import React from "react";

const Slider = () => {
  const sliderItems = [
    {
      _id: 1,
      img: "https://i.ibb.co/JvYKsGJ/hero-bg-1-1.jpg",
      title: `I SERVE THE TASTE, AS YOU LIKE FOODS`,
    },
    {
      _id: 2,
      img: "https://i.ibb.co/r5kwHNG/hero-bg-1-2.jpg",
      title: "YOU ALWAYS LIKE TASTE, OF OUR FAST FOODS",
    },
    {
      _id: 3,
      img: "https://i.ibb.co/zSnd14s/hero-bg-1-3.jpg",
      title: "I PROVIDE BEST BEHAVIOR AND YUMMY FOODS",
    },
  ];

  return (
    <div>
      <div className="carousel w-full">
        {sliderItems.map((slider) => (
          <div
            key={slider._id}
            id={`item${slider._id}`}
            className="carousel-item w-full"
          >
            <div className="card w-full bg-base-100 shadow-xl image-full before:opacity-100">
              <figure>
                <img src={slider.img} alt="Shoes" className="w-full" />
              </figure>
              <div className="card-body w-full md:w-1/2 items-start justify-center pl-32">
                <h2 className="card-title text-5xl">{slider.title}</h2>
                <div className="card-actions justify-start mt-5">
                  <button className="btn btn-primary btn-outline normal-case">
                    Order Now
                  </button>
                  <button className="btn btn-primary btn-outline normal-case">
                    Browse Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {sliderItems.map((slider) => (
          <a
            key={slider._id}
            href={`#item${slider._id}`}
            className="btn btn-xs b"
          >
            {slider._id}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Slider;
