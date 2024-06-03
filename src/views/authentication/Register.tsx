import { Link } from "react-router-dom";
import { BoxArrowInRight } from "react-bootstrap-icons";
import {
  Button,
  Heading,
  InputLabel,
  Checkbox,
  InputPassword,
  InputGroup,
  Input,
  Select,
} from "@/components/reactdash-ui";

export default function Register() {
  const register = {
    login: "Login",
    link_login: "/auth2/login",
    register: "Register",
    register_link: "/",
    agree_text: "I agree to the Terms and Conditions",
    or: "Or",
    already: "Already have an account?",
  };

  return (
    <>
      <Heading variant="h3" className="text-center">
        Join Now
      </Heading>
      <hr className="block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700" />
      <form>
        <Heading variant="h4" className="mt-12">
          Step 1 - Contact Information
        </Heading>
        <hr className="block w-full h-0.5 my-5 bg-gray-400 border-gray-400" />

        <InputLabel
          label="First Name"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          required
        />
        <InputLabel
          label="Last Name"
          id="lastName"
          name="lastName"
          required
          placeholder="Enter your last name"
        />
        <InputLabel
          label="Email"
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
        />
        <InputGroup label="Phone" required>
          <InputGroup.Body>
            <Input
              name="phone"
              className="rounded-r-none"
              placeholder="Enter phone number"
            />
          </InputGroup.Body>
          <InputGroup.Body>
            <Input
              name="ext"
              className="rounded-l-none rounded-r-none"
              placeholder="Ext."
            />
          </InputGroup.Body>
          <InputGroup.Body>
            <Input
              name="faxNumber"
              className="rounded-l-none"
              placeholder="Enter fax number"
            />
          </InputGroup.Body>
        </InputGroup>

        <Heading variant="h4" className="mt-12">
          Step 2 - Billing Information
        </Heading>
        <hr className="block w-full h-0.5 my-5 bg-gray-400 border-gray-400" />

        <InputLabel
          label="Company"
          id="company"
          name="company"
          required
          placeholder="Enter company name"
        />
        <InputLabel
          label="Address"
          id="address"
          name="address"
          required
          placeholder="Enter company address"
        />
        <InputGroup label="City, State, Country and Zip" required>
          <InputGroup.Body className="flex-none w-1/2 lg:w-1/4">
            <Input
              name="city"
              className="rounded-r-none"
              placeholder="Enter city"
            />
          </InputGroup.Body>
          <InputGroup.Body className="flex-none w-1/2 lg:w-1/4">
            <Select
              name="state"
              selectClassName="rounded-l-none lg:rounded-r-none"
              placeholder="State"
            />
          </InputGroup.Body>
          <InputGroup.Body className="flex-none w-1/2 lg:w-1/4">
            <Select
              name="country"
              selectClassName="lg:rounded-l-none rounded-r-none"
              placeholder="Country"
            />
          </InputGroup.Body>
          <InputGroup.Body className="flex-none w-1/2 lg:w-1/4">
            <Input
              name="zip"
              className="rounded-l-none"
              placeholder="Enter zip"
            />
          </InputGroup.Body>
        </InputGroup>

        <Heading variant="h4" className="mt-12">
          Step 3 - Shipping Information
        </Heading>
        <hr className="block w-full h-0.5 my-5 bg-gray-400 border-gray-400" />

        <Checkbox name="sameAsBilling" label="Same as Billing" required />
        <InputLabel
          label="Company"
          id="company"
          name="company"
          required
          placeholder="Enter company name"
        />
        <InputLabel
          label="Address"
          id="address"
          name="address"
          required
          placeholder="Enter company address"
        />
        <InputGroup label="City, State, Country and Zip" required>
          <InputGroup.Body className="flex-none w-1/2 lg:w-1/4">
            <Input
              name="city"
              className="rounded-r-none"
              placeholder="Enter city"
            />
          </InputGroup.Body>
          <InputGroup.Body className="flex-none w-1/2 lg:w-1/4">
            <Select
              name="state"
              selectClassName="rounded-l-none lg:rounded-r-none"
              placeholder="State"
            />
          </InputGroup.Body>
          <InputGroup.Body className="flex-none w-1/2 lg:w-1/4">
            <Select
              name="country"
              selectClassName="lg:rounded-l-none rounded-r-none"
              placeholder="Country"
            />
          </InputGroup.Body>
          <InputGroup.Body className="flex-none w-1/2 lg:w-1/4">
            <Input
              name="zip"
              className="rounded-l-none"
              placeholder="Enter zip"
            />
          </InputGroup.Body>
        </InputGroup>

        <Heading variant="h4" className="mt-12">
          Step 4 - Account Information
        </Heading>
        <hr className="block w-full h-0.5 my-5 bg-gray-400 border-gray-400" />

        <Select
          label="Primary Inventory category"
          name="inventoryCategory"
          required
          placeholder="Select a Category"
        />
        <Select
          label="Payment Terms"
          name="paymentTerms"
          required
          placeholder="Choose Payment Terms"
        />
        <InputLabel
          label="Website"
          id="website"
          name="website"
          required
          placeholder="Enter your company website"
        />
        <InputLabel
          label="Username"
          id="username"
          name="username"
          required
          placeholder="Enter a username"
        />
        <InputPassword
          label="Password"
          id="password"
          name="password"
          required
          placeholder="Enter a password"
        />
        <InputPassword
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          required
          placeholder="Repeat password"
        />
        <div className="mb-6">
          <label className="flex flex-row items-center">
            <Checkbox name="tos" value="1" required checked />
            <p className="ml-2">
              I agree to the <a href="#">Terms and Conditions</a>
            </p>
          </label>
        </div>

        <div className="grid">
          <Button type="submit">
            <BoxArrowInRight className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2" />
            Register
          </Button>
        </div>
      </form>

      <div className="mt-4">
        <p className="text-center mb-3">
          <span>{register.or}</span>
        </p>
        <p className="text-center mb-4">
          {register.already}{" "}
          <Link to={register.link_login} className="hover:text-indigo-500">
            {register.login}
          </Link>
        </p>
      </div>
    </>
  );
}
