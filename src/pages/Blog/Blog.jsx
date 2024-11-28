import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BookOpen, Camera } from "lucide-react";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [isOpen, setIsOpen] = useState(null);

  const blogData = [
    {
      title: "Mastering Portrait Photography",
      description:
        "Portrait photography is an art form that requires a keen understanding of light, angles, and composition. In this guide, we explore techniques to make your subjects stand out, how to choose the right lens, and tips for natural posing.",
      image: "https://images.unsplash.com/photo-1561948953-774b26fc6f14",
    },
    {
      title: "Top 5 Cameras for Nature Photography",
      description:
        "Nature photography requires the right camera to capture stunning landscapes, animals, and the great outdoors. We review the top 5 cameras that are perfect for outdoor photographers, covering durability, resolution, and portability.",
      image: "https://images.unsplash.com/photo-1470177948767-b69cba11c088",
    },
    {
      title: "The Power of Editing in Photography",
      description:
        "Editing is a crucial part of photography. This article will guide you through some of the best techniques for color correction, enhancing detail, and creating mood through editing software like Lightroom and Photoshop.",
      image: "https://images.unsplash.com/photo-1556740738-1c36c1f706f0",
    },
    {
      title: "The Art of Landscape Photography",
      description:
        "Landscape photography is about capturing the beauty of nature. From choosing the right time of day to understanding composition, we provide tips to help you improve your landscape photography skills.",
      image: "https://images.unsplash.com/photo-1483402652502-7c3dbd98feaf",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 ">
      <Helmet>
        <title>Blog | Wild Photographer</title>
      </Helmet>

      {/* Blog Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Photography Insights & Tips
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          Stay updated with our photography tips, tutorials, and insights for
          both beginners and professionals.
        </p>
      </div>

      {/* Blog Posts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogData.map((item, idx) => (
          <div
            key={idx}
            className="max-w-sm mx-auto bg-white dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-lg overflow-hidden transition-all hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {item.description}
              </p>
              <a
                href="/"
                className="text-blue-500 hover:text-blue-700 transition-all font-medium"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Accordion FAQ Section */}
      <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-300">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          Frequently Asked Questions
        </h3>
        <Accordion type="single" collapsible className="">
          <AccordionItem value="item-1">
            <AccordionTrigger className="py-4 px-6 bg-gray-100 text-lg text-gray-900 rounded-md font-medium flex justify-between items-center hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-all">
              <Camera className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              What is the best camera for outdoor photography?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-700 bg-gray-50 rounded-md mt-2 dark:bg-gray-800 dark:text-gray-300">
              The best camera for outdoor photography depends on your needs. A
              DSLR or mirrorless camera with a weather-sealed body,
              high-resolution sensor, and fast autofocus is ideal for capturing
              nature and wildlife.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="py-4 px-6 bg-gray-100 text-lg text-gray-900 rounded-md font-medium flex justify-between items-center hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-all">
              <BookOpen className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              How do I improve my photography composition?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-700 bg-gray-50 rounded-md mt-2 dark:bg-gray-800 dark:text-gray-300">
              Photography composition can be improved by following the rule of
              thirds, leading lines, and balancing elements within the frame.
              Experiment with different angles, framing, and perspectives.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Blog;
