// import React, { useState } from 'react';




// const Footer = () => {


//     return (
//         <>
//             <div className='footer_elm my-3 footer_bg'>
//                 <div className='container-fluid footer'>
//                     <div className='col-10 mx-auto row'>
//                         <div className='col-lg-4 col-md-6'>
//                         {/*<p >The Association of Civil Engineers, B.I.T. Sindri established in 2017 is an assortment of individuals who aim to acquaint you with the latest trends in the Civil Engineering field.</p> */}
//                             <div className='logo'>

//                                 <section id="footer">
//                                     <div className="footer">
//                                         <p className="footer-head">
//                                             We should connect!
//                                         </p>

//                                         <div className="socials">
//                                             <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-dribbble"
//                                                 aria-hidden="true"></i></a>
//                                             <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-facebook"
//                                                 aria-hidden="true"></i></a>
//                                             <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-instagram"
//                                                 aria-hidden="true"></i></a>
//                                             <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-youtube"
//                                                 aria-hidden="true"></i></a>
//                                             <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-twitter"
//                                                 aria-hidden="true"></i></a>
//                                             <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-medium"
//                                                 aria-hidden="true"></i></a>
//                                             <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-linkedin"
//                                                 aria-hidden="true"></i> </a>
//                                         </div>

//                                         <div className="tooltips">
//                                             <button  >
//                                                 <span className="tooltiptext" id="myTooltip"> click to copy</span>
//                                                 <p className="email">
//                                                     kumardharmveer399@gmail.com
//                                                 </p>
//                                             </button>
//                                         </div>
//                                     </div>


//                                 </section>
//                             </div>
//                         </div>
//                         <div class="col-lg-4 col-md-6"></div>
//                         <div class="col-lg-4 col-md-6">
//                             <h6 class="text-uppercase font-weight-bolder mb-4"><b>Newsletter</b></h6>
//                             <label> <p class=" mb-4">Enter your mail to get subscribed</p></label>
//                             <div class="input-group">
//                                 <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0"></input>
//                                 <div className='input-group-append'>
//                                     <button className='btn btn-link bg-white'>
//                                         <i className="fa fa-send" style={{ height: '40px', width: '50px' }}></i>
//                                     </button>

//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <p className='design my-3'>Designed By <a href="https://www.linkedin.com/in/dharm-veer-043743221/" target="blank" style={{ color: 'darkblue;', textDecoration: 'none' }}>Dharmveer Mahtha</a> </p>
//                     <div>
//                         <p className="dialogue">Crafted with 🖐 Moulded with 🎵</p>
//                         <p className="copyright">Copyright © 2023💃!</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }




// export default Footer;

import React, { useState } from 'react';
import "../App.css"
import { Container, Grid, Typography, IconButton, InputAdornment, TextField, Button,Tooltip } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube, LinkedIn, Medium, Dribbble, Send, FileCopy } from '@mui/icons-material';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Footer() {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };


  return (
    <div className='footer_elm my-3 footer_bg'>
      <Container>
        <Grid container spacing={3} className='footer'>
          <Grid item xs={12} >
            <div className='logo'>
              <section id="footer">
                <Typography variant="h6" className='fhead' gutterBottom>
                  We should connect!
                </Typography>
                <div className="socials">
                  <IconButton className='flink' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                  </IconButton>
                  <IconButton className='flink' href="https://www.instagram.com/direct/inbox/" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                  </IconButton>
                  <IconButton className='flink' href="https://www.linkedin.com/in/dharm-veer-043743221/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn />
                  </IconButton>
                  <IconButton className='flink' href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <YouTube />
                  </IconButton>
                  <IconButton className='flink' href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                  </IconButton>
                  {/* Add other social icons similarly */}
                </div>
                <div className="tooltips">
                  <CopyToClipboard text="kumardharmveer399@gmail.com" onCopy={handleCopy}>
                    <Tooltip title={copied ? 'Copied!' : 'Copy email'}>
                      <Button>
                        <span className="tooltiptext" id="myTooltip">click to copy</span>
                        <Typography className="email">
                          kumardharmveer399@gmail.com
                        </Typography>
                        {/* <FileCopy /> */}
                      </Button>
                    </Tooltip>
                  </CopyToClipboard>
                </div><br /><br /><br />

                <Typography variant="body2" className='design my-3'>
                  Designed By <a href="https://www.linkedin.com/in/dharm-veer-043743221/" target="blank" style={{ color: 'darkblue;', textDecoration: 'none' }}>Dharmveer Mahtha</a>
                </Typography>
                <Typography variant="body2" className="dialogue">
                  Crafted with 🖐 Moulded with 🎵
                </Typography>
                <Typography variant="body2" className="copyright">
                  Copyright © 2023💃!
                </Typography>
              </section>
            </div>
          </Grid>
          {/* <Grid item xs={12} md={4}>
            Empty column
          </Grid> */}
          {/* <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              <b>Newsletter</b>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Enter your mail to get subscribed
            </Typography>
            <div className="input-group">
              <TextField
                type="email"
                placeholder="Enter your email address"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Send />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </Grid> */}
        </Grid>
        <div>

        </div>
      </Container>
    </div>
  );
}
