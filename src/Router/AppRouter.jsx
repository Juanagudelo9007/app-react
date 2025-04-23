import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Reviews from "../pages/Reviews";
import Finance from "../pages/Finance";
import Contact from "../pages/Contact";
import Calendar from "../pages/Calendar";
import Notes from "../pages/Notes";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  Stack,
  IconButton,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import app from "../components/firebase";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";

function AppRouter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const signOut = () => {
    app.auth().signOut();
  };

  return (
    <div>
      <Box>
        <Flex align="center" justify="center">
          <Stack
            direction="row"
            spacing={6}
            display={{ base: "none", sm: "flex" }}
            justify="center"
            align="center"
          >
            <Link
              className="relative transition-transform duration-500 transform hover:scale-125 after:content-[''] after:absolute after:left-0 after:bottom-0  after:w-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-red-600 after:transition-all  after:duration-500 font-bold  "
              to="/home"
            >
              Home
            </Link>
            <Link to="/notes">Notes</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/finance">Finance</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/reviews">Reviews</Link>
            <Button onClick={signOut}>Log Out</Button>
          </Stack>
        </Flex>
        <IconButton
          ref={btnRef}
          onClick={onOpen}
          colorScheme="gray"
          icon={<HamburgerIcon />}
          position={"absolute"}
          top="3"
          right="3"
          display={{ base: "block", sm: "none" }} // Solo en pantallas pequeñas
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="rgba(0, 0, 0, .8)">
            <DrawerCloseButton color="white" zIndex="10" />
            <DrawerBody>
              <Stack color="whiteAlpha.800" direction="column" spacing={5}>
                <Link
                  to="/home"
                  className="relative text-gray-400 hover:text-white transition-transform duration-500 transform hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-[75%] after:h-[3px] after:bg-white after:transition-all after:duration-500 font-bold"
                >
                  Home
                </Link>

                <Link
                  className="relative text-gray-400 hover:text-white transition-transform duration-500 transform hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-[75%] after:h-[3px] after:bg-white after:transition-all after:duration-500 font-bold"
                  to="/notes"
                >
                  Notes
                </Link>
                <Link
                  className="relative text-gray-400 hover:text-white transition-transform duration-500 transform hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-[75%] after:h-[3px] after:bg-white after:transition-all after:duration-500 font-bold"
                  to="/calendar"
                >
                  Calendar
                </Link>
                <Link
                  className="relative text-gray-400 hover:text-white transition-transform duration-500 transform hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-[75%] after:h-[3px] after:bg-white after:transition-all after:duration-500 font-bold"
                  to="/finance"
                >
                  Finance
                </Link>
                <Link
                  className="relative text-gray-400 hover:text-white transition-transform duration-500 transform hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-[75%] after:h-[3px] after:bg-white after:transition-all after:duration-500 font-bold"
                  to="/contact"
                >
                  Contact
                </Link>
                <Link
                  className="relative text-gray-400 hover:text-white transition-transform duration-500 transform hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-[75%] after:h-[3px] after:bg-white after:transition-all after:duration-500 font-bold"
                  to="/reviews"
                >
                  Reviews
                </Link>
                <Button color="blackAlpha.900" onClick={signOut}>
                  Log Out
                </Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
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
