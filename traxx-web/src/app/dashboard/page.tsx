import { Card, CardBody } from "@/components/ui/Card";
import { RoverAIChat } from "@/components/ui/RoverAIChat";
import { Map } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="flex flex-col xl:flex-row gap-6 h-[calc(100vh-8rem)]">
      
      {/* Left Column: Stats & Map */}
      <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Active Riders", value: "24", sub: "Out of 30 total", good: true },
            { label: "On Time Delivery", value: "94%", sub: "+2% this week", good: true },
            { label: "Total Distance", value: "1,240 km", sub: "Today", good: true },
            { label: "Critical Flags", value: "2", sub: "Needs attention", good: false },
          ].map((kpi, i) => (
            <Card key={i} className="relative overflow-hidden border-slate-200 dark:border-slate-800">
              <div className={`absolute top-0 left-0 right-0 h-1 opacity-80 ${kpi.good ? 'bg-blue-600' : 'bg-red-500'}`}></div>
              <CardBody className="p-5">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">{kpi.label}</div>
                <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">{kpi.value}</div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{kpi.sub}</div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="flex-1 min-h-[400px] bg-slate-200 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden flex items-center justify-center group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="text-center z-10 relative">
            <Map className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-lg font-bold text-slate-600 dark:text-slate-300">Live Map Area</h3>
            <p className="text-sm text-slate-500 max-w-xs mt-2">Integrating Google Maps or Mapbox here for real-time tracking.</p>
          </div>
        </div>
      </div>

      {/* Right Column: Rover AI Chat */}
      <div className="w-full xl:w-[420px] shrink-0 h-full flex flex-col">
        <RoverAIChat />
      </div>

    </div>
  );
}
