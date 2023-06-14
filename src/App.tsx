import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/MainLayout";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2200,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
