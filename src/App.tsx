import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store";
import ProtectedRoute from "@/components/ProtectedRoute";
import LoginPage from "@/pages/Login";

const Login = () => <LoginPage />;
const Dashboard = () => <h2>Dashboard</h2>;
const Home = () => <h2>Home</h2>;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
