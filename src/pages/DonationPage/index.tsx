"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// @ts-ignore
import InfoIcon from "@/assets/icons/info-icon.svg";
// @ts-ignore
import { useTheme } from "@/app/hooks/useTheme";
// @ts-ignore
import HeaderIconTextLayout from "@/layouts/header-icon-text-layout";

import offerTermsIcon from "@/assets/icons/offer-terms_conditions-icon.svg";
// @ts-ignore
import DonationIcon from "@/assets/icons/donation-icon.svg";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [roundUp, setRoundUp] = useState(false);
  const boxShadowStyle = { boxShadow: "0px 4px 4px 0px #00000040" };
  const theme = useTheme();
  const { t } = useTranslation();
  const [infoOpen, setInfoOpen] = useState(false);

  const presetAmounts = [1.0, 2.0, 3.0];

  const calculateSubtotal = () => {
    const amount = selectedAmount || Number.parseFloat(customAmount) || 0;
    if (roundUp && amount > 0) {
      return Math.ceil(amount);
    }
    return amount;
  };

  const subtotal = calculateSubtotal();

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  return (
    <HeaderIconTextLayout
      icon={DonationIcon}
      text={t("donation.title")}
      subtitle={t("donation.subtitle")}
    >
      <div
        className="w-full max-w-[960px] mx-auto flex flex-col items-center space-y-8 px-8"
        style={theme.getStyle("fontSerious")}
      >
        <div className="flex flex-col items-center space-y-4">
          <div
            className="w-14 h-10 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setInfoOpen(true)}
          >
            <img
              src={InfoIcon || "/placeholder.svg"}
              alt="Information"
              className="w-10 h-10"
            />
          </div>
          <p
            className="text-[26px]"
            style={{
              ...theme.getStyle("black"),
              ...theme.getStyle("fontSerious"),
            }}
          >
            {t("donation.thanks")}
          </p>
        </div>
        {/* INFO MODAL */}
        <Dialog open={infoOpen} onOpenChange={setInfoOpen}>
          <DialogContent
            className="max-w-[1200px] w-[75vw] max-h-[1500px] h-[50vh] p-0 gap-0 bg-white rounded-[20px]"
            style={boxShadowStyle}
          >
            <div className="flex items-start justify-between p-8 pb-4">
              <div className="flex-1 pl-12 pt-24">
                <div className="flex flex-row items-center gap-4">
                  <DialogTitle
                    className="text-[48px] font-bold leading-tight mb-2"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                    }}
                  >
                    Terms & Beneficiaries
                  </DialogTitle>
                  <img
                    src={offerTermsIcon}
                    alt="Terms & Conditions"
                    className="w-[100px] h-[100px] ml-3"
                  />
                </div>
                <DialogDescription
                  className="text-[22px] font-regular mt-16 pr-12"
                  style={{
                    ...theme.getStyle("greyDarker"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  Through our kiosk, you may select any amount to donate, and
                  your contribution will directly assist underprivileged
                  individuals. The process is secure, efficient, and ensures
                  that your support effectively reaches those in need.
                </DialogDescription>
              </div>
            </div>
            <DialogFooter className="flex flex-row gap-3 p-16 pt-40 !justify-center items-center w-full">
              <Button
                variant="outline"
                onClick={() => setInfoOpen(false)}
                className="w-[650px] h-[84px] text-3xl font-semibold rounded-lg border-2 border-gray-300"
                style={{
                  ...theme.getStyle("greyDarker"),
                  ...theme.getStyle("fontBranded"),
                  ...theme.getStyle("greyDarkerBorder"),
                  ...boxShadowStyle,
                }}
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* END INFO MODAL */}

        <div className="flex gap-12 mt-6">
          {presetAmounts.map((amount) => {
            const isSelected = selectedAmount === amount;
            return (
              <Button
                key={amount}
                variant="outline"
                className="w-[170px] h-[150px] text-[30px] font-semibold rounded-xl border-2 transition hover:opacity-90 bg-transparent"
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
                onClick={() => handlePresetClick(amount)}
              >
                ${amount.toFixed(2)}
              </Button>
            );
          })}
        </div>

        <p
          className="text-[26px]"
          style={{
            ...theme.getStyle("black"),
            ...theme.getStyle("fontSerious"),
          }}
        >
          {t("common.or")}
        </p>

        <div className="w-[700px] space-y-3">
          <div className="flex items-start gap-4">
            <Input
              type="number"
              step="0.01"
              min="0"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              placeholder={t("tip.placeholder")}
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
                {t("donation.subtotal", { amount: subtotal.toFixed(2) })}
              </span>
              <button
                onClick={() => setRoundUp(!roundUp)}
                className="relative flex items-center rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: roundUp ? "#FFC107" : "#D1D5DB",
                  width: "200px",
                  height: "52px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                }}
              >
                <span
                  className="text-[22px] font-bold whitespace-nowrap transition-all duration-300"
                  style={{
                    color: roundUp ? "#000000" : "#6B7280",
                    marginLeft: roundUp ? "0" : "40px",
                  }}
                >
                  {t("donation.roundUp")}
                </span>
                <div
                  className="absolute bg-white rounded-full transition-all duration-300"
                  style={{
                    width: "40px",
                    height: "40px",
                    left: roundUp ? "calc(100% - 52px)" : "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        <Button
          className="w-[700px] h-[90px] text-[30px] font-medium rounded-lg mt-1 transition hover:opacity-90"
          style={{
            ...theme.getStyle("errorBg"),
            ...theme.getStyle("white"),
            ...theme.getStyle("fontBranded"),
            ...boxShadowStyle,
          }}
          onClick={() => {
            console.log("[v0] Donation amount:", subtotal);
          }}
        >
          {t("donation.makeDonation")}
        </Button>

        <Button
          variant="outline"
          className="w-[260px] h-[80px] border-2 text-[24px] rounded-lg transition hover:opacity-90 bg-transparent mt-5"
          style={{
            ...theme.getStyle("fontSerious"),
            ...theme.getStyle("greyDarkerBorder"),
            ...theme.getStyle("whiteBg"),
            ...theme.getStyle("black"),
          }}
          onClick={() => {
            console.log("[v0] User clicked Not today");
          }}
        >
          {t("donation.notToday")}
        </Button>
      </div>
    </HeaderIconTextLayout>
  );
}
