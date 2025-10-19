"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Check } from "lucide-react"
import backgroundImage from "@/assets/images/login-background.svg"
import QRCodeSVG from "../../assets/icons/qrcode.svg"
import FrenchFlag from "../../assets/icons/french.svg"
import EnglishFlag from "../../assets/icons/english.svg"
// @ts-ignore
import { useTheme } from "../../hooks/useTheme"

export default function WelcomePage() {
  const theme = useTheme()
  const { t, i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState<"french" | "english">("english")

  // Function to handle language change
  const handleLanguageChange = (language: "french" | "english") => {
    setSelectedLanguage(language)
    i18n.changeLanguage(language === "french" ? "fr" : "en")
  }

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden" style={theme.getStyle('whiteBg')}>
      {/* Top Section - Red Background with McDonald's Fries Image */}
      <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden" style={theme.getStyle('primaryBg')}>
        <div className="flex flex-col items-center justify-center max-w-full max-h-full overflow-hidden">
          <img
            src={backgroundImage}
            alt="McDonald's Fries - Celebrating 60 golden years"
            className="h-auto object-cover"
          />
        </div>
      </div>

      {/* Bottom Section - White Background with 3 Cards */}
      <div className="h-fit w-full min-h-[35%] shrink-0 px-12 py-8 flex items-center justify-center" style={theme.getStyle('whiteBg')}>
        <div className="w-full max-w-[1800px] p-6 grid grid-cols-2 gap-8 h-full">
          {/* Left Card - Yellow Member QR Code Card */}
          <Card className="rounded-3xl p-8 flex flex-col items-center justify-center border-none shadow-xl h-[550px]" style={theme.getStyle('secondaryBg')}>
            <h2 className="text-5xl font-bold mb-2 mt-10 text-center" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>
              {t('welcome.member')}
            </h2>
            <p className="text-3xl mb-2 text-center max-w-[400px] min-h-[90px] flex items-center" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontSerious') }}>
              {t('welcome.memberDescription')}
            </p>

            {/* QR Code */}
            <div className="p-2" style={theme.getStyle('secondaryBg')}>
              <div className="w-80 h-80 flex items-center justify-center" style={theme.getStyle('secondaryBg')}>
                <img src={QRCodeSVG} alt="QR Code" className="w-full h-full" />
              </div>
            </div>
          </Card>

          {/* Right Column - Order Now and Language Cards Stacked */}
          <div className="flex flex-col gap-6 h-full">
            {/* Order Now Card */}
            <Card 
              className="h-[260px] rounded-3xl p-8 flex flex-col items-center justify-center border-2 shadow-xl hover:shadow-2xl transition-all cursor-pointer" 
              style={{ 
                ...theme.getStyle('whiteBg'), 
                borderColor: theme.colors.greyDark 
              }}
            >
              <h2 className="text-5xl font-bold mb-2 text-center min-h-[60px] flex items-center" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>
                {t('welcome.orderNow')}
              </h2>
              <p className="text-2xl text-center max-w-[350px] min-h-[60px] flex items-center" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>
                {t('welcome.orderDescription')}
              </p>
            </Card>

            {/* Preferred Language Card */}
            <Card 
              className="h-[260px] rounded-3xl p-6 border-2 shadow-xl" 
              style={{ 
                ...theme.getStyle('whiteBg'), 
                borderColor: theme.colors.greyDark 
              }}
            >
              <h3 className="text-4xl font-bold mb-4 text-center leading-tight min-h-[50px] flex items-center justify-center" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>
                {t('welcome.preferredLanguage')}
              </h3>

              <div className="grid grid-cols-2 gap-4 flex-1">
                {/* French Option */}
                <Button
                  variant="outline"
                  className="h-[130px] rounded-2xl flex flex-col items-center justify-center gap-2 border-2 transition-all relative p-4"
                  style={{
                    borderColor: selectedLanguage === "french" ? theme.colors.success : theme.colors.greyDark,
                    backgroundColor: selectedLanguage === "french" ? `${theme.colors.success}10` : theme.colors.white
                  }}
                  onClick={() => handleLanguageChange("french")}
                >
                  {/* Checkmark Icon */}
                  {selectedLanguage === "french" && (
                    <div className="absolute -top-3 -right-3 w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.success }}>
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
                  <img src={FrenchFlag} alt="French Flag" className="w-16 h-12 flex-shrink-0" />
                  <span className="text-2xl font-semibold text-center" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontBranded') }}>
                    {t('welcome.french')}
                  </span>
                </Button>

                {/* English Option */}
                <Button
                  variant="outline"
                  className="h-[130px] rounded-2xl flex flex-col items-center justify-center gap-2 border-2 transition-all relative p-4"
                  style={{
                    borderColor: selectedLanguage === "english" ? theme.colors.success : theme.colors.greyDark,
                    backgroundColor: selectedLanguage === "english" ? `${theme.colors.success}10` : theme.colors.white
                  }}
                  onClick={() => handleLanguageChange("english")}
                >
                  {/* Checkmark Icon */}
                  {selectedLanguage === "english" && (
                    <div className="absolute -top-3 -right-3 w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.success }}>
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
                  <img src={EnglishFlag} alt="English Flag" className="w-16 h-12 flex-shrink-0" />
                  <span className="text-2xl font-semibold text-center" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontBranded') }}>
                    {t('welcome.english')}
                  </span>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
