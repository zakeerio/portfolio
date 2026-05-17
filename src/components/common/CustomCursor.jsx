export function CustomCursor({ hovered, position, visible }) {
  return (
    <div className="pointer-events-none fixed z-[1100] hidden lg:block">
      <div
        className={`custom-cursor ${hovered ? "cursor-hover-active" : ""}`}
        style={{ left: position.x, top: position.y, opacity: visible ? 1 : 0 }}
      />
      <div
        className="custom-cursor-dot"
        style={{ left: position.x, top: position.y, opacity: visible ? 1 : 0 }}
      />
    </div>
  );
}
