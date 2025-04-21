import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  Text,
} from "@chakra-ui/react";
import app from "./firebase";

function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const createUser = (email, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userFirebase) => {
        console.log("user was created", userFirebase);
        setIsRegistered(true);
        props.setUser(userFirebase);
      });
  };

  const login = (email, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userFirebase) => {
        console.log("You are logged in with", userFirebase);
        props.setUser(userFirebase);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.emailField.value;
    const password = e.target.passwordField.value;
    console.log(email, password);
    if (!isRegistered) {
      login(email, password);
    }
    if (isRegistered) {
      createUser(email, password);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="emailField" />
            <FormLabel>Password</FormLabel>
            <Input type="password" name="passwordField" />
            <Button type="submit">
              {isLoggedIn ? "Register" : "Please Log in"}
            </Button>
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </form>
        <Text>
          {isLoggedIn ? "¿Already have an account?" : "¿Don't have an account?"}{" "}
          <Button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            variant="link"
            colorScheme="blue"
          >
            {!isLoggedIn ? "Register here" : "log in here"}
          </Button>
        </Text>
      </div>
    </div>
  );
}

export default Login;
