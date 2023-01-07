import React from 'react'
import '../Styles/Resources.css'
import pic1 from "../rs_assets/resource image.png"
import pic2 from "../rs_assets/cpp logo.png"
import pic3 from "../rs_assets/java logo.png"
import pic4 from "../rs_assets/python logo.png"
import pic5 from "../rs_assets/js logo.png"
import pic6 from "../rs_assets/css logo.png"
import pic7 from "../rs_assets/chess_logo.png"
import pic8 from "../rs_assets/react logo.png"
import pic9 from "../rs_assets/mongo logo.png"

const Resources = () => {
  return (
    <section className="rs-back">
    <div className="rs-header">
        <div className = "rs-header-left">
            <h1>Upgrade your skills</h1>
            <p>We scoured the web (and our own <br/>experiences) for the best resources <br/>to help you excel in your coursework <br/> and improve your skills.</p>
        </div>
        <div className="rs-header-right">
            <img src={pic1} alt="respective image"/>
        </div>
    </div>
    <hr className="rs-style-hr2"/>
    <div className="rs-resource-div">
        <h1 className="rs-resource-div-head">Available resources</h1>
        <ul className="rs-resources-list">
            <a href = "">
                <li className="rs-list-item">
                    <img className="rs-topic-image" height="40px" width="50px" src={pic2} alt="respective icon" />
                    <h1>C++</h1>
                    <p>Notes of Striver and Abdul Barik.</p>  
                    <hr className="rs-style-hr"/>
                </li>
            </a>
            <a href = ""><li className="rs-list-item">
                <img className="rs-topic-image" height="40px" width="50px" src={pic3} alt="respective icon" />
                <h1>Java</h1>
                <p>Video lessons and notes of Anuj Bhaiya and Pepcoding.</p>
                <hr className="rs-style-hr"/>
            </li>
            </a>
            <a href = ""><li className="rs-list-item">
                <img className="rs-topic-image"height="40px" width="50px"  src={pic4} alt="respective icon" />
                <h1>Python</h1>
                <p>Resources designed by the best data scientists.</p>
                <hr className="rs-style-hr"/>
            </li></a>
            <a href = ""><li className="rs-list-item">
                <img className="rs-topic-image" height="40px" width="50px" src={pic5} alt="respective icon" />
                <h1>Front-end Development</h1>
                <p>Resources curated and designed by Code With Harry.</p>
                <hr className="rs-style-hr"/>
            </li></a>
        </ul>
    </div>
    <div className="rs-resource-div">
        <ul className="rs-resources-list">
            <a href = ""><li className="rs-list-item">
                <img className="rs-topic-image" height="40px" width="50px" src={pic6} alt="respective icon" />
                <h1>Competitive Programming</h1>
                <p>Eliminate all errors by enrolling in amazing courses by TLE Eliminators.</p>
                <hr className="rs-style-hr"/>
            </li></a>
            <a href = ""><li className="rs-list-item">
                <img className="rs-topic-image" height="40px" width="50px" src={pic7} alt="respective icon" />
                <h1>Chess</h1>
                <p>The best insights on openings, midgame and endgame by Hikaru Nakamura.</p>
                <hr className="rs-style-hr"/>
            </li></a>
            <a href = ""><li className="rs-list-item">
                <img className="rs-topic-image" height="40px" width="50px" src={pic8} alt="respective icon" />
                <h1>React</h1>
                <p>Video lessons and notes of Anjela Yu.</p>
                <hr className="rs-style-hr"/>
            </li></a>
            <a href = ""><li className="rs-list-item">
                <img className="rs-topic-image" height="40px" width="50px" src={pic9} alt="respective icon" />
                <h1>Mongo DB</h1>
                <p>Resources curated and designed by the best backend developers.</p>
                <hr className="rs-style-hr"/>
            </li></a>
        </ul>
    </div>
</section>
  )
}

export default Resources