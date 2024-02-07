import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Pagination, Stack } from '@mui/material';
import vine from "../../../assets/vine.jpg";
import Buttonn from '../../constants/Button';
import Cardd from '../../Card/Cardd';
import axios from 'axios';
import BlogCard from "../../Card/BlogCard";

const Blogs = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const postsPerPage = 3;

    console.log("hi in useEffect")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://642d4d6dbf8cbecdb4027745.mockapi.io/plane");
                setData(response.data || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    console.log("Type of data:", typeof data);
    console.log("Length of data:", data.length);

    const currentPosts = Array.isArray(data) ? data.slice(indexOfFirstPost, indexOfLastPost) : [];

    if (loading) {
        return <p>Loading...</p>;
    }

    if (loading) {

        return <p>Loading...</p>;
    }

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const firstName = currentPosts.length > 0 ? currentPosts[0].name : null;
    const secondName = currentPosts.length > 1 ? currentPosts[1].name : null;
    const image = currentPosts.length > 0 ? currentPosts[0].image : null;
    const secondimage = currentPosts.length > 1 ? currentPosts[1].image : null;


    return (
        <Container maxWidth="lg" style={{ display: "inherit", sm: "600px", md: "900px", lg: "1200px", xl: "1536", }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ margin: "40px" }} >

                <Grid Grid item xs={6} >
                    <img style={{ display: "flex", alignItems: "center", alignContent: "centre", height: "50vh", borderRadius: "20px", padding: "10px" }} src={vine} alt="" srcset="" />
                </Grid >
                <Grid item xs={6}>
                    <h1 style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                    }}>Soak up the Supring Sun at <br />
                        These New Jersey Wineries
                    </h1>

                    <p style={{ textAlign: "justify", color: "black" }}>Aoiihjbjg Wlihhj</p>
                    <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non enim dolore quam fuga iusto ab perferendis laudantium, eligendi dolor autem perspiciatis eius, sed voluptatum saepe, culpa dolorem aliquid nam necessitatibus. Officiis ab delectus deserunt. Magnam eaque vitae eligendi et ullam magni consequuntur recusandae, deserunt, quo labore iusto ut distinctio, nihil
                        vitae eligendi et ullam magni consequuntur recusandae, deserunt, quo labore iusto ut distinctio, nihil
                        vitae eligendi et ullam magni consequuntur recusandae, deserunt, quo labore iusto ut distinctio, nihil
                        vitae eligendi et ullam magni consequuntur recusandae, deserunt, quo labore iusto ut distinctio, nihil  </p>
                    <Buttonn text="Read More " marginTop="40px" backgroundColor="rgb(77, 1, 121)" color="white" marginBottom="40px" />
                </Grid>
            </Grid>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',

            }}>
                <h1 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    margin: "15px",
                    textAlign: "center"
                }}>Latest Blog</h1>

                <p style={{
                    fontSize: '16px',
                    textAlign: 'center',
                    marginBottom: "30px",
                }}>Lorem ipsum dolor sit,Lorem ipsum dolor sits </p>
            </Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid Grid item xs={6} >
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", }}>

                        <Cardd p1={firstName} text="Get to Know these Country Popular Wines " p=" Contrary to populars Contrary to populars Contrary to popularsContrary to populars Contrary to populars Contrary to popularsContrary to populars Contrary to populars" color="black" borderTopRightRadius="12px" width="500px" borderTopLeftRadius="12px" planee={image} />
                        <Buttonn text="click here " marginTop="-32px" marginBottom="27px" />
                        <Cardd p1={secondName} text="Get to Know these Country Popular Wines " p=" Contrary to populars Contrary to populars Contrary to popularsContrary to populars Contrary to populars Contrary to popularsContrary to populars Contrary to populars" color="black" width="500px" borderTopRightRadius="12px" borderTopLeftRadius="12px" planee={secondimage} />
                        <Buttonn text="click here " marginTop="-32px" marginBottom="27px" />

                        <Cardd p1={secondName} text="Get to Know these Country Popular Wines " p="Contrary to populars Contrary to populars Contrary to popularsContrary to populars Contrary to populars Contrary to popularsContrary to populars Contrary to populars" color="black" width="500px" borderTopRightRadius="12px" borderTopLeftRadius="12px" planee={image} />
                        <Buttonn text="click here " marginTop="-32px" marginBottom="27px" />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <h1 style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                    }}>Recent Posts
                    </h1>
                    <BlogCard padding="10px" />
                    <BlogCard padding="10px" />
                    <BlogCard padding="10px" />

                </Grid>
            </Grid>
            <Stack spacing={2} style={{ margin: "20px" }}>
                <Pagination
                    count={Math.ceil(data.length / postsPerPage)}
                    color="primary"
                    onChange={handlePageChange}
                />
            </Stack>
        </Container>
    )
}
``
export default Blogs
