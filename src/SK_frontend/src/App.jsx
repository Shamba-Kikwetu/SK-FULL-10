import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from "./Routes/home/home.component";
import Navbar from "./Components/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./Routes/Login/getin.component";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path={"/home"} element={<Hello />} />
                <Route path={"/login"} element={<SignInPage/>}/>
            </Routes>
        </div>
    );
}

export default App;