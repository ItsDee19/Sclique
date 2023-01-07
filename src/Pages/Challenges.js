import React from 'react'
import '../Styles/Challenges.css'
import pic1 from '../challenges_assets/page_logo.png'
import pic2 from '../challenges_assets/music_icon_white.png'
import pic3 from "../challenges_assets/ic_settings_ethernet_white_24dp.png"
import pic4 from "../challenges_assets/chess_logo.png"
import pic5 from "../challenges_assets/adidas-logo.png"

const Challenges = () => {
    return (
        <section className="back">
            <div className="ch_header">
                <div className="header-left">
                    <h1>Take a Challenge!</h1>
                    <p>Complete the available challenges to <br/> earn free credit and buy cool merchandise <br/> from our credit store.</p>
                    </div>
                        <div className="header-right">
                            <img src={pic1} alt="quiz_icon" width="380px" height="380px" />
                        </div>
                </div>
                <hr className="style-hr2" />
                <div className="challenge-div">
                    <h1 className="list-head">Available Challenges</h1>
                    <ul className="challenge-list">
                        <a href="q1">
                            <li className="list-item">
                                <img className="topic-img" src={pic2} alt="music_icon" />
                                    <h1>Musical Challenge</h1>
                                    <p>Guess the songs by their tune and earn credits and merchandise.</p>
                                    <div className="reward-div">
                                        <img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" height="24px" width="24px" />
                                        <p>20 credits</p>
                                    </div>
                                    <hr className="style-hr" align="center"/>
                                    </li>
                                </a>
                                <a href="q1">
                                    <li className="list-item">
                                        <img className="topic-img" src={pic3} alt="music_icon" />
                                            <h1>Coding <br /> Contest</h1>
                                            <p>Write a program to solve the <br /> given problem and earn loads of credit.</p>
                                            <div className="reward-div">
                                                <img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" height="24px" width="24px" />
                                                <p>100 credits</p>
                                            </div>
                                            <hr className="style-hr" align="center"/>
                                            </li>
                                        </a>
                                        <a href="q1">
                                            <li className="list-item">
                                                <img className="topic-img" src={pic4} alt="music_icon" />
                                                    <h1>Puzzle <br /> Rush</h1>
                                                    <p>Solve this sequence of chess puzzles and stand on top to win goodies.</p>
                                                    <div className="reward-div">
                                                        <img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" height="24px" width="24px" />
                                                        <p>50 credits</p>
                                                    </div>
                                                    <hr className="style-hr" align="center"/>
                                                    </li>
                                                </a>
                                                <a href="q1">
                                                    <li className="list-item">
                                                        <img className="topic-img" src={pic5} alt="music_icon" />
                                                            <h1>Guess <br /> the logo</h1>
                                                            <p>Try to guess the logos of these famous brands and earn yourself exciting rewards.</p>
                                                            <div className="reward-div">
                                                                <img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" height="24px" width="24px" />
                                                                <p>20 credits</p>
                                                            </div>
                                                            <hr className="style-hr" align="center"/>
                                                            </li>
                                                        </a>
                                                    </ul>
                                                </div>
                                            </section>
                                            )
}

                                            export default Challenges