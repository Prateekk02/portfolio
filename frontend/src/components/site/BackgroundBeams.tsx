/**
 * Decorative background of drifting blue and violet beams.
 *
 * The beam shapes come from /beams.svg, used as a mask. A wide colour band
 * slides behind the mask using only a CSS transform, so the effect runs off
 * the main thread and adds no JavaScript. It is hidden from assistive
 * technology, ignores clicks, and stays still for visitors who prefer
 * reduced motion.
 */
export function BackgroundBeams() {
  return (
    <div aria-hidden="true" data-testid="background-beams" className="beams">
      <div className="beams-sweep" />
    </div>
  );
}
