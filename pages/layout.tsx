'use client'

import { ThemeProvider } from 'next-themes'
import './globals.css'

// export const metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
// }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider attribute="class">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
