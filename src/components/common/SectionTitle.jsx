const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="section-title text-center my-8">
      <div className="flex items-center justify-center space-x-4">
        <div className="w-1/4 border-t-2 border-gray-300 dark:border-gray-600"></div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white uppercase tracking-wide relative">
          {heading}
          <span
            className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-600"
            style={{ zIndex: -1 }}
          ></span>
        </h3>
        <div className="w-1/4 border-t-2 border-gray-300 dark:border-gray-600"></div>
      </div>
      <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionTitle;
