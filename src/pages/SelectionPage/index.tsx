"use client"

import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import HeaderTitleLayout from '../../layouts/header-title-layout'
// @ts-ignore
import { useTheme } from '../../hooks/useTheme'
// @ts-ignore
import { SELECTION_PAGE_CONFIGS } from '../../config/selectionPages'

interface SelectionOption {
    image: string
    labelKey: string
    priceKey?: string
    imageScale: string
    onSelect: string
}

interface SelectionPageProps {
    type: 'order-type' | 'make-trio'
}

export default function SelectionPage({ type }: SelectionPageProps) {
    const theme = useTheme()
    const { t } = useTranslation()
    const navigate = useNavigate()
    
    const pageConfig = SELECTION_PAGE_CONFIGS[type]

    if (!pageConfig) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">Page not found</h1>
            </div>
        )
    }

    const handleOptionClick = (onSelect: string) => {
        navigate(onSelect)
    }

    return (
        <HeaderTitleLayout 
            title={t(pageConfig.titleKey)}
        >
            <div className="flex flex-col items-center pt-16">
                <div className="grid grid-cols-2 gap-8 max-w-[1200px]">
                    {pageConfig.options.map((option: SelectionOption, index: number) => (
                        <div 
                            key={index}
                            className="cursor-pointer border-2 transition-colors rounded-lg"
                            style={{
                                ...theme.getStyle('whiteBg'),
                                ...theme.getStyle('greyDarkerBorder'),
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                            }}
                            onClick={() => handleOptionClick(option.onSelect)}
                        >
                            <div className="flex flex-col items-center">
                                <div 
                                    className="w-full h-[500px] flex items-center justify-center p-6 border-b-2 relative"
                                    style={theme.getStyle('greyDarkerBorder')}
                                >
                                    <img
                                        src={option.image}
                                        alt={t(option.labelKey)}
                                        className={`w-full h-full object-contain ${option.imageScale}`}
                                    />
                                    {option.priceKey && (
                                        <div 
                                            className="absolute bottom-6 right-6 text-3xl font-bold"
                                            style={{
                                                ...theme.getStyle('black'),
                                                ...theme.getStyle('fontSerious')
                                            }}
                                        >
                                            {t(option.priceKey)}
                                        </div>
                                    )}
                                </div>
                                <div className="w-full py-6">
                                    <h2 
                                        className="text-4xl font-semibold text-center"
                                        style={{
                                            ...theme.getStyle('greyDarker'),
                                            ...theme.getStyle('fontSerious')
                                        }}
                                    >
                                        {t(option.labelKey)}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Go Back Button - Only shown for make-trio page */}
                {pageConfig.showBackButton && (
                    <button
                        className="w-full max-w-[1200px] h-24 mt-12 text-3xl font-semibold border-2 rounded-lg hover:bg-gray-50 transition-colors"
                        style={{
                            ...theme.getStyle('whiteBg'),
                            ...theme.getStyle('greyDarker'),
                            ...theme.getStyle('greyDarkerBorder'),
                            ...theme.getStyle('fontSerious')
                        }}
                        onClick={() => navigate(-1)}
                    >
                        {t(pageConfig.backButtonLabelKey)}
                    </button>
                )}
            </div>
        </HeaderTitleLayout>
    )
}
