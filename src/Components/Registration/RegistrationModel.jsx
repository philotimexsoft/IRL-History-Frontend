"use client";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaGoogle, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  CloudLightning,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import axios from "axios";
import validator from "validator";
import { Loader2 } from "lucide-react"; // use lucide loader spinner
import { CreateAccount } from "@/store/Reducers/UserReducer/UserActions";
import { useDispatch, useSelector } from "react-redux";
import SuccessPage from "../SuccessPage";

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUnameExist, setUnameExist] = useState(false);
  const [isUnameExistLoading, setUnameExistLoading] = useState(false);
  const [hasTypedUsername, setHasTypedUsername] = useState(false);
  const {
    loading: userLoading,
    user,
    isAuthenticated,
    isVerified,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    uname: "",
    email: "",
    password: "",
    bio: "",
    name: "",
  });

  const checkUsername = async (uname) => {
    if (!uname.trim()) return;
    try {
      setUnameExistLoading(true);
      const { data } = await axios.post(
        "http://localhost:8080/v1/api/user-service/user/uname-exist",
        { uname },
        { withCredentials: true }
      );
      setUnameExist(data.exist);
      setUnameExistLoading(false);
    } catch (e) {
      console.error(e);
      setUnameExistLoading(false);
    }
  };

  useEffect(() => {
    if (!form.uname.trim()) {
      setUnameExist(false);
      setUnameExistLoading(false);
      return;
    }

    setUnameExistLoading(true);
    const timeout = setTimeout(() => {
      checkUsername(form.uname);
    }, 500);

    return () => clearTimeout(timeout);
  }, [form.uname]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === "uname") {
      setHasTypedUsername(true);
    }

    if (name == "name") {
      if (value.length == 0) {
        newErrors.name = "Name is required";
      } else if (value.length > 13) {
        newErrors.name = "Name shold be in 13 charactes !";
      } else {
        delete newErrors.name;
      }
    }
    // existing validation...
    if (name === "email") {
      if (!validator.isEmail(value)) {
        newErrors.email = "Invalid email format";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "password") {
      if (
        !validator.isStrongPassword(value, {
          minSymbols: 1,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minLength: 8,
        })
      ) {
        newErrors.password =
          "Password must have uppercase, lowercase, number, symbol, and 8+ chars";
      } else {
        delete newErrors.password;
      }
    }

    if (name === "bio") {
      if (value.length > 150) {
        newErrors.bio = "Bio must be 150 characters or less";
      } else {
        delete newErrors.bio;
      }
    }

    setErrors(newErrors);
    setForm({ ...form, [name]: value });
  };

  const handleOAuthRegister = async (provider) => {
    try {
      setIsLoading(true);
      console.log(`Registering with ${provider}...`);
    } catch (err) {
      console.error(`OAuth registration failed for ${provider}:`, err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      setForm({
        uname: "",
        email: "",
        password: "",
        bio: "",
        name: "",
      });
      setHasTypedUsername(true);
    }
  }, [isAuthenticated, user]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0 || isUnameExist) return;

    await dispatch(CreateAccount(form));
  };

  return (
    <>
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start p-4 sm:p-6 lg:p-8 pb-4">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <img
              src="/Logos/logo3.png"
              alt="IRL Archive Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                Create Your IRL History Account
              </h1>
              <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg leading-relaxed">
                Join the IRL streaming community today.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 sm:p-2 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8">
          {/* Left Panel */}
          <div className="w-full lg:w-1/2 lg:pr-6 xl:pr-8 mb-6 lg:mb-0">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Join Us?
            </h2>
            {[
              {
                icon: Users,
                title: "Meet New Friends",
                text: "Connect with thousands of streamers.",
              },
              {
                icon: CloudLightning,
                title: "Share Your Story",
                text: "Showcase your IRL experiences.",
              },
              {
                icon: ShieldCheck,
                title: "Stay Secure",
                text: "We protect your privacy with top security.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start space-x-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.text}</p>
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
              Sign Up
            </h2>

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
                onClick={handleOAuthRegister}
              />
              <OAuthButton
                provider="discord"
                label="Continue with Discord"
                subLabel="Link your Discord profile"
                icon={
                  <FaDiscord className="text-[#2A65E4] text-xl sm:text-2xl flex-shrink-0" />
                }
                isLoading={isLoading}
                onClick={handleOAuthRegister}
              />
            </div>

            {/* Divider */}
            <div className="relative mb-4 sm:mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-2 sm:px-4 bg-white text-gray-500 uppercase font-semibold tracking-wide">
                  Or Sign Up With Email
                </span>
              </div>
            </div>


            {/* Registration Form */}
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border p-3"
                  required
                />

                {errors.name && (
                  <div className="flex items-center text-red-600 text-sm mt-2">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="uname"
                  placeholder="Username"
                  value={form.uname}
                  onChange={handleChange}
                  className="w-full border p-3"
                  required
                />

                {!form.uname.trim() && hasTypedUsername && (
                  <div className="flex items-center text-red-600 text-sm mt-2">
                    <XCircle className="w-4 h-4 mr-1" />
                    <span>Username is required</span>
                  </div>
                )}

                {form.uname.trim() && isUnameExistLoading && (
                  <div className="flex items-center text-blue-600 text-sm mt-2">
                    <Loader2 className="animate-spin w-4 h-4 mr-2" />
                    <span>Checking uname availability...</span>
                  </div>
                )}

                {form.uname.trim() && !isUnameExistLoading && isUnameExist && (
                  <div className="flex items-center text-red-600 text-sm mt-2">
                    <XCircle className="w-4 h-4 mr-1" />
                    <span>This uname is already taken</span>
                  </div>
                )}

                {form.uname.trim() && !isUnameExistLoading && !isUnameExist && (
                  <div className="flex items-center text-green-600 text-sm mt-2">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>Username available</span>
                  </div>
                )}
              </div>

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

              <div>
                <textarea
                  name="bio"
                  placeholder="Your bio..."
                  value={form.bio}
                  onChange={handleChange}
                  className="w-full border p-3"
                  rows={3}
                />
                <p
                  className={`text-sm mt-1 ${
                    form.bio.length > 150 ? "text-red-600" : "text-gray-500"
                  }`}
                >
                  {form.bio.length}/150 characters
                </p>
                {errors.bio && (
                  <div className="flex items-center text-red-600 text-sm mt-2">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span>{errors.bio}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#2A65E4] text-white py-3 font-semibold hover:bg-blue-700 transition-all"
              >
                {userLoading ? "..." : "Create Account"}
              </button>
            </form>

            <div className="flex justify-between items-center mt-4">
              <a
                href="#"
                onClick={onSwitchToLogin}
                className="text-[#2A65E4] font-semibold text-sm hover:underline"
              >
                Already have an account? Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
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
    className="w-full flex items-center justify-between p-4 border-2 border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
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

RegisterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSwitchToLogin: PropTypes.func,
};

export default RegisterModal;
