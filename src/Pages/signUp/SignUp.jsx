import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthConText } from "../../provider/Authprovider";
import signUpImg from '../../assets/others/authentication2.png'
import './signUp.css'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email,data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    reset();
    navigate('/');
  };
  const {createUser} = useContext(AuthConText);
  return (
    <>
    <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>
    <div className="hero min-h-screen signUp-bg">
      <div className="hero-content flex-col lg:flex-row-reverse lg:shadow-xl lg:my-10">
        <div className="text-center lg:text-left">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm">
          <h1 className="text-center font-bold text-3xl"> Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                {...register("photoUrl", { required: true })}
                name="photoUrl"
                placeholder="Photo Url"
                className="input input-bordered"
              />
              {errors.photoUrl && (
                <span className="text-red-500">photo Url is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500">password max 20 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">password must have one uppercase,one lowercase,one number and one spacial character</p>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="btn text-white bg-[#D1A054] hover:bg-[#caa773] rounded-none font-bold font-[inter]"/>
            </div>
            <p>already have account?<Link to='/login' className="text-blue-600">Log in</Link></p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
