import React, {useState} from 'react';

// MATERIAL UI config

import {makeStyles, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import './contactStyles.scss';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '20ch',
            },
            display: 'flex',
            flexDirection: 'column'
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);


const ContactForm = (props) => {
    const [status, setStatus] = useState(null);
    const classes = useStyles();

    function handleSubmit (event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        form.reportValidity();
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS" );
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }

    const handleClose = () => {
        console.log(props)
        props.setFormOpen(false);
        setStatus(null);
    };

    return (
        <div>
            {/*<button type="button" onClick={handleOpen}>*/}
            {/*</button>*/}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.formOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.formOpen}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">
                            Send me a message!
                        </h2>
                        <p id="transition-modal-description">
                            I will reply in less than 24 hours
                        </p>
                        <form className={classes.root} noValidate autoComplete="off"
                              onSubmit={handleSubmit}
                              // REAL END POINT
                              action="https://formspree.io/mjvapgkz"
                              method="POST"
                        >
                            <TextField
                                id="name"
                                type="text"
                                name="name"
                                label="Your name"
                            />
                            <TextField
                                id="standard-basic"
                                type="email"
                                name="email"
                                label="Email"
                                required={true}
                            />
                            <TextField
                                id="message"
                                type="text"
                                label="Message"
                                name="message"
                                required={true}
                                multiline
                            />
                            {status === "SUCCESS" ?
                                <p>Thanks!</p> :
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                >Submit
                                </Button>
                            }
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default ContactForm;
