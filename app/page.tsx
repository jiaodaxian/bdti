"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.location.href = "/bdti.html"
  }, [])

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh",
      background: "#1a1a2e",
      color: "white"
    }}>
      正在加载测试...
    </div>
  )
}
