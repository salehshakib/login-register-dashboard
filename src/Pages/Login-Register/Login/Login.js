import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../assets/images/Royal Enfield.jpeg";

const Login = () => {
    return (
        <section className="bg-[#fff5f5] min-h-[70vh] pt-20 flex items-center h-[100vh]">
            {/* <PageTitle title={"Login"}></PageTitle> */}
            <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 md:w-3/4 mx-auto md:max-h-[70vh] my-5">
                <figure className="w-1/2">
                    <img
                        src={img}
                        alt="Album"
                        className="hidden lg:block object-cover w-full object-center"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">Login </h2>
                    <div className="flex mt-4">
                        <span className="inline-block w-24 h-1 bg-[#2564eb] rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-[#2564eb] rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-[#07b4d5] rounded-full"></span>
                    </div>
                    <p className="">Welcome User, Log in to your account.</p>

                    <form className="form-control py-5">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Type Your Email here"
                            className="input input-bordered w-full"
                            required
                        />
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Type Your Password here"
                            className="input input-bordered w-full"
                            required
                        />
                        <label className="label">
                            <span className="label-text font-bold">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            name="c_password"
                            placeholder="Confirm Your Password here"
                            className="input input-bordered w-full"
                            required
                        />

                        <div className="card-actions">
                            <div className="flex flex-col w-full border-opacity-50 mt-4">
                                <button className="btn bg-[#07b4d5] border-none w-full hover:bg-[#152863]">
                                    LogIn
                                </button>

                            </div>
                        </div>
                    </form>

                    <div>
                        Don't Have any acount?
                        <Link
                            to="/register"
                            className="text-[#07b4d5] hover:text-[#152863] px-2 hover:underline"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Login;