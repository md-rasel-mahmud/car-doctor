import bannerImg1 from '../../assets/images/banner/1.jpg'
import bannerImg2 from '../../assets/images/banner/2.jpg'
import bannerImg3 from '../../assets/images/banner/3.jpg'
import bannerImg4 from '../../assets/images/banner/4.jpg'


const Banner = () => {

  return (
    <div className="carousel max-w-[90%] mx-auto rounded-xl my-5 h-[70vh] w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={bannerImg1}
          className="w-full object-cover"
        />
        <div className="absolute h-full  bg-gradient-to-r to-transparent from-black flex items-center gap-5 w-full">
          <div className='flex flex-col gap-5 pl-8 w-2/4'>
            <h2  className='text-5xl'>Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className='btn btn-secondary mr-3'>Discover More</button>
                <button className='btn btn-outline'>Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between right-5 gap-5 bottom-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={bannerImg2}
          className="w-full object-cover"
        />
        <div className="absolute h-full  bg-gradient-to-r to-transparent from-black flex items-center gap-5 w-full">
          <div className='flex flex-col gap-5 pl-8 w-2/4'>
            <h2  className='text-5xl'>Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className='btn btn-secondary mr-3'>Discover More</button>
                <button className='btn btn-outline'>Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between right-5 gap-5 bottom-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={bannerImg3}
          className="w-full object-cover"
        />
        <div className="absolute h-full  bg-gradient-to-r to-transparent from-black flex items-center gap-5 w-full">
          <div className='flex flex-col gap-5 pl-8 w-2/4'>
            <h2  className='text-5xl'>Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className='btn btn-secondary mr-3'>Discover More</button>
                <button className='btn btn-outline'>Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between right-5 gap-5 bottom-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={bannerImg4}
          className="w-full object-cover"
        />
        <div className="absolute h-full  bg-gradient-to-r to-transparent from-black flex items-center gap-5 w-full">
          <div className='flex flex-col gap-5 pl-8 w-2/4'>
            <h2  className='text-5xl'>Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className='btn btn-secondary mr-3'>Discover More</button>
                <button className='btn btn-outline'>Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between right-5 gap-5 bottom-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
