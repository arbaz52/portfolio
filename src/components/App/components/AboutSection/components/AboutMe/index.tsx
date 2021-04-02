import Typography from "components/Typography";
import React from "react";
import { AboutMeWrapper } from "./styled.components";

const AboutMe: React.FC = () => (
  <AboutMeWrapper>
    <h5>
      I’m <Typography variant="accent">Arbaz Ajaz</Typography>.
    </h5>
    <Typography variant="highlighted" lead>
      I’m a CS Gradudate from Comsats University, currently working as a ReactJS
      Developer at Embrace IT.{" "}
    </Typography>
    <Typography variant="body">
      I am a Front End Developer and a UI UX Designer.
    </Typography>

    <Typography variant="body">
      I have worked on PHP for about 2 years, then switched to Node as I
      developed a likeness for Javascript. During this time, I discovered my
      passion for UI/UX designing and developement for Desktops and Mobile
      Devices.
    </Typography>

    <Typography variant="body">
      I started with freelancing, developing wordpress websites, I then switched
      to designing landing pages for clients, meanwhile I continued sharpening
      my Website Development skills or you can say MERN Stack.
    </Typography>
  </AboutMeWrapper>
);

export default AboutMe;
