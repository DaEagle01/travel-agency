import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AllPlaces from "./Pages/AllPlaces/AllPlaces";
import AllBooking from "./Pages/Booking/AllBooking/AllBooking";
import ManageBooking from "./Pages/Booking/ManageBooking/ManageBooking";
import MyBooking from "./Pages/Booking/MyBooking/MyBooking";
import BookingDetail from "./Pages/BookingDetail/BookingDetail";
import Footer from "./Pages/HomePage/Footer/Footer";
import Header from "./Pages/HomePage/Header/Header";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/allplaces">
            <AllPlaces></AllPlaces>
          </Route>
          <PrivateRoute exact path="/placeorder/:_id">
            <BookingDetail></BookingDetail>
          </PrivateRoute>
          <Route exact path="/managebooking">
            <ManageBooking></ManageBooking>
          </Route>
          <Route exact path="/mybooking">
            <MyBooking></MyBooking>
          </Route>
          <Route exact path="/allbooking">
            <AllBooking></AllBooking>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
