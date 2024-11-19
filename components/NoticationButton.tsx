import { BellDot } from "lucide-react";
import { Button } from "./ui/button";

const NoticationButton = () => {
  return (
    <>
      <Button size={"icon"} variant={'outline'}>
        <BellDot />
      </Button>
    </>
  );
};

export default NoticationButton;
