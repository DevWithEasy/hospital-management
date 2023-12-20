import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { DashBoard, Doctors, Error404, Home, Invoices, Layout, NewPatient,Patients,Patient, Payments, Settings,Appointments, Doctor, Payment, Invoice, Floors, Floor } from "./pages/Index"
function App() {
  return (
    <>
    <Toaster/>
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
        path="/patient/:id"
        element={
          <Layout>
            <Patient />
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
        path="/doctor/:id"
        element={
          <Layout>
            <Doctor />
          </Layout>
        }
      />
      <Route
        path="/floors"
        element={
          <Layout>
            <Floors />
          </Layout>
        }
      />
      <Route
        path="/floor/:id"
        element={
          <Layout>
            <Floor />
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
        path="/payment/:id"
        element={
          <Layout>
            <Payment />
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
        path="/invoice/:id"
        element={
          <Layout>
            <Invoice />
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
    </>
    
  )
}

export default App
