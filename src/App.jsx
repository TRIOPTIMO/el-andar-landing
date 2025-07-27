import { Box } from "@mui/material";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Mission from "./sections/mission/Mission";
import Donation from "./sections/donation/Donation";
import WhyCollaborate from "./sections/whyCollaborate/WhyCollaborate";
import Contact from "./sections/contact/Contact"
import Footer from "./sections/layout/Footer"
import Nav from "./sections/layout/Nav"

function App() {

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f0fdf4", m: 0, p: 0 }}>
      <Nav/>
      <Hero/>
      <About/>
      <Mission/>
      <Donation/>
      <WhyCollaborate/>
      <Contact/>
    <Footer/>
    </Box>
  );
}

export default App;
