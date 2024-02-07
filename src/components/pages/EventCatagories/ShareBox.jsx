// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import TextField from "@mui/material/TextField";
// import IconButton from "@mui/material/IconButton";
// import AddIcon from "@mui/icons-material/Add";
// import CloseIcon from "@mui/icons-material/Close";

// const ShareBox = ({ isOpen, onClose }) => {
//   const [shareableLink, setShareableLink] = useState("");

//   const handleClose = () => {
//     onClose();
//   };

//   const handleCopyLink = () => {
//     try {
//       navigator.clipboard.writeText(shareableLink);
//       alert(`Link copied to clipboard: ${shareableLink}`);
//     } catch (err) {
//       console.error("Unable to copy to clipboard:", err);
//       alert("Failed to copy link to clipboard. Please try again.");
//     }
//   };

//   const handleShare = () => {
//     // Logic for sharing, e.g., opening a share dialog or triggering a share API
//     alert(`Sharing link: ${shareableLink}`);
//   };

//   return (
//     <>
//       <IconButton onClick={onClose} color="inherit" edge="end">
//         <CloseIcon />
//       </IconButton>
//       <Dialog open={isOpen} onClose={handleClose}>
//         <DialogTitle>Share</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Shareable Link"
//             variant="outlined"
//             fullWidth
//             value={shareableLink}
//             onChange={(e) => setShareableLink(e.target.value)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCopyLink} variant="outlined">
//             Copy Link
//           </Button>
//           <Button onClick={handleShare} variant="contained" color="primary">
//             Share
//           </Button>
//           <Button onClick={handleClose} variant="contained" color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default ShareBox;

// import React from "react";
// import {
//   EmailIcon,
//   FacebookIcon,
//   FacebookShareButton,
//   TwitterIcon,
//   TwitterShareButton,
// } from "react-share";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogActions from "@mui/material/DialogActions";
// import { BsShare } from "react-icons/bs";
// import { Carousel } from "react-responsive-carousel";

// const shareUrl = "https://mui.com/material-ui/react-skeleton/";

// const ShareBox = () => {
//   const [share, setshare] = React.useState(false);

//   const handleClickOpenshare = () => {
//     setshare(true);
//   };

//   const handleCloseshare = () => {
//     setshare(false);
//   };
//   const handleWhatsAppShare = () => {
//     console.log("working");
//   };
//   const shareUrl = "https://mui.com/material-ui/react-skeleton/";
//   return (
//     <>
//       <BsShare size={40} onClick={handleClickOpenshare} />

//       <Dialog
//         open={share}
//         onClose={handleCloseshare}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title"></DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             <FacebookShareButton url={shareUrl}>
//               <FacebookIcon size={40} round />
//             </FacebookShareButton>

//             <TwitterShareButton url={shareUrl}>
//               <TwitterIcon size={40} round={true} />
//             </TwitterShareButton>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseshare}>Disagree</Button>
//           <Button onClick={handleCloseshare} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default ShareBox;

import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

const ShareBox = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 20
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
};
export default ShareBox;
