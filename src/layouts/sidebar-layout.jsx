import { useTheme } from '../hooks/useTheme';
import homeIcon from '../assets/icons/home.svg';
import offreIcon from '../assets/icons/offre.svg';
import exampleIcon from '../assets/images/trio-image.svg';
import SigninBoxLayout from './signin-box-layout';
import { useState, useRef } from 'react';

export default function SidebarLayout({ activePage: initialPage, isLoggedIn = false }) {
    const theme = useTheme();
    const scrollContainerRef = useRef(null);
    const [activePage, setActivePage] = useState(initialPage || 'Home');
    const cardShadowStyle = { boxShadow: "0px 2px 4px #00000040" };

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 160;
            scrollContainerRef.current.scrollBy({
                top: direction === 'down' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const menuCategories = [
        { name: 'Drinks', icon: exampleIcon },
        { name: 'Chicken & Fish', icon: exampleIcon },
        { name: 'Burgers', icon: exampleIcon },
        { name: 'Breakfast', icon: exampleIcon },
        { name: 'Sweets & Treats', icon: exampleIcon },
        { name: 'Happy meal', icon: exampleIcon },
        { name: 'Test', icon: exampleIcon },
    ];

    const renderMenuItem = (name, icon, isActive, textSize = "text-3xl", isCompact = false) => {
        return (
            <button
                onClick={() => setActivePage(name)}
                className={`w-full flex items-center gap-4 px-4 ${isCompact ? 'py-7' : 'py-10'} rounded-lg last:mb-1 transition-all outline-none border ${isActive ? '' : 'transparent'
                    }`}
                style={{
                    backgroundColor: theme.colors.white,
                    borderColor: isActive ? theme.colors.primary : 'transparent',
                    borderWidth: isActive ? '3px' : undefined,
                    ...cardShadowStyle,
                    ...theme.getStyle('fontBranded')
                }}
            >
                <img src={icon} alt={name} className="w-13 h-13 flex-shrink-0" />
                <span
                    className={`${textSize} font-bold break-words mt-3`}
                    style={theme.getStyle('black')}
                >
                    {name}
                </span>
            </button>
        );
    };


    const renderScrollButton = (direction, onClick) => {
        const isUp = direction === 'up';
        const bgColor = isUp ? theme.colors.greyDark : theme.colors.secondary;
        const buttonExtraClasses = isUp ? '' : 'mt-3';
        const iconExtraClasses = isUp ? '' : ' translate-y-[2px]';

        return (
            <button
                onClick={onClick}
                className={`flex items-center justify-center w-18 h-8 rounded-full transition-all shadow-md active:scale-95 mx-auto${` ${buttonExtraClasses}`}`}
                style={{ backgroundColor: bgColor }}
            >
                <svg
                    className={`w-6 h-6${iconExtraClasses}`}
                    style={theme.getStyle('black')}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d={isUp ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                </svg>
            </button>
        );
    };

    return (
        <aside className="w-full h-full flex flex-col py-4 px-2" style={theme.getStyle('whiteBg')}>
            <div className="flex-1 flex flex-col w-[220px] max-h-full">
                {/* Mc Selects */}
                <div className="mb-2 px-0.5">
                    {renderMenuItem("Home", homeIcon, activePage === 'Home', "text-2xl", true)}
                </div>

                {/* Offers */}
                <div className="mb-2 px-0.5">
                    {renderMenuItem("Offers", offreIcon, activePage === 'Offers', "text-2xl", true)}
                </div>

                {/* Scroll Up */}
                <div className="mb-2 mt-6">
                    {renderScrollButton('up', () => handleScroll('up'))}
                </div>

                {/* Menu Categories Scrollable List */}
                <div
                    ref={scrollContainerRef}
                    className="relative flex-1 overflow-y-auto overflow-x-visible  scrollbar-hide"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <div className="space-y-2 w-[220px] absolute top-0 left-0 p-0.5">
                        {menuCategories.map((item, idx) => (
                            <div key={idx}>
                                {renderMenuItem(item.name, item.icon, activePage === item.name, "text-2xl", false)}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-2 mb-2">
                    {renderScrollButton('down', () => handleScroll('down'))}
                </div>
            </div>

            {/* Signin Box */}
            <div className="w-full shrink-0 pb-2">
                <SigninBoxLayout isLoggedIn={isLoggedIn} />
            </div>
        </aside>
    );
}
