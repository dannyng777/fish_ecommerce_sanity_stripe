import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Fin-tastic Fish & Co.<br/> All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook/>
        <AiFillGithub/>
      </p>
    </div>
  )
}

export default Footer