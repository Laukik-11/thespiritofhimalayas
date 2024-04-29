import React from 'react'
import Logo from "../Assets/Logo_light.svg";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div class="contact-area footer_section" id="contact">
        <div class="container">
            {/* <div className="row"> */}
                {/* <div className="col-lg-6 offset-lg-3"> */}
                    <div class="contact-content text-center">
                        <a href="#"><img style={{ height:"100px"}} src={Logo} alt="logo"/></a>
                        <p style={{ padding: "0px 15%"}}>Our team members are always dedicated to assist you with your queries about India destination and packages. We take care of your tour with best quality of services and customization of travel packages.</p>
                        <div class="hr"></div>
                        <h6>A-10 Rajpur Rd, Dehradun</h6>
                        <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" href=""><i class="fa fa-facebook"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fa fa-linkedin"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fa fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                  {/* </div> */}
              {/* </div> */}
        </div>
    </div>
    {/* <footer>
        <p>Copyright &copy; 2024 <img style={{ width: "17px"}} src={Logo} alt="logo"/> All Rights Reserved.</p>
    </footer> */}
    </>
  );
}

export default Footer