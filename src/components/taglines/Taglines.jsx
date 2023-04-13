import React, { useState } from 'react'

// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';

import "./taglines.css"
import { ArrowDropDown, Close, GroupAdd } from '@material-ui/icons'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, TextField, Typography } from '@material-ui/core';
import Card from '../cards/Card';
import Login from '../login/Login';
import exit from "../../assets/exit.png"
const Taglines = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div className='taglines'>
            <div className="leftTags">
                <span className='tags' id="selected">All Posts(32)</span>
                <span className='tags'>Article</span>
                <span className='tags'>Event</span>
                <span className='tags'>Education</span>
                <span className='tags'>Job</span>
            </div>
            <div className="rightTags">
                <span className="left">Write a Post
                    <ArrowDropDown />
                </span>
                <span className="right" onClick={handleOpen}>
                    <GroupAdd style={{ marginLeft: "10px", marginRight: "10px" }}

                    />
                    Join group</span>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Login />

                </Modal>
            </div>
            {open &&
            <>
            <img src={exit}  className='exit' alt=""  onClick={handleClose}/>
        <Close id="exit" />
            </>
            }
            
        </div>
    )
}

export default Taglines