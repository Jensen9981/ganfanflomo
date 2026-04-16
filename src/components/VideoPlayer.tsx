import { Play, SkipBack, SkipForward, Pause, Volume2, Subtitles, Settings, Maximize, Download } from 'lucide-react';

export function VideoPlayer() {
  return (
    <section className="flex-1 bg-surface-container-low flex flex-col p-6 overflow-hidden min-w-[400px]">
      <div className="relative flex-1 bg-black rounded-xl overflow-hidden shadow-2xl border border-outline-variant/10 flex flex-col">
        <div className="flex-1 flex items-center justify-center group relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" 
            alt="Main Content" 
            className="w-full h-full object-cover opacity-80"
          />
          
          {/* Subtitles Overlay */}
          <div className="absolute bottom-16 left-0 right-0 text-center pointer-events-none">
            <span className="bg-black/70 backdrop-blur px-4 py-2 rounded text-primary-dim font-headline text-lg tracking-wide border border-primary/20">
              ANALYZING GLOBAL_DATA_FLOW: PERSISTENT ANOMALY DETECTED.
            </span>
          </div>
          
          {/* Centered Play Icon on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-surface-container-lowest/20 transition-all cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur flex items-center justify-center border border-primary/50">
              <Play size={32} className="text-primary ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
        
        {/* Video Controls */}
        <div className="h-20 bg-surface-container-high/90 backdrop-blur-md px-6 flex flex-col justify-center border-t border-outline-variant/20 shrink-0">
          {/* Seek Bar */}
          <div className="w-full h-1 bg-outline-variant/30 rounded-full mb-4 relative cursor-pointer group">
            <div className="absolute h-full bg-primary w-2/3 rounded-full shadow-[0_0_8px_#8ff5ff]"></div>
            <div className="absolute left-2/3 -top-1 w-3 h-3 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform -translate-x-1/2"></div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <SkipBack size={18} className="cursor-pointer hover:text-primary transition-colors text-on-surface" />
              <Pause size={24} className="cursor-pointer hover:text-primary transition-colors text-on-surface" fill="currentColor" />
              <SkipForward size={18} className="cursor-pointer hover:text-primary transition-colors text-on-surface" />
              
              <div className="flex items-center gap-2 ml-4">
                <Volume2 size={16} className="text-outline-variant" />
                <div className="w-16 h-1 bg-outline-variant/30 rounded-full">
                  <div className="w-3/4 h-full bg-on-surface-variant rounded-full"></div>
                </div>
              </div>
              
              <span className="text-[10px] font-mono text-outline-variant ml-2">08:42 / 12:45</span>
            </div>
            
            <div className="flex items-center gap-4 text-outline-variant">
              <button className="text-[10px] font-headline border border-outline-variant/30 px-2 py-1 rounded hover:border-primary hover:text-primary transition-all">1.25x SPEED</button>
              <Subtitles size={18} className="cursor-pointer hover:text-primary transition-colors" />
              <Settings size={18} className="cursor-pointer hover:text-primary transition-colors" />
              <Maximize size={18} className="cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-start shrink-0">
        <div>
          <h1 className="font-headline text-2xl font-black text-on-surface tracking-tight">GLOBAL_TRAFFIC_MONITOR_V4.DATA</h1>
          <div className="flex gap-4 mt-1 text-outline-variant text-[10px] font-mono uppercase">
            <span>Capture: 2024-09-12</span>
            <span>Source: SAT_COM_7</span>
            <span className="text-tertiary">Status: VERIFIED</span>
          </div>
        </div>
        <button className="bg-primary/10 border border-primary/20 text-primary px-4 py-2 text-xs font-headline flex items-center gap-2 rounded hover:bg-primary/20 transition-all">
          <Download size={14} /> EXPORT_DATA
        </button>
      </div>
    </section>
  );
}
