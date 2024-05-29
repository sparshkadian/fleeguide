import { testimonials } from '../constants';
import TestimonialItem from './TestimonialItem';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='h-screen w-screen p-5'>
      <div className='bg-[#00808029] py-7 mt-10 rounded-[50px] max-w-7xl h-[400px] mx-auto flex flex-col items-center gap-5'>
        {/*  */}
        <div className='flex gap-3 items-center'>
          <img src='../teal-dot.png' alt='dot' width={18} />
          <p className='bg-[#008080] h-[15px] rounded-[50px] w-[60px]'></p>
        </div>

        {/* Text */}
        <div className='manrope-semibold flex flex-col gap-2 items-center text-center'>
          <p className='text-2xl sm:text-5xl'>What Our Customers say?</p>
          <p className='px-2 max-w-[600px] text-[#888] text-sm sm:text-base'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit excepturi ipsam itaque necessitatibus quod aliquam
            ipsa reiciendis, veniam
          </p>
        </div>

        {/* Testmonial Items */}
        <div className='relative flex justify-center mt-8 w-full'>
          {/* left arrow */}
          <div
            onClick={handlePrevTestimonial}
            className='z-10 cursor-pointer bg-[#008080] p-4 rounded-full absolute left-0 md:left-[50px] top-[150px] flex justify-center items-center'
          >
            <img src='../left-arrow.png' alt='left-arrow' width={20} />
          </div>

          <AnimatePresence initial={false}>
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 250 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -250 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='absolute'
            >
              <TestimonialItem
                key={testimonials[currentIndex].id}
                testimonial={testimonials[currentIndex]}
              />
            </motion.div>
          </AnimatePresence>
          {/* right arrow */}
          <div
            onClick={handleNextTestimonial}
            className='z-10 cursor-pointer bg-[#008080] p-4 rounded-full absolute right-0 md:right-[50px] top-[150px] flex justify-center items-center'
          >
            <img src='../right-arrow.png' alt='left-arrow' width={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
