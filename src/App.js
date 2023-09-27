import Forms from "./components/Forms";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  
  const[mode, setMode]=useState("light");
  const[btn, setbtn]=useState("Enable Darkmode");
  
  const toggle=()=>{
    if(mode === "light" && btn==="Enable Darkmode" ){
      setMode("dark");
      setbtn("Enable Lightmode")
      document.body.style.backgroundColor="#042743";
      document.body.style.color="white";
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode("light");
      setbtn("Enable Darkmode")
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light mode enabled","success");
    }
  }

  const[alert, setAlert]=useState(null);
 
  const showAlert=(messege, type)=>{
    setAlert({
      msg:messege,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  
  }
  

  return (
    <>
    <BrowserRouter>
      {/* <Navbar title="TextUtils" home="Home"  mode={mode} toggle={toggle} btn={btn}/> */}
      <Nav title="TextUtils" home="Home"  mode={mode} toggle={toggle} btn={btn}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
            <Route exact path="/about" 
            element={
            <About/>
            }>
            </Route>
            <Route
              exact path="/"
              element={
                <Forms
                  showAlert={showAlert}
                  heading="Enter Text to analyze"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;

