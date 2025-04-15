import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      width={"100vw"}
      minHeight={"100vh"}
      animation={"slide-to-right 600ms"}
      bg="#BDBFCB"
      color="#060914"
      _dark={{
        bg: "#0F101B",
        color: "#BDBFCB",
      }}
    >
      <Heading>Web stranica sa Chakra UI i React i Supabase</Heading>
    </Box>
  );
}
