import React from 'react'
import './home.css'


function Home() {
  return (
    <div className='home'>


      <div className='about_card'>
        <div className='home_user'>
          <h1>
            <span className='name-icon' aria-hidden='true'></span>
            Er.Kunal Dhumal
          </h1>
        </div>

        <div>
          <h1 className='jobrole'>Full stack Developer & AI Engineer</h1>
        </div>
        <div>
          <h1 className='passionate'>Passionate about AI Technology</h1>
        </div>
        <div className='home_information'>
          <p>
            A passionate Full-Stack AI Developer specializing in web development, Generative AI, and intelligent application development. Skilled in Python, React.js, FastAPI, Machine Learning, and RAG-based solutions, with a strong focus on building scalable, user-friendly, and real-world AI applications.
          </p>
        </div>

        <div className='Buttons'>
          <div className='contact_button'>
            <a href="#contact">Contact Me</a>
          </div>
          <div className='resume_button'>
            <a href='https://drive.google.com/file/d/1E6fIlVmVgr5Ary-S7aN6N7vm0ThWGxta/view?usp=sharing'
            download='Kunal Dhumal Resume.pdf' target='_blank' >
            <button>Resume</button></a>
          </div>
        </div>

      </div>

      <div className='img_section'>

        <div className="img">
          <img src="/kunaldhumal.png" alt="Kunal Dhumal" />
        </div>
      </div>
    </div>

  )
}

export default Home
