import { render } from "preact";
import { useEffect } from "preact/hooks";
import { configurations } from "../configurations";

import { shuffle as shuffleArray } from "../../../utils/array";
import {
  makeStack, setGameState, untapAll,
  undo, redo, getUndoState, getRedoState,
} from "../../../states/game";

import { Playground } from "../../../Playground";
import { FloatingButtons } from "../../../components/FloatingButtons";
import { Button } from "../../../components/Button";

import "../../../styles.min.css";
import "./style.css";
import "../../../utils/dndtouch";

const sampleDeck = [
  "/dmplayground/dm24sp2-013.jpg",
  "/dmplayground/dm24sp2-013.jpg",
  "/dmplayground/dm24sp2-013.jpg",
  "/dmplayground/dm24sp2-013.jpg",
  "/dmplayground/dm23bd5-060.jpg",
  "/dmplayground/dm23bd5-060.jpg",
  "/dmplayground/dm23bd5-060.jpg",
  "/dmplayground/dm23bd5-060.jpg",
  "/dmplayground/dm24sp2-010.jpg",
  "/dmplayground/dm24sp2-010.jpg",
  "/dmplayground/dm24sp2-010.jpg",
  "/dmplayground/dm24sp2-010.jpg",
  "/dmplayground/dm23ex3-030.jpg",
  "/dmplayground/dm23ex3-030.jpg",
  "/dmplayground/dm23ex3-030.jpg",
  "/dmplayground/dm23ex3-030.jpg",
  "/dmplayground/dm23ex3-029.jpg",
  "/dmplayground/dm23ex3-029.jpg",
  "/dmplayground/dm23ex3-029.jpg",
  "/dmplayground/dm23ex3-029.jpg",
  "/dmplayground/dm24sp2-009.jpg",
  "/dmplayground/dm24sp2-009.jpg",
  "/dmplayground/dm24sp2-009.jpg",
  "/dmplayground/dm24sp2-009.jpg",
  "/dmplayground/dm23ex3-008.jpg",
  "/dmplayground/dm23ex3-008.jpg",
  "/dmplayground/dm24sp2-002.jpg",
  "/dmplayground/dm24sp2-002.jpg",
  "/dmplayground/dm24sp2-002.jpg",
  "/dmplayground/dm23ex3-002.jpg",
  "/dmplayground/dm23ex3-002.jpg",
  "/dmplayground/dm23ex3-002.jpg",
  "/dmplayground/dm23ex3-002.jpg",
  "/dmplayground/dm24sp2-003.jpg",
  "/dmplayground/dm24sp2-003.jpg",
  "/dmplayground/dm24sp2-003.jpg",
  "/dmplayground/dm24sp2-003.jpg",
  "/dmplayground/dm24sp2-001.jpg",
  "/dmplayground/dm24sp2-001.jpg",
  "/dmplayground/dm24sp2-001.jpg",
];

const initialize = () => {
  const deck = shuffleArray(sampleDeck);
  setGameState({
    field: [],
    lands: [],
    graveyard: [makeStack({ cards: [] })],
    hand: deck.splice(0, 5).map(src => makeStack({ cards: [src] })),
    shields: deck.splice(0, 5).map(src => makeStack({ cards: [src], flipped: true })),
    deck: [makeStack({ cards: deck, flipped: true })],
    grdeck: [],
    exdeck: [],
    exploring: [],
  });
};

const App = () => {
  useEffect(() => initialize(), []);
  return (
    <>
      <FloatingButtons>
        <Button onClick={undo} disabled={!getUndoState()}>
          一手戻す
        </Button>
        <Button onClick={redo} disabled={!getRedoState()}>
          一手進む
        </Button>
        <Button onClick={() => untapAll(["field", "lands"])}>
          アンタップ
        </Button>
        <Button onClick={initialize}>
          リセット
        </Button>
      </FloatingButtons>
      <Playground {...configurations} />
    </>
  );
};

const div = document.getElementById("dmplayground")!;
document.body.append(div);

render(<App />, div)
