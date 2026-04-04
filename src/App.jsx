import { useState } from 'react';
import { Landing } from './common/Landing';
import Navbar from './common/Navbar';
import Guide from './common/Guide';
import Contact from './common/Contact';
import { Restoration } from './common/Restoration';


function App() {
  const [activePage, setActivePage] = useState("landing");

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {activePage === "landing" && <Landing />}
      {activePage === "restoration" && <Restoration />}
      {activePage === "guide" && <Guide />}
      {activePage === "contact" && <Contact />}
    </>
  );
}

export default App;
