import { ArrowRight, Search, Calendar, Clock, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/landing/CTASection";

export default function BlogsPage() {
  const categories = ["All", "Fleet management", "Rider accountability", "Customer experience", "Nigerian logistics", "Product updates"];
  
  const posts = [
    {
      title: "How live tracking reduces operational chaos by 40%",
      excerpt: "A deep dive into why relying on phone calls and WhatsApp messages for dispatch is costing your business more than just time.",
      category: "Fleet management",
      date: "October 12, 2026",
      readTime: "5 min read",
      author: "Traxx Team"
    },
    {
      title: "The hidden cost of unassigned movement",
      excerpt: "When your riders go off-grid, your margins disappear. Here is how automated flagging completely stops ghost rides.",
      category: "Rider accountability",
      date: "October 5, 2026",
      readTime: "4 min read",
      author: "Traxx Team"
    },
    {
      title: "Delivering trust: Ending the 'Where is my order?' call",
      excerpt: "Transparent delivery links do more than save support time—they fundamentally change how customers perceive your brand.",
      category: "Customer experience",
      date: "September 28, 2026",
      readTime: "6 min read",
      author: "Traxx Team"
    }
  ];

  return (
    <div className="bg-white dark:bg-[#020817] text-slate-900 dark:text-slate-50 min-h-screen">
      {/* 1. HERO (Featured Post) */}
      <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            The Traxx <span className="text-blue-600">Log.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Insights on physical operations, rider accountability, and scaling logistics across Nigeria.
          </p>
        </div>

        {/* Featured Post Card */}
        <Link href="/blogs/how-to-scale-delivery" className="group block bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-4 md:p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <ImageIcon className="w-12 h-12 text-slate-400" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
            <div className="px-4 md:px-8 py-4">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full mb-6">Featured</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 group-hover:text-blue-600 transition-colors">Building the OS for African physical logistics.</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                Why we started Traxx, the core problems in the Nigerian dispatch sector, and how replacing phone calls with software completely changes unit economics.
              </p>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mb-8">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Oct 20, 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 8 min read</span>
              </div>
              <span className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Read Article <ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>
        </Link>
      </section>

      {/* 2. FILTERS & SEARCH */}
      <section className="py-8 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button key={cat} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${i === 0 ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input type="text" placeholder="Search posts..." className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </section>

      {/* 3. POST GRID */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link key={i} href={`/blogs/post-${i}`} className="group flex flex-col h-full bg-white dark:bg-[#020817] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="aspect-video bg-slate-100 dark:bg-slate-900 flex items-center justify-center relative">
                <ImageIcon className="w-8 h-8 text-slate-300 dark:text-slate-700" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-3 block">{post.category}</span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs font-medium text-slate-500 pt-4 border-t border-slate-100 dark:border-slate-800/50">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" className="px-8 py-6 rounded-xl font-bold border-slate-200 dark:border-slate-800">Load More Posts</Button>
        </div>
      </section>

      {/* 4. NEWSLETTER & CTA */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Stay in the loop.</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Get operational insights and product updates delivered straight to your inbox.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 font-bold shadow-none">Subscribe</Button>
          </form>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
