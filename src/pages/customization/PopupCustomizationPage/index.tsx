"use client";

import { useState } from "react";
// @ts-ignore
import HeaderLayout from "@/layouts/layout-parts/header-layout.tsx";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// @ts-ignore
import { useTheme } from "@/app/hooks/useTheme";
import popupImage from "@/assets/images/popup-image.svg";
import ellipsePopupImage from "@/assets/images/Ellipse-popup-image.svg";
import { ChevronDown, ChevronUp, X } from "lucide-react";

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
  image: popupImage,
};

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

export default function PopupCustomizationPage() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    // You can add navigation logic here to go back to the previous page
    // For example: navigate(-1) or navigate('/customization')
  };

  return (
    <HeaderLayout>
      <ProductModal
        isOpen={isOpen}
        onClose={handleClose}
        product={{
          name: sampleOption.name,
          price: sampleOption.price,
          calories: `${sampleOption.calories} cal`,
          image: sampleOption.image,
        }}
      />
    </HeaderLayout>
  );
}
