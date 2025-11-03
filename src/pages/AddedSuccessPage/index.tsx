"use client";

// @ts-ignore
import HeaderTitleLayout from "../../layouts/header-title-layout";
import AddedSuccessImage from "@/assets/images/added_success_image.svg";
import { motion } from "framer-motion";
// @ts-ignore
import { useTheme } from "@/app/hooks/useTheme";
import { useTranslation } from "react-i18next";

interface AddedSuccessPageProps {
  message?: string;
  total?: string;
  calories?: string;
}

export default function AddedSuccessPage({
  message,
  total = "14.2$",
  calories = "1500 Cal",
}: AddedSuccessPageProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  const displayMessage = message || t('pages.addedSuccess.message');

  return (
    <HeaderTitleLayout title={t('pages.addedSuccess.title')}>
      <div className="text-center mt-8 mb-12">
        {message && (
          <p
            className="text-[35px] font-medium mb-6"
            style={{
              ...theme.getStyle("black"),
              ...theme.getStyle("fontSerious"),
            }}
          >
            {displayMessage}
          </p>
        )}
        {total && (
          <p
            className="text-[55px] font-bold mb-2"
            style={{
              ...theme.getStyle("black"),
              ...theme.getStyle("fontBranded"),
            }}
          >
            {total}
          </p>
        )}
        {calories && (
          <p
            className="text-[25px]"
            style={{
              ...theme.getStyle("greyDarker"),
              ...theme.getStyle("fontSerious"),
            }}
          >
            {calories}
          </p>
        )}
      </div>

      <motion.div
        className="flex items-center justify-center"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <img
          src={AddedSuccessImage || "/placeholder.svg"}
          alt="Added Success"
          className="w-[468px] h-[468px] object-contain"
        />
      </motion.div>
    </HeaderTitleLayout>
  );
}
