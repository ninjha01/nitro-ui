import { Card } from "@ui/Card";
import { useMemo, useState } from "react";

import { CircularViewer } from "./CircularViewer";
import { LinearViewer } from "./LinearViewer";
import { SequenceViewer } from "./SequenceViewer";

import {
  classNamesBySequenceIdx,
  generateRandomAlignedSequences,
} from "./storyUtils";
import { AriadneSelection } from "./types";

export default {
  title: "Ariadne/Ariadne",
};

const AriadneStory = ({
  initialSelection,
}: {
  initialSelection?: AriadneSelection;
}) => {
  const [selection, setSelection] = useState<AriadneSelection | null>(
    initialSelection ?? null,
  );
  const { sequences, annotations } = useMemo(
    () =>
      generateRandomAlignedSequences({
        maxSequences: 4,
        maxLength: 300,
        annotationOnClick: setSelection,
      }),
    [],
  );

  return (
    <Card className="grid grid-cols-1 gap-4 bg-white lg:h-screen lg:grid-cols-2 dark:bg-noir-800 ">
      <div className="h-full overflow-y-scroll border-b border-zinc-600 lg:border-r lg:pr-8">
        <SequenceViewer
          sequences={sequences}
          selection={selection}
          charClassName={({ sequenceIdx }) =>
            classNamesBySequenceIdx({ sequenceIdx }).charClassName
          }
          selectionClassName={
            classNamesBySequenceIdx({ sequenceIdx: 0 }).selectionClassName
          }
          annotations={annotations}
        />
      </div>
      <div className="grid w-full grid-cols-2 content-start gap-2 overflow-y-scroll">
        {sequences.map((sequence, idx) => (
          <CircularViewer
            key={idx}
            containerClassName={
              classNamesBySequenceIdx({ sequenceIdx: idx }).charClassName
            }
            sequence={sequence}
            annotations={annotations}
            selection={selection}
            setSelection={setSelection}
            svgSizePX={250}
            svgPadding={20}
          />
        ))}
        <LinearViewer
          containerClassName="col-span-2"
          sequences={sequences}
          selection={selection}
          annotations={annotations}
          setSelection={setSelection}
          sequenceClassName={({ sequenceIdx }) => {
            return classNamesBySequenceIdx({ sequenceIdx }).charClassName;
          }}
        />
      </div>
    </Card>
  );
};

export const KitchenSinkViewerStory = () => <AriadneStory />;
export const KitchenSinkViewerStoryForwardSelectionOverSeam = () => (
  <AriadneStory
    initialSelection={{
      start: 10,
      end: 5,
      direction: "forward",
    }}
  />
);

export const KitchenSinkViewerStoryReverseSelection = () => (
  <AriadneStory
    initialSelection={{
      start: 10,
      end: 5,
      direction: "reverse",
    }}
  />
);

export const KitchenSinkViewerStoryReverseSelectionOverSeam = () => (
  <AriadneStory
    initialSelection={{
      start: 5,
      end: 10,
      direction: "reverse",
    }}
  />
);
