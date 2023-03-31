import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import POC from "./components/POC";
import "./App.css"; // Import custom styles
import "./custom-styles.css";

const App = () => {
  const [x, setX] = useState("");

  return x ? (
    x === "vcs" ? (
      <POC isvcs />
    ) : (
      <POC />
    )
  ) : (
    <Container>
      <Box
        className="app-container section"
        display="flex"
        flexDirection="column"
      >
        {/* ... existing code */}

        <Typography
          className="header font-roboto"
          variant="h4"
          align="center"
          gutterBottom
        >
          Are you a founder or a VC manager?
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              className="button-primary"
              variant="contained"
              onClick={() => setX("vcs")}
              fullWidth
            >
              VC Manager
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              className="button-primary"
              variant="contained"
              onClick={() => setX("founders")}
              fullWidth
            >
              Founder
            </Button>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <Typography variant="h3" align="center" gutterBottom>
          Get Funded with CapHub
        </Typography>

        <Typography
          className="font-roboto"
          variant="body1"
          align="center"
          gutterBottom
        >
          CapHub is an innovative funding solutions provider for startups and
          businesses of all sizes and shapes. Our AI-driven platform matches you
          with the best funding options available based on your unique situation
          and needs.
        </Typography>

        <Typography variant="body1" align="center" gutterBottom>
          There's no impact to your credit to see how much you can get.
        </Typography>

        <Typography
          className="header"
          variant="h5"
          align="center"
          gutterBottom
          style={{ marginTop: "3rem" }}
        >
          How it Works
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "1. Apply",
              body: "It only takes 60 seconds to submit your funding application. Our platform uses AI to find the top funding options for you.",
            },
            {
              title: "2. Fund",
              body: "Our platform finds and compares funding options for you. We work with you to select the best option based on your needs and goals.",
            },
            {
              title: "3. Grow",
              body: "Get funded and start or grow your business. Come back for more when you're ready for the next step.",
            },
          ].map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="step-card" elevation={5}>
                <CardContent>
                  <Typography
                    className="header font-roboto"
                    variant="h6"
                    gutterBottom
                    align="center"
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    className="typography-body font-roboto"
                    variant="body1"
                    align="center"
                    gutterBottom
                  >
                    {step.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <br />
        <Typography variant="body1" align="center" gutterBottom>
          Use the funding for anything you need to start or grow your business.
          Funding is great for marketing, equipment, franchises, consulting,
          expansion, employees, real estate, rainy day fund and more.
        </Typography>
      </Box>
    </Container>
  );
};
export default App;
