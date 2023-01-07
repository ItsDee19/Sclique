import React from 'react'
import '../Styles/CreditStore.css'

const CreditStore = () => {
    return (
        <div className='credit'>
            <section id='credit'>
               <div className='cr_header'><h1>Credit Store</h1></div>
                <hr />
                <div className="container">
                    <div className="store_card">
                        <div className="content">
                            <div className="imgBx">
                                <img src="data:image/png;base64,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" />
                            </div>
                            <div className="contentBx">
                                <h3>Rubik's Cube<br /><span>500</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <div className="pungi">
                                    <a href="" title="money icons"><img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" /></a>
                                    <a href="">500</a>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="store_card">
                        <div className="content">
                            <div className="imgBx">
                                <img src="https://5.imimg.com/data5/VL/TY/DH/SELLER-65431535/yonex-gr-303-full-cover-badminton-racquet-1000x1000.jpg" />
                            </div>
                            <div className="contentBx">
                                <h3>Badminton Racquet<br /><span>4000</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <div className="pungi">
                                    <a href="" title="money icons"><img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" /></a>
                                    <a href="">4000</a>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="store_card">
                        <div className="content">
                            <div className="imgBx">
                                <img src="https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg" />
                            </div>
                            <div className="contentBx">
                                <h3>Boat Headphones<br /><span>9000</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <div className="pungi">
                                    <a href="" title="money icons"><img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" /></a>
                                    <a href="">9000</a>
                                </div>

                            </li>

                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="store_card">
                        <div className="content">
                            <div className="imgBx">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu26yysKZZqTmAto9_rcNqhZmwuU0acHadKQ&usqp=CAU" />
                            </div>
                            <div className="contentBx">
                                <h3>Laptop Bag<br /><span>5000</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <div className="pungi">
                                    <a href="" title="money icons"><img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" /></a>
                                    <a href="">5000</a>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="store_card">
                        <div className="content">
                            <div className="imgBx">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jxxHs1AXVCpQgTyoPNZYD1aVoPxLKIIPQQ&usqp=CAU" />
                            </div>
                            <div className="contentBx">
                                <h3>Wireless Mouse<br /><span>1000</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <div className="pungi">
                                    <a href="" title="money icons"><img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" /></a>
                                    <a href="">1000</a>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="store_card">
                        <div className="content">
                            <div className="imgBx">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRJrjZk3PXv56mmQb0WvoyJIxy_bUkVFk5g&usqp=CAU" />
                            </div>
                            <div className="contentBx">
                                <h3>Gym Sipper<br /><span>900</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <div className="pungi">
                                    <a href="" title="money icons"><img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" /></a>
                                    <a href="">900</a>
                                </div>

                            </li>

                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="store_card">
                        <div className="content">
                            <div className="imgBx">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeB_NdtGysUkZUamAkI3ekC8Mj-UTxMZsED1eoYu3BYTl38Bf8CL7_xfL1OuqwpJzxyc&usqp=CAU" />
                            </div>
                            <div className="contentBx">
                                <h3>Keyboard<br /><span>1000</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <div className="pungi">
                                    <a href="" title="money icons"><img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" /></a>
                                    <a href="">1000</a>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="store_card">
                        <div className="content">
                            <div className="imgBx">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtNgKm4J2OzBIPnGvetFjvUF2vX5PhGIOcw&usqp=CAU" />
                            </div>
                            <div className="contentBx">
                                <h3>Earphones<br /><span>700</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <div className="pungi">
                                    <a href="" title="money icons"><img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" /></a>
                                    <a href="">700</a>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="store_card">
                        <div className="content">
                            <div className="imgBx">
                                <img src="data:image/jpeg;base64,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" />
                            </div>
                            <div className="contentBx">
                                <h3>Smart Watch<br /><span>7000</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <div className="pungi">
                                    <a href="" title="money icons"><img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" /></a>
                                    <a href="">7000</a>
                                </div>

                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CreditStore