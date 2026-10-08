import React from 'react'

function Projects() {
  return (
    <div className='Project_section'>
      <div>
        <h1 id='heading_page'>💻Projects</h1>
      </div>
      <div className='Project_card'>
        <p id='pro1'>🤖 + 🩺 Medical RAG Chatbot</p>
        <p id='details'>Developed an AI-powered healthcare assistant using RAG architecture to provide context-aware responses from medical documents and assist users with healthcare-related queries.</p>
       <ul id='lists'>
        <li>Built a document-based medical question-answering system using Retrieval-Augmented Generation (RAG)</li>
        <li>Implemented FAISS vector database and embeddings for efficient and relevant medical document retrieval</li>
        <li>Integrated LLMs with LangChain to generate accurate, context-aware responses based on retrieved information</li>
        <li>Developed a FastAPI backend with PostgreSQL for chat history, patient data, and appointment management</li>
        <li>Implemented an appointment booking feature using AI tool integration</li>
       </ul>
        <div className='pro_button'>
          <button>Langchain</button>
          <button>RAG</button>
          <button>PostreySQL</button>
          <button>FastAPI</button>
          <button>React JS</button>
          </div> 


          <div className='code_button'>
            <a href='https://github.com/kunaldhumal17/AI_medical_assistance'
             target='_blank' >
            <button id='view_code'> 👁️ View Code</button></a>
          </div>

      </div>




      <div className='Project_card'>
        <p id='pro1'>🎬 Movie Recommendation System</p>
        <p id='details'>Developed a content-based movie recommendation system that suggests similar movies based on movie features such as genres, keywords, cast, crew, and overview.Used feature processing and cosine similarity to recommend similar movies.</p>
       <ul id='lists'>
        <li>🎥 Recommends similar movies based on movie content.</li>
        <li>🔍 Uses movie genres, keywords, cast, crew, and overview for recommendations.</li>
        <li>🧠 Implements Cosine Similarity to find similar movies.</li>
        <li>⚡ Uses precomputed similarity scores for faster recommendations.</li>
        <li>💻 Provides a simple and user-friendly interface for selecting movies and viewing recommendations.</li>
       </ul>
        <div className='pro_button'>
          <button>Python</button>
          <button>Pandas</button>
          <button>NumPyL</button>
          <button>Scikit-learn</button>
          <button>Cosine Similarity</button>
          
          </div> 
          <div className='code_button'>
            <a href='https://github.com/kunaldhumal17/movie_recomandation_system_ml'
             target='_blank' >
            <button id='view_code'> 👁️ View Code</button></a>
          </div>

      </div>






      <div className='Project_card'>
        <p id='pro1'>✈️ AI Travel Agent</p>
        <p id='details'>Developed an AI-powered travel planning system that generates personalized travel plans based on the user's destination, budget, interests, and preferences.</p>
       <ul id='lists'>
        <li>Generated customized travel itineraries based on destination, budget, and user preferences</li>
        <li>Integrated weather and places APIs for real-time travel information</li>
        <li>Implemented budget-based recommendations for efficient trip planning</li>
        <li>Built REST APIs using FastAPI for travel planning and AI-powered responses</li>
        <li>Implemented an appointment booking feature using AI tool integration</li>
       </ul>
        <div className='pro_button'>
          <button>Generative AI</button>
          <button>REST API</button>
          <button>OpenWeather API</button>
          <button>Python</button>
          <button>FastAPI</button>
          
          </div> 
          <div className='code_button'>
            <a href='https://github.com/kunaldhumal17/AI_travel_agent'
             target='_blank' >
            <button id='view_code'> 👁️ View Code</button></a>
          </div>

      </div>





     <div className='Project_card'>
        <p id='pro1'>📩 Spam or Not Spam</p>
        <p id='details'>Developed a machine learning-based spam detection system to classify messages as spam or legitimate.</p>
       <ul id='lists'>
        <li>Preprocessed and cleaned text data for effective classification</li>
        <li>Implemented machine learning algorithms for spam message detection</li>
        <li>Used TF-IDF vectorization to extract important text features</li>
        <li>Achieved high classification accuracy for identifying spam messages</li>
        <li>Implemented an appointment booking feature using AI tool integration</li>
       </ul>
        <div className='pro_button'>
          <button id='skills_button'>Python</button>
          <button>Pandas</button>
          <button>Machine Learning</button>
          <button>NLP</button>
          <button>TF-IDF</button>
          
          </div> 
          <div className='code_button'>
            <a href='https://github.com/kunaldhumal17/sms_email_spam_detections'
             target='_blank' >
            <button id='view_code'> 👁️ View Code</button></a>
          </div>

      </div>
    </div>
  )
}

export default Projects
