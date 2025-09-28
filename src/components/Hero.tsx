import React from 'react'

export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="hero-inner">
        
        {/* Left Side: Text Content */}
        <div className="hero-content glass-card">
          <h1 className="name-gradient">ALI RAZA KHAN</h1>
          <p className="subtitle">Computer Scientist | MERN </p>

          <div className="profile-block">
            <h3 className="profile-title">PROFILE</h3>
            <p className="profile-text">
              As a <span className="highlight">Computer Science student</span> with a background from 
              <span className="highlight"> FAST Islamabad</span>, I possess a strong foundation in both 
              <span className="highlight"> front-end</span> and <span className="highlight"> back-end development</span>. 
              I am eager to showcase my <span className="highlight">skills</span> and contribute 
              meaningfully to the <span className="highlight">programming world</span>. 
              With a continuous dedication to <span className="highlight">coding</span>, I am confident in my 
              ability to tackle <span className="highlight">challenging projects</span> and deliver 
              <span className="highlight"> exceptional results</span>. 
              If you're seeking a programmer who is <span className="highlight">committed</span>, 
              <span className="highlight"> skilled</span>, and ready to <span className="highlight">make an impact</span>, 
              then look no further — you've found the right candidate.
            </p>
          </div>
        </div>

        {/* Right Side: Neon Image */}
        <div className="hero-visual">
          <div className="image-wrapper">
            <img 
              src="src/components/d.jpg"   // 👉 put your image path here
              alt="Ali Raza Khan"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
