const SeparatorWith = (
    { children }: { children?: React.ReactNode }
) => {
  return (
    <div className="flex items-center gap-2 mt-3 mb-1">
      <div className="border-b border-gray-300 w-full"></div>
      <p className="text-primary text-lg">
        {children ? children : "or"}
      </p>
      <div className="border-b border-gray-300 w-full"></div>
    </div>
  );
};

export default SeparatorWith;
