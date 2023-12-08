import "./login.css";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect,  useState } from "react";
import { useContext } from "react";
import { AuthConText } from "../../provider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const [disable, setDisable] = useState(true);

  const { signIn } = useContext(AuthConText);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //   captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Login successful",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from,{replace: true})
    });
  };
  const handleValidateCaptcha = (e) => {
    const captcha_value = e.target.value;
    console.log(captcha_value);
    if (validateCaptcha(captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <>
    <Helmet>
        <title>Bistro Boss || Log in</title>
      </Helmet>
    <div className="hero min-h-screen login-bg md:px-10">
      <div className="flex flex-col md:flex-row login-bg shadow-2xl justify-between w-full md:p-14 md:my-6">
        <div className="text-center lg:text-left">
          <img src={loginImg} className="md:w-[548px] md:h-[355px]" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm">
          <h1 className="text-center font-bold text-3xl"> Log In</h1>
          <form onSubmit={handleLogin} className="md:card-body p-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
              onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="type the captcha above"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign In"
                disabled={disable}
                className="btn bg-[#D1A054B2] hover:bg-[#c1a57eb2] rounded-sm text-white font-[inter]"
              />
            </div>
          </form>
          <p>
            <small>new here? <Link to="/signUp" className="text-blue-500 font-bold">create a new account</Link> </small>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
