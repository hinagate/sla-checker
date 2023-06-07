// in src/admin/index.tsx
import { Admin, Resource, ListGuesser, CustomRoutes } from "react-admin";
import { Route } from 'react-router-dom';
import jsonServerProvider from "ra-data-json-server";
import CustomRouteNoLayout from './customRouteNoLayout';

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
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