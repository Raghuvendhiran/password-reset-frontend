import React from 'react';

function Footer() {

  return (
    <>
      <footer className="fixed-bottom  bg-light text-center text-white" >
        <div className="container p-2 pb-0">
          <section className="mb-1">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s|c|589460569891|b|facebook%20signin|&placement=&creative=589460569891&keyword=facebook%20signin&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221832%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-3821998899%26loc_physical_ms%3D9061895%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMItrqvstr7-wIVvZpmAh0o8AGgEAAYASAAEgLCQvD_BwE"
              role="button"
            ><i className="fab fa-facebook-f"></i></a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/"
              role="button"
            ><i className="fab fa-twitter"></i></a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/accounts/login/"
              role="button"
            ><i className="fab fa-instagram"></i></a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/login"
              role="button"
            ><i className="fab fa-linkedin-in"></i></a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/login"
              role="button"
            ><i className="fab fa-github"></i></a>
          </section>
        </div>
        <div className="text-center p-2" style={{ backgroundColor: "#FF9933" }}>
          © 2022 Copyright:
          <a className="text-white" rel="noopener noreferrer" target="_blank" href={`${process.env.REACT_APP_BaseURl}`}> Password_Reset Page</a>
        </div>
      </footer>
    </>
  )
}

export default Footer;

