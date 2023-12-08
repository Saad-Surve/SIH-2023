import { useState } from "react";
import adminLogo from "../../assets/admin.jpg";
import { Button, Input, Link } from "@nextui-org/react";
import axios from "axios";
import ServerUrl from "../../constants";
import { Icon } from "@iconify/react";

const NewAdmin = () => {
  const [admin, setAdmin] = useState({
    emailID: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!admin.emailID || !admin.password) {
      alert("Please fill all the fields");
      setIsLoading(false);
      return;
    }

    let response = await axios.post(
      `${ServerUrl}/api/auth/registerAdmin`,
      admin
    );

    if (response.data.userExists) {
      alert("User already exists");
      return;
    }

    if (response.data.success) {
      //set the token of the response.data to a cookie
      alert("Admin has been successfully registered");
      //redirect to the dashboard
      window.location.href = "/loginAdmin";
    }

    setIsLoading(false);
  };

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const logout = () => {
    document.cookie = `token=; path=/; max-age=0`;
    window.location.href = "/";
  };

  return (
    <div className="w-full flex justify-center items-center relative">
      <div
        className="bg-cover bg-center w-full h-screen absolute opacity-90 bg-gradient-to-t brightness-[25%] saturate-150"
        style={{ backgroundImage: `url(${adminLogo})` }}
      ></div>
      <Button
        onPress={logout}
        color="danger"
        className="absolute top-0 right-0 mt-4 mr-4 text-red-600 bg-white hover:bg-red-400 hover:text-white"
      >
        <Icon icon="material-symbols:logout" />
        Logout
      </Button>
      <div className="bg-white w-[40%] h-[70%] flex flex-col gap-6 items-center justify-center  rounded-[20px] z-10 ">
        <div className="border-b-2 border-[#6E6E91] w-4/5 text-center pb-4 font-saira">
          Make New Admin
        </div>
        <form
          className="w-4/5 gap-6 flex flex-col"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            label="Email ID Of New Admin"
            name="emailID"
            placeholder="Enter email ID of New Admin"
            classNames={{
              input: ["p-0", "focus:ring-0", "border-none"],
            }}
            onChange={handleChange}
          />
          <Input
            type="password"
            label="Password Of New Admin"
            name="password"
            placeholder="Enter your password"
            classNames={{
              input: ["p-0", "focus:ring-0", "border-none"],
            }}
            onChange={handleChange}
          />
          <Button
            size="large"
            type="submit"
            color="primary"
            isLoading={isLoading}
            className="text-primary border-2 font-bold bg-white border-primary text-lg hover:bg-primary hover:text-white"
          >
            {isLoading ? "Registering" : "Register"}
          </Button>
        </form>
        <div className="w-4/5 flex gap-10">
          <Link href="/pendingRequests" className="w-full">
            <Button className="w-full" color="primary" size="large">
              Pending Requests
            </Button>
          </Link>
          <Link href="/updateContent" className="w-full">
            <Button className="w-full" color="primary" size="large">
              Update Content
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewAdmin;
