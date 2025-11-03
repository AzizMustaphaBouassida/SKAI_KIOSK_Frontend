// @ts-ignore
import { useTheme } from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import sacCheckoutIcon from '../assets/icons/sac-checkout-icon.svg';
import takeAwayIcon from '../assets/icons/take_away-icon.svg';
import eatInIcon from '../assets/icons/eat_in-icon.svg';

interface CheckoutBarLayoutProps {
    itemCount?: number;
    totalPrice?: number;
    orderType?: "takeaway" | "eatin";
}

export default function CheckoutBarLayout({
    itemCount = 0,
    totalPrice = 0.0,
    orderType = "takeaway",
}: CheckoutBarLayoutProps) {
    const theme = useTheme();
    const { t } = useTranslation();
    
    return (
        <div className="w-full border-t px-6 py-8" style={{ ...theme.getStyle('whiteBg'), ...theme.getStyle('greyLightBorder') }}>
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        {orderType === "takeaway" ? (
                            <img src={takeAwayIcon} alt="Take Away" className="w-14 h-14" />
                        ) : (
                            <img src={eatInIcon} alt="Eat In" className="w-14 h-14" />
                        )}

                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center border-2" style={{ ...theme.getStyle('errorBg'), ...theme.getStyle('whiteBorder') }}>
                            <span className="text-sm font-bold" style={{ ...theme.getStyle('white'), ...theme.getStyle('fontBranded') }}>{itemCount}</span>
                        </div>
                    </div>
                    <span className="text-3xl font-bold tracking-tight mt-4" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{totalPrice.toFixed(2)}$</span>
                </div>

                <button
                    className="font-semibold rounded-2xl flex items-center shadow-sm hover:opacity-80 transition-opacity overflow-hidden"
                    style={{
                        ...theme.getStyle('fontBranded')
                    }}
                >
                    <div
                        className="px-6 py-5.5 flex items-center justify-center"
                        style={theme.getStyle('greyDarkBg')}
                    >
                        <img
                            src={sacCheckoutIcon}
                            alt="Checkout"
                            className="w-10 h-10"
                            style={{
                                filter: 'brightness(0) saturate(100%) invert(27%) sepia(8%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(86%)',
                                opacity: 0.7
                            }}
                        />
                    </div>

                    <div
                        className="px-10 py-6 flex items-center justify-center"
                        style={theme.getStyle('greyLightBg')}
                    >
                        <span className="text-3xl" style={theme.getStyle('greyDarker')}>{t('layouts.checkout')}</span>
                    </div>
                </button>
            </div>
        </div>
    )
}
