interface AuroraFieldProps {
  className?: string;
}

// Three large, softly blurred colour blobs drifting slowly — a calmer,
// more premium dark-section backdrop than a particle animation. Pure CSS
// (see .aurora-field/.aurora-blob-* in globals.css): transform + blur only,
// GPU-composited, nothing to compute per frame. No client JS needed at all.
export default function AuroraField({ className = "" }: AuroraFieldProps) {
  return (
    <div className={`aurora-field ${className}`} aria-hidden="true">
      <span className="aurora-blob aurora-blob-1" />
      <span className="aurora-blob aurora-blob-2" />
      <span className="aurora-blob aurora-blob-3" />
    </div>
  );
}
