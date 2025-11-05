"use client";

import { useTranslation } from "react-i18next";
// @ts-ignore
import MainMenuLayout from "@/layouts/page-layouts/main-menu-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// @ts-ignore
import { useTheme } from "@/app/hooks/useTheme";
import qrCodeImage from "@/assets/icons/qrcode.svg";
import forYouBurgerImage from "@/assets/images/foryou-burger-image.svg";
import trioBurgerImage from "@/assets/images/trio-burger-image.svg";
import familyMealImage from "@/assets/images/family-meal-image.svg";
import kioskIllustration from "@/assets/images/kisok-client-image.svg";
import mccafeImage from "@/assets/images/coffee-image.svg";
import happyMealImage from "@/assets/images/happy-meal-image.svg";
import productImage from "@/assets/images/product-image.svg";
import picksBackground from "@/assets/icons/our-picks-product-backround-icon.svg";

export default function Catalog() {
  const theme = useTheme();
  const { t } = useTranslation();
  const isLoggedIn = true;
  const forYouProductCount: number = 3;
  const cardShadowStyle = { boxShadow: "0px 4px 4px 0px #00000040" };

  return (
    <MainMenuLayout title={t("catalog.title")}>
      <div className="w-full h-full px-6 py-4">
        <div className="space-y-4">
          {isLoggedIn ? (
            <div>
              <h2
                className="text-4xl font-bold mb-4"
                style={{
                  ...theme.getStyle("black"),
                  ...theme.getStyle("fontBranded"),
                }}
              >
                {t("catalog.forYouTitle")}
              </h2>
              <div
                className={`grid ${
                  forYouProductCount === 1
                    ? "grid-cols-1 place-items-center"
                    : forYouProductCount === 2
                      ? "grid-cols-2 gap-6"
                      : "grid-cols-3 gap-4"
                }`}
              >
                {Array.from(
                  { length: forYouProductCount },
                  (_, i) => i + 1
                ).map((item) => (
                  <div
                    key={item}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div className="relative mb-3">
                      <div
                        className={`${
                          forYouProductCount === 1
                            ? "w-[170px] h-[170px]"
                            : forYouProductCount === 2
                              ? "w-[160px] h-[160px]"
                              : "w-[150px] h-[150px]"
                        } relative flex items-center justify-center`}
                        style={{
                          ...theme.getStyle("whiteBg"),
                        }}
                      >
                        <img
                          src={picksBackground}
                          alt="Ring"
                          className="absolute w-[110%] left-0 bottom-4 object-contain"
                        />
                        <img
                          src={forYouBurgerImage || "/placeholder.svg"}
                          alt="Product"
                          className={`object-contain relative z-10`}
                        />
                      </div>
                    </div>
                    {/* </CHANGE> */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-between gap-8 w-full mb-1">
                        <h3
                          className="text-2xl font-bold leading-tight"
                          style={{
                            ...theme.getStyle("black"),
                            ...theme.getStyle("fontBranded"),
                          }}
                        >
                          {t("catalog.productName")}
                        </h3>
                        <p
                          className="text-xl font-bold leading-none"
                          style={{
                            ...theme.getStyle("black"),
                            ...theme.getStyle("fontBranded"),
                          }}
                        >
                          7 $
                        </p>
                      </div>
                      <p
                        className="text-lg leading-tight w-full text-left font-bold"
                        style={{
                          ...theme.getStyle("greyDarker"),
                          ...theme.getStyle("fontSerious"),
                        }}
                      >
                        1500 cal
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Card
              className="border-none rounded-[20px] overflow-hidden shadow-sm h-[200px]"
              style={{ ...theme.getStyle("primaryBg"), ...cardShadowStyle }}
            >
              <CardContent className="p-5 flex items-center gap-12 h-full">
                <div
                  className="p-3 rounded-xl shrink-0"
                  style={theme.getStyle("primaryBg")}
                >
                  <img
                    src={qrCodeImage || "/placeholder.svg"}
                    alt="QR Code"
                    className="w-[150px] h-[150px] "
                  />
                </div>
                <div
                  className="flex-1 flex flex-col justify-center"
                  style={theme.getStyle("white")}
                >
                  <h2
                    className="text-3xl font-semibold leading-[1.2] mb-4"
                    style={theme.getStyle("fontBranded")}
                  >
                    {t("catalog.helpTitle")}
                    <br />
                    {t("catalog.helpSubtitle")}
                  </h2>
                  <p
                    className="text-2xl leading-tight opacity-95"
                    style={theme.getStyle("fontSerious")}
                  >
                    {t("catalog.helpDescription")}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Mc Selects Section */}
          <div>
            <h2
              className="text-4xl font-bold mb-6 mt-8"
              style={{
                ...theme.getStyle("black"),
                ...theme.getStyle("fontBranded"),
              }}
            >
              {t("catalog.mcSelectsTitle")}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <Card
                className="border border-gray-400 rounded-[18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden bg-white h-[190px]"
                style={cardShadowStyle}
              >
                <CardContent className="p-4 flex items-center justify-between h-full">
                  <div className="flex-1 pr-2 pl-8">
                    <h3
                      className="text-3xl font-bold leading-[1.15]"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      {t("catalog.trioBurger.line1")}
                      <br />
                      {t("catalog.trioBurger.line2")}
                    </h3>
                  </div>
                  <img
                    src={trioBurgerImage || "/placeholder.svg"}
                    alt="Trio Burger"
                    className="w-[160px] h-[160px] object-contain -mr-8 mt-8"
                  />
                </CardContent>
              </Card>

              <Card
                className="border-gray-400 rounded-[18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden bg-white h-[190px]"
                style={cardShadowStyle}
              >
                <CardContent className="p-4 flex items-center justify-between h-full">
                  <div className="flex-1 pr-2 pl-4">
                    <h3
                      className="text-3xl font-bold leading-[1.15]"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                      }}
                    >
                      {t("catalog.familyMeal.line1")}
                      <br />
                      {t("catalog.familyMeal.line2")}
                    </h3>
                  </div>
                  <img
                    src={familyMealImage || "/placeholder.svg"}
                    alt="Family Meal"
                    className="w-[185px] h-[185px] object-contain -mr-3"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Yellow Kiosk Banner */}
          <Card
            className="border-gray-400 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-[210px]"
            style={{ ...theme.getStyle("secondaryBg"), ...cardShadowStyle }}
          >
            <CardContent className="p-5 flex items-center gap-4 h-full">
              <div className="shrink-0 mt-4">
                <img
                  src={kioskIllustration || "/placeholder.svg"}
                  alt="Kiosk"
                  className="w-[200px] h-[200px]"
                />
              </div>
              <div className="flex-1">
                <h2
                  className="text-3xl font-bold leading-[1.2] mb-1"
                  style={{
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontBranded"),
                  }}
                >
                  {t("catalog.cantChooseTitle")}
                </h2>
                <p
                  className="text-2xl mb-3 leading-tight"
                  style={{
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontSerious"),
                  }}
                >
                  {t("catalog.cantChooseSubtitle")}
                </p>
                <Button
                  className="hover:bg-gray-50 font-medium text-[24px] px-5 py-2 h-auto rounded-lg"
                  style={{
                    ...theme.getStyle("whiteBg"),
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontBranded"),
                    ...theme.getStyle("greyDarkerBorder"),
                    ...cardShadowStyle,
                  }}
                >
                  {t("catalog.cantChooseCta")}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* McCafe & Happy Meal Section */}
          <div className="grid grid-cols-2 gap-3">
            <Card
              className="border-gray-400 rounded-[18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden bg-white h-[190px]"
              style={cardShadowStyle}
            >
              <CardContent className="p-4 flex items-center justify-between h-full">
                <h3
                  className="text-3xl font-bold flex-1 pr-2 pl-4"
                  style={{
                    ...theme.getStyle("black"),
                    ...theme.getStyle("fontBranded"),
                  }}
                >
                  {t("catalog.mccafeTitle")}
                </h3>
                <img
                  src={mccafeImage || "/placeholder.svg"}
                  alt="McCafe"
                  className="w-[180px] h-[180px] object-contain -mr-11 mt-3"
                />
              </CardContent>
            </Card>

            <Card
              className="border-gray-400 rounded-[18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden bg-white h-[190px]"
              style={cardShadowStyle}
            >
              <CardContent className="p-4 flex items-center justify-between h-full">
                <div className="flex-1 pr-2 pl-6">
                  <h3
                    className="text-3xl font-bold leading-[1.15]"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                    }}
                  >
                    {t("catalog.happyMeal.line1")}
                    <br />
                    {t("catalog.happyMeal.line2")}
                  </h3>
                </div>
                <img
                  src={happyMealImage || "/placeholder.svg"}
                  alt="Happy Meal"
                  className="w-[175px] h-[175px] object-contain -mr-6 mt-3"
                />
              </CardContent>
            </Card>
          </div>

          {/* Best Sellers Section */}
          <div>
            <h2
              className="text-4xl font-bold mb-6 mt-8"
              style={{
                ...theme.getStyle("black"),
                ...theme.getStyle("fontBranded"),
              }}
            >
              {t("catalog.bestSellersTitle")}
            </h2>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[1, 2, 3].map((item) => (
                <Card
                  key={item}
                  className="border-gray-400 rounded-[18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden bg-white h-[210px]"
                  style={cardShadowStyle}
                >
                  <CardContent className="p-3 h-full flex flex-col">
                    <img
                      src={productImage || "/placeholder.svg"}
                      alt="Product"
                      className="w-[200px] h-[200px] object-contain mb-2.5"
                    />
                    <div className="space-y-0.5">
                      <h3
                        className="text-2xl font-bold leading-tight"
                        style={{
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontBranded"),
                        }}
                      >
                        {t("catalog.productName")}
                      </h3>
                      <div className="flex items-end justify-between">
                        <p
                          className="text-lg leading-tight font-bold"
                          style={{
                            ...theme.getStyle("greyDarker"),
                            ...theme.getStyle("fontSerious"),
                          }}
                        >
                          1500 cal
                        </p>
                        <p
                          className="text-xl font-bold leading-none"
                          style={{
                            ...theme.getStyle("black"),
                            ...theme.getStyle("fontBranded"),
                          }}
                        >
                          7$
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainMenuLayout>
  );
}
