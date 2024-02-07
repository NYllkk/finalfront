import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    loading: false,
    user: null,
    error: null,
})


const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.loading = false,
                state.error = null
        },
        registerSuccess: (state, action) => {
            state.loading = false,
                state.user = action.payload
        },
        registerFailurer: (state, action) => {
            state.loading = false,
                state.error = action.payload
        }
    }
})


export const { registerUser, registerSuccess, registerFailurer } = authSlice.actions


export default authSlice.reducer








// 
// import * as React from 'react';
// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import * as Yup from 'yup';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// const validationSchema = Yup.object({
//     name: Yup.string().required('Name is required'),
//     surname: Yup.string().required('Surname is required'),
//     email: Yup.string().email('Invalid email address').required('Email is required'),
//     zipcode: Yup.string().required('Zipcode is required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });

// const Signup = () => {
//     const history = useHistory();
//     const [data, setdata] = useState({
//         name: '',
//         surname: '',
//         email: '',
//         zipcode: '',
//         password: '',
//     });
//     const [errors, setErrors] = useState({});

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setdata({
//             ...data,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             await validationSchema.validate(data, { abortEarly: false });

//             // Your form submission logic here

//             // Redirect to the login page
//             history.push('/login'); // Replace '/login' with the actual path of your login page
//         } catch (error) {
//             // Handle validation errors
//             const validationErrors = {};
//             error.inner.forEach((e) => {
//                 validationErrors[e.path] = e.message;
//             });
//             setErrors(validationErrors);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             {/* Your form fields with validation */}
//             <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="name"
//                 label="Name"
//                 name="name"
//                 autoComplete="text"
//                 autoFocus
//                 value={data.name}
//                 onChange={handleInputChange}
//                 error={Boolean(errors.name)}
//                 helperText={errors.name}
//             />
//             {/* ... Other form fields ... */}
//             <Button type="submit" fullWidth variant="contained">
//                 Sign In
//             </Button>
//         </form>
//     );
// };

// export default Signup;
