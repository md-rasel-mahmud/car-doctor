import { FaArrowRight } from 'react-icons/fa'

const ServiceCard = ({ serviceCard }) => {

  const { img, title, description, price } = serviceCard;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src={img}
          alt="service image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0,100)}</p>
        <div className="card-actions flex justify-between items-center">
          <p className='text-secondary font-semibold'>Price: {price}</p>
          <button className="btn btn-ghost text-secondary btn-circle"><FaArrowRight/></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
