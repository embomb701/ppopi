const orbs = [
  { left: "6%", top: "18%", size: "16rem", delay: "0s", duration: "22s" },
  { left: "78%", top: "12%", size: "10rem", delay: "-6s", duration: "18s" },
  { left: "72%", top: "58%", size: "18rem", delay: "-12s", duration: "28s" },
  { left: "18%", top: "72%", size: "12rem", delay: "-3s", duration: "19s" },
];

export function AmbientScene() {
  return (
    <div aria-hidden className="ambient-scene pointer-events-none fixed inset-0 overflow-hidden">
      <div className="ambient-grid" />
      <div className="scanline" />
      {orbs.map((orb, index) => (
        <span
          key={index}
          className="ambient-orb"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            animationDelay: orb.delay,
            animationDuration: orb.duration,
          }}
        />
      ))}
      <div className="orbit-ring orbit-ring-a" />
      <div className="orbit-ring orbit-ring-b" />
    </div>
  );
}
