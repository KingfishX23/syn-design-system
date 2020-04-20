import React from 'react';
import './styles.scss'
import { FiChevronLeft } from 'react-icons/fi';
import { MdPerson } from 'react-icons/md'

const ProfileAppBarHeader = ({ onClick }) => {
    return (
        <div className="tr-profileappbar--header__container">
            <div className="tr-profileappbar--header__back-container">
                <FiChevronLeft className="tr-profileappbar--header__chevron font-b-b-o" onClick={onClick} />
                <p className="font-n-m-o" onClick={onClick}>Profile</p>
            </div>
            <div className="tr-profileappbar--header__tier-container">
                <div className="tr-profileappbar--header__tier-label font-b-b-o"><MdPerson/></div>
                <div className="tr-profileappbar--header__tier-itself font-b-s-o">BASIC</div>
            </div>
        </div>
    );
};

export default ProfileAppBarHeader;