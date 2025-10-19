"use client"

import { useTranslation } from 'react-i18next'
// @ts-ignore
import HeaderTitleLayout from '../../layouts/header-title-layout'
// @ts-ignore
import { useTheme } from '../../hooks/useTheme'
import eatInImage from '../../assets/images/eatin-image.svg'
import takeawayImage from '../../assets/images/takeaway-image.svg'

export default function OrderTypePage() {
    const theme = useTheme()
    const { t } = useTranslation()

    return (
        <HeaderTitleLayout 
            title={t('orderType.title')}
        >
            <div className="flex justify-center items-start pt-16">
                <div className="grid grid-cols-2 gap-8 max-w-[1200px]">
                    {/* Eat In Card */}
                    <div 
                        className="cursor-pointer border-2 transition-colors rounded-lg"
                        style={{
                            ...theme.getStyle('whiteBg'),
                            ...theme.getStyle('greyDarkerBorder'),
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <div 
                                className="w-full h-[500px] flex items-center justify-center p-6 border-b-2"
                                style={theme.getStyle('greyDarkerBorder')}
                            >
                                <img
                                    src={eatInImage}
                                    alt="Eat In - Burger, Fries and Drink"
                                    className="w-full h-full object-contain scale-90 mt-24"
                                />
                            </div>
                            <div className="w-full py-6">
                                <h2 
                                    className="text-4xl font-semibold text-center"
                                    style={{
                                        ...theme.getStyle('greyDarker'),
                                        ...theme.getStyle('fontSerious')
                                    }}
                                >
                                    {t('orderType.eatIn')}
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Take Away Card */}
                    <div 
                        className="cursor-pointer border-2 transition-colors rounded-lg"
                        style={{
                            ...theme.getStyle('whiteBg'),
                            ...theme.getStyle('greyDarkerBorder'),
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <div 
                                className="w-full h-[500px] flex items-center justify-center p-6 border-b-2"
                                style={theme.getStyle('greyDarkerBorder')}
                            >
                                <img
                                    src={takeawayImage}
                                    alt="Take Away - McDonald's Bag"
                                    className="w-full h-full object-contain scale-100 mt-16"
                                />
                            </div>
                            <div className="w-full py-6">
                                <h2 
                                    className="text-4xl font-semibold text-center"
                                    style={{
                                        ...theme.getStyle('greyDarker'),
                                        ...theme.getStyle('fontSerious')
                                    }}
                                >
                                    {t('orderType.takeAway')}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderTitleLayout>
    )
}
