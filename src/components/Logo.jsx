import React from 'react'
import { useTheme } from '../hooks/useTheme'


export default function Logo({
    variant = 'main',
    className = '',
    alt,
    ...props
}) {
    const theme = useTheme()

    try {
        const logoSrc = theme.getLogo(variant)
        const logoAlt = alt || theme.logo?.alt || 'Logo'

        if (!logoSrc) {
            console.warn('Logo source not found, using fallback')
            return (
                <div
                    className={`bg-gray-200 flex items-center justify-center ${className}`}
                    {...props}
                >
                    <span className="text-gray-500 text-xs">Logo</span>
                </div>
            )
        }

        return (
            <img
                src={logoSrc}
                alt={logoAlt}
                className={className}
                {...props}
            />
        )
    } catch (error) {
        console.error('Error in Logo component:', error)
        return (
            <div
                className={`bg-gray-200 flex items-center justify-center ${className}`}
                {...props}
            >
                <span className="text-gray-500 text-xs">Logo</span>
            </div>
        )
    }
}
