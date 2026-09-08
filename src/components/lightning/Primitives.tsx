import { ReactNode } from "react";

export const Card = ({ title, action, children, className = "" }: { title?: string; action?: ReactNode; children: ReactNode; className?: string }) => (
  <section className={`slds-card ${className}`}>
    {(title || action) && (
      <header className="slds-card-header">
        <h2 className="text-[13px] font-semibold text-foreground">{title}</h2>
        {action}
      </header>
    )}
    <div className="p-3">{children}</div>
  </section>
);

export const Highlights = ({
  icon, recordType, name, fields, actions,
}: {
  icon: string;
  recordType: string;
  name: string;
  fields: { label: string; value: ReactNode }[];
  actions?: ReactNode;
}) => (
  <div className="slds-card mb-3">
    <div className="px-4 py-3 flex items-start gap-3">
      <div className="w-11 h-11 rounded bg-primary text-primary-foreground flex items-center justify-center text-lg">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] text-muted-foreground">{recordType}</div>
        <h1 className="text-[18px] font-bold text-foreground leading-tight">{name}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1 mt-3">
          {fields.map((f) => (
            <div key={f.label}>
              <div className="text-[10.5px] uppercase tracking-wide text-muted-foreground">{f.label}</div>
              <div className="text-[12.5px] text-foreground font-medium truncate">{f.value}</div>
            </div>
          ))}
        </div>
      </div>
      {actions && <div className="flex items-start gap-1.5">{actions}</div>}
    </div>
  </div>
);

export const Path = ({ stages, current }: { stages: string[]; current: string }) => {
  const currentIdx = stages.indexOf(current);
  return (
    <div className="slds-card mb-3 p-2">
      <div className="flex items-stretch w-full">
        {stages.map((s, i) => {
          const isPast = i < currentIdx;
          const isCurrent = i === currentIdx;
          const cls = isCurrent
            ? "bg-primary text-primary-foreground"
            : isPast
              ? "bg-success/15 text-success"
              : "bg-secondary text-muted-foreground";
          return (
            <div
              key={s}
              className={`relative flex-1 h-8 ${cls} flex items-center justify-center text-[11.5px] font-medium ${i === 0 ? "rounded-l" : ""} ${i === stages.length - 1 ? "rounded-r" : ""}`}
              style={{
                clipPath: i === stages.length - 1
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 10px 50%)"
                  : i === 0
                    ? "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)"
                    : "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 10px 50%)",
                marginLeft: i === 0 ? 0 : -1,
              }}
            >
              {s}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const RecordTabs = ({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (t: string) => void }) => (
  <div className="border-b border-border bg-card">
    <div className="flex pl-2">
      {tabs.map((t) => (
        <button key={t} onClick={() => onChange(t)} className="slds-tab" data-active={t === active}>
          {t}
        </button>
      ))}
    </div>
  </div>
);

export const InfoGrid = ({ rows }: { rows: { label: string; value: ReactNode }[] }) => (
  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
    {rows.map((r) => (
      <div key={r.label} className="border-b border-border pb-1.5">
        <dt className="text-[11px] text-muted-foreground">{r.label}</dt>
        <dd className="text-[12.5px] text-foreground">{r.value}</dd>
      </div>
    ))}
  </dl>
);
