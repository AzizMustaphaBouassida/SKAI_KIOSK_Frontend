import { Check } from "lucide-react"
import { useTheme } from '../hooks/useTheme'
import BurgerIcon from '../assets/icons/burger-icon.svg'
import SideIcon from '../assets/icons/side-icon.svg'
import DrinkIcon from '../assets/icons/drink-icon.svg'

export default function StepsBarLayout({ currentStep = 3 }) {
    const theme = useTheme()
    const boxShadowStyle = { boxShadow: '0px 4px 4px 0px #00000040' }

    const steps = [
        { id: 1, label: "Burger", icon: BurgerIcon },
        { id: 2, label: "Side", icon: SideIcon },
        { id: 3, label: "Drink", icon: DrinkIcon },
        { id: 4, label: "Review", icon: null },
    ]

    const getStepStatus = (stepId) => {
        if (stepId < currentStep) return "completed"
        if (stepId === currentStep) return "current"
        return "upcoming"
    }

    const getLineColor = (stepId) => {
        if (stepId < currentStep) return theme.colors.secondary
        return theme.colors.greyDark
    }

    return (
        <div
            className="rounded-2xl border shadow-sm p-6 w-64"
            style={{
                ...theme.getStyle('whiteBg'),
                borderColor: theme.colors.greyDarker,
                ...boxShadowStyle,
            }}
        >
            <h2 className="font-bold text-4xl mb-10" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>
                Steps
            </h2>

            {/* Steps List */}
            <div className="space-y-0">
                {steps.map((step, index) => {
                    const status = getStepStatus(step.id)
                    const isLast = index === steps.length - 1

                    return (
                        <div key={step.id} className="flex items-start gap-4">
                            {/* Step Indicator Column */}
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 relative"
                                    style={{
                                        backgroundColor: status === "completed" || status === "current"
                                            ? theme.colors.secondary
                                            : theme.colors.white,
                                        border: status === "upcoming"
                                            ? `3px solid ${theme.colors.greyDark}`
                                            : 'none'
                                    }}
                                >
                                    {status === "completed" && (
                                        <div className="relative w-7 h-7">
                                            <Check
                                                className="w-7 h-7 absolute -left-1"
                                                style={theme.getStyle('white')}
                                                strokeWidth={3}
                                            />
                                            <Check
                                                className="w-7 h-7 absolute left-0.5"
                                                style={theme.getStyle('white')}
                                                strokeWidth={3}
                                            />
                                        </div>
                                    )}
                                    {status === "current" && (
                                        step.icon ? (
                                            <img src={step.icon} alt={step.label} className="w-9 h-9" />
                                        ) : (
                                            <div className="w-6 h-6 rounded-full" style={theme.getStyle('whiteBg')} />
                                        )
                                    )}
                                    {status === "upcoming" && (
                                        step.icon ? (
                                            <img src={step.icon} alt={step.label} className="w-9 h-9" />
                                        ) : (
                                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.greyLight }} />
                                        )
                                    )}
                                </div>

                                {!isLast && (
                                    <div
                                        className="w-1.5 h-20"
                                        style={{ backgroundColor: getLineColor(step.id) }}
                                    />
                                )}
                            </div>

                            <div className="pt-3">
                                <span
                                    className="font-bold text-xl"
                                    style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}
                                >
                                    {step.label}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
