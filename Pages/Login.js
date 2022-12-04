import React from 'react'
import "./login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="main_container">
        <div className="sc-frDJqD ljsJzL d-none d-sm-block">
            <nav className="navbar navbar-transparent navbar-absolute w-10 pt-0 undefined ">
                <div className="justify-content-sm-between justify-content-center">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="">
                            <div className="jss24">
                                <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-noWrap">
                                    <img width="150" src="https://code-assets-0.whjr.online/images/whitehatLogo.svg"
                                    alt="Company Logo"></img>
                                </h6>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
            <div className="sc-jqCOkk cMKpQn row mx-auto justify-content-center">
                <div className="wrapper col-xl-4 col-lg-5 col-md-6 order-sm-2">
                    <div className="form-container mb-5">
                        <p className="font20 text-left heading3_bold mb-3">Log In to Your Account</p>
                        <form novalidate className="jss45">
                            <div className="MuiFormControl-root MuiTextField-root jss63 MuiFormControl-marginNormal">
                            <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated Mui-required Mui-required" data-shrink="false" for="email" id="email-label">
                            Email
                            <span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk">*</span>
                            </label>
                            <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">

                            <input aria-invalid="false" id="email" name="email" required="" type="text" className="MuiInputBase-input MuiInput-input"/>


                            </div>
                            </div>
                            <div className="MuiFormControl-root MuiTextField-root jss63 MuiFormControl-marginNormal">
                            <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated Mui-required Mui-required" data-shrink="false" for="password" id="password-label">
                            Password
                            <span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk">*</span>
                            </label>
                            <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                            <input aria-invalid="false" id="password" name="password" required="" type="password" className="MuiInputBase-input MuiInput-input"/>
                            </div>
                            </div>
                            <div className="text_blue">
                            <p className="jss49">
                            <span className="jss47">Forgot Password?</span>
                            </p>
                            </div>
                            <div className="text-center ">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss53 w-100" tabindex="0" type="submit">
                            <span className="MuiButton-label">Login</span>
                            <span className="MuiTouchRipple-root"></span>
                            </button>
                            </div>
                            <div className="d-flex align-items-center justify-content-center m-3">
                            <span className="jss59 d-inline "></span>
                            <span className="p-2 text_gray_light font14">Or</span>
                            <span className="jss59"></span>
                            </div>
                            <div className="text-center  pt-2 pb-2">
                            <Link to={"/login2"}><span className="jss55">Login With PIN</span></Link>
                            <div className="font12 text_gray pt-2 m-auto wd_65">We will send you a temporary PIN for verification</div>
                            </div>
                        </form>
                        <p className="font16 text-center text_gray m-0 pt-2">
                        <span>Don’t have an account? </span>
                        <a href="" className="registerNowButton">Register Now</a>
                        </p>
                    </div>
                </div> 

        </div>
        </div>

    </div>
  );
};

export default Login;