"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
// @ts-ignore
import StepsMenuLayout from "@/layouts/steps-menu-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// @ts-ignore
import { useTheme } from "@/hooks/useTheme";
import doubleBurgerImage from "@/assets/images/double-burger-image.svg";
import tripleBurgerImage from "@/assets/images/triple-burger-image.svg";
import forYouBurgerImage from "@/assets/images/foryou-burger-image.svg";
import friesImage from "@/assets/images/fries-image.svg";
import poutineImage from "@/assets/images/poutine-image.svg";
import saladImage from "@/assets/images/salad-image.svg";
import cokeImage from "@/assets/images/coke-image.svg";
import spriteImage from "@/assets/images/sprite-image.svg";
import coffeeImage from "@/assets/images/coffee_drink-image.svg";
import trioBurgerImage from "@/assets/images/trio-image.svg";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import modifyIcon from "@/assets/icons/modify-icon.svg";
import changeProductIcon from "@/assets/icons/change-product-icon.svg";

interface Option {
  id: string;
  name: string;
  calories: number;
  price: string;
  image: string;
}

interface TrioSelectionPageProps {
  currentStep?: number;
  onNext?: () => void;
  onBack?: () => void;
}

const burgerOptions: Option[] = [
  {
    id: "simple",
    name: "trioSelection.simple",
    calories: 1500,
    price: "",
    image: forYouBurgerImage,
  },
  {
    id: "double",
    name: "trioSelection.double",
    calories: 1600,
    price: "+0.5$",
    image: doubleBurgerImage,
  },
  {
    id: "tripler",
    name: "trioSelection.tripler",
    calories: 1800,
    price: "+0.5$",
    image: tripleBurgerImage,
  },
];

const sideOptions: Option[] = [
  {
    id: "fries",
    name: "trioSelection.fries",
    calories: 1100,
    price: "",
    image: friesImage,
  },
  {
    id: "poutine",
    name: "trioSelection.poutine",
    calories: 1600,
    price: "+0.5$",
    image: poutineImage,
  },
  {
    id: "salad",
    name: "trioSelection.salad",
    calories: 1100,
    price: "+0.5$",
    image: saladImage,
  },
];

const drinkOptions: Option[] = [
  {
    id: "coke",
    name: "trioSelection.coke",
    calories: 200,
    price: "",
    image: cokeImage,
  },
  {
    id: "sprite",
    name: "trioSelection.sprite",
    calories: 200,
    price: "+2$",
    image: spriteImage,
  },
  {
    id: "coffee",
    name: "trioSelection.coffee",
    calories: 50,
    price: "+2$",
    image: coffeeImage,
  },
];

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
    "popular" | "previous" | "recommendation"
  >("popular");
  const [selectedSize, setSelectedSize] = useState<"S" | "M" | "L" | "XL">("M");

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
    {
      id: "S" as const,
      label: t("trioSelection.sizeS"),
      price: "+$4.50",
      calories: "300cal",
    },
    {
      id: "M" as const,
      label: t("trioSelection.sizeM"),
      price: "+$5.00",
      calories: "300cal",
    },
    {
      id: "L" as const,
      label: t("trioSelection.sizeL"),
      price: "+$12.00",
      calories: "400cal",
    },
    { id: "XL" as const, label: "XL", price: "+$20.00", calories: "500cal" },
  ];

  return (
    <div
      className="w-[740px] flex flex-col gap-6"
      style={theme.getStyle("fontSerious")}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={option.image || "/placeholder.svg"}
            alt={option.name}
            className="w-[150px] h-[150px] object-contain"
          />
          <div>
            <h2
              className="text-5xl font-bold leading-tight "
              style={{
                ...theme.getStyle("black"),
                ...theme.getStyle("fontBranded"),
              }}
            >
              {t(option.name)}
            </h2>
            <p
              className="text-[20px] font-semibold"
              style={theme.getStyle("greyDarker")}
            >
              {option.price} /{option.calories} cal
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          className="h-[48px] px-12 text-[20px] font-semibold rounded-lg border bg-transparent mt-24"
          style={{
            ...theme.getStyle("whiteBg"),
            borderColor: theme.colors.greyDarker,
            ...theme.getStyle("greyDarker"),
          }}
        >
          {t("customization.restart")}
        </Button>
      </div>

      <div className="flex gap-2">
        {tabs.map((tab) => {
          const isSelected = selectedTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className="flex-1 h-[100px] p-3 rounded-lg text-left transition-all border-2"
              style={{
                ...theme.getStyle("whiteBg"),
                borderColor: isSelected
                  ? theme.colors.primary
                  : theme.colors.greyDark,
                color: theme.colors.black,
              }}
            >
              <div
                className="text-[20px] font-bold mb-1"
                style={{ color: theme.colors.primary }}
              >
                {tab.label}
              </div>
              <div
                className="text-[16px] font-semibold mb-0.5"
                style={{ color: theme.colors.black }}
              >
                {tab.subtitle}
              </div>
              <div
                className="text-[13px] font-normal"
                style={{ color: theme.colors.greyDarker }}
              >
                {tab.detail}
              </div>
            </button>
          );
        })}
      </div>

      <div>
        <div className="flex items-start gap-6 mt-6">
          <h3
            className="text-[30px] font-bold pt-2"
            style={theme.getStyle("black")}
          >
            {t("customization.size")}
          </h3>
          <div className="flex gap-3 flex-nowrap overflow-x-auto ml-24">
            {sizes.map((size) => {
              const isSelected = selectedSize === size.id;
              return (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className="w-[130px] h-[100px] rounded-lg flex flex-col items-center justify-center transition-all border-2"
                  style={{
                    ...theme.getStyle("whiteBg"),
                    borderColor: isSelected
                      ? theme.colors.primary
                      : theme.colors.greyDark,
                  }}
                >
                  <div
                    className="text-[30px] font-bold mb-0.5"
                    style={{ color: theme.colors.primary }}
                  >
                    {size.label}
                  </div>
                  <div
                    className="text-[14px] font-semibold"
                    style={{ color: theme.colors.black }}
                  >
                    {size.price}
                  </div>
                  <div
                    className="text-[13px] font-normal"
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

      <div className="space-y-3 mt-6">
        <Collapsible>
          <CollapsibleTrigger
            className="w-full h-[100px] flex items-center justify-between py-4 px-5 rounded-xl transition-all border"
            style={{
              ...theme.getStyle("whiteBg"),
              borderColor: theme.colors.greyDark,
            }}
          >
            <div>
              <div
                className="text-[28px] font-bold mb-1"
                style={theme.getStyle("black")}
              >
                Main toppings
              </div>
              <div
                className="text-[16px] font-semibold"
                style={theme.getStyle("greyDarker")}
              >
                Choose up to 5
              </div>
            </div>
            <ChevronDown
              className="h-10 w-10"
              style={theme.getStyle("greyDarker")}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-5 pt-2">
            <p style={theme.getStyle("greyDarker")}>Toppings options here...</p>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger
            className="w-full h-[100px] flex items-center justify-between py-4 px-5 rounded-xl transition-all border"
            style={{
              ...theme.getStyle("whiteBg"),
              borderColor: theme.colors.greyDark,
            }}
          >
            <div
              className="text-[28px] font-bold"
              style={theme.getStyle("black")}
            >
              Sauce
            </div>
            <ChevronDown
              className="h-10 w-10"
              style={theme.getStyle("greyDarker")}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-5 pt-2">
            <p style={theme.getStyle("greyDarker")}>Sauce options here...</p>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger
            className="w-full h-[100px] flex items-center justify-between py-4 px-5 rounded-xl transition-all border"
            style={{
              ...theme.getStyle("whiteBg"),
              borderColor: theme.colors.greyDark,
            }}
          >
            <div
              className="text-[28px] font-bold "
              style={theme.getStyle("black")}
            >
              subsection
            </div>
            <ChevronDown
              className="h-10 w-10"
              style={theme.getStyle("greyDarker")}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-5 pt-2">
            <p style={theme.getStyle("greyDarker")}>
              Subsection options here...
            </p>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger
            className="w-full h-[100px] flex items-center justify-between py-4 px-5 rounded-xl transition-all border"
            style={{
              ...theme.getStyle("whiteBg"),
              borderColor: theme.colors.greyDark,
            }}
          >
            <div
              className="text-[28px] font-bold"
              style={theme.getStyle("black")}
            >
              subsection
            </div>
            <ChevronDown
              className="h-10 w-10"
              style={theme.getStyle("greyDarker")}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-5 pt-2">
            <p style={theme.getStyle("greyDarker")}>
              Subsection options here...
            </p>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger
            className="w-full h-[100px] flex items-center justify-between py-4 px-5 rounded-xl transition-all border"
            style={{
              ...theme.getStyle("whiteBg"),
              borderColor: theme.colors.greyDark,
            }}
          >
            <div
              className="text-[28px] font-bold"
              style={theme.getStyle("black")}
            >
              Make it more interesting
            </div>
            <ChevronDown
              className="h-10 w-10"
              style={theme.getStyle("greyDarker")}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-5 pt-2">
            <p style={theme.getStyle("greyDarker")}>
              Additional options here...
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="flex justify-end mt-2">
        <Button
          className="w-[220px] h-[60px] text-[24px] font-semibold rounded-lg"
          style={{
            ...theme.getStyle("secondaryBg"),
            ...theme.getStyle("black"),
          }}
          onClick={onClose}
        >
          {t("common.confirm")}
        </Button>
      </div>
    </div>
  );
}

function ReviewOrderInterface({
  selectedBurger,
  selectedSide,
  selectedDrink,
  onBack,
  onAddToOrder,
}: {
  selectedBurger: string | null;
  selectedSide: string | null;
  selectedDrink: string | null;
  onBack: () => void;
  onAddToOrder: () => void;
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);

  // Get selected options data
  const burgerOption = burgerOptions.find((b) => b.id === selectedBurger);
  const sideOption = sideOptions.find((s) => s.id === selectedSide);
  const drinkOption = drinkOptions.find((d) => d.id === selectedDrink);

  const trioProducts = [
    {
      id: "burger",
      name: "Prod1",
      price: "+5$",
      image: burgerOption?.image || forYouBurgerImage,
      tags: [
        { label: "Double patty", isPaid: false },
        { label: "Medium", isPaid: false },
        { label: "Medium", isPaid: false },
        { label: "Extra cheese +2$", isPaid: true },
      ],
    },
    {
      id: "side",
      name: "Prod1",
      price: "+5$",
      image: sideOption?.image || friesImage,
      tags: [
        { label: "Double patty", isPaid: false },
        { label: "Medium", isPaid: false },
        { label: "Medium", isPaid: false },
        { label: "Extra cheese", isPaid: false },
      ],
    },
    {
      id: "drink",
      name: "Prod1",
      price: "+5$",
      image: drinkOption?.image || cokeImage,
      tags: [
        { label: "Double patty", isPaid: false },
        { label: "Medium", isPaid: false },
        { label: "Medium", isPaid: false },
        { label: "Extra cheese", isPaid: false },
      ],
    },
  ];

  return (
    <div className="relative flex flex-col" style={theme.getStyle("fontSerious")}>
      <p
        className="absolute -top-6 left-0 text-[22px] font-medium mb-2"
        style={{
          ...theme.getStyle("greyDarker"),
        }}
      >
        20$ - 1500 cal
      </p>
      <h2
        className="text-[36px] font-bold mb-6"
        style={{
          ...theme.getStyle("black"),
          ...theme.getStyle("fontBranded"),
        }}
      >
        Review your Order
      </h2>

      <div className="flex justify-center mb-6">
        <div className="relative w-[250px] h-[250px]">
          <img
            src={trioBurgerImage || "/placeholder.svg"}
            alt="Big Mac Trio"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 w-[750px] mb-12 justify-items-center">
        {trioProducts.map((product, index) => (
          <Card
            key={product.id}
            className={`relative rounded-xl p-5 flex flex-col ${index === 2 ? "col-span-2 justify-self-center" : ""}`}
            style={{
              ...theme.getStyle("whiteBg"),
              border: `1px solid ${theme.colors.greyDarker}`,
              width: "360px",
              height: "360px",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div className="absolute top-3 right-3 flex flex-col gap-4 z-10 mt-6 mr-4">
              <button
                className="w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all"
                style={{
                  ...theme.getStyle("whiteBg"),
                  border: `1px solid ${theme.colors.greyDark}`,
                }}
              >
                <img
                  src={changeProductIcon}
                  alt="Change Product"
                  className="w-[28px] h-[28px]"
                />
              </button>
              <button
                className="w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all"
                style={{
                  ...theme.getStyle("whiteBg"),
                  border: `1px solid ${theme.colors.greyDark}`,
                }}
              >
                <img
                  src={modifyIcon}
                  alt="Modify"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>

            <div className="flex justify-center items-center flex-1 mb-4">
              <div className="w-[140px] h-[140px]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mb-3">
              <h3
                className="text-[25px] font-bold mb-1"
                style={{
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontBranded"),
                }}
              >
                {product.name}
              </h3>
              <p
                className="text-[18px] font-bold"
                style={{ color: theme.colors.greyDarker }}
              >
                {product.price}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 flex-1 items-start">
              {product.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-[12px] font-medium px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "#FEF3C7",
                    color: "#000000",
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mb-12">
        <div
          className="flex items-center rounded-xl overflow-hidden"
          style={{
            border: `1px solid ${theme.colors.greyDarker}`,
            height: "70px",
            width: "550px",
          }}
        >
          <button
            className="flex-[0.7] h-full flex items-center justify-center transition-all"
            style={{
              ...theme.getStyle("whiteBg"),
              borderRight: `2px solid ${theme.colors.greyDarker}`,
            }}
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <span
              className="text-[30px] font-semibold"
              style={theme.getStyle("black")}
            >
              −
            </span>
          </button>
          <div
            className="flex-[1.5] h-full flex items-center justify-center"
            style={{
              ...theme.getStyle("whiteBg"),
              borderRight: `2px solid ${theme.colors.greyDarker}`,
            }}
          >
            <span
              className="text-[30px] font-medium"
              style={theme.getStyle("black")}
            >
              {quantity}
            </span>
          </div>
          <button
            className="flex-[0.7] h-full flex items-center justify-center transition-all"
            style={{
              backgroundColor: theme.colors.secondary,
            }}
            onClick={() => setQuantity(quantity + 1)}
          >
            <span
              className="text-[30px] font-semibold"
              style={theme.getStyle("black")}
            >
              +
            </span>
          </button>
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        <Button
          className="h-[72px] text-[20px] font-semibold rounded-xl"
          style={{
            ...theme.getStyle("secondaryBg"),
            ...theme.getStyle("black"),
            width: "420px",
          }}
          onClick={onAddToOrder}
        >
          Add to order
        </Button>
      </div>
    </div>
  );
}

function TrioSelectionContent({
  currentStep = 1,
  onNext,
  onBack,
}: TrioSelectionPageProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  const [selectedBurger, setSelectedBurger] = useState<string | null>(null);
  const [selectedSide, setSelectedSide] = useState<string | null>(null);
  const [selectedDrink, setSelectedDrink] = useState<string | null>(null);
  const [customizingOption, setCustomizingOption] = useState<Option | null>(
    null
  );
  const optionCardShadowStyle = { boxShadow: "0px 2px 4px 0px #00000040" };

  const getCurrentStepData = () => {
    switch (currentStep) {
      case 1:
        return {
          title: t("trioSelection.step1Title"),
          options: burgerOptions,
          selected: selectedBurger,
          setSelected: setSelectedBurger,
        };
      case 2:
        return {
          title: t("trioSelection.step2Title"),
          options: sideOptions,
          selected: selectedSide,
          setSelected: setSelectedSide,
        };
      case 3:
        return {
          title: t("trioSelection.step3Title"),
          options: drinkOptions,
          selected: selectedDrink,
          setSelected: setSelectedDrink,
        };
      case 4:
        return {
          title: "Review Your Order",
          options: [],
          selected: null,
          setSelected: () => {},
        };
      default:
        return {
          title: "Choose a Burger",
          options: burgerOptions,
          selected: selectedBurger,
          setSelected: setSelectedBurger,
        };
    }
  };

  const stepData = getCurrentStepData();
  const canContinue = currentStep === 4 || stepData.selected !== null;

  if (customizingOption) {
    return (
      <CustomizationInterface
        option={customizingOption}
        onClose={() => setCustomizingOption(null)}
      />
    );
  }

  if (currentStep === 4) {
    return (
      <ReviewOrderInterface   
        selectedBurger={selectedBurger}
        selectedSide={selectedSide}
        selectedDrink={selectedDrink}
        onBack={onBack || (() => {})}
        onAddToOrder={onNext || (() => {})}
      />
    );
  }

  return (
    <div className="flex flex-col gap-10" style={theme.getStyle("fontSerious")}>
      {currentStep !== 4 ? (
        <div>
          <h2
            className="text-4xl font-bold mb-8"
            style={{
              ...theme.getStyle("black"),
              ...theme.getStyle("fontBranded"),
            }}
          >
            {stepData.title}
          </h2>

          <div className="flex gap-4">
            {stepData.options.map((option) => {
              const isSelected = stepData.selected === option.id;
              return (
                <Card
                  key={option.id}
                  className="relative w-[240px] h-[350px] rounded-2xl cursor-pointer transition-all hover:shadow-lg"
                  style={{
                    ...theme.getStyle("whiteBg"),
                    ...(isSelected
                      ? {
                          borderWidth: "4px",
                          borderColor: theme.colors.primary,
                        }
                      : theme.getStyle("greyDarkerBorder")),
                    ...optionCardShadowStyle,
                  }}
                  onClick={() => stepData.setSelected(option.id)}
                >
                  <div className="h-full w-full flex flex-col p-5">
                    <div className="w-full h-[160px] flex items-center justify-center mb-8">
                      <img
                        src={option.image || "/placeholder.svg"}
                        alt={option.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <h3
                      className="text-3xl font-bold leading-tight"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      {t(option.name)}
                    </h3>

                    <p
                      className="text-[18px] font-bold"
                      style={{
                        ...theme.getStyle("greyDarker"),
                        ...theme.getStyle("fontSerious"),
                      }}
                    >
                      {currentStep === 2
                        ? `Medium · ${option.calories} cal`
                        : `${option.calories} cal`}
                    </p>

                    <div
                      className={`flex items-center ${isSelected ? "justify-between mt-4" : "justify-end mt-6"}`}
                    >
                      {isSelected && (
                        <Button
                          variant="outline"
                          className="w-[110px] h-[40px] text-[16px] font-bold bg-transparent"
                          style={{
                            ...theme.getStyle("whiteBg"),
                            ...theme.getStyle("greyDarkerBorder"),
                            ...theme.getStyle("greyDarker"),
                            ...theme.getStyle("fontSerious"),
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCustomizingOption(option);
                          }}
                        >
                          {t("trioSelection.customize")}
                        </Button>
                      )}

                      <span
                        className="text-[22px] font-bold"
                        style={{
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontSerious"),
                        }}
                      >
                        {option.price}
                      </span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <h2
            className="text-4xl font-bold mb-8"
            style={{
              ...theme.getStyle("black"),
              ...theme.getStyle("fontBranded"),
            }}
          >
            Review Your Order
          </h2>
          <div className="space-y-4">
            <p style={theme.getStyle("black")}>Burger: {selectedBurger}</p>
            <p style={theme.getStyle("black")}>Side: {selectedSide}</p>
            <p style={theme.getStyle("black")}>Drink: {selectedDrink}</p>
          </div>
        </div>
      )}

      <div className="flex gap-4 justify-center ml-40">
        <Button
          variant="outline"
          className="w-[270px] h-[70px] text-[18px] font-semibold rounded-xl hover:opacity-90 bg-transparent"
          style={{
            ...theme.getStyle("whiteBg"),
            ...theme.getStyle("black"),
            ...theme.getStyle("greyDarkerBorder"),
            ...theme.getStyle("fontSerious"),
          }}
          onClick={onBack}
          disabled={currentStep === 1}
        >
          Go Back
        </Button>
        <Button
          className="w-[270px] h-[70px] text-[18px] font-medium rounded-xl disabled:opacity-50"
          style={{
            ...(canContinue
              ? { ...theme.getStyle("secondaryBg"), ...theme.getStyle("black") }
              : {
                  ...theme.getStyle("greyDarkerBg"),
                  ...theme.getStyle("black"),
                }),
            ...theme.getStyle("fontSerious"),
          }}
          disabled={!canContinue}
          onClick={onNext}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default function TrioSelectionPage() {
  return (
    <StepsMenuLayout>
      <TrioSelectionContent />
    </StepsMenuLayout>
  );
}
