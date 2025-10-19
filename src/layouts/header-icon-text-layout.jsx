import { useTheme } from '../hooks/useTheme'
import HeaderLayout from './header-layout'

export default function HeaderIconTextLayout({
    icon,
    text,
    subtitle,
    children
}) {
    const theme = useTheme()

    return (
        <div className="relative h-screen flex flex-col" style={theme.getStyle('whiteBg')}>
            {/* Header Layout */}
            <div className="relative shrink-0">
                <HeaderLayout showTitle={false} />
            </div>

            {/* Content Section - Icon, Text, and Subtitle */}
            <div className="flex-1 flex flex-col items-center justify-start pt-12 px-35">
                {/* Icon */}
                {icon && (
                    <div className="mb-8">
                        <img
                            src={icon}
                            alt="Icon"
                            className="w-64 h-64 object-contain"
                        />
                    </div>
                )}

                {/* Main Text */}
                {text && (
                    <h1
                        className="text-6xl font-bold mb-6 text-center leading-tight"
                        style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded'), lineHeight: '1.5' }}
                    >
                        {text}
                    </h1>
                )}

                {/* Subtitle */}
                {subtitle && (
                    <p
                        className="text-3xl text-center max-w-3xl leading-relaxed"
                        style={{ ...theme.getStyle('black'), ...theme.getStyle('fontSerious'), lineHeight: '1.5' }}
                    >
                        {subtitle}
                    </p>
                )}

                {/* Children Content */}
                {children && (
                    <div className="w-full py-12">
                        {children}
                    </div>
                )}
            </div>
        </div>
    )
}
