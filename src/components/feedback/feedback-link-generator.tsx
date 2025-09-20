"use client"
import { useState } from "react"
import { Copy, Check, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { generateFeedbackUrl } from "../../lib/utils"
import { toast } from "@/lib/toast"

/**
 * Component for generating feedback links (for admin/internal use)
 */
const FeedbackLinkGenerator = () => {
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [generatedUrl, setGeneratedUrl] = useState("")
  const [copied, setCopied] = useState(false)

  const handleGenerate = () => {
    if (!name.trim() || !mobile.trim()) {
      toast.error("Please enter both name and mobile number")
      return
    }

    const baseUrl = window.location.origin
    const url = generateFeedbackUrl({ name: name.trim(), mobile: mobile.trim() }, baseUrl)
    setGeneratedUrl(url)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  const handleSendSMS = () => {
    // You can integrate with SMS services like Twilio, AWS SNS, etc.
    const message = `Hi ${name}, please share your feedback about your recent session: ${generatedUrl}`
    console.log("SMS to send:", message)
    toast.error("SMS integration not implemented. Check console for message content.")
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Generate Feedback Link</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter patient name"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <Input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
            className="w-full"
          />
        </div>

        <Button onClick={handleGenerate} className="w-full bg-teal-600 hover:bg-teal-700">
          Generate Feedback Link
        </Button>

        {generatedUrl && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2">Generated Link:</label>
            <div className="flex items-center space-x-2">
              <Input type="text" value={generatedUrl} readOnly className="flex-1 text-xs" />
              <Button onClick={handleCopy} size="sm" variant="outline" className="flex-shrink-0 bg-transparent">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>

            <Button onClick={handleSendSMS} className="w-full mt-3 bg-blue-600 hover:bg-blue-700" size="sm">
              <Send className="w-4 h-4 mr-2" />
              Send via SMS
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default FeedbackLinkGenerator
