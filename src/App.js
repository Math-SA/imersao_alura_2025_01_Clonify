import './App.css';

import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Main from './Main/Main';
import { useState } from 'react';

function App() {
  const [searchString, setSearchString] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchString(lowerCase);
  }
  return (
    <div className="layout">
      <aside>
        <SideBar></SideBar>
      </aside>
      <div>
        <Header inputHandler={inputHandler}></Header>
        {searchString}
        <Main searchString={searchString}></Main>
      </div>
    </div>

  );
}

export default App;
