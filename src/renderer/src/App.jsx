import {Routes,Route} from "react-router-dom"
import {DashBoard, Error404, Home, Layout, NewPatient} from "./pages/Index"
function App() {
  return(
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout>
            <Home/>
          </Layout>
        }
      />
      <Route 
        path="/dashboard" 
        element={
          <Layout>
            <DashBoard/>
          </Layout>
        }
      />
      <Route 
        path="/new_patient" 
        element={
          <Layout>
            <NewPatient/>
          </Layout>
        }
      />
      <Route 
        path="/about" 
        element={
          <Layout>
            <Home/>
          </Layout>
        }
      />
      <Route 
        path="/*" 
        element={
          <Layout>
            <Error404/>
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
