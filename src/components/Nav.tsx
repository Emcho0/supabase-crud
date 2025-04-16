import { Link as ChakraLink } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";

import { useColorMode } from "@/components/ui/color-mode";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";
export default function Nav() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack
      bg="#343742"
      color="#C6DFEC"
      rounded="xl"
      mt="4"
      padding="4"
      animation={"slide-from-top 500ms"}
      _dark={{
        bg: "#1D202B",
        color: "#BDBFCB",
      }}
    >
      <ChakraLink
        asChild
        fontSize={"xl"}
        color="#C6DFEC"
        _dark={{
          color: "#BDBFCB",
        }}
      >
        <Link to="/">Početna</Link>
      </ChakraLink>
      <ChakraLink
        asChild
        fontSize={"xl"}
        color="#C6DFEC"
        _dark={{
          color: "#BDBFCB",
        }}
      >
        <Link to="/database">Baza podataka</Link>
      </ChakraLink>
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton
          fontSize={"xl"}
          onClick={toggleColorMode}
          variant="ghost"
          size="md"
          _hover={{
            background: "#42608A",
          }}
          color="#C6DFEC"
          _dark={{
            color: "#BDBFCB",
            _hover: {
              background: "#597BC0",
            },
          }}
        >
          {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
      </ClientOnly>
    </HStack>
  );
}
