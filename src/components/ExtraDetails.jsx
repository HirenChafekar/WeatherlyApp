import React from 'react';
import Svgs from './Svgs';

const ExtraDetails = ({type,iconpath,value}) => {
    return(
        <div className="extradetails__main">
            <p>{type}</p>
            <Svgs src={iconpath} />
            <p>{value}</p>
        </div>
    );
}

export default ExtraDetails;