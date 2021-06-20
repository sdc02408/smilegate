import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ListPage from "./Coupon/ListPage";
import AddPage from "./Coupon/AddPage";
import CheckCouponPage from "./Coupon/CheckCouponPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={ListPage} />
            <Route exact path="/addPage" component={AddPage} />
            <Route exact path="/checkPage" component={CheckCouponPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
