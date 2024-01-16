import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import HeadMonk from "./Pages/HeadMonk";
import NotFound from "./Pages/NotFound";
import PresidingMonk from "./Pages/PresidingMonk";
import DoctrinalInstructor from "./Pages/DoctrinalInstructor";
import Trustee from "./Pages/Trustee";
import Login from "@admin/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/headMonk" element={<HeadMonk />} />
            <Route path="/presidingMonk" element={<PresidingMonk />} />
            <Route
              path="/doctrinalInstructor"
              element={<DoctrinalInstructor />}
            />
            <Route path="/trustee" element={<Trustee />} />
          </Route>
          <Route path="/admin" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
