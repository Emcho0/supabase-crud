import {
  Box,
  Center,
  Dialog,
  DialogFooter,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import { LuHeart } from "react-icons/lu";
import yorumi from "../assets/yorumi.png";
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

          <Dialog.Root>
            <DialogFooter fontSize={"2xl"}>
              Tema je Yorumi
              <Image src={yorumi} width={"10"} height={"10"} rounded={"xl"} />i
              napravljena je sa
              <LuHeart />
            </DialogFooter>
          </Dialog.Root>
        </VStack>
      </Center>
    </Box>
  );
}
