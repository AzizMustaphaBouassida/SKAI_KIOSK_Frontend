"use client";

import { useState } from "react";
import HappyEmployeeImage from "@/assets/images/happy-employee-image.svg";
import DoubleCheckIcon from "@/assets/icons/double-check-icon.svg";
// @ts-ignore
import HeaderTitleLayout from "../../layouts/header-title-layout";
// @ts-ignore
import { useTheme } from "@/app/hooks/useTheme";
import { useTranslation } from "react-i18next";

export default function OrderNumberPage() {
  const theme = useTheme();
  const { t } = useTranslation();
  const orderNumber = "0909";

  // Payment method state - you can change this to 'card' or 'cash'
  const [paymentMethod] = useState<"card" | "cash">("card");

  // Dynamic text based on payment method
  const getReceiptText = () => {
    return paymentMethod === "card"
      ? t('pages.orderNumber.receiptCard')
      : t('pages.orderNumber.receiptCash');
  };

  return (
    <HeaderTitleLayout title={t('pages.orderNumber.title')}>
      <div className="h-full px-6 py-8">
        <h2
          className="text-center text-[50px] font-bold leading-tight mb-40"
          style={{
            ...theme.getStyle("black"),
            ...theme.getStyle("fontBranded"),
          }}
        >
          {getReceiptText()}
        </h2>

        {/* Order Number Card */}
        <div className="mx-auto w-[720px]">
          <div
            className="relative border-[3px] rounded-xl p-6 flex items-start justify-between h-[300px]"
            style={{
              ...theme.getStyle("whiteBg"),
              ...theme.getStyle("secondaryBorder"),
            }}
          >
            {/* Left side - Number display */}
            <div className="flex flex-col">
              <div
                className="text-[50px] mb-1"
                style={{
                  ...theme.getStyle("greyDarker"),
                  ...theme.getStyle("fontSerious"),
                }}
              >
                {t('pages.orderNumber.number')}
              </div>
              <div
                className="w-[65px] h-[4px] mb-3"
                style={{
                  ...theme.getStyle("greyDarkBg"),
                }}
              ></div>
              <div
                className="text-[128px] font-bold leading-none ml-[80px]"
                style={{
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontBranded"),
                }}
              >
                {orderNumber}
              </div>
            </div>

            {/* Right side - Employee illustration */}
            <div className="flex-shrink-0">
              <img
                src={HappyEmployeeImage || "/placeholder.svg"}
                alt="McDonald's employee"
                className="w-[280px] h-[280px] object-contain -mr-20"
              />
            </div>
          </div>
        </div>

        {/* Disconnected indicator */}
        <div className="fixed bottom-0 left-8">
          <div
            className="rounded-lg w-[190px] h-[190px] flex flex-col items-center justify-center gap-1"
            style={{
              ...theme.getStyle("greyDarkBg"),
            }}
          >
            <img
              src={DoubleCheckIcon || "/placeholder.svg"}
              alt="Disconnected"
              className="w-[52px] h-[52px]"
            />
            <span
              className="text-[13px] font-medium"
              style={{
                ...theme.getStyle("black"),
                ...theme.getStyle("fontSerious"),
              }}
            >
              {t('pages.orderNumber.disconnected')}
            </span>
          </div>
        </div>
      </div>
    </HeaderTitleLayout>
  );
}
