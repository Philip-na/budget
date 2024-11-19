import { Button } from "@/components/ui/button";
import { Calendar, Download, Plus } from "lucide-react";
const BudgetTop = () => {
  return (
    <div className="budget-title">
        <div className="budget-header">
          <h2 className="text-2xl font-bold text-primary">Budget</h2>
          <p className="text-sm text-gray-500">
            Your everyday event managing platform
          </p>
        </div>

        <div className="flex gap-3 pt-6">
          <span className=" border border-gray-400 flex rounded-sm gap-2 items-center p-1 text-sm">
            <Calendar size={18} />
            16th/12/2024
          </span>
          <Button variant={"outline"} size="sm">
            <Download />
            Export
          </Button>

          <Button size={'sm'}>
            <Plus />
            Add Payement Method
          </Button>
        </div>
      </div>
  )
}

export default BudgetTop