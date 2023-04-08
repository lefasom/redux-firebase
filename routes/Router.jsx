import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home.jsx'
import Form from '../pages/Form.jsx'
import FormId from '../pages/FormId.jsx'


const Router = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Form" element={<Form />}></Route>
            <Route path="/Form/:id" element={<FormId />}></Route>

          </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;