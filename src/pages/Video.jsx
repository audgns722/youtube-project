import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import { AiFillEye, AiFillLike, AiOutlineComment } from "react-icons/ai";
import Main from '../components/section/Main';

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                console.log(data)
                setVideoDetail(data.items[0])
            })
    }, [videoId])

    return (

        <Main
            title="영상 페이지"
            description="다큐멘티리 영상을 볼수있는 페이지입니다.">
            <section id='videoPage'>
                {videoDetail && (
                    <div className='video__View'>
                        <div className='video__play'>
                            <ReactPlayer
                                playing={true}
                                url={`http://www.youtube.com/watch?v=${videoId}`}
                                width='100%'
                                height='100%'
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                        <div className='video__info'>
                            <h2 className='video__title'>{videoDetail.snippet.title}</h2>
                            <div className='video__channel'>
                                <div className='id'>
                                    <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                                </div>
                                <div className='count'>
                                    <span id='view'><AiFillEye />{videoDetail.statistics.viewCount}</span>
                                    <span id='like'><AiFillLike />{videoDetail.statistics.likeCount}</span>
                                    <span id='comment'><AiOutlineComment />{videoDetail.statistics.commentCount}</span>
                                </div>
                            </div>
                            <div className='video__desc'>
                                {videoDetail.snippet.description}
                            </div>
                        </div>
                    </div>
                )}

            </section>
        </Main>

    )
}

export default Video