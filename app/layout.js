import { Roboto } from 'next/font/google';

const inter = Roboto({ subsets: ['latin'], weight: ['400','700'] })

export const metadata = {
  title: 'EBK Builders OPC',
  description: 'EBK Builders OPC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
