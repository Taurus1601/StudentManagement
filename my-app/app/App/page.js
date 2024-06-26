"use client";
import { Tabs, Theme,Box,Text, Table, Flex, Avatar } from "@radix-ui/themes";
import Navigation from "./components/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect , useState} from "react";


function Dashboard() {
    return (
       <>
    
    
      <Flex style={{gap:300 , marginRight:180, marginTop:100, marginBottom:-40}} align="center" justify="center">
        <Avatar size="5" radius="full" fallback="T" color="indigo" />
        <Box>
          <Text as="div" size="4" weight="bold">
            Teodros Girmay
          </Text>
          <Text as="div" size="4" color="gray">
        CSE - 4th Sem
          </Text>
        </Box>
      </Flex>


        <Tabs.Root defaultValue="account" style={{padding:100}}>
        <Tabs.List >
          <Tabs.Trigger value="account">Subject</Tabs.Trigger>
          <Tabs.Trigger value="documents">Marks</Tabs.Trigger>
          <Tabs.Trigger value="settings">Attendance</Tabs.Trigger>
        </Tabs.List>
      
        <Box pt="3">
          <Tabs.Content value="account">
           


          <Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Subject</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Credits</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>Software project Management</Table.RowHeaderCell>
      <Table.Cell>5</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Web Security</Table.RowHeaderCell>
      <Table.Cell>6</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Cloud Computing</Table.RowHeaderCell>
      <Table.Cell>3</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>




          </Tabs.Content>
      
          <Tabs.Content value="documents">
           

          <Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Subject</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Obtained</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Out of</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>Software project Management</Table.RowHeaderCell>
      <Table.Cell>30</Table.Cell>
      <Table.Cell>30</Table.Cell>

    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Web Security</Table.RowHeaderCell>
      <Table.Cell>30</Table.Cell>
      <Table.Cell>30</Table.Cell>

    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Cloud Computing</Table.RowHeaderCell>
      <Table.Cell>30</Table.Cell>
      <Table.Cell>30</Table.Cell>

    </Table.Row>
  </Table.Body>
</Table.Root>



          </Tabs.Content>
      
          <Tabs.Content value="settings">
            


          <Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Subject</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Attended</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Total Classes</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>Software project Management</Table.RowHeaderCell>
      <Table.Cell>28</Table.Cell>
      <Table.Cell>30</Table.Cell>

    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Web Security</Table.RowHeaderCell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>28</Table.Cell>

    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Cloud Computing</Table.RowHeaderCell>
      <Table.Cell>35</Table.Cell>
      <Table.Cell>40</Table.Cell>

    </Table.Row>
  </Table.Body>
</Table.Root>




          </Tabs.Content>
        </Box>
      </Tabs.Root>
       </>
    );
}


function App() {
    const [style, setStyle] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setStyle(true);
        }, 1500);
        
    },[])
    return (
        <>
      <Navigation showLoginButton={false} />
      <AnimatePresence>
      { style==false &&
        (<motion.div initial={{ opacity: 0  }} animate={{ opacity: 1  }} transition={{ duration: 0.3  }} exit={{opacity:0}}
        className="text-8xl font-bold text-slate-500 text-center absolute top-1/3 left-1/2 translate-x-[-50%] translate-y-[-30%] z-10"
        >
            Welcome to Dashboard
          </motion.div>)
      }

      </AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5  , delay:2}}>
          <Theme>
                <Dashboard />
            </Theme>
      </motion.div>
        </>
    );
}

export default App;