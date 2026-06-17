import React from 'react'
import progImage from '../assets/img/8901.jpg'

function About () {
  return (
    <section className="about-section">
      <div className="about-copy">
        <h1>About Me</h1>
        <p>I am an Information Science graduate with a strong interest in web development, software engineering, and educational technology. I currently work as an informatics teacher, where I focus on helping students understand programming concepts, web technologies, and computer systems in a practical and engaging way.</p>
        <p>Alongside teaching, I continuously develop my own technical skills, especially in frontend development with React and modern JavaScript. I enjoy building clean, responsive, and user-friendly web applications, and I am particularly interested in creating interactive and educational digital tools.</p>
        <p>I have also participated in workshops and meetups related to Arduino, Python, and programming fundamentals, which helped me gain hands-on experience and a broader perspective on real-world applications of technology.</p>
        <p>My goal is to grow as a developer by working on meaningful projects, improving my coding skills, and contributing to practical solutions that combine education and technology.</p>
      </div>

      <div className="about-image-wrapper">
        <img src={progImage} alt="Programming illustration" className="about-image" />
      </div>
    </section>
  )
}

export default About

