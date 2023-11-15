import React from 'react'

import { youtubersText } from '../data/youtubers'
import { Link } from 'react-router-dom'

const Youtubers = () => {
    return (
        <section id="youtubers">
            <h2> 😍다큐 유튜버 모음</h2>
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
    )
}

export default Youtubers