const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin rounded-full border-gray-100 border-8 h-64 w-64"></div>
      </div>
    </div>
  );
};

export default Spinner;