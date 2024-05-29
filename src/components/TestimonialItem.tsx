import { testimonialType } from '../types';
import { useState } from 'react';
import StarRating from './StarRating';

const TestimonialItem = ({ testimonial }: { testimonial: testimonialType }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className='flex flex-col sm:flex-row bg-white h-[430px] sm:h-[300px] shadow-xl w-[340px] sm:w-[500px] md:w-[800px] rounded-[30px] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>
      <div className='h-[180px] sm:h-[300px] sm:w-[200px] md:w-[350px] relative'>
        {!isImageLoaded && (
          <div className='absolute inset-0 bg-gray-300  rounded-t-[30px] sm:rounded-tl-[30px] sm:rounded-bl-[30px] sm:rounded-t-[0px]'></div>
        )}
        <img
          src={testimonial.banner}
          alt='trip-image'
          className='w-full h-full rounded-t-[30px] sm:rounded-tl-[30px] sm:rounded-bl-[30px] sm:rounded-t-[0px]'
          onLoad={handleImageLoad}
        />
      </div>

      <div className='flex-1 text-sm manrope-normal h-[200px] sm:h-[300px] sm:w-[300px] pl-7 pr-5 flex flex-col py-5 sm:py-2 sm:justify-center gap-2 '>
        <div className='manrope-semibold'>
          <p className='text-xl'>{testimonial.name}</p>
          <p className='text-[#008080] manrope-bold -mt-1'>
            {testimonial.tagline}
          </p>
        </div>
        <p className='overflow-y-scroll sm:overflow-y-hidden text-[#444] px-1 sm:px-0'>
          {testimonial.testimonial}
        </p>
        <StarRating count={testimonial.stars} />
      </div>
    </div>
  );
};

export default TestimonialItem;
