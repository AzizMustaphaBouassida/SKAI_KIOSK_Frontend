"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star } from "lucide-react"
// @ts-ignore
import InfoIcon from "@/assets/icons/info-icon.svg"
// @ts-ignore
import { useTheme } from "@/hooks/useTheme"
// @ts-ignore
import HeaderIconTextLayout from "@/layouts/header-icon-text-layout"
// @ts-ignore
import DonationIcon from "@/assets/icons/donation-icon.svg"

export default function TipPage() {
  const [selectedPercentage, setSelectedPercentage] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [rating, setRating] = useState<number>(0)
  const theme = useTheme()

  // Simulated order total - this should come from your cart/order context
  const orderTotal = 50.00 // Replace with actual order total

  const percentageOptions = [1, 3, 4]

  const calculateTip = () => {
    if (customAmount) {
      return Number.parseFloat(customAmount) || 0
    }
    if (selectedPercentage) {
      return (orderTotal * selectedPercentage) / 100
    }
    return 0
  }

  const tipAmount = calculateTip()

  const handlePercentageClick = (percentage: number) => {
    setSelectedPercentage(percentage)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedPercentage(null)
  }

  return (
    <HeaderIconTextLayout
      icon={DonationIcon}
      text="Rate us"
      subtitle="Your rating shows appreciation for our staff's hard work, thank you for your support"
    >
      <div
        className="w-full max-w-[960px] mx-auto flex flex-col items-center space-y-8 px-8"
        style={theme.getStyle("fontSerious")}
      >
        {/* Star Rating Section */}
        <div className="flex gap-2">
          {[1, 2, 3, 4,5].map((star) => (
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
              Want to leave a tip?
            </p>

            {/* Tip Calculation Info */}
            <p
              className="text-3xl text-center max-w-[600px]"
              style={{
                ...theme.getStyle("black"),
                ...theme.getStyle("fontSerious"),
              }}
            >
              Tip is calculated on your order total before taxes.
            </p>

            {/* Percentage Buttons */}
            <div className="flex gap-12 mt-6">
              {percentageOptions.map((percentage) => {
                const isSelected = selectedPercentage === percentage
                return (
                  <Button
                    key={percentage}
                    variant="outline"
                    className="w-[150px] h-[140px] text-[30px] font-semibold rounded-xl border-2 transition hover:opacity-90 bg-transparent"
                    style={{
                      ...theme.getStyle("fontBranded"),
                      ...theme.getStyle("black"),
                      ...(isSelected
                        ? {
                            ...theme.getStyle("secondaryBorder"),
                            ...theme.getStyle("secondaryBg"),
                          }
                        : {
                            ...theme.getStyle("greyLightBorder"),
                            ...theme.getStyle("whiteBg"),
                          }),
                    }}
                    onClick={() => handlePercentageClick(percentage)}
                  >
                    {percentage}%
                  </Button>
                )
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
              or
            </p>

            {/* Custom Amount Input */}
            <div className="w-[600px]">
              <Input
                type="number"
                step="0.01"
                min="0"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder="0.00$"
                className="w-full h-[85px] text-center text-[20px] font-light border-[2px] rounded-lg focus:outline-none focus:ring-0 focus:border-[#FFC72C] placeholder:text-[20px] placeholder:font-light placeholder:text-[#868686] focus:text-[20px] focus:font-light"
                style={{
                  ...theme.getStyle("fontSerious"),
                  borderColor: "#FFC72C",
                  ...theme.getStyle("greyDarker"),
                  ...theme.getStyle("whiteBg"),
                }}
              />
            </div>

            {/* Give a Tip Button */}
            <Button
              className="w-[600px] h-[90px] text-[30px] font-medium rounded-lg mt-1 transition hover:opacity-90"
              style={{
                ...theme.getStyle("errorBg"),
                ...theme.getStyle("white"),
                ...theme.getStyle("fontBranded"),
              }}
              onClick={() => {
                console.log("[TipPage] Tip amount:", tipAmount)
                console.log("[TipPage] Rating:", rating)
              }}
            >
              Give a tip
            </Button>

            {/* Not Today Button */}
            <Button
              variant="outline"
              className="w-[260px] h-[80px] border-2 text-[24px] rounded-lg transition hover:opacity-90 bg-transparent mt-5"
              style={{
                ...theme.getStyle("fontSerious"),
                ...theme.getStyle("greyLightBorder"),
                ...theme.getStyle("whiteBg"),
                ...theme.getStyle("black"),
              }}
              onClick={() => {
                console.log("[TipPage] User clicked Not today")
              }}
            >
              Not today
            </Button>
          </>
        )}
      </div>
    </HeaderIconTextLayout>
  )
}
