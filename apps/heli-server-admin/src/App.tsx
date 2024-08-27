import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FlightRequestList } from "./flightRequest/FlightRequestList";
import { FlightRequestCreate } from "./flightRequest/FlightRequestCreate";
import { FlightRequestEdit } from "./flightRequest/FlightRequestEdit";
import { FlightRequestShow } from "./flightRequest/FlightRequestShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HeliServer"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FlightRequest"
          list={FlightRequestList}
          edit={FlightRequestEdit}
          create={FlightRequestCreate}
          show={FlightRequestShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
