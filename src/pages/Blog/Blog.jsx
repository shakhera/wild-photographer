import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    {
      title: "Difference between SQL and NoSQL",
      description:
        "SQL (Structured Query Language) databases are relational, requiring a predefined schema and tables. They excel in structured data storage, offering ACID compliance for consistency and reliability. NoSQL databases encompass various non-relational technologies, providing flexible schemas, scalability, and high performance for unstructured or semi-structured data. They're suitable for distributed systems, big data, and real-time applications, offering eventual consistency and horizontal scalability. While SQL ensures data integrity through relationships, NoSQL prioritizes scalability and agility, making it suitable for diverse data types and distributed environments, but may sacrifice some consistency guarantees in favor of performance and scalability.",
    },
    {
      title: "What is JWT, and how does it work?",
      description:
        "JWT (JSON Web Token) is a compact, URL-safe token format used for securely transmitting information between parties. It consists of three parts: a header, a payload, and a signature. The header and payload are encoded as JSON and then Base64URL encoded, while the signature is used to verify the token's authenticity.",
    },
    {
      title: "What is the difference between javascript and NodeJS?",
      description:
        "JavaScript is a programming language primarily used for web development, executing in web browsers to create dynamic content and interactivity on websites. Node.js, on the other hand, is a runtime environment that allows JavaScript to run server-side, enabling server-side scripting, network applications, and handling input/output operations. While JavaScript is executed in the browser, Node.js executes JavaScript code outside the browser environment, facilitating server-side programming, file system manipulation, and other backend tasks, expanding JavaScript's capabilities beyond the browser.",
    },
    {
      title: "How does NodeJS handle multiple requests at the same time?",
      description:
        "Node.js employs an event-driven, non-blocking I/O model. When a request arrives, it's delegated to an event loop, which continuously processes queued tasks, executing callback functions efficiently. Node.js utilizes non-blocking I/O operations, ensuring it doesn't halt while waiting for I/O tasks to complete. This approach enables optimal resource utilization and high concurrency. Despite being single-threaded, Node.js efficiently handles multiple requests simultaneously by leveraging asynchronous callbacks and delegating I/O-bound tasks to the underlying system. This combination of event-driven architecture and non-blocking I/O allows Node.js to achieve high performance and scalability in handling concurrent requests.",
    },
  ];

  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div className="w-2/3 mx-auto">
      <Helmet>
        <title>Blog | Wild Photographer</title>
      </Helmet>
      <div className="rounded-lg font-sans">
        <h2 className="text-3xl font-bold text-center my-12">
          Let's see some questions and answers
        </h2>
        {accordionsData.map((PerAccordion, idx) => (
          <div
            key={idx}
            className="border-b border-gray-500 last-of-type:border-none"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex h-full w-full justify-between py-4 text-left font-medium text-black dark:text-white"
            >
              <span className="sm:text-lg md:text-xl">
                {PerAccordion.title}
              </span>
              <span className="rounded-full p-2 ">
                <svg
                  className="ml-8 mr-7 shrink-0 fill-black dark:fill-white"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden text-gray-800 transition-all duration-300 ease-in-out dark:text-gray-400 ${
                isOpen === idx
                  ? "grid-rows-[1fr] pb-3 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden pr-4">
                {PerAccordion.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
