# 나만의 다큐 유튜브 사이트 만들기

'나만의 다큐 유튜브 사이트 만들기'는 유튜브 API를 활용하여 제작한 다큐멘터리 전용 웹사이트입니다.<br>
이 사이트는 다큐멘터리르 좋아하는 제가 다양한 주제와 장르를 가진 다큐멘터리를 모아봤습니다.<br>
새로운 시각과 깊이 있는 이야기들을 경험할 수 있는 다큐멘터리의 세계에 당신을 초대합니다.

[바로가기](youtube-project2023-huns.netlify.app/)
## 제작기간

2023-11-13 시작
~ 2023-11-28 완료

## 완성작 보기

미리보기 :

<div align=center>
<img width=80% src="https://audgns722.github.io/youtube-react2023/src/assets/img/react-youtubetumb.jpg">
<img width=19% src="https://audgns722.github.io/youtube-react2023/src/assets/img/cover.png">   
</div>

## 프로젝트 구성

<details>
<summary>filetree</summary>

```
📦youtube-project
┣ 📂public
┃ ┣ 📜favicon.svg
┃ ┗ 📜index.html
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┣ 📂fonts
┃ ┃ ┣ 📂img
┃ ┃ ┃ ┣ 📂icon
┃ ┃ ┗ 📂scss
┃ ┃ ┃ ┣ 📂section
┃ ┃ ┃ ┃ ┣ 📜_channel.scss
┃ ┃ ┃ ┃ ┣ 📜_header.scss
┃ ┃ ┃ ┃ ┣ 📜_layout.scss
┃ ┃ ┃ ┃ ┣ 📜_search.scss
┃ ┃ ┃ ┃ ┣ 📜_swiper.scss
┃ ┃ ┃ ┃ ┣ 📜_today.scss
┃ ┃ ┃ ┃ ┣ 📜_video.scss
┃ ┃ ┃ ┃ ┗ 📜_youtubers.scss
┃ ┃ ┃ ┣ 📂setting
┃ ┃ ┃ ┃ ┣ 📜_common.scss
┃ ┃ ┃ ┃ ┣ 📜_fonts.scss
┃ ┃ ┃ ┃ ┣ 📜_mixin.scss
┃ ┃ ┃ ┃ ┣ 📜_reset.scss
┃ ┃ ┃ ┃ ┗ 📜_var.scss
┃ ┃ ┃ ┗ 📜style.scss
┃ ┣ 📂components
┃ ┃ ┣ 📂contents
┃ ┃ ┃ ┣ 📜Today.jsx
┃ ┃ ┃ ┗ 📜Youtubers.jsx
┃ ┃ ┣ 📂header
┃ ┃ ┃ ┣ 📜Logo.jsx
┃ ┃ ┃ ┣ 📜Menu.jsx
┃ ┃ ┃ ┗ 📜Sns.jsx
┃ ┃ ┣ 📂section
┃ ┃ ┃ ┣ 📜Footer.jsx
┃ ┃ ┃ ┣ 📜Header.jsx
┃ ┃ ┃ ┣ 📜Main.jsx
┃ ┃ ┃ ┗ 📜Search.jsx
┃ ┃ ┗ 📂video
┃ ┃ ┃ ┣ 📜VideoSearch.jsx
┃ ┃ ┃ ┗ 📜VideoSlider.jsx
┃ ┣ 📂data
┃ ┃ ┣ 📜header.js
┃ ┃ ┣ 📜today.js
┃ ┃ ┗ 📜youtubers.js
┃ ┣ 📂pages
┃ ┃ ┣ 📜Channel.jsx
┃ ┃ ┣ 📜Home.jsx
┃ ┃ ┣ 📜Search.jsx
┃ ┃ ┣ 📜Today.jsx
┃ ┃ ┣ 📜Video.jsx
┃ ┃ ┗ 📜Youtubers.jsx
┃ ┣ 📂utils
┃ ┃ ┣ 📜api.js
┃ ┃ ┗ 📜scrollto.js
┃ ┣ 📜App.js
┃ ┗ 📜index.js
┣ 📜.env
┣ 📜.gitignore
┣ 📜package-lock.json
┣ 📜package.json
┗ 📜README.md
```

</details>

## 사용 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## 라이브러리 설치

```
npm install react-router-dom
npm install axios react-icons
npm install react-player
npm install sass
npm install react-helmet-async
npm install swiper
```

- react-helmet-async : React 애플리케이션에서 HTML의 head 섹션을 동적으로 관리할 수 있게 해주는 라이브러리
- swiper : 모바일 앱 및 웹 앱에서 터치 슬라이드를 구현하는 데 사용되는 JavaScript 라이브러리

## 제작순서

1. 페이지 구성: 'Home', 'Today', 'Youtubers' 페이지를 세분화하여 기본적인 웹사이트 구조를 구축했습니다.
2. data.js 작업 및 컴포넌트 세분화: 데이터 관리를 위한 data.js 파일을 작성하고, 컴포넌트 프롭스를 세분화하여 보다 효율적인 데이터 관리와 구조적인 프론트엔드 개발을 진행했습니다.
3. Swiper 및 API 통합: Swiper 라이브러리를 통해 동적인 UI를 구현하고, api.js 파일을 생성하여 YouTube API와의 연동을 구현했습니다. 또한, '더보기' 기능을 추가하여 사용자 경험을 개선했습니다.
4. 채널 페이지 및 영상 API 호출: 채널 페이지를 구성하고, 영상 API를 호출하여 다양한 콘텐츠를 제공했습니다.
5. 검색 기능 및 UI 개선: 검색 기능을 추가하고, 홈페이지에 추천 영상을 통합하여 사용자가 콘텐츠를 쉽게 찾고 탐색할 수 있도록 UI를 개선했습니다.

### 기술적 세부사항 요약

- React Hooks (useParams, useEffect, useState): 페이지간 동적 라우팅, 데이터 페칭, 로컬 상태 관리 등에 사용됩니다.
- Postman: API 개발 및 테스트에 사용되며, 웹 API의 테스트와 디버깅에 활용됩니다.
- Swiper: 슬라이더 및 네비게이션 기능을 구현하는 데 사용되며, 자동 재생 같은 기능을 통해 사용자 편의성을 향상시킵니다.
- .env 파일: 프로젝트의 보안과 유지보수를 위해 민감한 정보 및 환경 변수를 저장합니다.
- react-helmet-async: SEO 최적화 및 동적인 head 태그 관리를 위해 사용됩니다.
- React의 Suspense와 lazy: 비동기적으로 로드된 컴포넌트의 로딩 상태를 관리하고, 필요할 때에만 컴포넌트를 로드하는 코드 분할을 위해 사용됩니다.
- useNavigate: 페이지 URL 업데이트 및 히스토리 관리를 위해 사용되며, 사용자에게 빠른 피드백을 제공합니다.
- try, catch: JavaScript의 예외 처리 방식. 코드 실행 중 발생할 수 있는 오류를 안전하게 처리합니다.
- async, await: JavaScript에서 비동기 작업을 쉽게 처리할 수 있게 해주는 구문. 코드의 가독성을 높여 줍니다.
- useParams: React Router의 기능. 동적인 라우팅에서 URL의 매개변수를 추출하는 데 사용됩니다.

## 코드 미리보기

<details>
<summary>😆 비동기 데이터 처리 (useEffect 사용)</summary>

```javascript
useEffect(() => {
  fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then((data) => {
    setVideoDetail(data.items[0]);
  });
  fetchFromAPI(`commentThreads?videoId=${videoId}&part=snippet`).then(
    (data) => {
      const comments = data.items.slice(0, 10);
      setVideoComments(comments);
    }
  );
}, [videoId]);
```
</details>

<details>
<summary>😆 조건부 UI 렌더링</summary>

```javascript
const searchPageClass = loading ? "isLoading" : "isLoaded";
```
loading 상태 변수를 사용하여 페이지의 로딩 상태에 따라 클래스 이름을 동적으로 변경합니다. loading이 true인 경우, searchPageClass는 "isLoading" 값을 가지며, false인 경우 "isLoaded" 값을 가집니다. 
</details>

<details>
<summary>😆 더 보기 기능 구현</summary>

```javascript
const handleLoadMore = () => {
  if (nextPageToken) {
    setLoading(true);
    fetchVideos(searchId, nextPageToken);
  }
};
```
handleLoadMore 함수는 사용자가 더 많은 컨텐츠를 요청할 때 호출됩니다. 이 함수는 nextPageToken이 존재할 경우, 즉 더 로드할 데이터가 있을 때, 추가 데이터를 불러오는 로직을 수행합니다. setLoading(true)는 데이터 로딩 과정이 시작됨을 나타냅니다. 
</details>

<details>
<summary>😆 조건부 클래스 (layout) 사용</summary>

```javascript
const VideoSearch = ({ videos, layout = '' }) => {
    // ...
}

{videos.map((video, key) => (
    <div className={`video ${layout}`} key={key}>    
    </div>
))}
```
layout prop의 값에 따라 각 비디오 요소에 다른 클래스가 추가됩니다. 예를 들어, layout이 'grid'로 설정되면, 클래스 이름은 'video grid'가 됩니다. 이를 통해 동일한 VideoSearch 컴포넌트를 다른 스타일로 재사용할 수 있습니다.
</details>

<details>
<summary>😆 Swiper 라이브러리 사용</summary>

```javascript
<Swiper
    slidesPerView={1}
    spaceBetween={20}
    navigation={true}
    modules={[Navigation]}
    className={`mySwiper-${name}`}
    breakpoints={{
        // 반응형 설정: 뷰포트 크기에 따른 슬라이드 개수 및 간격 설정
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
        1600: { slidesPerView: 5, spaceBetween: 20 }
    }}
>
    {/* 비디오 슬라이드 아이템들 */}
</Swiper>
```
</details>

<details>
<summary>😆 비디오 슬라이드 렌더링</summary>

```javascript
{videos.map((video, key) => (
    <SwiperSlide key={key}>
        <div className="video">
            <div className="video__thumb play__icon">
                <Link to={`/video/${video.id.videoId}`} style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}></Link>
            </div>
            <div className="video__info">
                <h3 className='title'><Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link></h3>
                <div className='info'>
                    <Link to={`/channel/${video.snippet.channelId}`} className='author'>{video.snippet.channelTitle}</Link>
                </div>
            </div>
        </div>
    </SwiperSlide>
))}
```
videos 배열을 순회하며 각 비디오에 대한 슬라이드를 생성합니다.
</details>

## 트러블 슈팅

<details>
<summary>API 호출시 404 에러</summary>

```javascript
// 문제코드
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

// 개선코드
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
```
문제의 원인은 base_url 끝 경로에 '/'가 추가되어 API URL 호출이 실패한 것이었습니다.
</details>

<br />
<details>

<summary>TypeError: Cannot read property 'map' of undefined</summary>
<br />
문제원인 : useState를 사용하여 channelVideo 상태를 초기화할 때 초기값을 설정하지 않아서 발생했습니다.

```javascript
// 문제코드
const [channelVideo, setChannelVideo] = useState();
// 개선코드
const [channelVideo, setChannelVideo] = useState([]);
```
<p>channelVideo는 초기에 빈 배열로 설정되며, 이후에도 배열로 유지됩니다. 따라서 channelVideo에 대해 map 같은 배열 메소드를 사용할 때, undefined 값으로 인한 에러가 발생하지 않게 됩니다.</p>
</details>
