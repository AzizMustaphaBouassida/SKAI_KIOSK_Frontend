"use client";

import { useState } from "react";
import { Star } from "lucide-react";

// @ts-ignore
import { useTheme } from "@/hooks/useTheme";
// @ts-ignore
import HeaderIconTextLayout from "@/layouts/header-icon-text-layout";
// @ts-ignore
import DonationIcon from "@/assets/icons/donation-icon.svg";
// @ts-ignore
import { getThemeStyle } from "@/config/theme";

const feedbackOptions = [
  "Easy",
  "Fast",
  "Smooth",
  "Quick Order",
  "User Friendly",
  "Intuitive",
  "Okay",
  "Took Time",
  "Confusing",
  "Too Slow",
];

export default function FeedbackPage() {
  const [rating, setRating] = useState<number>(3);
  const [selectedFeedback, setSelectedFeedback] = useState<string | null>(null);
  const theme = useTheme();

  const boxShadowStyle = { boxShadow: "0px 4px 4px 0px #00000040" };

  return (
    <HeaderIconTextLayout
      icon={DonationIcon}
      text="Rate us"
      subtitle="Your rating shows appreciation for our staff's hard work, thank you for your support"
    >
      <div
        className="w-full mx-auto flex flex-col items-center space-y-6 px-6 pb-8"
        style={theme.getStyle("fontSerious")}
      >
        {/* Star Rating Section */}
        <div className="flex gap-2 mb-16">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-16 h-16 cursor-pointer transition-all"
              fill={star <= rating ? theme.colors.secondary : "none"}
              stroke={
                star <= rating ? theme.colors.secondary : theme.colors.black
              }
              strokeWidth={2}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
        {/* Feedback Question */}
        <h2
          className="text-[48px] font-bold text-center mb-12"
          style={{
            ...theme.getStyle("black"),
            ...theme.getStyle("fontBranded"),
          }}
        >
          Want to leave a feedback ?
        </h2>
        {/* Feedback Options as a responsive tag cloud */}
        <div className="w-full flex flex-wrap gap-3 justify-center mb-12">
          {feedbackOptions.map((feedback, index) => (
            <button
              key={index}
              onClick={() => setSelectedFeedback(feedback)}
              className={`px-6 py-3 rounded-full border-2 text-center font-medium text-[22px] transition-all ${selectedFeedback === feedback ? "border-[#FFC72C] bg-[#FFF9E6]" : "border-gray-300 bg-white hover:border-gray-400"}`}
              style={
                selectedFeedback === feedback
                  ? {
                      ...theme.getStyle("fontSerious"),
                      ...theme.getStyle("secondaryBorder"),
                      ...theme.getStyle("secondaryBg"),
                      ...boxShadowStyle,
                    }
                  : {
                      ...theme.getStyle("fontSerious"),
                      ...theme.getStyle("greyDarkerBorder"),
                      ...theme.getStyle("whiteBg"),
                      ...boxShadowStyle,
                    }
              }
            >
              {feedback}
            </button>
          ))}
        </div>
        {/* Send Button */}
        <button
          className="w-[623px] h-[96px] font-semibold rounded-lg hover:bg-[#B91C1C] transition-colors"
          style={{
            ...theme.getStyle("fontBranded"),
            ...theme.getStyle("errorBg"),
            ...theme.getStyle("white"),
            ...boxShadowStyle,
            fontSize: "34px",
          }}
          onClick={() => {
            console.log("Rating:", rating);
            console.log("Feedback:", selectedFeedback);
          }}
        >
          Send
        </button>
        {/* Not Today Button */}
        <button
          className="w-[264px] h-[79px] rounded-lg hover:bg-gray-50 transition-colors text-[24px]"
          style={{
            ...theme.getStyle("fontSerious"),
            ...theme.getStyle("greyDarkerBorder"),
            ...theme.getStyle("whiteBg"),
            ...theme.getStyle("black"),
            border: `1.5px solid ${theme.colors.greyDark}`,
            ...boxShadowStyle,
          }}
        >
          Not today
        </button>
      </div>
    </HeaderIconTextLayout>
  );
}
