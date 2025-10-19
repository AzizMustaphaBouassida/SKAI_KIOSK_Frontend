import trashIcon from '../assets/icons/trash-icon.svg';
import { useTheme } from '../hooks/useTheme';

export default function FooterLayout() {
    const theme = useTheme();

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
                        <span>Cancel</span>
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
                    Caloric requirements vary by age and activity level, ranging from approximately 1,000–1,800 kcal daily for
                    children,1,800–
                    2,800 kcal for adolescents and 1,600–3,000 kcal for adults, with differences based on gender and lifestyle
                </p>

                <button
                    className="font-bold text-xl hover:opacity-80 transition-opacity whitespace-nowrap"
                    style={{
                        ...theme.getStyle('black'),
                        ...theme.getStyle('fontBranded')
                    }}
                >
                    Legal
                </button>
            </div>
        </footer>
    )
}
