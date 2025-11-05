"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
// @ts-ignore
import HeaderLayout from "@/layouts/layout-parts/header-layout.tsx";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// @ts-ignore
import { useTheme } from "@/app/hooks/useTheme";
import coffeeDrinkImage from "@/assets/images/coffee_drink-image.svg";
import cupSizeImage from "@/assets/images/cup-size_image.svg";
import ellipsePopupImage from "@/assets/images/Ellipse-popup-image.svg";
import { ChevronDown, ChevronUp, Plus, Check, X } from "lucide-react";
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

function ProductModal({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: { name: string; price: string; calories: string; image?: string };
}) {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<
    "S" | "M" | "L" | "XL" | null
  >(null);
  const [isSauceOpen, setIsSauceOpen] = useState(false);
  const [isFlavorOpen, setIsFlavorOpen] = useState(false);
  const [selectedSauce, setSelectedSauce] = useState<string | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);

  const popupSizes = [
    { id: "S" as const, label: "S", price: "+$4.50", calories: "200cal" },
    { id: "M" as const, label: "M", price: "+$9.00", calories: "300cal" },
    { id: "L" as const, label: "L", price: "+$12.00", calories: "400cal" },
    { id: "XL" as const, label: "XL", price: "+$20.00", calories: "500cal" },
  ];

  const sauceOptions = [
    { id: "sauce-1", label: "Ketchup", available: true },
    { id: "sauce-2", label: "Mayo", available: true },
    { id: "sauce-3", label: "BBQ", available: false },
    { id: "sauce-4", label: "Mustard", available: true },
  ];

  const flavorOptions = [
    { id: "flavor-1", label: "Original", available: true },
    { id: "flavor-2", label: "Spicy", available: true },
    { id: "flavor-3", label: "Sweet", available: true },
    { id: "flavor-4", label: "Savory", available: false },
  ];

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        className="max-w-[870px] h-[1250px] overflow-hidden p-12 rounded-3xl flex flex-col"
        style={{ backgroundColor: theme.colors.white }}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 h-12 w-12 flex items-center justify-center rounded-lg hover:opacity-80 mt-6 mr-6"
          style={{ backgroundColor: theme.colors.greywhite }}
        >
          <X className="h-24 w-24" style={theme.getStyle("black")} />
        </button>
        <div className="mb-8">
          <h2
            className="text-[47px] font-bold leading-tight"
            style={theme.getStyle("black")}
          >
            {product.name}
          </h2>
          <p
            className="text-[27px] font-medium mt-2"
            style={{ color: theme.colors.greyDarker }}
          >
            {product.price} - {product.calories}
          </p>
        </div>

        {/* Product Image with Yellow Oval Background */}
        <div className="flex justify-center mt-2">
          <div className="relative flex items-center justify-center">
            <img
              src={ellipsePopupImage || "/placeholder.svg"}
              alt="Ellipse background"
              className="w-[504px] h-[110px] object-contain"
            />
            <img
              src={product.image || "/placeholder.svg?height=200&width=300"}
              alt={product.name}
              className="absolute object-contain"
              style={{ width: "60%", maxHeight: "254px", top: "-59px" }}
            />
          </div>
        </div>

        <p
          className="text-[22px] font-normal mt-6 mb-6"
          style={{ color: theme.colors.black }}
        >
          Calorie needs vary by age and activity: 1,000–1,800 kcal for children,
          1,800–2,800 for teens, and 1,600–3,000 for adults, depending on gender
          and lifestyle.
        </p>

        {/* Size Section - Fixed (not scrollable) */}
        <div className="mb-8">
          <div className="flex items-start gap-6">
            <h3
              className="text-4xl font-bold leading-none pt-1"
              style={theme.getStyle("black")}
            >
              Size
            </h3>
            <div className="flex flex-wrap gap-2 ml-32">
              {popupSizes.map((size) => {
                const isSelected = selectedSize === size.id;
                return (
                  <button
                    key={size.id}
                    onClick={() =>
                      setSelectedSize((current) =>
                        current === size.id ? null : size.id
                      )
                    }
                    className="flex flex-col items-center justify-center py-2 px-8 rounded-xl transition-all border-2 bg-white"
                    style={{
                      backgroundColor: isSelected
                        ? theme.colors.secondary
                        : theme.colors.white,
                      borderColor: isSelected
                        ? theme.colors.secondary
                        : theme.colors.greyDark,
                    }}
                  >
                    <span
                      className="text-[32px] font-extrabold mb-1"
                      style={{ color: theme.colors.black }}
                    >
                      {size.label}
                    </span>
                    <div
                      className="text-[18px] font-medium"
                      style={{ color: theme.colors.black }}
                    >
                      {size.price}
                    </div>
                    <div
                      className="text-[14px]"
                      style={{ color: theme.colors.greyDarker }}
                    >
                      {size.calories}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scrollable content area - Only Sauce and Flavor subsections */}
        <div
          className="flex-1 overflow-y-auto pr-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ minHeight: 0 }}
        >
          <div
            className="rounded-xl border bg-white mb-5"
            style={{ borderColor: theme.colors.greyDarker }}
          >
            <button
              onClick={() => setIsSauceOpen(!isSauceOpen)}
              className="w-full flex items-center justify-between p-4"
            >
              <div className="flex items-center gap-4 flex-1">
                <h3
                  className="text-3xl font-bold"
                  style={theme.getStyle("black")}
                >
                  Sauce
                </h3>
                <span
                  className="px-4 py-1.5 w-[175px] h-[50px] rounded text-[24px] font-normal ml-auto mr-8"
                  style={{
                    backgroundColor: "#FEF3C7",
                    color: theme.colors.black,
                  }}
                >
                  Default
                </span>
              </div>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F3F4F6" }}
              >
                {isSauceOpen ? (
                  <ChevronUp
                    className="w-9 h-9"
                    style={theme.getStyle("greyDarker")}
                  />
                ) : (
                  <ChevronDown
                    className="w-9 h-9"
                    style={theme.getStyle("greyDarker")}
                  />
                )}
              </div>
            </button>
            {isSauceOpen && (
              <div className="px-4 pb-4 space-y-2">
                {sauceOptions.map((option) => {
                  const isSelected = selectedSauce === option.id;
                  const isUnavailable = !option.available;

                  return (
                    <div
                      key={option.id}
                      className="flex items-center justify-between py-4 px-7 rounded-xl"
                      style={{
                        backgroundColor: isSelected
                          ? "#F3F4F6"
                          : theme.colors.white,
                      }}
                    >
                      <span
                        className="text-[31px] font-medium"
                        style={{
                          color: isUnavailable ? "#D1D5DB" : theme.colors.black,
                        }}
                      >
                        {option.label}
                      </span>
                      <div className="flex items-center gap-8">
                        {isUnavailable && (
                          <span
                            className="text-[26px] font-medium"
                            style={{ color: theme.colors.red }}
                          >
                            Unavailable
                          </span>
                        )}
                        <button
                          onClick={() =>
                            !isUnavailable && setSelectedSauce(option.id)
                          }
                          disabled={isUnavailable}
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: isUnavailable
                              ? "#D1D5DB"
                              : isSelected
                                ? theme.colors.secondary
                                : "transparent",
                            border:
                              isUnavailable || isSelected
                                ? "none"
                                : `4px solid ${theme.colors.greyDark}`,
                            cursor: isUnavailable ? "not-allowed" : "pointer",
                          }}
                        >
                          {isSelected && !isUnavailable && (
                            <div
                              className="w-6 h-6 rounded-full"
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

          <div
            className="rounded-xl border bg-white mb-8"
            style={{ borderColor: theme.colors.greyDarker }}
          >
            <button
              onClick={() => setIsFlavorOpen(!isFlavorOpen)}
              className="w-full flex items-center justify-between p-4"
            >
              <h3
                className="text-3xl font-bold"
                style={theme.getStyle("black")}
              >
                Flavor
              </h3>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F3F4F6" }}
              >
                {isFlavorOpen ? (
                  <ChevronUp
                    className="w-9 h-9"
                    style={theme.getStyle("greyDarker")}
                  />
                ) : (
                  <ChevronDown
                    className="w-9 h-9"
                    style={theme.getStyle("greyDarker")}
                  />
                )}
              </div>
            </button>
            {isFlavorOpen && (
              <div className="px-4 pb-4 space-y-2">
                {flavorOptions.map((option) => {
                  const isSelected = selectedFlavor === option.id;
                  const isUnavailable = !option.available;

                  return (
                    <div
                      key={option.id}
                      className="flex items-center justify-between py-4 px-7 rounded-xl"
                      style={{
                        backgroundColor: isSelected
                          ? "#F3F4F6"
                          : theme.colors.white,
                      }}
                    >
                      <span
                        className="text-[31px] font-medium"
                        style={{
                          color: isUnavailable ? "#D1D5DB" : theme.colors.black,
                        }}
                      >
                        {option.label}
                      </span>
                      <div className="flex items-center gap-8">
                        {isUnavailable && (
                          <span
                            className="text-[26px] font-medium"
                            style={{ color: theme.colors.red }}
                          >
                            Unavailable
                          </span>
                        )}
                        <button
                          onClick={() =>
                            !isUnavailable && setSelectedFlavor(option.id)
                          }
                          disabled={isUnavailable}
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: isUnavailable
                              ? "#D1D5DB"
                              : isSelected
                                ? theme.colors.secondary
                                : "transparent",
                            border:
                              isUnavailable || isSelected
                                ? "none"
                                : `4px solid ${theme.colors.greyDark}`,
                            cursor: isUnavailable ? "not-allowed" : "pointer",
                          }}
                        >
                          {isSelected && !isUnavailable && (
                            <div
                              className="w-6 h-6 rounded-full"
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
        </div>

        {/* Fixed bottom section - outside scrollable area */}
        <div className="mt-8">
          <div className="flex items-center justify-center gap-0 mb-8">
            <button
              type="button"
              className="w-[172px] h-[75px] rounded-l-xl border-2 flex items-center justify-center bg-white"
              style={{ borderColor: theme.colors.greyDark }}
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <span
                className="text-[47px] font-normal"
                style={theme.getStyle("black")}
              >
                -
              </span>
            </button>
            <div
              className="w-[315px] h-[75px] border-t-2 border-b-2 flex items-center justify-center bg-white"
              style={{ borderColor: theme.colors.greyDark }}
            >
              <span
                className="text-[39px] font-medium"
                style={theme.getStyle("black")}
              >
                {quantity}
              </span>
            </div>
            <button
              type="button"
              className="w-[172px] h-[75px] rounded-r-xl flex items-center justify-center"
              style={{ backgroundColor: theme.colors.secondary }}
              onClick={() => setQuantity(quantity + 1)}
            >
              <span
                className="text-[47px] font-bold"
                style={theme.getStyle("black")}
              >
                +
              </span>
            </button>
          </div>

          <div className="flex justify-center">
            <Button
              className="h-[70px] w-[480px] text-[34px] font-semibold rounded-2xl"
              style={{
                backgroundColor: theme.colors.secondary,
                color: theme.colors.black,
              }}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CustomizationInterface({
  option,
  onClose,
}: {
  option: Option;
  onClose: () => void;
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
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    price: string;
    calories: string;
  } | null>(null);
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
      className="w-full h-full flex flex-col"
      style={theme.getStyle("fontSerious")}
    >
      <div className="flex-1">
        <div className="flex items-start justify-end mb-4">
          <div className="flex items-center mr-24 shrink-0">
            <img
              src={option.image || "/placeholder.svg"}
              alt={option.name}
              className="w-[260px] h-[260px] object-contain shrink-0"
            />
            <div className="flex flex-col shrink-0">
              <h2
                className="text-[55px] font-bold leading-tight"
                style={{
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontBranded"),
                }}
              >
                {option.name}
              </h2>
              <p className="text-[26px]" style={theme.getStyle("greyDarker")}>
                {option.price} /{option.calories} cal
              </p>

              <div
                className="flex items-stretch overflow-hidden border rounded-xl w-[250px] h-[50px] mt-16"
                style={{ borderColor: theme.colors.greyDarker }}
              >
                <button
                  type="button"
                  className="flex-1 bg-white flex items-center justify-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <span
                    className="text-[22px] font-normal"
                    style={theme.getStyle("black")}
                  >
                    -
                  </span>
                </button>
                <div
                  className="w-[80px] flex items-center justify-center border-l border-r bg-white"
                  style={{ borderColor: theme.colors.greyDarker }}
                >
                  <span
                    className="text-[18px] font-medium"
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
                    className="text-[22px] font-bold"
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
            className="h-[48px] px-6 text-[20px] font-semibold rounded-lg border bg-transparent mt-48 flex items-center gap-3"
            style={{
              ...theme.getStyle("whiteBg"),
              borderColor: theme.colors.greyDarker,
              ...theme.getStyle("greyDarker"),
            }}
          >
            {t("customization.restart")}
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ backgroundColor: theme.colors.white }}
            >
              <img
                src={restartIcon || "/placeholder.svg"}
                alt="Restart icon"
                className="w-6 h-6 ml-8"
              />
            </span>
          </Button>
        </div>

        <div className="flex gap-3 mb-8">
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
                className="h-[130px] w-full rounded-lg text-left transition-all border-2"
                style={{
                  backgroundColor: "white",
                  borderColor: isSelected
                    ? theme.colors.primary
                    : theme.colors.greyDarker,
                }}
              >
                <div
                  className="text-[26px] font-extrabold mb-2 ml-4 mt-2"
                  style={theme.getStyle("red")}
                >
                  {tab.label}
                </div>
                <div
                  className="text-[18px] font-semibold ml-4"
                  style={{ color: theme.colors.black }}
                >
                  {tab.subtitle}
                </div>
                <div
                  className="text-[16px] ml-4 mb-2"
                  style={{ color: theme.colors.greyDarker }}
                >
                  {tab.detail}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-50 mb-5">
            <h3
              className="text-4xl font-bold mb-20"
              style={theme.getStyle("black")}
            >
              {t("customization.size")}
            </h3>
            <div className="flex gap-4">
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
                    className="w-[155px] h-[135px] rounded-lg flex flex-col items-center justify-center gap-1 transition-all border-2 bg-white"
                    style={{
                      backgroundColor: isSelected
                        ? theme.colors.secondary
                        : theme.colors.white,
                      borderColor: isSelected
                        ? theme.colors.secondary
                        : theme.colors.greyDarker,
                    }}
                  >
                    <div className="flex flex-col items-center mb-10 mr-4">
                      <div className="relative -mb-10">
                        <CoffeeCupIcon size={size.id} />
                        <span
                          className="absolute top-1/2 left-1/2 transform text-[30px] font-extrabold"
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
                        className="text-[16px] font-light leading-tight ml-2"
                        style={{ color: theme.colors.black }}
                      >
                        {size.price}
                      </div>
                      <div
                        className="text-[12px] font-medium leading-tight ml-2"
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
          <div className="mb-8">
            <div className="flex items-center justify-between mb-5">
              <h3
                className="text-4xl font-bold mb-20"
                style={theme.getStyle("black")}
              >
                {t("customization.subsection")}
              </h3>
              <div className="flex gap-4">
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
                      className="w-[145px] h-[125px] rounded-lg flex items-center justify-center transition-all border-2"
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
                      <span className="text-[24px] font-semibold">
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className="space-y-5 mb-8 max-h-145 overflow-y-auto no-scrollbar">
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
                      onClick={() => setSelectedProduct(item)}
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

      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
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
