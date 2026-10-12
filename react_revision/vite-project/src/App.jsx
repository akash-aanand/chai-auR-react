import React from 'react'
import Card from './components/card.jsx'
const App = () => {
  return (
    <div
      className="app">
      <Card username="Akash Kumar" age={22}  img='https://plus.unsplash.com/premium_photo-1723428295291-d2abb18bc76c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D'/>
      <Card username="Rahul Sharma" age={23} img='https://r1.ilikewallpaper.net/iphone-wallpapers/download-112493/Trafalgar-Law-In-One-Piece-Resolution-HD-Anime-4K-_640.jpg'/>
      <Card username="manik" age={23} img='https://images.unsplash.com/photo-1762170905134-e9e3b5692286?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5N3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/>
    </div>
  )
}

export default App
