import React, { useState } from "react";
import Navbar from "./Componets/Navbar";
import AppRoutes from "./Routes/AppRoutes";


const App = () => {
  const [isLogin, setIsLogin] = useState(true);

 



  return (
    
    <div>
      <Navbar />
      <AppRoutes />

      
    </div>
  );
};

export default App;
