import supabase from "@/utils/supabase";
import { Box, Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
function Database() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data || []);
  }

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
      <Table.Root size="lg" mt="95px" animation={"slide-to-right 600ms"}>
        <Table.Header>
          <Table.Row
            bg="#878996"
            rounded="xl"
            color="#060914"
            _dark={{ bg: "#121520", color: "#BDBFCB" }}
          >
            <Table.ColumnHeader>Šifra</Table.ColumnHeader>
            <Table.ColumnHeader>Naziv instrumenta</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="middle">Cijena</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {instruments.map((instrument) => (
            <Table.Row key={instrument.id}>
              <Table.Cell>{instrument.id}</Table.Cell>
              <Table.Cell>{instrument.ime}</Table.Cell>
              <Table.Cell textAlign="middle">{instrument.cijena}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}

export default Database;
