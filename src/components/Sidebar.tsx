import { Terminal, FolderOpen, Database, Activity, Settings } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-20 h-full bg-surface-container-lowest flex flex-col items-center py-6 border-r border-outline-variant/10 z-50 shrink-0">
      <div className="mb-10 text-xl font-bold text-primary tracking-widest font-headline">
        S_ID
      </div>
      <nav className="flex flex-col gap-8 w-full items-center">
        <NavItem icon={<Terminal size={24} />} label="Terminal" active />
        <NavItem icon={<FolderOpen size={24} />} label="Projects" />
        <NavItem icon={<Database size={24} />} label="Assets" />
        <NavItem icon={<Activity size={24} />} label="Analytics" />
        <div className="mt-auto w-full">
          <NavItem icon={<Settings size={24} />} label="Settings" />
        </div>
      </nav>
    </aside>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`group flex flex-col items-center gap-1 w-full py-3 transition-all duration-200 ${active ? 'text-primary border-l-2 border-primary bg-surface-container' : 'text-outline-variant hover:text-on-surface hover:bg-surface-container'}`}>
      {icon}
      <span className="font-headline tracking-tight text-[10px] uppercase mt-1">{label}</span>
    </button>
  );
}
