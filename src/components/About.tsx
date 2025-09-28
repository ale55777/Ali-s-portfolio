
export default function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-box">
        <h2 className="about-heading">About Me</h2>
        <p className="about-desc">
          I’m <strong>Ali Raza Khan</strong>, a passionate Computer Scientist with a strong 
          foundation in both front-end and back-end development. Skilled in the 
          <span className="about-highlight"> MERN Stack</span>, I love building modern, 
          scalable, and impactful applications.
        </p>

        {/* Contact Info */}
        <ul className="about-info">
          <li><span className="about-label">📧 Email:</span> malirazakhan55777@gmail.com</li>
          <li><span className="about-label">📱 Phone:</span> +92 3041659109</li>
          <li><span className="about-label">📍 Address:</span> 26B, Street 687 , G-13/3, Islamabad, Pakistan</li>
          <li><span className="about-label">🌐 GitHub:</span> <a href="https://github.com/ale55777" target="_blank" rel="noreferrer">github.com/ale55777</a></li>
        </ul>

        {/* Education */}
        <div className="about-edu">
          <h3 className="edu-heading">Education</h3>
          <div className="edu-grid">
            <div className="edu-item">
              <h4>Matriculation</h4>
              <h4> (2017-2019)</h4>
              <p>Computer Science — 87.6%</p>
            </div>
            <div className="edu-item">
              <h4>Intermediate</h4>
              <h4> (2019-2021)</h4>
              <p>FSC Pre Engineering — 80%</p>
            </div>
            <div className="edu-item">
              <h4>BS Computer Science <h4>
               
             </h4> (2021-2025)</h4>
             
              <p>FAST Islamabad — CGPA 3.5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
