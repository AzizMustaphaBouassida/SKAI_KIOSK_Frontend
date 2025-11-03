import { useTranslation } from 'react-i18next';
// @ts-ignore
import { useTheme } from '@/app/hooks/useTheme';
// @ts-ignore
import Logo from '../components/Logo';
import { ReactNode } from 'react';

interface HeaderLayoutProps {
    title?: string;
    showTitle?: boolean;
    children?: ReactNode;
}

export default function HeaderLayout({ title, showTitle = false, children }: HeaderLayoutProps) {
    const theme = useTheme();
    const { i18n } = useTranslation();

    const currentLanguage = i18n.resolvedLanguage || i18n.language || 'en';
    const normalizedLanguage = currentLanguage.split('-')[0];

    const isEnglish = normalizedLanguage === 'en';
    const isFrench = normalizedLanguage === 'fr';

    const handleLanguageChange = (language: string) => {
        if (normalizedLanguage !== language) {
            i18n.changeLanguage(language);
        }
    };

    return (
        <div>
            {/* Secondary color accent bar */}
            <div className="w-full h-10" style={theme.getStyle('secondaryBg')} />

            {/* Header section */}
            <header className="w-full" style={theme.getStyle('whiteBg')}>
                <div className="flex items-center justify-between px-4">
                    <div className="flex items-center gap-8">
                        <Logo className="w-36 h-36 ml-16 mt-16" />
                        {showTitle && title && (
                            <h1
                                className="text-6xl font-bold mt-28 ml-8"
                                style={{
                                    ...theme.getStyle('black'),
                                    ...theme.getStyle('fontBranded')
                                }}
                            >
                                {title}
                            </h1>
                        )}
                    </div>

                    <div className="flex items-center gap-2 text-4xl mr-8 -mt-8">
                        <button
                            type="button"
                            onClick={() => handleLanguageChange('en')}
                            className={`uppercase px-2 py-1 transition-colors focus:outline-none cursor-pointer ${isEnglish ? 'font-bold' : 'font-medium'}`}
                            style={{
                                ...(isEnglish ? theme.getStyle('primary') : theme.getStyle('greyDarker')),
                                backgroundColor: 'transparent',
                                border: 'none'
                            }}
                            aria-pressed={isEnglish}
                        >
                            EN
                        </button>
                        <span style={theme.getStyle('greyDarker')}>|</span>
                        <button
                            type="button"
                            onClick={() => handleLanguageChange('fr')}
                            className={`uppercase px-2 py-1 transition-colors focus:outline-none cursor-pointer ${isFrench ? 'font-bold' : 'font-medium'}`}
                            style={{
                                ...(isFrench ? theme.getStyle('primary') : theme.getStyle('greyDarker')),
                                backgroundColor: 'transparent',
                                border: 'none'
                            }}
                            aria-pressed={isFrench}
                        >
                            FR
                        </button>
                    </div>
                </div>
            </header>

            {/* Main content area */}
            {children && (
                <main className="w-full h-[1850px] p-16 absolute top-20 left-0">
                    {children}
                </main>
            )}
        </div>
    )
}
