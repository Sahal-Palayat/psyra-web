"use client";

import { OptionButtons } from "./option-buttons";
import DynamicSelect from "./dynamic-select";
import { StarRating } from "./star-rating";
// import type { SurveyQuestion } from "./types/survey";
import { SingleSelectDropdown } from "./single-dropdown";

// interface QuestionContentProps {
//   question: SurveyQuestion;
//   answers: Record<string, string | number>;
//   value: string;
//   setValue: (value: string) => void;
//   onOptionSelect: (option: string | number, index: number) => void;
// }

interface QuestionContentProps {
  questionText: string;
  questionType: string;
  questionId: string | number;
  options: string[];
  answers: Record<string, string | number>;
  value: string;
  setValue: (value: string) => void;
  onOptionSelect: (option: string | number, index: number) => void;
}


// export const QuestionContent = ({
//   question,
//   answers,
//   value,
//   setValue,
//   onOptionSelect,
// }: QuestionContentProps) => {
export const QuestionContent = ({
  questionText,
  questionType,
  questionId,
  options,
  answers,
  value,
  setValue,
  onOptionSelect,
}: QuestionContentProps) => {

  if (questionType === "rating") {
    return (
      <div className="flex justify-center py-8">
        <StarRating
          onRatingSelect={(rating) => onOptionSelect(rating, 2)}
          currentRating={answers[questionId] as number}
          questionId={questionId}
          answers={answers}
        />
      </div>
    );
  }

  if (questionType === "multi-select") {
    return (
      <div>
        <DynamicSelect
          value={value}
          onChange={setValue}
          handle={(value: string) => {
            onOptionSelect(value, 2);
            setValue("");
          }}
          options={options}
          placeholder={`Select ${questionText.toLowerCase()}...`}
        />
      </div>
    );
  }

  if (questionType === "drop-down") {
    return (
      <div>
        <SingleSelectDropdown
          value={value}
          onChange={setValue}
          handle={(value: string) => {
            onOptionSelect(value, 2);
            setValue("");
          }}
          options={options}
          placeholder={`Choose ${questionText.toLowerCase()}...`}
          searchable
        />
      </div>
    );
  }

  if (questionType === "input-field") {
    return (
      <div>
        <input
          type="text"
          placeholder={questionText}
          className="w-full border rounded px-3 py-2"
        />
      </div>
    );
  }

  if (!options || options.length === 0) return null;

  return (
    <OptionButtons
      options={options}
      selectedAnswer={answers[questionId]}
      onSelect={onOptionSelect}
    />
  );
};
