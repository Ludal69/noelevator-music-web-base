// frontend/src/pages/Login/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailValidation = async () => {
    setError(null);
    try {
      const response = await fetch(
        "http://localhost:4000/api/users/check-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      if (data.exists) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
        setEmail("");
        setError(
          "Adresse e-mail incorrecte ou invalide. Veuillez corriger avant de réessayer."
        );
      }
    } catch (error) {
      setIsEmailValid(false);
      setEmail("");
      setError("Une erreur est survenue lors de la vérification de l'email.");
    }
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
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <button
              type="button"
              onClick={handleEmailValidation}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-4"
            >
              Continuer
            </button>
          </div>
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
      {isEmailValid === false && (
        <div className="mt-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          <button
            type="button"
            onClick={handleEmailValidation}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-4"
          >
            Continuer
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
