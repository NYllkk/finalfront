import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Routes, Route, Navigate, Form } from "react-router-dom";
import Blogs from "./components/pages/blogs/Blogs.jsx";
import Contact from "./components/pages/contact us/Contact.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/pages/login/Login.jsx";
import Signup from "./components/pages/signup/Signup.jsx";
import GoogleMap from "../src/components/GoogleMap.jsx";
// import Api from "../src/components/Api.jsx";
import EventCatagories from "../src/components/pages/EventCatagories/EventDetails.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Dialog from "./components/pages/EventCatagories/Dialog.jsx";
import Phone from "../src/components/Phone.jsx";
import ReactLoader from "./ReactLoader.jsx";
import ShareBox from "./components/pages/EventCatagories/ShareBox.jsx";
import ForgotPassword from "./components/pages/login/ForgotPassword.jsx";
import Checkmail from "../src/components/pages/login/Checkmail.jsx";
import ResetPage from "./components/pages/login/ResetPage.jsx";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import StripePaymentForm from "./components/pages/EventCatagories/StripePaymentForm.jsx";
import Account from "./components/accounts/Account.jsx";
import Charts from "./components/accounts/Charts.jsx";
import Bookings from "./components/accounts/Bookings.jsx";
import Api from "./components/api/api.jsx";
import StripeCheckout from "./stripe/StripeCheckout.jsx";
import SuccessPage from "./stripe/SuccessPage.jsx";
import MemoriesAPI from "./components/api/MemoriesAPI.jsx";
import MemoriesDeatils from "./components/accounts/MemoriesDeatils.jsx";
// import Memories from "./components/accounts/Memories.jsx";

const LazyAbout = React.lazy(() =>
  import("../src/components/pages/about/About.jsx")
);
const LazyContact = React.lazy(() =>
  import("../src/components/pages/contact us/Contact.jsx")
);
// /resetPassword/:token

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/success" element={<SuccessPage />} /> */}
        {/* <Route path="/payment" element={<StripeCheckout />} /> */}
        {/* <Route path="/acc/booking" element={<Bookings />} /> */}
        <Route path="/acc/*" element={<Account />} />
        <Route path="/stripe" element={<StripePaymentForm />} />
        <Route path="/resetPassword/:token" element={<ResetPage />} />
        <Route path="/check" element={<Checkmail />} />
        <Route path="/forget" element={<ForgotPassword />} />
        {/* <Route path="/share" element={<ShareBox />} /> */}
        {/* <Route path="/l" element={<ReactLoader />} /> */}
        {/* <Route path="" element={<Api />} /> */}
        <Route path="/memoriesdetails/:id" element={<MemoriesDeatils />} />
        <Route path="/p" element={<Phone />} />
        <Route path="/f" element={<LoginForm />} />
        <Route path="/d" element={<Dialog />} />
        <Route path="/eventdetails/:id" element={<EventCatagories />} />
        {/* <Route path="/api" element={<Api />} /> */}
        <Route path="/" element={<Hero />} />
        <Route path="/event" element={<GoogleMap />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading......">
              {" "}
              <LazyAbout />{" "}
            </React.Suspense>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/contact"
          element={
            <React.Suspense fallback="Loading">
              {" "}
              <LazyContact />
            </React.Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
