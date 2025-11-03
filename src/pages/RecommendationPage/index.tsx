"use client";
// @ts-ignore
import HeaderTitleLayout from "../../layouts/header-title-layout";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import VeganIcon from "@/assets/icons/vegan_icon.svg";
import Vegan2Icon from "@/assets/icons/vegan2-icon.svg";
import LimitedEditionIcon from "@/assets/icons/limited_edition-icon.svg";
import PlusIcon from "@/assets/icons/plus-icon.svg";
import BoxImage from "@/assets/images/box-image.svg";
import CoffeeDrinkImage from "@/assets/images/coffee_drink-image.svg";
import TrioImage from "@/assets/images/trio-image.svg";
import cokeImage from "@/assets/images/coke-image.svg";
import doubleBurgerImage from "@/assets/images/double-burger-image.svg";
import poutineImage from "@/assets/images/poutine-image.svg";
// @ts-ignore
import { useTheme } from "@/app/hooks/useTheme";
import React, { useState } from "react";

export default function RecommendationPage() {
  const theme = useTheme();
  const { t } = useTranslation();
  const boxShadowStyle = { boxShadow: "0px 4px 4px 0px #00000040" };

  const layout = "list" as "grid-6" | "grid-4" | "grid-2" | "list";

  const [veganVisible, setVeganVisible] = useState([
    false, // Card 1
    false, // Card 2
    true, // Card 3
    true, // Card 4
    false, // Card 5
    true, // Card 6
  ]);

  const listProducts = [
    {
      id: 1,
      name: "Prod1",
      image: doubleBurgerImage, // Replace with your image
      description:
        "medium Cappuccino made with freshly ground 100% Arabica beans, steamed milk, a caramel flavor shot, and customized with sugar",
      price: "7.00$",
    },
    {
      id: 2,
      name: "Prod2",
      image: poutineImage, // Replace with your image
      description:
        "medium Cappuccino made with freshly ground 100% Arabica beans, steamed milk, a caramel flavor shot, and customized with sugar",
      price: "7.00$",
    },
    {
      id: 3,
      name: "Prod2",
      image: cokeImage, // Replace with your image
      description:
        "medium Cappuccino made with freshly ground 100% Arabica beans, steamed milk, a caramel flavor shot, and customized with sugar",
      price: "7.00$",
    },
  ];

  return (
    <HeaderTitleLayout title={t('pages.recommendation.title')}>
      <div className="w-full h-full mx-auto px-6 py-4">
        {layout === "list" ? (
          <div className="max-w-[850px] mx-auto space-y-4">
            {listProducts.map((product) => (
              <Card
                key={product.id}
                className="rounded-2xl border-[1.5px] cursor-pointer hover:shadow-md transition-shadow"
                style={{
                  ...theme.getStyle("whiteBg"),
                  ...theme.getStyle("greyDarkerBorder"),
                  ...boxShadowStyle,
                }}
              >
                <CardContent className="p-6 flex items-center gap-12">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-[140px] h-[140px] object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-[26px] font-bold mb-2"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-[15px] leading-[1.5]"
                      style={{
                        ...theme.getStyle("greyDarker"),
                        ...theme.getStyle("fontSerious"),
                      }}
                    >
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Add Button */}
                  <div className="flex-shrink-0 flex flex-col items-end gap-12">
                    <p
                      className="text-[20px] font-bold"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      {product.price}
                    </p>
                    <button
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                      style={{
                        backgroundColor: "#FFC107",
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                        fontSize: "20px",
                        height: "45px",
                        width: "130px",
                      }}
                    >
                      <img src={PlusIcon} alt="Add" className="w-6 h-6" />
                      {t('common.add')}
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          // Grid Layout
          <div
            className={`grid justify-center ${
              layout === "grid-2"
                ? "grid-cols-2 gap-x-6 gap-y-8"
                : layout === "grid-4"
                  ? "grid-cols-2 gap-x-6 gap-y-8"
                  : "grid-cols-3 gap-x-6 gap-y-8"
            } mx-auto`}
            style={
              layout === "grid-2"
                ? { maxWidth: "560px" }
                : layout === "grid-4"
                  ? { maxWidth: "560px" }
                  : {}
            }
          >
            {/* === Card 1 === */}
            <Card
              className="relative overflow-visible rounded-xl border-[1.5px] cursor-pointer hover:shadow-md transition-shadow h-[330px] w-[262px]"
              style={{
                ...theme.getStyle("whiteBg"),
                ...theme.getStyle("greyDarkerBorder"),
                ...boxShadowStyle,
              }}
            >
              <CardContent className="p-5 h-full flex flex-col">
                <div className="absolute -top-6 -left-6 z-10">
                  <img
                    src={LimitedEditionIcon || "/placeholder.svg"}
                    alt="Limited edition"
                    className="w-46 h-46 object-contain ml-[10px]"
                  />
                </div>
                <button
                  className="absolute top-3 right-3 z-10 hover:opacity-70 transition-opacity"
                  style={{ ...theme.getStyle("greyDarker") }}
                >
                  <Plus size={32} strokeWidth={2} />
                </button>
                {veganVisible[0] && (
                  <div className="absolute right-3 flex flex-col gap-3 z-20 mt-[50px]">
                    <img
                      src={VeganIcon || "/placeholder.svg"}
                      alt="Vegan"
                      className="w-9 h-9"
                    />
                    <img
                      src={Vegan2Icon || "/placeholder.svg"}
                      alt="Hot"
                      className="w-9 h-9"
                    />
                    <img
                      src={VeganIcon || "/placeholder.svg"}
                      alt="Vegan"
                      className="w-9 h-9"
                    />
                  </div>
                )}
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={TrioImage || "/placeholder.svg"}
                    alt="Trio Meal"
                    className="w-[160px] h-[160px] object-contain"
                  />
                </div>
                <div className="mt-auto">
                  <div className="flex items-end justify-between">
                    <div>
                      <p
                        className="text-[22px] font-bold leading-tight"
                        style={{
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontBranded"),
                        }}
                      >
                        Product
                      </p>
                      <p
                        className="text-[16px] leading-tight mt-0.5"
                        style={{
                          ...theme.getStyle("greyDarker"),
                          ...theme.getStyle("fontSerious"),
                        }}
                      >
                        1500 cal
                      </p>
                    </div>
                    <p
                      className="text-[20px] font-bold"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      7 $
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* === Card 2 === */}
            <Card
              className="relative overflow-visible rounded-xl border-[1.5px] cursor-pointer hover:shadow-md transition-shadow h-[330px] w-[262px]"
              style={{
                ...theme.getStyle("whiteBg"),
                ...theme.getStyle("greyDarkerBorder"),
                ...boxShadowStyle,
              }}
            >
              <CardContent className="p-5 h-full flex flex-col">
                <button
                  className="absolute top-3 right-3 z-10 hover:opacity-70 transition-opacity"
                  style={{ ...theme.getStyle("greyDarker") }}
                >
                  <Plus size={32} strokeWidth={2} />
                </button>
                {veganVisible[1] && (
                  <div className="absolute right-3 flex flex-col gap-3 z-20 mt-[50px]">
                    <img
                      src={VeganIcon || "/placeholder.svg"}
                      alt="Vegan"
                      className="w-9 h-9"
                    />
                    <img
                      src={Vegan2Icon || "/placeholder.svg"}
                      alt="Hot"
                      className="w-9 h-9"
                    />
                    <img
                      src={VeganIcon || "/placeholder.svg"}
                      alt="Vegan"
                      className="w-9 h-9"
                    />
                  </div>
                )}
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={CoffeeDrinkImage || "/placeholder.svg"}
                    alt="McCafé Drink"
                    className="w-[160px] h-[160px] object-contain"
                  />
                </div>
                <div className="mt-auto">
                  <div className="flex items-end justify-between">
                    <div>
                      <p
                        className="text-[22px] font-bold leading-tight"
                        style={{
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontBranded"),
                        }}
                      >
                        Product
                      </p>
                      <p
                        className="text-[16px] leading-tight mt-0.5"
                        style={{
                          ...theme.getStyle("greyDarker"),
                          ...theme.getStyle("fontSerious"),
                        }}
                      >
                        1500 cal
                      </p>
                    </div>
                    <p
                      className="text-[20px] font-bold"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      7 $
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* === Card 3 === */}
            {layout !== "grid-2" && (
            <Card
              className="relative overflow-visible rounded-xl border-[1.5px] cursor-pointer hover:shadow-md transition-shadow h-[330px] w-[262px]"
              style={{
                ...theme.getStyle("whiteBg"),
                ...theme.getStyle("greyDarkerBorder"),
                ...boxShadowStyle,
              }}
            >
              <CardContent className="p-5 h-full flex flex-col">
                <button
                  className="absolute top-3 right-3 z-10 hover:opacity-70 transition-opacity"
                  style={{ ...theme.getStyle("greyDarker") }}
                >
                  <Plus size={32} strokeWidth={2} />
                </button>
                {veganVisible[2] && (
                  <div className="absolute right-3 flex flex-col gap-3 z-20 mt-[50px]">
                    <img
                      src={VeganIcon || "/placeholder.svg"}
                      alt="Vegan"
                      className="w-9 h-9"
                    />
                    <img
                      src={Vegan2Icon || "/placeholder.svg"}
                      alt="Hot"
                      className="w-9 h-9"
                    />
                    <img
                      src={VeganIcon || "/placeholder.svg"}
                      alt="Vegan"
                      className="w-9 h-9"
                    />
                  </div>
                )}

                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={BoxImage || "/placeholder.svg"}
                    alt="Happy Meal"
                    className="w-[160px] h-[160px] object-contain mr-[16px]"
                  />
                </div>

                <div className="mt-auto">
                  <div className="flex items-end justify-between">
                    <div>
                      <p
                        className="text-[22px] font-bold leading-tight"
                        style={{
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontBranded"),
                        }}
                      >
                        Product
                      </p>
                      <p
                        className="text-[16px] leading-tight mt-0.5"
                        style={{
                          ...theme.getStyle("greyDarker"),
                          ...theme.getStyle("fontSerious"),
                        }}
                      >
                        1500 cal
                      </p>
                    </div>
                    <p
                      className="text-[20px] font-bold"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      7 $
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            )}

            {/* === Card 4 === */}
            {layout !== "grid-2" && (
            <Card
              className="relative overflow-visible rounded-xl border-[1.5px] cursor-pointer hover:shadow-md transition-shadow h-[330px] w-[262px]"
              style={{
                ...theme.getStyle("whiteBg"),
                ...theme.getStyle("greyDarkerBorder"),
                ...boxShadowStyle,
              }}
            >
              <CardContent className="p-5 h-full flex flex-col">
                <div className="absolute -top-6 -left-6 z-10">
                  <img
                    src={LimitedEditionIcon || "/placeholder.svg"}
                    alt="Limited edition"
                    className="w-46 h-46 object-contain ml-[10px]"
                  />
                </div>
                <button
                  className="absolute top-3 right-3 z-10 hover:opacity-70 transition-opacity"
                  style={{ ...theme.getStyle("greyDarker") }}
                >
                  <Plus size={32} strokeWidth={2} />
                </button>
                {veganVisible[3] && (
                  <div className="absolute right-3 flex flex-col gap-3 z-20 mt-[50px]">
                    <img
                      src={VeganIcon || "/placeholder.svg"}
                      alt="Vegan"
                      className="w-9 h-9"
                    />
                    <img
                      src={Vegan2Icon || "/placeholder.svg"}
                      alt="Hot"
                      className="w-9 h-9"
                    />
                    <img
                      src={VeganIcon || "/placeholder.svg"}
                      alt="Vegan"
                      className="w-9 h-9"
                    />
                  </div>
                )}
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={TrioImage || "/placeholder.svg"}
                    alt="Trio Meal"
                    className="w-[160px] h-[160px] object-contain"
                  />
                </div>
                <div className="mt-auto">
                  <div className="flex items-end justify-between">
                    <div>
                      <p
                        className="text-[22px] font-bold leading-tight"
                        style={{
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontBranded"),
                        }}
                      >
                        Product
                      </p>
                      <p
                        className="text-[16px] leading-tight mt-0.5"
                        style={{
                          ...theme.getStyle("greyDarker"),
                          ...theme.getStyle("fontSerious"),
                        }}
                      >
                        1500 cal
                      </p>
                    </div>
                    <p
                      className="text-[20px] font-bold"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      7 $
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            )}

            {/* === Card 5 (only in 6-box layout) === */}
            {layout === "grid-6" && (
              <Card
                className="relative overflow-visible rounded-xl border-[1.5px] cursor-pointer hover:shadow-md transition-shadow h-[330px] w-[262px]"
                style={{
                  ...theme.getStyle("whiteBg"),
                  ...theme.getStyle("greyDarkerBorder"),
                  ...boxShadowStyle,
                }}
              >
                <CardContent className="p-5 h-full flex flex-col">
                  <button
                    className="absolute top-3 right-3 z-10 hover:opacity-70 transition-opacity"
                    style={{ ...theme.getStyle("greyDarker") }}
                  >
                    <Plus size={32} strokeWidth={2} />
                  </button>
                  {veganVisible[4] && (
                    <div className="absolute right-3 flex flex-col gap-3 z-20 mt-[50px]">
                      <img
                        src={VeganIcon || "/placeholder.svg"}
                        alt="Vegan"
                        className="w-9 h-9"
                      />
                      <img
                        src={Vegan2Icon || "/placeholder.svg"}
                        alt="Hot"
                        className="w-9 h-9"
                      />
                      <img
                        src={VeganIcon || "/placeholder.svg"}
                        alt="Vegan"
                        className="w-9 h-9"
                      />
                    </div>
                  )}
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={CoffeeDrinkImage || "/placeholder.svg"}
                      alt="Drink"
                      className="w-[160px] h-[160px] object-contain"
                    />
                  </div>
                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <p
                        className="text-[22px] font-bold"
                        style={{
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontBranded"),
                        }}
                      >
                        Product
                      </p>
                      <p
                        className="text-[16px] leading-tight mt-0.5"
                        style={{
                          ...theme.getStyle("greyDarker"),
                          ...theme.getStyle("fontSerious"),
                        }}
                      >
                        1500 cal
                      </p>
                    </div>
                    <p
                      className="text-[20px] font-bold"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      7 $
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* === Card 6 (only in 6-box layout) === */}
            {layout === "grid-6" && (
              <Card
                className="relative overflow-visible rounded-xl border-[1.5px] cursor-pointer hover:shadow-md transition-shadow h-[330px] w-[262px]"
                style={{
                  ...theme.getStyle("whiteBg"),
                  ...theme.getStyle("greyDarkerBorder"),
                  ...boxShadowStyle,
                }}
              >
                <CardContent className="p-5 h-full flex flex-col">
                  <button
                    className="absolute top-3 right-3 z-10 hover:opacity-70 transition-opacity"
                    style={{ ...theme.getStyle("greyDarker") }}
                  >
                    <Plus size={32} strokeWidth={2} />
                  </button>
                  {veganVisible[5] && (
                    <div className="absolute right-3 flex flex-col gap-3 z-20 mt-[50px]">
                      <img
                        src={VeganIcon || "/placeholder.svg"}
                        alt="Vegan"
                        className="w-9 h-9"
                      />
                      <img
                        src={Vegan2Icon || "/placeholder.svg"}
                        alt="Hot"
                        className="w-9 h-9"
                      />
                      <img
                        src={VeganIcon || "/placeholder.svg"}
                        alt="Vegan"
                        className="w-9 h-9"
                      />
                    </div>
                  )}

                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={BoxImage || "/placeholder.svg"}
                      alt="Happy Meal"
                      className="w-[160px] h-[160px] object-contain mr-[16px]"
                    />
                  </div>

                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <p
                        className="text-[22px] font-bold"
                        style={{
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontBranded"),
                        }}
                      >
                        Product
                      </p>
                      <p
                        className="text-[16px] leading-tight mt-0.5"
                        style={{
                          ...theme.getStyle("greyDarker"),
                          ...theme.getStyle("fontSerious"),
                        }}
                      >
                        1500 cal
                      </p>
                    </div>
                    <p
                      className="text-[20px] font-bold"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      7 $
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        <button
          className="block mx-auto mt-10 h-[80px] rounded-xl font-medium hover:opacity-80 transition-opacity"
          style={{
            ...theme.getStyle("whiteBg"),
            ...theme.getStyle("greyDarkerBorder"),
            ...theme.getStyle("greyDarker"),
            ...theme.getStyle("fontBranded"),
            fontSize: "24px",
            borderWidth: "1.5px",
            width:
              layout === "grid-2"
                ? "calc(262px * 2 + 24px)"
                : layout === "grid-4"
                  ? "calc(262px * 2 + 24px)"
                  : layout === "list"
                    ? "850px"
                    : "100%",
          }}
        >
          {t('common.notToday')}
        </button>
      </div>
    </HeaderTitleLayout>
  );
}
