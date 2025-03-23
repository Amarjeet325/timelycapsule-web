"use client";

import React, { memo, useMemo } from "react"; // Updated import statement
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles for the editor

interface RichTextFieldProps {
  message: string;
  onMessageChange: (value: string) => void;
}

const RichTextField: React.FC<RichTextFieldProps> = memo(
  ({ message, onMessageChange }) => {
    // Memoize the modules and formats to prevent unnecessary re-renders
    const modules = useMemo(
      () => ({
        toolbar: {
          container: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }], // Text color and background color
            [{ align: [] }], // Text alignment
            [{ list: "ordered" }, { list: "bullet" }], // Lists
            [{ indent: "-1" }, { indent: "+1" }], // Indentation
            ["blockquote", "code-block"], // Blockquote and code block
            ["link", "image"], // Links and images
            ["clean"], // Remove formatting
          ],
        },
        history: {
          delay: 2000,
          maxStack: 100,
          userOnly: true,
        },
      }),
      [],
    );

    const formats = useMemo(
      () => [
        "header",

        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
        "background",
        "align",
        "code-block",
      ],
      [],
    );

    return (
      <div className="flex flex-col h-full p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32">
        <label className="block text-sm sm:text-base text-gray-700 mb-2">
          <span className="font-semibold text-xl">Message (Optional):</span>{" "}
          Write something memorable...
        </label>

        {/* Custom styling for the ReactQuill editor */}
        <div className="rich-text-editor flex-grow">
          <ReactQuill
            value={message}
            onChange={onMessageChange}
            placeholder="Start Typing..."
            modules={modules}
            formats={formats}
            className="bg-sky-50 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all h-full"
          />
        </div>
      </div>
    );
  },
);

RichTextField.displayName = "RichTextField";

export default RichTextField;
