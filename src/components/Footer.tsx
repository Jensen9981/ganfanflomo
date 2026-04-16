export function Footer() {
  return (
    <footer className="h-8 glass-panel border-t border-outline-variant/10 px-6 flex items-center justify-between shrink-0 z-40">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
          <span className="text-[9px] font-mono uppercase tracking-widest text-outline-variant">System_Ready</span>
        </div>
        <div className="h-3 w-[1px] bg-outline-variant/30"></div>
        <div className="text-[9px] font-mono text-outline-variant">Uplink: 452 MBPS</div>
        <div className="text-[9px] font-mono text-outline-variant">Encryption: AES-512</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-24 h-1.5 bg-outline-variant/20 rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-2/5"></div>
          </div>
          <span className="text-[9px] font-mono text-outline-variant">MEM_USAGE: 42%</span>
        </div>
        <span className="text-[9px] font-mono text-outline-variant">LOCAL_TIME: 14:42:01</span>
      </div>
    </footer>
  );
}
