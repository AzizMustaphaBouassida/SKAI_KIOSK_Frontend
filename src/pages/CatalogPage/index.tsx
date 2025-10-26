// @ts-ignore
import MainMenuLayout from "@/layouts/main-menu-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// @ts-ignore
import { useTheme } from '../../hooks/useTheme'
import qrCodeImage from '@/assets/icons/qrcode.svg'
import forYouBurgerImage from '@/assets/images/foryou-burger-image.svg'
import trioBurgerImage from '@/assets/images/trio-burger-image.svg'
import familyMealImage from '@/assets/images/family-meal-image.svg'
import kioskIllustration from '@/assets/images/kisok-client-image.svg'
import mccafeImage from '@/assets/images/coffee-image.svg'
import happyMealImage from '@/assets/images/happy-meal-image.svg'
import productImage from '@/assets/images/product-image.svg'

export default function Catalog() {
    const theme = useTheme()
    const isLoggedIn = true
    const forYouProductCount = 3

    return (
        <MainMenuLayout title="Good morning.">
            <div className="w-full h-full px-6 py-0">
                <div className="space-y-3">
                    {isLoggedIn ? (
                        <div>
                            <h2 className="text-4xl font-bold mb-4" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>For you</h2>
                            <div className={`grid ${forYouProductCount === 2 ? 'grid-cols-2 gap-6' : 'grid-cols-3 gap-4'}`}>
                                {Array.from({ length: forYouProductCount }, (_, i) => i + 1).map((item) => (
                                    <div key={item} className="flex flex-col items-center cursor-pointer">
                                        <div className="relative mb-3">
                                            <div 
                                                className={`${forYouProductCount === 2 ? 'w-[180px] h-[180px]' : 'w-[150px] h-[150px]'} rounded-full border-[5px] overflow-hidden flex items-center justify-center`} 
                                                style={{ ...theme.getStyle('whiteBg'), ...theme.getStyle('primaryBorder') }}
                                            >
                                                <img src={forYouBurgerImage} alt="Product" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="flex items-center justify-between gap-8 w-full mb-1">
                                                <h3 className="text-2xl font-bold leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>Product</h3>
                                                <p className="text-xl font-bold leading-none" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>7 $</p>
                                            </div>
                                            <p className="text-lg leading-tight w-full text-left font-bold" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>1500 cal</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <Card className="border-none rounded-[20px] overflow-hidden shadow-sm h-[200px]" style={theme.getStyle('primaryBg')}>
                            <CardContent className="p-5 flex items-center gap-12 h-full">
                                <div className="p-3 rounded-xl shrink-0" style={theme.getStyle('primaryBg')}>
                                    <img src={qrCodeImage} alt="QR Code" className="w-[150px] h-[150px] " />
                                </div>
                                <div className="flex-1 flex flex-col justify-center" style={theme.getStyle('white')}>
                                    <h2 className="text-3xl font-semibold leading-[1.2] mb-4" style={theme.getStyle('fontBranded')}>
                                        Need help choosing?
                                        <br />
                                        We've got you
                                    </h2>
                                    <p className="text-2xl leading-tight opacity-95" style={theme.getStyle('fontSerious')}>Tap to scan the QR-code</p>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Mc Selects Section */}
                    <div>
                        <h2 className="text-4xl font-bold mb-4" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>Mc Selects</h2>
                        <div className="grid grid-cols-2 gap-3">
                            <Card className="border border-gray-400 rounded-[18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden bg-white h-[190px]">
                                <CardContent className="p-4 flex items-center justify-between h-full">
                                    <div className="flex-1 pr-2 pl-8">
                                        <h3 className="text-3xl font-bold leading-[1.15]" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>
                                            Trio
                                            <br />
                                            Burger
                                        </h3>
                                    </div>
                                    <img src={trioBurgerImage} alt="Trio Burger" className="w-[160px] h-[160px] object-contain -mr-8 mt-8" />
                                </CardContent>
                            </Card>

                            <Card className="border-gray-400 rounded-[18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden bg-white h-[190px]">
                                <CardContent className="p-4 flex items-center justify-between h-full">
                                    <div className="flex-1 pr-2 pl-4">
                                        <h3 className="text-3xl font-bold leading-[1.15]" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>
                                            Family
                                            <br />
                                            Meal
                                        </h3>
                                    </div>
                                    <img src={familyMealImage} alt="Family Meal" className="w-[185px] h-[185px] object-contain -mr-3" />
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Yellow Kiosk Banner */}
                    <Card className="border-gray-400 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-[210px]" style={theme.getStyle('secondaryBg')}>
                        <CardContent className="p-5 flex items-center gap-4 h-full">
                            <div className="shrink-0 mt-4">
                                <img src={kioskIllustration} alt="Kiosk" className="w-[200px] h-[200px]" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold leading-[1.2] mb-1" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>Can't choose? We've got you.</h2>
                                <p className="text-2xl mb-3 leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontSerious') }}>Quick questions, great matches</p>
                                <Button className="hover:bg-gray-50 font-semibold text-2xl px-5 py-2 h-auto rounded-lg shadow-none border-none" style={{ ...theme.getStyle('whiteBg'), ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>
                                    Tap to start
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* McCafe & Happy Meal Section */}
                    <div className="grid grid-cols-2 gap-3">
                        <Card className="border-gray-400 rounded-[18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden bg-white h-[190px]">
                            <CardContent className="p-4 flex items-center justify-between h-full">
                                <h3 className="text-3xl font-bold flex-1 pr-2 pl-4" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>McCafe</h3>
                                <img src={mccafeImage} alt="McCafe" className="w-[180px] h-[180px] object-contain -mr-11 mt-3" />
                            </CardContent>
                        </Card>

                        <Card className="border-gray-400 rounded-[18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden bg-white h-[190px]">
                            <CardContent className="p-4 flex items-center justify-between h-full">
                                <div className="flex-1 pr-2 pl-6">
                                    <h3 className="text-3xl font-bold leading-[1.15]" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>
                                        Happy
                                        <br />
                                        meal
                                    </h3>
                                </div>
                                <img src={happyMealImage} alt="Happy Meal" className="w-[175px] h-[175px] object-contain -mr-6 mt-3" />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Best Sellers Section */}
                    <div>
                        <h2 className="text-4xl font-bold mb-4" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>Best Sellers</h2>
                        <div className="grid grid-cols-3 gap-3">
                            {[1, 2, 3].map((item) => (
                                <Card
                                    key={item}
                                    className="border-gray-400 rounded-[18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden bg-white h-[210px]"
                                >
                                    <CardContent className="p-3 h-full flex flex-col">
                                        <img src={productImage} alt="Product" className="w-[200px] h-[200px] object-contain mb-2.5" />
                                        <div className="space-y-0.5">
                                            <h3 className="text-2xl font-bold leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>Product</h3>
                                            <div className="flex items-end justify-between">
                                                <p className="text-lg leading-tight font-bold" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>1500 cal</p>
                                                <p className="text-xl font-bold leading-none" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>7$</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainMenuLayout>
    )
}