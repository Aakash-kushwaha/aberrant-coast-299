import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const InnerNav = () => {
  return (
    <Tabs size="md" variant="enclosed">
      <TabList>
        <Tab>Diary</Tab>
        <Tab>Trend</Tab>
        <Tab>Foods</Tab>
        <Tab>Settings</Tab>
        <Tab>Plans</Tab>
        <Tab>Help</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <TabList>
            <Tab>Diary</Tab>
            <Tab>Trend</Tab>
            <Tab>Foods</Tab>
            <Tab>Settings</Tab>
            <Tab>Plans</Tab>
            <Tab>Help</Tab>
          </TabList>
          <TabPanel>
          <p>one3!</p>
        </TabPanel>
        <TabPanel>
          <p>two4!</p>
        </TabPanel>
        <TabPanel>
          <p>one5!</p>
        </TabPanel>
        <TabPanel>
          <p>two6!</p>
        </TabPanel>
        </TabPanel>
        <TabPanel>
          <p>one3!</p>
        </TabPanel>
        <TabPanel>
          <p>two4!</p>
        </TabPanel>
        <TabPanel>
          <p>one5!</p>
        </TabPanel>
        <TabPanel>
          <p>two6!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default InnerNav;
