import { useTheme } from '../hooks/useTheme'
import HeaderLayout from './header-layout'

export default function HeaderTitleLayout({ title, subtitle, children }) {
    const theme = useTheme()

    return (
        <>
            <HeaderLayout showTitle={false} />

            <div className="flex flex-col items-center justify-start pt-30 px-8">

                {title && (
                    <h1
                        className="text-6xl font-bold mb-4 text-center"
                        style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}
                    >
                        {title}
                    </h1>
                )}

                {subtitle && (
                    <p
                        className="text-3xl text-center mb-8"
                        style={{ ...theme.getStyle('black'), ...theme.getStyle('fontSerious') }}
                    >
                        {subtitle}
                    </p>
                )}
            </div>

            {children && (
                <div className="max-w-6xl mx-auto px-20 py-12">
                    {children}
                </div>
            )}
        </>
    )
}
