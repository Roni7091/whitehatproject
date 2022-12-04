import React from 'react'
import "./login2.css";
import { Link } from 'react-router-dom';

const Login2 = () => {
  return (
    <div className="main_container">
        <div className="background">
            <nav className="navbar">
                <div className="logo">
                    <div>
                        <a className="navbar2" href="">
                            <div>
                                <h6 className="header">
                                    <img width="150" src='https://code-assets-0.whjr.online/images/whitehatLogo.svg' alt='Logo'>
                                    </img>
                                </h6>
                            </div>
                        </a>
                    </div>

                </div>

            </nav>
            <div className="body">
                <div className="body2">
                    <div className="form-container">
                        <p className="title">Log In to Your Account</p>
                        <div className="box">
                            <div className="box">
                                <div className="box2">
                                    <div className="box3">
                                        <label className="title1">
                                        <span></span>
                                        </label>
                                        <div className="underline">
                                            <select className="select1" aria-invalid="false" id="countryDialCode" required>
                                                <option value="">Select Country</option>
                                                <option value="+93_AF">Afghanistan +93</option>
                                                <option value="+358_AX">Aland Island +358</option>
                                                <option value="+61_AU">Australia +61</option>
                                                <option value="+880_BD">Bangladesh +880</option>
                                                <option value="+1246_BB">Barbados +1246</option>
                                                <option value="+33_FR">France +33</option>
                                                <option value="+91_IN">India +91</option>
                                                <option value="+64_NZ">New Zealand +64</option>
                                                <option value="+92_PK">Pakistan +92</option>
                                                <option value="+7_RU">Russia +7</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="box4">
                                        <label className="title2">Mobile Number</label>
                                        <div className="underline2">
                                            <input className="mob1" id="mobile"></input>
                                        </div>

                                    </div>
                                </div>
                                <div className="but1">
                                    <button className="but2" type="submit">
                                        <span className="but3">Login</span>
                                    </button>

                                </div>

                            </div>

                        </div>

                        <section>
                            <div className="opt">
                                <span className="line1"></span>
                                <span className="opt1">or</span>
                                <span className="line2"></span>
                            </div>
                            <div className="but4">
                                <Link to={"/login"}><span className="but5">Login With Password</span></Link>
                            </div>
                        </section>
                        <p className="head1">
                            <span>Don’t have an account?</span>
                            <a href='' className="head2">Register Now</a>
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Login2;