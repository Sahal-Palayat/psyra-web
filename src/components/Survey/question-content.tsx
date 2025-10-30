"use client";

import { OptionButtons } from "./option-buttons";
import DynamicSelect from "./dynamic-select";
import { StarRating } from "./star-rating";
import type { SurveyQuestion } from "./types/survey";
import { SingleSelectDropdown } from "./single-dropdown";

interface QuestionContentProps {
  question: SurveyQuestion;
  answers: Record<string, string | number>;
  value: string;
  setValue: (value: string) => void;
  onOptionSelect: (option: string | number, index: number) => void;
}

export const QuestionContent = ({
  question,
  answers,
  value,
  setValue,
  onOptionSelect,
}: QuestionContentProps) => {
  if (question?.type === "rating") {
    return (
      <div className="flex justify-center py-8">
        <StarRating
          onRatingSelect={(rating) => onOptionSelect(rating)}
          currentRating={answers[question?.id] as number}
          questionId={question?.id}
          answers={answers}
        />
      </div>
    );
  }

  if (question?.type === "multi-select") {
    return (
      <div>
        <DynamicSelect
          value={value}
          onChange={setValue}
          handle={(value: string) => {
            onOptionSelect(value);
            setValue("");
          }}
          options={question?.options}
          placeholder={`Select ${question?.question.toLowerCase()}...`}
        />
      </div>
    );
  }

  if (question?.type === "drop-down") {
    return (
      <div>
        <SingleSelectDropdown
          value={value}
          onChange={setValue}
          handle={(value: string) => {
            onOptionSelect(value);
            setValue("");
          }}
          options={question?.options}
          placeholder={`Choose ${question?.question.toLowerCase()}...`}
          searchable={true}
        />
      </div>
    );
  }

  if (question?.type === "input-field") {
    return (
      <div>
        name
        <input type="text" name="" id="" />
      </div>
    );
  }

  return (
    <OptionButtons
      options={question?.options}
      selectedAnswer={answers[question?.id]}
      onSelect={onOptionSelect}
    />
  );
};
