import React from 'react'

 function NotFound() {
  return (
    <div className='not-found'> 
      <h2>opps! page not found</h2>
      <img src="./images/broken-bulb.png" alt="" />
      <a href="./">
                <p className='btn-back'>Back to home</p>
            </a>
    </div>
  );
}
export default NotFound;