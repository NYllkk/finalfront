import { Box, Container, Grid } from "@mui/material";
import vine from "../../../src/assets/vine.jpg";

const BlogCard = ({ padding }) => {
  return (
    <Container
      maxWidth="sm"
      style={{ display: "", backgroundColor: "", padding: padding }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid Grid item xs={4}>
          <img
            style={{ width: "130px", borderRadius: "10px" }}
            src={vine}
            alt=""
            srcset=""
          />
        </Grid>
        <Grid item xs={6}>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Soak up the Supring Sun at
          </h1>

          <p style={{ textAlign: "justify", color: "green" }}>
            Aoiihjbjg Wlihhj
          </p>
          {/* <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non enim dolore quam fuga iusto ab perferendis laudantium, eligendi dolor autem perspiciatis eius, sed voluptatum saepe, culpa dolorem aliquid nam necessitatibus. Officiis ab delectus deserunt. Magnam eaque   </p> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogCard;
