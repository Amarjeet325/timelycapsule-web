import {
  AlertTriangle,
  FileText,
  Calendar,
  Users,
  CheckCircle,
} from "lucide-react";

interface ReviewProps {
  formData: {
    capsuleId: string;
    reporterName: string;
    reporterEmail: string;
    issueType: string;
    severity: string;
    description: string;
    evidenceFiles: File[];
    discoveryDate: string;
    affectedUsers: string;
    previouslyReported: boolean;
  };
}

export default function Review({ formData }: ReviewProps) {
  const getIssueTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      functionality: "Functionality Issue",
      security: "Security Vulnerability",
      performance: "Performance Problem",
      compatibility: "Compatibility Issue",
      content: "Inappropriate Content",
      other: "Other",
    };
    return types[type] || type;
  };

  const getSeverityLabel = (severity: string) => {
    const levels: Record<string, string> = {
      critical: "Critical",
      high: "High",
      medium: "Medium",
      low: "Low",
    };
    return levels[severity] || severity;
  };

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case "critical":
        return "bg-red-500";
      case "high":
        return "bg-orange-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-600">
        Please review your report details before submitting. You can go back to
        previous steps to make changes if needed.
      </p>

      <div className="space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
            <h3 className="text-sm font-medium text-gray-700">
              Basic Information
            </h3>
          </div>
          <div className="p-4">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-xs font-medium text-gray-500">
                  Capsule ID
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {formData.capsuleId || "—"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-xs font-medium text-gray-500">
                  Reporter Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {formData.reporterName || "—"}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-medium text-gray-500">
                  Reporter Email
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {formData.reporterEmail || "—"}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
            <h3 className="text-sm font-medium text-gray-700">Issue Details</h3>
          </div>
          <div className="p-4">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-xs font-medium text-gray-500">
                  Issue Type
                </dt>
                <dd className="mt-1 flex items-center text-sm text-gray-900">
                  <AlertTriangle className="mr-1 h-4 w-4 text-orange-500" />
                  {formData.issueType
                    ? getIssueTypeLabel(formData.issueType)
                    : "—"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-xs font-medium text-gray-500">Severity</dt>
                <dd className="mt-1 flex items-center text-sm text-gray-900">
                  <div
                    className={`mr-2 h-3 w-3 rounded-full ${getSeverityColor(formData.severity)}`}
                  ></div>
                  {getSeverityLabel(formData.severity)}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
            <h3 className="text-sm font-medium text-gray-700">
              Description & Evidence
            </h3>
          </div>
          <div className="p-4">
            <dl className="grid grid-cols-1 gap-y-3">
              <div>
                <dt className="text-xs font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 whitespace-pre-wrap text-sm text-gray-900">
                  {formData.description || "—"}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-gray-500">
                  Evidence Files
                </dt>
                <dd className="mt-1">
                  {formData.evidenceFiles.length > 0 ? (
                    <ul className="space-y-1">
                      {formData.evidenceFiles.map((file, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-900"
                        >
                          <FileText className="mr-1 h-4 w-4 text-indigo-500" />
                          {file.name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-sm text-gray-500">
                      No files attached
                    </span>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
            <h3 className="text-sm font-medium text-gray-700">
              Additional Context
            </h3>
          </div>
          <div className="p-4">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-xs font-medium text-gray-500">
                  Discovery Date
                </dt>
                <dd className="mt-1 flex items-center text-sm text-gray-900">
                  <Calendar className="mr-1 h-4 w-4 text-gray-400" />
                  {formData.discoveryDate || "—"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-xs font-medium text-gray-500">
                  Previously Reported
                </dt>
                <dd className="mt-1 flex items-center text-sm text-gray-900">
                  <CheckCircle
                    className={`mr-1 h-4 w-4 ${formData.previouslyReported ? "text-green-500" : "text-gray-400"}`}
                  />
                  {formData.previouslyReported ? "Yes" : "No"}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-medium text-gray-500">
                  Affected Users
                </dt>
                <dd className="mt-1 flex items-start text-sm text-gray-900">
                  <Users className="mr-1 h-4 w-4 text-gray-400" />
                  <span>{formData.affectedUsers || "—"}</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-indigo-50 p-4">
        <p className="text-sm text-indigo-800">
          <strong>Ready to submit?</strong> Please click the Submit Report
          button below to send your report to our team. We&apos;ll review your
          submission and take appropriate action.
        </p>
      </div>
    </div>
  );
}
