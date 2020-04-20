import React from 'react';
import './styles.scss'

const UdaplanLogoSmall = "https://firebasestorage.googleapis.com/v0/b/udaplan.appspot.com/o/Artworks%2FLanding%2FUdaplanLogo--small.webp?alt=media&token=01db02fc-ee8f-4b97-b3db-a37d1d0c36b3"
const LearnHeader = ({onClick}) => {
    return (
        <div className="ud-learn--header__container">
            <img
                onClick={onClick}
                className="ud-learn--header__logo"
                src={UdaplanLogoSmall}
                alt=""
            />
        </div>
    );
}

export default LearnHeader;