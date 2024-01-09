import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import { AiFillEye, AiFillLike, AiOutlineComment } from "react-icons/ai";
import Main from '../components/section/Main';

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [videoComments, setVideoComments] = useState([]);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                console.log(data)
                setVideoDetail(data.items[0])
            });
        fetchFromAPI(`commentThreads?videoId=${videoId}&part=snippet`)
            .then((data) => {
                const comments = data.items.slice(0, 10); // 여기서 10은 원하는 댓글 개수입니다.
                console.log(comments);
                setVideoComments(comments);
            });
    }, [videoId])

    const [expandedDesc, setExpandedDesc] = useState(false);
    const toggleDescription = () => {
        setExpandedDesc(!expandedDesc);
    };

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
                            <div className="video__desc">
                                <button className='video__moreBtn' onClick={toggleDescription}>
                                    {expandedDesc ? '▲ 접기' : '▼ 더보기'}
                                </button><br />
                                {expandedDesc ? videoDetail.snippet.description : videoDetail.snippet.description.split('\n', 2).join('\n')}
                            </div>
                            <div className="video__comments">
                                {videoComments.map((comment, index) => (
                                    <div key={index} className="comment">
                                        <div className='name'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</div>
                                        <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                                        {/* 이외의 다른 댓글 정보를 표시할 수 있습니다. */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </section>
        </Main>

    )
}

export default Video