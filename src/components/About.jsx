import React from "react";


 function About() {
  return (
    <div className="about">
      <img className="info-logo" src="./images/info.png" alt="" />
      <h1>A Numeric Counter.</h1>
      <div className="about-list">
      <ul>
        <li>Use the input to set the count value.</li>
        <li>Click <span className="about-img" dangerouslySetInnerHTML={{__html : '&plus;'}}/>  the button to increase the count value by 1</li>
        <li>Click <span className="about-img" dangerouslySetInnerHTML={{__html : '&minus;'}}/> the button to decrease the count value by 1</li>
        <li>Click <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 4.86914V7.99414H3.8127" stroke="#F44E77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.56886 10.0768C2.97414 11.3549 3.74228 12.452 4.75755 13.2028C5.77282 13.9536 6.98023 14.3175 8.19783 14.2397C9.41544 14.1618 10.5773 13.6464 11.5083 12.7711C12.4394 11.8958 13.0891 10.7081 13.3598 9.38682C13.6304 8.06556 13.5072 6.68238 13.0087 5.44567C12.5103 4.20897 11.6636 3.18574 10.5962 2.53016C9.52882 1.87459 8.29858 1.62218 7.09085 1.81096C5.88313 1.99975 4.76334 2.61951 3.90021 3.57685L1 6.60463" stroke="#F44E77" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 the button to reset count value to 0</li>
      </ul>
      </div>
       <a href="./">
                <p className="btn-back">Back to Home</p>
            </a>
    </div>
  );
}
export default About;
