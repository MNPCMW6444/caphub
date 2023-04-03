import PPSurvey from "./components/PPSurvey";
import { founders } from "./content/surveys";

export default function App() {
  return <PPSurvey surveyJson={founders} type="founder" />;
}
