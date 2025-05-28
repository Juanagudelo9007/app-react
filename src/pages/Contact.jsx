import { useSafeLayoutEffect } from "@chakra-ui/react";
import { set } from "firebase/database";
import React, { useState } from "react";

function Contact() {
  const [contactOpen, setContactOpen] = useState(false);

  const formOpen = () => setContactOpen(true);
  const formClose = () => setContactOpen(false);

  return (
    <div>
      <div>
        <div>{setcon}</div>
      </div>
    </div>
  );
}

export default Contact;
