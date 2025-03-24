import React, { useState } from "react";
import { Bell, X, BadgeCheck } from "lucide-react";

interface NotificationItemProps {
  title: string;
  date: string;
  time: string;
  days: number;
  hours: number;
  minutes: number;
  isPrivate?: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  date,
  time,
  days,
  hours,
  minutes,
  isPrivate = false,
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-start sm:items-center border border-gray-100 p-2 rounded-lg w-full sm:w-5/6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
            <div className="h-8 w-8 bg-red-200 rounded-full" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#1D2026]">{title}</h3>
            <p className="text-[10px] text-gray-500 mt-0.5">
              Created {date} · {time}
            </p>
            <p className="text-[10px] font-bold text-[#212121] mt-0.5">
              {days} days, {hours} hours, {minutes} minutes
            </p>
          </div>
        </div>
        {isPrivate && (
          <span className="inline-flex items-center p-2 mt-2 sm:mt-0 rounded-lg text-xs font-medium bg-blue-100 text-[#173FA1] whitespace-nowrap">
            <span className="hidden md:inline">Private</span>
            <BadgeCheck className="h-4 w-4 md:ml-1" />
          </span>
        )}
      </div>
    </div>
  );
};

interface NotificationProps {
  count?: number;
}

const Notification: React.FC<NotificationProps> = ({ count = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotification = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={toggleNotification}
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5 text-gray-600" />
        {count > 0 && (
          <span className="absolute top-1.5 right-1.5 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-medium">
            {count}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed sm:absolute right-4 lg:left-3/4 lg:-translate-x-3/4 sm:right-0 top-16 sm:top-auto sm:mt-2 w-[calc(100%-32px)] sm:w-[400px] md:w-[480px] lg:w-[600px] max-w-[600px] h-auto max-h-[80vh] sm:max-h-[600px] bg-white rounded-lg shadow-lg z-50 border border-gray-100 border-l-4 border-l-[#48BB78]">
          <div className="sticky top-0 bg-white border-b rounded-t-lg">
            <div className="flex items-center justify-between p-4">
              <h2 className="font-semibold text-lg text-gray-900">
                {count} new notification
              </h2>
              <div className="flex items-center gap-2">
                <button className="text-sm text-[#48BB78] hover:text-green-700 font-bold">
                  View
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="px-4 pb-3">
              <p className="text-xs text-gray-500">
                You have just received a capsule
              </p>
            </div>
          </div>

          <div className="max-h-[calc(80vh-120px)] sm:max-h-[480px] overflow-y-auto">
            <NotificationItem
              title="Capsule Name"
              date="March 14, 2023"
              time="2:15pm"
              days={5}
              hours={12}
              minutes={30}
              isPrivate={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
