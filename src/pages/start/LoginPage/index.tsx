"use client"

import { useTranslation } from "react-i18next"
// @ts-ignore
import HeaderTitleLayout from "@/layouts/page-layouts/header-title-layout"
// @ts-ignore
import { useTheme } from "@/app/hooks/useTheme"
// @ts-ignore
import { THEME_COLORS } from "@/config/theme"
import InfoIconSVG from "@/assets/icons/info-icon.svg"
import { useEffect, useRef } from "react"
import QRCode from "qrcode"

export default function SignIn() {
  const theme = useTheme()
  const { t } = useTranslation()
  const qrCodeRef = useRef<HTMLCanvasElement>(null)
  const boxShadowStyle = { boxShadow: '0px 4px 4px 0px #00000040' }
  
  // Put your login URL here
  const loginUrl = "https://www.google.com/"
  
  const handleSkipLogin = () => {
    console.log("Skip login clicked")
  }
  
  useEffect(() => {
    if (qrCodeRef.current) {
      QRCode.toCanvas(qrCodeRef.current, loginUrl, {
        width: 500,
        margin: 2,
        color: {
          dark: THEME_COLORS.black,
          light: THEME_COLORS.white
        }
      }, (error) => {
        if (error) console.error('Error generating QR code:', error)
      })
    }
  }, [loginUrl])

  return (
    <div className="flex flex-col" style={theme.getStyle('whiteBg')}>
      <HeaderTitleLayout title={t('login.title')} subtitle={t('login.subtitle')} />
      
      {/* Page Content */}
      <main className="flex flex-col items-center px-8 pb-8">
        {/* Yellow QR Code Section */}
        <div 
          className="rounded-3xl pt-24 pb-8 px-20 w-[70vw] max-w-xl mb-12 mt-12 flex flex-col items-center justify-center"
          style={{
            ...theme.getStyle('secondaryBg'),
            ...boxShadowStyle
          }}
        >
          <div className="flex justify-center -mt-10">
            <div className="rounded-full" style={theme.getStyle('secondaryBg')}>
              <img src={InfoIconSVG} alt="Info" className="w-18 h-18" />
            </div>
          </div>

          <div 
            className="rounded-3xl p-6 flex items-center justify-center"
            style={theme.getStyle('secondaryBg')}
          >
            <div className="w-[500px] h-[500px] flex items-center justify-center" style={theme.getStyle('secondaryBg')}>
              <canvas ref={qrCodeRef} className="max-w-full max-h-full" />
            </div>
          </div>
        </div>

        <button
          onClick={handleSkipLogin}
          className="w-[70vw] max-w-xl h-24 text-4xl font-semibold border-2 rounded-xl hover:bg-gray-50"
          style={{
            ...theme.getStyle('whiteBg'),
            ...theme.getStyle('greyDarker'),
            ...theme.getStyle('greyDarkerBorder'),
            ...theme.getStyle('fontSerious'),
            ...boxShadowStyle
          }}
        >
          {t('login.skipLogin')}
        </button>
      </main>
    </div>
  )
}
