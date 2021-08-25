import { Link, useHistory } from "react-router-dom";
import { IoEarthOutline } from "react-icons/io5";
import { MdSearch } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import "./topbar.css";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import { logins, register } from "../../actions/useraction";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { USER_LOGOUT } from "../../constant/user";
import { FiLogOut } from "react-icons/fi";

const Topbar = () => {
  const [display, setdisplay] = useState("none");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const dispatch = useDispatch();
  const history = useHistory();
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email2, setemail2] = useState("");
  const [phone, setphone] = useState("");
  const [pass2, setpass2] = useState("");
  const [confpass, setconfpass] = useState("");

  useEffect(() => {
    if (userInfo == true) {
      setdisplay("none");
      localStorage.setItem("login", true);
    }
  }, [userInfo]);

  const changeHandler = (e) => {
    setemail(e.target.value);
  };
  const changeHandler1 = (e) => {
    setpass(e.target.value);
  };
  const changeHandler2 = (e) => {
    setfname(e.target.value);
  };
  const changeHandler3 = (e) => {
    setlname(e.target.value);
  };
  const changeHandler4 = (e) => {
    setemail2(e.target.value);
  };
  const changeHandler5 = (e) => {
    setphone(e.target.value);
  };
  const changeHandler6 = (e) => {
    setpass2(e.target.value);
  };
  const changeHandler7 = (e) => {
    setconfpass(e.target.value);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <>
      <div className="topbar-box">
        <div className="topbar-language">
          <div className="topbar-currancy">
            <img
              src="images/indianflag.jpg"
              alt="language"
              className="topbar-currancy-pic"
            />
          </div>
          <div className="topbar-currancy-name">
            <p>INR (₹)</p>
          </div>
          <div className="topbar-language-pic">
            <IoEarthOutline />
          </div>
          <div className="topbar-language-name">
            <p>English / India</p>
          </div>
        </div>
        <div className="topbar-logo-box">
          <Link to="/">
            <img src="logo.png" alt="logo" className="topbar-logo" />
          </Link>
        </div>
        <div className="topbar-icons">
          <ul>
            <li>
              <MdSearch />
            </li>
            {userInfo ? (
              <li
                style={{ color: "white" }}
                onClick={() => {
                  dispatch({ type: USER_LOGOUT });
                  localStorage.setItem("userInfo", "");
                  localStorage.setItem("login", false);
                  localStorage.setItem("jwt_access_token", "");
                }}
              >
                <FiLogOut />
              </li>
            ) : (
              <li
                onClick={() => {
                  setdisplay("flex");
                }}
              >
                <AiOutlineUser />
              </li>
            )}
            <li>
              <Link to="/cart">
                <BsBag />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ display: display }}>
        <div className="left-box">
          <div className="login-buttons">
            <div
              onClick={() => {
                setdisplay("none");
              }}
            >
              <GrClose />
            </div>
            <h1>Get Started</h1>
            <button>Sign in with Google</button>
            <button>Sign in with Facebook</button>
          </div>
        </div>
        <div className="right-box">
          <div className="upper-buttons">
            <button
              className="first-button"
              onClick={() => {
                document.getElementById("register").style.display = "none";
                document.getElementById("login").style.display = "block";
              }}
            >
              Log In
            </button>
            <button
              className="second-button"
              onClick={() => {
                document.getElementById("login").style.display = "none";
                document.getElementById("register").style.display = "block";
              }}
            >
              Register
            </button>
          </div>
          <div className="form-credentials" id="login">
            <h1>Log In</h1>

            <p>Email</p>
            <input
              type="email"
              placeholder=" Enter your email"
              onChange={changeHandler}
              value={email}
            />
            <p>password</p>
            <input
              type="password"
              placeholder="Enter your password"
              value={pass}
              onChange={changeHandler1}
            />
            <button
              type="submit"
              className="lower-button"
              onClick={() => {
                console.log("click");
                dispatch(logins(email, pass));
              }}
            >
              Sign In
            </button>

            <div className="lower-info">
              <div>
                <p>forgot your password?</p>
              </div>
              <div>
                <p>Not a member yet?</p>
              </div>
            </div>
          </div>
          <div className="form-signup-credentials" id="register">
            <h1>Register</h1>
            <p id="verify"></p>
            <div style={{ display: "flex" }}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={changeHandler2}
                  value={fname}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={changeHandler3}
                  value={lname}
                />
              </div>
            </div>

            <input
              type="email"
              placeholder="Email"
              value={email2}
              onChange={changeHandler4}
            />

            <input
              type="phone"
              placeholder="phone no."
              value={phone}
              onChange={changeHandler5}
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={pass2}
              onChange={changeHandler6}
            />

            <input
              type="password"
              placeholder="confirm password"
              value={confpass}
              onChange={changeHandler7}
            />
            <button
              type="submit"
              className="lower-button"
              onClick={() => {
                document.getElementById(
                  "verify"
                ).innerHTML = `A verification email has been sent to ${email2} . It will be expire after one day. If you not get verification Email click on resend token.`;
                dispatch(
                  register(fname, lname, phone, email2, pass2, confpass)
                );
              }}
            >
              Sign Up
            </button>

            <div className="lower-info">
              <div>
                <p>Already a member ?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topbar;
