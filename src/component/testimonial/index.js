import React, { useEffect, useRef, useState } from 'react'
import {HiOutlineArrowNarrowLeft,HiOutlineArrowNarrowRight} from 'react-icons/hi'
import SliderPart from '../reuseable/slider'
import Slide from '../reuseable/slide'
// import Swiper core and required modules

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiOutlineArrowsAlt } from 'react-icons/ai';
import Title from '../reuseable/heading';

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <>
//     <HiOutlineArrowNarrowRight
//       className={className}
//       style={{ ...style, display: "block", background: "red",fontSize:'40px', width:'50px', }}
//       onClick={onClick}
//     />
  
//     </>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <HiOutlineArrowNarrowLeft
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

export default function Testimonial() {

  // let [slideToShow, setSlideToShow] = useState(3)
  
  const sliderRef = useRef(null);

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  // constructor(props) {
  //   super(props);
  //   this.next = this.next.bind(this);
  //   this.previous = this.previous.bind(this);
  // };
  // next() {
  //   this.slider.slickNext();
  // };
  // previous() {
  //   this.slider.slickPrev();
  // }

  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    padding:'10px',
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  

  return (
    <>
        <div className="bg-cover bg-center w-full overflow-hidden" style={{ backgroundImage: `url('./images/testimonial/bg.jpg')` }}>
            <div className='bg-main_color/90 w-full  py-20'>
              <div className='container'>
                  {/* Section Heading Start */}
                   <Title shortTile='Here are all feedback of our clients' title='Testimonial' shortDescription='' waterMark='FeedBack' />
                  {/* Section Heading End */}
                  {/* FeedBack Start */}
                  <Slider {...settings} ref={sliderRef}>
                      <SliderPart name="Usman Ali" designation="Sr. Manager og M L P ltd." feedback="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                      " img="./images/testimonial/team (2).jpg"/>
                      <SliderPart name="Usman Ali" designation="Sr. Manager og M L P ltd." feedback="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                      " img="./images/testimonial/team (2).jpg"/>
                      <SliderPart name="Usman Ali" designation="Sr. Manager og M L P ltd." feedback="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                      " img="./images/testimonial/team (2).jpg"/>
                      <SliderPart name="Usman Ali" designation="Sr. Manager og M L P ltd." feedback="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                      " img="./images/testimonial/team (2).jpg"/>
                      <SliderPart name="Usman Ali" designation="Sr. Manager og M L P ltd." feedback="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                      " img="./images/testimonial/team (2).jpg"/>
                      <SliderPart name="Usman Ali" designation="Sr. Manager og M L P ltd." feedback="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                      " img="./images/testimonial/team (2).jpg"/>
                  </Slider>
                  <div className='relative mt-20'>
                    <div onClick={goToPrevious} className='w-14 h-10 slider-arrow  prevElGo bg-active flex justify-center items-center absolute top-0 right-[0%] cursor-pointer'>
                      <HiOutlineArrowNarrowRight  className='inline-block text-2xl' />
                    </div>
                    <div onClick={goToNext} className='w-14 h-10 slider-arrow nextElGo bg-active flex justify-center items-center absolute top-0 left-[0%] cursor-pointer'>
                      <HiOutlineArrowNarrowLeft className='inline-block text-2xl' />
                    </div>
                  </div> 
                  {/* FeedBack End */}


              </div>
            </div>
        </div>
    </>
  )
}
