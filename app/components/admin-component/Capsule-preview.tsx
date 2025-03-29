"use client"

import { X, Play } from "lucide-react"

export default function CapsulesPreview() {
  return (
    <div className="w-full">
      {/* Preview Capsule Section */}
      <div className="mb-8 mt-8">
        <h2 className="text-lg font-medium mb-1">Preview Capsule</h2>
        <p className="text-sm text-gray-500 mb-4">Preview of capsule details before sending.</p>

        {/* Capsule Preview Image */}
        <div className="w-full h-48 bg-gradient-to-r from-pink-200 via-red-300 to-purple-200 rounded-lg mb-6"></div>

        {/* Capsule Details */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-medium mb-2">Capsule Name</h3>
            </div>
            <div className="">
              <p>TimeTravel2MeetU</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-medium mb-2">Message</h3>
            <div className="text-sm">
              <p className="mb-2">Hey User,</p>
              <p className="mb-2">
                I wrote this message to you [X] months ago, knowing that today would be special. Life moves fast, and I
                just wanted to remind you of how far you've come. I hope you're smiling right now. You deserve all the
                happiness in the world. 🌎
              </p>
              <p className="mb-2">Take a deep breath, and remember—you are loved. Always. ❤️</p>
              <p className="mb-2">Sending you a virtual hug from the past! 🤗</p>
              <p>– [Sender's Name]</p>
            </div>
          </div>
        </div>

        {/* Fund Attachment */}
        <div className="mb-6 border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Fund Attachment</h3>
            <button>
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mt-3">
              <span className="text-2xl font-bold">30</span>
              <span className="text-gray-500">ETH</span>
            </div>
          </div>
        </div>

        {/* Media Attachment */}
        <div>
          <h3 className="font-medium mb-2">Media Attachment</h3>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((item) => (
              <div key={item} className="relative rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-gray-800" />
                    </button>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">1:00 M</div>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-black/10 text-white text-center py-2 text-sm">
                  Click to Play Video attachment
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

