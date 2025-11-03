"use client";

// @ts-ignore
import HeaderLayout from "../../layouts/header-layout";
// @ts-ignore
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";

export default function FollowInstructionsPage() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <HeaderLayout showTitle={false} />
      <div
        className="flex flex-col items-center justify-center px-32 py-16 "
        style={theme.getStyle("whiteBg")}
      >
        <h1
          className="text-6xl font-bold text-center"
          style={{
            ...theme.getStyle("black"),
            ...theme.getStyle("fontBranded"),
          }}
        >
          {t('pages.followInstructions.message')}
        </h1>
      </div>
    </>
  );
}
