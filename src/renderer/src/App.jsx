import { Routes, Route } from "react-router-dom"
import { DashBoard, Doctors, Error404, Home, Invoices, Layout, NewPatient,Patients, Payments, Settings,Appointments } from "./pages/Index"
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <DashBoard />
          </Layout>
        }
      />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/new_patient"
        element={
          <Layout>
            <NewPatient />
          </Layout>
        }
      />
      <Route
        path="/patients"
        element={
          <Layout>
            <Patients />
          </Layout>
        }
      />
      <Route
        path="/doctors"
        element={
          <Layout>
            <Doctors />
          </Layout>
        }
      />
      <Route
        path="/appointments"
        element={
          <Layout>
            <Appointments />
          </Layout>
        }
      />
      <Route
        path="/payments"
        element={
          <Layout>
            <Payments />
          </Layout>
        }
      />
      <Route
        path="/invoices"
        element={
          <Layout>
            <Invoices />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout>
            <Settings />
          </Layout>
        }
      />
      <Route
        path="/*"
        element={
          <Layout>
            <Error404 />
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
