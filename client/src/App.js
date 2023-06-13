import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LoadFilePage from "./components/LoadFilePage";
import FootBar from "./components/FootBar";
import AdminPage from "./components/AdminPage";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              {
                  window.location.pathname !== '/admin' &&
                  <Navbar/>
              }
                <Routes>
                    <Route
                        path={'/'}
                        element={<Main/>}
                    />
                    <Route
                        path={'/load'}
                        element={<LoadFilePage/>}
                    />
                    <Route
                    path={'/admin'}
                    element={<AdminPage/>}
                    />
                </Routes>
              {
                  window.location.pathname !== '/admin' &&
                  <FootBar/>
              }
          </div>
      </BrowserRouter>
  );
}

export default App;
