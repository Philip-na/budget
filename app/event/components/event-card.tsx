import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Clock2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EventCard = () => {
  return (
    <Card className=" overflow-hidden   relative w-full max-w-[340px] min-h-[420px] ">
      <Image
        src="/entertainment.jpg"
        layout="fill"
        objectFit="cover"
        alt="image"
        className=""
      />

      <div className=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col">
        <div className="mt-auto w-full">
          <CardContent className="p-6 ">
            <p className="text-sm text-muted flex gap-1 items-center">
              <span>
                <Clock2 size={15} />
              </span>
              Tuseday{" "}
              <span className="text-white font-semibold font-mont">nov 23</span>
              , 6:00 PM
            </p>

            <CardTitle  className="text-white  font-mont text-xl relative before:absolute before:bottom-0 before:h-[2px] before:w-[30px] before:bg-white mb-3">
              <Link className=" no-underline" href="/event/1">
              The Comedy Show with John Doe De lusi
              </Link>
            </CardTitle>

            {/* Subtitle */}
            <CardDescription className="text-white font-bold font-mont text-[14px] ">
              Lorem ipsum dolor sit amet, co
            </CardDescription>
            <CardDescription className=" text-sm text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            </CardDescription>

          
              <Button variant={'secondary'} className="mt-2 w-full" size={'lg'}>Get Tickets</Button>
              
           
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
