// import axios from 'axios';
// import * as React from 'react';
// import Card from "../components/Card/Card.jsx"
// import Mycomponent from './Mycomponent.jsx';

// import { Pagination, Stack, Typography } from '@mui/material';
// const Api = () => {
//     const [data, setData] = React.useState([]);
//     const [page, setPage] = React.useState(1);
//     const handleChange = (event, value) => {
//         setPage(value);
//     };
//     React.useEffect(() => {
//         axios.get("https://642d4d6dbf8cbecdb4027745.mockapi.io/plane")
//             .then((res) => setData(res.data))
//             .catch((err) => console.error(err));
//     }, []);
//     console.log(data, "in api");

//     return (
//         <>
//             {data.map((item) => (

//                 <Mycomponent data={item} key={item.id
//                 } />
//             ))}
//             <Stack spacing={2}>
//                 <Typography>Page: {page}</Typography>
//                 <Pagination count={10} page={page} onChange={handleChange} />
//             </Stack>

//         </>
//     );
// }

// export default Api

// upper is just to show how it works

// bottom it is implimented
// import axios from 'axios';
// import * as React from 'react';
// import Card from "../components/Card/Card.jsx"
// import Mycomponent from './Mycomponent.jsx';

// import { Pagination, Stack, Typography } from '@mui/material';

// const Api = () => {
//     const [data, setData] = React.useState([]);
//     const [page, setPage] = React.useState(1);
//     const itemsPerPage = 5;

//     const handleChange = (event, value) => {
//         setPage(value);
//     };

//     React.useEffect(() => {
//         axios.get("https://642d4d6dbf8cbecdb4027745.mockapi.io/plane")
//             .then((res) => setData(res.data))
//             .catch((err) => console.error(err));
//     }, []);

//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const displayedData = data.slice(startIndex, endIndex);

//     return (
//         <>
//             {displayedData.map((item) => (
//                 <Mycomponent data={item} key={item.id} />
//             ))}

//             <Stack spacing={2}>
//                 <Typography>Page: {page}</Typography>
//                 <Pagination count={Math.ceil(data.length / itemsPerPage)} page={page} onChange={handleChange} />
//             </Stack>
//         </>
//     );
// }

// export default Api;

//  with included search
import axios from "axios";
import * as React from "react";
import Card from "../components/Card/Card.jsx";
import Mycomponent from "./Mycomponent.jsx";

import { Pagination, Stack, Typography, TextField } from "@mui/material";

const Api = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState("");
  const itemsPerPage = 5;

  const handleChange = (event, value) => {
    setPage(1);
    setSearchTerm(value);
  };

  React.useEffect(() => {
    axios
      .get("https://642d4d6dbf8cbecdb4027745.mockapi.io/plane")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(data, "in here");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={(e) => handleChange(e, e.target.value)}
      />

      {displayedData.map((item) => (
        <Mycomponent data={item} key={item.id} />
      ))}

      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={Math.ceil(filteredData.length / itemsPerPage)}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Stack>
    </>
  );
};

export default Api;
