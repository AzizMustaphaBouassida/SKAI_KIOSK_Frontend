"use client"
import { useTheme } from '../hooks/useTheme';
import qrcodeIcon from '../assets/icons/qrcode.svg';

export default function SigninBoxLayout({ showQRCode = true, username = "Mr.Houssem", onLogout }) {
    const theme = useTheme();
    if (showQRCode) {
        return (
            <div className="w-full p-2">
                <div
                    className="relative rounded-2xl p-4 flex flex-col items-center"
                    style={{
                        background: `linear-gradient(to bottom, ${theme.colors.secondary}, ${theme.colors.primary}, ${theme.colors.error})`,
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    {/* QR Code Image (no white box) */}
                    <img
                        src={qrcodeIcon}
                        alt="QR Code"
                        className="w-40 h-40 object-contain mb-3"
                    />

                    {/* Text Section */}
                    <div className="text-center space-y-1">
                        <p
                            className="text-sm font-normal"
                            style={{
                                ...theme.getStyle('white'),
                                ...theme.getStyle('fontSerious')
                            }}
                        >
                            tap to scan the QR-code
                        </p>
                        <p
                            className="text-lg font-bold"
                            style={{
                                ...theme.getStyle('white'),
                                ...theme.getStyle('fontBranded')
                            }}
                        >
                            Member ?
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full">
            <div
                className="relative rounded-2xl p-4 flex flex-col justify-between items-center min-h-[280px]"
                style={{
                    ...theme.getStyle('whiteBg'),
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2)'
                }}
            >
                {/* Spacer for top */}
                <div></div>

                {/* User Profile Section - Centered */}
                <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={theme.getStyle('greyLightBg')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>
                    <span
                        className="text-lg font-bold text-center"
                        style={{
                            ...theme.getStyle('black'),
                            ...theme.getStyle('fontBranded')
                        }}
                    >
                        {username}
                    </span>
                </div>

                {/* Log Out Button - Bottom */}
                <button
                    onClick={onLogout}
                    className="w-full font-bold text-base py-3 px-4 rounded-lg transition-colors hover:opacity-80"
                    style={{
                        ...theme.getStyle('secondaryBg'),
                        ...theme.getStyle('black'),
                        ...theme.getStyle('fontBranded')
                    }}
                >
                    Log Out
                </button>
            </div>
        </div>
    )
}
