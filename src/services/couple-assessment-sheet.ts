const SHEET_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzfS7uo3uD7HV7XW1CjfiOUBOyhY--Hyfz_-TiB2dEXq3UoRzRE4OASqUT6Sal5IVzu/exec";

type SheetPayload = {
  name: string;
  mobile: string;
  riskLevel: "healthy" | "moderate" | "high";
  normalizedScore: number;
  resultLabel: string;
  answers: string[]; 
};

export async function submitCoupleAssessmentToSheet(payload: SheetPayload) {
  await fetch(SHEET_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

 
  return true;
}

