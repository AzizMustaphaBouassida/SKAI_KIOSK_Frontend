"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
// @ts-ignore
import InfoIcon from "@/assets/icons/info-icon.svg"
// @ts-ignore
import { useTheme } from "@/hooks/useTheme"
// @ts-ignore
import HeaderIconTextLayout from "@/layouts/header-icon-text-layout"
// @ts-ignore
import DonationIcon from "@/assets/icons/donation-icon.svg"

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [roundUp, setRoundUp] = useState(false)
  const theme = useTheme()

  const presetAmounts = [1.0, 2.0, 3.0]

  const calculateSubtotal = () => {
    const amount = selectedAmount || Number.parseFloat(customAmount) || 0
    if (roundUp && amount > 0) {
      return Math.ceil(amount)
    }
    return amount
  }

  const subtotal = calculateSubtotal()

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  return (
    <HeaderIconTextLayout
      icon={DonationIcon}
      text="Want to donate?"
      subtitle="our support brings hope and comfort to struggling families"
    >
      <div
        className="w-full max-w-[960px] mx-auto flex flex-col items-center space-y-8 px-8"
        style={theme.getStyle("fontSerious")}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="w-14 h-10 rounded-full flex items-center justify-center">
            <img src={InfoIcon} alt="Information" className="w-10 h-10" />
          </div>
          <p
            className="text-[26px]"
            style={{
              ...theme.getStyle("black"),
              ...theme.getStyle("fontSerious"),
            }}
          >
            Thank you for your help
          </p>
        </div>

        <div className="flex gap-12 mt-6">
          {presetAmounts.map((amount) => {
            const isSelected = selectedAmount === amount
            return (
              <Button
                key={amount}
                variant="outline"
                className="w-[170px] h-[150px] text-[30px] font-semibold rounded-xl border-2 transition hover:opacity-90 bg-transparent"
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
                onClick={() => handlePresetClick(amount)}
              >
                ${amount.toFixed(2)}
              </Button>
            )
          })}
        </div>

        <p
          className="text-[26px]"
          style={{
            ...theme.getStyle("black"),
            ...theme.getStyle("fontSerious"),
          }}
        >
          or
        </p>

        <div className="w-[700px] space-y-3">
          <div className="flex items-start gap-4">
            <Input
              type="number"
              step="0.01"
              min="0"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              placeholder="0.00"
              className="w-[500px] h-[85px] text-center text-[20px] font-light border-[2px] rounded-lg focus:outline-none focus:ring-0 focus:border-[#FFC72C] placeholder:text-[20px] placeholder:font-light placeholder:text-[#868686] focus:text-[20px] focus:font-light"
              style={{
                ...theme.getStyle("fontSerious"),
                borderColor: "#FFC72C",
                ...theme.getStyle("greyDarker"),
                ...theme.getStyle("whiteBg"),
              }}
            />

            <div className="flex flex-col items-end gap-2">
              <span
                className="text-[20px]"
                style={{
                  ...theme.getStyle("greyDarker"),
                  ...theme.getStyle("fontSerious"),
                }}
              >
                Subtotal: {subtotal.toFixed(2)} $
              </span>
              <div
                className="flex items-center gap-5 border-2 rounded-full px-8 py-3"
                style={{
                  ...theme.getStyle("secondaryBg"),
                  ...theme.getStyle("secondaryBorder"),
                }}
              >
                <span
                  className="text-[22px] font-bold whitespace-nowrap"
                  style={{
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  Round Up
                </span>
                <Switch
                  checked={roundUp}
                  onCheckedChange={setRoundUp}
                  className="scale-120"
                  style={roundUp ? theme.getStyle("primaryBg") : theme.getStyle("greyLightBg")}
                />
              </div>
            </div>
          </div>
        </div>

        <Button
          className="w-[700px] h-[90px] text-[30px] font-medium rounded-lg mt-1 transition hover:opacity-90"
          style={{
            ...theme.getStyle("errorBg"),
            ...theme.getStyle("white"),
            ...theme.getStyle("fontBranded"),
          }}
          onClick={() => {
            console.log("[v0] Donation amount:", subtotal)
          }}
        >
          Make a donation
        </Button>

        <Button
          variant="outline"
          className="w-[240px] h-[70px] border-2 text-[19px] rounded-lg transition hover:opacity-90 bg-transparent mt-5"
          style={{
            ...theme.getStyle("fontSerious"),
            ...theme.getStyle("greyLightBorder"),
            ...theme.getStyle("whiteBg"),
            ...theme.getStyle("black"),
          }}
          onClick={() => {
            console.log("[v0] User clicked Not today")
          }}
        >
          Not today
        </Button>
      </div>
    </HeaderIconTextLayout>
  )
}
