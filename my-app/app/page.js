import react from "react";
import { Theme } from "@radix-ui/themes";
import Navigation from "./App/components/navigation";
export default function Home() {
  return (
    <>
    <Theme>
      <Navigation showLoginButton={true} showUserIcon={false} />
    </Theme>

    </>
  );
}
