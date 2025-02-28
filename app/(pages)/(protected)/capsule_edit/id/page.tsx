"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  // Calendar,
  ImageIcon,
  Video,
  Gift,
  // Lock,
  Save,
  Eye,
  Trash2,
  Clock,
  Users,
  // Tag,
  Plus,
} from "lucide-react";

function CapsuleEdit() {
  const params = useParams();
  const id = params?.id;
  const [activeTab, setActiveTab] = useState("content");

  useEffect(() => {
    if (id) {
      console.log("Editing capsule with ID:", id);
      // TODO: Fetch capsule data using the id
    }
  }, [id]);

  const [title, setTitle] = useState("Birthday Memories 2024");
  const [description, setDescription] = useState(
    "A collection of birthday wishes and memories for John"
  );
  const [unlockDate, setUnlockDate] = useState("2024-06-15T12:00");
  const [isPasswordProtected, setIsPasswordProtected] = useState(true);
  const [password, setPassword] = useState("birthday2024");
  const [recipients, setRecipients] = useState(
    "john.doe@example.com, jane.smith@example.com"
  );
  const [tags, setTags] = useState(["birthday", "celebration", "memories"]);
  const [visibility, setVisibility] = useState("private");
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  const templates = [
    {
      id: "template1",
      name: "Birthday Classic",
      thumbnail: "https://images.unsplash.com/photo-1513151233558-d860c5398176",
    },
    {
      id: "template2",
      name: "Modern Celebration",
      thumbnail:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=200",
    },
    {
      id: "template3",
      name: "Vintage Party",
      thumbnail:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=200&h=150",
    },
  ];

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value) {
      if (!tags.includes(e.currentTarget.value)) {
        setTags([...tags, e.currentTarget.value]);
      }
      e.currentTarget.value = "";
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Edit Capsule</h1>
          <p className="mt-2 text-gray-600">
            Make changes to your time capsule
          </p>
        </div>

        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Eye className="h-5 w-5" />
            <span>Preview</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            <Save className="h-5 w-5" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-md">
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-amber-500 mr-2" />
          <span className="text-amber-800">
            This capsule is scheduled to unlock on{" "}
            {new Date(unlockDate).toLocaleDateString()} at{" "}
            {new Date(unlockDate).toLocaleTimeString()}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("content")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "content"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Content
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "settings"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Settings
        </button>
        <button
          onClick={() => setActiveTab("recipients")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "recipients"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Recipients
        </button>
        <button
          onClick={() => setActiveTab("template")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "template"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Template
        </button>
      </div>

      {/* Content Tab */}
      {activeTab === "content" && (
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Capsule Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content Type
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 border border-indigo-500 bg-indigo-50 rounded-lg transition-colors duration-200 flex flex-col items-center space-y-2">
                <ImageIcon className="h-8 w-8 text-indigo-600" />
                <span>Images</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors duration-200 flex flex-col items-center space-y-2">
                <Video className="h-8 w-8 text-indigo-600" />
                <span>Video</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors duration-200 flex flex-col items-center space-y-2">
                <Gift className="h-8 w-8 text-indigo-600" />
                <span>Crypto Gift</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Media Content
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-2 relative">
                <div className="relative w-full h-32">
                  <Image
                    src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=200&h=200&fit=crop"
                    alt="Birthday"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <button className="absolute top-4 right-4 p-1 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Trash2 className="h-4 w-4 text-red-500" />
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-2 relative">
                <div className="relative w-full h-32">
                  <Image
                    src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200&h=200&fit=crop"
                    alt="Birthday cake"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <button className="absolute top-4 right-4 p-1 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Trash2 className="h-4 w-4 text-red-500" />
                </button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-36">
                <button className="flex flex-col items-center text-gray-500 hover:text-indigo-600">
                  <Plus className="h-8 w-8" />
                  <span className="text-sm mt-1">Add Media</span>
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              rows={6}
              placeholder="Write your message here..."
              defaultValue="Happy birthday! This capsule contains special memories and wishes from your friends and family. We hope you enjoy looking back on these moments."
            />
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Unlock Date & Time
            </label>
            <input
              type="datetime-local"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={unlockDate}
              onChange={(e) => setUnlockDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Security Options
            </label>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600"
                  checked={isPasswordProtected}
                  onChange={(e) => setIsPasswordProtected(e.target.checked)}
                />
                <span>Password Protection</span>
              </label>

              {isPasswordProtected && (
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              )}

              <label className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-indigo-600" />
                <span>Email Verification Required</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Visibility
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="visibility"
                  value="private"
                  className="h-4 w-4 text-indigo-600"
                  checked={visibility === "private"}
                  onChange={() => setVisibility("private")}
                />
                <span>Private (Only recipients can view)</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  className="h-4 w-4 text-indigo-600"
                  checked={visibility === "public"}
                  onChange={() => setVisibility("public")}
                />
                <span>Public (Anyone with the link can view)</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="visibility"
                  value="community"
                  className="h-4 w-4 text-indigo-600"
                  checked={visibility === "community"}
                  onChange={() => setVisibility("community")}
                />
                <span>Community (Featured in public capsules)</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full flex items-center"
                >
                  {tag}
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-1 text-indigo-600 hover:text-indigo-800"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Add tags (press Enter to add)"
              onKeyDown={handleAddTag}
            />
          </div>
        </div>
      )}

      {/* Recipients Tab */}
      {activeTab === "recipients" && (
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipients
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              rows={3}
              placeholder="Enter email addresses (comma separated)"
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
            />
            <p className="mt-1 text-sm text-gray-500">
              Recipients will receive a notification when the capsule is
              unlocked.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Recipients
            </label>
            <div className="space-y-2">
              {recipients.split(",").map((email, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Users className="h-4 w-4 text-indigo-600" />
                    </div>
                    <span className="text-sm">{email.trim()}</span>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notification Settings
            </label>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600"
                  defaultChecked
                />
                <span>Send notification when capsule is created</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600"
                  defaultChecked
                />
                <span>Send reminder 1 day before unlock</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600"
                  defaultChecked
                />
                <span>Send notification when capsule unlocks</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Personal Message to Recipients
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              placeholder="Add a personal message to your recipients"
              defaultValue="I've created this time capsule for you with some special memories. It will unlock on the specified date. I hope you enjoy it!"
            />
          </div>
        </div>
      )}

      {/* Template Tab */}
      {activeTab === "template" && (
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose a Template
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`border rounded-lg overflow-hidden cursor-pointer ${
                    selectedTemplate === template.id
                      ? "border-indigo-500 ring-2 ring-indigo-200"
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={template.thumbnail}
                    alt={template.name}
                    width={320}
                    height={128}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-medium">{template.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Template Settings
            </label>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Primary Color
                </label>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 rounded-full bg-indigo-500 ring-2 ring-offset-2 ring-indigo-200"></button>
                  <button className="w-8 h-8 rounded-full bg-pink-500"></button>
                  <button className="w-8 h-8 rounded-full bg-amber-500"></button>
                  <button className="w-8 h-8 rounded-full bg-emerald-500"></button>
                  <button className="w-8 h-8 rounded-full bg-purple-500"></button>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Font Style
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Modern Sans</option>
                  <option>Classic Serif</option>
                  <option>Playful Display</option>
                  <option>Elegant Script</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Background Style
                </label>
                <div className="grid grid-cols-4 gap-2">
                  <button className="h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></button>
                  <button className="h-12 bg-white border border-gray-200 rounded"></button>
                  <button className="h-12 bg-gray-900 rounded"></button>
                  <button className="h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded"></button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preview
            </label>
            <div className="border border-gray-200 rounded-lg p-4 h-64 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-gray-600">
                  Template preview will appear here
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-end space-x-4">
        <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          Cancel
        </button>
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default CapsuleEdit;
