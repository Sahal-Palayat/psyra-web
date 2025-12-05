import type { AssessmentPayload } from "@/types/sheet";

export const sendAssessmentToSheet = async (data: AssessmentPayload) => {
  try {
    const response = await fetch("/api/sheet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    return await response.json();

  } catch (error) {
    console.error("Sheet submission error:", error);
    return { status: false, message: "Sheet submission failed" };
  }
};
