import React from 'react'

import { todayText } from '../data/today'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'


const Today = () => {

    return (

        <Main
            title="오늘의 영상"
            description="오늘의 추천 영상을 보여주는 페이지입니다.">
            <section id='today'>
                <h2>🤩 오늘의 추천 영상</h2>
                {todayText.map((today, key) => (
                    <div className="today__inner" key={key}>
                        <div className="today__thumb play__icon">
                            <Link
                                to={`/video/${today.videoId}`}
                                style={{ backgroundImage: `url(${today.img})` }}
                            >
                            </Link>
                        </div>
                        <div className="today__text">
                            <span className='today'>오늘의 영상</span>
                            <h3 className='title'>{today.title}</h3>
                            <p className='desc'>{today.desc}</p>
                            <div className="info">
                                <span className='author'>{today.author}</span>
                                <span className='date'>{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section >
        </Main>

    )
}

export default Today