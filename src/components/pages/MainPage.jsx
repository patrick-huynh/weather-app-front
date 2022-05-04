import React, { useState } from 'react';
import { AddressFrom } from '../AddressForm';

export const MainPage = () => {
    const [forecast, setForecast] = useState(null);
    return (
        <div className='main'>
            <h4>{forecast}</h4>
            <AddressFrom 
                setForecast={setForecast}
            />
        </div>
    );
}