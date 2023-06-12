// in src/admin/index.tsx
import { Admin, Resource, ListGuesser, CustomRoutes } from "react-admin";
import { Route } from 'react-router-dom';
import jsonServerProvider from "ra-data-json-server";
import CustomRouteNoLayout from './customRouteNoLayout';
import SLAShow from './SLAShow';
import dataProvider from './dataProvider_bak';

//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />

    <CustomRoutes noLayout>
    <Route
                            path="/VRN/:id"
                            element={
                            <SLAShow />
                            }

                            />
    </CustomRoutes>

    <CustomRoutes noLayout>
                        <Route
                            path="/custom1"
                            element={
                                <CustomRouteNoLayout title="Posts from /custom1" />
                            }
                        />
                 
                        </CustomRoutes>
  </Admin>
);

export default App;