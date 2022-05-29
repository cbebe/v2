import Link from "@docusaurus/Link";
import { FeatureItem, Features } from "@site/src/components/basics/Features";
import { H2HSvg, WappSvg } from "@site/src/svg";
import React from "react";

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Link to="https://devpost.com/software/wapp">
        <h3>WApp</h3>
      </Link>
    ),
    svg: WappSvg,
    description: (
      <div>
        <p>February 2021</p>
        Are you thirsty?! Well urine luck! ComPEEte with friends to rank #1 in the litreboard using our award winning
        WApp! <Link to="https://youtu.be/BXuvQGEnreE">Demo Video</Link>
      </div>
    ),
  },
  {
    title: (
      <Link to="https://devpost.com/software/heart-2-heart">
        <h3>Heart 2 Heart Confessations</h3>
      </Link>
    ),
    svg: H2HSvg,
    description: (
      <div>
        <p>January 2021</p>A mobile application that tackles the fear of initiating difficult conversations with
        friends, family, or significant others.
      </div>
    ),
  },
];

export const ProjectFeatures = () => <Features list={FeatureList} />;

export default ProjectFeatures;
