import React, { useEffect, useState } from 'react'

import Today from '../components/contents/Today'
import Youtubers from '../components/contents/Youtubers'
import Main from '../components/section/Main'
import VideoSlider from '../components/video/VideoSlider'
import { fetchFromAPI } from '../utils/api'


const Home = () => {
    const [channelVideo1, setChannelVideo1] = useState([]);
    const [channelVideo2, setChannelVideo2] = useState([]);
    const [channelVideo3, setChannelVideo3] = useState([]);
    const [channelVideo4, setChannelVideo4] = useState([]);
    const [channelVideo5, setChannelVideo5] = useState([]);

    useEffect(() => {
        const v1 = "UC4LW3sOslC14Vn5bcoNUBkg"
        const v2 = "UCFCtZJTuJhE18k8IXwmXTYQ"
        const v3 = "UCPx-7AKiN1Z_qEVKhLQ5pAw"
        const v4 = "UCpVm7bg6pXKo1Pr6k5kxG9A"
        const v5 = "UCFw4M1BJYYdN1YtS8SzlDzg"

        const fetchResults = async () => {
            try {
                const videosData1 = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`);
                setChannelVideo1(videosData1.items);

                const videosData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`);
                setChannelVideo2(videosData2.items);

                const videosData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`);
                setChannelVideo3(videosData3.items);

                const videosData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`);
                setChannelVideo4(videosData4.items);

                const videosData5 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`);
                setChannelVideo5(videosData5.items);
            } catch (error) {
                console.log("Error fetching data -> ", error);
            }
        }
        fetchResults();
    }, [])

    return (
        <Main
            title="다큐 유튜브"
            description="당신을 다큐멘터리 세계로 초대합니다.">
            <Today />
            <Youtubers />
            <VideoSlider videos={channelVideo1} title='🤗 KBS다큐 최신 영상' name='v1' />
            <VideoSlider videos={channelVideo2} title='🤗 EBS다큐 최신 영상' name='v2' />
            <VideoSlider videos={channelVideo3} title='🤗 SBS달리 최신 영상' name='v3' />
            <VideoSlider videos={channelVideo4} title='🤗 네셔널지오그래픽 최신 영상' name='v4' />
            <VideoSlider videos={channelVideo5} title='🤗 KBS여행 걸어서 세계속으로 최신 영상' name='v5' />
        </Main >
    )
}

export default Home