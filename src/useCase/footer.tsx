import React from 'react'

export class RenderFooter {
  private show: boolean
  constructor(show: boolean) {
    this.show = show
  }
  
  render: React.FC = () => {
    return (
      this.showFooter()
    )
  }
  
  private showFooter (show: boolean = true) {
    if (!show) {
      return null
    }  
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ bottom: 10, position: 'inherit' }}>
          <small>Feito no 🇧🇷 - <a href="https://twitter.com/gameindiebrasil">@GameIndieBrasil</a></small>
        </div>
      </div>
    )
  }
  
}

