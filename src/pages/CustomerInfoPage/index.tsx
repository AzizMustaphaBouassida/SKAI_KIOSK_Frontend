"use client";

import { useState } from "react";
// @ts-ignore
import HeaderTitleLayout from "../../layouts/header-title-layout";
import { Button } from "@/components/ui/button";
import DeleteIcon from "@/assets/icons/delete-icon.svg";

// @ts-ignore
import { useTheme } from "../../hooks/useTheme";

interface CustomerInfoPageProps {
  type: "phone" | "name";
}

export default function CustomerInfoPage({ type }: CustomerInfoPageProps) {
  const theme = useTheme();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerName, setCustomerName] = useState("");

  const boxShadowStyle = { boxShadow: "0px 4px 4px 0px #00000040" };

  // Letter keyboard layout for name input (AZERTY)
  const letterRows = [
    ["A", "Z", "E", "R", "T", "Y", "U", "I", "O"],
    ["P", "Q", "S", "D", "F", "G", "H", "J", "K"],
    ["L", "M", "W", "X", "C", "V", "B", "N"],
  ];

  // Format phone number as 555-555-5555
  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6)
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const handleNumberClick = (num: string) => {
    if (phoneNumber.replace(/\D/g, "").length < 10) {
      const newNumber = phoneNumber.replace(/\D/g, "") + num;
      setPhoneNumber(formatPhoneNumber(newNumber));
    }
  };

  const handleLetterClick = (letter: string) => {
    if (customerName.length < 20) {
      // Limit name length
      setCustomerName(customerName + letter);
    }
  };

  const handleBackspace = () => {
    if (type === "phone") {
      const cleaned = phoneNumber.replace(/\D/g, "");
      const newNumber = cleaned.slice(0, -1);
      setPhoneNumber(formatPhoneNumber(newNumber));
    } else {
      setCustomerName(customerName.slice(0, -1));
    }
  };

  const handleSkip = () => {
    console.log("Skip clicked");
  };

  const handleConfirm = () => {
    if (type === "phone") {
      console.log("Confirm clicked with number:", phoneNumber);
    } else {
      console.log("Confirm clicked with name:", customerName);
    }
  };

  return (
    <HeaderTitleLayout
      title={type === "phone" ? "Enter your number" : "Enter your name"}
    >
      <div
        className={`flex flex-col items-center px-6 py-8 mx-auto ${type === "phone" ? "w-[720px]" : "w-[900px]"}`}
      >
        {/* Description */}
        <p
          className="text-center text-[32px] mb-16"
          style={{
            ...theme.getStyle("black"),
            ...theme.getStyle("fontSerious"),
          }}
        >
          {type === "phone"
            ? "Your number will be used to call you when your order is ready"
            : "Your name will be used to call you when your order is ready"}
        </p>

        {/* Input Display with Backspace */}
        <div className="flex gap-3 mb-6 w-full">
          <div
            className="flex-1 h-[90px] border-[1.5px] rounded-xl flex items-center justify-center"
            style={{
              ...theme.getStyle("whiteBg"),
              ...theme.getStyle("greyDarkerBorder"),
              ...boxShadowStyle,
            }}
          >
            <span
              className="text-[32px] font-normal"
              style={{
                ...theme.getStyle("black"),
                ...theme.getStyle("fontSerious"),
              }}
            >
              {type === "phone"
                ? phoneNumber || "555-555-5555"
                : customerName || "Enter your name"}
            </span>
          </div>
          <Button
            onClick={handleBackspace}
            className="w-[130px] h-[90px] rounded-xl p-0"
            style={{
              ...theme.getStyle("secondaryBg"),
              ...theme.getStyle("black"),
              ...boxShadowStyle,
            }}
          >
            <img src={DeleteIcon} alt="Delete" className="w-[45px] h-[45px]" />
          </Button>
        </div>

        {/* Keyboard */}
        {type === "phone" ? (
          <>
            {/* Number Pad */}
            <div className="grid grid-cols-3 gap-4 mb-6 w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <Button
                  key={num}
                  onClick={() => handleNumberClick(num.toString())}
                  variant="outline"
                  className="h-[90px] text-[32px] font-semibold rounded-xl"
                  style={{
                    ...theme.getStyle("whiteBg"),
                    ...theme.getStyle("greyDarkerBorder"),
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontSerious"),
                    ...boxShadowStyle,
                  }}
                >
                  {num}
                </Button>
              ))}
            </div>

            {/* Zero Button (Centered) */}
            <div className="flex justify-center mb-16 w-full">
              <Button
                onClick={() => handleNumberClick("0")}
                variant="outline"
                className="w-[calc(33.333%-10.667px)] h-[90px] text-[32px] font-semibold rounded-xl"
                style={{
                  ...theme.getStyle("whiteBg"),
                  ...theme.getStyle("greyDarkerBorder"),
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontSerious"),
                  ...boxShadowStyle,
                }}
              >
                0
              </Button>
            </div>
          </>
        ) : (
          /* Letter Keyboard */
          <div className="space-y-4 mb-16 w-full">
            {letterRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-4 justify-center">
                {row.map((letter) => (
                  <Button
                    key={letter}
                    onClick={() => handleLetterClick(letter)}
                    variant="outline"
                    className="h-[90px] w-[90px] text-[32px] font-semibold rounded-xl"
                    style={{
                      ...theme.getStyle("whiteBg"),
                      ...theme.getStyle("greyDarkerBorder"),
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontSerious"),
                      ...boxShadowStyle,
                    }}
                  >
                    {letter}
                  </Button>
                ))}
              </div>
            ))}

            {/* Space Button */}
            <div className="flex justify-center">
              <Button
                onClick={() => handleLetterClick(" ")}
                variant="outline"
                className="h-[90px] w-[300px] text-[32px] font-semibold rounded-xl"
                style={{
                  ...theme.getStyle("whiteBg"),
                  ...theme.getStyle("greyDarkerBorder"),
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontSerious"),
                  ...boxShadowStyle,
                }}
              >
                ___
              </Button>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 w-full">
          <Button
            onClick={handleSkip}
            variant="outline"
            className="flex-[2] h-[90px] text-[32px] font-semibold rounded-xl"
            style={{
              ...theme.getStyle("whiteBg"),
              ...theme.getStyle("greyDarkerBorder"),
              ...theme.getStyle("greyDarker"),
              ...theme.getStyle("fontBranded"),
              ...boxShadowStyle,
            }}
          >
            Skip
          </Button>
          <Button
            onClick={handleConfirm}
            className="flex-[2] h-[90px] text-[32px] font-semibold rounded-xl"
            style={{
              ...theme.getStyle("secondaryBg"),
              ...theme.getStyle("black"),
              ...theme.getStyle("fontBranded"),
              ...boxShadowStyle,
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </HeaderTitleLayout>
  );
}
