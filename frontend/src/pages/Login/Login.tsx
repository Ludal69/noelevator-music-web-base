import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import EmailValidation from "../../components/EmailValidation/EmailValidation";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);

  const handleEmailValid = (email: string) => {
    setEmail(email);
    setIsEmailValid(true);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await login(email, password);
      navigate("/");
      window.location.reload(); //brute force reload to see new merged cart items in cart
    } catch (error: any) {
      setError("Mot de passe incorrect");
      setPassword(""); // Vider le champ de mot de passe en cas d'erreur
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin}>
        {isEmailValid === null && (
          <EmailValidation onEmailValid={handleEmailValid} context="login" />
        )}
        {isEmailValid && (
          <>
            <p className="text-sm mb-2">Email: {email}</p>
            <div className="mb-4 relative">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              {error && <p className="text-red-500 text-xs italic">{error}</p>}
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-4"
            >
              S'identifier
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
