import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import NotFound from './Components/NotFound/NotFound';
import Book from './Components/DashBoard/DashBoard/Book/Book';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRouter/PrivateRouter';
import BookingList from './Components/DashBoard/BookingList/BookingList';
import AddReview from './Components/DashBoard/AddReview/AddReview';
import OrderList from './Components/DashBoard/OrderList/OrderList';
import AddService from './Components/DashBoard/AddService/AddService';
import AddAdmin from './Components/DashBoard/AddAdmin/AddAdmin';
import ManageServices from './Components/DashBoard/ManageServices/ManageServices';

export const UserContext = createContext()


function App() {
    const [loggedInUser, setLoggedInUser] = useState({})
    const [admin ,setAdmin] = useState({})
    console.log(admin)
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser ,admin,setAdmin]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>

                    <Route path="/home">
                        <Home></Home>
                    </Route>

                    {/* <PrivateRoute path="/CheckOut/:name">
                    <CheckOut></CheckOut>
                </PrivateRoute> */}

                    <PrivateRoute path="/dashboard/:name">
                        <DashBoard></DashBoard>
                    </PrivateRoute>

                    {/* <PrivateRoute path="/order">
                    <Orders></Orders>
                </PrivateRoute> */}

                    <PrivateRoute path="/dashboard">
                        <DashBoard></DashBoard>
                    </PrivateRoute>

                    <Route path="/bookingList">
                        <BookingList></BookingList>
                    </Route>

                    <Route path="/addReview">
                        <AddReview></AddReview>
                    </Route>

                    <Route path="/orderList">
                        <OrderList></OrderList>
                    </Route>

                    <Route path="/addService">
                        <AddService></AddService>
                    </Route>

                    <Route path = "/makeAdmin">
                        <AddAdmin>x</AddAdmin>
                    </Route>

                    <Route path = "/manageServices">
                        <ManageServices></ManageServices>
                    </Route>

                    <Route path="/login">
                        <Login></Login>
                    </Route>

                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;


