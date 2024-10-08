import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/userContext";
import Loginpage from "./scenes/loginPage/Loginpage";
import Homepage from "./scenes/homePage/Homepage";
// import Profilepage from "scenes/profilePage/Profilepage";
// import Signuppage from "scenes/loginPage/Signuppage";

function App() {
  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/home" element={<Homepage />} />
            {/* 
            <Route path="/profile/:userId" element={<Profilepage />} />
            <Route path="/signup" element={<Signuppage />} />*/}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </UserProvider>
  );
}

export default App;
