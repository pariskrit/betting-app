import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const CashOut = () => {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex text-white  gap-3 items-center">
        <Label className="font-normal">Username:</Label>
        <p className="font-normal text-sm">testName</p>
      </div>
      <form className="flex flex-col gap-2 mb-2 ">
        <Label className="text-white">Cash Out</Label>
        <Input className="text-white w-[50%]" type="number" />
        <Button className="w-full md:w-[100px] text-white ">Submit</Button>
      </form>
    </section>
  );
};

export default CashOut;
