import { FcHome, FcCamcorderPro, FcGenericSortingAsc } from "react-icons/fc";
import { ImGithub, ImInstagram, ImCodepen } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";


export const menuText = [
    {
        title: "다큐 채널 홈",
        icon: <FcHome />,
        src: "/"
    }, {
        title: "오늘의 영상",
        icon: <FcCamcorderPro />,
        src: "/today"
    }, {
        title: "다큐 채널 모음",
        icon: <FcGenericSortingAsc />,
        src: "/youtubers"
    }
]

export const keywordText = [
    {
        title: "KBS 다큐",
        src: "/search/KBS다큐"
    }, {
        title: "EBS 다큐",
        src: "/search/EBS다큐"
    }, {
        title: "KBS 뭉클티비",
        src: "/search/KBS뭉클티비"
    }, {
        title: "내셔널지오그래픽",
        src: "/search/네셔널지오그래픽"
    }, {
        title: "SBS DALI",
        src: "/search/SBSDALI"
    }, {
        title: "KBS 생로병사의 비밀",
        src: "/search/KBS생로병사의비밀"
    }, {
        title: "세계테마기행",
        src: "/search/세계테마기행"
    }, {
        title: "K-DOC",
        src: "/search/K-DOC"
    }, {
        title: "내셔널지오그래픽",
        src: "/search/National Geographic Korea"
    }, {
        title: "디스커버리 픽",
        src: "/search/디스커버리 픽 - Discovery Pic"
    }, {
        title: "tvN D ENT",
        src: "/search/tvN D ENT"
    }
]

export const snsText = [
    {
        title: "github",
        src: "https://github.com/audgns722",
        icon: <ImGithub />
    }, {
        title: "youtube",
        src: "https://youtube.com/@user-ky5tb8xg1b?si=oWG8CUkqX9wd0TeB",
        icon: <IoLogoYoutube />
    }, {
        title: "instagram",
        src: "https://instagram.com/",
        icon: <ImInstagram />
    }, {
        title: "codepen",
        src: "https://codepen.io/",
        icon: <ImCodepen />
    }
]