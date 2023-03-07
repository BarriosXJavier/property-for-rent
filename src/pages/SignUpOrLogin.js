import React from "react";
import { Link } from "react-router-dom";

const SignUpOrLogin = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-700 to-blue-600">
            <div className="relative z-10 text-center max-w-screen-md mx-auto">
                <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">The action requires you to be logged in.</h2>
                <p className="text-base md:text-lg text-white mb-8">If you do not have an account, please sign up first. It takes only a few seconds. Already have an account? Simply click on the login button and enter your details.</p>
                <div className="flex justify-center">
                    <Link to="/pages/SignUpForm" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
                        Sign Up
                    </Link>
                    <Link to="/pages/LogInForm" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpOrLogin;
