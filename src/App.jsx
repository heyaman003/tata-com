import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";
import { BrowserRouter,Route,Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Planets from "./Pages/Planets/Planets";
import Sustainability from "./Pages/Sustanablity Strategy/Sustainability";
import Community from "./Pages/Community/Community";
import Planetsclimatechange from "./Pages/Planets/Planetsclimatechange";
import PlanetCilcularEconomy from './Pages/Planets/PlanetCilcularEconomy';
import PlanetsWaterManagment from './Pages/Planets/PlanetsWaterManagment';
import SustaniablityStrategiest from "./Pages/Sustanablity Strategy/SustaniablityStrategiest";
import SustanablityFyGoals from "./Pages/Sustanablity Strategy/SustanablityFyGoals";
import SustanablityDevlopmentGoals from './Pages/Sustanablity Strategy/SustanablityDevlopmentGoals';
import CommunityEductaions from './Pages/Community/CommunityEductaions';
import CommunitySustinableLivehood from "./Pages/Community/CommunitySustinableLivehood";
import CommunityHealthCare from './Pages/Community/CommunityHealthCare';
import CommunityEnvironmental from "./Pages/Community/CommunityEnvironmental";
import Accrodian from "./Components/CustomeAccrodian/Accrodian";
import LandingPage from './Pages/Landingpages/LandingPage';
import Governance from "./Pages/Governance/Governance";
import People from "./Pages/People/People";
import Footer from "./Components/footer/Footer";
function App() {
  const [activeTab, setActivetab] = useState("Home");
  const [Videokey, SetVideoKey] = useState(null);
  const HeroSectionContent = {
    Planet: {
      Heading: "Planet",
      Video: "/Planetmainsection.mp4",
      Content:
        "At Tata Communications, we are committed to environmental stewardship and reducing our environmental footprint and supporting global decarbonisation. Our sustainability goals enable us to address climate change, promote circular economy principles and enhance value created for the stakeholders. We maintain strict compliance with environmental standards, ensuring no incidents of non-compliance across our operations.",
    },
    People: {
      Heading:"People",
      Video: "/.mp4",
      Content:
        "At Tata Communications, we recognise that our success is deeply intertwined with the collective efforts of our people including employees, customers and supply chain partners. Together, we form a dynamic ecosystem dedicated to driving innovation, connectivity and sustainable growth. As a global leader in digital solutions, we are committed to fostering meaningful relationships built on trust, collaboration and mutual respect. By leveraging our collective expertise and diverse perspectives, we continuously strive to deliver exceptional value and improve stakeholder experience.",
    },
    Community: {
      Heading: "community",
      Video: "/Community.mp4",
      Content:
        "Our belief in making a positive impact drives us to utilize our influence and knowledge to enact meaningful change in the regions we serve. Committed to societal progress, we leverage our scale and expertise to drive impactful change. Our efforts are dedicated to advancing sustainability through various initiatives that bolster education, preserve the environment, promote livelihood sustainability, and enhance healthcare services.",
    },
    Governance: {
      Heading: "Governance",
      Video: "/Governance.mp4",
      Content:
        "At Tata Communications, we uphold the utmost standards of legal compliance and ethical conduct. We ensure that our operations are conducted with transparency and integrity. Our comprehensive compliance framework rigorously aligns our activities with both legal and regulatory demands, reaffirming our dedication to accountability and openness in our professional conduct.",
    },
    Sustainability: {
      Heading: "sustainability strategy",
      Video: "/Sustainability.mp4",
      Content:
        "Creating enduring value for all stakeholders is our paramount objective, achieved through the cultivation of sustainable business practices. Embedded within our business strategy, sustainability is integral to our mission. We are dedicated to delivering long-term value to stakeholders through an inclusive, sustainable, and interconnected ecosystem. At Tata Communications, sustainability is a cornerstone, guided by the belief that positive economic outcomes arise from the effective management of our ESG endeavors.",
    },
  };
  useEffect(()=>{
    if(HeroSectionContent[activeTab]){
      SetVideoKey(HeroSectionContent?.[activeTab].Video);
    }
  
  },[activeTab])
  return (
    <>
      <div className="app-container">
      <BrowserRouter>
      <Navbar activeTab={activeTab} setActivetab={setActivetab}  />
      <Routes>
      <Route
              path="/"
              element={<LandingPage activeTab={activeTab} />}
            />
          <Route
            path="/Planet"
            element={<Planets activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          />
          <Route
            path="/Planet/climate-change"
            element={<Planetsclimatechange/>}
          />
          <Route
            path="/Planet/circular-economy"
            element={<PlanetCilcularEconomy/>}
          />
          <Route
            path="/Planet/water-managment"
            element={<PlanetsWaterManagment/>}
          />
          <Route
            path="/Sustainability"
            element={<Sustainability activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          />
          <Route
            path="/Sustainability/sustainability-strategy"
            element={<SustaniablityStrategiest activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          />
          <Route
            path="/Sustainability/sustainability-vision"
            element={<SustaniablityStrategiest activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          />
          <Route
            path="/Sustainability/fy24-goals-&-progress"
            element={<SustanablityFyGoals activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          />
          <Route
            path="/Sustainability/unsustainable-development-goals"
            element={<SustanablityDevlopmentGoals activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          />
          <Route
            path="/Community"
            element={<Community activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          /> 
          <Route
            path="/Community/education"
            element={<CommunityEductaions activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          /> 
          <Route
            path="/Community/sustainable-livelihoods"
            element={<CommunitySustinableLivehood activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          /> 
          <Route
            path="/Community/healthcare-and-disaster-relief"
            element={<CommunityHealthCare activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          /> 
          <Route
            path="/Community/environment"
            element={<CommunityEnvironmental activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          /> 
          <Route
            path="/Governance"
            element={<Governance activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          /> 
          <Route
            path="/People"
            element={<People activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          /> 
          {/* <Route
            path="/Community/education"
            element={<Community activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          /> 
          <Route
            path="/Community/education"
            element={<Community activeTab={activeTab} HeroSectionContent={HeroSectionContent} />}
          />  */}
      </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
    </>
  );
}

export default App;