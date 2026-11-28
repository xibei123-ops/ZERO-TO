// app/layout.jsx 是 Next.js 的"全站外壳"——所有页面都套在它里面。
// 它取代了 4.4 的 index.html + main.jsx + App.jsx 最外面那层壳：
//   - <html>/<body> 由它提供；
//   - app-shell / page-shell / page-content 这层包裹，和 4.4 App.jsx 里一模一样；
//   - 4.4 main.jsx 里那 8 行 import CSS，原样搬到这里（顺序不变）。
// 注意：导航条 Nav 不在这儿，它在每一页的 hero 里（HomeView / TextLabView 各放一份），
// 这样整页布局和 4.4 完全一致。

import "../css/reset.css";
import "../css/variables.css";
import "../css/layout.css";
import "../css/hero.css";
import "../css/nav.css";
import "../css/cards.css";
import "../css/lab.css";
import "../css/responsive.css";
import Script from "next/script";

export const metadata = {
  title: "zero to tech",
  description: "个人主页 + 文字实验室",
  // 图标都在 public/ 下，构建时原样拷进 out/，这里只负责在 HTML 里写对 <link>
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <Script id="google-tag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.gtag = function gtag(){window.dataLayer.push(arguments);};
window.gtag('js', new Date());`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-NLXCRD24"
          strategy="afterInteractive"
        />
        <div className="app-shell">
          <div className="page-shell">
            <main className="page-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
