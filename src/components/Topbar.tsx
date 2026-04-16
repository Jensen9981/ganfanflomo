import { Search, Bell, Cpu, Zap } from 'lucide-react';

export function Topbar() {
  return (
    <header className="h-16 flex justify-between items-center px-8 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/15 shrink-0 z-40">
      <div className="flex items-center gap-8">
        <span className="text-lg font-black bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent font-headline tracking-widest">
          SYNTHETIC_INTEL_V1
        </span>
        <nav className="hidden md:flex gap-6 font-headline uppercase tracking-widest text-xs">
          <a href="#" className="text-primary border-b-2 border-primary pb-1 transition-all">Nodes</a>
          <a href="#" className="text-on-surface/60 hover:text-on-surface transition-all">Buffer</a>
          <a href="#" className="text-on-surface/60 hover:text-on-surface transition-all">Stream</a>
          <a href="#" className="text-on-surface/60 hover:text-on-surface transition-all">Archive</a>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="QUERY_CORE..." 
            className="bg-surface-container-low border-b border-outline-variant/30 text-xs py-1.5 px-4 w-64 focus:outline-none focus:border-primary transition-all font-headline tracking-tighter text-on-surface placeholder:text-outline-variant"
          />
          <Search size={14} className="absolute right-2 top-2 text-outline-variant" />
        </div>
        <div className="flex gap-4 text-outline-variant">
          <Bell size={18} className="cursor-pointer hover:text-primary transition-colors" />
          <Cpu size={18} className="cursor-pointer hover:text-primary transition-colors" />
          <Zap size={18} className="cursor-pointer hover:text-primary transition-colors" />
        </div>
        <img 
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80" 
          alt="Avatar" 
          className="w-8 h-8 rounded-full border border-primary/30 object-cover"
        />
      </div>
    </header>
  );
}
