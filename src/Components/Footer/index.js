import React from 'react';
import { FooterStyle } from '../../styles';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <FooterStyle>
        <p>Desenvolvido por Gustavo Barreto</p>
        <div>
            <a href='https://www.instagram.com/gustavobarreto.dev/' target="_blank" rel="noreferrer"><i><BsInstagram /></i></a>
            <a href='https://www.linkedin.com/in/gustavobarretodev' target="_blank" rel="noreferrer"><i><BsLinkedin /></i></a>
            <a href='https://github.com/barretogustavo' target="_blank" rel="noreferrer"><i><BsGithub /></i></a>
        </div>
    </FooterStyle>
  );
}

export default Footer;
