import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  // Initialize the form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submit handler
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Here you can handle form submission, like sending an API request
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Contact | Wild Photographer</title>
      </Helmet>

      {/* Contact Form Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          We’d love to hear from you! Fill out the form below, and we will get
          back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
            className={`w-full p-3 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-red-500`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <Input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className={`w-full p-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-red-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <Textarea
            placeholder="Your Message"
            rows="4"
            {...register("message", { required: "Message is required" })}
            className={`w-full p-3 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-red-500`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
          >
            Send Message
          </Button>
        </div>
      </form>

      {/* Contact Details Section */}
      <div className="mt-12 text-center lg:w-8/12 mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Contact Information
        </h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-red-500" />
            <span className="text-lg text-gray-600 dark:text-gray-300">
              contact@wildphotographer.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-red-500" />
            <span className="text-lg text-gray-600 dark:text-gray-300">
              +1 234 567 890
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-red-500" />
            <span className="text-lg text-gray-600 dark:text-gray-300">
              123 Photography Street, Wild City, Country
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
