import { useTranslation } from 'react-i18next'
// @ts-ignore
import MainMenuLayout from "@/layouts/main-menu-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useState } from "react"
// @ts-ignore
import { useTheme } from "@/hooks/useTheme"
import discountImage from "@/assets/images/discount-image.svg"
import friesImage from "@/assets/images/fries-image.svg"
import barcodeImage from "@/assets/images/barcode-image.svg"
import sweetDealImage from "@/assets/images/sweetdeal-image.svg"
import doubleRefreshmentImage from "@/assets/images/doublerefreshment_image.svg"
import coffeeImage from "@/assets/images/coffee-image.svg"
import notLoggedInImage from "@/assets/images/not_loged_in-image.svg"
import qrCodeIcon from "@/assets/images/scan-client-image.svg"

interface OfferData {
  id: string
  title: string
  description: string
  termsAndConditions: string
  image: string
}

export default function Offers() {
  const theme = useTheme()
  const { t } = useTranslation()
  const [selectedOffer, setSelectedOffer] = useState<OfferData | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoggedIn] = useState(true)
  const boxShadowStyle = { boxShadow: '0px 4px 4px 0px #00000040' }

  const offers: Record<string, OfferData> = {
    offer1: {
      id: "offer1",
      title: "Exclusive One-Time Offer – 25% Off Your Next Purchase",
      description: "Valid for One Use Only!",
      termsAndConditions: "This offer is valid at participating McDonald's restaurants from September 1st to September 30th, 2025. Customers who purchase any Big Mac Meal will receive a free medium fries with their order. The offer is limited to one redemption per customer per transaction and is valid for dine-in, takeaway, and drive-thru only. It cannot be combined with other discounts, promotions, or coupons, and it is not exchangeable for cash or alternative menu items",
      image: discountImage,
    },
    offer2: {
      id: "offer2",
      title: "Get FREE Medium Fries with every Big Mac® or McChicken® purchase",
      description: "Only available for a limited time – order now and enjoy your treat!",
      termsAndConditions: "This offer is valid at participating McDonald's restaurants from September 1st to September 30th, 2025. Customers who purchase any Big Mac Meal or McChicken Meal will receive a free medium fries with their order. The offer is limited to one redemption per customer per transaction and is valid for dine-in, takeaway, and drive-thru only. It cannot be combined with other discounts, promotions, or coupons, and it is not exchangeable for cash or alternative menu items.",
      image: friesImage,
    },
    offer3: {
      id: "offer3",
      title: "Scan your coupon",
      description: "Your rewards are just a scan away – grab them now!",
      termsAndConditions: "This coupon is valid at participating McDonald's restaurants. Simply scan the barcode at the counter or drive-thru to redeem your offer. The coupon cannot be combined with other promotions and is valid for one-time use only. Terms and conditions apply.",
      image: barcodeImage,
    },
    offer4: {
      id: "offer4",
      title: "Sweet Deal!",
      description: "Get a FREE Sundae with any meal purchase over $15. Limited time only.",
      termsAndConditions: "This offer is valid at participating McDonald's restaurants. Purchase any meal worth $15 or more to receive a free sundae. The offer is limited to one redemption per customer per transaction and cannot be combined with other discounts or promotions. Valid for dine-in, takeaway, and drive-thru only.",
      image: sweetDealImage,
    },
    offer5: {
      id: "offer5",
      title: "Double the Refreshment!",
      description: "Buy one drink, get one FREE! Any size soft drink – perfect for sharing",
      termsAndConditions: "This offer is valid at participating McDonald's restaurants. Purchase any size soft drink to receive another one of equal or lesser value for free. The offer is limited to one redemption per customer per transaction and cannot be combined with other discounts or promotions. Valid for dine-in, takeaway, and drive-thru only.",
      image: doubleRefreshmentImage,
    },
    offer6: {
      id: "offer6",
      title: "Coffee Break Deal Only $1.98!",
      description: "Recharge your day with any small McCafe coffee (Latte, Cappuccino, or Americano) for just $1.98",
      termsAndConditions: "This offer is valid at participating McDonald's restaurants. Purchase any small McCafe coffee (Latte, Cappuccino, or Americano) for just $1.98. The offer is limited to one redemption per customer per transaction and cannot be combined with other discounts or promotions. Valid for dine-in, takeaway, and drive-thru only.",
      image: coffeeImage,
    }
  }

  const handleOfferClick = (offerId: string) => {
    setSelectedOffer(offers[offerId])
    setIsDialogOpen(true)
  }

  const handleApplyToCart = () => {
    console.log("Applied to cart:", selectedOffer?.title)
    setIsDialogOpen(false)
  }

  return (
    <MainMenuLayout title={t('offers.title')} activePage="Offers">
      {!isLoggedIn ? (
        /* Not Logged In View */
        <div className="w-full h-full mx-auto px-3 py-4 space-y-4">
          {/* Yellow Coupon Banner - Same size as Exclusive offer */}
          <Card 
            className="flex items-center gap-12 p-12 border-0 rounded-[16px] h-[190px]" 
            style={{ ...theme.getStyle('secondaryBg'), ...boxShadowStyle }}>
            <div className="flex-shrink-0 bg-white rounded-lg p-2">
              <img src={barcodeImage} alt="Barcode" className="w-[190px] h-[110px]" />
            </div>
            <div className="flex-1">
              <h3 className="text-[30px] font-bold leading-tight mb-1" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>
                {t('offers.scanCoupon')}
              </h3>
              <p className="text-2xl leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontSerious') }}>
                {t('offers.scanRewards')}
              </p>
            </div>
          </Card>

          {/* Sad Employee Image - Centered above the card */}
          <div className="flex justify-center -mb-0 mt-24"> 
            <img src={notLoggedInImage} alt="Please log in" className="w-[260px] h-[340px]" />
          </div>

          {/* Message Card - Same styling as yellow banner */}
          <Card 
            className="flex items-center gap-12 p-12 rounded-[16px] border border-gray-200 bg-white h-[190px]"
            style={{ ...theme.getStyle('whiteBg'), ...theme.getStyle('greyDarkBorder'), ...boxShadowStyle }}>
            {/* QR Code */}
            <div className="flex-shrink-0 bg-white p-2 rounded-lg">
              <img src={qrCodeIcon} alt="QR Code" className="w-[150px] h-[150px]" />
            </div>
            
            {/* Message Text */}
            <div className="flex-1">
              <p className="text-[26px] font-medium leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontSerious') }}>
                {t('catalog.notLoggedIn.message')}
              </p>
            </div>
          </Card>
        </div>
      ) : (
        /* Logged In View - Original Offers List */
        <div className="w-full h-full mx-auto px-3 py-4 space-y-4">
        {/* Exclusive One-Time Offer */}
        <Card 
          onClick={() => handleOfferClick('offer1')}
          className="flex items-center gap-8 p-10 rounded-[16px] border border-gray-200 bg-white h-[170px] cursor-pointer transition-shadow"
          style={boxShadowStyle}>
          <div className="flex-shrink-0">
            <img src={discountImage} alt="Discount" className="w-20 h-20" />
          </div>
          <div className="flex-1">
            <h3 className="text-[30px] font-bold leading-[1.25] mb-0.5" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>
              {t('offers.exclusiveOffer')}
            </h3>
            <p className="text-2xl leading-tight" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>{t('offers.validOneUse')}</p>
          </div>
        </Card>

        {/* Free Medium Fries Offer */}
        <Card 
          onClick={() => handleOfferClick('offer2')}
          className="flex items-center gap-2 p-6 rounded-[16px] border border-gray-200 bg-white h-[170px] cursor-pointer transition-shadow"
          style={boxShadowStyle}>
          <div className="flex-shrink-0">
            <img src={friesImage} alt="Fries" className="w-28 h-28" />
          </div>
          <div className="flex-1">
            <h3 className="text-[30px] font-bold leading-[1.25] mb-0.5" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>
              {t('offers.freeFries')}
            </h3>
            <p className="text-xl leading-tight" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>
              {t('offers.limitedTime')}
            </p>
          </div>
        </Card>

        {/* Yellow Coupon Banner */}
        <Card 
          onClick={() => handleOfferClick('offer3')}
          className="flex items-center gap-12 p-12 border-0 rounded-[16px] h-[190px] cursor-pointer transition-shadow" 
          style={{ ...theme.getStyle('secondaryBg'), ...boxShadowStyle }}>
          <div className="flex-shrink-0 bg-white rounded-lg p-2">
            <img src={barcodeImage} alt="Barcode" className="w-[190px] h-[110px]" />
          </div>
          <div className="flex-1">
            <h3 className="text-[30px] font-bold leading-tight mb-1 " style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('offers.scanCoupon')}</h3>
            <p className="text-2xl leading-tight" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontSerious') }}>
              {t('offers.scanRewards')}
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-2 pt-1">
          {/* Sweet Deal */}
          <Card 
            onClick={() => handleOfferClick('offer4')}
            className="flex items-start gap-2 p-4 rounded-[14px] h-[190px] border border-gray-200 bg-white cursor-pointer transition-shadow"
            style={boxShadowStyle}>
            <div className="flex-1 flex flex-col">
              <h4 className="text-2xl font-bold leading-tight mb-1" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('offers.sweetDeal')}</h4>
              <p className="text-lg leading-[1.3] mb-2" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>
                {t('offers.sweetDealDesc')}
              </p>
              <p className="text-lg leading-tight" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>{t('offers.limitedTimeOnly')}</p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <img src={sweetDealImage} alt="Sweet Deal" className="w-[200px] h-[200px] object-contain -mr-11 -mt-7" />
            </div>
          </Card>

          {/* Double the Refreshment */}
          <Card 
            onClick={() => handleOfferClick('offer5')}
            className="flex items-start gap-2 p-4 rounded-[14px] h-[190px] border border-gray-200 bg-white cursor-pointer transition-shadow"
            style={boxShadowStyle}>
            <div className="flex-1 flex flex-col">
              <h4 className="text-2xl font-bold leading-tight mb-1" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('offers.doubleRefreshment')}</h4>
              <p className="text-lg leading-[1.3] mb-2" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>{t('offers.buyOneDrink')}</p>
              <p className="text-lg leading-tight" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>{t('offers.anySizeDrink')}</p>
            </div>
            <div className="flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center">
              <img src={doubleRefreshmentImage} alt="Double Refreshment" className="w-[220px] h-[220px] object-contain -mr-8 mt-22" />
            </div>
          </Card>

          {/* Coffee Break Deal */}
          <Card 
            onClick={() => handleOfferClick('offer6')}
            className="flex items-start gap-2 p-4 rounded-[14px] h-[190px] border border-gray-200 bg-white cursor-pointer transition-shadow"
            style={boxShadowStyle}>
            <div className="flex-1 flex flex-col">
              <h4 className="text-2xl font-bold leading-tight mb-1" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>{t('offers.coffeeBreak')}</h4>
              <p className="text-lg leading-[1.3] mb-2" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>
                {t('offers.coffeeBreakDesc')}
              </p>
            </div>
            <div className="flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center">
              <img src={coffeeImage} alt="Coffee" className="w-[260px] h-[260px] object-contain -mr-8 mt-25" />
            </div>
          </Card>
        </div>
      </div>
      )}

      {/* Offer Details Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[1200px] w-[75vw] max-h-[1500px] h-[50vh] p-0 gap-0 bg-white rounded-[20px]" style={boxShadowStyle}>
          {/* Header with Title and Icon */}
          <div className="flex items-start justify-between p-8 pb-4">
            <div className="flex-1 pl-12 pt-24">
              <DialogTitle className="text-[36px] font-bold leading-tight mb-2" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontBranded') }}>
                {selectedOffer?.title.split(' ').slice(0, 2).join(' ') || t('offers.offerName')}
              </DialogTitle>
              <DialogDescription className="text-[30px] font-semibold" style={{ ...theme.getStyle('black'), ...theme.getStyle('fontSerious') }}>
                {t('offers.termsConditions')}
              </DialogDescription>
            </div>
            {selectedOffer?.image && (
              <div className="flex-shrink-0 ml-4">
                <img
                  src={selectedOffer.image}
                  alt={selectedOffer.title}
                  className="w-[180px] h-[180px] object-contain mt-12 mr-8"
                />
              </div>
            )}
          </div>

          {/* Terms and Conditions Text */}
          <div className="px-8 pb-8 pl-20 pr-20 mt-10">
            <p className="text-2xl leading-relaxed" style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontSerious') }}>
              {selectedOffer?.termsAndConditions}
            </p>
          </div>

          {/* Footer with Buttons */}
          <DialogFooter className="flex flex-row gap-3 p-16 pt-4 !justify-center items-center w-full">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              className="w-80 h-20 text-3xl font-semibold rounded-lg border-2 border-gray-300"
              style={{ ...theme.getStyle('greyDarker'), ...theme.getStyle('fontBranded'),...theme.getStyle('greyDarkerBorder'), ...boxShadowStyle }}
            >
              {t('common.close')}
            </Button>
            <Button
              onClick={handleApplyToCart}
              className="w-80 h-20 text-3xl font-semibold rounded-lg border-2 border-transparent"
              style={{ ...theme.getStyle('secondaryBg'), color: '#000000', ...theme.getStyle('fontBranded'), ...boxShadowStyle }}
            >
              {t('offers.applyToCart')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainMenuLayout>
  )
}
