import React from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../shared/utils/validators";
import { useForm } from "../../shared/hooks/form-hook";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr/>
      <form className="place-form" onSubmit={authSubmitHandler}>
        <Input
          onInput={inputHandler}
          id="email"
          element="input"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
        />
        <Input
          onInput={inputHandler}
          id="password"
          element="input"
          type="password"
          label="Passsword"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
        />
        <Button type="submit" disables={!!formState.isValid}>LOGIN</Button>
      </form>
      ;
    </Card>
  );
};

export default Auth;
