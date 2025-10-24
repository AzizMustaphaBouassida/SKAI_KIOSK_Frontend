import { useTheme } from '../hooks/useTheme';
import addedToCartIcon from '../assets/icons/added_to_cart_sac_icon.svg';

export default function NotificationLayout({ message = "Added to Cart : Offer name", show = true }) {
    const theme = useTheme();
    if (!show) return null

    return (
        <div className="w-full h-12 rounded-lg px-6 py-4 flex items-center justify-center gap-4" style={theme.getStyle('successBg')}>
            <img src={addedToCartIcon} alt="Added to Cart" className="w-8 h-8 flex-shrink-0" />
            <span className="text-xl font-semibold" style={{...theme.getStyle('white'), ...theme.getStyle('fontBranded')}}>{message}</span>
        </div>
    )
}
