import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import About from "./Pages/AboutUs/About";
import AllPlaces from "./Pages/AllPlaces/AllPlaces";
import AddNew from "./Pages/Booking/AddNew/AddNew";
import AllBooking from "./Pages/Booking/AllBooking/AllBooking";
import ManageBooking from "./Pages/Booking/ManageBooking/ManageBooking";
import MyBooking from "./Pages/Booking/MyBooking/MyBooking";
import BookingDetail from "./Pages/BookingDetail/BookingDetail";
import Contact from "./Pages/ContactUs/Contact";
import Footer from "./Pages/HomePage/Footer/Footer";
import Header from "./Pages/HomePage/Header/Header";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
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
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/allplaces">
            <AllPlaces></AllPlaces>
          </Route>
          <PrivateRoute path="/placeorder/:_id">
            <BookingDetail></BookingDetail>
          </PrivateRoute>
          <Route path="/managebooking">
            <ManageBooking></ManageBooking>
          </Route>
          <Route path="/mybooking">
            <MyBooking></MyBooking>
          </Route>
          <Route path="/allbooking">
            <AllBooking></AllBooking>
          </Route>
          <Route path="/addnew">
            <AddNew></AddNew>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
