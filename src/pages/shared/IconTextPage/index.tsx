"use client"

import { useTranslation } from 'react-i18next'
// @ts-ignore
import HeaderIconTextLayout from '@/layouts/page-layouts/header-icon-text-layout'
// @ts-ignore
import { ICON_TEXT_PAGE_CONFIGS } from '@/config/iconTextPages'

interface IconTextPageProps {
    type: 'login' | 'logout' | 'feedback' | 'tip'
}

export default function IconTextPage({ type }: IconTextPageProps) {
    const { t } = useTranslation()
    
    const pageConfig = ICON_TEXT_PAGE_CONFIGS[type]

    if (!pageConfig) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">Page not found</h1>
            </div>
        )
    }

    return (
        <HeaderIconTextLayout
            icon={pageConfig.icon}
            text={t(pageConfig.textKey)}
        >
        </HeaderIconTextLayout>
    )
}
