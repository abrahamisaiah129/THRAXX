const fs = require('fs');
const dirs = ['live-map', 'assignments', 'notifications', 'riders', 'shifts', 'vendors', 'reports', 'traxx-ai', 'settings', 'feedback'];

dirs.forEach(dir => {
  const path = 'src/app/dashboard/' + dir;
  fs.mkdirSync(path, { recursive: true });
  
  const content = `import { Card, CardBody } from "@/components/ui/Card";

export default function Page() {
  return (
    <Card className="dark:bg-slate-900 dark:border-slate-800">
      <CardBody>
        <h2 className="text-2xl font-bold dark:text-white capitalize">${dir.replace('-', ' ')}</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">This is the ${dir} page.</p>
      </CardBody>
    </Card>
  );
}`;
  fs.writeFileSync(path + '/page.tsx', content);
});

console.log("Created all pages");
