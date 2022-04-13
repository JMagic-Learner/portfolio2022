import React from "react";
import { Grid } from '@mui/material';
import { saveAs } from "file-saver";

export default function Download() {
  const saveFile = () => {
    saveAs(
      "https://jason-portfolio2022.herokuapp.com/assets/download",
      "JASON_MA_RESUME.pdf"
    );
  };
  return (
    <div>
      <button onClick={saveFile}>download</button>
    </div>
  );
}