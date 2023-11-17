import React from 'react'
import './Intro.css'


function Intro() {
  return (
    <div className='intro'>
      <svg className='introsvg' xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 64 64" fill="none">
        <path d="M10.6667 56C9.2 56 7.944 55.4773 6.89867 54.432C5.85333 53.3867 5.33155 52.1316 5.33333 50.6667V40H24V45.3333H40V40H58.6667V50.6667C58.6667 52.1333 58.144 53.3893 57.0987 54.4347C56.0533 55.48 54.7982 56.0018 53.3333 56H10.6667ZM29.3333 40V34.6667H34.6667V40H29.3333ZM5.33333 34.6667V21.3333C5.33333 19.8667 5.856 18.6107 6.90133 17.5653C7.94667 16.52 9.20178 15.9982 10.6667 16H21.3333V10.6667C21.3333 9.2 21.856 7.944 22.9013 6.89867C23.9467 5.85333 25.2018 5.33155 26.6667 5.33333H37.3333C38.8 5.33333 40.056 5.856 41.1013 6.90133C42.1467 7.94667 42.6684 9.20178 42.6667 10.6667V16H53.3333C54.8 16 56.056 16.5227 57.1013 17.568C58.1467 18.6133 58.6684 19.8684 58.6667 21.3333V34.6667H40V29.3333H24V34.6667H5.33333ZM26.6667 16H37.3333V10.6667H26.6667V16Z" fill="white"/>
      </svg>
      <h1>Tech Entrepreneur</h1>
      <h3>Breeding Greatness | Inspiring Innovation | Transforming Lives</h3>
      <button>Book Me</button>
    </div>
  )
}

export default Intro
