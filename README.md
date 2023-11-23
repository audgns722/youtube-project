

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
<div align=center>
<img width=80% src="https://audgns722.github.io/youtube-project/src/assets/img/react-youtubetumb.jpg">
<img width=19% src="https://audgns722.github.io/youtube-project/src/assets/img/cover.png">   
</div>

## 사용 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## 라이브러리 설치

- `npm install react-router-dom axios react-icons react-player sass react-helmet-async swiper`
- react-router-dom, axios, react-icons, react-player, sass, react-helmet-async ,swiper
- react-helmet-async : React 애플리케이션에서 HTML의 head 섹션을 동적으로 관리할 수 있게 해주는 라이브러리
- swiper : 모바일 앱 및 웹 앱에서 터치 슬라이드를 구현하는 데 사용되는 JavaScript 라이브러리


## 제작순서

- Home, Today, Youtubers페이지 작업[data.js 작업], playicon, channel페이지 ,컴포넌트 프롭스 videosearch 세분화 ,Swiper , api.js 파일 생성, 더보기 기능 추가 (nextPageToken) 값을 가져옴
- 영상 api 불러옴, channel페이지 트라이 사용 async await, 프롭스, 핼멧, 채널페이지 더보기 , search페이지(검색기능추가), home 추천영상 추가, 로딩소스 추가
- [Swiper](https://swiperjs.com/) 설정 : Navigation, Autoplay 적용
- .env: 프로젝트의 최상위 루트에 위치하며, 민감한 정보 및 환경 변수를 저장해 보안을 강화하고 유지보수를 용이
- useParams :  React Router의 훅 중 하나로, 동적인 라우팅을 사용할 때 URL에서 전달된 매개변수를 추출하는 데 사용
- Postman : API 개발 및 테스트를 위한 협업 도구로, 웹 API를 테스트하고 디버깅하는 데 사용
- useEffect : React에서 부수 효과를 다루는 Hook으로, 주로 데이터 페칭과 같은 비동기 작업에 사용   
  - fetch : useEffect와 fetch 함수를 조합하여 React 컴포넌트에서 API 호출 및 비동기 작업을 수행. 이는 컴포넌트가 렌더링된 후에 데이터를 가져오거나 업데이트하는 데 사용. 주로 async/await 구문을 사용
- useState : React에서 상태를 다루는 Hook으로, 함수 컴포넌트 내에서 로컬 상태를 사용. 초기 상태를 인자로 받아 해당 상태를 반환
- try, catch : JavaScript에서 예외(에러)를 처리하는 메커니즘. 이 구문은 예외가 발생할 수 있는 코드를 시도하고, 예외가 발생하면 캐치하여 특별한 처리를 가능
- async, await : 
- Suspense : Suspense 컴포넌트는 비동기적으로 로드된 컴포넌트를 기다리는 동안 로딩 상태를 처리하는 데 사용
- lazy : 동적으로 컴포넌트를 로딩하기 위해 사용.코드 분할(Code Splitting)을 통해 번들을 나누고, 필요한 경우에만 컴포넌트를 로드
- react-helmet-async
  - HelmetProvider : 메인페이지 적용 - scrollto.js 적용
  - SEO (Search Engine Optimization) 개선: react-helmet-async를 사용하여 페이지의 title 및 meta 태그를 설정함으로써 검색 엔진 최적화를 개선할 수 있습니다. 
  - 유지보수의 용이성 : 모든 페이지에서 일관된 변경이 적용되므로 유지보수가 용이
  - 재사용성 : Main 컴포넌트를 따로 분리함으로써, 동일한 레이아웃 구조를 여러 페이지에서 재사용
  - 코드 구조의 개선 : 각 페이지에서 공통으로 사용되는 레이아웃을 별도의 컴포넌트로 분리하면 코드가 더 간결해짐
  - 프로젝트 구조의 일관성 : 재사용 가능한 작은 부분으로 나누면 프로젝트 구조가 일관성 있게 유지
  - 효율적인 개발 : 개발 및 디버깅이 더 효율적
- try-catch-finally : 예외가 발생하든 안하든 항상 실행
- useNavigate : saerch페이지 검색기능 추가(엔터키를 눌렀을때에)
  - 불필요한 데이터 요청을 방지하고 사용자에게 빠른 피드백을 제공
  - 페이지 URL 업데이트, 히스토리 관리, 간단한 구현 등
     
  

## 트러블 슈팅

<details>
<summary>API호출 404 에러</summary>

- #### 404에러(해결) : api.js를 통해 호출시 base_url 끝 경로에 /가 붙어 api url를 호출하지 못함

</details>

TypeError: Cannot read property 'map' of undefined 에러 
`const [channelVideo, setChannelVideo] = useState([]);` 값을 빈배열로 지정하지 않아 생김 해결

