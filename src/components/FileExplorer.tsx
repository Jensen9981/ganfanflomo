import { RefreshCw, ChevronDown, PlayCircle } from 'lucide-react';

export function FileExplorer() {
  return (
    <section className="w-[18%] min-w-[200px] bg-surface-container-lowest flex flex-col border-r border-outline-variant/10 shrink-0">
      <div className="p-4 border-b border-outline-variant/15 flex items-center justify-between">
        <span className="font-headline text-[10px] tracking-[0.2em] text-outline-variant uppercase">Local_Hierarchy</span>
        <RefreshCw size={14} className="text-primary cursor-pointer hover:rotate-180 transition-transform duration-500" />
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-4">
        <div>
          <div className="flex items-center gap-2 px-2 py-1 text-primary-dim cursor-pointer">
            <ChevronDown size={14} />
            <span className="font-headline text-xs font-bold tracking-widest">CY_2024</span>
          </div>
          <div className="ml-4 mt-2">
            <div className="flex items-center gap-2 px-2 py-1 text-on-surface/80 cursor-pointer">
              <ChevronDown size={14} />
              <span className="text-[11px] font-medium">Q3_SEPTEMBER</span>
            </div>
            <div className="ml-6 mt-3 flex flex-col gap-3">
              <VideoThumbnail 
                title="ID_NODE_982.mp4" 
                duration="12:45" 
                imgSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&q=80" 
              />
              <VideoThumbnail 
                title="SYSTEM_DUMP_B1.mp4" 
                duration="08:12" 
                imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&q=80" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoThumbnail({ title, duration, imgSrc }: { title: string; duration: string; imgSrc: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-lg overflow-hidden border border-outline-variant/20 group-hover:border-primary/50 transition-all">
        <img src={imgSrc} alt={title} className="w-full aspect-video object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-surface/40">
          <PlayCircle size={24} className="text-primary" />
        </div>
        <div className="absolute bottom-1 right-1 bg-surface-container-highest px-1 text-[9px] font-mono rounded text-on-surface">{duration}</div>
      </div>
      <p className="text-[10px] mt-1 text-outline-variant font-mono truncate group-hover:text-primary transition-colors">{title}</p>
    </div>
  );
}
