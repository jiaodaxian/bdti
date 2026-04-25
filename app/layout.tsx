import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "BANDTI 乐队人格测试 - 测测你是什么鬼",
  description: "全网最不准但最好玩的乐队人格测试！玩乐队的人都有病，我们只是帮你确诊一下你具体是哪种病。",
  openGraph: {
    title: "BANDTI 乐队人格测试",
    description: "测测你是什么鬼 - 全网最不准但最好玩",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a2e",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
