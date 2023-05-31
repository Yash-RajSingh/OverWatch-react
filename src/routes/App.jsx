import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { Provider } from "react-redux";
import store from "../redux/store/store";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/profile" element={<HomePage />} />
            <Route path="/stories" element={<HomePage />} />
            <Route path="/info" element={<HomePage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
