"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
// @ts-ignore
import StepsMenuLayout from "@/layouts/page-layouts/steps-menu-layout";
import { Step } from "@/layouts/layout-parts/steps-bar-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// @ts-ignore
import { useTheme } from "@/app/hooks/useTheme";
import { CustomizationInterface } from "../../customization/CustomizationPage";
import doubleBurgerImage from "@/assets/images/double-burger-image.svg";
import tripleBurgerImage from "@/assets/images/triple-burger-image.svg";
import forYouBurgerImage from "@/assets/images/foryou-burger-image.svg";
import friesImage from "@/assets/images/fries-image.svg";
import poutineImage from "@/assets/images/poutine-image.svg";
import saladImage from "@/assets/images/salad-image.svg";
import cokeImage from "@/assets/images/coke-image.svg";
import spriteImage from "@/assets/images/sprite-image.svg";
import coffeeImage from "@/assets/images/coffee_drink-image.svg";
import bundleImage from "@/assets/images/trio-image.svg";
import modifyIcon from "@/assets/icons/modify-icon.svg";
import changeProductIcon from "@/assets/icons/change-product-icon.svg";
import BurgerIcon from '@/assets/icons/burger-icon.svg';
import SideIcon from '@/assets/icons/side-icon.svg';
import DrinkIcon from '@/assets/icons/drink-icon.svg';

interface Option {
  id: string;
  name: string;
  calories: number;
  price: string;
  image: string;
}

type BundleType = "duo" | "trio" | "quad";

interface BundleConfig {
  type: BundleType;
  title: string;
  steps: Step[];
  stepOptions: {
    [key: number]: {
      title: string;
      options: Option[];
      selectedKey: string;
    };
  };
}

interface BundleSelectionPageProps {
  currentStep?: number;
  onNext?: () => void;
  onBack?: () => void;
  mode?: "steps" | "options";
  bundleType?: BundleType;
}

const burgerOptions: Option[] = [
  {
    id: "simple",
    name: "bundleSelection.simple",
    calories: 1500,
    price: "",
    image: forYouBurgerImage,
  },
  {
    id: "double",
    name: "bundleSelection.double",
    calories: 1600,
    price: "+0.5$",
    image: doubleBurgerImage,
  },
  {
    id: "tripler",
    name: "bundleSelection.tripler",
    calories: 1800,
    price: "+0.5$",
    image: tripleBurgerImage,
  },
];

const sideOptions: Option[] = [
  {
    id: "fries",
    name: "bundleSelection.fries",
    calories: 1100,
    price: "",
    image: friesImage,
  },
  {
    id: "poutine",
    name: "bundleSelection.poutine",
    calories: 1600,
    price: "+0.5$",
    image: poutineImage,
  },
  {
    id: "salad",
    name: "bundleSelection.salad",
    calories: 1100,
    price: "+0.5$",
    image: saladImage,
  },
];

const drinkOptions: Option[] = [
  {
    id: "coke",
    name: "bundleSelection.coke",
    calories: 200,
    price: "",
    image: cokeImage,
  },
  {
    id: "sprite",
    name: "bundleSelection.sprite",
    calories: 200,
    price: "+2$",
    image: spriteImage,
  },
  {
    id: "coffee",
    name: "bundleSelection.coffee",
    calories: 50,
    price: "+2$",
    image: coffeeImage,
  },
];

function ReviewOrderInterface({
  selections,
  bundleConfig,
  onAddToOrder,
}: {
  selections: { [key: number]: string | null };
  bundleConfig: BundleConfig;
  onBack: () => void;
  onAddToOrder: () => void;
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Build bundle products dynamically based on selections
  const bundleProducts = Object.keys(bundleConfig.stepOptions)
    .filter(stepKey => parseInt(stepKey) < bundleConfig.steps.length) // Exclude review step
    .map(stepKey => {
      const stepNum = parseInt(stepKey);
      const stepConfig = bundleConfig.stepOptions[stepNum];
      const selectedId = selections[stepNum];
      const selectedOption = stepConfig.options.find(opt => opt.id === selectedId);
      
      return {
        id: stepConfig.selectedKey,
        stepNum,
        name: t('bundleSelection.product'),
        price: "+5$",
        image: selectedOption?.image || stepConfig.options[0]?.image,
        tags: [
          { label: t('bundleSelection.doublePatty'), isPaid: false },
          { label: t('bundleSelection.medium'), isPaid: false },
          { label: t('bundleSelection.medium'), isPaid: false },
          { label: t('bundleSelection.extraCheeseNoPrice'), isPaid: false },
        ],
      };
    });

  return (
    <div className="relative flex flex-col" style={theme.getStyle("fontSerious")}>
      <h2
        className="text-[36px] font-bold mb-6"
        style={{
          ...theme.getStyle("black"),
          ...theme.getStyle("fontBranded"),
        }}
      >
        {t('pages.reviewOrder.title')}
      </h2>

      <div className="flex justify-center mb-6">
        <div className="relative w-[250px] h-[250px]">
          <img
            src={bundleImage || "/placeholder.svg"}
            alt={t('bundleSelection.bundleName')}
            className="w-full h-full object-contain md-16"
          />
                <p
        className="text-[26px] font-semibold pt-2 ml-8"
        style={{
          ...theme.getStyle("greyDarker"),
        }}
      >
        20$ - 1500 {t('bundleSelection.calories')}
      </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 w-[750px] mb-12 mt-10 justify-items-center">
        {bundleProducts.map((product, index) => {
          const isLast = index === bundleProducts.length - 1;
          const shouldSpanTwo = bundleProducts.length % 2 !== 0 && isLast;
          return (
          <Card
            key={product.id}
            className={`relative rounded-xl p-5 flex flex-col ${shouldSpanTwo ? "col-span-2 justify-self-center" : ""}`}
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
                  alt={t('bundleSelection.changeProduct')}
                  className="w-[28px] h-[28px]"
                />
              </button>
              <button
                className="w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all"
                style={{
                  ...theme.getStyle("whiteBg"),
                  border: `1px solid ${theme.colors.greyDark}`,
                }}
                onClick={() => {
                  const stepConfig = bundleConfig.stepOptions[product.stepNum];
                  const selectedId = selections[product.stepNum];
                  const productOption = stepConfig.options.find(opt => opt.id === selectedId);
                  if (productOption) {
                    navigate('/bundle-options', { 
                      state: { 
                        option: productOption,
                        selections
                      } 
                    });
                  }
                }}
              >
                <img
                  src={modifyIcon}
                  alt={t('bundleSelection.modify')}
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

            <div className="mb-3 flex justify-between items-center">
              <h3
                className="text-[25px] font-bold"
                style={{
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontBranded"),
                }}
              >
                {product.name}
              </h3>
              <span
                className="text-[20px] font-bold ml-4 mt-6"
                style={{ color: theme.colors.greyDarker }}
              >
                {product.price}
              </span>
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
        )})}
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
          {t('bundleSelection.addToOrder')}
        </Button>
      </div>
    </div>
  );
}

function BundleSelectionContent({
  currentStep = 1,
  onNext,
  onBack,
  mode = "steps",
  bundleType = "trio",
}: BundleSelectionPageProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [customizingOption, setCustomizingOption] = useState<Option | null>(
    location.state?.option || null
  );
  const optionCardShadowStyle = { boxShadow: "0px 2px 4px 0px #00000040" };
  
  // Dynamic bundle configuration based on bundleType
  const getBundleConfig = (): BundleConfig => {
    const configs: { [key in BundleType]: BundleConfig } = {
      duo: {
        type: "duo",
        title: "Go for a Duo",
        steps: [
          { id: 1, label: t('layouts.burger'), icon: BurgerIcon },
          { id: 2, label: t('layouts.side'), icon: SideIcon },
          { id: 3, label: t('layouts.review'), icon: null },
        ],
        stepOptions: {
          1: { title: t("bundleSelection.step1Title"), options: burgerOptions, selectedKey: "burger" },
          2: { title: t("bundleSelection.step2Title"), options: sideOptions, selectedKey: "side" },
        },
      },
      trio: {
        type: "trio",
        title: "Go for a Trio",
        steps: [
          { id: 1, label: t('layouts.burger'), icon: BurgerIcon },
          { id: 2, label: t('layouts.side'), icon: SideIcon },
          { id: 3, label: t('layouts.drink'), icon: DrinkIcon },
          { id: 4, label: t('layouts.review'), icon: null },
        ],
        stepOptions: {
          1: { title: t("bundleSelection.step1Title"), options: burgerOptions, selectedKey: "burger" },
          2: { title: t("bundleSelection.step2Title"), options: sideOptions, selectedKey: "side" },
          3: { title: t("bundleSelection.step3Title"), options: drinkOptions, selectedKey: "drink" },
        },
      },
      quad: {
        type: "quad",
        title: "Go for a Quad",
        steps: [
          { id: 1, label: t('layouts.burger'), icon: BurgerIcon },
          { id: 2, label: t('layouts.side'), icon: SideIcon },
          { id: 3, label: t('layouts.drink'), icon: DrinkIcon },
          { id: 4, label: t('layouts.drink'), icon: DrinkIcon },
          { id: 5, label: t('layouts.review'), icon: null },
        ],
        stepOptions: {
          1: { title: t("bundleSelection.step1Title"), options: burgerOptions, selectedKey: "burger" },
          2: { title: t("bundleSelection.step2Title"), options: sideOptions, selectedKey: "side" },
          3: { title: t("bundleSelection.step3Title"), options: drinkOptions, selectedKey: "drink" },
          4: { title: "Choose a Second Drink", options: drinkOptions, selectedKey: "drink2" },
        },
      },
    };
    return configs[bundleType];
  };
  
  const bundleConfig = getBundleConfig();
  const reviewStepId = bundleConfig.steps.length;
  
  // Dynamic selections state
  const [selections, setSelections] = useState<{ [key: number]: string | null }>({});

  const getCurrentStepData = () => {
    if (currentStep === reviewStepId) {
      return {
        title: "Review Your Order",
        options: [],
        selected: null,
        setSelected: () => {},
      };
    }
    
    const stepConfig = bundleConfig.stepOptions[currentStep];
    return {
      title: stepConfig.title,
      options: stepConfig.options,
      selected: selections[currentStep] || null,
      setSelected: (value: string) => setSelections(prev => ({ ...prev, [currentStep]: value })),
    };
  };

  const stepData = getCurrentStepData();
  const canContinue = currentStep === reviewStepId || stepData.selected !== null;

  // Handle customization mode from route
  if (mode === "options" && location.state?.option) {
    return (
      <CustomizationInterface
        option={location.state.option}
        onClose={() => setCustomizingOption(null)}
        showFrequentlyBought={false}
        compactMode={true}
      />
    );
  }

  // Handle customization from state (legacy)
  if (customizingOption) {
    return (
      <CustomizationInterface
        option={customizingOption}
        onClose={() => setCustomizingOption(null)}
        showFrequentlyBought={false}
        compactMode={true}
      />
    );
  }

  if (currentStep === reviewStepId) {
    return (
      <ReviewOrderInterface   
        selections={selections}
        bundleConfig={bundleConfig}
        onBack={onBack || (() => {})}
        onAddToOrder={onNext || (() => {})}
      />
    );
  }

  return (
    <div className="flex flex-col gap-10" style={theme.getStyle("fontSerious")}>
      {currentStep !== reviewStepId ? (
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
                        ? `${t('bundleSelection.medium')} · ${option.calories} ${t('bundleSelection.calories')}`
                        : `${option.calories} ${t('bundleSelection.calories')}`}
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
                            navigate('/bundle-options', { 
                              state: { 
                                option,
                                currentStep,
                                selections
                              } 
                            });
                          }}
                        >
                          {t("bundleSelection.customize")}
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
            {Object.entries(selections).map(([step, value]) => (
              <p key={step} style={theme.getStyle("black")}>Step {step}: {value}</p>
            ))}
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

export default function BundleSelectionPage({ 
  mode = "steps", 
  bundleType = "quad" 
}: { 
  mode?: "steps" | "options";
  bundleType?: BundleType;
}) {
  const { t } = useTranslation();
  
  // Define bundle configuration
  const getBundleConfig = (): BundleConfig => {
    const configs: { [key in BundleType]: BundleConfig } = {
      duo: {
        type: "duo",
        title: "Go for a Duo",
        steps: [
          { id: 1, label: t('layouts.burger'), icon: BurgerIcon },
          { id: 2, label: t('layouts.side'), icon: SideIcon },
          { id: 3, label: t('layouts.review'), icon: null },
        ],
        stepOptions: {
          1: { title: t("bundleSelection.step1Title"), options: burgerOptions, selectedKey: "burger" },
          2: { title: t("bundleSelection.step2Title"), options: sideOptions, selectedKey: "side" },
        },
      },
      trio: {
        type: "trio",
        title: "Go for a Trio",
        steps: [
          { id: 1, label: t('layouts.burger'), icon: BurgerIcon },
          { id: 2, label: t('layouts.side'), icon: SideIcon },
          { id: 3, label: t('layouts.drink'), icon: DrinkIcon },
          { id: 4, label: t('layouts.review'), icon: null },
        ],
        stepOptions: {
          1: { title: t("bundleSelection.step1Title"), options: burgerOptions, selectedKey: "burger" },
          2: { title: t("bundleSelection.step2Title"), options: sideOptions, selectedKey: "side" },
          3: { title: t("bundleSelection.step3Title"), options: drinkOptions, selectedKey: "drink" },
        },
      },
      quad: {
        type: "quad",
        title: "Go for a Quad",
        steps: [
          { id: 1, label: t('layouts.burger'), icon: BurgerIcon },
          { id: 2, label: t('layouts.side'), icon: SideIcon },
          { id: 3, label: t('layouts.drink'), icon: DrinkIcon },
          { id: 4, label: t('layouts.drink'), icon: DrinkIcon },
          { id: 5, label: t('layouts.review'), icon: null },
        ],
        stepOptions: {
          1: { title: t("bundleSelection.step1Title"), options: burgerOptions, selectedKey: "burger" },
          2: { title: t("bundleSelection.step2Title"), options: sideOptions, selectedKey: "side" },
          3: { title: t("bundleSelection.step3Title"), options: drinkOptions, selectedKey: "drink" },
          4: { title: "Choose a Second Drink", options: drinkOptions, selectedKey: "drink2" },
        },
      },
    };
    return configs[bundleType];
  };
  
  const bundleConfig = getBundleConfig();
  
  return (
    <StepsMenuLayout steps={bundleConfig.steps} bundleTitle={bundleConfig.title}>
      <BundleSelectionContent mode={mode} bundleType={bundleType} />
    </StepsMenuLayout>
  );
}
