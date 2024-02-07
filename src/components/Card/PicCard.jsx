import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const PicCard = ({ pic }) => {
    return (
        <Card style={{ backgroundColor: "#ffffff", width: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "12px" }}>
            <CardMedia
                component="img"
                alt="Card Image"
                height="200"
                image={pic}
                title="Card Image"
                style={{
                    width: "215px",
                    height: "120px",
                    borderRadius: "15px",
                }}
            />
            <CardContent>
                {/* <Typography variant="h6" component="div">
                    {text}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {p}<br />
                    {p1}

                </Typography> */}
            </CardContent>
        </Card>
    )
}

export default PicCard