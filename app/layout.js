import "./globals.css";

export const metadata = {
  title: "Web Wise Dynamics",
  description: "Web Development",  
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" /> 
      <body>{children}</body>
    </html>
  );
}
