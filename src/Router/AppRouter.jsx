import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Reviews from "../pages/Reviews";
import Finance from "../pages/Finance";
import Contact from "../pages/Contact";
import Calendar from "../pages/Calendar";
import Notes from "../pages/Notes";
import { Link } from "react-router-dom";
import { Box, Flex, Text, HStack, Button } from "@chakra-ui/react";

function AppRouter() {
  return (
    <div>
      <Box>
        <Flex align="center" justify="space-between">
          <Text></Text>
          <HStack>
            <Link to="/Home">Home</Link>
            <Link to="/Notes">Notes</Link>
            <Link to="/Calendar">Calendar</Link>
            <Link to="/Finance">Finance</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Reviews">Reviews</Link>
          </HStack>
        </Flex>
      </Box>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="finance" element={<Finance />} />
        <Route path="contact" element={<Contact />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
