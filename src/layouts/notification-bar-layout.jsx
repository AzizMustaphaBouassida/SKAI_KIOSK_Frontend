import { useTheme } from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import addedToCartIcon from '../assets/icons/added_to_cart_sac_icon.svg';

export default function NotificationLayout({ message, itemName = 'item', show = true }) {
    const theme = useTheme();
    const { t } = useTranslation();
    const displayMessage = message || t('layouts.addedToCart', { item: itemName });
    if (!show) return null

    return (
        <div className="w-full h-12 rounded-lg px-6 py-4 flex items-center justify-center gap-4" style={theme.getStyle('successBg')}>
            <img src={addedToCartIcon} alt="Added to Cart" className="w-8 h-8 flex-shrink-0" />
            <span className="text-xl font-semibold" style={{...theme.getStyle('white'), ...theme.getStyle('fontBranded')}}>{displayMessage}</span>
        </div>
    )
}
