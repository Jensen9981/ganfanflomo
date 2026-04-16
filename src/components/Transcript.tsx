export function Transcript() {
  return (
    <section className="w-[22%] min-w-[250px] glass-panel flex flex-col border-l border-outline-variant/10 shrink-0">
      <div className="p-4 border-b border-outline-variant/15 shrink-0">
        <div className="flex items-center justify-between mb-2">
          <span className="font-headline text-[10px] tracking-[0.2em] text-outline-variant uppercase">Live_Transcript</span>
          <span className="text-[10px] text-tertiary-dim bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/20">AUTO_GEN</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
        <TranscriptBlock 
          time="00:00 - 02:15" 
          text="System initialization complete. Accessing primary data nodes for orbital surveillance. No significant variance in standard metrics." 
        />
        <div className="space-y-1 bg-surface-container-high/50 p-3 rounded border-l-2 border-primary">
          <span className="text-[9px] font-mono text-primary uppercase">02:15 - 04:30 [ACTIVE]</span>
          <p className="text-sm text-on-surface leading-relaxed font-medium">
            Searching for anomaly signature 0x8F. Pattern matching in progress. Detection confirmed in Sector 7-G. Redirecting visual sensors.
          </p>
        </div>
        <TranscriptBlock 
          time="04:30 - 06:12" 
          text="Thermal imaging overlay activated. Heat signature inconsistent with localized atmospheric conditions. Scaling resolution to 8K." 
        />
        <TranscriptBlock 
          time="06:12 - 08:45" 
          text="Deep-packet inspection of localized telemetry suggests external interference. Analyzing encryption layer." 
        />
        <div className="space-y-1 opacity-50">
          <span className="text-[9px] font-mono text-outline-variant uppercase">08:45 - 12:45 [PENDING]</span>
          <p className="text-sm text-outline-variant leading-relaxed italic">
            Processing audio stream...
          </p>
        </div>
      </div>
    </section>
  );
}

function TranscriptBlock({ time, text }: { time: string; text: string }) {
  return (
    <div className="space-y-1">
      <span className="text-[9px] font-mono text-outline-variant uppercase">{time}</span>
      <p className="text-sm text-on-surface-variant leading-relaxed cursor-pointer hover:text-on-surface transition-colors">
        {text}
      </p>
    </div>
  );
}
