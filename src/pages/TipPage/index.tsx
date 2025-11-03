"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Plus, Minus } from "lucide-react";
// @ts-ignore
import InfoIcon from "@/assets/icons/info-icon.svg";
// @ts-ignore
import { useTheme } from "@/hooks/useTheme";
// @ts-ignore
import HeaderIconTextLayout from "@/layouts/header-icon-text-layout";
// @ts-ignore
import DonationIcon from "@/assets/icons/donation-icon.svg";
import { useTranslation } from "react-i18next";

export default function TipPage() {
  const [selectedPercentage, setSelectedPercentage] = useState<number | null>(
    null
  );
  const [customAmount, setCustomAmount] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const boxShadowStyle = { boxShadow: "0px 4px 4px 0px #00000040" };
  const theme = useTheme();
  const { t } = useTranslation();

  // Simulated order total - this should come from your cart/order context
  const orderTotal = 50.0; // Replace with actual order total

  const percentageOptions = [1, 3, 4];

  const calculateTip = () => {
    if (customAmount > 0) {
      return customAmount;
    }
    if (selectedPercentage) {
      return (orderTotal * selectedPercentage) / 100;
    }
    return 0;
  };

  const tipAmount = calculateTip();

  const handlePercentageClick = (percentage: number) => {
    setSelectedPercentage(percentage);
    setCustomAmount(0);
  };

  const handleDecrease = () => {
    setSelectedPercentage(null);
    setCustomAmount((prev) => {
      const next = Math.max(0, Number((prev - 0.25).toFixed(2)));
      return next;
    });
  };

  const handleIncrease = () => {
    setSelectedPercentage(null);
    setCustomAmount((prev) => Number((prev + 0.25).toFixed(2)));
  };

  return (
    <HeaderIconTextLayout
      icon={DonationIcon}
      text={t("tip.title")}
      subtitle={t("tip.subtitle")}
    >
      <div
        className="w-full max-w-[960px] mx-auto flex flex-col items-center space-y-8 px-8"
        style={theme.getStyle("fontSerious")}
      >
        {/* Star Rating Section */}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-16 h-16 cursor-pointer transition-all"
              fill={star <= rating ? "#FFC72C" : "none"}
              stroke={star <= rating ? "#FFC72C" : "#000000"}
              strokeWidth={2}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        {/* Tip Section - Only shown when rating is 3 or more stars */}
        {rating >= 3 && (
          <>
            {/* Tip Section Heading */}
            <p
              className="text-[40px] font-bold mt-4"
              style={{
                ...theme.getStyle("black"),
                ...theme.getStyle("fontBranded"),
              }}
            >
              {t("tip.askTip")}
            </p>

            {/* Tip Calculation Info */}
            <p
              className="text-3xl text-center max-w-[600px]"
              style={{
                ...theme.getStyle("black"),
                ...theme.getStyle("fontSerious"),
              }}
            >
              {t("tip.info")}
            </p>

            {/* Percentage Buttons */}
            <div className="flex gap-12 mt-6">
              {percentageOptions.map((percentage) => {
                const isSelected = selectedPercentage === percentage;
                return (
                  <Button
                    key={percentage}
                    variant="outline"
                    className="w-[150px] h-[140px] text-[30px] font-semibold rounded-xl border-2 transition hover:opacity-90 bg-transparent"
                    style={{
                      ...theme.getStyle("fontBranded"),
                      ...theme.getStyle("black"),
                      ...boxShadowStyle,
                      ...(isSelected
                        ? {
                            ...theme.getStyle("secondaryBorder"),
                            ...theme.getStyle("secondaryBg"),
                          }
                        : {
                            ...theme.getStyle("greyDarkerBorder"),
                            ...theme.getStyle("whiteBg"),
                          }),
                    }}
                    onClick={() => handlePercentageClick(percentage)}
                  >
                    {percentage}%
                  </Button>
                );
              })}
            </div>

            {/* Or Text */}
            <p
              className="text-[26px]"
              style={{
                ...theme.getStyle("black"),
                ...theme.getStyle("fontSerious"),
              }}
            >
              {t("common.or")}
            </p>

            {/* Custom Amount Counter - matched to ReviewOrderPage design */}
            <div className="w-[600px] flex items-center justify-center mt-2">
              <div
                className="flex items-center h-[85px] rounded-xl overflow-hidden border-2"
                style={{
                  borderColor: theme.colors.greyDarker,
                }}
              >
                <button
                  className="h-full w-[150px] flex items-center justify-center hover:opacity-80 border-r-2"
                  onClick={handleDecrease}
                  style={{
                    backgroundColor: theme.colors.white,
                    borderColor: theme.colors.greyDarker,
                  }}
                >
                  <Minus className="h-8 w-8" style={theme.getStyle("black")} />
                </button>

                <div
                  className="h-full w-[240px] flex items-center justify-center border-r-2 font-medium text-[28px]"
                  style={{
                    backgroundColor: theme.colors.white,
                    borderColor: theme.colors.greyDarker,
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  {customAmount.toFixed(2)} $
                </div>

                <button
                  className="h-full w-[150px] flex items-center justify-center hover:opacity-90"
                  onClick={handleIncrease}
                  style={{ backgroundColor: theme.colors.secondary }}
                >
                  <Plus className="h-8 w-8" style={theme.getStyle("black")} />
                </button>
              </div>
            </div>

            {/* Give a Tip Button */}
            <Button
              className="w-[600px] h-[90px] text-[30px] font-medium rounded-lg mt-1 transition hover:opacity-90"
              style={{
                ...theme.getStyle("errorBg"),
                ...theme.getStyle("white"),
                ...theme.getStyle("fontBranded"),
                ...boxShadowStyle,
              }}
              onClick={() => {
                console.log("[TipPage] Tip amount:", tipAmount);
                console.log("[TipPage] Rating:", rating);
              }}
            >
              {t("tip.giveTip")}
            </Button>

            {/* Not Today Button */}
            <Button
              variant="outline"
              className="w-[260px] h-[80px] border-2 text-[24px] rounded-lg transition hover:opacity-90 bg-transparent mt-2"
              style={{
                ...theme.getStyle("fontSerious"),
                ...theme.getStyle("greyDarkerBorder"),
                ...theme.getStyle("whiteBg"),
                ...theme.getStyle("greyDarker"),
              }}
              onClick={() => {
                console.log("[TipPage] User clicked Not today");
              }}
            >
              {t("tip.notToday")}
            </Button>
          </>
        )}
      </div>
    </HeaderIconTextLayout>
  );
}
