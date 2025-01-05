import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store";
import ProtectedRoute from "@/components/ProtectedRoute";
import LoginPage from "@/pages/Login";
import HomePage from "@/pages/Home";

const Login = () => <LoginPage />;
const Home = () => <HomePage />;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
