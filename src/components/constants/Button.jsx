import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Buttonn = ({
  onClick,
  text,
  marginBottom,
  backgroundColor,
  color,
  height,
  texthero,
  width,
  borderRadius,
  marginTop,
  textAlign,
  marginLeft,
  margin,
  paddingTop,
  padding,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
    width: width,
    borderRadius: borderRadius,
    // marginTop: marginTop,
    textAlign: textAlign,
    marginLeft: marginLeft == null ? "" : marginLeft,
    margin: margin == null ? "" : margin,
    paddingTop: paddingTop,
    padding: padding,
    marginTop: marginTop == null ? "" : marginTop,
    height: height,
    marginBottom: marginBottom,
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        style={buttonStyle}
        onClick={onClick}
        disableRipple
      >
        {text}
        {texthero}
      </Button>
    </Stack>
  );
};

export default Buttonn;
