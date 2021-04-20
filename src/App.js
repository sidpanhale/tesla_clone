import './App.css';
import Header from './components/Header';
import Item from "./components/Item";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Footer from "./components/Footer";

function App() {
  const underline = <p>Order Online for <u>Touchless Delivery</u></p>
  return (

    <div className="App">
    <Header/>
      <div className="app_itemsContainer">

        
      <Item
          title='Model S'
          desc={underline}
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
          first
        />

        <Item
            title='Model Y'
            desc={underline}
            descLink=""
            backgroundImg={ModelY}
            leftBtnTxt="CUSTOM ORDER"
            leftBtnLink=""
            rightBtnTxt="EXISTING INVENTORY"
            rightBtnLink=""
            twoButtons="true"
        />

        
        <Item
            title='Model 3'
            desc={underline}
            descLink=""
            backgroundImg={Model3}
            leftBtnTxt="CUSTOM ORDER"
            leftBtnLink=""
            rightBtnTxt="EXISTING INVENTORY"
            rightBtnLink=""
            twoButtons="true"
        />

        <Item
            title='Model X'
            desc={underline}
            descLink=""
            backgroundImg={ModelX}
            leftBtnTxt="CUSTOM ORDER"
            leftBtnLink=""
            rightBtnTxt="EXISTING INVENTORY"
            rightBtnLink=""
            twoButtons="true"
        />

        <Item
          title='Lowest Cost Solar Panels'
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
            title='Solar for New Roofs'
            desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            descLink=""
            backgroundImg={SolarRoof}
            leftBtnTxt="CUSTOM ORDER"
            leftBtnLink=""
            rightBtnTxt="LEARN MORE"
            rightBtnLink=""
            twoButtons="true"
        />

        <Item
          title='Accessories'
          desc=""
          descLink=""
          backgroundImg={Accessories}
          leftBtnTxt="SHOP NOW"
          leftBtnLink=""
          rightBtnTxt=""
          rightBtnLink=""
        />
      <Footer/>
      </div>

    </div>
  );
}

export default App;
