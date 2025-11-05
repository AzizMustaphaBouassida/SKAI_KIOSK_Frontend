import trashIcon from '../../assets/icons/trash-icon.svg';
// @ts-ignore
import { useTheme } from '@/app/hooks/useTheme';
import { useTranslation } from 'react-i18next';

export default function FooterLayout() {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <footer
            className="relative px-8 py-6"
            style={theme.getStyle('greyLightBg')}
        >
            <div className="flex items-center justify-between gap-4">
                <div className="rounded-xl px-6 py-3 shadow-sm"
                    style={theme.getStyle('whiteBg')}
                >
                    <button
                        className="flex items-center gap-3 font-medium text-lg hover:opacity-80 transition-opacity"
                        style={{
                            ...theme.getStyle('black'),
                            ...theme.getStyle('fontBranded')
                        }}
                    >
                        <span>{t('layouts.cancel')}</span>
                        <img
                            src={trashIcon}
                            alt="Trash Icon"
                            className="w-7 h-7"
                        />
                    </button>
                </div>

                <p
                    className="flex-1 text-left text-[14px] leading-relaxed px-2"
                    style={{
                        ...theme.getStyle('black'),
                        ...theme.getStyle('fontSerious')
                    }}
                >
                    {t('layouts.calorieInfo')}
                </p>

                <button
                    className="font-bold text-xl hover:opacity-80 transition-opacity whitespace-nowrap"
                    style={{
                        ...theme.getStyle('black'),
                        ...theme.getStyle('fontBranded')
                    }}
                >
                    {t('layouts.legal')}
                </button>
            </div>
        </footer>
    )
}
