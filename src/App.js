import { Route, Routes } from "react-router-dom";
import AuthForm from "./Components/Auth/AuthForm";

import Layout from "./Components/Layout/Layout";
import UserProfile from "./Components/Profile/UserProfile";
import AuthPage from "./Components/Pages/AuthPage";
import HomePage from "./Components/Pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <AuthForm/>
    </Layout>
  );
}

export default App;
