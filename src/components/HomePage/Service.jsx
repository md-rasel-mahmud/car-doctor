import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col justify-center max-w-[90%] mx-auto">
      <h4 className="text-secondary text-center fond-semibold text-xl">
        Service
      </h4>
      <h2 className="text-2xl font-bold text-center">Our Service Area</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10 lg:grid-cols-3">
        {service.map((serviceCard) => (
          <ServiceCard key={serviceCard._id} serviceCard={serviceCard} />
        ))}
      </div>

      <div className="text-center">
        <button className="btn my-5 btn-outline btn-secondary">
          More Service
        </button>
      </div>
    </div>
  );
};

export default Service;
