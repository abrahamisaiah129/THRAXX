export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">Let's talk.</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Need a custom enterprise plan or have a technical question? Reach out to the team directly.
        </p>
      </div>

      <div className="bg-white dark:bg-[#020817] rounded-[2rem] border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
        {/* 
          ZOHO FORM EMBED CONTAINER
          Paste your Zoho Forms <iframe> script below.
        */}
        <div className="w-full min-h-[500px] flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Zoho Form Embed Placeholder</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              Paste your Zoho Form `iframe` embed code here inside `src/app/contact/page.tsx`
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
