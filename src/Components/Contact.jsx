import React from 'react'

const Contact = () => {
  return (
    <div className='exp_main'>
      <h1 id='heading_page'> Contact Me 🔗</h1>

      <div className='contact_view'>
        <div className='contact_btn'>
          <button >
            <a href="tel:+917887691001" target="_blank" rel="noreferrer">
              <img src="/call.png" alt="Call" />
            </a>
          </button>


          <button>
            <a href="mailto:kdhumal384@gmail.com" target="_blank" rel="noreferrer">
              <img src="/email.png" alt="Email" />
            </a>
          </button>



          <button>
            <a href="https://github.com/kunaldhumal17" target="_blank" rel="noreferrer">
              <img src="/github_b.png" alt="GitHub" />
            </a>
          </button>

          <button>
            <a href="https://www.linkedin.com/in/kunal-dhumal-3a4279230/?isSelfProfile=true" target="_blank" rel="noreferrer">
              <img src="/linkdin.png" alt="Linkdin" />
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
