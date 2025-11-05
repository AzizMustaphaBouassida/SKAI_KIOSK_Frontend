"use client"

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import HeaderIconTextLayout from '@/layouts/page-layouts/header-icon-text-layout'
// @ts-ignore
import { useTheme } from '@/app/hooks/useTheme'
import questionIcon from '@/assets/icons/question-icon.svg'

export default function ContinueOrderPage() {
    const theme = useTheme()
    const { t } = useTranslation()
    const [seconds, setSeconds] = useState(15)
    const boxShadowStyle = { boxShadow: '0px 4px 4px 0px #00000040' }

    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => setSeconds(seconds - 1), 1000)
            return () => clearTimeout(timer)
        }
    }, [seconds])

    return (
        <HeaderIconTextLayout
            icon={questionIcon}
            text={t('continueOrder.title')}
            subtitle={t('continueOrder.subtitle')}
        >
            {/* Countdown Timer */}
            <div className="flex flex-col items-center mt-16">
                <div className="relative w-24 h-24 flex items-center justify-center">
                    {/* Dots Spinner */}
                    <div className="absolute w-full h-full">
                        {[...Array(12)].map((_, index) => {
                            const angle = (index * 30) * (Math.PI / 180)
                            const x = 50 + 40 * Math.cos(angle)
                            const y = 50 + 40 * Math.sin(angle)
                            const isActive = index < Math.ceil((1 - seconds / 15) * 12)
                            
                            return (
                                <div
                                    key={index}
                                    className="absolute rounded-full transition-all duration-300"
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        left: `${x}%`,
                                        top: `${y}%`,
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor: isActive 
                                            ? theme.getStyle('greyDarker').color 
                                            : theme.getStyle('greyLight').backgroundColor,
                                    }}
                                />
                            )
                        })}
                    </div>
                    {/* Countdown Number */}
                    <span 
                        className="text-5xl font-bold z-10"
                        style={{
                            ...theme.getStyle('greyDarker'),
                            ...theme.getStyle('fontSerious')
                        }}
                    >
                        {seconds}
                    </span>
                </div>
                <button
                    className="w-[570px] h-26 text-3xl font-bold rounded-xl transition-colors mt-20"
                    style={{
                        ...theme.getStyle('secondaryBg'),
                        ...theme.getStyle('black'),
                        ...theme.getStyle('fontSerious'),
                        border: 'none',
                        ...boxShadowStyle
                    }}
                >
                    {t('continueOrder.continue')}
                </button>
            </div>
            
        </HeaderIconTextLayout>
    )
}
