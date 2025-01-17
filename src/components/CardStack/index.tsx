import type { CSSProperties } from "preact/compat";

export const CardStack = ({ stack, isSelected, isTargetted, style = {}, ...handlers }: {
  stack: Stack,
  isSelected?: boolean,
  isTargetted?: boolean,
  style?: CSSProperties,
} & Handlers) => {
  const angle = (
    (stack.tapped ? -30 : 0) + (stack.reversed ? 180 : 0) + (stack.laid ? -90 : 0)
  );

  const containerStyles = stack.cards.length === 0 ? {
    pointerEvents: "none",
  } : {
    ...style,
    backgroundImage: `url(${stack.cards[0]})`,
    transform: `rotate(${angle}deg)`,
  };

  const extraClass = isSelected ? (
    "dmpg-selected"
  ) : isTargetted ? (
    "dmpg-targetted"
  ) : stack.cards.length <= 0 ? (
    "dmpg-empty"
  ) : stack.cards.length > 0 && stack.flipped ? (
    "dmpg-flipped"
  ) : (
    "dmpg-nonempty"
  );

  return (
    <div class="dmpg-card-container" style={containerStyles} {...handlers}>
      <div class={`dmpg-card-inner ${extraClass}`}>
        {stack.cards.length > 1 && (
          <div class={`dmpg-card-counter ${stack.flipped ? 'dmpg-flipped' : ''}`}>
            {stack.flipped ? stack.cards.length : `+${stack.cards.length - 1}`}
          </div>
        )}
      </div>
    </div>
  );
};
