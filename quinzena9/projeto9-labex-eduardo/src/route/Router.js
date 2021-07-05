import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import {AdminHomePage} from "../pages/AdminHomePage";
import {ListTripPage} from "../pages/ListTripPage";
import {ApplicationFormPage} from "../pages/ApplicationFormPage";
import {LoginPage} from "../pages/LoginPage";
import {TripDetailsPage} from "../pages/TripDetailsPage";
import {CreateTripPage} from "../pages/CreateTripPage";
import {ErrorPage} from "../pages/ErrorPage"



export const Router = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path={"/"}>
        <HomePage/>
      </Route>
      <Route exact path={"/ListTrip"}>
        <ListTripPage/>
      </Route>
      <Route exact path={"/ApplicationForm"}>
        <ApplicationFormPage/>
      </Route>
      <Route exact path={"/Login"}>
        <LoginPage/>
      </Route>
      <Route exact path={"/AdminHome"}>
        <AdminHomePage/>
      </Route>
      <Route exact path={"/TripDetails/:postId"}>
        <TripDetailsPage/>
      </Route>
      <Route exact path={"/CreateTrip"}>
        <CreateTripPage/>
      </Route>
      <Route>
        <ErrorPage/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}