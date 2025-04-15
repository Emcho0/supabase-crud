import { Link as ChakraLink, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <HStack
      bg="#343742"
      color="#C6DFEC"
      rounded="xl"
      padding="5"
      animation={"slide-from-top 500ms"}
      _dark={{
        bg: "#1D202B",
        color: "#BDBFCB",
      }}
    >
      <ChakraLink
        asChild
        color="#C6DFEC"
        _dark={{
          color: "#BDBFCB",
        }}
      >
        <Link to="/">Početna</Link>
      </ChakraLink>
      <ChakraLink
        asChild
        color="#C6DFEC"
        _dark={{
          color: "#BDBFCB",
        }}
      >
        <Link to="/database">Baza podataka</Link>
      </ChakraLink>
    </HStack>
  );
}
