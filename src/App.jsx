import { Route, Routes, Outlet } from "react-router";
import PhotoFocus from "./components/photo-focus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Layout()}>
          <Route path="/photo/:slug" element={<PhotoFocus />} />
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <>
      <h1>Year-End Gallery 2023</h1>
      <Outlet />
    </>
  );
}

export default App;
