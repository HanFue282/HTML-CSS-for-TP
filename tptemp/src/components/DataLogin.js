import React from "react";
import "../styles/Nav.css";

function Login() {
  
  return (

    <div class="conainer-fuild">
    <div class="row">
        <div class="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
        <div class="col-lg-6 col-md-6 form-container">
            <div class="col-md-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
                <div class="logo text-center mt-5">
                    <a>
                    <img src="tp-icon.png" style="height: 90px; width: 130px;"/>
                    </a>
                </div>
                <div class="heading mb-3">
                    <h4>Login into your account</h4>
                </div>
            <form>
                <div class="form-input">
                    <span><i class="fa fa-envelope"></i></span>
                    <a>
                    <input type="email" placeholder="Email Address" required/>
                    </a>
                </div>
                <div class="form-input">
                    <span><i class="fa fa-lock"></i></span>
                    <a>
                    <input type="password" placeholder="Password" required/>
                    </a>
                </div>
                <div class="row mb-3">
                    <div class="col-6 d-flex">
                        <div class="custom-control custom-checkbox">
                            <a>
                            <input type="checkbox" class="custom-control-input" id="controlOne"/>
                            </a>
                            <label class="custom-control-label text-white" for="controlOne">
                                Remember Me
                            </label> 
                        </div>
                    </div>
                    <div class="col-6 text-right">
                        <a href="forgotten.html" class="forgot-link">Forgot Password</a>
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn">Login</button>
                </div>
                <div class="mt-3 text-white">Don't have an account?
                    <a href="signup.html" class="signup-link">Sign Up</a>
                </div>
            </form>
            </div>
            
        </div>
    </div>
</div>
  );
}
export default Login;




