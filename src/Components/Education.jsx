import React from 'react'
import school_icon from '../assets/school.png'

function Education() {
  return (
    <div className='exp_main'>
      <h1 id='heading_page'>🎓Education</h1>
      <div className='education'>

        <div className="school_card">
          <img src="https://engg.matoshri.edu.in/assets/images/about/about1.jpg" alt="School Image" />
          <div className="card-content">
            <h3 id='strem_name'>Bachelor of Engineering in Artificial intelligence & Data Science</h3>
            <p><strong>Collage:</strong> Matoshree collage of Engineering Nashik</p>
            <p><strong>University:</strong> Savitribai Phule Pune Unversity</p>
            <p><strong>Batch:</strong> 2021-2025</p>
            <p><strong>CGPA:</strong> 6.65</p>
          </div>
        </div>



        <div className="school_card">
          <img src="https://content3.jdmagicbox.com/comp/nashik/s8/0253px253.x253.190402141019.g9s8/catalogue/karmaveer-kakasaheb-wagh-arts-science-and-commerce-college-pimpalgaon-baswant-nashik-colleges-amd2q0knao.jpg" alt="School Image" />
          <div className="card-content">
            <h3 id='strem_name'>Higher Secondary Certificate (HSC)</h3>
            <p><strong>School :</strong>  K.K.Wagh science collage pimpalgoan baswant</p>
            <p><strong>Board :</strong>  Maharashtra State Board</p>
            <p><strong>Batch :</strong>  2020-2021</p>
            <p><strong>Percentage :</strong>  63.83%</p>
          </div>
        </div>



        <div className="school_card">
          <img src="https://content.jdmagicbox.com/v2/comp/nashik/u7/0253px253.x253.180817221147.j3u7/catalogue/yogeshwar-vidyalaya-dawachwadi-nashik-schools-br34wd1fpz.jpg" alt="School Image" />
          <div className="card-content">
            <h3 id='strem_name'>Secondary School Certificate(SSC)</h3>
            <p><strong>School :</strong> Yogeshwar Vidyalaya Dawachwadi</p>
            <p><strong>Board :</strong> Maharashtra State Board</p>
            <p><strong>Batch :</strong> 2018-2019</p>
            <p><strong>Percentage :</strong> 72.20%</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Education
