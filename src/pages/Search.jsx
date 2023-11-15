import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaClapperboard } from "react-icons/fa6";

import VideoSearch from '../components/video/VideoSearch';
import { fetchFromAPI } from '../utils/api';

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos((prevVidoes) => [...prevVidoes, ...data.items])
                console.log(data)
            })
            .catch((error) => {
                console.log("error fetching data", error);
            })
    }

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    }

    return (
        <section id="searchPage">
            <h2><FaClapperboard /> {searchId} 검색결과입니다.</h2>

            <div className='video__inner'>
                <VideoSearch videos={videos} />
            </div>
            <div className="video__more">
                <button onClick={handleLoadMore}>더 보기 ↓</button>
            </div>
        </section>
    )
}

export default Search