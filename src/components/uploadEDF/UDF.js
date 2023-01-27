import React from "react";
import SideNavBar from "../common/SideNavBar";
import Stepper from "../common/Stepper";
import "./UDF.css";
import { Grid } from "@mui/material";
import BottomNav from "../common/BottomNav";
import userLogo from "../../assets/topheading/userLogo.png";

function UDF() {
  return (
    <div className="udf-container">
      {/* <Grid container columnGap={1.5}>
        <Grid item sm={1.5}  md={2.5}   > */}
      <div className="sidenavbarcontainer">
        <SideNavBar />
      </div>
      {/* </Grid> */}
      {/* <Grid item  sm={10.5}  md={9}  
        // sx={{
        //   maxWidth: '100%',
        // }}
         > */}
      <div className="topheadingcontainer">
        <div className="topheadingcontainer-heading">
          <p>Oura_Study</p>
        </div>
        <div className="topheadingcontainer-usercontainer">
          <span>
            <img width="30px" height="30px" src={userLogo} alt="" />
          </span>
          <span>
            <select name="user" id="user">
              <option value="Ankit Brijwasi"> Ankit Brijwasi</option>
              <option value="Prashant Mishra">Prashant Mishra</option>
              <option value="Shubh Mishra">Shubh Mishra</option>
              <option value="Ankit Jha">Ankit Jha</option>
            </select>
          </span>
        </div>
      </div>
      <div className="steppercontainer">
        <Stepper />
      </div>
      {/* </Grid> */}
      {/* <Grid item  >
          <BottomNav />
        </Grid> */}
      {/* </Grid> */}
    </div>
  );
}

export default UDF;
