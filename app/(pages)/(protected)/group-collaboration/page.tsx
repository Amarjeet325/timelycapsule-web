/* eslint-disable @typescript-eslint/no-unused-vars*/
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {
  Users,
  UserPlus,
  Mail,
  Link as LinkIcon,
  Clock,
  MessageSquare,
  Image as ImageIcon,
  Video,
  FileText,
  Gift,
  Lock,
  Eye,
  Trash2,
  Save,
  Send,
  Plus,
  X,
  AlertTriangle,
} from "lucide-react";

function GroupCollaboration() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  const [collaborators, setCollaborators] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "owner",
      status: "active",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "editor",
      status: "active",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      role: "viewer",
      status: "pending",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ]);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("editor");
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      message: "I added some photos from the graduation ceremony",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      message: "Great! I&apos;ll add some videos later today",
      time: "1 hour ago",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [permissions, setPermissions] = useState({
    allowContentEditing: true,
    allowInviting: true,
    requireApproval: false,
    allowComments: true,
    allowDownloads: true,
  });
  const [activities, setActivities] = useState([
    {
      id: 1,
      user: "John Doe",
      action: "added 5 photos",
      time: "2 hours ago",
      icon: <ImageIcon className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "changed the unlock date",
      time: "3 hours ago",
      icon: <Clock className="h-4 w-4 text-amber-500" />,
    },
    {
      id: 3,
      user: "John Doe",
      action: "invited Mike Johnson",
      time: "5 hours ago",
      icon: <UserPlus className="h-4 w-4 text-green-500" />,
    },
    {
      id: 4,
      user: "Jane Smith",
      action: "added a message",
      time: "1 day ago",
      icon: <MessageSquare className="h-4 w-4 text-purple-500" />,
    },
  ]);
  const [contentItems, setContentItems] = useState([
    {
      id: 1,
      type: "image",
      name: "Graduation Photo 1",
      addedBy: "John Doe",
      time: "2 hours ago",
      thumbnail:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      type: "image",
      name: "Graduation Photo 2",
      addedBy: "John Doe",
      time: "2 hours ago",
      thumbnail:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      type: "video",
      name: "Graduation Speech",
      addedBy: "Jane Smith",
      time: "3 hours ago",
      thumbnail:
        "https://images.unsplash.com/photo-1569017388730-020b5f80a004?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      type: "text",
      name: "Congratulations Message",
      addedBy: "Jane Smith",
      time: "1 day ago",
    },
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          user: "You",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
          message: newMessage,
          time: "Just now",
        },
      ]);
      setNewMessage("");
    }
  };

  const handleInvite = () => {
    if (inviteEmail.trim()) {
      setCollaborators([
        ...collaborators,
        {
          id: collaborators.length + 1,
          name: inviteEmail.split("@")[0],
          email: inviteEmail,
          role: inviteRole,
          status: "pending",
          avatar:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        },
      ]);
      setInviteEmail("");
      setShowInviteForm(false);
    }
  };

  const handleRemoveCollaborator = (id: number) => {
    setCollaborators(
      collaborators.filter((collaborator) => collaborator.id !== id),
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Group Collaboration
          </h1>
          <p className="mt-2 text-gray-600">
            Work together on the &quot;Graduation Memories 2024&quot; time
            capsule
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

      {/* Status Banner */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md">
        <div className="flex items-center">
          <Users className="h-5 w-5 text-blue-500 mr-2" />
          <span className="text-blue-800">
            This is a collaborative capsule with {collaborators.length} members.
            Changes are saved automatically.
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "overview"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("collaborators")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "collaborators"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Collaborators
        </button>
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
          onClick={() => setActiveTab("chat")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "chat"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Chat
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
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Capsule Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    value="Graduation Memories 2024"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    rows={3}
                    value="A collaborative time capsule to celebrate our graduation. Share photos, videos, and messages to be opened on our 5-year reunion."
                    readOnly
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Created On
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      value="March 15, 2024"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Unlock Date
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      value="June 15, 2029"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg"
                  >
                    <div className="mt-0.5">{activity.icon}</div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{" "}
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Collaborators</h2>
              <div className="space-y-3">
                {collaborators.slice(0, 3).map((collaborator) => (
                  <div
                    key={collaborator.id}
                    className="flex items-center space-x-3"
                  >
                    <img
                      src={collaborator.avatar}
                      alt={collaborator.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{collaborator.name}</p>
                      <p className="text-xs text-gray-500">
                        {collaborator.role}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        collaborator.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {collaborator.status}
                    </span>
                  </div>
                ))}
                {collaborators.length > 3 && (
                  <p className="text-sm text-indigo-600 mt-2">
                    +{collaborators.length - 3} more collaborators
                  </p>
                )}
                <button
                  onClick={() => setActiveTab("collaborators")}
                  className="w-full mt-3 text-sm text-indigo-600 hover:text-indigo-800"
                >
                  View all collaborators
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Content Summary</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ImageIcon className="h-5 w-5 text-blue-500" />
                    <span>Images</span>
                  </div>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Video className="h-5 w-5 text-purple-500" />
                    <span>Videos</span>
                  </div>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-green-500" />
                    <span>Text Messages</span>
                  </div>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Gift className="h-5 w-5 text-amber-500" />
                    <span>Crypto Gifts</span>
                  </div>
                  <span className="font-medium">0</span>
                </div>
                <button
                  onClick={() => setActiveTab("content")}
                  className="w-full mt-3 text-sm text-indigo-600 hover:text-indigo-800"
                >
                  Manage content
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Share</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  <UserPlus className="h-5 w-5" />
                  <span>Invite Collaborators</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <LinkIcon className="h-5 w-5" />
                  <span>Copy Collaboration Link</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Collaborators Tab */}
      {activeTab === "collaborators" && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Collaborators</h2>
              <button
                onClick={() => setShowInviteForm(!showInviteForm)}
                className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                <UserPlus className="h-5 w-5" />
                <span>Invite New</span>
              </button>
            </div>

            {showInviteForm && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-3">
                  Invite Collaborator
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter email address"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      value={inviteRole}
                      onChange={(e) => setInviteRole(e.target.value)}
                    >
                      <option value="editor">
                        Editor (can add and edit content)
                      </option>
                      <option value="viewer">
                        Viewer (can only view and comment)
                      </option>
                    </select>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={handleInvite}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                      Send Invitation
                    </button>
                    <button
                      onClick={() => setShowInviteForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Collaborator
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Joined
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {collaborators.map((collaborator) => (
                    <tr key={collaborator.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={collaborator.avatar}
                              alt={collaborator.name}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {collaborator.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {collaborator.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          className={`px-3 py-1 rounded-md text-sm ${
                            collaborator.role === "owner"
                              ? "bg-gray-100 text-gray-800"
                              : "border border-gray-300"
                          }`}
                          value={collaborator.role}
                          disabled={collaborator.role === "owner"}
                          onChange={(e) => {
                            const updatedCollaborators = collaborators.map(
                              (c) =>
                                c.id === collaborator.id
                                  ? { ...c, role: e.target.value }
                                  : c,
                            );
                            setCollaborators(updatedCollaborators);
                          }}
                        >
                          <option value="owner">Owner</option>
                          <option value="editor">Editor</option>
                          <option value="viewer">Viewer</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            collaborator.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {collaborator.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {collaborator.status === "active"
                          ? "Mar 15, 2024"
                          : "Pending"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-3">
                          {collaborator.role !== "owner" && (
                            <>
                              <button className="text-indigo-600 hover:text-indigo-900">
                                <Mail className="h-5 w-5" />
                              </button>
                              <button
                                onClick={() =>
                                  handleRemoveCollaborator(collaborator.id)
                                }
                                className="text-red-600 hover:text-red-900"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Collaboration Link</h2>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Share this link with others to invite them to collaborate on
                this time capsule.
              </p>
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value="https://timelycapsule.com/collaborate/grad2024"
                  readOnly
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Copy
                </button>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Lock className="h-4 w-4" />
                <span>Only people with this link can request to join</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Tab */}
      {activeTab === "content" && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Capsule Content</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                <Plus className="h-5 w-5" />
                <span>Add Content</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contentItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  {item.type === "image" || item.type === "video" ? (
                    <div className="relative h-40">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black bg-opacity-50 rounded-full p-3">
                            <Video className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-40 bg-gray-100 flex items-center justify-center">
                      {item.type === "text" ? (
                        <FileText className="h-12 w-12 text-gray-400" />
                      ) : (
                        <Gift className="h-12 w-12 text-gray-400" />
                      )}
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                      <span>Added by {item.addedBy}</span>
                      <span>{item.time}</span>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <button className="flex-1 px-3 py-1 text-xs bg-indigo-600 text-white rounded hover:bg-indigo-700">
                        Edit
                      </button>
                      <button className="flex-1 px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Content Card */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 h-full min-h-[240px]">
                <Plus className="h-12 w-12 text-gray-400 mb-3" />
                <p className="text-center text-gray-500 mb-4">
                  Add new content to the capsule
                </p>
                <div className="grid grid-cols-2 gap-2 w-full">
                  <button className="flex items-center justify-center space-x-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
                    <ImageIcon className="h-4 w-4" />
                    <span className="text-xs">Image</span>
                  </button>
                  <button className="flex items-center justify-center space-x-1 px-3 py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200">
                    <Video className="h-4 w-4" />
                    <span className="text-xs">Video</span>
                  </button>
                  <button className="flex items-center justify-center space-x-1 px-3 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200">
                    <FileText className="h-4 w-4" />
                    <span className="text-xs">Text</span>
                  </button>
                  <button className="flex items-center justify-center space-x-1 px-3 py-2 bg-amber-100 text-amber-700 rounded-md hover:bg-amber-200">
                    <Gift className="h-4 w-4" />
                    <span className="text-xs">Crypto</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Content Organization</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content Layout
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Grid Layout</option>
                  <option>Timeline Layout</option>
                  <option>Slideshow Layout</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content Grouping
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Group by Type</option>
                  <option>Group by Contributor</option>
                  <option>Group by Date Added</option>
                  <option>No Grouping</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sort Order
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Newest First</option>
                  <option>Oldest First</option>
                  <option>Custom Order</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Tab */}
      {activeTab === "chat" && (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Collaboration Chat</h2>
            <p className="text-sm text-gray-600 mt-1">
              Discuss the capsule with other collaborators
            </p>
          </div>

          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start space-x-3">
                <img
                  src={message.avatar}
                  alt={message.user}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex-1 bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{message.user}</span>
                    <span className="text-xs text-gray-500">
                      {message.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{message.message}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">
              Collaboration Settings
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Permissions</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600"
                      checked={permissions.allowContentEditing}
                      onChange={(e) =>
                        setPermissions({
                          ...permissions,
                          allowContentEditing: e.target.checked,
                        })
                      }
                    />
                    <span>Allow editors to modify content added by others</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600"
                      checked={permissions.allowInviting}
                      onChange={(e) =>
                        setPermissions({
                          ...permissions,
                          allowInviting: e.target.checked,
                        })
                      }
                    />
                    <span>Allow editors to invite new collaborators</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600"
                      checked={permissions.requireApproval}
                      onChange={(e) =>
                        setPermissions({
                          ...permissions,
                          requireApproval: e.target.checked,
                        })
                      }
                    />
                    <span>Require owner approval for new content</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600"
                      checked={permissions.allowComments}
                      onChange={(e) =>
                        setPermissions({
                          ...permissions,
                          allowComments: e.target.checked,
                        })
                      }
                    />
                    <span>Allow comments on content</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600"
                      checked={permissions.allowDownloads}
                      onChange={(e) =>
                        setPermissions({
                          ...permissions,
                          allowDownloads: e.target.checked,
                        })
                      }
                    />
                    <span>Allow collaborators to download content</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Notifications</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600"
                      defaultChecked
                    />
                    <span>Email notifications for new collaborators</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600"
                      defaultChecked
                    />
                    <span>Email notifications for new content</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600"
                      defaultChecked
                    />
                    <span>Email notifications for chat messages</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600"
                      defaultChecked
                    />
                    <span>Email notifications for capsule changes</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Access Control</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Collaboration Link Access
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Anyone with the link can request access</option>
                      <option>
                        Only specific email domains can request access
                      </option>
                      <option>Disable collaboration link</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Default Role for New Collaborators
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Viewer (can only view and comment)</option>
                      <option>Editor (can add and edit content)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Advanced Settings</h2>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-md">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-red-800">
                      Danger Zone
                    </h3>
                    <div className="mt-1 text-sm text-red-700">
                      <p>
                        These actions are irreversible. Please proceed with
                        caution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <span>Transfer Ownership</span>
                  <Users className="h-5 w-5 text-gray-500" />
                </button>
                <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <span>Remove All Collaborators</span>
                  <X className="h-5 w-5 text-gray-500" />
                </button>
                <button className="w-full flex items-center justify-between px-4 py-2 border border-red-300 text-red-700 rounded-md hover:bg-red-50">
                  <span>Delete Collaborative Capsule</span>
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GroupCollaboration;
