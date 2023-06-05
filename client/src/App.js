import React, {useRef} from 'react';
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LoadFilePage from "./components/LoadFilePage";
import FootBar from "./components/FootBar";


function App() {

  return (
      <BrowserRouter>
          <div className="App">
              <Navbar/>
                <Routes>
                    <Route
                        path={'/'}
                        element={<Main/>}
                    />
                    <Route
                        path={'/load'}
                        element={<LoadFilePage/>}
                    />
                </Routes>
              <FootBar/>
          </div>
      </BrowserRouter>
  );
}

export default App;
