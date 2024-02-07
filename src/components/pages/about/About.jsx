import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import plane from "../../../assets/plane.jpg"
import vine from "../../../assets/vine.jpg"
import { styled } from '@mui/material/styles';
import Cardd from '../../Card/Cardd';

import Bigcard from "../../Card/Bigcard.jsx"
import { render } from "@testing-library/react"



const About = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const backgroundImage = `url(${plane})`;
    console.log(render, "this is testing render method")
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
    const overlay = {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        top: "0",
        left: "0",
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
                        height: "100 %",
                    }}>

                    </div>

                </Container>
                <div style={overlay}>

                </div>
            </Box>
            <Box sx={{ sm: "600px", md: "900px", lg: "1200px", xl: "1536", }}>
                <section>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <h1 style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            margin: "15px",
                        }}>About Us</h1>

                        <p style={{
                            fontSize: '16px',
                            textAlign: 'center',
                            margin: "15px",
                        }}>Lorem ipsum dolor sit, </p>
                    </Box>
                </section>
            </Box>
            <Container maxWidth="lg" sx={{ sm: "600px", md: "900px", lg: "1200px", xl: "1536", }}>
                <Box sx={{ display: "flex", alignContent: "center", alignItems: "center", backgroundColor: "", margin: "20px", }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <h1 style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                            }}>Our Events</h1>
                            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non enim dolore quam fuga iusto ab perferendis laudantium, eligendi dolor autem perspiciatis eius, sed voluptatum saepe, culpa dolorem aliquid nam necessitatibus. Officiis ab delectus deserunt. Magnam eaque vitae eligendi et ullam magni consequuntur recusandae, deserunt, quo labore iusto ut distinctio, nihil facere sapiente quia nobis fuga eius neces   eius, sed voluptatum saepe, culpa dolorem aliquid nam necessitatibus. Officiis ab delectus deserunt. Magnam eaque vitae eligendi et ullam magni consequuntur recusandaedeserunt. Magnam eaque vitae eligendi et ullam magni consequuntur recusandae, deserunt, quo labore iusto ut distinctio, nihil facere sapiente quia nobis fuga eius necessitatibus reiciendis impedit voluptate iste? Praesentium, molestiae non. Animi hic illum quas commodi officia at harum quae enim eveniet! Doloribus velit eveniet odio pariatur excepturi beatae, nemo quas blanditiis laborum eius ad. Doloribus beatae alias ue libero perferendis ullam</p>

                        </Grid>
                        <Grid item xs={6}>
                            <img style={{ display: "flex", alignItems: "center", alignContent: "centre", height: "100%", borderRadius: "20px", width: "100%" }} src={vine} alt="" srcset="" />
                        </Grid>
                        <Grid item xs={6}>
                            <img style={{ display: "flex", alignItems: "center", alignContent: "centre", height: "100%", borderRadius: "20px", width: "100%" }} src={plane} alt="" srcset="" />
                        </Grid>
                        <Grid item xs={6}>
                            <h1 style={{
                                fontSize: '24px',
                                fontWeight: 'bold',

                            }}>Our Membership</h1>
                            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non enim dolore quam fuga iusto ab perferendis laudantium, eligendi dolor autem perspiciatis eius, sed voluptatum saepe, culpa dolorem aliquid nam necessitatibus. Officiis ab delectus deserunt. Magnam eaque vitae eligendi et ullam magni consequuntur recusandae, deserunt, quo labore iusto ut distinctio, nihil facere sapiente quia nobis fuga eius neces   eius, sed voluptatum saepe, culpa dolorem aliquid nam necessitatibus. Officiis ab delectus deserunt. Magnam eaque vitae eligendi et ullam magni consequuntur recusandaedeserunt. Magnam eaque vitae eligendi et ullam magni consequuntur recusandae, deserunt, quo labore iusto ut distinctio, nihil facere sapiente quia nobis fuga eius necessitatibus reiciendis impedit voluptate iste? Praesentium, molestiae non. Animi hic illum quas commodi officia at harum quae enim eveniet! Doloribus velit eveniet odio pariatur excepturi beatae, nemo quas blanditiis laborum eius ad. Doloribus beatae alias ue libero perferendis ullam</p>

                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Bigcard />
                </Box>

            </Container>

        </>
    )
}

export default About


