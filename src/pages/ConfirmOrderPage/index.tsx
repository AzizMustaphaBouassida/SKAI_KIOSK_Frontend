"use client";

import { useState } from "react";
// @ts-ignore
import { useTheme } from "../../hooks/useTheme";

// @ts-ignore
import HeaderLayout from "../../layouts/header-layout";
// @ts-ignore
import FooterLayout from "../../layouts/footer-layout";
import CoffeeDrinkImage from "@/assets/images/coffee_drink-image.svg";
import BurgerImage from "@/assets/images/foryou-burger-image.svg";
import discountBackground from "@/assets/icons/discount-background-icon.svg";

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  customizations: string[];
  badge?: string;
}

export default function ConfirmOrderPage() {
  const theme = useTheme();
  const cardShadowStyle = { boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)" };

  const [cartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Coffee Break Deal Only $1.99!",
      price: 7.0,
      image: CoffeeDrinkImage,
      customizations: [
        "Medium",
        "Caramel latte",
        "Whipped cream",
        "Cramel drizzle",
      ],
    },
    {
      id: "2",
      name: "Coffee Break Deal Only $1.99!",
      price: 7.0,
      image: CoffeeDrinkImage,
      customizations: [
        "Medium",
        "Caramel latte",
        "Whipped cream",
        "Cramel drizzle",
      ],
    },
    {
      id: "3",
      name: "Product offer",
      price: 5.6,
      originalPrice: 7.0,
      image: BurgerImage,
      customizations: ["Expires in 3 days"],
      badge: "20%",
    },
  ]);

  const estimatedSubtotal = 28.0;
  const promotion = 11.2;
  const tip = 3.0;
  const taxes = 5.0;
  const donation = 5.0;
  const subtotal = estimatedSubtotal - promotion + tip + taxes + donation;

  return (
    <div className="h-screen flex flex-col bg-white">
      <HeaderLayout showTitle={true} title="Confirm Order" />

      <div className="flex-1 px-5 py-4 mx-auto w-[1050px] flex flex-col overflow-hidden pb-[400px]">
        {/* Cart Items Section */}
        <div className="flex-shrink-0 overflow-y-auto space-y-3 mb-6 max-h-[1000px] pr-2 py-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border bg-white p-5 h-[205px]"
              style={{
                borderColor: theme.colors.greyLight,
                ...cardShadowStyle,
              }}
            >
              <div className="flex items-center gap-5">
                {/* Product Image with Badge */}
                <div className="relative flex-shrink-0">
                  {item.badge && (
                    <div className="absolute -top-2 -left-2 z-0">
                      <img
                        src={discountBackground || "/placeholder.svg"}
                        alt="Discount Background"
                        className="h-16 w-16 object-contain ml-6"
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center text-[20px] font-bold leading-none ml-6"
                        style={{
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontBranded"),
                        }}
                      >
                        {item.badge}
                      </div>
                    </div>
                  )}
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-[150px] w-[110px] object-contain relative z-10"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0 space-y-3">
                  <h3
                    className="font-bold text-[25px] leading-tight"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                    }}
                  >
                    {item.name}
                  </h3>

                  {/* Customization Tags */}
                  <div className="flex flex-wrap gap-2 max-w-[400px]">
                    {item.customizations.map((custom, index) => (
                      <span
                        key={index}
                        className="text-[15px] px-3.5 py-1.5 rounded-lg leading-none h-8 flex items-center"
                        style={{
                          backgroundColor: "#FEF3C7",
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontSerious"),
                        }}
                      >
                        {custom}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex flex-col items-end justify-center flex-shrink-0">
                  <div
                    className="font-bold text-[24px] leading-none"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                    }}
                  >
                    {item.price.toFixed(2).replace(".", ",")}$
                  </div>
                  {item.originalPrice && (
                    <div
                      className="text-[16px] line-through mt-1"
                      style={theme.getStyle("greyDarker")}
                    >
                      {item.originalPrice.toFixed(2).replace(".", ",")}$
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-[120px] left-0 right-0 bg-white z-50">
        <div className="max-w-[1050px] mx-auto px-5">
          <div className="p-5 mb-5">
            <div className="space-y-2.5 mb-16">
              {/* Estimated Subtotal */}
              <div className="flex justify-between items-center">
                <span
                  className="text-[25px]"
                  style={{
                    ...theme.getStyle("greyDarker"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  Estimated subtotal
                </span>
                <span
                  className="font-medium text-[25px]"
                  style={{
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  {estimatedSubtotal.toFixed(2).replace(".", ",")}$
                </span>
              </div>

              {/* Promotion */}
              <div className="flex justify-between items-center relative">
                <span
                  className="text-[25px]"
                  style={{
                    ...theme.getStyle("greyDarker"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  Promotion
                </span>
                <span
                  className="text-[25px] h-[47px] px-4 font-medium rounded-xl flex items-center justify-center absolute"
                  style={{
                    ...theme.getStyle("primaryBg"),
                    ...theme.getStyle("white"),
                    ...theme.getStyle("fontSerious"),
                    right: "-1.5rem",
                  }}
                >
                  -{promotion.toFixed(2).replace(".", ",")}$
                </span>
              </div>

              {/* Tip */}
              <div className="flex justify-between items-center">
                <span
                  className="text-[25px]"
                  style={{
                    ...theme.getStyle("greyDarker"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  Tip
                </span>
                <span
                  className="font-medium text-[25px]"
                  style={{
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  {tip.toFixed(2).replace(".", ",")}$
                </span>
              </div>

              {/* Taxes */}
              <div className="flex justify-between items-center">
                <span
                  className="text-[25px]"
                  style={{
                    ...theme.getStyle("greyDarker"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  Taxes
                </span>
                <span
                  className="font-medium text-[25px]"
                  style={{
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  {taxes.toFixed(2).replace(".", ",")}$
                </span>
              </div>

              {/* Donation */}
              <div className="flex justify-between items-center">
                <span
                  className="text-[25px]"
                  style={{
                    ...theme.getStyle("greyDarker"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  Donation
                </span>
                <span
                  className="font-medium text-[25px]"
                  style={{
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  {donation.toFixed(2).replace(".", ",")}$
                </span>
              </div>

              {/* Subtotal */}
              <div className="pt-2">
                <div className="flex justify-between items-center">
                  <span
                    className="font-bold text-[30px]"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                    }}
                  >
                    Subtotal
                  </span>
                  <span
                    className="font-bold text-[25px]"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                    }}
                  >
                    {subtotal.toFixed(2).replace(".", ",")} $
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6">
              <button
                className="h-[84px] w-[385px] text-[28px] font-medium rounded-xl border-[1.5px] hover:opacity-80"
                style={{
                  ...theme.getStyle("whiteBg"),
                  ...theme.getStyle("greyDarkerBorder"),
                  ...theme.getStyle("greyDarker"),
                  ...theme.getStyle("fontSerious"),
                  ...cardShadowStyle,
                }}
              >
                Change order
              </button>
              <button
                className="h-[84px] w-[561px] text-[28px] font-semibold rounded-xl hover:opacity-90"
                style={{
                  ...theme.getStyle("primaryBg"),
                  ...theme.getStyle("white"),
                  ...theme.getStyle("fontBranded"),
                  ...cardShadowStyle,
                }}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      <FooterLayout />
    </div>
  );
}
