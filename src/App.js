import { Navigate, Route, Routes } from "react-router-dom";
import AuthForm from "./Components/Auth/AuthForm";

import Layout from "./Components/Layout/Layout";
import UserProfile from "./Components/Profile/UserProfile";
import AuthPage from "./Components/Pages/AuthPage";
import HomePage from "./Components/Pages/HomePage";
import { useContext } from "react";
import AuthContext from "./Components/Store/Auth-Context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={authCtx.isLoggedIn ? <UserProfile/> : <Navigate to="/auth"/>}/>
      </Routes>
      <AuthForm/>
    </Layout>
  );
}

export default App;
