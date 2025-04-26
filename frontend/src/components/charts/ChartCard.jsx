import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import BarchartHorizontal from "./BarCharts/BarChartHorizontal";
import BarChartMultiple from "./BarCharts/BarChartMultiple";
import BarChart from "./BarCharts/BarChart";

function ChartCard(props) {
  return (
    <Dialog className={`w-screen rounded-none`}>
      <DialogTrigger asChild>
        <Button
          variant=""
          className="w-full rounded-none bg-purple-800 hover:bg-purple-700 text-gray-200"
        >
          {props.name}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[calc(80dvw)] bg-neutral-900 text-gray-200 grid grid-cols-3">
        <DialogHeader className={`col-span-3`}>
          <DialogTitle className={``}>{props.name}</DialogTitle>
          <DialogDescription className={`w-full`}>
            Add a new {props.name} to your collection
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 col-span-1">
          <div className="items-center w-full">
            <BarChart className={`w-full`} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>
        <div className="py-4 col-span-1">
          <div className="items-center w-full">
            <BarchartHorizontal className={`w-full`} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>
        <div className="py-4 col-span-1">
          <div className="items-center w-full">
            <BarChartMultiple className={`w-full`} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>

        <DialogFooter className={`col-span-3`}>
          <Button
            type="submit"
            className={`w-full bg-neutral-900 hover:bg-cyan-600`}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ChartCard;