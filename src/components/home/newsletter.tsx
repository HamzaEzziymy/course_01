// import React, { FC, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import React, {FC, useRef, useState, FormEvent } from 'react';
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import emailjs from '@emailjs/browser';

const HomeNewsLetter: FC = () => {
  const form = useRef<HTMLFormElement>(null);
  // useState with boolean type
  const [send, setSend] = useState<boolean>(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setSend(true);

    // Ensure form.current is not null before using it
    if (form.current) {
      emailjs
        .sendForm('service_y7jmelh', 'template_b1krqxq', form.current, 'MG-jDcwkUS5lKR8ld')
        .then(
          () => {
            setSend(false);
            form.current?.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            setSend(false);
          },
        );
    }
  };
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
          className='form-contact'
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Contact us
          </Typography>
          <Typography sx={{ mb: 6 }}>For inquiries or assistance, please contact us by sending an email.</Typography>
          <div className="container">
            <form ref={form} onSubmit={sendEmail} >
              <div className="user-info">
                <div>
                  <input type="text" required id="fname" name="user_name" placeholder="Nome..."/>
                </div>
                <div>
                  <input type="email" required id="lname" name="user_email" placeholder="Email.."/>
                </div>
              </div>
              <div>
                <input type="text" required id="lname" name="subject" placeholder="Subject.."/>
              </div>
              <textarea id="subject" required name="message" rows={5} placeholder="Write Message..."></textarea>

              <button type="submit">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                    </div>
                  </div>
                  <div>{send&&<img src="https://firebasestorage.googleapis.com/v0/b/test-isorenov.appspot.com/o/uGsHn.gif?alt=media&token=51ba64e6-ac37-4358-9f06-eeec7c784a93" width="20px" height="20px" style={{marginLeft:"40px"}}/>}</div>
                  <span>Envoyer</span>
              </button>
            </form>
          </div>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
