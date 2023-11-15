import React from 'react'
import { youtubersText } from '../../data/youtubers'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const Youtubers = () => {
    return (
        <section>
            <h2> 😍다큐 유튜버 모음</h2>
            <div className="youtubers__inner">
                <Swiper
                    slidesPerView={10}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        200: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        400: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        800: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 20
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 20
                        },
                        1600: {
                            slidesPerView: 7,
                            spaceBetween: 20
                        }
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {youtubersText.map((youtubers, key) => (
                        <SwiperSlide className="youtubers play__icon" key={key}>
                            <div className='youtubers__img'>
                                <Link to={`/channel/${youtubers.channelId}`}>
                                    <img src={youtubers.img} alt={youtubers.author} />
                                </Link>
                            </div>
                            <div className='youtubers__info'>{youtubers.author}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Youtubers