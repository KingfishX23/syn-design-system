import React from 'react';
import './styles.scss'

const UseCasesCard = ({img, title, problem, solution}) => {
    return (
        <div className="ud-learn-usecases__card-container">
            <p className="ud-learn-usecases__card-title font-b-b-lato">{title}</p>
            <img src={img} className="ud-learn-usecases__card-image"/>
            <p className="ud-learn-usecases__card-solution-description font-n-m-lato">{solution}</p>
        </div>
    );
};

export default UseCasesCard;