import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { PageWrapper } from "./PageWrapper";

hydrate();

async function hydrate() {
  // For Client-side Routing we should use `useClientRouter()` instead of `getPage()`.
  // See https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage();
  const { Page, pageProps } = pageContext;
  ReactDOM.hydrate(
    <PageWrapper pageContext={pageContext}>
      <Page {...pageProps} />
    </PageWrapper>,
    document.getElementById("page-view")
  );
}