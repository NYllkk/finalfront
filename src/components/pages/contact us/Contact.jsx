import styled from '@emotion/styled';
import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, InputLabel, Paper, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import React, { useState } from 'react'
import vine from "../../../assets/vine.jpg"
import Bigcard from '../../Card/Bigcard';
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import * as Yup from "yup"
import Buttonn from '../../constants/Button';
const defaultTheme = createTheme();
const Contact = () => {
    const initialstate = {
        name: "",
        surname: "",
        email: "",
        number: "",
        text: "",
    }
    const [data, setdata] = useState(initialstate)
    const validationSchema = Yup.object({
        name: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters')
            .required('Name should be filled'),
        surname: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Surname should only contain letters')
            .required('Surname should be filled'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email should be filled'),
        number: Yup.string()
            .matches(/^[0-9]+$/, 'Phone Number should only contain numbers')
            .required('Phone Number should be filled'),
        text: Yup.string().required('Message should be filled').max(100, "only hundered words can we typed")
    })
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log("submit")
            await validationSchema.validate(data, { abortEarly: false })
            console.log("submit")
        } catch (error) {
            const validationErrors = {};
            error.inner.forEach((e) => {
                validationErrors[e.path] = e.message;
            })
            setErrors(validationErrors)
        }
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const backgroundImage = `url(${vine})`;

    const heroContainerStyle = {
        minHeight: '50vh',
        background: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: "relative"
    };
    const textContainerStyle = {
        display: "flex",
        alignItems: "centre",
        flexDirection: "column",
        padding: '28px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '1.5',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
    };
    const [errors, setErrors] = useState({})
    const overlay = {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        top: "0",
        left: "0",
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setdata({
            ...data,
            [name]: value
        })
        validationSchema
            .validateAt(name, { [name]: value })
            .then(() => {

                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: undefined,
                }));
            })
            .catch((error) => {

                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: error.message,
                }));
            });

    }
    return (
        <>
            <Box style={heroContainerStyle} sx={{ sm: "600px", md: "900px", lg: "1200px", xl: "1536", }}>
                <Container style={{ position: "relative", zIndex: "2" }}>
                    <div style={textContainerStyle}>
                        <Typography variant="h3" component="h1" gutterBottom style={{ textAlign: "center" }}>
                            Crafting Timeless Wines :Our <br />
                            <div style={{}}>
                                Our Story and passion for Wine Making
                            </div>
                        </Typography>

                    </div >
                    <div style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>

                    </div>

                </Container>
                <div style={overlay}>

                </div>
            </Box>

            <Container maxWidth="lg" sx={{ padding: "12px", sm: "600px", md: "900px", lg: "1200px", xl: "1536", }}>

                <ThemeProvider theme={defaultTheme}>
                    <Grid container component="main" style={{ margin: "0px", gap: "12px", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "centre", padding: "30px" }}>
                        <CssBaseline />

                        <Grid item xs={12} sm={8} md={5} elevation={6} square>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >

                                <Typography component="h1" variant="h5" sx={{ textAlign: "left", width: "100%", padding: "10px" }}>
                                    <h1>Contact Us</h1>
                                </Typography>
                                <Typography>
                                    <p style={{ marginRight: "172px", padding: "10px" }}> our team will Love hear from You</p>
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <Box component="form" noValidate sx={{
                                        mt: 1,
                                        display: "contents"
                                    }}>
                                        <div className="upperField" style={{ display: "flex", gap: "12px", padding: "" }}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="name"
                                                label="Name"
                                                name="name"
                                                autoComplete="text"
                                                autoFocus
                                                value={data.name}
                                                onChange={handleChange}
                                                error={errors.name}
                                                helperText={errors.name}
                                            />

                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="surname"
                                                label="surname"
                                                name="surname"
                                                autoComplete="surname"
                                                autoFocus
                                                value={data.surname}
                                                onChange={handleChange}
                                                error={errors.surname}
                                                helperText={errors.surname}
                                            />

                                        </div>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="email"
                                            name="email"

                                            autoComplete="text"
                                            value={data.email}
                                            autoFocus
                                            onChange={handleChange}
                                            error={errors.email}
                                            helperText={errors.email}


                                        />
                                        {/* textbox */}


                                        <InputLabel style={{ display: "flex", width: "100%", padding: "", color: "black" }} id="demo-simple-select-helper-label">Phone Number</InputLabel>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="number"
                                            label="Phone Number"
                                            name="number"

                                            autoComplete="int"
                                            value={data.number}
                                            autoFocus
                                            onChange={handleChange}

                                            error={errors.number}
                                            helperText={errors.number}
                                        />
                                        {/* change needed */}
                                        <InputLabel style={{ display: "flex", width: "100%", padding: "", color: "black" }} id="demo-simple-select-helper-label"> Message</InputLabel>
                                        <TextField
                                            sx={{ backgroundColor: "", height: "", paddingBottom: "" }}
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="text"
                                            name="text"
                                            autoComplete="int"
                                            multiline
                                            rows={4}
                                            onChange={handleChange}
                                            value={data.text}
                                            error={errors.text}
                                            helperText={errors.text}
                                        />
                                        {/* textbox */}
                                        <Grid container>
                                            <Grid item sx={{ display: "flex", alignContent: "center", alignItems: "center", minWidth: "100%", justifyContent: "end", padding: "10px" }}>
                                                {/* <Link sx={{ color: "purple" }} to="/register">Forgot Passowrd</Link> */}
                                            </Grid>
                                        </Grid>
                                        {/* <Button
                                            style={{ background: " rgb(95, 3, 166)" }}

                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}

                                        >
                                            Sign In
                                        </Button> */}
                                        <Button
                                            style={{ background: "rgb(95, 3, 166)" }}
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            onClick={handleSubmit}
                                        >
                                            sign in
                                        </Button>

                                        <FormControlLabel required control={<Checkbox />} label="Agree to our friendly Privacy and Policy " />


                                    </Box>
                                </form>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={4}
                            sx={{

                                backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                                borderRadius: "8px",
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    </Grid>
                </ThemeProvider>


            </Container >

            <Box sx={{ backgroundColor: "#fff4ff", textAlign: "center", sm: "600px", md: "900px", lg: "1200px", xl: "1536", }}>
                <Typography sx={{ margin: "5px", padding: "10px" }}>
                    <p>Contact Us</p>
                </Typography>
                <Typography sx={{ margin: "5px", padding: "10px" }}>
                    <h1>We'd Love to Hear From You</h1>
                </Typography>
                <Typography sx={{ margin: "5px", padding: "10px" }}>
                    <p>our Friendly Team is here to help you </p>
                </Typography>


                <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <Box sx={{}}>
                                    <MdOutlineForwardToInbox size={30} style={{ borderColor: "white", borderStyle: "solid", borderRadius: "12px", }} />
                                </Box>
                                <h4>email</h4>
                                <p>Our Friendly Team is Here to Help</p>
                                <Typography sx={{ margin: "12px", padding: "10px" }}>
                                    support @winery.co
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Box>
                                    <IoLocationOutline size={30} style={{ borderColor: "white", borderStyle: "solid", borderRadius: "12px", }} />
                                </Box>
                                <h4>Address</h4>
                                <p>Come Say hello to our HQ</p>
                                <Typography sx={{ margin: "12px", padding: "10px" }}>
                                    JL hruiguirgferfg34tgf4u3grfy
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Box>
                                    <FaPhoneAlt size={30} style={{ borderColor: "white", borderStyle: "solid", borderRadius: "12px", }} />
                                </Box>
                                <h4>Phone</h4>
                                <p>Please Feel Free to Contact Us </p>
                                <Typography sx={{ margin: "12px", padding: "10px" }}>
                                    6557867567874

                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Container maxWidth="lg">
                <Bigcard />
            </Container>
        </>
    )
}

export default Contact