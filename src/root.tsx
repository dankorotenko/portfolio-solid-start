// @refresh reload
import { Suspense, createSignal } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Route,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import MenuButton from "./components/MenuButton";
import NavBar from "./components/Navbar";
import Trailer from "./components/Trailer";
import "./index.css";

export default function Root() {
  const [openedNav, setOpenedNav] = createSignal(false);
  return (
    <Html lang="en">
      <Head>
        <Title>Synestia</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
          <Trailer />
            <main class={`${openedNav() ? "opened" : "closed"}`}>
              <Routes>
                <FileRoutes />
              </Routes>
            </main>
            <NavBar openedNav={openedNav()} setOpenedNav={setOpenedNav}/>
            <MenuButton openedNav={openedNav()} setOpenedNav={setOpenedNav} />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
