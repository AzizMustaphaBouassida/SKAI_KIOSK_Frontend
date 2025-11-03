import React, { useState, ReactNode } from 'react'
// @ts-ignore
import { useTheme } from '../hooks/useTheme'
import HeaderLayout from './header-layout'
import FooterLayout from './footer-layout'
import StepsBarLayout from './steps-bar-layout'

interface StepsMenuLayoutProps {
    children?: ReactNode;
}

export default function StepsMenuLayout({ children }: StepsMenuLayoutProps) {
    const theme = useTheme()
    const [currentStep, setCurrentStep] = useState(1)

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child) && typeof child.type !== 'string') {
            return React.cloneElement(child, {
                currentStep,
                onNext: handleNext,
                onBack: handleBack
            } as any)
        }
        return child
    })

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
                <div className="flex-1 overflow-auto">
                    <div className="h-full w-full py-4">
                        {childrenWithProps}
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
