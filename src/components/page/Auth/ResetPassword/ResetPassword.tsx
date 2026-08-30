"use client";
import { useState } from "react";
import { Form, message } from "antd";
import { useRouter } from "next/navigation";
import InputComponent from "@/components/UI/InputComponent";
import { FaLock } from "react-icons/fa";

// ===================== INTEGRATION IMPORTS (COMMENTED OUT) =====================
// import { useEffect } from "react";
// import { Spin } from "antd";
// import { useResitPasswordMutation } from "@/redux/features/auth/authApi";
// import Swal from "sweetalert2";
// ============================================================================

interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

const ResetPassword: React.FC = () => {
  const router = useRouter();

  // ===================== INTEGRATION STATE (COMMENTED OUT) =====================
  // const [resetPassword, { isLoading }] = useResitPasswordMutation();
  // const [pageLoading, setPageLoading] = useState(true);
  // ============================================================================

  // ===================== UI ONLY STATE =====================
  const [isLoading, setIsLoading] = useState(false);
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
  const onFinish = async (values: ResetPasswordFormValues) => {
    // ==================== INTEGRATION CODE (COMMENTED OUT) ====================
    // try {
    //   const res = await resetPassword({
    //     newPassword: values.password,
    //     confirmPassword: values.confirmPassword,
    //   }).unwrap();

    //   if (res?.statusCode === 200) {
    //     Swal.fire({
    //       title: "Success",
    //       text: "Password reset successfully",
    //       icon: "success",
    //     });
    //     router.push("/login");
    //   }
    // } catch (error: any) {
    //   const errorMessage =
    //     error?.data?.errors?.[0]?.message ||
    //     error?.data?.message ||
    //     error?.message ||
    //     "Failed to reset password.";
    //   Swal.fire({
    //     title: "Error",
    //     text: errorMessage,
    //     icon: "error",
    //   });
    // }
    // ============================================================================

    // ==================== UI ONLY - DEMO LOG ====================
    setIsLoading(true);
    console.log("Reset Password Form Values:", {
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
    setTimeout(() => {
      setIsLoading(false);
      message.success("Password reset successfully (UI only - integration commented)");
      router.push("/login");
    }, 800);
    // ===========================================================
  };

  // if (pageLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <Spin size="large" />
  //     </div>
  //   );
  // }

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2 text-center">
          Reset password
        </h1>
        <p className="text-sm text-[#666666] mb-8 text-center">
          Password must be at least 8 characters and include uppercase,
          lowercase, number, and special character.
        </p>

        <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
          {/* New Password Field */}
          <Form.Item
            label={
              <span className="text-base font-medium text-[#1A1A1A]">
                New Password
              </span>
            }
            name="password"
            rules={[
              { required: true, message: "Please enter a new password" },
              { min: 8, message: "Password must be at least 8 characters" },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,72}$/,
                message:
                  "Password must include uppercase, lowercase, number, and special character",
              },
            ]}
            hasFeedback
            className="mb-3.5"
          >
            <InputComponent
              size="large"
              icon={FaLock}
              isPassword={true}
              placeholder="New Password"
              className="!w-full !border !border-[#E0E0E0] placeholder:!text-[#999999] !text-base !rounded-lg !px-4 !py-2.5"
            />
          </Form.Item>

          {/* Confirm Password Field */}
          <Form.Item
            label={
              <span className="text-base font-medium text-[#1A1A1A]">
                Confirm Password
              </span>
            }
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your new password" },
              { min: 8, message: "Password must be at least 8 characters" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
            hasFeedback
            className="mb-5"
          >
            <InputComponent
              size="large"
              icon={FaLock}
              isPassword={true}
              placeholder="Confirm New Password"
              className="!w-full !border !border-[#E0E0E0] placeholder:!text-[#999999] !text-base !rounded-lg !px-4 !py-2.5"
            />
          </Form.Item>

          {/* Reset Password Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-[#1ABC9C] hover:bg-[#16a085] transition-colors rounded-full text-white text-base font-semibold disabled:opacity-50"
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </Form>
      </div>
    </section>
  );
};

export default ResetPassword;