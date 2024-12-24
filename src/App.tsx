import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Bookmark from "./pages/Bookmark";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Route>
    </Routes>
  );
}

export default App;
