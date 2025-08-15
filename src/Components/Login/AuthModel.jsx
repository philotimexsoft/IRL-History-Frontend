"use client";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaGoogle, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  CloudLightning,
  Shield,
  AlertCircle,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import LoadingPage from "../LoadingPage";
import { LoginUser, OtpVerify } from "@/store/Reducers/UserReducer/UserActions";
import validator from "validator";

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    loading: userLoading,
    user,
    isAuthenticated,
    isVerified,
    error,
    isTwoFactorEnabled,
  } = useSelector((state) => state.user);

  const {
    loading: otpLoading,
    success,
    type,
  } = useSelector((state) => state.userprofile_manage);

  const dispatch = useDispatch();
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated && user) {
      setIsLoading(false);

      if (isVerified && !isTwoFactorEnabled) {
        onClose();
      }

      setForm((prev) => ({
        ...prev,
        otp: "",
      }));
    }
  }, [isAuthenticated, user, isVerified, router, success]);

  if (!isOpen) return null;

  const handleOAuthLogin = (service) => {
    onClose();
    setIsLoading(true);

    const popup = window.open(
      `http://localhost:8080/v1/api/auth-service/${service}`,
      "OAuth Login",
      "width=500,height=600"
    );

    const handleMessage = async (event) => {
      // The popup is served via the gateway
      console.log("Message from:", event.origin, event.data);
      console.log("this is caled before here");
      if (
        !["http://localhost:8080", "http://localhost:5000"].includes(
          event.origin
        )
      )
        return;

      if (event.data.success) {
        console.log("this is claled here");
        console.log(event.data);
        localStorage.setItem("token", event.data.token);
        dispatch(LoginUser({ email: event.data.user.email }));
      } else {
        console.error(event.data.error);
      }

      // popup?.close();
      window.removeEventListener("message", handleMessage);
      setIsLoading(false);
    };

    window.addEventListener("message", handleMessage);
  };

  const handleChange = (e) => {
    setLoginError("");

    const { name, value } = e.target;
    let newErrors = { ...errors };

    // existing validation...
    if (name === "email") {
      if (!validator.isEmail(value)) {
        newErrors.email = "Invalid email format";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "password") {
      if (value.length <= 0) {
        newErrors.password = "Password should not be empty !";
      } else {
        delete newErrors.password;
      }
    }

    if (name == "otp") {
      if (value == null || value == "") {
        newErrors.otp = "Enter mail otp !";
      } else {
        delete newErrors.otp;
      }
    }

    setErrors(newErrors);
    setForm({ ...form, [name]: value });
  };

  const handleRootLogin = () => {
    console.log("Development root login...");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isTwoFactorEnabled) {
      dispatch(OtpVerify({ email: form.email, otp: form.otp }));
      setLoginError(error);
    } else {
      await dispatch(LoginUser({ email: form.email, password: form.password }));
      setLoginError(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto ">
        {/* Header */}
        {/* {isLoading && <LoadingPage />} */}
        <div className="flex justify-between items-start p-4 sm:p-6 lg:p-8 pb-4">
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Logo without background */}
            <img
              src="/Logos/logo3.png"
              alt="IRL Archive Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />

            {/* Text content */}
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                Welcome to IRL History
              </h1>
              <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg leading-relaxed">
                Sign in or create your account to join the IRL streaming
                community.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 sm:p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8">
          {/* Left Panel */}
          <div className="w-full lg:w-1/2 lg:pr-6 xl:pr-8 mb-6 lg:mb-0">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Join the Community
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
              Whether you’re new or returning, you can sign in below. If you’re
              new, your account will be created automatically.
            </p>

            {[
              {
                icon: Users,
                title: "Connect with Community",
                text: "Join thousands of IRL streaming enthusiasts",
              },
              {
                icon: CloudLightning,
                title: "Share Your Stories",
                text: "Document and share your streaming experiences",
              },
              {
                icon: ShieldCheck,
                title: "Secure & Private",
                text: "Your data is protected with enterprise security",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start space-x-3 mb-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="bg-green-50 border border-green-300 p-4 mb-6">
              <p className="text-green-800 font-semibold">
                Secure OAuth Authentication
              </p>
              <p className="text-green-700 text-sm mt-1">
                We use industry-standard OAuth protocols. Your credentials are
                never stored on our servers.
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-1/2 lg:pl-6 xl:pl-8 lg:border-l lg:border-gray-200">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Sign In or Create Account
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
              Pick a platform below to get started. If you don’t have an account
              yet, one will be created for you.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6">
              {/* OAuth Buttons */}
              <div className="space-y-3 sm:space-y-4 mb-6">
                <OAuthButton
                  provider="google"
                  label="Continue with YouTube"
                  subLabel="Link your YouTube channel"
                  icon={
                    <FaGoogle className="text-[#2A65E4] text-xl sm:text-2xl flex-shrink-0" />
                  }
                  isLoading={isLoading}
                  onClick={() => handleOAuthLogin("google")}
                />
                <OAuthButton
                  provider="google"
                  label="Continue with Discord"
                  subLabel="Link your Discored Profile"
                  icon={
                    <FaDiscord className="text-[#2A65E4] text-xl sm:text-2xl flex-shrink-0" />
                  }
                  isLoading={isLoading}
                  onClick={() => handleOAuthLogin("discord")}
                />
              </div>

              {/* Email Login */}
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-2 sm:px-4 bg-white text-gray-500 uppercase font-semibold tracking-wide">
                    Login With Email
                  </span>
                </div>
              </div>

              <button
                onClick={handleRootLogin}
                disabled={isLoading}
                className="w-full flex items-center justify-between p-4 border-2 border-yellow-400 hover:bg-yellow-50 transition-all duration-200 bg-yellow-50/30 hover:shadow-md"
              >
                <span className="font-semibold text-gray-900">
                  Login With Email
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-medium px-3 py-2">
                  User
                </span>
              </button>

              {/* Login Form */}
              {loginError && (
                <div className="flex items-center text-red-600 text-sm mt-2">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  <span>{loginError.message}</span>
                </div>
              )}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border p-3"
                    required
                  />
                  {errors.email && (
                    <div className="flex items-center text-red-600 text-sm mt-2">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full border p-3"
                    required
                  />
                  {errors.password && (
                    <div className="flex items-center text-red-600 text-sm mt-2">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      <span>{errors.password}</span>
                    </div>
                  )}
                </div>

                {isTwoFactorEnabled ? (
                  <div>
                    <input
                      type="number"
                      name="otp"
                      placeholder="EMAIL OTP"
                      value={form.otp}
                      onChange={handleChange}
                      className="w-full border p-3"
                      required
                    />
                    {errors.otp && (
                      <div className="flex items-center text-red-600 text-sm mt-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        <span>{errors.otp}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  ""
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#2A65E4] text-white py-3 font-semibold hover:bg-blue-700 transition-all"
                >
                  Login
                </button>
              </form>

              <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-[#2A65E4] text-sm hover:underline">
                  Forgot password?
                </a>
                <a
                  href="#"
                  onClick={onSwitchToSignup}
                  className="text-[#2A65E4] font-semibold text-sm hover:underline"
                >
                  New here? Create an account
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-t border-gray-200 text-sm sm:text-base text-gray-600 ">
          By continuing, you agree to our Terms of Service and Privacy Policy.
          Your account will be created automatically upon successful
          authentication.
          <br />
          <span>
            Need help? Make sure you have an account with your chosen platform..
          </span>
        </div>
      </div>
    </div>
  );
};

const OAuthButton = ({
  provider,
  label,
  subLabel,
  icon,
  isLoading,
  onClick,
}) => (
  <button
    onClick={() => onClick(provider)}
    disabled={isLoading}
    className="w-full flex items-center justify-between p-4 border-2 border-gray-300  hover:bg-gray-50 transition-all duration-200 group"
  >
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <div className="font-semibold text-gray-900">{label}</div>
        <div className="text-xs sm:text-sm text-gray-600">{subLabel}</div>
      </div>
    </div>
    <motion.div
      animate={{ x: [0, 6, 0] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
      className="text-[#2A65E4] text-lg sm:text-xl"
    >
      ➜
    </motion.div>
  </button>
);

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSwitchToSignup: PropTypes.func,
};

export default LoginModal;
