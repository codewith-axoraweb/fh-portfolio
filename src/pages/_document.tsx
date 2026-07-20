import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-background from-blue-500 to-blue-800 text-zinc-950 antialiased selection:bg-gradient-to-r selection:text-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
