import { baseInSelection, getAnnotatedSequence } from "@Ariadne/utils";
import { classNames } from "@utils/stringUtils";

import { stackAnnsByType } from "@Ariadne/genbankUtils";
import { useMemo } from "react";
import type {
  AnnotatedAA,
  AnnotatedBase,
  AnnotatedNucl,
  Annotation,
  AriadneSelection,
  StackedAnnotation,
} from "../types";

export const SequenceViewer = ({
  sequences,
  annotations,
  selection,
  containerClassName,
  charClassName,
  selectionClassName,
}: {
  sequences: string[];
  annotations: Annotation[];
  selection: AriadneSelection | null;
  containerClassName?: string;
  charClassName: ({
    base,
    sequenceIdx,
  }: {
    base: AnnotatedAA | AnnotatedNucl;
    sequenceIdx: number;
  }) => string;
  selectionClassName?: string;
}) => {
  const stackedAnnotations = useMemo(
    function memoize() {
      return stackAnnsByType(annotations);
    },
    [annotations],
  );

  const annotatedSequences = useMemo(
    function memoize() {
      return sequences.map((sequence) =>
        getAnnotatedSequence(sequence, stackedAnnotations),
      );
    },
    [sequences, stackedAnnotations],
  );

  const indicesClassName = ({
    base,
    sequenceIdx,
  }: {
    base: AnnotatedBase;
    sequenceIdx: number;
  }) => {
    const isNotFirstSeq = sequenceIdx !== 0;
    const isNotMultipleOfTen = base.index % 10 !== 0;

    if (isNotFirstSeq || isNotMultipleOfTen) {
      return "opacity-0";
    }
    return classNames(
      "text-xs",
      "group-hover:text-zinc-300",
      baseInSelection(base.index, selection)
        ? "text-brand-300"
        : "text-zinc-600",
    );
  };
  return (
    <>
      <div
        className={classNames("flex flex-wrap gap-y-8 ", containerClassName)}
      >
        {annotatedSequences[0].map(({ index: baseIdx }) => {
          return (
            <div
              className={classNames(
                "mt-4 flex flex-col justify-between",
                "group hover:bg-zinc-600",
              )}
              key={`base-${baseIdx}`}
            >
              {annotatedSequences.map(
                (sequence: AnnotatedBase[], sequenceIdx) => {
                  const base = sequence.find(
                    (base: AnnotatedBase) => base.index === baseIdx,
                  ) || { base: " ", annotations: [], index: baseIdx };

                  return (
                    <div
                      key={`sequence-${sequenceIdx}-base-${baseIdx}`}
                      className={classNames(
                        "relative whitespace-pre text-center",
                      )}
                    >
                      <CharComponent
                        char={`| ${base.index}`}
                        index={baseIdx}
                        charClassName={classNames(
                          "absolute -top-4 left-0 z-10",
                          "group-hover:text-brand-200 border-b border-zinc-600 group-hover:border-zinc-300",
                          indicesClassName({
                            base,
                            sequenceIdx,
                          }),
                        )}
                      />
                      <CharComponent
                        char={base.base}
                        index={baseIdx}
                        charClassName={classNames(
                          charClassName({
                            base,
                            sequenceIdx,
                          }),
                          baseInSelection(baseIdx, selection) &&
                            base.base !== " " &&
                            selectionClassName,
                        )}
                      />
                    </div>
                  );
                },
              )}
              <SequenceAnnotation
                annotations={stackedAnnotations.filter(
                  (ann) => baseIdx >= ann.start || baseIdx <= ann.end,
                )}
                index={baseIdx}
                maxAnnotationStack={stackedAnnotations.length}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const SequenceAnnotation = ({
  annotations,
  maxAnnotationStack,
  index,
}: {
  annotations: StackedAnnotation[];
  maxAnnotationStack: number;
  index: number;
}) => {
  const orderedAnnotations = annotations.sort((a, b) => a.stack - b.stack);
  return (
    <div className="relative " key={`annotation-${index}`}>
      {[...Array(maxAnnotationStack).keys()].map((i) => {
        const annotation = orderedAnnotations.find((a) => a.stack === i);
        if (annotation) {
          if (
            (annotation.start <= index && index <= annotation.end) ||
            (annotation.start >= index && index >= annotation.end)
          ) {
            return (
              <div
                key={`annotation-${index}-${i}`}
                className={"h-3 border-b-2 border-zinc-100 opacity-10 "}
              />
            );
          }

          return (
            <div
              key={`annotation-${index}-${i}`}
              className={classNames(
                "group/annotation h-3 border-black group-hover/annotation:border",
                annotation.className,
              )}
              onClick={() =>
                annotation.onClick?.({
                  start: annotation.start,
                  end: annotation.end,
                  diection: annotation.direction,
                })
              }
            >
              <div
                className={classNames(
                  "absolute -top-28 z-10 hidden flex-col items-start rounded-md px-2 py-1 text-xs group-hover/annotation:flex ",
                  annotation.className,
                )}
              >
                <span>Pos: {index}</span>
                <span>{annotation.text}</span>
                <span>{annotation.type}</span>
              </div>
            </div>
          );
        } else {
          return <div key={`placeholder-${index}-${i}`} className={"h-3"} />;
        }
      })}
    </div>
  );
};

interface CharProps {
  char: string;
  index: number;
  charClassName: string;
}

const CharComponent = ({ char, charClassName }: CharProps) => {
  if (char === " ") {
    return (
      <div className={classNames(charClassName, "font-mono opacity-20")}>.</div>
    );
  }
  return (
    <div className={classNames(charClassName, "mr-px font-mono")}>{char}</div>
  );
};
