import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome, faInfoCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import KofiButton from 'kofi-button'

interface StringObject {
  text: string
  color?: string
  font?: string
  hidden?: boolean
}

interface UrlObject {
  link: string
  color?: string
}

interface IconObject {
  name: IconDefinition
  color?: string
}

interface ImageObject {
  url: string
  alt: string
}

interface LinkListItem {
  url: UrlObject
  icon: IconObject
  title: StringObject
  id: string
  videoUrl?: string
  type?: string
  backgroundType?: BackgroundType
  backgroundContent?: string
}

interface SocialIconListItem {
  url: UrlObject
  icon: IconObject
  alt: string
}

enum BackgroundType {
  image,
  color,
  gradient
}

enum CardBackgroundOrigin {
  item,
  studio
}

interface Studio { 
  header: {
    title: StringObject
    subtitle: StringObject
    image?: ImageObject
  }
  card?: {
    backgroundType?: BackgroundType
    backgroundContent?: string
    buttonBorderRadius?: number
    linkColor?: string
  }
  style?: {
    backgroundType: BackgroundType
    backgroundContent: string
    favicon?: UrlObject
  },
  verified?: {
    icon?: IconDefinition
    color: string
  },
  linkList: LinkListItem[]
  socialIconList: SocialIconListItem[]
}

const industriaDeJogos: Studio = {
  header: {
    title: {
      text: 'Indústria de Jogos',
      hidden: true
    },
    subtitle: {
      text: 'Desenvolvimento de jogos para a internet'
    },
    image: {
      url: 'https://escolabrasileiradegames.com.br/wp2016/wp-content/uploads/2017/05/escola-brasileira-de-games-industria-de-jogos.png',
      alt: 'Indústria de Jogos'
    }
  },
  style: {
    backgroundType: BackgroundType.gradient,
    backgroundContent: 'radial-gradient(circle, rgba(220,220,220,1) 0%, rgba(200,200,200,1) 35%, rgba(180,180,180,1) 100%)',
  },
  card:{
    backgroundContent: '#FFAAFF',
    buttonBorderRadius: 10
  },
  verified: {
    color: 'green'
  },
  linkList: [
    {url: { link: "https://www.industriadejogos.com.br/" }, backgroundType: BackgroundType.color, backgroundContent: '#667788', icon: { name: faHome }, title: { text: "Home" }, id: 'home'},
    {url: { link: '#' }, icon: { name: faInfoCircle }, title: { text: "Info", color: '#00FF00' }, id: 'info'},
    {url: { link: "#" }, icon: { name: faPlayCircle, color: '#FF00FF' }, title: { text: "YouTube Video", color: '#FF0000' }, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', type: 'video', id: 'play'},
  ],
  socialIconList: [
    {url: { link: "https://www.instagram.com/industriadejogos/" }, icon: { name: faInstagram, color: '#E1306C' }, alt: "Instagram"},
    {url: { link: "https://twitter.com/industriadejogos" }, icon: { name: faTwitter, color: '#1DA1F2' }, alt: "Twitter"},
  ]
} 

const App: React.FC = () => {  
  return (
    <div className="content-box" style={ FormatBackground(industriaDeJogos.style?.backgroundType, industriaDeJogos.style?.backgroundContent) }>
      <div className="header">
        <img className="logo" src={industriaDeJogos.header.image?.url} alt={industriaDeJogos.header.image?.alt} />
        {!industriaDeJogos.header.title.hidden ? <h1>{industriaDeJogos.header.title.text}</h1> : undefined}
        <h4>{industriaDeJogos.header.subtitle.text}</h4>
      </div>

      <ul className="link-list">
        {industriaDeJogos.linkList.map((item) => (
          <li key={item.id} className="link-list-item" style={ FormatBackground(item.backgroundType, item.backgroundContent) } > { /* Verificar background por parceiro */ }
              <a href={item.url.link} className="link" onClick={item.type ? (e) => HandleClick(e, item) : undefined} type={item.type} style={{ color: item.title.color }}>
                <FontAwesomeIcon icon={item.icon.name} color={item.icon.color} /> &nbsp; {item.title.text}
              </a>
              {item.videoUrl && 
                <div id={"video-preview" + item.id} className="video-preview">
                  <iframe id="youtube-video" width="100%" height="315" src="" frameBorder="0" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture" title='Youtube Video' allowFullScreen></iframe>
                </div>
              }
          </li>
        ))}
      </ul>

      <div className="social-icons">
        {industriaDeJogos.socialIconList.map((social, index) => (
          <a key={index} href={social.url.link}>
            <FontAwesomeIcon icon={social.icon.name} color={social.icon.color} />
          </a>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <KofiButton color="#0a9396" title="Indústria de Jogos" kofiID="N4N31JDNX" />
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <small>Feito no 🇧🇷 - <a href="https://twitter.com/gameindiebrasil">@GameIndieBrasil</a></small>
        </div>
      </div>
    </div>
  )
}

function FormatBackground (backgroundType?: BackgroundType, backgroundContent?: string): React.CSSProperties  {
  switch (backgroundType) {
    case BackgroundType.image:
      return { backgroundImage: `url(${backgroundContent})` }
    case BackgroundType.color:
      return { backgroundColor: backgroundContent }
    case BackgroundType.gradient:
      return { background: backgroundContent }
    default:
      return {}
  }
}

function HandleClick (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, linkListItem?: LinkListItem) {
  e.preventDefault()

  const videoPreview = document.getElementById('video-preview' + linkListItem?.id) as any
  const youtubeVideo = document.getElementById('youtube-video') as any

  if (videoPreview && youtubeVideo) {
    if (videoPreview.style.display === 'none' || videoPreview.style.display === '') {
      videoPreview.style.display = 'block'
      youtubeVideo.src = linkListItem?.videoUrl || ''
    } else {
      videoPreview.style.display = 'none'
      youtubeVideo.src = ''
    }
  }
}

export default App
