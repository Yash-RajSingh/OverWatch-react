import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import StoriesPage from "./pages/StoriesPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/info" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
