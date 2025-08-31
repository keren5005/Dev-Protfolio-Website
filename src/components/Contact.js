import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Contact = () => {
  return (
    <section className="container mx-auto p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <h2 className="text-4xl text-center mb-8">Contact Me</h2>

      <div className="flex flex-col items-center justify-center">
        {/* Add Rounded Image */}
        <div className="mb-6">
          <img
            src="/avatarPictures/thumbsUp.png"
            alt="Thumbs Up"
            className="rounded-full w-40 h-40 object-cover border-4 border-teal-600"
          />
        </div>

        {/* Contact Form */}
        <form className="w-full max-w-lg bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-300">Send</button>
        </form>

        {/* Additional Contact Info with Icons */}
        <div className="mt-6 text-center">
          <h3 className="text-2xl mb-4">Or Reach Me At:</h3>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <AiOutlineMail className="text-2xl text-teal-600" />
              <span>Email: <a href="mailto:keren5005005@gmail.com" className="text-teal-600 hover:underline">keren5005005@gmail.com</a></span>
            </div>
            <div className="flex items-center space-x-2">
              <AiFillLinkedin className="text-2xl text-teal-600" />
              <span>LinkedIn: <a href="https://www.linkedin.com/in/keren-cohen-aa6987215/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">linkedin.com/in/keren-cohen-aa6987215</a></span>
            </div>
            <div className="flex items-center space-x-2">
              <AiFillGithub className="text-2xl text-teal-600" />
              <span>GitHub: <a href="https://github.com/keren5005" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">github.com/keren5005</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
