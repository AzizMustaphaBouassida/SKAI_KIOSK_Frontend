"use client";

import { useState } from "react";
import { Star } from "lucide-react";

// @ts-ignore
import { useTheme } from "@/app/hooks/useTheme";
// @ts-ignore
import HeaderIconTextLayout from "@/layouts/page-layouts/header-icon-text-layout";
// @ts-ignore
import DonationIcon from "@/assets/icons/donation-icon.svg";
// @ts-ignore
import { getThemeStyle } from "@/config/theme";
import { useTranslation } from "react-i18next";

export default function FeedbackPage() {
  const [rating, setRating] = useState<number>(3);
  const [selectedFeedback, setSelectedFeedback] = useState<string | null>(null);
  const theme = useTheme();
  const { t } = useTranslation();

  const feedbackOptions = [
    { key: 'easy', label: t('pages.feedback.options.easy') },
    { key: 'fast', label: t('pages.feedback.options.fast') },
    { key: 'smooth', label: t('pages.feedback.options.smooth') },
    { key: 'quickOrder', label: t('pages.feedback.options.quickOrder') },
    { key: 'userFriendly', label: t('pages.feedback.options.userFriendly') },
    { key: 'intuitive', label: t('pages.feedback.options.intuitive') },
    { key: 'okay', label: t('pages.feedback.options.okay') },
    { key: 'tookTime', label: t('pages.feedback.options.tookTime') },
    { key: 'confusing', label: t('pages.feedback.options.confusing') },
    { key: 'tooSlow', label: t('pages.feedback.options.tooSlow') },
  ];

  const boxShadowStyle = { boxShadow: "0px 4px 4px 0px #00000040" };

  return (
    <HeaderIconTextLayout
      icon={DonationIcon}
      text={t('pages.feedback.title')}
      subtitle={t('pages.feedback.subtitle')}
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
          {t('pages.feedback.question')}
        </h2>
        {/* Feedback Options as a responsive tag cloud */}
        <div className="w-full flex flex-wrap gap-3 justify-center mb-12">
          {feedbackOptions.map((feedback, index) => (
            <button
              key={index}
              onClick={() => setSelectedFeedback(feedback.key)}
              className={`px-6 py-3 rounded-full border-2 text-center font-medium text-[22px] transition-all ${selectedFeedback === feedback.key ? "border-[#FFC72C] bg-[#FFF9E6]" : "border-gray-300 bg-white hover:border-gray-400"}`}
              style={
                selectedFeedback === feedback.key
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
              {feedback.label}
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
          {t('common.send')}
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
          {t('common.notToday')}
        </button>
      </div>
    </HeaderIconTextLayout>
  );
}
