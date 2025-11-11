"use client"

import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import HeaderIconTextLayout from '@/layouts/page-layouts/header-icon-text-layout'
// @ts-ignore
import { useTheme } from '@/app/hooks/useTheme'
import questionIcon from '@/assets/icons/question-icon.svg'

export default function LogoutConfirmationPage() {
    const theme = useTheme()
    const { t } = useTranslation()
    const navigate = useNavigate()
    const boxShadowStyle = { boxShadow: '0px 4px 4px 0px #00000040' }

    const handleCancel = () => {
        navigate(-1)
    }

    const handleContinue = () => {
        navigate('/welcome')
    }

    return (
        <HeaderIconTextLayout
            icon={questionIcon}
            text={t('logoutConfirmation.title')}
            subtitle={t('logoutConfirmation.subtitle')}
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
                        {t('logoutConfirmation.cancel')}
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
                        {t('logoutConfirmation.continue')}
                    </button>
                </div>
            </div>
        </HeaderIconTextLayout>
    )
}
