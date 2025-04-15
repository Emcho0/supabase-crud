import Nav from "@/components/Nav";
import { Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Center>
        <Nav />
      </Center>

      <Outlet />
    </>
  );
}
