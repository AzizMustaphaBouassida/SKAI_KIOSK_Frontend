import { useTheme } from '../hooks/useTheme';
import homeIcon from '../assets/icons/home.svg';
import offreIcon from '../assets/icons/offre.svg';
import exampleIcon from '../assets/icons/example.svg';
import SigninBoxLayout from './signin-box-layout';
import { useState, useRef } from 'react';

export default function SidebarLayout({ children, activePage }) {
    const theme = useTheme();
    const [isSignedIn, setIsSignedIn] = useState(false);
    const scrollRef = useRef(null);

    const handleLogin = () => {
        setIsSignedIn(true);
    };

    const handleLogout = () => {
        setIsSignedIn(false);
    };

    const menuCategories = [
        { name: 'Drinks', icon: exampleIcon },
        { name: 'Chicken & Fish', icon: exampleIcon },
        { name: 'Burgers', icon: exampleIcon },
        { name: 'Breakfast', icon: exampleIcon },
        { name: 'Sweets & Treats', icon: exampleIcon },
    ];

    const scrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: -120, behavior: 'smooth' });
        }
    };

    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: 120, behavior: 'smooth' });
        }
    };

    return (
        <aside className="absolute left-4 top-0 w-full flex flex-col py-4 px-2 h-full" style={theme.getStyle('whiteBg')}>
            <div className="h-full flex flex-col">
                <button
                    className={`w-full flex flex-row items-center gap-4 px-4 py-10 mb-2 rounded-lg transition-all duration-150 ${activePage === 'Mc Selects' ? 'border-2 shadow-[0_2px_6px_rgba(0,0,0,0.25)]' : 'shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
                        }`}
                    style={{
                        borderColor: activePage === 'Mc Selects' ? theme.colors.primary : 'transparent',
                        ...theme.getStyle('whiteBg'),
                        ...theme.getStyle('fontBranded')
                    }}
                    onMouseEnter={(e) => activePage !== 'Mc Selects' && (e.currentTarget.style.backgroundColor = theme.colors.greyLight)}
                    onMouseLeave={(e) => activePage !== 'Mc Selects' && (e.currentTarget.style.backgroundColor = theme.colors.white)}
                >
                    <img src={homeIcon} alt="Home" className="w-16 h-16 flex-shrink-0" />
                    <span className="text-2xl font-bold leading-tight break-words" style={theme.getStyle('black')}>
                        Mc Selects
                    </span>
                </button>

                {/* Offers */}
                <button
                    className={`w-full flex flex-row items-center gap-4 px-4 py-10 mb-2 rounded-lg transition-all duration-150 ${activePage === 'Offers' ? 'border-2 shadow-[0_2px_6px_rgba(0,0,0,0.25)]' : 'shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
                        }`}
                    style={{
                        borderColor: activePage === 'Offers' ? theme.colors.primary : 'transparent',
                        ...theme.getStyle('whiteBg'),
                        ...theme.getStyle('fontBranded')
                    }}
                    onMouseEnter={(e) => activePage !== 'Offers' && (e.currentTarget.style.backgroundColor = theme.colors.greyLight)}
                    onMouseLeave={(e) => activePage !== 'Offers' && (e.currentTarget.style.backgroundColor = theme.colors.white)}
                >
                    <img src={offreIcon} alt="Offers" className="w-16 h-16 flex-shrink-0" />
                    <span className="text-3xl font-bold break-words" style={theme.getStyle('black')}>
                        Offers
                    </span>
                </button>
                {/* Scroll Up Button */}
                <div className="flex-shrink-0 mb-2">
                    <button
                        onClick={scrollUp}
                        className="flex items-center justify-center w-10 h-5 mx-auto rounded-full transition-colors duration-150"
                        style={theme.getStyle('greyDarkBg')}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.black}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.colors.greyDark}
                    >
                        <svg
                            className="w-4 h-4"
                            style={theme.getStyle('white')}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable Menu Categories - Vertical Carousel */}
                <div
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div className="flex flex-col gap-2">
                        {menuCategories.map((item, idx) => (
                            <button
                                key={idx}
                                className={`w-full flex flex-row items-center gap-4 px-4 py-10 rounded-lg transition-all duration-150 ${activePage === item.name
                                    ? 'border-2 shadow-[0_2px_6px_rgba(0,0,0,0.25)]'
                                    : 'shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:shadow-[0_3px_8px_rgba(0,0,0,0.35)]'
                                    }`}
                                style={{
                                    borderColor: activePage === item.name ? theme.colors.primary : 'transparent',
                                    ...theme.getStyle('whiteBg'),
                                    ...theme.getStyle('fontBranded'),
                                    minHeight: '80px',
                                }}
                                onMouseEnter={(e) => activePage !== item.name && (e.currentTarget.style.backgroundColor = theme.colors.greyLight)}
                                onMouseLeave={(e) => activePage !== item.name && (e.currentTarget.style.backgroundColor = theme.colors.white)}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-16 h-16 object-contain flex-shrink-0"
                                />
                                <span className="text-3xl font-bold leading-tight text-left break-words flex-1" style={theme.getStyle('black')}>
                                    {item.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Scroll Down Button */}
                <div className="flex-shrink-0 mt-2 mb-2">
                    <button
                        onClick={scrollDown}
                        className="flex items-center justify-center w-10 h-5 mx-auto rounded-full transition-colors duration-150"
                        style={theme.getStyle('secondaryBg')}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.primary}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.colors.secondary}
                    >
                        <svg
                            className="w-4 h-4"
                            style={theme.getStyle('black')}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Signin Box Layout - Bottom Left */}
            <div className="w-full p-4">
                <SigninBoxLayout
                    showQRCode={!isSignedIn}
                    username="Mr.Houssem"
                    onLogout={handleLogout}
                />
            </div>
        </aside >
    );
}
