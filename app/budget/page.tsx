import BudgetTop from "./components/BudgetTop";

const BudgetHomePage = () => {
  return (
    <div className="budget-container space-y-4 border border-gray-200 p-2 min-h-[500px] ">
      <BudgetTop />

      <div className=" grid grid-cols-6">
        <div className=" col-span-4">start here</div>
        <div className=" col-span-2">sidebar</div>
      </div>
    </div>
  );
};

export default BudgetHomePage;
