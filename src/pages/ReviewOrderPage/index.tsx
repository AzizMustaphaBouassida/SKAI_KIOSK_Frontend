"use client";

import { useState } from "react";
import { X, Plus, Minus, MoreHorizontal } from "lucide-react";
// @ts-ignore
import { useTheme } from "../../hooks/useTheme";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// @ts-ignore
import HeaderLayout from "../../layouts/header-layout";
// @ts-ignore
import FooterLayout from "../../layouts/footer-layout";
import CoffeeDrinkImage from "@/assets/images/coffee_drink-image.svg";
import BurgerImage from "@/assets/images/foryou-burger-image.svg";
import BoxImage from "@/assets/images/box-image.svg";
import TrioImage from "@/assets/images/trio-image.svg";
import FriesImage from "@/assets/images/fries-image.svg";
import discountImage from "@/assets/images/discount-image.svg";
import modifyIcon from "@/assets/icons/modify-icon.svg";
import warningRedIcon from "@/assets/icons/warning-red-icon.svg";
import changeProductWhiteIcon from "@/assets/icons/change-product-white-icon.svg";
import changeProductIcon from "@/assets/icons/change-product-icon.svg";
import discountBackground from "@/assets/icons/discount-background-icon.svg";
import offerTermsIcon from "@/assets/icons/offer-terms_conditions-icon.svg";
import attentionIcon from "@/assets/icons/attention-icon.svg";
import replaceIcon from "@/assets/icons/replace-icon.svg";

const IS_OUT_OF_STOCK = true;
const IS_INGREDIENT_UNAVAILABLE = true; 
const IS_STOCK_REDUCED = true;
const STOCK_REDUCED_MAX = 2;
const IS_PRINCIPAL_INGREDIENT_UNAVAILABLE = true; 

interface TrioProduct {
  id: string;
  name: string;
  priceModifier: number;
  image: string;
  customizations: string[];
  paidExtras?: string[];
}

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  customizations: string[];
  badge?: string;
  isTrio?: boolean;
  trioProducts?: TrioProduct[];
}

export default function ReviewOrderPage() {
  const theme = useTheme();
  const cardShadowStyle = { boxShadow: "0px 2px 4px 0px #00000040" };

  const SHOW_UNAVAILABLE_POPUP = false;

  const [showPromo, setShowPromo] = useState(true);
  const [expandedTrios, setExpandedTrios] = useState<Set<string>>(new Set());
  const [showDealBar] = useState(true);
  const [isTermsDialogOpen, setIsTermsDialogOpen] = useState(false);
  const [isUnavailableDialogOpen, setIsUnavailableDialogOpen] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Coffee Break Deal Only $1.99!",
      description: "",
      price: 7.0,
      quantity: 1,
      image: CoffeeDrinkImage,
      customizations: [
        "Medium",
        "Caramel latte",
        "Whipped cream",
        "Caramel drizzle",
      ],
    },
    {
      id: "2",
      name: "Coffee Break Deal Only $1.99!",
      description: "",
      price: 7.0,
      quantity: 1,
      image: CoffeeDrinkImage,
      customizations: [
        "Medium",
        "Caramel latte",
        "Whipped cream",
        "Caramel drizzle",
      ],
    },
    {
      id: "3",
      name: "Product offer",
      description: "Medium, Extra fries",
      price: 5.6,
      quantity: 1,
      image: BurgerImage,
      customizations: ["Medium", "Extra cheese"],
      badge: "20%",
    },
    {
      id: "4",
      name: "Coffee Break Deal Only $1.99!",
      description: "",
      price: 7.0,
      quantity: 1,
      image: CoffeeDrinkImage,
      customizations: [
        "Medium",
        "Caramel latte",
        "Whipped cream",
        "Caramel drizzle",
      ],
    },
    {
      id: "0",
      name: "Big Mac Trio",
      description: "",
      price: 5.6,
      originalPrice: 7.0,
      quantity: 1,
      image: TrioImage,
      customizations: [],
      isTrio: true,
      trioProducts: [
        {
          id: "trio-1",
          name: "Prod1",
          priceModifier: 5,
          image: BurgerImage,
          customizations: ["Double patty", "BBQ Beef", "Mild spicy"],
          paidExtras: ["Extra cheese +2$"],
        },
        {
          id: "trio-2",
          name: "Prod1",
          priceModifier: 5,
          image: FriesImage,
          customizations: [
            "Double patty",
            "BBQ Beef",
            "Mild spicy",
            "Extra cheese",
          ],
        },
        {
          id: "trio-3",
          name: "Prod1",
          priceModifier: 5,
          image: CoffeeDrinkImage,
          customizations: [
            "Double patty",
            "BBQ Beef",
            "Mild spicy",
            "Extra cheese",
          ],
        },
      ],
    },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleTrioExpansion = (id: string) => {
    setExpandedTrios((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleTermsClick = () => {
    setIsTermsDialogOpen(true);
  };

  const handleCloseTerms = () => {
    setIsTermsDialogOpen(false);
  };

  const handleContinueToOrder = () => {
    setIsUnavailableDialogOpen(false);
    // TODO: Add navigation to the next step if needed
  };

  const handleReviewCart = () => {
    setIsUnavailableDialogOpen(false);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const promotion = 1.2;
  const total = subtotal - promotion;

  return (
    <div className="h-screen flex flex-col bg-white">
      <HeaderLayout showTitle={true} title="Review Order" />

      <div className="flex-1 px-5 py-4 mx-auto w-[1050px] flex flex-col overflow-hidden pb-[400px]">
        {showPromo && (
          <div
            className="rounded-xl border mb-4 p-5 relative h-[133px] flex-shrink-0"
            style={{
              borderColor: theme.colors.greyLight,
              borderWidth: "1px",
              backgroundColor: theme.colors.greyLight,
              ...cardShadowStyle,
            }}
          >
            <button
              className="absolute top-3 right-3 h-12 w-12 flex items-center justify-center rounded-lg hover:opacity-80 -mt-2"
              style={{ backgroundColor: theme.colors.greyLight }}
              onClick={() => setShowPromo(false)}
            >
              <X className="h-8 w-8" style={theme.getStyle("black")} />
            </button>

            <div className="flex items-start gap-8 h-full">
              <img
                src={discountImage || "/placeholder.svg"}
                alt="Discount"
                className="h-[50px] w-[50px] flex-shrink-0 mt-6"
              />

              <div className="flex-1 flex flex-col h-full mt-4">
                <div>
                  <p
                    className="text-[23px] font-bold mb-1"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                    }}
                  >
                    Exclusive One-Time Offer – 25% Off Your Next Purchase
                  </p>
                  <p
                    className="text-[17px] font-medium"
                    style={theme.getStyle("greyDarker")}
                  >
                    Valid for One Use Only!
                  </p>
                </div>
              </div>

              <button
                className="px-4 py-2 rounded-lg border font-bold text-sm hover:opacity-80 self-end -mb-2"
                style={{
                  backgroundColor: theme.colors.white,
                  borderColor: theme.colors.greyDarker,
                  borderWidth: "1.5px",
                  ...theme.getStyle("greyDarker"),
                  ...theme.getStyle("fontSerious"),
                }}
                onClick={handleTermsClick}
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        )}

        <div className="flex-shrink-0 overflow-y-auto space-y-3 mb-6 max-h-[600px] pr-2">
          {cartItems.map((item, index) => {
            const isOutOfStock = index === 0 && IS_OUT_OF_STOCK;
            const isIngredientUnavailable =
              index === 1 && IS_INGREDIENT_UNAVAILABLE;
            const isStockReduced = index === 2 && IS_STOCK_REDUCED;
            const isPrincipalIngredientUnavailable =
              index === 3 && IS_PRINCIPAL_INGREDIENT_UNAVAILABLE;

            return (
              <div
                key={item.id}
                className="rounded-xl border bg-white p-5"
                style={{
                  borderColor: theme.colors.greyLight,
                  height:
                    item.isTrio && expandedTrios.has(item.id)
                      ? "auto"
                      : "205px",
                  ...cardShadowStyle,
                }}
              >
                <div className="flex items-center gap-5">
                  <div className="flex flex-col gap-3 flex-shrink-0">
                    <button
                      className="h-[52px] w-[52px] flex rounded-full items-center justify-center hover:opacity-80 mb-6"
                      style={{
                        backgroundColor: theme.colors.greyLight,
                      }}
                      onClick={() => removeItem(item.id)}
                    >
                      <X className="h-8 w-8" style={theme.getStyle("black")} />
                    </button>

                    {item.isTrio ? (
                      <button
                        className="h-[50px] w-[50px] flex items-center justify-center rounded-full hover:opacity-80"
                        style={{
                          backgroundColor: expandedTrios.has(item.id)
                            ? theme.colors.secondary
                            : theme.colors.white,
                          border: `1.5px solid ${theme.colors.greyDarker}`,
                        }}
                        onClick={() => toggleTrioExpansion(item.id)}
                      >
                        <MoreHorizontal
                          className="h-6 w-6"
                          style={theme.getStyle("black")}
                        />
                      </button>
                    ) : (
                      <button
                        className="h-[52px] w-[52px] flex items-center justify-center rounded-full hover:opacity-80"
                        style={{
                          backgroundColor: isOutOfStock
                            ? "#DC2626"
                            : isPrincipalIngredientUnavailable
                              ? "#DC2626"
                              : isIngredientUnavailable
                                ? "#FFA500"
                                : isStockReduced
                                  ? theme.colors.greyDark
                                  : theme.colors.white,
                          border:
                            isOutOfStock ||
                            isPrincipalIngredientUnavailable ||
                            isIngredientUnavailable ||
                            isStockReduced
                              ? "none"
                              : `1.5px solid ${theme.colors.greyDarker}`,
                        }}
                      >
                        {isOutOfStock ? (
                          <img
                            src={changeProductWhiteIcon || "/placeholder.svg"}
                            alt="Replace"
                            className="h-7 w-7"
                          />
                        ) : isPrincipalIngredientUnavailable ? (
                          <img
                            src={modifyIcon || "/placeholder.svg"}
                            alt="Modify"
                            className="h-6 w-6"
                            style={{ filter: "brightness(0) invert(1)" }}
                          />
                        ) : (
                          <img
                            src={modifyIcon || "/placeholder.svg"}
                            alt="Modify"
                            className="h-6 w-6"
                          />
                        )}
                      </button>
                    )}
                  </div>

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
                      style={{
                        filter: isOutOfStock ? "grayscale(100%)" : "none",
                        opacity: isOutOfStock ? 0.7 : 1,
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0 mb-12 space-y-3">
                    <h3
                      className="font-bold text-[25px] leading-tight"
                      style={{
                        color: isOutOfStock ? "#8D8D8D" : "#000000",
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 max-w-[400px]">
                      {item.customizations.map((custom, index) => {
                        const isUnavailableIngredient =
                          isIngredientUnavailable &&
                          custom === "Caramel drizzle";
                        const isPrincipalUnavailable =
                          isPrincipalIngredientUnavailable &&
                          custom === "Caramel drizzle";

                        return (
                          <span
                            key={index}
                            className="text-[15px] px-3.5 py-1.5 rounded-lg leading-none h-8 flex items-center gap-2"
                            style={{
                              backgroundColor: isOutOfStock
                                ? "#E5E7EB"
                                : isPrincipalUnavailable
                                  ? "#DC2626"
                                  : isUnavailableIngredient
                                    ? "#FFA500"
                                    : "#FEF3C7",
                              color: isOutOfStock ? "#6B7280" : isPrincipalUnavailable ? "#FFFFFF" : "#000000",
                              ...theme.getStyle("fontSerious"),
                            }}
                          >
                            {(isUnavailableIngredient || isPrincipalUnavailable) && (
                              <img
                                src={warningRedIcon || "/placeholder.svg"}
                                alt="Warning"
                                className="w-[20px] h-[20px]"
                                style={{
                                  filter: isPrincipalUnavailable ? "brightness(0) invert(1)" : "none",
                                }}
                              />
                            )}
                            {isUnavailableIngredient || isPrincipalUnavailable
                              ? `${custom} : unavailable`
                              : custom}
                          </span>
                        );
                      })}
                    </div>

                    {item.isTrio &&
                      item.trioProducts &&
                      item.trioProducts.length > 0 && (
                        <div className="flex flex-wrap gap-2 max-w-[400px]">
                          {item.trioProducts.map((product) => (
                            <span
                              key={`trio-${product.id}`}
                              className="text-[15px] px-3.5 py-1.5 rounded-lg leading-none h-8 flex items-center"
                              style={{
                                backgroundColor: "#FEF3C7",
                                color: "#000000",
                                ...theme.getStyle("fontSerious"),
                              }}
                            >
                              {product.name}
                            </span>
                          ))}
                        </div>
                      )}

                    {isOutOfStock && (
                      <p
                        className="text-[20px] font-semibold mt-2"
                        style={{ ...theme.getStyle("red") }}
                      >
                        Out of stock
                      </p>
                    )}
                    {isStockReduced && (
                      <p
                        className="text-[20px] font-semibold mt-2"
                        style={{ ...theme.getStyle("red") }}
                      >
                        Stock reduced: Max {item.quantity} available
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-4 flex-shrink-0">
                    <div
                      className="flex items-center h-[50px] rounded-xl overflow-hidden border-2 mb-8"
                      style={{
                        borderColor: theme.colors.greyDarker,
                      }}
                    >
                      <button
                        className="h-full w-[60px] flex items-center justify-center hover:opacity-80 border-r-2"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                        style={{
                          backgroundColor: theme.colors.white,
                          borderColor: theme.colors.greyDarker,
                          opacity: item.quantity <= 1 ? 0.5 : 1,
                        }}
                      >
                        <Minus
                          className="h-5 w-5"
                          style={theme.getStyle("black")}
                        />
                      </button>

                      <div
                        className="h-full w-[60px] flex items-center justify-center border-r-2 font-medium text-[20px]"
                        style={{
                          backgroundColor: theme.colors.white,
                          borderColor: theme.colors.greyDarker,
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontSerious"),
                        }}
                      >
                        {item.quantity}
                      </div>

                      <button
                        className="h-full w-[60px] flex items-center justify-center hover:opacity-90"
                        onClick={() => updateQuantity(item.id, 1)}
                        disabled={
                          isOutOfStock ||
                          (isStockReduced && item.quantity >= STOCK_REDUCED_MAX)
                        }
                        style={{
                          backgroundColor:
                            isOutOfStock ||
                            (isStockReduced &&
                              item.quantity >= STOCK_REDUCED_MAX)
                              ? "#D1D5DB"
                              : theme.colors.secondary,
                          opacity:
                            isOutOfStock ||
                            (isStockReduced &&
                              item.quantity >= STOCK_REDUCED_MAX)
                              ? 0.5
                              : 1,
                        }}
                      >
                        <Plus
                          className="h-5 w-5"
                          style={theme.getStyle("black")}
                        />
                      </button>
                    </div>

                    <div className="flex flex-col items-end">
                      <div
                        className="font-bold text-[24px] leading-none"
                        style={{
                          color: isOutOfStock ? "#8D8D8D" : "#000000",
                          ...theme.getStyle("fontBranded"),
                        }}
                      >
                        {item.price.toFixed(2).replace(".", ",")}$
                      </div>
                      {(item.badge || item.originalPrice) && (
                        <div
                          className="text-[16px] line-through mt-1"
                          style={theme.getStyle("greyDarker")}
                        >
                          {item.originalPrice
                            ? item.originalPrice.toFixed(2).replace(".", ",")
                            : "7,00"}
                          $
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {item.isTrio &&
                  expandedTrios.has(item.id) &&
                  item.trioProducts && (
                    <div className="flex gap-4 mt-6 pt-6">
                      {item.trioProducts.map((product) => (
                        <div
                          key={product.id}
                          className="rounded-xl border bg-white p-5 flex-1 relative h-[325px] w-[305px]"
                          style={{
                            borderColor: theme.colors.greyLight,
                            ...cardShadowStyle,
                          }}
                        >
                          <div className="relative mb-4">
                            <div className="flex justify-center">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="h-[125px] object-contain"
                              />
                            </div>

                            <div className="absolute top-0 right-0 flex flex-col gap-4">
                              <button
                                className="h-[50px] w-[50px] flex items-center justify-center border rounded-full hover:opacity-80 bg-white"
                                style={{
                                  borderColor: theme.colors.greyDarker,
                                  borderWidth: "2px",
                                }}
                              >
                                <img
                                  src={changeProductIcon || "/placeholder.svg"}
                                  alt="Change Product"
                                  className="h-6 w-6"
                                />
                              </button>
                              <button
                                className="h-[50px] w-[50px] flex items-center justify-center border rounded-full hover:opacity-80 bg-white"
                                style={{
                                  borderColor: theme.colors.greyDarker,
                                  borderWidth: "2px",
                                }}
                              >
                                <img
                                  src={modifyIcon || "/placeholder.svg"}
                                  alt="Modify"
                                  className="h-6 w-6"
                                />
                              </button>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4
                              className="font-bold text-[25px]"
                              style={{
                                ...theme.getStyle("black"),
                                ...theme.getStyle("fontBranded"),
                              }}
                            >
                              {product.name}
                            </h4>
                            <p
                              className="text-[18px] font-medium"
                              style={theme.getStyle("greyDarker")}
                            >
                              +{product.priceModifier}$
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {product.customizations.map((custom, index) => (
                              <span
                                key={index}
                                className="text-[10px] px-4 py-2 rounded-full font-medium"
                                style={{
                                  backgroundColor: "#FEF3C7",
                                  ...theme.getStyle("black"),
                                  ...theme.getStyle("fontSerious"),
                                }}
                              >
                                {custom}
                              </span>
                            ))}
                            {product.paidExtras?.map((extra, index) => (
                              <span
                                key={`extra-${index}`}
                                className="text-[10px] px-4 py-2 rounded-full font-medium"
                                style={{
                                  backgroundColor:"#FEF3C7",
                                  color: theme.colors.black,
                                  ...theme.getStyle("fontSerious"),
                                }}
                              >
                                {extra}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            );
          })}
        </div>

        {showDealBar && (
          <div
            className="rounded-lg px-5 py-3.5 mb-5 text-center h-[63px] flex-shrink-0"
            style={{
              backgroundColor: "#FEF3C7",
            }}
          >
            <p
              className="text-[20px] font-medium"
              style={{
                ...theme.getStyle("greyDarker"),
                ...theme.getStyle("fontSerious"),
              }}
            >
              You're just $7.40 away from grabbing this amazing deal!
            </p>
          </div>
        )}
      </div>

      <div className="fixed bottom-[120px] left-0 right-0 bg-white z-50">
        <div className="max-w-[1050px] mx-auto px-5">
          <div className="mb-6">
            <h2
              className="text-[28px] font-bold text-center mb-5"
              style={{
                ...theme.getStyle("black"),
                ...theme.getStyle("fontBranded"),
              }}
            >
              You might also like
            </h2>
            <div className="flex justify-center gap-3">
              {[
                {
                  id: "r1",
                  name: "Product",
                  calories: "1500 cal",
                  price: 7,
                  image: TrioImage,
                },
                {
                  id: "r2",
                  name: "Product",
                  calories: "1500 cal",
                  price: 7,
                  image: CoffeeDrinkImage,
                },
                {
                  id: "r3",
                  name: "Product",
                  calories: "1500 cal",
                  price: 7,
                  image: BoxImage,
                },
              ].map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl border bg-white p-3 relative w-[190px] h-[241px]"
                  style={{
                    borderColor: theme.colors.greyDarker,
                    ...cardShadowStyle,
                  }}
                >
                  <button className="absolute top-2 right-2 h-6 w-6 flex items-center justify-center hover:opacity-80 rounded">
                    <Plus
                      className="h-8 w-8"
                      style={theme.getStyle("greyDarker")}
                    />
                  </button>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-[108px] w-full object-contain mb-3 mt-8"
                  />
                  <div className="flex items-end justify-between">
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-bold text-[22px] leading-tight"
                        style={{
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontBranded"),
                        }}
                      >
                        {product.name}
                      </p>
                      <p
                        className="text-[14px] font-bold"
                        style={theme.getStyle("greyDarker")}
                      >
                        {product.calories}
                      </p>
                    </div>
                    <p
                      className="font-bold text-[16px] flex-shrink-0"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      {product.price} $
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pb-5">
            <div className="space-y-2.5 mb-16">
              <div className="flex justify-between items-center">
                <span
                  className="text-[25px]"
                  style={{
                    ...theme.getStyle("greyDarker"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  Subtotal
                </span>
                <span
                  className="font-medium text-[25px]"
                  style={{
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  {subtotal.toFixed(2).replace(".", ",")}$
                </span>
              </div>
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
                  className="text-[25px] h-[47px] w-[124px] font-semibold rounded-xl flex items-center justify-center absolute"
                  style={{
                    ...theme.getStyle("primary"),
                    ...theme.getStyle("fontSerious"),
                    right: "-1.5rem",
                  }}
                >
                  -{promotion.toFixed(2).replace(".", ",")}$
                </span>
              </div>
              <div className="pt-2">
                <div className="flex justify-between items-center">
                  <span
                    className="font-bold text-[30px]"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                    }}
                  >
                    Total
                  </span>
                  <span
                    className="font-bold text-[25px]"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                    }}
                  >
                    {total.toFixed(2).replace(".", ",")} $
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-6 justify-center">
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
                Review
              </button>
              <button
                className="h-[84px] w-[561px] text-[28px] font-semibold rounded-xl hover:opacity-90"
                style={{
                  ...theme.getStyle("secondaryBg"),
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontBranded"),
                  ...cardShadowStyle,
                }}
                onClick={handleContinueToOrder}
              >
                Continue to order
              </button>
            </div>
          </div>
        </div>
      </div>

      <FooterLayout />

      <Dialog open={isTermsDialogOpen} onOpenChange={setIsTermsDialogOpen}>
        <DialogContent
          className="max-w-[1200px] w-[75vw] max-h-[1500px] h-[50vh] p-0 gap-0 bg-white rounded-[20px]"
          style={cardShadowStyle}
        >
          <div className="flex items-start justify-between p-8 pb-4">
            <div className="flex-1 pl-12 pt-24">
              <DialogTitle
                className="text-[36px] font-bold leading-tight mb-2"
                style={{
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontBranded"),
                }}
              >
                Terms & Conditions
              </DialogTitle>
              <DialogDescription
                className="text-[30px] font-semibold"
                style={{
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontSerious"),
                }}
              >
                Exclusive One-Time Offer
              </DialogDescription>
            </div>
            <div className="flex-shrink-0 ml-4">
              <img
                src={offerTermsIcon || "/placeholder.svg"}
                alt="Terms & Conditions"
                className="w-[100px] h-[100px] mt-24 mr-8"
              />
            </div>
          </div>

          <div className="px-8 pb-8 pl-20 pr-20 mt-10">
            <p
              className="text-2xl leading-relaxed"
              style={{
                ...theme.getStyle("greyDarker"),
                ...theme.getStyle("fontSerious"),
              }}
            >
              This offer is valid at participating McDonald's restaurants from
              September 1st to September 30th, 2025. Customers who purchase any
              Big Mac Meal will receive a free medium fries with their order.
              The offer is limited to one redemption per customer per
              transaction and is valid for dine-in, takeaway, and drive-thru
              only. It cannot be combined with other discounts, promotions, or
              coupons, and it is not exchangeable for cash or alternative menu
              items.
            </p>
          </div>

          <DialogFooter className="flex flex-row gap-3 p-16 pt-4 !justify-center items-center w-full">
            <Button
              variant="outline"
              onClick={handleCloseTerms}
              className="w-80 h-20 text-3xl font-semibold rounded-lg border-1 bg-transparent"
              style={{
                ...theme.getStyle("greyDarker"),
                ...theme.getStyle("fontBranded"),
                ...theme.getStyle("greyDarkerBorder"),
                ...cardShadowStyle,
              }}
            >
              Close
            </Button>
            <Button
              onClick={handleCloseTerms}
              className="w-80 h-20 text-3xl font-semibold rounded-lg border-2 border-transparent"
              style={{
                ...theme.getStyle("secondaryBg"),
                color: "#000000",
                ...theme.getStyle("fontBranded"),
                ...cardShadowStyle,
              }}
            >
              Apply to Cart
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={SHOW_UNAVAILABLE_POPUP || isUnavailableDialogOpen}
        onOpenChange={setIsUnavailableDialogOpen}
      >
        <DialogContent
          className="max-w-[1200px] w-[75vw] max-h-[1500px] h-[50vh] p-0 gap-0 bg-white rounded-[20px]"
          style={cardShadowStyle}
        >
          <div className="flex items-start justify-between p-8 pb-4">
            <div className="flex flex-row items-center flex-1 pl-8 pt-16 gap-4">
              <div className="flex-shrink-0 mb-4">
                <img
                  src={attentionIcon || "/placeholder.svg"}
                  alt="Attention"
                  className="w-[46px] h-[46px]"
                />
              </div>
              <DialogTitle
                className="text-[40px] font-semibold"
                style={{
                  ...theme.getStyle("red"),
                  ...theme.getStyle("fontBranded"),
                }}
              >
                Some items are unavailable
              </DialogTitle>
            </div>
          </div>
          <DialogDescription
            className="text-[28px] font-regular -mt-16 pl-20 pr-40"
            style={{
              ...theme.getStyle("black"),
              ...theme.getStyle("fontSerious"),
            }}
          >
            Sorry, some items have become unavailable or are now out of stock
          </DialogDescription>
          <div className="mb-8 px-20">
            <h3
              className="text-[35px] font-semibold mb-4"
              style={{
                ...theme.getStyle("black"),
                ...theme.getStyle("fontBranded"),
              }}
            >
              Affected items
            </h3>
            <div className="space-y-6 mt-10">
              <div className="flex items-center gap-6">
                <X
                  className="h-[45px] w-[45px] flex-shrink-0"
                  style={{ color: "#6B7280" }}
                />
                <span
                  className="text-[30px]"
                  style={{
                    ...theme.getStyle("greyDarker"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  Out of stock
                </span>
              </div>
              <div className="flex items-center gap-8 w-full rounded-xl mr-10 bg-[#FFF9E6] py-[14px]">
                <img
                  src={attentionIcon || "/placeholder.svg"}
                  alt="Ingredient unavailable"
                  className="w-[36px] h-[36px]"
                />
                <span
                  className="text-[30px]"
                  style={{
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  Ingredient unavailable: Choclate
                </span>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 mt-1">
                  <img
                    src={replaceIcon || "/placeholder.svg"}
                    alt="Stock reduced"
                    className="w-[44px] h-[44px]"
                  />
                </div>
                <span
                  className="text-[30px]"
                  style={{
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  Stock reduced: Max {STOCK_REDUCED_MAX} available
                </span>
              </div>
            </div>
          </div>
          <DialogFooter className="flex flex-row gap-3 !justify-center items-center w-full">
            <Button
              onClick={handleReviewCart}
              className="w-[314px] h-[83px] text-[25px] font-medium rounded-lg md-40 ml-100"
              style={{
                ...theme.getStyle("secondaryBg"),
                color: "#000000",
                ...theme.getStyle("fontBranded"),
              }}
            >
              Review cart
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
