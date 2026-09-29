import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      toast.success("Message successfully");
    } catch (error) {
      toast.error("Error occured!");
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="min-h-screen pt-24 bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-2xl">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Have any questions or need help?
              <br />
              Feel free to reach out to us.
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
               Email: support@bookstore.com
            </p>
            <p className="text-gray-700 dark:text-gray-300">
               Location: India
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none bg-white dark:bg-slate-700 text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none bg-white dark:bg-slate-700 text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none outline-none bg-white dark:bg-slate-700 text-gray-800 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;