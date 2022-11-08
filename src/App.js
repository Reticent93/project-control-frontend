
import { Admin, Resource, ListGuesser } from "react-admin";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import SignUp from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List";
import Single from "./components/Single/Single";
import New from "./components/New/New";


function App() {



    return (
        <div>
            <Navbar/>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home/>}/>
                        <Route path='login' element={<Login/>}/>
                        <Route path='Orders'>
                            <Route index element={<List/>}/>
                            <Route path=':userId' element={<Single/>}/>
                            <Route path='new' element={<New/>}/>
                        </Route>
                    </Route>
                    <Route path='products'>
                        <Route index element={<List/>}/>
                        <Route path=':productId' element={<Single/>}/>
                        <Route path='new' element={<New/>}/>
                    </Route>
                    <Route path='supplier'>
                        <Route index element={<List/>}/>
                        <Route path=':supplierId' element={<Single/>}/>
                        <Route path='new' element={<New/>}/>
                    </Route>

                </Routes>
        </div>
    );
}

export default App;
