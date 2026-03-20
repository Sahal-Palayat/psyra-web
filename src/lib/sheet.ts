import type { AssessmentPayload } from "@/types/sheet";
export const sendAssessmentToSheet = async (data: AssessmentPayload) => {
  try {
    const response = await fetch("/api/sheet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    console.log("Sheet submission response:", response);

    return await response.json();

  } catch (error) {
    console.error("Sheet submission error:", error);
    return { status: false, message: "Sheet submission failed" };
  }
};
// Send concern data to sheet

export const sendConcernToSheet = async (data:unknown)=>{
  try{
    const response = await fetch("/api/concern-sheet",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data),
    });
    console.log("Concern sheet submit response",response)
    return await response.json();
  }catch(error){
    console.error("Concern sheet submission error:",error);
    return {status:false,message:"Concern sheet submission failed"};
  }
}