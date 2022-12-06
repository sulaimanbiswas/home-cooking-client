import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";

const State = () => {
  return (
    <div className="stats stats-vertical md:stats-horizontal shadow">
      <div className="stat place-items-center md:place-items-start">
        <div className="text-primary mb-5 ">
          <FaHandHoldingUsd className="text-6xl" />
        </div>
        <div className="text-3xl font-bold text-dark">Discount Voucher</div>
        <div className="stat-title mt-4 text-center md:text-start">
          Competently orchestrate integrated <br /> schema for quickly create.
        </div>
      </div>

      <div className="stat place-items-center md:place-items-start">
        <div className="text-primary mb-5">
          <MdFastfood className="text-6xl" />
        </div>
        <div className="text-3xl font-bold text-dark">Fresh Healthy Foods</div>
        <div className="stat-title mt-4 text-center md:text-start">
          Quantimanes orchestrate integrated <br /> schema for quickly Taken.
        </div>
      </div>

      <div className="stat place-items-center md:place-items-start">
        <div className="text-primary mb-5">
          <GiDeliveryDrone className="text-6xl" />
        </div>
        <div className="text-3xl font-bold text-dark">
          Fast Delivery Service
        </div>
        <div className="stat-title mt-4 text-center md:text-start">
          Mansikatils orchestrate integrated <br /> schema for quickly Harbest.
        </div>
      </div>
    </div>
  );
};

export default State;
