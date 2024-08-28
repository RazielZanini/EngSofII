import { Inter } from "next/font/google";
import "../styles/globals.css";
import MainContainer from "@/components/infra/MainContainer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ConvertHub",
  description: "Conversor de câmbios/distâncias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainContainer>
          {children}
        </MainContainer>
      </body>
    </html>
  );
}
