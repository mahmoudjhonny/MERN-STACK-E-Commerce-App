import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://filmfaremiddleeast.com/wp-content/uploads/2021/01/fashion-featured-image-1170x600.png");
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 10px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="password" />
          <Button>Log In</Button>
          <Link>Do You have forget password ?</Link>
          <Link>Create A New Account?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
