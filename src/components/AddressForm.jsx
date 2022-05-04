import React from 'react';

export const AddressFrom = ({ setForecast }) => {
    const findForecast = async (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        const url = `http://localhost:8080/weather?address=${value}`;
        try {
            fetch(url).then(response => response.json())
                .then(data => console.log(data));

        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div>
            <form onSubmit={findForecast}>
                <input className='address-input' placeholder="Enter your location" />
                <button
                    className='search-btn'
                >Search</button>
            </form>
        </div>
    )
}