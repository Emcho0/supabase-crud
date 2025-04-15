import {
  Blockquote,
  BlockquoteCaption,
  Box,
  Center,
  Heading,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      bg="#BDBFCB"
      color="#060914"
      _dark={{
        bg: "#0F101B",
        color: "#BDBFCB",
      }}
      zIndex={-1}
    >
      <Center mt="95px" animation={"slide-to-right 600ms"}>
        <VStack>
          <Heading fontSize={"2xl"}>
            Web stranica sa Chakra UI i React i Supabase
          </Heading>

          <Blockquote.Root>
            <BlockquoteCaption fontSize="2xl">
              Potrebno je imati Bun, Supabase račun i ključeve kako bi korisnik
              mogao da spoji sa tabelom.
            </BlockquoteCaption>
          </Blockquote.Root>
        </VStack>
      </Center>
    </Box>
  );
}
