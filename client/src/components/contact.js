import React, { useState } from "react";
import axios from "axios";

function Contact(props) {
  const [feedback, setFeedback] = useState({
    email: "",
    msg: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFeedback((prevValue) => {
      if (name === "email")
        return {
          email: value,
          msg: prevValue.msg,
        };
      else if (name === "message")
        return {
          email: prevValue.email,
          msg: value,
        };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:7000/feedback", feedback)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    alert("Thanks for Submiting Feedback...!!");

    window.location = "/contact";
  }

  return (
    <section class="text-gray-600 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0iiitpune+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        ></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            Please Provide your feedback here..
          </p>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <p class="text-xs text-gray-500 mt-3">Thanks for submitting..!!</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
