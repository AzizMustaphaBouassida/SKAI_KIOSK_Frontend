"use client"
import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { Check } from "lucide-react"
// @ts-ignore
import MainMenuLayout from "@/layouts/main-menu-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// @ts-ignore
import { useTheme } from '../../hooks/useTheme'
import VeganIcon from "@/assets/icons/vegan_icon.svg"
import Vegan2Icon from "@/assets/icons/vegan2-icon.svg"
import Vegan3Icon from "@/assets/icons/vegan3-icon.svg"
import NewStarIcon from "@/assets/icons/new-icon.svg"
import NewBadgeIcon from "@/assets/icons/new2-icon.svg"
import LimitedEditionIcon from "@/assets/icons/limited_edition-icon.svg"
import BurgerImage from "@/assets/images/foryou-burger-image.svg"

type OptionType = "hungry" | "little-hungry" | "new-try"

export default function CategoryPage() {
  const theme = useTheme()
  const { t } = useTranslation()
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([])
  const boxShadowStyle = { boxShadow: '0px 4px 4px 0px #00000040' }

  const toggleOption = (option: OptionType) => {
    setSelectedOptions(prev => 
      prev.includes(option) 
        ? prev.filter(o => o !== option)
        : [...prev, option]
    )
  }

  const ourPicksProductCount = 2
  const allSectionColumns = 3

  return (
    <MainMenuLayout title={t('category.title')} activePage="category">
      <div className="w-full h-full mx-auto space-y-5 px-4 py-2">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('category.pickYourOption')}</h2>
          <div className="flex gap-3 mt-7">
            <Button
              variant="outline"
              onClick={() => toggleOption("hungry")}
              className="relative w-[210px] h-[70px] rounded-full border-[3px] text-2xl font-normal transition-all"
              style={{
                ...theme.getStyle('fontSerious'),
                borderColor: selectedOptions.includes("hungry") ? theme.colors.secondary : theme.colors.greyDark,
                backgroundColor: selectedOptions.includes("hungry") ? `${theme.colors.secondary}10` : theme.colors.white
              }}
            >
              {selectedOptions.includes("hungry") && (
                <div className="absolute -top-3 -right-3 w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.secondary }}>
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <Check
                      className="w-6 h-6 absolute"
                      style={{ ...theme.getStyle('white'), left: '2px' }}
                      strokeWidth={3.5}
                    />
                    <Check
                      className="w-6 h-6 absolute"
                      style={{ ...theme.getStyle('white'), left: '6px' }}
                      strokeWidth={3.5}
                    />
                  </div>
                </div>
              )}
              {t('category.hungry')}
            </Button>
            <Button
              variant="outline"
              onClick={() => toggleOption("little-hungry")}
              className="relative w-[210px] h-[70px] rounded-full border-[3px] text-2xl font-normal transition-all"
              style={{
                ...theme.getStyle('fontSerious'),
                borderColor: selectedOptions.includes("little-hungry") ? theme.colors.secondary : theme.colors.greyDark,
                backgroundColor: selectedOptions.includes("little-hungry") ? `${theme.colors.secondary}10` : theme.colors.white
              }}
            >
              {selectedOptions.includes("little-hungry") && (
                <div className="absolute -top-3 -right-3 w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.secondary }}>
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <Check
                      className="w-6 h-6 absolute"
                      style={{ ...theme.getStyle('white'), left: '2px' }}
                      strokeWidth={3.5}
                    />
                    <Check
                      className="w-6 h-6 absolute"
                      style={{ ...theme.getStyle('white'), left: '6px' }}
                      strokeWidth={3.5}
                    />
                  </div>
                </div>
              )}
              {t('category.littleHungry')}
            </Button>
            <Button
              variant="outline"
              onClick={() => toggleOption("new-try")}
              className="relative w-[210px] h-[70px] rounded-full border-[3px] text-2xl font-normal transition-all"
              style={{
                ...theme.getStyle('fontSerious'),
                borderColor: selectedOptions.includes("new-try") ? theme.colors.secondary : theme.colors.greyDark,
                backgroundColor: selectedOptions.includes("new-try") ? `${theme.colors.secondary}10` : theme.colors.white
              }}
            >
              {selectedOptions.includes("new-try") && (
                <div className="absolute -top-3 -right-3 w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.secondary }}>
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <Check
                      className="w-6 h-6 absolute"
                      style={{ ...theme.getStyle('white'), left: '2px' }}
                      strokeWidth={3.5}
                    />
                    <Check
                      className="w-6 h-6 absolute"
                      style={{ ...theme.getStyle('white'), left: '6px' }}
                      strokeWidth={3.5}
                    />
                  </div>
                </div>
              )}
              {t('category.newTry')}
            </Button>
          </div>
        </div>

        {/* Our picks Section */}
        <div>
          <h2 className="text-4xl font-bold mb-4 mt-10" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('category.ourPicks')}</h2>
          <div className={`grid ${ourPicksProductCount === 2 ? 'grid-cols-2 gap-6' : 'grid-cols-3 gap-4'}`}>
            {Array.from({ length: ourPicksProductCount }, (_, i) => i + 1).map((item) => (
              <div key={item} className="flex flex-col items-center cursor-pointer">
                <div className="relative mb-3">
                  <div 
                    className={`${ourPicksProductCount === 2 ? 'w-[180px] h-[180px]' : 'w-[150px] h-[150px]'} rounded-full border-[5px] overflow-hidden flex items-center justify-center`} 
                    style={{ ...theme.getStyle('whiteBg'), ...theme.getStyle('primaryBorder') }}
                  >
                    <img src={BurgerImage} alt="Product" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-between gap-8 w-full mb-1">
                    <h3 className="text-2xl font-bold leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('category.product')}</h3>
                    <p className="text-xl font-bold leading-none" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>7 $</p>
                  </div>
                  <p className="text-lg leading-tight w-full text-left" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>1500 cal</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Section */}
        <div className="space-y-3.5">
          <h2 className="text-4xl font-bold leading-tight mb-4" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('category.all')}</h2>
          <div className={`grid ${allSectionColumns === 2 ? 'grid-cols-2 gap-6 max-w-[540px]' : 'grid-cols-3 gap-2.5'}`}>
            
            {/* Box 1 - Diagonal Yellow/White */}
            <Card
              className="relative overflow-hidden rounded-[14px] border cursor-pointer hover:shadow-md transition-shadow bg-white"
              style={{ ...theme.getStyle('greyDarkBorder'), ...boxShadowStyle }}
            >
              <CardContent className="relative p-0 w-full" style={{ height: '300px' }}>
                {/* Diagonal yellow background - top-left triangle */}
                <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
                  <div 
                    className="absolute w-full h-full"
                    style={{
                      background: 'linear-gradient(to bottom right, #FFBC0D 0%, #FFBC0D 49.9%, white 50%, white 100%)',
                      clipPath: 'polygon(0 0, 100% 0, 0 80%)'
                    }}
                  />
                </div>

                {/* New label */}
                <div className="absolute left-4 top-10 z-10">
                  <span className="text-[52px] font-extrabold leading-none" style={{ ...theme.getStyle('white'), ...theme.getStyle('fontBaloo') }}>{t('category.new')}</span>
                </div>

                {/* Burger image */}
                <div className="absolute inset-0 flex items-center justify-center z-10" style={{ marginTop: '10px' }}>
                  <img src={BurgerImage} alt="Product 1" className="w-[190px] h-[190px] object-contain drop-shadow-lg mr-10" />
                </div>

                {/* Icons on the right */}
                <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-0 z-20">
                  <img src={VeganIcon} alt="Vegan" className="w-9 h-9" />
                  <img src={Vegan2Icon} alt="Hot" className="w-12 h-12" />
                  <img src={Vegan3Icon} alt="Vegan" className="w-9 h-9" />
                </div>

                {/* Product name and calories - bottom left */}
                <div className="absolute left-4 bottom-2 z-20">
                  <p className="text-[20px] font-extrabold leading-tight mb-0" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('category.product')}</p>
                  <p className="text-[15px] text-bold" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>1500 cal</p>
                </div>

                {/* Price - bottom right */}
                <div className="absolute right-4 bottom-2 z-20">
                  <p className="text-[18px] font-semibold leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>7 $</p>
                </div>
              </CardContent>
            </Card>

            {/* Box 2 - Full Yellow */}
            <Card
              className="relative overflow-hidden rounded-[14px] border cursor-pointer hover:shadow-md transition-shadow"
              style={{ ...theme.getStyle('secondaryBg'), ...theme.getStyle('greyDarkBorder'), ...boxShadowStyle }}
            >
              <CardContent className="p-2.5 space-y-1.5">
                <div className="absolute top-7 left-1/2" style={{ transform: 'translateX(-65%)' }}>
                  <span className="text-[82px] font-black leading-none tracking-wide" style={{ ...theme.getStyle('white'), ...theme.getStyle('fontBaloo') }}>{t('category.new').toUpperCase()}</span>
                </div>

                <div className="relative w-full aspect-square rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={BurgerImage} alt="Product 2" className="w-[190px] h-[190px] object-cover mt-5" />
                </div>

                <div className="space-y-0">
                  <p className="text-[20px] font-extrabold leading-tight mb-0" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('category.product')} 2</p>
                  <p className="text-[15px] text-bold" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>1200 cal</p>
                </div>

                <div className="absolute right-4 bottom-4 z-20">
                  <p className="text-[18px] font-semibold leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>8 $</p>
                </div>
              </CardContent>
            </Card>

            {/* Box 3 - Badge New */}
            <Card
              className="relative overflow-hidden rounded-[14px] border cursor-pointer hover:shadow-md transition-shadow"
              style={{ ...theme.getStyle('whiteBg'), ...theme.getStyle('greyDarkBorder'), ...boxShadowStyle }}
            >
              <CardContent className="p-2.5 space-y-1.5">
                <div className="absolute top-2 left-4 z-10">
                  <img src={NewStarIcon} alt="New" className="w-16 h-16 object-contain" />
                </div>

                <div className="relative w-full aspect-square rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={BurgerImage} alt="Product 3" className="w-[190px] h-[190px] object-cover mt-5" />
                </div>

                <div className="space-y-0">
                  <p className="text-[20px] font-extrabold leading-tight mb-0" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('category.product')} 3</p>
                  <p className="text-[15px] text-bold" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>900 cal</p>
                </div>

                <div className="absolute right-4 bottom-4 z-20">
                  <p className="text-[18px] font-semibold leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>5 $</p>
                </div>
              </CardContent>
            </Card>

            {/* Box 4 - Ribbon New */}
            <Card
              className="relative overflow-hidden rounded-[14px] border cursor-pointer hover:shadow-md transition-shadow"
              style={{ ...theme.getStyle('whiteBg'), ...theme.getStyle('greyDarkBorder'), ...boxShadowStyle }}
            >
              <CardContent className="p-2.5 space-y-1.5">
                <div className="absolute top-0 right-0 z-10">
                  <img src={NewBadgeIcon} alt="New" className="w-28 h-28 object-contain" />
                </div>

                <div className="relative w-full aspect-square rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={BurgerImage} alt="Product 4" className="w-[190px] h-[190px] object-cover mt-5" />
                </div>

                <div className="space-y-0">
                  <p className="text-[20px] font-extrabold leading-tight mb-0" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('category.product')} 4</p>
                  <p className="text-[15px] text-bold" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>1800 cal</p>
                </div>

                <div className="absolute right-4 bottom-4 z-20">
                  <p className="text-[18px] font-semibold leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>10 $</p>
                </div>
              </CardContent>
            </Card>

            {/* Box 5 - Limited Edition - Only show in 3 columns */}
            {allSectionColumns === 3 && (
              <Card
                className="relative overflow-hidden rounded-[14px] border cursor-pointer hover:shadow-md transition-shadow"
                style={{ ...theme.getStyle('whiteBg'), ...theme.getStyle('greyDarkBorder'), ...boxShadowStyle }}
              >
              <CardContent className="p-2.5 space-y-1.5">
                <div className="absolute -mt-12 -ml-3 z-10">
                  <img src={LimitedEditionIcon} alt="Limited edition" className="w-40 h-40 object-contain" />
                </div>

                <div className="relative w-full aspect-square rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={BurgerImage} alt="Product 5" className="w-[190px] h-[190px] object-cover" />
                </div>

                <div className="space-y-0">
                  <p className="text-[20px] font-extrabold leading-tight mb-0" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('category.product')} 5</p>
                  <p className="text-[15px] text-bold" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>1100 cal</p>
                </div>

                <div className="absolute right-4 bottom-4 z-20">
                  <p className="text-[18px] font-semibold leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>6 $</p>
                </div>
              </CardContent>
              </Card>
            )}

            {/* Box 6 - Out of Stock - Only show in 3 columns */}
            {allSectionColumns === 3 && (
              <Card
                className="relative overflow-hidden rounded-[14px] border cursor-pointer hover:shadow-md transition-shadow"
                style={{ ...theme.getStyle('whiteBg'), ...theme.getStyle('greyDarkBorder'), ...boxShadowStyle }}
              >
              <CardContent className="p-2.5 space-y-1.5">
                <div className="relative w-full aspect-square rounded-lg flex items-center justify-center overflow-hidden opacity-30">
                  <img src={BurgerImage} alt="Product 6" className="w-[190px] h-[190px] object-cover -mt-8" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center mt-36">
                  <p className="text-[12px] font-semibold text-center px-1.5 leading-tight" style={{ ...theme.getStyle('error'), ...theme.getStyle('fontSerious') }}>
                    {t('category.outOfStock')}
                  </p>
                </div>

                <div className="space-y-0">
                  <p className="text-[20px] font-extrabold leading-tight mb-0" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('category.product')} 6</p>
                  <p className="text-[15px] text-bold" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>2000 cal</p>
                </div>

                <div className="absolute right-4 bottom-4 z-20">
                  <p className="text-[18px] font-semibold leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>12 $</p>
                </div>
              </CardContent>
              </Card>
            )}

          </div>
        </div>
      </div>
    </MainMenuLayout>
  )
}
