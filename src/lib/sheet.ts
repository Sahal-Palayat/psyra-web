export const sendAssessmentToSheet = async (data: any) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxmcDCtMUVw_q8rp7P_vT3kgdJKs5Z6oBLZ2a9kjsjhbz6BwVMMDR7zlsx3Hwr-yDF-pQ/exec",
      {
        method: "POST",
        headers: { "Content-Type": "text/plain" }, // IMPORTANT
        body: JSON.stringify(data)
      }
    );

    return await response.json();
  } catch (error) {
    console.error("Sheet submission error:", error);
    return { status: false, message: "Sheet submission failed" };
  }
};
