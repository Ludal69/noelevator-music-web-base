import React, { useState } from "react";

interface EmailValidationProps {
  onEmailValid: (email: string) => void;
  context: "login" | "signup"; // Adding context prop to handle login and signup cases
}

const EmailValidation: React.FC<EmailValidationProps> = ({
  onEmailValid,
  context,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

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
          body: JSON.stringify({ email, context }),
        }
      );
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        onEmailValid(email);
      }
    } catch (error) {
      setError("Une erreur est survenue lors de la vérification de l'email.");
    }
  };

  return (
    <>
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
    </>
  );
};

export default EmailValidation;
