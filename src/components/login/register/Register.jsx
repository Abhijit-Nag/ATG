import React, { useState } from 'react'
import login from "../../../assets/login.png"
import fb from "../../../assets/fb.png"
import google from "../../../assets/google.png"
import "./register.css"
import { Modal } from '@material-ui/core'
import Login from '../Login'
export default function Register() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='register'>
            <div className="topLogin">

            </div>
            <img src={login} alt="" className='loginImg' />
            <div className="topbarLogin">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
            <div className="headbar">
                <div className="leftHead">
                    Sign In
                </div>
                <div className="rightHead">
                    <span>Don’t have an account yet? </span>
                    <span className='sign' onClick={handleOpen}>Create new for free!</span>
                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Login />

                </Modal>
                </div>
            </div>
            <div className="inputSection">

                
                <div className="restBody"></div>
                
                <input type="email" id='email' placeholder='Email' />
                <input type="password" name="" id="pas" placeholder='Password' />
                
            </div>

            <div className="button"> <span id="buttonText1"> Create Account</span></div>
            <div id="button2"></div>
            <div id="button3"></div>
            <div id="buttonText2">Sign up with Facebook</div>
            <div id="buttonText3">Sign up with Google</div>
            <img src={fb} id='fbIcon' alt="" />
            <img src={google} id='google' alt="" />
            {/* <Facebook id='fbIcon'/> */}

            <span className="footer">Forgot Password?</span>
            
        </div>
    )
}
