import { Calendar, Search } from "lucide-react";
import { Button } from "./ui/button";

const SearchBox = () => {
  return (
    <div className="w-full bg-white p-2 gap-2 rounded-lg flex items-center">
      <input
        type="text"
        placeholder="Search for services"
        className="w-full outline-none"
      />

      <Button className="bg-white text-primary h-2 w-2" size={"icon"}>
        <Calendar />
      </Button>

      <Button className="w-6 h-6" size={"icon"}>
        <Search />
      </Button>
    </div>
  );
};

export default SearchBox;
