// app/layout.js
import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "My Fan Page",
  description: "A page about the movies that I love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer style={{ marginTop: "3rem", textAlign: "center", color: "#fff" }}>
          Built with Next JS🩷maya.
        </footer>
      </body>
    </html>
  );
}