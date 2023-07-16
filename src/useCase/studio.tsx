import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../public/css/App.css'
// import KofiButton from 'kofi-button'
import { BackgroundType } from '../enums/backgroundType'
import { Studio, LinkListItem } from '../models/studio'

export class RenderStudio {
  private studio: Studio
  constructor(studio: Studio) {
    this.studio = studio
  }
  
  render: React.FC = () => {  
    return (
      <div className="content-box" style={ this.FormatBackground(this.studio.style?.backgroundType, this.studio.style?.backgroundContent) }>
      <div className="header">
        <img className="logo" src={this.studio.header.image?.url} alt={this.studio.header.image?.alt} />
        {!this.studio.header.title.hidden ? <h1>{this.studio.header.title.text}</h1> : undefined}
        <h4>{this.studio.header.subtitle?.text}</h4>
      </div>

        <div>
          <ul className="link-list">
            {this.studio.linkList.map((item) => {
              const itemCard = (
                <li key={item.id} className="link-list-item" style={ this.FormatBackground(item.backgroundType, item.backgroundContent) } > { /* Verificar background por parceiro */ }
                  <a href={item.info.url} className="link" onClick={item.type ? (e) => this.HandleVideoClick(e, item) : undefined} type={item.type} style={{ color: item.info.color }} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={item.icon.name} color={item.icon.color} /> &nbsp; {item.info.text}
                  </a>
                  {item.videoUrl && 
                    <div id={"video-preview" + item.id} className="video-preview">
                      <iframe id="youtube-video" width="100%" height="315" src="" frameBorder="0" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture" title='Youtube Video' allowFullScreen></iframe>
                    </div>
                  }
                </li>
              )
              return itemCard}
            )}
          </ul>
    
          <div className="social-icons">
            {this.studio.socialIconList.map((social, index) => (
              <a key={index} href={social.link.url}>
                <FontAwesomeIcon icon={social.icon.name} color={social.icon.color} />
              </a>
            ))}
          </div>
            {/* <KofiButton color="#0a9396" title="Indústria de Jogos" kofiID="N4N31JDNX" /> */}
        </div>
      </div>
    )
  }

  private FormatBackground (backgroundType?: BackgroundType, backgroundContent?: string): React.CSSProperties  {
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
  
  private HandleVideoClick (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, linkListItem?: LinkListItem) {
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
  
}

