import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { FaLine } from 'react-icons/fa'
import './styles.scss'

const UdaplanLogoSmall = "https://firebasestorage.googleapis.com/v0/b/udaplan.appspot.com/o/Artworks%2FLanding%2FUdaplanLogo--small.webp?alt=media&token=01db02fc-ee8f-4b97-b3db-a37d1d0c36b3"

const LearnFooter = () => {
    return (
        <div className="ud-learn-footer__container">
            <div>
                <img src={UdaplanLogoSmall} className="ud-learn-footer__logo" alt="" />
                <p className="ud-learn-footer__location-text font-n-s-lato">2019. All rights reserved</p>
            </div>
            <div className="ud-learn-footer__social-media-container font-n-s-lato">
                <div className="ud-learn-footer__social-media-items-container">
                    @udaplan<FiInstagram className="ud-learn-footer__social-media-icons" />
                </div>
                <div className="ud-learn-footer__social-media-items-container">
                    @342grwxe<FaLine className="ud-learn-footer__social-media-icons" />
                </div>
            </div>
        </div>
    );
};

export default LearnFooter; 

