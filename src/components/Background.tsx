export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base grid */}
      <div className="absolute inset-0 grid-bg mask-fade-y opacity-60" />

      {/* aurora blobs */}
      <div className="absolute -left-40 -top-40 size-[42rem] rounded-full bg-[var(--color-brand)]/25 blur-[140px] animate-aurora" />
      <div className="absolute -right-40 top-1/4 size-[38rem] rounded-full bg-[var(--color-brand-2)]/20 blur-[150px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 size-[34rem] rounded-full bg-fuchsia-500/15 blur-[150px] animate-aurora [animation-delay:-3s]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,var(--color-bg)_85%)]" />
    </div>
  );
}
