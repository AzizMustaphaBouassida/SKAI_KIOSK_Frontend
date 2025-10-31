import { useTranslation } from "react-i18next"
import HeaderTitleLayout from "../../layouts/header-title-layout"
import { useTheme } from "../../hooks/useTheme"
import QRCodeSVG from "../../assets/icons/qrcode.svg"
import LoginInfoIcon from "../../assets/icons/login-info-icon.svg"
import GiftIcon from "../../assets/icons/gift-icon.svg"

export default function ConnectInfosPage() {
    const theme = useTheme()
    const { t} = useTranslation()
    const boxShadowStyle = { boxShadow: '0px 4px 4px 0px #00000040' }

    return (
        <div className="min-h-screen" style={theme.getStyle('whiteBg')}>
            <HeaderTitleLayout title={t('connectInfos.title')} subtitle="">
                {/* Steps */}
                <div className="space-y-0">
                    {/* Step 1 */}
                    <div className="flex items-center gap-16 py-12">
                        <div className="flex-shrink-0 w-[140px] h-[140px] rounded-full flex items-center justify-center" style={theme.getStyle('secondaryBg')}>
                            <span className="text-[75px] font-black leading-none" style={theme.getStyle('black')}>1</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-4xl font-semibold mb-3 leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('connectInfos.step1.title')}</h2>
                            <p className="text-2xl leading-[1.6]" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontSerious') }}>
                                {t('connectInfos.step1.description')}
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-[140px] h-[140px] border-[6px] rounded-2xl flex items-center justify-center" style={{ ...theme.getStyle('secondaryBg'), ...theme.getStyle('secondaryBorder') }}>
                            <img src={QRCodeSVG} alt="QR Code" className="w-[120px] h-[120px]" />
                        </div>
                    </div>

                    {/* Divider 1 */}
                    <div className="w-full h-[2px]" style={theme.getStyle('secondaryBg')}></div>

                    {/* Step 2 */}
                    <div className="flex items-center gap-16 py-12">
                        <div className="flex-shrink-0 w-[140px] h-[140px] rounded-full flex items-center justify-center" style={theme.getStyle('secondaryBg')}>
                            <span className="text-[75px] font-black leading-none" style={theme.getStyle('black')}>2</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-4xl font-semibold mb-3 leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('connectInfos.step2.title')}</h2>
                            <p className="text-2xl leading-[1.6]" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontSerious') }}>
                                {t('connectInfos.step2.description')}
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-[150px] h-[150px] flex items-center justify-center">
                            <img src={LoginInfoIcon} alt="Login Info" className="w-[135px] h-[135px]" />
                        </div>
                    </div>

                    {/* Divider 2 */}
                    <div className="w-full h-[2px]" style={theme.getStyle('secondaryBg')}></div>

                    {/* Step 3 */}
                    <div className="flex items-center gap-16 py-12">
                        <div className="flex-shrink-0 w-[140px] h-[140px] rounded-full flex items-center justify-center" style={theme.getStyle('secondaryBg')}>
                            <span className="text-[75px] font-black leading-none" style={theme.getStyle('black')}>3</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-4xl font-semibold mb-3 leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('connectInfos.step3.title')}</h2>
                            <p className="text-2xl leading-[1.6]" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontSerious') }}>
                                {t('connectInfos.step3.description')}
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-[150px] h-[150px] flex items-center justify-center">
                            <img src={GiftIcon} alt="Gift" className="w-[135px] h-[135px]" />
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex justify-center">
                    <button
                        className="w-[70vw] max-w-xl h-24 text-4xl font-semibold border-2 rounded-xl hover:bg-gray-50 shadow-lg"
                        style={{
                            ...theme.getStyle('whiteBg'),
                            ...theme.getStyle('greyDarker'),
                            ...theme.getStyle('greyDarkerBorder'),
                            ...theme.getStyle('fontSerious'),
                            ...boxShadowStyle
                        }}
                    >
                        {t('connectInfos.understood')}
                    </button>
                </div>
            </HeaderTitleLayout>
        </div>
    )
}
