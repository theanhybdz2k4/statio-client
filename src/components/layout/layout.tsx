import React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import {NextUIProvider} from "@nextui-org/react";

const Layout = ({
                    children,
                }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <NextUIProvider>
                <Header/>
                {children}
                <Footer/>
            </NextUIProvider>
        </>
    )
}

export default Layout