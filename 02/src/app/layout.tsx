import {Navigation} from 'layout/Navigation';
import { menu } from 'app/data/menu';
import LayoutProvider from 'context/LayoutContext';
import logo from "assets/graphics/logo.png";
import 'css/Global.scss';
import 'css/Utils.scss';
import { Footer } from 'layout/Footer';

export const metadata = {
    title: '🚗 Mechanik Ludomy, Ryczywół, Oborniki - Patryk Łusiewicz',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta name="robots" content="noindex nofollow" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
                <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Anton&family=Black+Ops+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <LayoutProvider>
                    <Navigation
                        brand={{
                            image:{
                                altText:"",
                                sourceUrl:logo.src,
                                title:""
                            },
                            uri:"/"
                        }}
                        location={{
                            address:"Ludomy 93, 64-603 Ludomy",
                            url:"https://www.google.com/maps?sca_esv=596546401&output=search&q=patryk+%C5%82usiewicz&source=lnms&entry=mc"
                        }}
                        menu={menu}
                        settings={{
                            menuButton:"Menu"
                        }}
                    />
                        {children}
                    <Footer/>
                </LayoutProvider>
            </body>
        </html>
    );
}
