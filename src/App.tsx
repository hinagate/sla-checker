// in src/admin/index.tsx
import { Admin, Resource, ListGuesser, CustomRoutes } from "react-admin";
import { Route , useNavigate} from 'react-router-dom';
import jsonServerProvider from "ra-data-json-server";
import CustomRouteNoLayout from './customRouteNoLayout';
import SLA from './SLA';
import dataProvider from './dataProvider_bak';

//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");


const Dashboard = () => {
  const navigate = useNavigate();

  navigate('/searchvrn');

  return null; // you can return null, or some loading spinner if you'd like
}

const App = () => (

  <Admin dataProvider={dataProvider} 
  dashboard={Dashboard}
  
  >
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />

    <CustomRoutes noLayout>
    <Route
                            path="/VRN/:id"
                            element={
                            <SLA.show/>
                            }

                            />
    </CustomRoutes>

    <CustomRoutes noLayout>
                        <Route
                            path="/searchvrn"
                            element={
                                <CustomRouteNoLayout title="Check SLA by license plate (Test data AM90)" />
                            }
                        />
                 
                        </CustomRoutes>
  </Admin>
);

export default App;