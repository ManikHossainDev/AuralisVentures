/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Form, message, Spin } from "antd";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { GiPhone } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import InputComponent from "@/components/UI/InputComponent";

// ===================== INTEGRATION IMPORTS (COMMENTED OUT) =====================
// import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";
// import { useRegisterMutation } from "@/redux/features/auth/authApi";
// ============================================================================

interface RegisterFormValues {
  name: string;
  phone: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  // ===================== INTEGRATION STATE (COMMENTED OUT) =====================
  // const router = useRouter();
  // const [register, { isLoading }] = useRegisterMutation();
  // const [pageLoading, setPageLoading] = useState(true);
  // ============================================================================

  // ===================== UI ONLY STATE =====================
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  // ========================================================

  // ===================== INTEGRATION EFFECTS (COMMENTED OUT) =====================
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setPageLoading(false);
  //   }, 100);
  //   return () => clearTimeout(timer);
  // }, []);
  // ==============================================================================

  // ===================== FORM SUBMIT HANDLER (UI ONLY) =====================
  const onFinish = async (values: RegisterFormValues) => {
    // ==================== INTEGRATION CODE (COMMENTED OUT) ====================
    // const formData = new FormData();
    // formData.append("name", values.name);
    // formData.append("email", values.email);
    // formData.append("password", values.password);
    // formData.append("confirmPassword", values.password);
    // formData.append("phone", values.phone);

    // try {
    //   const res = await register(formData).unwrap();
    //   if (res?.statusCode === 201) {
    //     router.push(`/account-verify?email=${encodeURIComponent(values.email)}`);
    //     Swal.fire({
    //       title: "Registration successful!",
    //       text: "Please verify your email.",
    //       icon: "success",
    //     });
    //   }
    // } catch (error: any) {
    //   console.error("Registration Error: ", error);
    //   Swal.fire({
    //     title: "Oops!",
    //     text: error?.data?.message || "Something went wrong during registration",
    //     icon: "error",
    //   });
    // }
    // ============================================================================

    // ==================== UI ONLY - DEMO LOG ====================
    console.log("Registration Form Values:", {
      name: values.name,
      phone: values.phone,
      email: values.email,
      password: values.password,
    });
    message.success("Account created successfully (UI only - integration commented)");
    // ===========================================================
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">
          Register Account
        </h1>

        {/* Registration Form */}
        <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
          {/* Name Field */}
          <Form.Item
            label={
              <span className="text-base font-medium text-[#1A1A1A]">
                Name
              </span>
            }
            name="name"
            rules={[
              { required: true, message: "Please enter your name" },
              {
                min: 3,
                message: "Name must be at least 3 characters",
              },
            ]}
            className="mb-5"
          >
            <InputComponent
              size="large"
              icon={FaUserCircle}
              placeholder="Your email/phone number"
              className="!w-full !border !border-[#E0E0E0] text-[#1A1A1A] placeholder:!text-[#999999] !text-base !rounded-lg !px-4 !py-2.5"
            />
          </Form.Item>

          {/* Phone Field */}
          <Form.Item
            label={
              <span className="text-base font-medium text-[#1A1A1A]">
                Phone
              </span>
            }
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number" },
              {
                pattern: /^[0-9]{10,}$/,
                message: "Please enter a valid phone number",
              },
            ]}
            className="mb-5"
          >
            <InputComponent
              size="large"
              icon={GiPhone}
              placeholder="Your phone number"
              className="!w-full !border !border-[#E0E0E0] text-[#1A1A1A] placeholder:!text-[#999999] !text-base !rounded-lg !px-4 !py-2.5"
            />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            label={
              <span className="text-base font-medium text-[#1A1A1A]">
                Email
              </span>
            }
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              {
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
            className="mb-5"
          >
            <InputComponent
              size="large"
              icon={MdEmail}
              placeholder="Your email address"
              className="!w-full !border !border-[#E0E0E0] text-[#1A1A1A] placeholder:!text-[#999999] !text-base !rounded-lg !px-4 !py-2.5"
            />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label={
              <span className="text-base font-medium text-[#1A1A1A]">
                Password
              </span>
            }
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              {
                min: 6,
                message: "Password must be at least 6 characters",
              },
            ]}
            className="mb-6"
          >
            <InputComponent
              placeholder="Password"
              icon={FaLock}
              isPassword={true}
              size="large"
              className="!w-full !border !border-[#E0E0E0] text-[#1A1A1A] placeholder:!text-[#999999] !text-base !rounded-lg !px-4 !py-2.5"
            />
          </Form.Item>

          {/* Create Account Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-[#1ABC9C] hover:bg-[#16a085] transition-colors rounded-full text-white text-base font-semibold disabled:opacity-50"
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </button>
        </Form>

        {/* Sign In Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-[#666666]">
            If you already have an account with us, please login at the{" "}
          </span>
          <Link
            href="/login"
            className="text-[#1ABC9C] font-semibold hover:underline"
          >
            login page
          </Link>
          <span className="text-[#666666]">.</span>
        </div>
      </div>
    </section>
  );
};

export default Register;