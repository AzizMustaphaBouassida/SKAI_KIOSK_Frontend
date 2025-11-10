"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
// @ts-ignore
import HeaderLayout from "@/layouts/layout-parts/header-layout.tsx";
import { Button } from "@/components/ui/button";
// @ts-ignore
import { useTheme } from "@/app/hooks/useTheme";
import coffeeDrinkImage from "@/assets/images/coffee_drink-image.svg";
import cupSizeImage from "@/assets/images/cup-size_image.svg";
import { ChevronDown, ChevronUp, Plus, Check } from "lucide-react";
import popupImage from "@/assets/images/popup-image.svg";
import restartIcon from "@/assets/icons/restart-icon.svg";
import saucesIcon from "@/assets/icons/sauces-icon.svg";
import hotSauceIcon from "@/assets/icons/hot-sauce-icon.svg";

const noScrollbarStyles = `
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

interface Option {
  id: string;
  name: string;
  calories: number;
  price: string;
  image: string;
}

const sampleOption: Option = {
  id: "product1",
  name: "Product1",
  calories: 1500,
  price: "7$",
  image: coffeeDrinkImage,
};

function CoffeeCupIcon({
  size,
  className = "",
}: {
  size: "S" | "M" | "L" | "XL";
  className?: string;
}) {
  const dimensions = {
    S: { width: 110, height: 150 },
    M: { width: 115, height: 155 },
    L: { width: 120, height: 160 },
    XL: { width: 125, height: 165 },
  };
  const { width, height } = dimensions[size];

  return (
    <img
      src={cupSizeImage || "/placeholder.svg"}
      alt={`${size} cup size`}
      style={{ width, height }}
      className={`object-contain block ${className}`}
    />
  );
}

export function CustomizationInterface({
  option,
  onClose,
  showFrequentlyBought = true,
  compactMode = false,
}: {
  option: Option;
  onClose: () => void;
  showFrequentlyBought?: boolean;
  compactMode?: boolean;
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState<
    "popular" | "previous" | "recommendation" | null
  >(null);
  const [selectedSize, setSelectedSize] = useState<
    "S" | "M" | "L" | "XL" | null
  >(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isSubsection1Open, setIsSubsection1Open] = useState(true);
  const [isSubsection2Open, setIsSubsection2Open] = useState(false);
  const [isSubsection3Open, setIsSubsection3Open] = useState(false);
  const [isSubsection6Open, setIsSubsection6Open] = useState(false);
  const [selectedOptionSubsection1, setSelectedOptionSubsection1] = useState<
    string | null
  >(null);
  const [subsection2Quantities, setSubsection2Quantities] = useState<
    Record<string, number>
  >({
    "option-1": 0,
    "option-2": 0,
    "option-3": 0,
    "option-4": 0,
    "option-5": 0,
    "option-6": 0,
  });
  const [subsection3Checkboxes, setSubsection3Checkboxes] = useState<
    Record<string, boolean>
  >({
    "checkbox-1": false,
    "checkbox-2": false,
    "checkbox-3": false,
    "checkbox-4": false,
  });
  const [subsection6Checkboxes, setSubsection6Checkboxes] = useState<
    Record<string, boolean>
  >({
    "topping-1": false,
    "topping-2": false,
    "topping-3": false,
    "topping-4": false,
  });
  const [subsection4Quantity, setSubsection4Quantity] = useState(0);
  const [subsection5Level, setSubsection5Level] = useState(1);
  const showSubsection1Icon = false;
  const showSubsection2Icon = true;
  const showSubsection3Icon = true;
  const showOptionSelector = true;
  const showOptionIcons = true;

  const tabs = [
    {
      id: "popular" as const,
      label: t("customization.mostPopular"),
      subtitle: t("customization.orderedBy"),
      detail: "small, regular, tomato sauce",
    },
    {
      id: "previous" as const,
      label: t("customization.previousChoice"),
      subtitle: t("customization.orderedBy"),
      detail: "small, regular, tomato sauce",
    },
    {
      id: "recommendation" as const,
      label: t("customization.ourRecommendation"),
      subtitle: t("customization.orderedBy"),
      detail: "small, regular, tomato sauce",
    },
  ];

  const sizes = [
    { id: "S" as const, label: "S", price: "+$1.00", calories: "200 cal" },
    { id: "M" as const, label: "M", price: "+$3.00", calories: "300 cal" },
    { id: "L" as const, label: "L", price: "+$3.00", calories: "400 cal" },
    { id: "XL" as const, label: "XL", price: "+$20.00", calories: "500 cal" },
  ];

  const frequentlyBought = [
    {
      id: "cheese-roll",
      name: "Cheese Roll",
      price: "4.50$",
      calories: "40 cal",
      image: popupImage,
    },
    { id: "dr-pepper", name: "Dr.Pepper", price: "4.50$", calories: "40 cal" },
  ];

  const options = [
    { id: "op1", label: "op1" },
    { id: "op2", label: "op2" },
    { id: "op3", label: "op3" },
    { id: "op4", label: "op4" },
  ];
  const subsection5Levels = ["Light", "Regular", "Extra"];
  const showOptionDetails = {
    subsection1: true,
    subsection2: false,
    subsection3: true,
    subsection6: true,
  };
  const subsectionOptionDetails = {
    subsection1: [
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
    ],
    subsection2: [
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
    ],
    subsection3: [
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
      "$4.50 - 40 cal",
    ],
    subsection6: ["40 cal", "40 cal", "40 cal", "40 cal"],
  } as const;
  const showSubsectionSubtitles = {
    subsection1: true,
    subsection2: true,
    subsection3: false,
  };
  const subsectionSubtitles = {
    subsection1: "Choose up to 5",
    subsection2: "Choose up to 5",
    subsection3: "Choose up to 5",
  } as const;

  const checkedToppingsCount = Object.values(subsection6Checkboxes).filter(
    Boolean
  ).length;

  const toppingNames = ["Hummus", "Lettuce", "Tzatziki", "Marionated Onions"];

  return (
    <div
      className={`w-full h-full flex flex-col ${compactMode ? 'scale-[0.75] origin-top-left' : ''}`}
      style={{
        ...theme.getStyle("fontSerious"),
        ...(compactMode ? { width: '133.33%', height: '133.33%' } : {})
      }}
    >
      <div className="flex-1">
        <div className={`flex items-start justify-end ${compactMode ? 'mb-2' : 'mb-4'}`}>
          <div className={`flex items-center ${compactMode ? 'mr-12' : 'mr-24'} shrink-0`}>
            <img
              src={option.image || "/placeholder.svg"}
              alt={option.name}
              className={`${compactMode ? 'w-[180px] h-[180px]' : 'w-[260px] h-[260px]'} object-contain shrink-0`}
            />
            <div className="flex flex-col shrink-0">
              <h2
                className={`${compactMode ? 'text-[38px]' : 'text-[55px]'} font-bold leading-tight`}
                style={{
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontBranded"),
                }}
              >
                {option.name}
              </h2>
              <p className={`${compactMode ? 'text-[18px]' : 'text-[26px]'}`} style={theme.getStyle("greyDarker")}>
                {option.price} /{option.calories} cal
              </p>

              <div
                className={`flex items-stretch overflow-hidden border rounded-xl ${compactMode ? 'w-[180px] h-[40px] mt-8' : 'w-[250px] h-[50px] mt-16'}`}
                style={{ borderColor: theme.colors.greyDarker }}
              >
                <button
                  type="button"
                  className="flex-1 bg-white flex items-center justify-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <span
                    className={`${compactMode ? 'text-[16px]' : 'text-[22px]'} font-normal`}
                    style={theme.getStyle("black")}
                  >
                    -
                  </span>
                </button>
                <div
                  className={`${compactMode ? 'w-[60px]' : 'w-[80px]'} flex items-center justify-center border-l border-r bg-white`}
                  style={{ borderColor: theme.colors.greyDarker }}
                >
                  <span
                    className={`${compactMode ? 'text-[14px]' : 'text-[18px]'} font-medium`}
                    style={theme.getStyle("black")}
                  >
                    {quantity}
                  </span>
                </div>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center"
                  style={{
                    backgroundColor: theme.colors.secondary,
                  }}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <span
                    className={`${compactMode ? 'text-[16px]' : 'text-[22px]'} font-bold`}
                    style={theme.getStyle("black")}
                  >
                    +
                  </span>
                </button>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            className={`${compactMode ? 'h-[36px] px-4 text-[14px] mt-24' : 'h-[48px] px-6 text-[20px] mt-48'} font-semibold rounded-lg border bg-transparent flex items-center gap-3`}
            style={{
              ...theme.getStyle("whiteBg"),
              borderColor: theme.colors.greyDarker,
              ...theme.getStyle("greyDarker"),
            }}
          >
            {t("customization.restart")}
            <span
              className={`inline-flex items-center justify-center ${compactMode ? 'w-7 h-7' : 'w-10 h-10'} rounded-lg`}
              style={{ backgroundColor: theme.colors.white }}
            >
              <img
                src={restartIcon || "/placeholder.svg"}
                alt="Restart icon"
                className={`${compactMode ? 'w-4 h-4 ml-4' : 'w-6 h-6 ml-8'}`}
              />
            </span>
          </Button>
        </div>

        <div className={`flex gap-3 ${compactMode ? 'mb-4' : 'mb-8'}`}>
          {tabs.map((tab) => {
            const isSelected = selectedTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() =>
                  setSelectedTab((current) =>
                    current === tab.id ? null : tab.id
                  )
                }
                className={`${compactMode ? 'h-[90px]' : 'h-[130px]'} w-full rounded-lg text-left transition-all border-2`}
                style={{
                  backgroundColor: "white",
                  borderColor: isSelected
                    ? theme.colors.primary
                    : theme.colors.greyDarker,
                }}
              >
                <div
                  className={`${compactMode ? 'text-[18px] mb-1 ml-3 mt-1' : 'text-[26px] mb-2 ml-4 mt-2'} font-extrabold`}
                  style={theme.getStyle("red")}
                >
                  {tab.label}
                </div>
                <div
                  className={`${compactMode ? 'text-[12px] ml-3' : 'text-[18px] ml-4'} font-semibold`}
                  style={{ color: theme.colors.black }}
                >
                  {tab.subtitle}
                </div>
                <div
                  className={`${compactMode ? 'text-[11px] ml-3 mb-1' : 'text-[16px] ml-4 mb-2'}`}
                  style={{ color: theme.colors.greyDarker }}
                >
                  {tab.detail}
                </div>
              </button>
            );
          })}
        </div>

        <div className={`${compactMode ? 'mb-4' : 'mb-8'}`}>
          <div className={`flex items-center gap-50 ${compactMode ? 'mb-3' : 'mb-5'}`}>
            <h3
              className={`${compactMode ? 'text-2xl mb-10' : 'text-4xl mb-20'} font-bold`}
              style={theme.getStyle("black")}
            >
              {t("customization.size")}
            </h3>
            <div className={`flex ${compactMode ? 'gap-2' : 'gap-4'}`}>
              {sizes.map((size) => {
                const isSelected = selectedSize === size.id;
                return (
                  <button
                    key={size.id}
                    onClick={() =>
                      setSelectedSize((current) =>
                        current === size.id ? null : size.id
                      )
                    }
                    className={`${compactMode ? 'w-[110px] h-[95px]' : 'w-[155px] h-[135px]'} rounded-lg flex flex-col items-center justify-center gap-1 transition-all border-2 bg-white`}
                    style={{
                      backgroundColor: isSelected
                        ? theme.colors.secondary
                        : theme.colors.white,
                      borderColor: isSelected
                        ? theme.colors.secondary
                        : theme.colors.greyDarker,
                    }}
                  >
                    <div className={`flex flex-col items-center ${compactMode ? 'mb-6 mr-2' : 'mb-10 mr-4'}`}>
                      <div className="relative -mb-10">
                        <CoffeeCupIcon size={size.id} />
                        <span
                          className={`absolute top-1/2 left-1/2 transform ${compactMode ? 'text-[20px]' : 'text-[30px]'} font-extrabold`}
                          style={{
                            color: "#DC2626",
                            transform: "translate(-30%, -50%)",
                          }}
                        >
                          {size.label}
                        </span>
                      </div>
                      {/* </CHANGE> */}
                      <div
                        className={`${compactMode ? 'text-[11px]' : 'text-[16px]'} font-light leading-tight ml-2`}
                        style={{ color: theme.colors.black }}
                      >
                        {size.price}
                      </div>
                      <div
                        className={`${compactMode ? 'text-[9px]' : 'text-[12px]'} font-medium leading-tight ml-2`}
                        style={{ color: theme.colors.greyDarker }}
                      >
                        {size.calories}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {showOptionSelector && (
          <div className={`${compactMode ? 'mb-4' : 'mb-8'}`}>
            <div className={`flex items-center justify-between ${compactMode ? 'mb-3' : 'mb-5'}`}>
              <h3
                className={`${compactMode ? 'text-2xl mb-10' : 'text-4xl mb-20'} font-bold`}
                style={theme.getStyle("black")}
              >
                {t("customization.subsection")}
              </h3>
              <div className={`flex ${compactMode ? 'gap-2' : 'gap-4'}`}>
                {options.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() =>
                        setSelectedOption((current) =>
                          current === opt.id ? null : opt.id
                        )
                      }
                      className={`${compactMode ? 'w-[100px] h-[85px]' : 'w-[145px] h-[125px]'} rounded-lg flex items-center justify-center transition-all border-2`}
                      style={{
                        backgroundColor: isSelected
                          ? theme.colors.primary
                          : theme.colors.white,
                        borderColor: isSelected
                          ? theme.colors.primary
                          : theme.colors.greyDarker,
                        color: isSelected
                          ? theme.colors.white
                          : theme.colors.black,
                      }}
                    >
                      <span className={`${compactMode ? 'text-[16px]' : 'text-[24px]'} font-semibold`}>
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className={`${compactMode ? 'space-y-3 mb-4 max-h-96' : 'space-y-5 mb-8 max-h-145'} overflow-y-auto no-scrollbar`}>
          {/* First Subsection - Radio Buttons */}
          <div
            className="rounded-xl border bg-white"
            style={{
              borderColor: theme.colors.greyDarker,
            }}
          >
            <button
              onClick={() => setIsSubsection1Open(!isSubsection1Open)}
              className="w-full flex items-center justify-between p-5"
            >
              <div className="flex items-center gap-4 flex-1">
                {showSubsection1Icon && (
                  <img
                    src={saucesIcon || "/placeholder.svg"}
                    alt="Sauces icon"
                    className="w-12 h-12 object-contain"
                  />
                )}
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-4xl font-bold"
                    style={theme.getStyle("black")}
                  >
                    {t("customization.subsection")}
                  </h3>
                  {showSubsectionSubtitles.subsection1 && (
                    <span className="text-[18px] text-gray-500 mr-20">
                      {subsectionSubtitles.subsection1}
                    </span>
                  )}
                </div>
                <span
                  className="px-4 py-1.5 w-[185px] h-[55px] rounded text-[25px] font-normal ml-auto mr-8"
                  style={{
                    backgroundColor: "#FEF3C7",
                    color: theme.colors.black,
                  }}
                >
                  {t("customization.default")}
                </span>
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F3F4F6" }}
              >
                {isSubsection1Open ? (
                  <ChevronUp
                    className="w-6 h-6"
                    style={theme.getStyle("greyDarker")}
                  />
                ) : (
                  <ChevronDown
                    className="w-6 h-6"
                    style={theme.getStyle("greyDarker")}
                  />
                )}
              </div>
            </button>

            {isSubsection1Open && (
              <div className="px-8 pb-5 space-y-2">
                {[1, 2, 3, 4, 5, 6].map((i) => {
                  const optionId = `option-${i}`;
                  const isSelected = selectedOptionSubsection1 === optionId;
                  const isUnavailable = i === 1;

                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between py-4 px-6 rounded-lg"
                      style={{
                        backgroundColor: isSelected
                          ? "#F3F4F6"
                          : theme.colors.white,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {showOptionIcons && (
                          <img
                            src={hotSauceIcon || "/placeholder.svg"}
                            alt="Option icon"
                            className="w-14 h-14 object-contain"
                            style={{
                              opacity: isUnavailable ? 0.4 : 1,
                            }}
                          />
                        )}
                        <div className="flex flex-col">
                          <span
                            className="text-[26px] font-bold"
                            style={{
                              color: isUnavailable
                                ? "#D1D5DB"
                                : theme.colors.black,
                            }}
                          >
                            {t("customization.option")}
                          </span>
                          {showOptionDetails.subsection1 && (
                            <span
                              className="text-[16px] font-normal"
                              style={{
                                color: isUnavailable ? "#D1D5DB" : "#6B7280",
                              }}
                            >
                              {subsectionOptionDetails.subsection1[i - 1] || ""}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        {isUnavailable && (
                          <span
                            className="text-[20px] font-bold"
                            style={theme.getStyle("red")}
                          >
                            Unavailable ingredient
                          </span>
                        )}
                        <button
                          onClick={() =>
                            !isUnavailable &&
                            setSelectedOptionSubsection1(optionId)
                          }
                          disabled={isUnavailable}
                          className="w-9 h-9 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: isUnavailable
                              ? "#D1D5DB"
                              : isSelected
                                ? theme.colors.secondary
                                : "transparent",
                            border:
                              isUnavailable || isSelected
                                ? "none"
                                : `3px solid ${theme.colors.greyDark}`,
                            cursor: isUnavailable ? "not-allowed" : "pointer",
                          }}
                          aria-pressed={isSelected}
                          aria-disabled={isUnavailable}
                        >
                          {isSelected && !isUnavailable && (
                            <div
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: theme.colors.white }}
                            />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Second Subsection - Quantity Controls */}
          <div
            className="rounded-xl border bg-white"
            style={{
              borderColor: theme.colors.greyDarker,
            }}
          >
            <button
              onClick={() => setIsSubsection2Open(!isSubsection2Open)}
              className="w-full flex items-center justify-between p-5"
            >
              <div className="flex items-center gap-4 flex-1">
                {showSubsection2Icon && (
                  <img
                    src={saucesIcon || "/placeholder.svg"}
                    alt="Sauces icon"
                    className="w-12 h-12 object-contain"
                  />
                )}
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-4xl font-bold"
                    style={theme.getStyle("black")}
                  >
                    {t("customization.subsection")}
                  </h3>
                  {showSubsectionSubtitles.subsection2 && (
                    <span className="text-[18px] text-gray-500 mr-20">
                      {subsectionSubtitles.subsection2}
                    </span>
                  )}
                </div>
                <span
                  className="px-4 py-1.5 w-[185px] h-[55px] rounded text-[25px] font-normal ml-auto mr-8"
                  style={{
                    backgroundColor: "#FEF3C7",
                    color: theme.colors.black,
                  }}
                >
                  {t("customization.default")}
                </span>
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F3F4F6" }}
              >
                {isSubsection2Open ? (
                  <ChevronUp
                    className="w-6 h-6"
                    style={theme.getStyle("greyDarker")}
                  />
                ) : (
                  <ChevronDown
                    className="w-6 h-6"
                    style={theme.getStyle("greyDarker")}
                  />
                )}
              </div>
            </button>

            {isSubsection2Open && (
              <div className="px-8 pb-5 space-y-2">
                {[1, 2, 3, 4, 5, 6].map((i) => {
                  const optionId = `option-${i}`;
                  const currentQuantity = subsection2Quantities[optionId] || 0;

                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between py-4 px-6 rounded-lg"
                      style={{
                        backgroundColor: theme.colors.white,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {showOptionIcons && (
                          <img
                            src={hotSauceIcon || "/placeholder.svg"}
                            alt="Option icon"
                            className="w-14 h-14 object-contain"
                          />
                        )}
                        <div className="flex flex-col">
                          <span
                            className="text-[26px] font-bold"
                            style={theme.getStyle("black")}
                          >
                            {t("customization.option")}
                          </span>
                          {showOptionDetails.subsection2 && (
                            <span
                              className="text-[16px] font-normal"
                              style={{ color: "#6B7280" }}
                            >
                              {subsectionOptionDetails.subsection2[i - 1] || ""}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 -mr-6">
                        <button
                          onClick={() =>
                            setSubsection2Quantities((prev) => ({
                              ...prev,
                              [optionId]: Math.max(0, currentQuantity - 1),
                            }))
                          }
                          className="w-14 h-14 rounded-full flex items-center justify-center border-2 bg-white"
                          style={{
                            borderColor:
                              currentQuantity > 0
                                ? theme.colors.black
                                : theme.colors.greyDark,
                          }}
                        >
                          <span
                            className="text-[24px] font-normal"
                            style={{ color: "#9CA3AF" }}
                          >
                            -
                          </span>
                        </button>
                        <span
                          className="text-[28px] font-bold w-10 text-center"
                          style={{ color: "#6B7280" }}
                        >
                          {currentQuantity}
                        </span>
                        <button
                          onClick={() =>
                            setSubsection2Quantities((prev) => ({
                              ...prev,
                              [optionId]: currentQuantity + 1,
                            }))
                          }
                          className="w-14 h-14 rounded-full flex items-center justify-center border-2 bg-white"
                          style={{
                            borderColor: "#374151",
                          }}
                        >
                          <span
                            className="text-[24px] font-bold"
                            style={{ color: "#374151" }}
                          >
                            +
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Third Subsection - Checkboxes */}
          <div
            className="rounded-xl border bg-white"
            style={{
              borderColor: theme.colors.greyDarker,
            }}
          >
            <button
              onClick={() => setIsSubsection3Open(!isSubsection3Open)}
              className="w-full flex items-center justify-between p-5"
            >
              <div className="flex items-center gap-4 flex-1">
                {showSubsection3Icon && (
                  <img
                    src={saucesIcon || "/placeholder.svg"}
                    alt="Sauces icon"
                    className="w-12 h-12 object-contain"
                  />
                )}
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-4xl font-bold"
                    style={theme.getStyle("black")}
                  >
                    {t("customization.subsection")}
                  </h3>
                  {showSubsectionSubtitles.subsection3 && (
                    <span className="text-[18px] text-gray-500 mr-20">
                      {subsectionSubtitles.subsection3}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 ml-auto mr-8 w-[185px] justify-end">
                  {Object.entries(subsection3Checkboxes)
                    .filter(([_, isChecked]) => isChecked)
                    .map(([checkboxId], index) => (
                      <span
                        key={checkboxId}
                        className="px-5 py-2 text-[22px] rounded font-normal"
                        style={{
                          backgroundColor: "#FEF3C7",
                          color: theme.colors.black,
                        }}
                      >
                        option{index + 1}
                      </span>
                    ))}
                </div>
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F3F4F6" }}
              >
                {isSubsection3Open ? (
                  <ChevronUp
                    className="w-6 h-6"
                    style={theme.getStyle("greyDarker")}
                  />
                ) : (
                  <ChevronDown
                    className="w-6 h-6"
                    style={theme.getStyle("greyDarker")}
                  />
                )}
              </div>
            </button>

            {isSubsection3Open && (
              <div className="px-8 pb-5 space-y-2">
                {[1, 2, 3, 4].map((i) => {
                  const checkboxId = `checkbox-${i}`;
                  const isChecked = subsection3Checkboxes[checkboxId] || false;

                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between py-4 px-6 rounded-lg"
                      style={{
                        backgroundColor: isChecked
                          ? "#F3F4F6"
                          : theme.colors.white,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {showOptionIcons && (
                          <img
                            src={hotSauceIcon || "/placeholder.svg"}
                            alt="Option icon"
                            className="w-14 h-14 object-contain"
                          />
                        )}
                        <div className="flex flex-col">
                          <span
                            className="text-[26px] font-bold"
                            style={theme.getStyle("black")}
                          >
                            {t("customization.option")}
                          </span>
                          {showOptionDetails.subsection3 && (
                            <span
                              className="text-[16px] font-normal"
                              style={{ color: "#6B7280" }}
                            >
                              {subsectionOptionDetails.subsection3[i - 1] || ""}
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          setSubsection3Checkboxes((prev) => ({
                            ...prev,
                            [checkboxId]: !prev[checkboxId],
                          }))
                        }
                        className="w-9 h-9 rounded flex items-center justify-center border"
                        style={{
                          backgroundColor: isChecked
                            ? theme.colors.red
                            : theme.colors.white,
                          borderColor: isChecked
                            ? theme.colors.red
                            : theme.colors.greyDark,
                        }}
                        aria-checked={isChecked}
                      >
                        {isChecked && (
                          <Check
                            className="w-4 h-4"
                            style={{ color: theme.colors.white }}
                          />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Fourth Subsection - Non-expandable with quantity controls in header */}
          <div
            className="rounded-xl border bg-white"
            style={{
              borderColor: theme.colors.greyDarker,
            }}
          >
            <div className="w-full flex items-center justify-between p-5">
              <h3
                className="text-4xl font-bold"
                style={theme.getStyle("black")}
              >
                {t("customization.subsection").toLowerCase()}
              </h3>
              <div className="flex items-center gap-4">
                <div
                  className="px-6 py-2 rounded flex flex-col items-start"
                  style={{
                    backgroundColor: "#FEF3C7",
                  }}
                >
                  <span
                    className="text-[20px] font-normal leading-tight"
                    style={{ color: theme.colors.black }}
                  >
                    +$10-150cal
                  </span>
                </div>
                {/* </CHANGE> */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setSubsection4Quantity(
                        Math.max(0, subsection4Quantity - 1)
                      )
                    }
                    className="w-14 h-14 rounded-full flex items-center justify-center border-2 bg-white"
                    style={{
                      borderColor:
                        subsection4Quantity > 0
                          ? theme.colors.black
                          : theme.colors.greyDark,
                    }}
                  >
                    <span
                      className="text-[24px] font-normal"
                      style={{ color: "#9CA3AF" }}
                    >
                      -
                    </span>
                  </button>
                  <span
                    className="text-[28px] font-bold w-10 text-center"
                    style={{ color: "#6B7280" }}
                  >
                    {subsection4Quantity}
                  </span>
                  <button
                    onClick={() =>
                      setSubsection4Quantity(subsection4Quantity + 1)
                    }
                    className="w-14 h-14 rounded-full flex items-center justify-center border-2 bg-white"
                    style={{
                      borderColor: "#374151",
                    }}
                  >
                    <span
                      className="text-[24px] font-bold"
                      style={{ color: "#374151" }}
                    >
                      +
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Fifth Subsection - Level selector */}
          <div
            className="rounded-xl border bg-white"
            style={{
              borderColor: theme.colors.greyDarker,
            }}
          >
            <div className="w-full flex items-center justify-between p-5">
              <h3
                className="text-4xl font-bold"
                style={theme.getStyle("black")}
              >
                {t("customization.subsection").toLowerCase()}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setSubsection5Level((prev) => Math.max(0, prev - 1))
                  }
                  className="w-14 h-14 rounded-full flex items-center justify-center border-2 bg-white"
                  style={{
                    borderColor:
                      subsection5Level > 0
                        ? theme.colors.black
                        : theme.colors.greyDark,
                  }}
                >
                  <span
                    className="text-[24px] font-normal"
                    style={{ color: "#9CA3AF" }}
                  >
                    -
                  </span>
                </button>
                <span
                  className="text-[28px] font-bold w-[110px] text-center"
                  style={{ color: "#6B7280" }}
                >
                  {subsection5Levels[subsection5Level]}
                </span>
                <button
                  onClick={() =>
                    setSubsection5Level((prev) =>
                      Math.min(subsection5Levels.length - 1, prev + 1)
                    )
                  }
                  className="w-14 h-14 rounded-full flex items-center justify-center border-2 bg-white"
                  style={{
                    borderColor: "#374151",
                  }}
                >
                  <span
                    className="text-[24px] font-bold"
                    style={{ color: "#374151" }}
                  >
                    +
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl border bg-white"
            style={{
              borderColor: theme.colors.greyDarker,
            }}
          >
            <button
              onClick={() => setIsSubsection6Open(!isSubsection6Open)}
              className="w-full flex items-center justify-between p-5"
            >
              <div className="flex items-center gap-4 flex-1">
                {showSubsection3Icon && (
                  <img
                    src={saucesIcon || "/placeholder.svg"}
                    alt="Sauces icon"
                    className="w-12 h-12 object-contain"
                  />
                )}
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-4xl font-bold"
                    style={theme.getStyle("black")}
                  >
                    Subsection
                  </h3>
                  <span className="text-[18px] text-gray-500  mr-40">
                    Choose up to 5
                  </span>
                </div>
                <span
                  className="px-4 py-1.5 w-[105px] h-[55px] rounded text-[25px] font-normal ml-auto mr-8 flex items-center justify-center"
                  style={{
                    backgroundColor: "#FEF3C7",
                    color: theme.colors.black,
                  }}
                >
                  {checkedToppingsCount}/5
                </span>
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F3F4F6" }}
              >
                {isSubsection6Open ? (
                  <ChevronUp
                    className="w-6 h-6"
                    style={theme.getStyle("greyDarker")}
                  />
                ) : (
                  <ChevronDown
                    className="w-6 h-6"
                    style={theme.getStyle("greyDarker")}
                  />
                )}
              </div>
            </button>

            {isSubsection6Open && (
              <div className="px-8 pb-5 space-y-2">
                {[1, 2, 3, 4].map((i) => {
                  const toppingId = `topping-${i}`;
                  const isChecked = subsection6Checkboxes[toppingId] || false;
                  const isDisabled = !isChecked && checkedToppingsCount >= 5;

                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between py-4 px-6 rounded-lg"
                      style={{
                        backgroundColor: isChecked
                          ? "#F3F4F6"
                          : theme.colors.white,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {showOptionIcons && (
                          <img
                            src={hotSauceIcon || "/placeholder.svg"}
                            alt="Option icon"
                            className="w-14 h-14 object-contain"
                          />
                        )}
                        <div className="flex flex-col">
                          <span
                            className="text-[26px] font-bold"
                            style={theme.getStyle("black")}
                          >
                            {toppingNames[i - 1]}
                          </span>
                          {showOptionDetails.subsection6 && (
                            <span
                              className="text-[16px] font-normal"
                              style={{ color: "#6B7280" }}
                            >
                              {subsectionOptionDetails.subsection6[i - 1] || ""}
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          !isDisabled &&
                          setSubsection6Checkboxes((prev) => ({
                            ...prev,
                            [toppingId]: !prev[toppingId],
                          }))
                        }
                        disabled={isDisabled}
                        className="w-9 h-9 rounded flex items-center justify-center border"
                        style={{
                          backgroundColor: isChecked
                            ? theme.colors.red
                            : theme.colors.white,
                          borderColor: isChecked
                            ? theme.colors.red
                            : theme.colors.greyDark,
                          opacity: isDisabled ? 0.5 : 1,
                          cursor: isDisabled ? "not-allowed" : "pointer",
                        }}
                        aria-checked={isChecked}
                        aria-disabled={isDisabled}
                      >
                        {isChecked && (
                          <Check
                            className="w-4 h-4"
                            style={{ color: theme.colors.white }}
                          />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {showFrequentlyBought && (
        <div>
          <style>{noScrollbarStyles}</style>
          <div className="mb-6">
            <h3
              className="text-[40px] font-extrabold mb-5"
              style={theme.getStyle("black")}
            >
              {t("customization.frequentlyBought")}
            </h3>
            <div className="flex gap-5">
              {frequentlyBought.map((item) => (
                <div
                  key={item.id}
                  className="flex-1 p-5 rounded-lg border bg-zinc-50 relative"
                  style={{
                    borderColor: theme.colors.white,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4
                        className="text-[25px] font-bold mb-2 leading-tight"
                        style={theme.getStyle("black")}
                      >
                        {item.name}
                      </h4>
                      <p
                        className="text-[18px] font-normal mb-3"
                        style={theme.getStyle("black")}
                      >
                        ${item.price.replace("$", "")} - {item.calories}
                      </p>
                      <span
                        className="inline-block px-5 py-1.5 rounded-xl text-[16px] font-semibold"
                        style={{
                          ...theme.getStyle("secondaryBg"),
                          ...theme.getStyle("black"),
                        }}
                      >
                        {t("customization.popular")}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <button
                        onClick={() => console.log("Navigate to popup page for:", item)}
                        className="hover:opacity-70 transition-opacity"
                      >
                        <Plus className="w-6 h-6" />
                      </button>
                      <div />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="w-[40%] h-[70px] text-[24px] font-bold rounded-xl border bg-white"
              style={{
                borderColor: theme.colors.greyDarker,
                color: theme.colors.greyDarker,
              }}
              onClick={onClose}
            >
              {t("common.cancel")}
            </Button>
            <Button
              className="w-[60%] h-[70px] text-[24px] font-bold rounded-xl flex items-center justify-center gap-3"
              style={{
                ...theme.getStyle("secondaryBg"),
                ...theme.getStyle("black"),
              }}
            >
              <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                <Plus className="w-4 h-4" />
              </div>
              {t("customization.addToCart")}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CustomizationPage() {
  return (
    <HeaderLayout>
      <CustomizationInterface
        option={sampleOption}
        onClose={() => console.log("Customization closed")}
      />
    </HeaderLayout>
  );
}
