import 'css/Global.scss';
// import 'css/Utils.scss';
// import 'css/Mixins.scss';
// import 'css/Variables.scss';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta name="robots" content="noindex nofollow" />
            </head>
            <body>{children}</body>
        </html>
    );
}
