import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ChartTabs = () => {
  return (<Tabs defaultValue="details" className="w-[400px]">
    <TabsList>
      <TabsTrigger value="details">Details</TabsTrigger>
      <TabsTrigger value="data">Data</TabsTrigger>
    </TabsList>
    <TabsContent value="details">Chart details.</TabsContent>
    <TabsContent value="data">Chart data.</TabsContent>
  </Tabs >)
}

export default ChartTabs;

