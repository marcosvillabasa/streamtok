import React from "react"
import ReactJWPlayer from "react-jw-player"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const Playlist = ({ playlist }) => (
  <>
    <p>{playlist.title}</p>
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      draggable={false}
      focusOnSelect={false}
      // infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
      }}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {playlist.map((track) => (
        <>
          <img
            src={track.images[0].src}
            style={{
              display: "block",
              width: "520px",
              height: "300px",
            }}
          />
          <div>{track.title}</div>
          {track.description ? <div>{track.description}</div> : null}
        </>
      ))}
    </Carousel>
  </>
)

export default function TabCanales(props) {
  console.log(json)
  return (
    <div>
      <ReactJWPlayer
        playerId="LUykEJtT"
        playerScript="https://cdn.jwplayer.com/libraries/LUykEJtT.js"
        playlist="https://cdn.jwplayer.com/v2/playlists/SEw1rfH9"
      />
      <Playlist playlist={json.playlist} />
    </div>
  )
}

const json = 
{
  "title": "Todos nuestros eventos",
  "description": "",
  "kind": "MANUAL",
  "feedid": "SEw1rfH9",
  "links": {
  "first": "https://cdn.jwplayer.com/v2/playlists/SEw1rfH9?internal=false&page_offset=1&page_limit=500",
  "last": "https://cdn.jwplayer.com/v2/playlists/SEw1rfH9?internal=false&page_offset=1&page_limit=500"
  },
  "playlist": [
  {
  "title": "Sebastián Garay - Celador De Sueños.",
  "mediaid": "8ebtjFBi",
  "link": "https://cdn.jwplayer.com/previews/8ebtjFBi",
  "image": "https://cdn.jwplayer.com/v2/media/8ebtjFBi/poster.jpg?width=720",
  "images": [
  {
  "src": "https://cdn.jwplayer.com/v2/media/8ebtjFBi/poster.jpg?width=320",
  "width": 320,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/8ebtjFBi/poster.jpg?width=480",
  "width": 480,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/8ebtjFBi/poster.jpg?width=640",
  "width": 640,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/8ebtjFBi/poster.jpg?width=720",
  "width": 720,
  "type": "image/jpeg"
  }
  ],
  "feedid": "SEw1rfH9",
  "duration": 183,
  "pubdate": 1589921791,
  "description": "",
  "sources": [
  {
  "file": "https://cdn.jwplayer.com/manifests/8ebtjFBi.m3u8",
  "type": "application/vnd.apple.mpegurl"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/8ebtjFBi-aFlDqEAF.mp4",
  "type": "video/mp4",
  "height": 180,
  "width": 320,
  "label": "180p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/8ebtjFBi-kWIypOlb.mp4",
  "type": "video/mp4",
  "height": 270,
  "width": 480,
  "label": "270p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/8ebtjFBi-jm5uiBhH.mp4",
  "type": "video/mp4",
  "height": 720,
  "width": 1280,
  "label": "720p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/8ebtjFBi-q8zF0XUy.m4a",
  "type": "audio/mp4",
  "label": "AAC Audio"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/8ebtjFBi-jzDYkt9m.mp4",
  "type": "video/mp4",
  "height": 360,
  "width": 640,
  "label": "360p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/8ebtjFBi-moMlVCPQ.mp4",
  "type": "video/mp4",
  "height": 540,
  "width": 960,
  "label": "540p"
  }
  ],
  "tracks": [
  {
  "file": "https://cdn.jwplayer.com/strips/8ebtjFBi-120.vtt",
  "kind": "thumbnails"
  }
  ],
  "variations": {}
  },
  {
  "title": "Dario Lazarte - Derroche",
  "mediaid": "6qufpcFB",
  "link": "https://cdn.jwplayer.com/previews/6qufpcFB",
  "image": "https://cdn.jwplayer.com/v2/media/6qufpcFB/poster.jpg?width=720",
  "images": [
  {
  "src": "https://cdn.jwplayer.com/v2/media/6qufpcFB/poster.jpg?width=320",
  "width": 320,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/6qufpcFB/poster.jpg?width=480",
  "width": 480,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/6qufpcFB/poster.jpg?width=640",
  "width": 640,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/6qufpcFB/poster.jpg?width=720",
  "width": 720,
  "type": "image/jpeg"
  }
  ],
  "feedid": "SEw1rfH9",
  "duration": 206,
  "pubdate": 1589920879,
  "description": "Avicultura 2020",
  "tags": "#avicultura,#folklore,#romanticos,#avicultura2020,#dariolazarte,#derroche",
  "sources": [
  {
  "file": "https://cdn.jwplayer.com/manifests/6qufpcFB.m3u8",
  "type": "application/vnd.apple.mpegurl"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/6qufpcFB-aFlDqEAF.mp4",
  "type": "video/mp4",
  "height": 180,
  "width": 320,
  "label": "180p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/6qufpcFB-kWIypOlb.mp4",
  "type": "video/mp4",
  "height": 270,
  "width": 480,
  "label": "270p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/6qufpcFB-jm5uiBhH.mp4",
  "type": "video/mp4",
  "height": 720,
  "width": 1280,
  "label": "720p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/6qufpcFB-q8zF0XUy.m4a",
  "type": "audio/mp4",
  "label": "AAC Audio"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/6qufpcFB-jzDYkt9m.mp4",
  "type": "video/mp4",
  "height": 360,
  "width": 640,
  "label": "360p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/6qufpcFB-moMlVCPQ.mp4",
  "type": "video/mp4",
  "height": 540,
  "width": 960,
  "label": "540p"
  }
  ],
  "tracks": [
  {
  "file": "https://cdn.jwplayer.com/strips/6qufpcFB-120.vtt",
  "kind": "thumbnails"
  }
  ],
  "variations": {}
  },
  {
  "title": "Dario Lazarte - Y Cómo Es Él",
  "mediaid": "fPZWEKxD",
  "link": "https://cdn.jwplayer.com/previews/fPZWEKxD",
  "image": "https://cdn.jwplayer.com/v2/media/fPZWEKxD/poster.jpg?width=720",
  "images": [
  {
  "src": "https://cdn.jwplayer.com/v2/media/fPZWEKxD/poster.jpg?width=320",
  "width": 320,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/fPZWEKxD/poster.jpg?width=480",
  "width": 480,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/fPZWEKxD/poster.jpg?width=640",
  "width": 640,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/fPZWEKxD/poster.jpg?width=720",
  "width": 720,
  "type": "image/jpeg"
  }
  ],
  "feedid": "SEw1rfH9",
  "duration": 198,
  "pubdate": 1589920869,
  "description": "Avicultura 2020",
  "tags": "#avicultura,#folklore,#romanticos,#avicultura2020,#ycomoesel,#dariolazarte",
  "sources": [
  {
  "file": "https://cdn.jwplayer.com/manifests/fPZWEKxD.m3u8",
  "type": "application/vnd.apple.mpegurl"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/fPZWEKxD-aFlDqEAF.mp4",
  "type": "video/mp4",
  "height": 180,
  "width": 320,
  "label": "180p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/fPZWEKxD-kWIypOlb.mp4",
  "type": "video/mp4",
  "height": 270,
  "width": 480,
  "label": "270p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/fPZWEKxD-jm5uiBhH.mp4",
  "type": "video/mp4",
  "height": 720,
  "width": 1280,
  "label": "720p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/fPZWEKxD-q8zF0XUy.m4a",
  "type": "audio/mp4",
  "label": "AAC Audio"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/fPZWEKxD-jzDYkt9m.mp4",
  "type": "video/mp4",
  "height": 360,
  "width": 640,
  "label": "360p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/fPZWEKxD-moMlVCPQ.mp4",
  "type": "video/mp4",
  "height": 540,
  "width": 960,
  "label": "540p"
  }
  ],
  "tracks": [
  {
  "file": "https://cdn.jwplayer.com/strips/fPZWEKxD-120.vtt",
  "kind": "thumbnails"
  }
  ],
  "variations": {}
  },
  {
  "title": "Abel Pintos - Tiempo",
  "mediaid": "pwDvbd0Q",
  "link": "https://cdn.jwplayer.com/previews/pwDvbd0Q",
  "image": "https://cdn.jwplayer.com/v2/media/pwDvbd0Q/poster.jpg?width=720",
  "images": [
  {
  "src": "https://cdn.jwplayer.com/v2/media/pwDvbd0Q/poster.jpg?width=320",
  "width": 320,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/pwDvbd0Q/poster.jpg?width=480",
  "width": 480,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/pwDvbd0Q/poster.jpg?width=640",
  "width": 640,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/pwDvbd0Q/poster.jpg?width=720",
  "width": 720,
  "type": "image/jpeg"
  }
  ],
  "feedid": "SEw1rfH9",
  "duration": 233,
  "pubdate": 1589920003,
  "description": "Avicultura 2020",
  "tags": "#avicultura,#abel,#abelpintos,#folklore,#romanticos,#avicultura2020,#Tiempo",
  "sources": [
  {
  "file": "https://cdn.jwplayer.com/manifests/pwDvbd0Q.m3u8",
  "type": "application/vnd.apple.mpegurl"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/pwDvbd0Q-aFlDqEAF.mp4",
  "type": "video/mp4",
  "height": 180,
  "width": 320,
  "label": "180p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/pwDvbd0Q-kWIypOlb.mp4",
  "type": "video/mp4",
  "height": 270,
  "width": 480,
  "label": "270p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/pwDvbd0Q-jm5uiBhH.mp4",
  "type": "video/mp4",
  "height": 720,
  "width": 1280,
  "label": "720p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/pwDvbd0Q-q8zF0XUy.m4a",
  "type": "audio/mp4",
  "label": "AAC Audio"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/pwDvbd0Q-jzDYkt9m.mp4",
  "type": "video/mp4",
  "height": 360,
  "width": 640,
  "label": "360p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/pwDvbd0Q-moMlVCPQ.mp4",
  "type": "video/mp4",
  "height": 540,
  "width": 960,
  "label": "540p"
  }
  ],
  "tracks": [
  {
  "file": "https://cdn.jwplayer.com/strips/pwDvbd0Q-120.vtt",
  "kind": "thumbnails"
  }
  ],
  "variations": {}
  },
  {
  "title": "Abel Pintos - Tanto Amor",
  "mediaid": "o4jtochm",
  "link": "https://cdn.jwplayer.com/previews/o4jtochm",
  "image": "https://cdn.jwplayer.com/v2/media/o4jtochm/poster.jpg?width=720",
  "images": [
  {
  "src": "https://cdn.jwplayer.com/v2/media/o4jtochm/poster.jpg?width=320",
  "width": 320,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/o4jtochm/poster.jpg?width=480",
  "width": 480,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/o4jtochm/poster.jpg?width=640",
  "width": 640,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/o4jtochm/poster.jpg?width=720",
  "width": 720,
  "type": "image/jpeg"
  }
  ],
  "feedid": "SEw1rfH9",
  "duration": 254,
  "pubdate": 1589919989,
  "description": "Avicultura 2020",
  "tags": "#avicultura,#abel,#abelpintos,#folklore,#romanticos,#tantoamor,#añoranza,·romanticos",
  "sources": [
  {
  "file": "https://cdn.jwplayer.com/manifests/o4jtochm.m3u8",
  "type": "application/vnd.apple.mpegurl"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/o4jtochm-aFlDqEAF.mp4",
  "type": "video/mp4",
  "height": 180,
  "width": 320,
  "label": "180p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/o4jtochm-kWIypOlb.mp4",
  "type": "video/mp4",
  "height": 270,
  "width": 480,
  "label": "270p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/o4jtochm-jm5uiBhH.mp4",
  "type": "video/mp4",
  "height": 720,
  "width": 1280,
  "label": "720p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/o4jtochm-q8zF0XUy.m4a",
  "type": "audio/mp4",
  "label": "AAC Audio"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/o4jtochm-jzDYkt9m.mp4",
  "type": "video/mp4",
  "height": 360,
  "width": 640,
  "label": "360p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/o4jtochm-moMlVCPQ.mp4",
  "type": "video/mp4",
  "height": 540,
  "width": 960,
  "label": "540p"
  }
  ],
  "tracks": [
  {
  "file": "https://cdn.jwplayer.com/strips/o4jtochm-120.vtt",
  "kind": "thumbnails"
  }
  ],
  "variations": {}
  },
  {
  "title": "Abel Pintos - 3",
  "mediaid": "vEq8m725",
  "link": "https://cdn.jwplayer.com/previews/vEq8m725",
  "image": "https://cdn.jwplayer.com/v2/media/vEq8m725/poster.jpg?width=720",
  "images": [
  {
  "src": "https://cdn.jwplayer.com/v2/media/vEq8m725/poster.jpg?width=320",
  "width": 320,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/vEq8m725/poster.jpg?width=480",
  "width": 480,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/vEq8m725/poster.jpg?width=640",
  "width": 640,
  "type": "image/jpeg"
  },
  {
  "src": "https://cdn.jwplayer.com/v2/media/vEq8m725/poster.jpg?width=720",
  "width": 720,
  "type": "image/jpeg"
  }
  ],
  "feedid": "SEw1rfH9",
  "duration": 244,
  "pubdate": 1589919996,
  "description": "Avicultura 2020",
  "tags": "#avicultura,#abel,#abelpintos,#folklore,#romanticos,#avicultura2020,#3",
  "sources": [
  {
  "file": "https://cdn.jwplayer.com/manifests/vEq8m725.m3u8",
  "type": "application/vnd.apple.mpegurl"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/vEq8m725-aFlDqEAF.mp4",
  "type": "video/mp4",
  "height": 180,
  "width": 320,
  "label": "180p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/vEq8m725-kWIypOlb.mp4",
  "type": "video/mp4",
  "height": 270,
  "width": 480,
  "label": "270p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/vEq8m725-jm5uiBhH.mp4",
  "type": "video/mp4",
  "height": 720,
  "width": 1280,
  "label": "720p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/vEq8m725-q8zF0XUy.m4a",
  "type": "audio/mp4",
  "label": "AAC Audio"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/vEq8m725-jzDYkt9m.mp4",
  "type": "video/mp4",
  "height": 360,
  "width": 640,
  "label": "360p"
  },
  {
  "file": "https://cdn.jwplayer.com/videos/vEq8m725-moMlVCPQ.mp4",
  "type": "video/mp4",
  "height": 540,
  "width": 960,
  "label": "540p"
  }
  ],
  "tracks": [
  {
  "file": "https://cdn.jwplayer.com/strips/vEq8m725-120.vtt",
  "kind": "thumbnails"
  }
  ],
  "variations": {}
  }
  ],
  "feed_instance_id": "cb55da60-f8a1-4c88-b27d-25a912caa20d"
  }