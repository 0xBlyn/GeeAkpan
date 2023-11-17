import React from 'react'
import './Community.css'
import { Card1 } from './Card'

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="head">
        <h1>What People Say About Godswill</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M11.6667 16.6665L20 24.9998L28.3333 16.6665H11.6667Z" fill="#238DDB"/>
        </svg>
      </div>
      <div className='container_card'>
        <Card1 testimony="Lorem ipsum dolor sit amet consectetur. Pellentesque quis nunc consectetur sed felis diam vulputate. Ullamcorper elementum quam magna imperdiet.
        Nec imperdiet eu urna ornare aliquam et. Fringilla viverra proin pretium mus faucibus. Massa cursus et nullam egestas amet. Nulla quisque hendrerit morbi purus tortor varius etiam pharetra et. Non erat faucibus fusce nisl condimentum nibh. " name="Wade Warren"/>
        <Card1 testimony="Lorem ipsum dolor sit amet consectetur. Pellentesque quis nunc consectetur sed felis diam vulputate. Ullamcorper elementum quam magna imperdiet. 
        Nec imperdiet eu urna ornare aliquam et. Fringilla viverra proin pretium mus faucibus. Massa cursus et nullam egestas amet. Nulla quisque hendrerit morbi purus tortor varius etiam pharetra et. Non erat faucibus fusce nisl condimentum nibh. " name="Wade Warren"/>
        <Card1 testimony="Lorem ipsum dolor sit amet consectetur. Pellentesque quis nunc consectetur sed felis diam vulputate. Ullamcorper elementum quam magna imperdiet. 
        Nec imperdiet eu urna ornare aliquam et. Fringilla viverra proin pretium mus faucibus. Massa cursus et nullam egestas amet. Nulla quisque hendrerit morbi purus tortor varius etiam pharetra et. Non erat faucibus fusce nisl condimentum nibh. " name="Wade Warren"/>
        <Card1 testimony="Lorem ipsum dolor sit amet consectetur. Pellentesque quis nunc consectetur sed felis diam vulputate. Ullamcorper elementum quam magna imperdiet. 
        Nec imperdiet eu urna ornare aliquam et. Fringilla viverra proin pretium mus faucibus. Massa cursus et nullam egestas amet. Nulla quisque hendrerit morbi purus tortor varius etiam pharetra et. Non erat faucibus fusce nisl condimentum nibh. " name="Wade Warren"/>
      </div>
    </div>
  )
}

export default Testimonials
