"use client"

import { useState } from "react"
// @ts-ignore
import HeaderLayout from "@/layouts/header-layout"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
// @ts-ignore
import { useTheme } from "@/hooks/useTheme"
import coffeeDrinkImage from "@/assets/images/coffee_drink-image.svg"
import cupSizeImage from "@/assets/images/cup-size_image.svg"
import { ChevronDown, ChevronUp, Plus } from "lucide-react"
import popupImage from "@/assets/images/popup-image.svg"
import restartIcon from "@/assets/icons/restart-icon.svg"

const noScrollbarStyles = `
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`

interface Option {
  id: string
  name: string
  calories: number
  price: string
  image: string
}

const sampleOption: Option = {
  id: "product1",
  name: "Product1",
  calories: 1500,
  price: "7$",
  image: coffeeDrinkImage,
}

function CoffeeCupIcon({ size, className = "" }: { size: "S" | "M" | "L" | "XL"; className?: string }) {
  const dimensions = {
    S: { width: 110, height: 150 },
    M: { width: 115, height: 155 },
    L: { width: 120, height: 160 },
    XL: { width: 125, height: 165 },
  }
  const { width, height } = dimensions[size]

  return (
    <img
      src={cupSizeImage || "/placeholder.svg"}
      alt={`${size} cup size`}
      style={{ width, height }}
      className={`object-contain block ${className}`}
    />
  )
}

function ProductModal({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean
  onClose: () => void
  product: { name: string; price: string; calories: string; image?: string }
}) {
  const theme = useTheme()
  const [quantity, setQuantity] = useState(1)

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <DialogContent
        className="max-w-[850px] h-[1200px] p-12 rounded-3xl"
        style={{ backgroundColor: theme.colors.white }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mt-4 ml-6">
          <div>
            <h2 className="text-[50px] font-bold" style={theme.getStyle("black")}>
              {product.name}
            </h2>
            <p className="text-[27px] font-medium" style={theme.getStyle("black")}>
              {product.price}-{product.calories}
            </p>
          </div>
        </div>

        {/* Product Image with Yellow Oval Background */}
        <div className="mb-9 flex justify-center">
          <div className="relative">
            <div className="w-[570px] h-[270px] rounded-[50%]" style={{ backgroundColor: theme.colors.secondary }} />
            <img
              src={product.image || "/placeholder.svg?height=200&width=300"}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Calorie Information */}
        <p className="text-[22px] leading-relaxed mb-9" style={{ color: theme.colors.greyDarker }}>
          Caloric requirements vary by age and activity level, ranging from approximately 1,000-1,800 kcal daily for
          children, 1,800-2,800 kcal for adolescents, and 1,600-3,000 kcal for adults, with differences based on gender
          and lifestyle
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center justify-center gap-0 mb-9">
          <button
            type="button"
            className="w-[100px] h-[84px] rounded-l-[18px] border flex items-center justify-center bg-white"
            style={{ borderColor: theme.colors.greyDarker }}
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <span className="text-[36px] font-normal" style={theme.getStyle("black")}>
              -
            </span>
          </button>
          <div
            className="w-[450px] h-[84px] border-t border-b flex items-center justify-center bg-white"
            style={{ borderColor: theme.colors.greyDarker }}
          >
            <span className="text-[30px] font-medium" style={theme.getStyle("black")}>
              {quantity}
            </span>
          </div>
          <button
            type="button"
            className="w-[100px] h-[84px] rounded-r-[18px] flex items-center justify-center"
            style={{ backgroundColor: theme.colors.secondary }}
            onClick={() => setQuantity(quantity + 1)}
          >
            <span className="text-[36px] font-bold" style={theme.getStyle("black")}>
              +
            </span>
          </button>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            className="w-[45%] h-[84px] text-[30px] font-bold rounded-2xl border bg-white"
            style={{
              borderColor: theme.colors.greyDarker,
              color: theme.colors.greyDarker,
            }}
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            className="w-[45%] h-[84px] text-[30px] font-bold rounded-2xl"
            style={{
              ...theme.getStyle("secondaryBg"),
              ...theme.getStyle("black"),
            }}
          >
            Add to cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function CustomizationInterface({
  option,
  onClose,
}: {
  option: Option
  onClose: () => void
}) {
  const theme = useTheme()
  const [selectedTab, setSelectedTab] = useState<"popular" | "previous" | "recommendation" | null>(null)
  const [selectedSize, setSelectedSize] = useState<"S" | "M" | "L" | "XL" | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isSubsection1Open, setIsSubsection1Open] = useState(true)
  const [isSubsection2Open, setIsSubsection2Open] = useState(false)
  const [selectedOptionsSubsection1, setSelectedOptionsSubsection1] = useState<Set<string>>(new Set())
  const [selectedOptionsSubsection2, setSelectedOptionsSubsection2] = useState<Set<string>>(new Set())
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; price: string; calories: string } | null>(null)

  const tabs = [
    {
      id: "popular" as const,
      label: "Most popular",
      subtitle: "#1, Ordered by 100+ others",
      detail: "small, regular, tomato sauce",
    },
    {
      id: "previous" as const,
      label: "Previous choice",
      subtitle: "#1, Ordered by 100+ others",
      detail: "small, regular, tomato sauce",
    },
    {
      id: "recommendation" as const,
      label: "Our recommendation",
      subtitle: "#1, Ordered by 100+ others",
      detail: "small, regular, tomato sauce",
    },
  ]

  const sizes = [
    { id: "S" as const, label: "S", price: "+$1.00", calories: "200 cal" },
    { id: "M" as const, label: "M", price: "+$3.00", calories: "300 cal" },
    { id: "L" as const, label: "L", price: "+$3.00", calories: "400 cal" },
    { id: "XL" as const, label: "XL", price: "+$20.00", calories: "500 cal" },
  ]

  const frequentlyBought = [
    { id: "cheese-roll", name: "Cheese Roll", price: "4.50$", calories: "40 cal", image: popupImage },
    { id: "dr-pepper", name: "Dr.Pepper", price: "4.50$", calories: "40 cal" },
  ]

  return (
    <div className="w-full h-full flex flex-col" style={theme.getStyle("fontSerious")}>
      <div className="flex-1">
        <div className="flex items-start justify-end mb-4">
          <div className="flex items-center mr-24 shrink-0">
            <img
              src={option.image || "/placeholder.svg"}
              alt={option.name}
              className="w-[260px] h-[260px] object-contain shrink-0"
            />
            <div className="flex flex-col shrink-0">
              <h2
                className="text-[55px] font-bold leading-tight"
                style={{ ...theme.getStyle("black"), ...theme.getStyle("fontBranded") }}
              >
                {option.name}
              </h2>
              <p className="text-[26px]" style={theme.getStyle("greyDarker")}>
                {option.price} /{option.calories} cal
              </p>

              <div
                className="flex items-stretch overflow-hidden border rounded-full w-[250px] h-[50px] mt-16"
                style={{ borderColor: theme.colors.greyDarker }}
              >
                <button
                  type="button"
                  className="flex-1 bg-white flex items-center justify-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <span className="text-[22px] font-normal" style={theme.getStyle("black")}>
                    -
                  </span>
                </button>
                <div
                  className="w-[80px] flex items-center justify-center border-l border-r bg-white"
                  style={{ borderColor: theme.colors.greyDarker }}
                >
                  <span className="text-[18px] font-medium" style={theme.getStyle("black")}>
                    {quantity}
                  </span>
                </div>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center"
                  style={{
                    backgroundColor: theme.colors.secondary,
                  }}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <span className="text-[22px] font-bold" style={theme.getStyle("black")}>
                    +
                  </span>
                </button>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            className="h-[48px] px-6 text-[20px] font-semibold rounded-lg border bg-transparent mt-50 flex items-center gap-3"
            style={{
              ...theme.getStyle("whiteBg"),
              borderColor: theme.colors.greyDarker,
              ...theme.getStyle("greyDarker"),
            }}
          >
            Restart
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ backgroundColor: theme.colors.white }}
            >
              <img src={restartIcon || "/placeholder.svg"} alt="Restart icon" className="w-6 h-6 ml-8" />
            </span>
          </Button>
        </div>

        <div className="flex gap-3 mb-8">
          {tabs.map((tab) => {
            const isSelected = selectedTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab((current) => (current === tab.id ? null : tab.id))}
                className="h-[130px] w-full rounded-lg text-left transition-all border-2"
                style={{
                  backgroundColor: "white",
                  borderColor: isSelected ? theme.colors.primary : theme.colors.greyDark,
                }}
              >
                <div className="text-[26px] font-extrabold mb-2 ml-4 mt-2" style={theme.getStyle("red")}>
                  {tab.label}
                </div>
                <div className="text-[18px] font-semibold ml-4" style={{ color: theme.colors.black }}>
                  {tab.subtitle}
                </div>
                <div className="text-[16px] ml-4 mb-2" style={{ color: theme.colors.greyDarker }}>
                  {tab.detail}
                </div>
              </button>
            )
          })}
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-50 mb-5">
            <h3 className="text-[40px] font-extrabold mb-20" style={theme.getStyle("black")}>
              Size
            </h3>
            <div className="flex gap-4">
              {sizes.map((size) => {
                const isSelected = selectedSize === size.id
                return (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize((current) => (current === size.id ? null : size.id))}
                    className="w-[155px] h-[135px] rounded-lg flex flex-col items-center justify-center gap-1 transition-all border-2 bg-white"
                    style={{
                      borderColor: isSelected ? theme.colors.primary : theme.colors.greyDark,
                    }}
                  >
                    <div className="flex flex-col items-center mb-10 mr-4">
                      <CoffeeCupIcon size={size.id} className="-mb-10" />
                      <div className="text-[16px] font-light leading-tight ml-2" style={{ color: theme.colors.black }}>
                        {size.price}
                      </div>
                      <div
                        className="text-[12px] font-medium leading-tight ml-2"
                        style={{ color: theme.colors.greyDarker }}
                      >
                        {size.calories}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="space-y-5 mb-8 max-h-190 overflow-y-auto no-scrollbar">
          <div
            className="rounded-xl border bg-white"
            style={{
              borderColor: theme.colors.greyDark,
            }}
          >
            <button
              onClick={() => setIsSubsection1Open(!isSubsection1Open)}
              className="w-full flex items-center justify-between p-5"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-[40px] font-extrabold" style={theme.getStyle("black")}>
                  Subsection
                </h3>
                <span
                  className="px-4 py-1.5 w-[185px] h-[55px] rounded text-[25px] font-normal ml-100"
                  style={{
                    backgroundColor: "#FEF3C7",
                    color: theme.colors.black,
                  }}
                >
                  Default
                </span>
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F3F4F6" }}
              >
                {isSubsection1Open ? (
                  <ChevronUp className="w-6 h-6" style={theme.getStyle("greyDarker")} />
                ) : (
                  <ChevronDown className="w-6 h-6" style={theme.getStyle("greyDarker")} />
                )}
              </div>
            </button>

            {isSubsection1Open && (
              <div className="px-8 pb-5 space-y-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-4 px-6 rounded-lg"
                    style={{
                      backgroundColor: selectedOptionsSubsection1.has(`option-${i}`) ? "#F3F4F6" : theme.colors.white,
                    }}
                  >
                    <span className="text-[26px] font-bold" style={theme.getStyle("black")}>
                      Option
                    </span>
                    <button
                      onClick={() => {
                        setSelectedOptionsSubsection1((current) => {
                          const newSet = new Set(current)
                          if (newSet.has(`option-${i}`)) {
                            newSet.delete(`option-${i}`)
                          } else {
                            newSet.add(`option-${i}`)
                          }
                          return newSet
                        })
                      }}
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: selectedOptionsSubsection1.has(`option-${i}`) ? theme.colors.secondary : "transparent",
                        border: selectedOptionsSubsection1.has(`option-${i}`) ? "none" : `3px solid ${theme.colors.greyDark}`,
                      }}
                    >
                      {selectedOptionsSubsection1.has(`option-${i}`) && (
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.white }} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="rounded-xl border bg-white"
            style={{
              borderColor: theme.colors.greyDark,
            }}
          >
            <button
              onClick={() => setIsSubsection2Open(!isSubsection2Open)}
              className="w-full flex items-center justify-between p-5"
            >
              <h3 className="text-[40px] font-extrabold" style={theme.getStyle("black")}>
                subsection
              </h3>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F3F4F6" }}
              >
                {isSubsection2Open ? (
                  <ChevronUp className="w-6 h-6" style={theme.getStyle("greyDarker")} />
                ) : (
                  <ChevronDown className="w-6 h-6" style={theme.getStyle("greyDarker")} />
                )}
              </div>
            </button>

            {isSubsection2Open && (
              <div className="px-8 pb-5 space-y-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-4 px-6 rounded-lg"
                    style={{
                      backgroundColor: selectedOptionsSubsection2.has(`option-${i}`) ? "#F3F4F6" : theme.colors.white,
                    }}
                  >
                    <span className="text-[26px] font-bold" style={theme.getStyle("black")}>
                      Option
                    </span>
                    <button
                      onClick={() => {
                        setSelectedOptionsSubsection2((current) => {
                          const newSet = new Set(current)
                          if (newSet.has(`option-${i}`)) {
                            newSet.delete(`option-${i}`)
                          } else {
                            newSet.add(`option-${i}`)
                          }
                          return newSet
                        })
                      }}
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: selectedOptionsSubsection2.has(`option-${i}`) ? theme.colors.secondary : "transparent",
                        border: selectedOptionsSubsection2.has(`option-${i}`) ? "none" : `3px solid ${theme.colors.greyDark}`,
                      }}
                    >
                      {selectedOptionsSubsection2.has(`option-${i}`) && (
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.white }} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <style>{noScrollbarStyles}</style>
        <div className="mb-6">
          <h3 className="text-[40px] font-extrabold mb-5" style={theme.getStyle("black")}>
            Frequently bought together
          </h3>
          <div className="flex gap-5">
            {frequentlyBought.map((item) => (
              <div
                key={item.id}
                className="flex-1 p-5 rounded-lg border bg-zinc-50 relative"
                style={{
                  borderColor: theme.colors.white,
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-[25px] font-bold mb-2 leading-tight" style={theme.getStyle("black")}>
                      {item.name}
                    </h4>
                    <p className="text-[18px] font-normal mb-3" style={theme.getStyle("black")}>
                      ${item.price.replace("$", "")} - {item.calories}
                    </p>
                    <span
                      className="inline-block px-5 py-1.5 rounded-xl text-[16px] font-semibold"
                      style={{
                        ...theme.getStyle("secondaryBg"),
                        ...theme.getStyle("black"),
                      }}
                    >
                      Popular
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <button onClick={() => setSelectedProduct(item)} className="hover:opacity-70 transition-opacity">
                      <Plus className="w-6 h-6" />
                    </button>
                    <div />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="w-[40%] h-[70px] text-[24px] font-bold rounded-xl border bg-white"
            style={{
              borderColor: theme.colors.greyDarker,
              color: theme.colors.greyDarker,
            }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="w-[60%] h-[70px] text-[24px] font-bold rounded-xl flex items-center justify-center gap-3"
            style={{
              ...theme.getStyle("secondaryBg"),
              ...theme.getStyle("black"),
            }}
          >
            <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
              <Plus className="w-4 h-4" />
            </div>
            Add to cart
          </Button>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} product={selectedProduct} />
      )}
    </div>
  )
}

export default function CustomizationPage() {
  return (
    <HeaderLayout>
      <CustomizationInterface option={sampleOption} onClose={() => console.log("Customization closed")} />
    </HeaderLayout>
  )
}
