import { Card, CardBody } from "@/components/ui/Card";

export default function Page() {
  return (
    <Card className="dark:bg-slate-900 dark:border-slate-800">
      <CardBody>
        <h2 className="text-2xl font-bold dark:text-white capitalize">assignments</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">This is the assignments page.</p>
      </CardBody>
    </Card>
  );
}