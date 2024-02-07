import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import countries from './Countries';
// countries
const Phone = () => {
    const initialState = ({
        selectedCountry: "",
        phoneNumber: "",
    })
    const [selectedCountry, setSelectedCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const getCountryPhone = (code) => {
        const selected = countries.find((country) => country.code === code);
        return selected ? selected.phone : '';
    };

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <label htmlFor="Select Country">Select Country</label>
                <Select
                    value={selectedCountry}
                    label="Select Country"

                    id='SelectCountry'
                    onChange={handleCountryChange}
                    displayEmpty
                    sx={{ minWidth: '80px', marginRight: '8px' }}
                    renderValue={(selected) => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={`https://flagcdn.com/w20/${selected.toLowerCase()}.png`}
                                alt=""
                                style={{ marginRight: '4px' }}
                            />
                            +{selected ? getCountryPhone(selected) : ''}
                        </div>
                    )}
                // data-testid="select-country"
                >
                    {countries.map((country) => (
                        <MenuItem aria-label="Select Country" key={country.code} value={country.code}

                        >
                            <img
                                src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                                alt=""
                                style={{ marginRight: '4px' }}
                            />
                            {country.code}
                        </MenuItem>
                    ))}
                </Select>

                <TextField
                    label="Enter phone number"
                    id="phoneInput"
                    placeholder="Enter the remaining digits"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                +{selectedCountry ? getCountryPhone(selectedCountry) : ''}
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </div>
    );
};

export default Phone;



