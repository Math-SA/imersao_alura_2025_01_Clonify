import { useState } from 'react';
import './App.css';

import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Main from './Main/Main';
import FooterPopup from './FooterPopup/FooterPopup';


import { useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

function App() {
  // SearchString com debounce 
  const [searchString, setSearchString] = useState("");
  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchString(lowerCase);
  }
  const debouncedSearchString = useDebounce(searchString, 300);

  // controle de visibilidade do FooterPopup
  const [showFooterPopup, setShowFooterPopup] = useState(true);
  const onClose = (e) => {
    setShowFooterPopup(false);
  }
  return (
    <div className="layout">

      <aside>
        <SideBar></SideBar>
      </aside>
      <div>
        <Header inputHandler={inputHandler}></Header>
        <Main searchString={debouncedSearchString}></Main>
      </div>

      {showFooterPopup && (
        <FooterPopup message="This is a spotify clone made for educational purposes and is not affiliated in any way with Spotify." button="Inscreva-se Grátis" cancel="Agora não" isVisible={showFooterPopup} onClose={onClose}></FooterPopup>
      )}
    </div>
  );
}

export default App;
