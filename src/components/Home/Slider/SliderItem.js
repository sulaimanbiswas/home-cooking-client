import React from "react";

const SliderItem = ({ slider }) => {
  return (
    <div id={`item${slider.id}`} className="carousel-item w-full">
      <div className="card w-full bg-base-100 shadow-xl image-full">
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
  );
};

export default SliderItem;
