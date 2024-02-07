// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const ListComponent = () => {
//     const [age, setAge] = React.useState('');

//     const handleChange = (event) => {
//         setAge(event.target.value);
//     };

//     return (
//         <div>
//             <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
//                 <InputLabel id="demo-simple-select-standard-label">Event Category</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-standard-label"
//                     id="demo-simple-select-standard"
//                     value={age}
//                     onChange={handleChange}
//                     label="Age"
//                     sx={{
//                         '&:before': {
//                             borderBottom: 'none',
//                         },
//                         '&:after': {
//                             borderBottom: 'none',
//                         },
//                     }}
//                 >
//                     <MenuItem value="">
//                         <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={10}>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//             </FormControl>
//         </div>
//     );
// };

// export default ListComponent;
// // 


// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// const ListComponent = () => {
//     const [open, setOpen] = React.useState(false);

//     const handleClick = () => {
//         setOpen(!open);
//     };

//     return (
//         <List>
//             <ListItem button on={handleClick}>
//                 <ListItemText primary="Item 1" />
//                 {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </ListItem>
//             <Collapse in={open} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                     <ListItem>
//                         <ListItemText primary="Subitem 1" />
//                     </ListItem>
//                     <ListItem>
//                         <ListItemText primary="Subitem 2" />
//                     </ListItem>
//                 </List>
//             </Collapse>
//         </List >
//     );
// };

// export default ListComponent;


import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

const ListComponent = () => {
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
    };
    const flatProps = {
        options: top100Films.map((option) => option.title),
    };
    const [value, setValue] = React.useState(null);

    return (
        <Stack spacing={1} sx={{ width: 300 }}>
            <Autocomplete
                {...defaultProps}
                id="clear-on-escape"
                clearOnEscape
                renderInput={(params) => (
                    <TextField {...params} label="clearOnEscape" variant="standard" />
                )}
            />

        </Stack>
    );
}


const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
];

export default ListComponent