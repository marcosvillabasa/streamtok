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

const json = {
  title: "Todos nuestros eventos",
  description: "",
  kind: "MANUAL",
  feedid: "SEw1rfH9",
  links: {
    first:
      "https://cdn.jwplayer.com/v2/playlists/SEw1rfH9?internal=false&page_offset=1&page_limit=500",
    last:
      "https://cdn.jwplayer.com/v2/playlists/SEw1rfH9?internal=false&page_offset=1&page_limit=500",
  },
  playlist: [
    {
      title: "Teresa Parodi Y Victor Heredia - Esa Musiquita.",
      mediaid: "tZrBccg0",
      link: "https://cdn.jwplayer.com/previews/tZrBccg0",
      image: "https://cdn.jwplayer.com/v2/media/tZrBccg0/poster.jpg?width=720",
      images: [
        {
          src:
            "https://cdn.jwplayer.com/v2/media/tZrBccg0/poster.jpg?width=320",
          width: 320,
          type: "image/jpeg",
        },
        {
          src:
            "https://cdn.jwplayer.com/v2/media/tZrBccg0/poster.jpg?width=480",
          width: 480,
          type: "image/jpeg",
        },
        {
          src:
            "https://cdn.jwplayer.com/v2/media/tZrBccg0/poster.jpg?width=640",
          width: 640,
          type: "image/jpeg",
        },
        {
          src:
            "https://cdn.jwplayer.com/v2/media/tZrBccg0/poster.jpg?width=720",
          width: 720,
          type: "image/jpeg",
        },
      ],
      feedid: "SEw1rfH9",
      duration: 221,
      pubdate: 1589546939,
      description: "",
      tags: "#cosquin,#victorheredia",
      sources: [
        {
          file: "https://cdn.jwplayer.com/manifests/tZrBccg0.m3u8",
          type: "application/vnd.apple.mpegurl",
        },
        {
          file: "https://cdn.jwplayer.com/videos/tZrBccg0-aFlDqEAF.mp4",
          type: "video/mp4",
          height: 180,
          width: 320,
          label: "180p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/tZrBccg0-kWIypOlb.mp4",
          type: "video/mp4",
          height: 270,
          width: 480,
          label: "270p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/tZrBccg0-jm5uiBhH.mp4",
          type: "video/mp4",
          height: 720,
          width: 1280,
          label: "720p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/tZrBccg0-q8zF0XUy.m4a",
          type: "audio/mp4",
          label: "AAC Audio",
        },
        {
          file: "https://cdn.jwplayer.com/videos/tZrBccg0-jzDYkt9m.mp4",
          type: "video/mp4",
          height: 360,
          width: 640,
          label: "360p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/tZrBccg0-moMlVCPQ.mp4",
          type: "video/mp4",
          height: 540,
          width: 960,
          label: "540p",
        },
      ],
      tracks: [
        {
          file: "https://cdn.jwplayer.com/strips/tZrBccg0-120.vtt",
          kind: "thumbnails",
        },
      ],
      variations: {},
    },
    {
      title: "11- Ya Pasó - Indios",
      mediaid: "n0FLMD3n",
      link: "https://cdn.jwplayer.com/previews/n0FLMD3n",
      image: "https://cdn.jwplayer.com/v2/media/n0FLMD3n/poster.jpg?width=720",
      images: [
        {
          src:
            "https://cdn.jwplayer.com/v2/media/n0FLMD3n/poster.jpg?width=320",
          width: 320,
          type: "image/jpeg",
        },
        {
          src:
            "https://cdn.jwplayer.com/v2/media/n0FLMD3n/poster.jpg?width=480",
          width: 480,
          type: "image/jpeg",
        },
        {
          src:
            "https://cdn.jwplayer.com/v2/media/n0FLMD3n/poster.jpg?width=640",
          width: 640,
          type: "image/jpeg",
        },
        {
          src:
            "https://cdn.jwplayer.com/v2/media/n0FLMD3n/poster.jpg?width=720",
          width: 720,
          type: "image/jpeg",
        },
      ],
      feedid: "SEw1rfH9",
      duration: 190,
      pubdate: 1589546670,
      description:
        "#AcústicosEnCasa #GambaSession Acústico realizado por Tarjeta Naranja y Radio Gamba.",
      tags:
        "#acusticos  #acusticosencasa  #yapaso  #casanaranja  #eventos  #gamba  #gambasessions  #naranja  #rock #Indios",
      sources: [
        {
          file: "https://cdn.jwplayer.com/manifests/n0FLMD3n.m3u8",
          type: "application/vnd.apple.mpegurl",
        },
        {
          file: "https://cdn.jwplayer.com/videos/n0FLMD3n-aFlDqEAF.mp4",
          type: "video/mp4",
          height: 180,
          width: 320,
          label: "180p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/n0FLMD3n-kWIypOlb.mp4",
          type: "video/mp4",
          height: 270,
          width: 480,
          label: "270p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/n0FLMD3n-jm5uiBhH.mp4",
          type: "video/mp4",
          height: 720,
          width: 1280,
          label: "720p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/n0FLMD3n-q8zF0XUy.m4a",
          type: "audio/mp4",
          label: "AAC Audio",
        },
        {
          file: "https://cdn.jwplayer.com/videos/n0FLMD3n-jTrZCaPL.mp4",
          type: "video/mp4",
          height: 1080,
          width: 1920,
          label: "1080p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/n0FLMD3n-jzDYkt9m.mp4",
          type: "video/mp4",
          height: 360,
          width: 640,
          label: "360p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/n0FLMD3n-moMlVCPQ.mp4",
          type: "video/mp4",
          height: 540,
          width: 960,
          label: "540p",
        },
      ],
      tracks: [
        {
          file: "https://cdn.jwplayer.com/strips/n0FLMD3n-120.vtt",
          kind: "thumbnails",
        },
      ],
      variations: {},
    },
    {
      title: "Los Tipitos. Apostar Al Amor.",
      mediaid: "1NC66zYE",
      link: "https://cdn.jwplayer.com/previews/1NC66zYE",
      image: "https://cdn.jwplayer.com/v2/media/1NC66zYE/poster.jpg?width=720",
      images: [
        {
          src:
            "https://cdn.jwplayer.com/v2/media/1NC66zYE/poster.jpg?width=320",
          width: 320,
          type: "image/jpeg",
        },
        {
          src:
            "https://cdn.jwplayer.com/v2/media/1NC66zYE/poster.jpg?width=480",
          width: 480,
          type: "image/jpeg",
        },
        {
          src:
            "https://cdn.jwplayer.com/v2/media/1NC66zYE/poster.jpg?width=640",
          width: 640,
          type: "image/jpeg",
        },
        {
          src:
            "https://cdn.jwplayer.com/v2/media/1NC66zYE/poster.jpg?width=720",
          width: 720,
          type: "image/jpeg",
        },
      ],
      feedid: "SEw1rfH9",
      duration: 261,
      pubdate: 1589546648,
      description: "",
      sources: [
        {
          file: "https://cdn.jwplayer.com/manifests/1NC66zYE.m3u8",
          type: "application/vnd.apple.mpegurl",
        },
        {
          file: "https://cdn.jwplayer.com/videos/1NC66zYE-aFlDqEAF.mp4",
          type: "video/mp4",
          height: 180,
          width: 320,
          label: "180p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/1NC66zYE-kWIypOlb.mp4",
          type: "video/mp4",
          height: 270,
          width: 480,
          label: "270p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/1NC66zYE-jm5uiBhH.mp4",
          type: "video/mp4",
          height: 720,
          width: 1280,
          label: "720p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/1NC66zYE-q8zF0XUy.m4a",
          type: "audio/mp4",
          label: "AAC Audio",
        },
        {
          file: "https://cdn.jwplayer.com/videos/1NC66zYE-jTrZCaPL.mp4",
          type: "video/mp4",
          height: 1080,
          width: 1920,
          label: "1080p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/1NC66zYE-jzDYkt9m.mp4",
          type: "video/mp4",
          height: 360,
          width: 640,
          label: "360p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/1NC66zYE-moMlVCPQ.mp4",
          type: "video/mp4",
          height: 540,
          width: 960,
          label: "540p",
        },
      ],
      tracks: [
        {
          file: "https://cdn.jwplayer.com/strips/1NC66zYE-120.vtt",
          kind: "thumbnails",
        },
      ],
      variations: {},
    },
    {
      title: "Airbag. Cicatrices.",
      mediaid: "gkufCYbV",
      link: "https://cdn.jwplayer.com/previews/gkufCYbV",
      image: "https://cdn.jwplayer.com/v2/media/gkufCYbV/poster.jpg?width=720",
      images: [
        {
          src:
            "https://cdn.jwplayer.com/v2/media/gkufCYbV/poster.jpg?width=320",
          width: 320,
          type: "image/jpeg",
        },
        {
          src:
            "https://cdn.jwplayer.com/v2/media/gkufCYbV/poster.jpg?width=480",
          width: 480,
          type: "image/jpeg",
        },
        {
          src:
            "https://cdn.jwplayer.com/v2/media/gkufCYbV/poster.jpg?width=640",
          width: 640,
          type: "image/jpeg",
        },
        {
          src:
            "https://cdn.jwplayer.com/v2/media/gkufCYbV/poster.jpg?width=720",
          width: 720,
          type: "image/jpeg",
        },
      ],
      feedid: "SEw1rfH9",
      duration: 212,
      pubdate: 1589545622,
      description:
        "#AcústicosEnCasa #GambaSession Acústico realizado por Tarjeta Naranja y Radio Gamba.",
      tags:
        "#acusticos  #acusticosencasa  # bolsa de aire  #casanaranja  #eventos  #gamba  #gambasessions  #naranja  #rock",
      sources: [
        {
          file: "https://cdn.jwplayer.com/manifests/gkufCYbV.m3u8",
          type: "application/vnd.apple.mpegurl",
        },
        {
          file: "https://cdn.jwplayer.com/videos/gkufCYbV-aFlDqEAF.mp4",
          type: "video/mp4",
          height: 180,
          width: 320,
          label: "180p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/gkufCYbV-kWIypOlb.mp4",
          type: "video/mp4",
          height: 270,
          width: 480,
          label: "270p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/gkufCYbV-jm5uiBhH.mp4",
          type: "video/mp4",
          height: 720,
          width: 1280,
          label: "720p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/gkufCYbV-q8zF0XUy.m4a",
          type: "audio/mp4",
          label: "AAC Audio",
        },
        {
          file: "https://cdn.jwplayer.com/videos/gkufCYbV-jTrZCaPL.mp4",
          type: "video/mp4",
          height: 1080,
          width: 1920,
          label: "1080p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/gkufCYbV-jzDYkt9m.mp4",
          type: "video/mp4",
          height: 360,
          width: 640,
          label: "360p",
        },
        {
          file: "https://cdn.jwplayer.com/videos/gkufCYbV-moMlVCPQ.mp4",
          type: "video/mp4",
          height: 540,
          width: 960,
          label: "540p",
        },
      ],
      tracks: [
        {
          file: "https://cdn.jwplayer.com/strips/gkufCYbV-120.vtt",
          kind: "thumbnails",
        },
      ],
      variations: {},
    },
  ],
  feed_instance_id: "a302b56b-6600-4a0b-85ed-b2facd5f161a",
}
