"use client"
import { useTheme } from '../hooks/useTheme';
import guestIcon from '../assets/icons/guest-icon.svg';

export default function SigninBoxLayout({ isLoggedIn = true }) {
    const theme = useTheme();

    const displayName = isLoggedIn ? "First Name" : "Guest";
    const buttonText = isLoggedIn ? "Log Out" : "Sign In";
    const buttonStyle = isLoggedIn
        ? { ...theme.getStyle('secondaryBg'), ...theme.getStyle('black') }
        : { ...theme.getStyle('primaryBg'), ...theme.getStyle('white') };

    return (
        <div className="w-full">
            <div
                className="relative rounded-2xl p-2 flex flex-col justify-between items-center min-h-[220px]"
                style={{
                    ...theme.getStyle('whiteBg'),
                }}
            >

                <div className="flex flex-col items-center gap-1 mt-4">
                    <div className="rounded-full flex items-center justify-center" style={theme.getStyle('whiteBg')}>
                        <img
                            src={guestIcon}
                            alt="Guest Icon"
                            className="w-20 h-20 object-contain"
                        />
                    </div>
                    <span
                        className="text-2xl font-bold text-center"
                        style={{
                            ...theme.getStyle('black'),
                            ...theme.getStyle('fontBranded')
                        }}
                    >
                        {displayName}
                    </span>
                </div>

                <button
                    className="w-full font-bold text-2xl py-3 px-4 rounded-lg pt-3"
                    style={{
                        ...buttonStyle,
                        ...theme.getStyle('fontBranded')
                    }}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    )
}
