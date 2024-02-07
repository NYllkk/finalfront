import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: null,
    token: null,
    error: null
};

const loginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
        loginRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice.reducer;



// upper is without api 
// with api 

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export default Login = createAsyncThunk("user/login", async () => {

// })
// const initialState = {
//     user: null,
//     status: "idle",
//     error: null,
// }
// const Slice = createSlice({
//     name: "Login",
//     initialState,
//     reducers: {

//     },
//     extraReducers: (builder) => {
//         builder.addCase((state) => {

//         })

//     }
// })


























// // //  // // //  ////// //  with credentialsssss
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // Replace this URL with your actual login API endpoint
// const LOGIN_API_URL = "http://192.168.1.27:5001/login";

// export const login = createAsyncThunk("user/login", async (credentials) => {
//     try {
//         const response = await fetch(LOGIN_API_URL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(credentials),
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || "Login failed");
//         }

//         const user = await response.json();
//         return user;
//     } catch (error) {
//         throw error;
//     }
// });

// const loginSlice = createSlice({
//     name: "login",
//     initialState: {
//         user: null,
//         status: "idle",
//         error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(login.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(login.fulfilled, (state, action) => {
//                 state.status = "succeeded";
//                 state.user = action.payload;
//             })
//             .addCase(login.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.error.message;
//             });
//     },
// });

// export default loginSlice.reducer;







// with token 
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // Replace this URL with your actual login API endpoint
// const LOGIN_API_URL = "http://192.168.1.27:5001/login";

// export const login = createAsyncThunk("user/login", async () => {
//     try {
//         const response = await fetch(LOGIN_API_URL, {
//             method: "POST",
//             headers: {
//                
//                 // (e.g., tokens, cookies)
//                 "Content-Type": "application/json",
//             },
//           
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || "Login failed");
//         }

//         const user = await response.json();
//         return user;
//     } catch (error) {
//         throw error;
//     }
// });

// const loginSlice = createSlice({
//     name: "login",
//     initialState: {
//         user: null,
//         status: "idle",
//         error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(login.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(login.fulfilled, (state, action) => {
//                 state.status = "succeeded";
//                 state.user = action.payload;
//             })
//             .addCase(login.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.error.message;
//             });
//     },
// });

// export default loginSlice.reducer;
