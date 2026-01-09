import { RelationshipAnswerPayload, RelationshipResult } from "@/types/relationship-assessment.types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getRelationshipQuestions() {
  const res = await fetch(`${BASE_URL}/relationship-assessment/questions`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch relationship questions");
  }

  return res.json();
}

export async function submitRelationshipAssessment(
  payload: RelationshipAnswerPayload
): Promise<RelationshipResult> {
  const res = await fetch(`${BASE_URL}/relationship-assessment/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to submit relationship assessment");
  }

  return res.json();
}
