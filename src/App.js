import "./App.css";
import Topbar from "./components/home/topbar";
import Navbar from "./components/home/navbar";
import { Homescreen } from "./screens/Homescreen/Homescreen";
import { Footer } from "./components/Footer/footer";
import { Aboutus } from "./screens/Aboutus/Aboutus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./screens/Products/Products";
import { PressRoom } from "./screens/PressRoom/PressRoom";
import { Stores } from "./screens/Stores/Stores";
import { Contact } from "./screens/Contact/Contact";
import { Dahnaloudh } from "./screens/Dahnaloudh/Dahnaloudh";
import { Forher } from "./screens/Forher/Forher";
import { Forhim } from "./screens/Forhim/Forhim";
import { Concentrate } from "./screens/Concentrate/Concentrate";
import { Bakhoor } from "./screens/Bakhoor/Bakhoor";
import { Deliveryandreturn } from "./screens/DeliveryandReturn/Deliveryandreturn";
import { Privacypolicy } from "./screens/privacypolicy/Privacypolicy";
import { Termsandconditions } from "./screens/Termsandconditions/Termsandconditions";
import { Shippingpolicy } from "./screens/Shippingpolicy/Shippingpolicy";
import { Cart } from "./screens/cart/cart";
import { Checkout } from "./screens/checkout/checkout";
import { Shipping } from "./screens/shipping/Shipping";
import { Paymentscreen } from "./screens/Paymentscreen/Paymentscreen";
import { Orderconfirmation } from "./screens/Orderconfirmation/Orderconfirmation";

function App() {
  return (
    <Router>
      <>
        <Topbar />
        <Navbar />
        <Switch>
          <Route path="/" component={Homescreen} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/about-us" component={Aboutus} />
          <Route path="/products" component={Products} />
          <Route path="/press-room" component={PressRoom} />
          <Route path="/contact" component={Contact} />
          <Route path="/for-her" component={Forher} />
          <Route path="/for-him" component={Forhim} />
          <Route path="/concentrate" component={Concentrate} />
          <Route path="/dahn-al-oudh" component={Dahnaloudh} />
          <Route path="/bakhoor" component={Bakhoor} />
          <Route path="delivery-and-returns/" component={Deliveryandreturn} />
          <Route path="/privacy-policy" component={Privacypolicy} />
          <Route path="/terms-and-conditions" component={Termsandconditions} />
          <Route path="/shipping-policy" component={Shippingpolicy} />
          <Route path="/shipping" component={Shipping}/>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/payment' component={Paymentscreen}/>
          <Route path='/orders' component={Orderconfirmation}/>
          <Route path="/:productid" component={Stores} />

        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
