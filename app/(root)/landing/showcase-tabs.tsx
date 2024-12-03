import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LiveList from "./live-list";
import PromHomeList from "./prom-home-list";

const ShowcaseTabs = () => {
  return (
    <div className="w-full bg-white  rounded-lg text-black mt-4 p-4 ">
      <Tabs defaultValue="live" className="w-full ">
        <TabsList className="w-fit flex gap-2">
          <TabsTrigger value="live" className=" tab-link ">
            Live Events
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="tab-link">
            Prom Events
          </TabsTrigger>
          <TabsTrigger value="past" className="tab-link">
            Past Events
          </TabsTrigger>
        </TabsList>
        <div className=" w-full min-h-[400px]   mt-4 ">
          <TabsContent value="live">
            <LiveList />
          </TabsContent>
          <TabsContent className=" !h-full" value="upcoming">
           <PromHomeList />
          </TabsContent>

          <TabsContent value="past">
            <p>Past Events</p>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ShowcaseTabs;
