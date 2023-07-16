import React from 'react';
import ReactDOM from 'react-dom/client';
import './public/css/index.css';
import reportWebVitals from './reportWebVitals';
import { BackgroundType } from './enums/backgroundType';
import { Icon } from './enums/icon';
import { LinkListItem, SocialListItem, Studio } from './models/studio';
import { RenderStudio } from './useCase/studio';
import { RenderFooter } from './useCase/footer';

const site: LinkListItem = {
  icon: {
    name: Icon.IDJSITE.value,
    color: '#b22121'
  },
  info: {
    text: 'Site oficial',
    url: 'https://www.industriadejogos.com.br'
  },
  id: 'site'
}
const face: LinkListItem = {
  icon: {
    name: Icon.FACEBOOK.value,
    color: '#3b5998'
  },
  info: {
    text: 'Facebook',
    url: '#'
  },
  id: 'face'
}
const twitter: LinkListItem = {
  icon: {
    name: Icon.TWITTER.value,
    color: '#1da1f2'
  },
  info: {
    text: 'Twitter',
    url: '#'
  },
  id: 'twitter'
}
const instagram: LinkListItem = {
  icon: {
    name: Icon.INSTAGRAM.value,
    color: '#e1306c'
  },
  info: {
    text: 'Instagram',
    url: '#'
  },
  id: 'instagram'
}
const youtube: LinkListItem = {
  icon: {
    name: Icon.YOUTUBE.value,
    color: '#ff0000'
  },
  info: {
    text: 'Veja o nosso vídeo mais recente no youtube'
  },
  id: 'last',
  youtubeVideoId: 'C8OK15lHBj0'
}
const socialFace: SocialListItem = {
  link: {
    text: 'Facebook',
    url: '#'
  },
  icon: {
    name: Icon.FACEBOOK.value,
    color: '#3b5998'
  },
  alt: ''
}
const socialTwitter: SocialListItem = {
  link: {
    text: 'Twitter',
    url: '#'
  },
  icon: {
    name: Icon.TWITTER.value,
    color: '#1da1f2'
  },
  alt: ''
}
const socialInstagram: SocialListItem = {
  link: {
    text: 'Instagram',
    url: '#'
  },
  icon: {
    name: Icon.INSTAGRAM.value,
    color: '#e1306c'
  },
  alt: ''
}
const industriaDeJogos: Studio = {
  header: {
    title: {
      text: 'Indústria de Jogos',
      // hidden: true
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
    backgroundType: BackgroundType.color,
    backgroundContent: 'whote',
  },
  verified: {
    name: Icon.VERIFIED.value,
    color: 'green'
  },
  linkList: [ site, youtube, face, twitter, instagram ],
  socialIconList: [ socialFace, socialTwitter, socialInstagram ]
}

const renderStudio = new RenderStudio(industriaDeJogos);
const renderFooter = new RenderFooter(true)
const studio = ReactDOM.createRoot(
  document.getElementById('studio') as HTMLElement
);
const footer = ReactDOM.createRoot(
  document.getElementById('footer') as HTMLElement
)
studio.render(
  <React.StrictMode>
    <renderStudio.render />
  </React.StrictMode>
);
footer.render(
  <React.StrictMode>
    <renderFooter.render />
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
