import { founders, vcs } from "../content/surveys";
import PPSurvey from "./PPSurvey";

const POC = ({ isvcs }: any) => {
  return isvcs ? (
    <PPSurvey surveyJson={vcs} type="vc" />
  ) : (
    <PPSurvey surveyJson={founders} type="founder" />
  );
};
export default POC;
