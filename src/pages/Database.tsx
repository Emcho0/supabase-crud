import supabase from "@/utils/supabase";
import { Box, For } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Database() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }

  return (
    <Box
      width={"100vw"}
      minHeight={"100vh"}
      animation={"slide-from-top 800ms"}
      bg="#BDBFCB"
      color="#060914"
      _dark={{
        bg: "#0F101B",
        color: "#BDBFCB",
      }}
    >
      <For each={instruments}>{(instrument) => <li>{instrument.name}</li>}</For>
    </Box>
  );
}

export default Database;
