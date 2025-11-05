"use client";

import { useState } from "react";
// @ts-ignore
import HeaderTitleLayout from "@/layouts/page-layouts/header-title-layout";
import { Button } from "@/components/ui/button";
import DeleteIcon from "@/assets/icons/delete-icon.svg";

// @ts-ignore
import { useTheme } from "@/app/hooks/useTheme";
import { useTranslation } from "react-i18next";

interface CustomerInfoPageProps {
  type: "phone" | "name";
}

export default function CustomerInfoPage({ type }: CustomerInfoPageProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [isUppercase, setIsUppercase] = useState(true);
  const [cursorIndex, setCursorIndex] = useState(0);

  const boxShadowStyle = { boxShadow: "0px 4px 4px 0px #00000040" };

  const letterRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
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
    if (type === "phone") return;
    if (customerName.length >= 20) return;
    const before = customerName.slice(0, cursorIndex);
    const after = customerName.slice(cursorIndex);
    const updated = before + letter + after;
    setCustomerName(updated);
    setCursorIndex(cursorIndex + letter.length);
  };

  const handleBackspace = () => {
    if (type === "phone") {
      const cleaned = phoneNumber.replace(/\D/g, "");
      const newNumber = cleaned.slice(0, -1);
      setPhoneNumber(formatPhoneNumber(newNumber));
    } else {
      if (cursorIndex > 0) {
        const before = customerName.slice(0, cursorIndex - 1);
        const after = customerName.slice(cursorIndex);
        setCustomerName(before + after);
        setCursorIndex(cursorIndex - 1);
      }
    }
  };

  const moveCursorLeft = () => {
    if (type === "name") {
      setCursorIndex(Math.max(0, cursorIndex - 1));
    }
  };

  const moveCursorRight = () => {
    if (type === "name") {
      setCursorIndex(Math.min(customerName.length, cursorIndex + 1));
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
      title={type === "phone" ? t('pages.customerInfo.enterNumber') : t('pages.customerInfo.enterName')}
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
            ? t('pages.customerInfo.numberDescription')
            : t('pages.customerInfo.nameDescription')}
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
            {type === "phone" ? (
              <span
                className="text-[32px] font-normal"
                style={{
                  ...(phoneNumber
                    ? theme.getStyle("black")
                    : theme.getStyle("greyDark")),
                  ...theme.getStyle("fontSerious"),
                }}
              >
                {phoneNumber || t('pages.customerInfo.placeholder.phone')}
              </span>
            ) : (
              <span
                className="text-[32px] font-normal"
                style={{
                  ...(customerName.length === 0
                    ? theme.getStyle("greyDark")
                    : theme.getStyle("black")),
                  ...theme.getStyle("fontSerious"),
                }}
              >
                {customerName.length === 0 ? (
                  t('pages.customerInfo.placeholder.name')
                ) : (
                  <>
                    {customerName.slice(0, cursorIndex)}
                    <span
                      className="inline-block align-middle"
                      style={{
                        width: "2px",
                        height: "36px",
                        backgroundColor: theme.getStyle("black").color || "#000",
                        margin: "0 2px",
                      }}
                    />
                    {customerName.slice(cursorIndex)}
                  </>
                )}
              </span>
            )}
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
                {row.map((letter) => {
                  const displayLetter = isUppercase ? letter : letter.toLowerCase();
                  return (
                  <Button
                    key={letter}
                    onClick={() => handleLetterClick(displayLetter)}
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
                    {displayLetter}
                  </Button>
                  );
                })}
                {rowIndex === letterRows.length - 1 && (
                  <Button
                    onClick={() => setIsUppercase(!isUppercase)}
                    variant="outline"
                    className="h-[90px] w-[180px] text-[28px] font-semibold rounded-xl"
                    style={{
                      ...theme.getStyle(isUppercase ? "secondaryBg" : "whiteBg"),
                      ...theme.getStyle("greyDarkerBorder"),
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontSerious"),
                      ...boxShadowStyle,
                    }}
                  >
                    {isUppercase ? t('pages.customerInfo.maj') : t('pages.customerInfo.maj').toLowerCase()}
                  </Button>
                )}
              </div>
            ))}

            {/* Space row with arrows and MAJ toggle */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={moveCursorLeft}
                variant="outline"
                className="h-[90px] w-[130px] text-[50px] font-semibold rounded-xl"
                style={{
                  ...theme.getStyle("whiteBg"),
                  ...theme.getStyle("greyDarkerBorder"),
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontSerious"),
                  ...boxShadowStyle,
                }}
              >
                ←
              </Button>
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
              <Button
                onClick={moveCursorRight}
                variant="outline"
                className="h-[90px] w-[130px] text-[50px] font-semibold rounded-xl"
                style={{
                  ...theme.getStyle("whiteBg"),
                  ...theme.getStyle("greyDarkerBorder"),
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontSerious"),
                  ...boxShadowStyle,
                }}
              >
                →
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
            {t('common.skip')}
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
            {t('common.confirm')}
          </Button>
        </div>
      </div>
    </HeaderTitleLayout>
  );
}
