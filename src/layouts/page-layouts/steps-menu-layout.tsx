import React, { useState, ReactNode } from 'react'
// @ts-ignore
import { useTheme } from '@/app/hooks/useTheme'
import HeaderLayout from '../layout-parts/header-layout'
import FooterLayout from '../layout-parts/footer-layout'
import StepsBarLayout, { Step } from '../layout-parts/steps-bar-layout'

interface StepsMenuLayoutProps {
    children?: ReactNode;
    steps: Step[];
    bundleTitle?: string;
}

export default function StepsMenuLayout({ children, steps, bundleTitle = "Go for a Bundle" }: StepsMenuLayoutProps) {
    const theme = useTheme()
    const [currentStep, setCurrentStep] = useState(1)
    const totalSteps = steps.length

    const handleNext = () => {
        if (currentStep < totalSteps) {
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
                <HeaderLayout showTitle={true} title={bundleTitle} />
            </div>

            {/* Main Content Area with Steps Bar */}
            <div className="relative flex-1 flex overflow-hidden">
                {/* Steps Bar - Left Side */}
                <div className="relative p-6">
                    <StepsBarLayout currentStep={currentStep} steps={steps} />
                </div>

                {/* Main Content Area - Right Side */}
                <div className="flex-1 overflow-auto">
                    <div className="h-full w-[750px] py-4">
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
