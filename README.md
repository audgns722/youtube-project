

# 나만의 다큐 유튜브 사이트 만들기

유튜브 API를 이용하여 제가 좋아하는 다큐사이트를 만들었습니다.   
당신을 다큐멘터리 세계로 초대합니다.    
평소 다큐멘터리에 대한 끊임없는 탐구와 흥미로운 여정을 공유합니다.    
이곳에서는 다양한 주제와 편견 없는 시각으로 선보이는 다큐멘터리들이 당신을 기다리고 있습니다.    
새로운 시각과 깊이 있는 이야기들이 여러분을 감동시키고 생각하게 만들 것입니다.    
함께 다큐멘터리의 세계를 탐험하며 새로운 통찰력을 얻어보세요.    
늘 업데이트되는 다양한 주제의 다큐멘터리 콘텐츠로 여러분을 찾아뵙겠습니다.   
큐멘터리의 매력과 깊이 있는 내용을 공유하며, 함께 성장해 나가는 공간이 되길 바랍니다.

## 제작기간

2023-11-13 시작

## 완성작 보기

미리보기 : 

## 사용 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## 라이브러리 설치

- `npm install react-router-dom axios react-icons react-player sass react-helmet-async swiper`
- react-router-dom, axios, react-icons, react-player, sass, react-helmet-async ,swiper
- react-helmet-async : React 애플리케이션에서 HTML의 head 섹션을 동적으로 관리할 수 있게 해주는 라이브러리입니다.
- swiper : 모바일 앱 및 웹 앱에서 터치 슬라이드를 구현하는 데 사용되는 JavaScript 라이브러리입니다.


## 제작순서

- Home, Today, Youtubers페이지 작업[data.js 작업], playicon, channel페이지

- [Swiper](https://swiperjs.com/) 설정 : Navigation, Autoplay 적용

- ```react
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { Navigation, Autoplay } from 'swiper/modules';`   
  <Swiper><SwiperSlide></SwiperSlide></Swiper>
  ```
- .env 파일 생성 : 유튜브 API키 등록 `REACT_APP_YOUTUBE_API_KEY=.....`(.gitignore에도 추가)
- fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=뉴진스&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)APIkey 
- useParams :  React Router의 훅 중 하나로, 동적인 라우팅을 사용할 때 URL에서 전달된 매개변수를 추출하는 데 사용
- Postman : API 개발 및 테스트를 위한 협업 도구로, 웹 API를 테스트하고 디버깅하는 데 사용
- useEffect : React에서 부수 효과를 다루는 Hook으로, 주로 데이터 페칭과 같은 비동기 작업에 사용
- fetch : 
- useState : React에서 상태를 다루는 Hook으로, 함수 컴포넌트 내에서 로컬 상태를 사용. 초기 상태를 인자로 받아 해당 상태를 반환
- api.js 파일 생성
- 컴포넌트 프롭스 videosearch 세분화
- 더보기 기능 추가 (nextPageToken) 값을 가져옴

     
  

## 트러블 슈팅

<details>
<summary>Whitespace 에러</summary>


## 에러() :

</details>