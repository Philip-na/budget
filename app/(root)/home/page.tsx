import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"



const Page = () => {
  return (
    <>
    <div className="flex gap-4 py-4 space-y-4">

      <Button variant='default'>default</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant={'ghost'}>Ghost</Button>
      <Button variant={'link'}>Link</Button>
      <Button variant={'outline'}>Outline</Button>
      <Button variant={'secondary'}>Secondary</Button>

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant='default'>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>Drawer Description</DrawerDescription>
          </DrawerHeader>
          <DrawerClose asChild>
            <Button variant='ghost'>Close</Button>
          </DrawerClose>
          <DrawerFooter>
            <Button variant='default'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
    </div>
    </>
  )
}

export default Page