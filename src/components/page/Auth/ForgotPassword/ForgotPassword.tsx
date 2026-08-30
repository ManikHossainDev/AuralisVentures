"use client";
import { useState } from "react";
import Link from "next/link";
import { Form, message } from "antd";
import { useRouter } from "next/navigation";
import InputComponent from "@/components/UI/InputComponent";
import { MdEmail } from "react-icons/md";

// ===================== INTEGRATION IMPORTS (COMMENTED OUT) =====================
// import { useEffect } from "react";
// import { Spin } from "antd";
// import { useForgetPasswordMutation } from "@/redux/features/auth/authApi";
// import Swal from "sweetalert2";
// import { useAppDispatch } from "@/redux/hooks";
// import { setForgotPassToken } from "@/redux/features/auth/authSlice";
// ============================================================================

interface ForgotPasswordFormValues {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const router = useRouter();

  // ===================== INTEGRATION STATE (COMMENTED OUT) =====================
  // const dispatch = useAppDispatch();
  // const [forgetPassword, { isLoading }] = useForgetPasswordMutation();
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
  const onFinish = async (values: ForgotPasswordFormValues) => {
    // ==================== INTEGRATION CODE (COMMENTED OUT) ====================
    // try {
    //   const res = await forgetPassword({ email: values.email }).unwrap();
    //   console.log(res);
    //   if (res?.statusCode === 200) {
    //     dispatch(setForgotPassToken(res.data?.forgotPassToken));
    //     router.push(`/verify-email?email=${encodeURIComponent(values.email)}`);
    //   }
    // } catch (error: any) {
    //   console.error("Forgot password error:", error);
    //   const errorMessage = error?.data?.message || error?.message;
    //   Swal.fire({
    //     title: "Error",
    //     text: errorMessage,
    //     icon: "error",
    //   });
    // }
    // ============================================================================

    // ==================== UI ONLY - DEMO LOG ====================
    setIsLoading(true);
    console.log("Forgot Password Form Values:", {
      email: values.email,
    });
    setTimeout(() => {
      setIsLoading(false);
      message.success("OTP sent (UI only - integration commented)");
      router.push(`/verify-email?email=${encodeURIComponent(values.email)}`);
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
          Forgot your password?
        </h1>
        <p className="text-sm text-[#666666] mb-8 text-center">
          Please enter your email to reset your password.
        </p>

        <Form<ForgotPasswordFormValues>
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          {/* Email Field */}
          <Form.Item
            label={
              <span className="text-base font-medium text-[#1A1A1A]">
                Email Address
              </span>
            }
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
            className="mb-5"
          >
            <InputComponent
              size="large"
              icon={MdEmail}
              placeholder="Email Address"
              className="!w-full !border !border-[#E0E0E0] placeholder:!text-[#999999] !text-base !rounded-lg !px-4 !py-2.5"
            />
          </Form.Item>

          {/* Send OTP Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-[#1ABC9C] hover:bg-[#16a085] transition-colors rounded-full text-white text-base font-semibold disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send OTP"}
          </button>
        </Form>

        {/* Sign In Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-[#666666]">Remember your password? </span>
          <Link
            href="/login"
            className="text-[#1ABC9C] font-semibold hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;