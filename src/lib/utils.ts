import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Utility functions for encoding and decoding user data for feedback URLs
 */

export interface UserData {
  name: string
  mobile: string
}

/**
 * Encode user data for URL
 * @param userData - Object containing name and mobile
 * @returns Base64 encoded string
 */
export function encodeUserData(userData: UserData): string {
  const dataString = `${userData.name}|${userData.mobile}`
  return btoa(dataString)
}

/**
 * Decode user data from URL parameter
 * @param encodedData - Base64 encoded string
 * @returns Decoded user data object
 */
export function decodeUserData(encodedData: string): UserData {
  try {
    const decodedString = atob(encodedData)
    const [name, mobile] = decodedString.split("|")
    return { name: name || "", mobile: mobile || "" }
  } catch (error) {
    console.error("Error decoding user data:", error)
    return { name: "", mobile: "" }
  }
}

/**
 * Generate feedback URL with encoded user data
 * @param userData - Object containing name and mobile
 * @param baseUrl - Base URL of your application
 * @returns Complete feedback URL
 */
export function generateFeedbackUrl(userData: UserData, baseUrl = ""): string {
  const encodedData = encodeUserData(userData)
  return `${baseUrl}/feedback?data=${encodedData}`
}

/**
 * Example usage:
 *
 * // When sending feedback link to user
 * const userData = { name: "John Doe", mobile: "1234567890" }
 * const feedbackUrl = generateFeedbackUrl(userData, "https://yourapp.com")
 * // Result: https://yourapp.com/feedback?data=Sm9obiBEb2V8MTIzNDU2Nzg5MA==
 *
 * // When user visits the feedback page
 * const encodedData = "Sm9obiBEb2V8MTIzNDU2Nzg5MA=="
 * const decodedData = decodeUserData(encodedData)
 * // Result: { name: "John Doe", mobile: "1234567890" }
 */


