"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check, AlertTriangle, FileText, Send, Info } from "lucide-react"
import BasicInfo from "./steps/basic-info"
import IssueDetails from "./steps/issue-details"
import Description from "./steps/description"
import AdditionalContext from "./steps/additional-context"
import Review from "./steps/review"

interface FormData {
  // Step 1: Basic Info
  capsuleId: string
  reporterName: string
  reporterEmail: string

  // Step 2: Issue Details
  issueType: string
  severity: string

  // Step 3: Description
  description: string
  evidenceFiles: File[]

  // Step 4: Additional Context
  discoveryDate: string
  affectedUsers: string
  previouslyReported: boolean

  // Any other fields
  [key: string]: any
}

const initialFormData: FormData = {
  capsuleId: "",
  reporterName: "",
  reporterEmail: "",
  issueType: "",
  severity: "medium",
  description: "",
  evidenceFiles: [],
  discoveryDate: "",
  affectedUsers: "",
  previouslyReported: false,
}

export default function ReportForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 5

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Handle form submission here
    console.log("Form submitted:", formData)

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfo formData={formData} updateFormData={updateFormData} />
      case 2:
        return <IssueDetails formData={formData} updateFormData={updateFormData} />
      case 3:
        return <Description formData={formData} updateFormData={updateFormData} />
      case 4:
        return <AdditionalContext formData={formData} updateFormData={updateFormData} />
      case 5:
        return <Review formData={formData} />
      default:
        return null
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-gray-800">Report Submitted Successfully</h2>
        <p className="mb-6 text-gray-600">
          Thank you for your report. Our team will review it and take appropriate action.
        </p>
        <p className="text-sm text-gray-500">
          Reference ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}
        </p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="flex w-full justify-between bg-gray-100 px-4 py-3">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-all duration-200 ${
                currentStep > index + 1
                  ? "bg-indigo-600 text-white"
                  : currentStep === index + 1
                    ? "border-2 border-indigo-600 bg-white text-indigo-600"
                    : "border border-gray-300 bg-white text-gray-400"
              }`}
            >
              {currentStep > index + 1 ? <Check className="h-4 w-4" /> : index + 1}
            </div>
            <span
              className={`mt-1 hidden text-xs md:block ${
                currentStep >= index + 1 ? "text-indigo-600" : "text-gray-400"
              }`}
            >
              {["Basic Info", "Issue Details", "Description", "Context", "Review"][index]}
            </span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="min-h-[400px] p-6">
        <div className="mb-6 flex items-center">
          <div className={`mr-3 rounded-full p-2 ${getStepIconBackground(currentStep)}`}>
            {getStepIcon(currentStep)}
          </div>
          <h2 className="text-xl font-bold text-gray-800">{getStepTitle(currentStep)}</h2>
        </div>

        <div className="transition-all duration-300">{renderStep()}</div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between border-t border-gray-200 bg-gray-50 p-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-all ${
            currentStep === 1 ? "cursor-not-allowed text-gray-400" : "bg-white text-indigo-600 shadow hover:bg-gray-50"
          }`}
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Previous
        </button>

        {currentStep < totalSteps ? (
          <button
            onClick={handleNext}
            className="flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition-all hover:bg-indigo-700"
          >
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition-all hover:bg-indigo-700 disabled:bg-indigo-400"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="mr-2 h-4 w-4 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </>
            ) : (
              <>
                Submit Report
                <Send className="ml-1 h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

function getStepIcon(step: number) {
  switch (step) {
    case 1:
      return <Info className="h-5 w-5 text-blue-600" />
    case 2:
      return <AlertTriangle className="h-5 w-5 text-orange-600" />
    case 3:
      return <FileText className="h-5 w-5 text-indigo-600" />
    case 4:
      return <Info className="h-5 w-5 text-green-600" />
    case 5:
      return <Send className="h-5 w-5 text-purple-600" />
    default:
      return null
  }
}

function getStepIconBackground(step: number) {
  switch (step) {
    case 1:
      return "bg-blue-100"
    case 2:
      return "bg-orange-100"
    case 3:
      return "bg-indigo-100"
    case 4:
      return "bg-green-100"
    case 5:
      return "bg-purple-100"
    default:
      return ""
  }
}

function getStepTitle(step: number) {
  switch (step) {
    case 1:
      return "Basic Information"
    case 2:
      return "Issue Details"
    case 3:
      return "Description & Evidence"
    case 4:
      return "Additional Context"
    case 5:
      return "Review & Submit"
    default:
      return ""
  }
}

