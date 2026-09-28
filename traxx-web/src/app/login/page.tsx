import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardBody } from "@/components/ui/Card";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50">
        <CardBody className="p-8">
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white relative">
              TX
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-white dark:border-slate-900"></div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">Welcome back</h2>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-8">Enter your details to access your dashboard.</p>

          <form className="space-y-4">
            <Input 
              label="Email"
              type="email" 
              placeholder="name@company.com" 
            />
            
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-sm font-semibold text-slate-700">Password</label>
                <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">Forgot password?</Link>
              </div>
              <Input 
                type="password" 
                placeholder="••••••••" 
              />
            </div>
            
            <Button type="button" className="w-full mt-2">
              Sign In
            </Button>
          </form>

          <p className="text-center mt-8 text-sm text-slate-500">
            Don&apos;t have an account? <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-700">Start 7-day free trial</Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
