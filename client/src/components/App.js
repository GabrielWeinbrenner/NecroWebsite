import { BrowserRouter, Route, Switch } from "react-router-dom";
import GuildPage from "./pages/GuildPage";
import LandingPage from "./pages/LandingPage";
import NavBar from "../static/navbar.js";
function App() {
    return (
        <BrowserRouter style={{ width: "100%" }}>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route exact path="/guild">
                        <GuildPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
