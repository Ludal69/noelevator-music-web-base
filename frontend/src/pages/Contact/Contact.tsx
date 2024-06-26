import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-custom-background bg-cover bg-center text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Contactez-nous</h1>
        <p className="text-center mb-12">
          Pour toute question ou demande de renseignements, n'hésitez pas à nous
          contacter via le formulaire ci-dessous.
        </p>
        <form className="max-w-xl mx-auto bg-gray-800 bg-opacity-75 rounded-lg shadow-lg p-8">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Nom
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none"
              type="text"
              id="name"
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none"
              type="email"
              id="email"
              placeholder="Votre email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none"
              id="message"
              placeholder="Votre message"
              rows={5}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="px-4 py-2 bg-custom-yellow text-gray-800 rounded-full hover:bg-yellow-600 focus:outline-none"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
