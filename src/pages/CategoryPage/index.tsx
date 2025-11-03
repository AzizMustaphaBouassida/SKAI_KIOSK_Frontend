"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
// @ts-ignore
import MainMenuLayout from "@/layouts/main-menu-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// @ts-ignore
import { useTheme } from "../../hooks/useTheme";
import VeganIcon from "@/assets/icons/vegan_icon.svg";
import Vegan2Icon from "@/assets/icons/vegan2-icon.svg";
import Vegan3Icon from "@/assets/icons/vegan3-icon.svg";
import NewStarIcon from "@/assets/icons/discount-background-icon.svg";
import NewBadgeIcon from "@/assets/icons/new2-icon.svg";
import LimitedEditionIcon from "@/assets/icons/limited_edition-icon.svg";
import BurgerImage from "@/assets/images/foryou-burger-image.svg";
import picksBackground from "@/assets/icons/our-picks-product-backround-icon.svg";

type OptionType = "hungry" | "little-hungry" | "new-try";

export default function CategoryPage() {
  const theme = useTheme();
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
  const boxShadowStyle = { boxShadow: "0px 4px 4px 0px #00000040" };

  const toggleOption = (option: OptionType) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const ourPicksProductCount = 3;
  const allSectionColumns = 2;

  const cardHeight = allSectionColumns === 2 ? "342px" : "300px";
  const imageSize = allSectionColumns === 2 ? "230px" : "190px";
  const fontSizeTitle = allSectionColumns === 2 ? "24px" : "20px";
  const fontSizeCal = allSectionColumns === 2 ? "18px" : "15px";
  const fontSizePrice = allSectionColumns === 2 ? "22px" : "18px";

  // State: vegan icon visibility for 6 cards in 'All Section'
  const [veganVisible] = useState([
    true, 
    false, 
    false, 
    false, 
    false, 
    false, 
  ]);

  return (
    <MainMenuLayout title={t("category.title")} activePage="category">
      <div className="w-full h-full mx-auto space-y-5 px-4 py-2">
        {/* === Option Buttons === */}
        <div className="space-y-3">
          <h2
            className="text-4xl font-bold leading-tight"
            style={{
              ...theme.getStyle("black"),
              ...theme.getStyle("fontBranded"),
            }}
          >
            {t("category.pickYourOption")}
          </h2>
          <div className="flex gap-3 mt-7 flex-wrap">
            {[
              { key: "hungry", label: t("category.hungry") },
              { key: "little-hungry", label: t("category.littleHungry") },
              { key: "new-try", label: t("category.newTry") },
            ].map(({ key, label }) => (
              <Button
                key={key}
                variant="outline"
                onClick={() => toggleOption(key as OptionType)}
                className="relative w-[210px] h-[70px] rounded-full border-[3px] text-2xl font-normal transition-all"
                style={{
                  ...theme.getStyle("fontSerious"),
                  borderColor: selectedOptions.includes(key as OptionType)
                    ? theme.colors.secondary
                    : theme.colors.greyDark,
                  backgroundColor: selectedOptions.includes(key as OptionType)
                    ? `${theme.colors.secondary}10`
                    : theme.colors.white,
                }}
              >
                {selectedOptions.includes(key as OptionType) && (
                  <div
                    className="absolute -top-3 -right-3 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: theme.colors.secondary }}
                  >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <Check
                        className="w-6 h-6 absolute"
                        style={{ ...theme.getStyle("white"), left: "2px" }}
                        strokeWidth={3.5}
                      />
                      <Check
                        className="w-6 h-6 absolute"
                        style={{ ...theme.getStyle("white"), left: "6px" }}
                        strokeWidth={3.5}
                      />
                    </div>
                  </div>
                )}
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* === Our Picks Section === */}
        <div>
          <h2
            className="text-4xl font-bold mb-4 mt-10"
            style={{
              ...theme.getStyle("black"),
              ...theme.getStyle("fontBranded"),
            }}
          >
            {t("category.ourPicks")}
          </h2>
          <div
            className={`grid ${ourPicksProductCount === 2 ? "grid-cols-2 gap-6" : "grid-cols-3 gap-4"}`}
          >
            {Array.from({ length: ourPicksProductCount }, (_, i) => i + 1).map(
              (item) => (
                <div
                  key={item}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <div className="relative mb-3">
                    <div
                      className={`${ourPicksProductCount === 2 ? "w-[160px] h-[160px]" : "w-[150px] h-[150px]"} relative flex items-center justify-center`}
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
                        src={BurgerImage}
                        alt="Product"
                        className="object-contain relative z-10"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-between gap-8 w-full mb-1">
                      <h3
                        className="text-2xl font-bold leading-tight"
                        style={{
                          ...theme.getStyle("black"),
                          ...theme.getStyle("fontBranded"),
                        }}
                      >
                        {t("category.product")}
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
                      className="text-lg leading-tight w-full text-left"
                      style={{
                        ...theme.getStyle("greyDarker"),
                        ...theme.getStyle("fontSerious"),
                      }}
                    >
                      1500 cal
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* === All Section === */}
        <div className="space-y-3.5">
          <h2
            className="text-4xl font-bold leading-tight mb-4"
            style={{
              ...theme.getStyle("black"),
              ...theme.getStyle("fontBranded"),
            }}
          >
            {t("category.all")}
          </h2>

          <div
            className={`grid ${allSectionColumns === 2 ? "grid-cols-2 gap-6 max-w-[900px]" : "grid-cols-3 gap-2.5"}`}
          >
            {/* Box 1 - Diagonal Yellow/White */}
            <Card
              className="relative overflow-hidden rounded-[14px] border cursor-pointer hover:shadow-md transition-shadow bg-white"
              style={{ ...theme.getStyle("greyDarkBorder"), ...boxShadowStyle }}
            >
              <CardContent
                className="relative p-0 w-full"
                style={{ height: cardHeight }}
              >
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ zIndex: 0 }}
                >
                  <div
                    className="absolute w-full h-full"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #FFBC0D 0%, #FFBC0D 49.9%, white 50%, white 100%)",
                      clipPath: "polygon(0 0, 100% 0, 0 80%)",
                    }}
                  />
                </div>

                <div className="absolute left-4 top-10 z-10">
                  <span
                    className="text-[52px] font-extrabold leading-none"
                    style={{
                      ...theme.getStyle("white"),
                      ...theme.getStyle("fontBaloo"),
                    }}
                  >
                    {t("category.new")}
                  </span>
                </div>

                <div
                  className="absolute inset-0 flex items-center justify-center z-10"
                  style={{ marginTop: "10px" }}
                >
                  <img
                    src={BurgerImage}
                    alt="Product 1"
                    className="object-contain drop-shadow-lg mr-10"
                    style={{ width: imageSize, height: imageSize }}
                  />
                </div>

                {veganVisible[0] && (
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-0 z-20">
                    <img
                      src={VeganIcon}
                      alt="Vegan"
                      className={
                        allSectionColumns === 2 ? "w-16 h-16" : "w-9 h-9"
                      }
                    />
                    <img
                      src={Vegan2Icon}
                      alt="Hot"
                      className={
                        allSectionColumns === 2 ? "w-16 h-16" : "w-12 h-12"
                      }
                    />
                    <img
                      src={Vegan3Icon}
                      alt="Vegan"
                      className={
                        allSectionColumns === 2 ? "w-16 h-16" : "w-9 h-9"
                      }
                    />
                  </div>
                )}

                <div className="absolute left-4 bottom-2 z-20">
                  <p
                    className="font-extrabold leading-tight mb-0"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                      fontSize: fontSizeTitle,
                    }}
                  >
                    {t("category.product")}
                  </p>
                  <p
                    className="font-bold"
                    style={{
                      ...theme.getStyle("greyDarker"),
                      ...theme.getStyle("fontSerious"),
                      fontSize: fontSizeCal,
                    }}
                  >
                    1500 cal
                  </p>
                </div>
                <div className="absolute right-4 bottom-2 z-20">
                  <p
                    className="font-semibold leading-tight"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                      fontSize: fontSizePrice,
                    }}
                  >
                    7 $
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Box 2 - Full Yellow */}
            <Card
              className="relative overflow-hidden rounded-[14px] border cursor-pointer hover:shadow-md transition-shadow"
              style={{
                ...theme.getStyle("secondaryBg"),
                ...theme.getStyle("greyDarkBorder"),
                ...boxShadowStyle,
              }}
            >
              <CardContent
                className="relative p-2.5 space-y-1.5"
                style={{ height: cardHeight }}
              >
                <div
                  className="absolute top-7 left-1/2"
                  style={{ transform: "translateX(-65%)" }}
                >
                  <span
                    className="text-[82px] font-black leading-none tracking-wide"
                    style={{
                      ...theme.getStyle("white"),
                      ...theme.getStyle("fontBaloo"),
                    }}
                  >
                    {t("category.new").toUpperCase()}
                  </span>
                </div>
                <div className="relative w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={BurgerImage}
                    alt="Product 2"
                    className="object-cover mt-5"
                    style={{ width: imageSize, height: imageSize }}
                  />
                </div>
                {veganVisible[1] && (
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-0 z-20">
                    <img
                      src={VeganIcon}
                      alt="Vegan"
                      className={
                        allSectionColumns === 2 ? "w-16 h-16" : "w-9 h-9"
                      }
                    />
                    <img
                      src={Vegan2Icon}
                      alt="Hot"
                      className={
                        allSectionColumns === 2 ? "w-16 h-16" : "w-12 h-12"
                      }
                    />
                    <img
                      src={Vegan3Icon}
                      alt="Vegan"
                      className={
                        allSectionColumns === 2 ? "w-16 h-16" : "w-9 h-9"
                      }
                    />
                  </div>
                )}
                <div className="space-y-0 absolute left-4 bottom-2">
                  <p
                    className="font-extrabold leading-tight mb-0"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                      fontSize: fontSizeTitle,
                    }}
                  >
                    {t("category.product")} 2
                  </p>
                  <p
                    className="font-bold"
                    style={{
                      ...theme.getStyle("greyDarker"),
                      ...theme.getStyle("fontSerious"),
                      fontSize: fontSizeCal,
                    }}
                  >
                    1200 cal
                  </p>
                </div>
                <div className="absolute right-4 bottom-2">
                  <p
                    className="font-semibold leading-tight"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                      fontSize: fontSizePrice,
                    }}
                  >
                    8 $
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Box 3 - Badge Star */}
            <Card
              className="relative overflow-hidden rounded-[14px] border cursor-pointer hover:shadow-md transition-shadow"
              style={{
                ...theme.getStyle("whiteBg"),
                ...theme.getStyle("greyDarkBorder"),
                ...boxShadowStyle,
              }}
            >
              <CardContent
                className="relative p-2.5 space-y-1.5"
                style={{ height: cardHeight }}
              >
                <div
                  className="absolute top-2 left-4 z-10 relative"
                  style={{
                    width: allSectionColumns === 2 ? "80px" : "64px",
                    height: allSectionColumns === 2 ? "80px" : "64px",
                  }}
                >
                  <img
                    src={NewStarIcon}
                    alt="New"
                    className="w-full h-full object-contain"
                  />
                  <span
                    className="absolute inset-0 flex items-center justify-center font-extrabold leading-none"
                    style={{
                      ...theme.getStyle("white"),
                      ...theme.getStyle("fontBaloo"),
                      fontSize: allSectionColumns === 2 ? "22px" : "18px",
                      letterSpacing: "1px",
                    }}
                  >
                    {t("category.new").toUpperCase()}
                  </span>
                </div>
                <div className="relative w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={BurgerImage}
                    alt="Product 3"
                    className="object-contain transform -translate-y-8"
                    style={{ width: imageSize, height: imageSize }}
                  />
                </div>
                {veganVisible[2] && (
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-0 z-20">
                    <img
                      src={VeganIcon}
                      alt="Vegan"
                      className={
                        allSectionColumns === 2 ? "w-16 h-16" : "w-9 h-9"
                      }
                    />
                    <img
                      src={Vegan2Icon}
                      alt="Hot"
                      className={
                        allSectionColumns === 2 ? "w-16 h-16" : "w-12 h-12"
                      }
                    />
                    <img
                      src={Vegan3Icon}
                      alt="Vegan"
                      className={
                        allSectionColumns === 2 ? "w-16 h-16" : "w-9 h-9"
                      }
                    />
                  </div>
                )}
                <div className="space-y-0 absolute left-4 bottom-2">
                  <p
                    className="font-extrabold leading-tight mb-0"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                      fontSize: fontSizeTitle,
                    }}
                  >
                    {t("category.product")} 3
                  </p>
                  <p
                    className="font-bold"
                    style={{
                      ...theme.getStyle("greyDarker"),
                      ...theme.getStyle("fontSerious"),
                      fontSize: fontSizeCal,
                    }}
                  >
                    900 cal
                  </p>
                </div>
                <div className="absolute right-4 bottom-2">
                  <p
                    className="font-semibold leading-tight"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                      fontSize: fontSizePrice,
                    }}
                  >
                    5 $
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Box 4 - Ribbon Badge */}
            <Card
              className="relative overflow-hidden rounded-[14px] border cursor-pointer hover:shadow-md transition-shadow"
              style={{
                ...theme.getStyle("whiteBg"),
                ...theme.getStyle("greyDarkBorder"),
                ...boxShadowStyle,
              }}
            >
              <CardContent
                className="relative p-2.5 space-y-1.5"
                style={{ height: cardHeight }}
              >
                <div className="absolute top-0 right-0 z-10">
                  <img
                    src={NewBadgeIcon}
                    alt="New"
                    className="object-contain"
                    style={{
                      width: allSectionColumns === 2 ? "140px" : "112px",
                      height: allSectionColumns === 2 ? "140px" : "112px",
                    }}
                  />
                </div>
                <div className="relative w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={BurgerImage}
                    alt="Product 4"
                    className="object-cover mt-5"
                    style={{ width: imageSize, height: imageSize }}
                  />
                </div>
                {veganVisible[3] && (
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-0 z-20">
                    <img
                      src={VeganIcon}
                      alt="Vegan"
                      className={
                        allSectionColumns === 2 ? "w-16 h-16" : "w-9 h-9"
                      }
                    />
                    <img
                      src={Vegan2Icon}
                      alt="Hot"
                      className={
                        allSectionColumns === 2 ? "w-16 h-16" : "w-12 h-12"
                      }
                    />
                    <img
                      src={Vegan3Icon}
                      alt="Vegan"
                      className={
                        allSectionColumns === 2 ? "w-16 h-16" : "w-9 h-9"
                      }
                    />
                  </div>
                )}
                <div className="space-y-0 absolute left-4 bottom-2">
                  <p
                    className="font-extrabold leading-tight mb-0"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                      fontSize: fontSizeTitle,
                    }}
                  >
                    {t("category.product")} 4
                  </p>
                  <p
                    className="font-bold"
                    style={{
                      ...theme.getStyle("greyDarker"),
                      ...theme.getStyle("fontSerious"),
                      fontSize: fontSizeCal,
                    }}
                  >
                    1800 cal
                  </p>
                </div>
                <div className="absolute right-4 bottom-2">
                  <p
                    className="font-semibold leading-tight"
                    style={{
                      ...theme.getStyle("black"),
                      ...theme.getStyle("fontBranded"),
                      fontSize: fontSizePrice,
                    }}
                  >
                    10 $
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Box 5 - Limited Edition */}
            {allSectionColumns === 3 && (
              <Card
                className="relative overflow-hidden rounded-[14px] border cursor-pointer hover:shadow-md transition-shadow"
                style={{
                  ...theme.getStyle("whiteBg"),
                  ...theme.getStyle("greyDarkBorder"),
                  ...boxShadowStyle,
                }}
              >
                <CardContent
                  className="relative p-2.5 space-y-1.5"
                  style={{ height: cardHeight }}
                >
                  <div className="absolute -mt-12 -ml-3 z-10">
                    <img
                      src={LimitedEditionIcon}
                      alt="Limited edition"
                      className="object-contain"
                      style={{ width: "160px", height: "160px" }}
                    />
                  </div>
                  <div className="relative w-full flex items-center justify-center overflow-hidden">
                    <img
                      src={BurgerImage}
                      alt="Product 5"
                      className="object-cover"
                      style={{ width: imageSize, height: imageSize }}
                    />
                  </div>
                  {veganVisible[4] && (
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-0 z-20">
                      <img
                        src={VeganIcon}
                        alt="Vegan"
                        className={
                          allSectionColumns === 2 ? "w-16 h-16" : "w-9 h-9"
                        }
                      />
                      <img
                        src={Vegan2Icon}
                        alt="Hot"
                        className={
                          allSectionColumns === 2 ? "w-16 h-16" : "w-12 h-12"
                        }
                      />
                      <img
                        src={Vegan3Icon}
                        alt="Vegan"
                        className={
                          allSectionColumns === 2 ? "w-16 h-16" : "w-9 h-9"
                        }
                      />
                    </div>
                  )}
                  <div className="space-y-0 absolute left-4 bottom-2">
                    <p
                      className="font-extrabold leading-tight mb-0"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                        fontSize: fontSizeTitle,
                      }}
                    >
                      {t("category.product")} 5
                    </p>
                    <p
                      className="font-bold"
                      style={{
                        ...theme.getStyle("greyDarker"),
                        ...theme.getStyle("fontSerious"),
                        fontSize: fontSizeCal,
                      }}
                    >
                      1100 cal
                    </p>
                  </div>
                  <div className="absolute right-4 bottom-2">
                    <p
                      className="font-semibold leading-tight"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                        fontSize: fontSizePrice,
                      }}
                    >
                      6 $
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Box 6 - Out of Stock */}
            {allSectionColumns === 3 && (
              <Card
                className="relative overflow-hidden rounded-[14px] border cursor-pointer hover:shadow-md transition-shadow"
                style={{
                  ...theme.getStyle("whiteBg"),
                  ...theme.getStyle("greyDarkBorder"),
                  ...boxShadowStyle,
                }}
              >
                <CardContent
                  className="relative p-2.5 space-y-1.5"
                  style={{ height: cardHeight }}
                >
                  <div className="relative w-full flex items-center justify-center overflow-hidden opacity-30">
                    <img
                      src={BurgerImage}
                      alt="Product 6"
                      className="object-cover"
                      style={{ width: imageSize, height: imageSize }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center mt-36">
                    <p
                      className="text-center px-1.5 font-semibold"
                      style={{
                        ...theme.getStyle("error"),
                        ...theme.getStyle("fontSerious"),
                        fontSize: "14px",
                      }}
                    >
                      {t("category.outOfStock")}
                    </p>
                  </div>
                  {veganVisible[5] && (
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-0 z-20">
                      <img
                        src={VeganIcon}
                        alt="Vegan"
                        className={
                          allSectionColumns === 2 ? "w-16 h-16" : "w-9 h-9"
                        }
                      />
                      <img
                        src={Vegan2Icon}
                        alt="Hot"
                        className={
                          allSectionColumns === 2 ? "w-16 h-16" : "w-12 h-12"
                        }
                      />
                      <img
                        src={Vegan3Icon}
                        alt="Vegan"
                        className={
                          allSectionColumns === 2 ? "w-16 h-16" : "w-9 h-9"
                        }
                      />
                    </div>
                  )}
                  <div className="space-y-0 absolute left-4 bottom-2">
                    <p
                      className="font-extrabold leading-tight mb-0"
                      style={{
                        ...theme.getStyle("black"),
                        ...theme.getStyle("fontBranded"),
                        fontSize: fontSizeTitle,
                      }}
                    >
                      {t("category.product")} 6
                    </p>
                    <p
                      className="font-bold"
                      style={{
                        ...theme.getStyle("greyDarker"),
                        ...theme.getStyle("fontSerious"),
                        fontSize: fontSizeCal,
                      }}
                    >
                      1300 cal
                    </p>
                  </div>
                  <div className="absolute right-4 bottom-2">
                    <p
                      className="font-semibold leading-tight"
                      style={{
                        ...theme.getStyle("greyDarker"),
                        ...theme.getStyle("fontBranded"),
                        fontSize: fontSizePrice,
                      }}
                    >
                      9 $
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </MainMenuLayout>
  );
}
