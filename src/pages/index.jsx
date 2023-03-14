import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
