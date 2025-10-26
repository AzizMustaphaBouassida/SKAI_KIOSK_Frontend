"use client"

import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import HeaderIconTextLayout from '../../layouts/header-icon-text-layout'
// @ts-ignore
import { useTheme } from '../../hooks/useTheme'
// @ts-ignore
import { CONFIRMATION_PAGE_CONFIGS } from '../../config/confirmationPages'

interface ConfirmationPageProps {
    type: 'logout' | 'card' | 'cash'
}

export default function ConfirmationPage({ type }: ConfirmationPageProps) {
    const theme = useTheme()
    const { t } = useTranslation()
    const navigate = useNavigate()
    const boxShadowStyle = { boxShadow: '0px 4px 4px 0px #00000040' }
    
    const pageConfig = CONFIRMATION_PAGE_CONFIGS[type]

    if (!pageConfig) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">Page not found</h1>
            </div>
        )
    }

    const handleCancel = () => {
        if (pageConfig.onCancel === 'goBack') {
            navigate(-1)
        } else {
            navigate(pageConfig.onCancel)
        }
    }

    const handleContinue = () => {
        if (typeof pageConfig.onContinue === 'string') {
            navigate(pageConfig.onContinue)
        }
        // You can add custom logic here based on the page type
    }

    return (
        <HeaderIconTextLayout
            icon={pageConfig.icon}
            text={t(pageConfig.titleKey)}
            subtitle={pageConfig.subtitleKey ? t(pageConfig.subtitleKey) : undefined}
        >
            <div className="flex justify-center items-center w-full">
                <div className="flex justify-center items-center gap-6 mt-24">
                    <button
                        className="w-[350px] h-24 text-3xl font-bold border-2 rounded-xl hover:bg-gray-50 transition-colors"
                        style={{
                            ...theme.getStyle('whiteBg'),
                            ...theme.getStyle('greyDarker'),
                            ...theme.getStyle('greyDarkerBorder'),
                            ...theme.getStyle('fontSerious'),
                            ...boxShadowStyle
                        }}
                        onClick={handleCancel}
                    >
                        {t(pageConfig.cancelKey)}
                    </button>
                    <button
                        className="w-[350px] h-24 text-3xl font-bold rounded-xl transition-colors"
                        style={{
                            ...theme.getStyle('secondaryBg'),
                            ...theme.getStyle('black'),
                            ...theme.getStyle('fontSerious'),
                            border: 'none',
                            ...boxShadowStyle
                        }}
                        onClick={handleContinue}
                    >
                        {t(pageConfig.continueKey)}
                    </button>
                </div>
            </div>
        </HeaderIconTextLayout>
    )
}
