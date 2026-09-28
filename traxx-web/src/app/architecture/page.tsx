import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { Factory, Warehouse, Store, User } from "lucide-react";
import { Card, CardBody } from "@/components/ui/Card";

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[#faf9f8] dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans">
      <SiteNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-10 max-w-[1280px] mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
          The Intelligence Behind the Movement
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
          Traxx maps the reality of Nigerian logistics into a single, cohesive platform. 
          See how data flows from the manufacturer down to the end customer.
        </p>
      </section>

      {/* Diagram Section */}
      <section className="px-4 md:px-10 pb-24">
        <div className="max-w-[1280px] mx-auto">
          <Card className="bg-white dark:bg-slate-900 border-none shadow-xl shadow-slate-200/50 dark:shadow-black/20 overflow-hidden">
            <CardBody className="p-8 md:p-16 overflow-x-auto">
              
              {/* Supply Chain Diagram */}
              <div className="min-w-[900px] flex justify-between items-center relative py-12">
                
                {/* Connecting Lines */}
                <div className="absolute top-1/2 left-16 right-16 h-px border-t-2 border-dashed border-slate-300 dark:border-slate-700 -z-10"></div>
                
                {/* Node 1: Supplier & Manufacturer */}
                <div className="flex flex-col gap-12 z-10">
                  <div className="flex flex-col items-center bg-white dark:bg-slate-900 p-2">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-3">
                      <Factory className="w-8 h-8" />
                    </div>
                    <span className="font-bold text-sm">Supplier</span>
                  </div>
                  
                  <div className="flex flex-col items-center bg-white dark:bg-slate-900 p-2 relative">
                    <span className="absolute -top-6 text-xs font-bold text-orange-500 whitespace-nowrap">Line Haul FTL/PTL</span>
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-3">
                      <Factory className="w-8 h-8" />
                    </div>
                    <span className="font-bold text-sm">Manufacturer</span>
                  </div>
                </div>

                {/* Node 2: Warehouses */}
                <div className="flex flex-col gap-24 z-10 relative">
                  {/* Vertical connecting line for warehouses */}
                  <div className="absolute left-1/2 -top-12 bottom-12 w-px border-l-2 border-dashed border-slate-300 dark:border-slate-700 -z-10"></div>

                  <div className="flex flex-col items-center bg-white dark:bg-slate-900 p-2 relative">
                    <span className="absolute -top-6 right-0 text-xs font-bold text-orange-500 whitespace-nowrap">Store Replenishment</span>
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-3">
                      <Warehouse className="w-8 h-8" />
                    </div>
                    <span className="font-bold text-sm">Warehouse 1</span>
                  </div>
                  
                  <div className="flex flex-col items-center bg-white dark:bg-slate-900 p-2">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-3">
                      <Warehouse className="w-8 h-8" />
                    </div>
                    <span className="font-bold text-sm">Warehouse 2</span>
                  </div>
                </div>

                {/* Node 3: Distributor/Last Mile DC */}
                <div className="flex flex-col items-center z-10 relative bg-white dark:bg-slate-900 p-2">
                   <span className="absolute -top-8 text-xs font-bold text-orange-500 whitespace-nowrap text-center">Multiple Hops<br/>Last Mile</span>
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-3">
                    <Warehouse className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-sm text-center">Distributor/<br/>Last Mile DC</span>
                </div>

                {/* Node 4: Stores & In-house Drivers */}
                <div className="flex flex-col justify-between h-96 z-10 relative">
                  {/* Vertical connecting line for stores */}
                  <div className="absolute left-0 -top-8 bottom-1/2 w-px border-l-2 border-dashed border-slate-300 dark:border-slate-700 -z-10"></div>

                  <div className="flex flex-col items-center bg-white dark:bg-slate-900 p-2">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl flex items-center justify-center mb-2">
                      <Store className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xs">Store 1</span>
                  </div>
                  <div className="flex flex-col items-center bg-white dark:bg-slate-900 p-2 relative">
                    <span className="absolute -top-6 -right-16 text-xs font-bold text-orange-500 whitespace-nowrap text-center">HyperLocal<br/>Delivery</span>
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl flex items-center justify-center mb-2">
                      <Store className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xs">Store 2</span>
                  </div>
                  <div className="flex flex-col items-center bg-white dark:bg-slate-900 p-2">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl flex items-center justify-center mb-2">
                      <Store className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xs">Store 3</span>
                  </div>
                  <div className="flex flex-col items-center bg-white dark:bg-slate-900 p-2">
                    <span className="absolute -top-6 -left-32 text-xs font-bold text-orange-500 whitespace-nowrap">Using In-house Drivers</span>
                  </div>
                </div>

                {/* Node 5: End Customers */}
                <div className="flex flex-col justify-center gap-20 z-10">
                  <div className="flex flex-col items-center bg-white dark:bg-slate-900 p-2">
                    <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mb-2">
                      <User className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xs">End Customer</span>
                  </div>
                  <div className="flex flex-col items-center bg-white dark:bg-slate-900 p-2">
                    <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mb-2">
                      <User className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xs">End Customer</span>
                  </div>
                </div>

              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Comparison Feature Wheel */}
      <section className="px-4 md:px-10 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="inline-flex rounded-lg border border-blue-600 bg-white dark:bg-slate-900 p-1 mb-16 overflow-hidden">
            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-md transition-colors">
              With Traxx
            </button>
            <button className="px-8 py-3 bg-transparent text-blue-600 font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors">
              Without Traxx
            </button>
          </div>

          <div className="relative w-full max-w-4xl mx-auto py-10 md:py-20 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
            
            {/* Center Logo (Top on mobile, center on desktop) */}
            <div className="w-32 h-32 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex items-center justify-center z-20 border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center font-black text-2xl text-white relative">
                TX
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-amber-500 rounded-full border-2 border-white dark:border-slate-900"></div>
              </div>
            </div>

            {/* Connecting lines for spokes (desktop only) */}
            <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none -z-10">
              <svg className="w-full h-full text-slate-200 dark:text-slate-800" viewBox="0 0 800 400" preserveAspectRatio="none">
                <line x1="200" y1="50" x2="400" y2="200" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="150" x2="400" y2="200" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="250" x2="400" y2="200" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="350" x2="400" y2="200" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                
                <line x1="600" y1="50" x2="400" y2="200" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="600" y1="150" x2="400" y2="200" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="600" y1="250" x2="400" y2="200" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="600" y1="350" x2="400" y2="200" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between gap-6 md:gap-0 z-10">
              {/* Left Features */}
              <div className="flex flex-col gap-6 md:w-64">
                <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 px-6 py-4 rounded-xl font-bold text-slate-700 dark:text-slate-300">Schedule Deliveries</div>
                <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 px-6 py-4 rounded-xl font-bold text-slate-700 dark:text-slate-300">Order Tracking</div>
                <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 px-6 py-4 rounded-xl font-bold text-slate-700 dark:text-slate-300">Orchestration</div>
                <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 px-6 py-4 rounded-xl font-bold text-slate-700 dark:text-slate-300">Capacity Management</div>
              </div>

              {/* Right Features */}
              <div className="flex flex-col gap-6 md:w-64">
                <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 px-6 py-4 rounded-xl font-bold text-slate-700 dark:text-slate-300">Offer Flexibility</div>
                <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 px-6 py-4 rounded-xl font-bold text-slate-700 dark:text-slate-300">Programmatic Alerts</div>
                <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 px-6 py-4 rounded-xl font-bold text-slate-700 dark:text-slate-300">Improve Success Rate</div>
                <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 px-6 py-4 rounded-xl font-bold text-slate-700 dark:text-slate-300">Capture Feedback</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
