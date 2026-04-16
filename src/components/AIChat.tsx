import { Send, Paperclip, Mic } from 'lucide-react';

export function AIChat() {
  return (
    <section className="w-[20%] min-w-[250px] bg-surface-container flex flex-col border-l border-outline-variant/10 shrink-0">
      <div className="p-4 border-b border-outline-variant/15 bg-surface-container-high/30 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#ac89ff]"></div>
          <span className="font-headline text-[10px] tracking-[0.2em] text-secondary uppercase">SYNTH_CORE_AI</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
        {/* AI Message */}
        <div className="flex flex-col items-start gap-2 max-w-[90%]">
          <div className="bg-surface-container-highest p-3 rounded-xl rounded-tl-none border border-outline-variant/10 text-xs leading-relaxed text-on-surface-variant">
            I've analyzed the transcript segments from 02:15. The anomaly you're seeing in Sector 7-G matches a known cyber-physical intrusion pattern documented in the Q2 ARCHIVE. 
            <br/><br/>
            Would you like me to cross-reference this with the historical node logs?
          </div>
        </div>
        
        {/* User Message */}
        <div className="flex flex-col items-end gap-2 ml-auto max-w-[90%]">
          <div className="bg-secondary/10 border border-secondary/20 p-3 rounded-xl rounded-tr-none text-xs leading-relaxed text-on-surface">
            Yes, cross-reference and check for previous occurrences in the same coordinate range.
          </div>
        </div>
        
        {/* AI Typing */}
        <div className="flex gap-1 items-center p-2">
          <div className="w-1.5 h-1.5 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-1.5 h-1.5 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-1.5 h-1.5 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
      
      <div className="p-4 shrink-0 bg-surface-container">
        <div className="relative group">
          <textarea 
            className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-3 text-xs focus:outline-none focus:border-secondary transition-all resize-none font-body min-h-[80px] text-on-surface placeholder:text-outline-variant" 
            placeholder="Ask SYNTH_CORE..." 
            rows={3}
          ></textarea>
          <button className="absolute bottom-3 right-3 text-secondary hover:scale-110 transition-transform">
            <Send size={16} />
          </button>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-[9px] text-outline-variant font-mono">CONTEXT: ACTIVE_TRANSCRIPT</span>
          <div className="flex gap-2 text-outline-variant">
            <Paperclip size={14} className="cursor-pointer hover:text-secondary transition-colors" />
            <Mic size={14} className="cursor-pointer hover:text-secondary transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
}
