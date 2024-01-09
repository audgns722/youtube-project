import React from 'react'

import { youtubersText } from '../data/youtubers'
import { Link } from 'react-router-dom'
import Main from '../components/section/Main'

const Youtubers = () => {

    return (
        <Main
            title="다큐 유튜브 채널 모음"
            description="다큐 유튜브 채널을 한곳에 모아본 페이지입니다. ">
            <section id="youtubers">
                <h2> 😍다큐 유튜브 채널 모음</h2>
                <div className="youtubers__inner">
                    {youtubersText.map((youtubers, key) => (
                        <div className="youtubers play__icon" key={key}>
                            <div className='youtubers__img'>
                                <Link to={`/channel/${youtubers.channelId}`}>
                                    <img src={youtubers.img} alt={youtubers.author} />
                                </Link>
                            </div>
                            <div className='youtubers__info'>{youtubers.author}</div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>

    )
}

export default Youtubers