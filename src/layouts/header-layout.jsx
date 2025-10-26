import { useTheme } from '../hooks/useTheme';
import Logo from '../components/Logo';

export default function HeaderLayout({ title, showTitle = false, children }) {
    const theme = useTheme();

    return (
        <div>
            {/* Secondary color accent bar */}
            <div className="w-full h-10" style={theme.getStyle('secondaryBg')} />

            {/* Header section */}
            <header className="w-full" style={theme.getStyle('whiteBg')}>
                <div className="flex items-center justify-between px-4 py-3">
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

                    <div className="flex items-center gap-2 text-3xl font-medium mr-8 -mt-8">
                        <span className="font-bold" style={theme.getStyle('primary')}>EN</span>
                        <span style={theme.getStyle('greyDarker')}>|</span>
                        <span style={theme.getStyle('greyDarker')}>FR</span>
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
