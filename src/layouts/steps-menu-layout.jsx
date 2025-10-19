import React, { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import HeaderLayout from './header-layout'
import FooterLayout from './footer-layout'
import StepsBarLayout from './steps-bar-layout'

export default function StepsMenuLayout() {
    const theme = useTheme()
    const [currentStep, setCurrentStep] = useState(2)

    return (
        <div className="relative h-screen flex flex-col" style={theme.getStyle('whiteBg')}>
            {/* Header Layout */}
            <div className="relative shrink-0">
                <HeaderLayout showTitle={true} title="Go for a Trio" />
            </div>

            {/* Main Content Area with Steps Bar */}
            <div className="relative flex-1 flex overflow-hidden">
                {/* Steps Bar - Left Side */}
                <div className="relative p-6">
                    <StepsBarLayout currentStep={currentStep} />
                </div>

                {/* Main Content Area - Right Side */}
                <div className="flex-1 p-8 overflow-auto">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4" style={{ ...theme.getStyle('greyDark'), ...theme.getStyle('fontBranded') }}>
                                Main Content Area
                            </h2>
                            <p className="text-lg" style={{ ...theme.getStyle('greyDark'), ...theme.getStyle('fontSerious') }}>
                                This section is for the step content (Burgers, Sides, Drinks, Review)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Layout */}
            <div className="relative shrink-0">
                <FooterLayout />
            </div>
        </div>
    )
}
