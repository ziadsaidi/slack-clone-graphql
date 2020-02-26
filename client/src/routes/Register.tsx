import React, { useState, FormEvent } from "react";
import {
  Form,
  Button,
  Checkbox,
  Container,
  Input,
  Image
} from "semantic-ui-react";
import styled from "styled-components";

import RegisterLogo from "../assets/register-logo.png";
import { useRegisterMutation } from "../generated/graphql";
import { RouteComponentProps } from "react-router-dom";

const StyledImage = styled(Image)`
  margin: auto;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

export const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [register] = useRegisterMutation();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { data, errors } = await register({
      variables: {
        email,
        password,
        username
      }
    });

    if (data) {
      history.push("/");
    }
  };
  return (
    <Container text>
      <ImageContainer>
        <StyledImage
          rounded
          fluid
          centered
          verticalAlign="middle"
          src={RegisterLogo}
          size="small"
        />
      </ImageContainer>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Field>
          <label>Username</label>
          <Input
            onChange={e => setUsername(e.target.value)}
            placeholder="username"
            fluid
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <Input
            onChange={e => setEmail(e.target.value)}
            placeholder="email"
            fluid
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
            fluid
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};
