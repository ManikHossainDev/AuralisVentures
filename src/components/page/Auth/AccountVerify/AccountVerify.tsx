/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Form, Input, message } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { MdOutlinePassword } from "react-icons/md";

// ===================== INTEGRATION IMPORTS (COMMENTED OUT) =====================
// import { useEffect } from "react";
// import { Spin } from "antd";
// import {
//   useVerifyAccountMutation,
//   useResendOtpMutation,
// } from "@/redux/features/auth/authApi";
// import Swal from "sweetalert2";
// ============================================================================

interface OTPFormValues {
  otp: string;
}

const AccountVerify: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  // ===================== INTEGRATION STATE (COMMENTED OUT) =====================
  // const [verifyAccount, { isLoading }] = useVerifyAccountMutation();
  // const [resendOtp, { isLoading: isResending }] = useResendOtpMutation();
  // const [pageLoading, setPageLoading] = useState(true);
  // ============================================================================

  // ===================== UI ONLY STATE =====================
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
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
  const onFinish = async (values: OTPFormValues) => {
    // ==================== INTEGRATION CODE (COMMENTED OUT) ====================
    // if (!email) {
    //   Swal.fire({
    //     title: "Error",
    //     text: "Email address is missing.",
    //     icon: "error",
    //   });
    //   return;
    // }

    // try {
    //   const response = await verifyAccount({
    //     email,
    //     otp: values.otp,
    //   }).unwrap();

    //   if (response?.statusCode === 200) {
    //     Swal.fire({
    //       title: "Verify success",
    //       text: response?.message || "Email verified. Wait for admin approval before logging in.",
    //       icon: "success",
    //     });
    //     router.push("/login");
    //   }
    // } catch (error: any) {
    //   Swal.fire({
    //     title: "Something went wrong",
    //     text: error?.data?.message || "Account verification failed.",
    //     icon: "error",
    //   });
    // }
    // ============================================================================

    // ==================== UI ONLY - DEMO LOG ====================
    setIsLoading(true);
    console.log("OTP Form Values:", {
      email,
      otp: values.otp,
    });
    setTimeout(() => {
      setIsLoading(false);
      message.success("OTP submitted (UI only - integration commented)");
      router.push("/login");
    }, 800);
    // ===========================================================
  };

  // ===================== RESEND HANDLER (UI ONLY) =====================
  const handleResend = async () => {
    // ==================== INTEGRATION CODE (COMMENTED OUT) ====================
    // if (!email) {
    //   Swal.fire({
    //     title: "Error",
    //     text: "Email address is missing.",
    //     icon: "error",
    //   });
    //   return;
    // }

    // try {
    //   const response = await resendOtp({ email }).unwrap();
    //   if (response?.statusCode === 200) {
    //     Swal.fire({
    //       title: "Success",
    //       text: response?.message || "A new verification code has been sent to your email.",
    //       icon: "success",
    //     });
    //   }
    // } catch (error: any) {
    //   Swal.fire({
    //     title: "Error",
    //     text: error?.data?.message || "Failed to resend OTP.",
    //     icon: "error",
    //   });
    // }
    // ============================================================================

    // ==================== UI ONLY - DEMO LOG ====================
    setIsResending(true);
    console.log("Resend OTP clicked for:", email);
    setTimeout(() => {
      setIsResending(false);
      message.success("OTP resent (UI only - integration commented)");
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
          Account Verify
        </h1>

        <p className="text-sm text-[#666666] mb-1 text-center">
          Please check your email and enter the verification code.
        </p>

        {email && (
          <p className="mb-8 break-all text-xs text-[#999999] text-center">
            {email}
          </p>
        )}
        {!email && <div className="mb-8" />}

        <Form
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          autoComplete="off"
        >
          {/* OTP Field */}
          <Form.Item
            name="otp"
            rules={[
              {
                required: true,
                message: "Please enter the OTP.",
              },
              {
                len: 5,
                message: "OTP must be 5 digits.",
              },
              {
                pattern: /^\d+$/,
                message: "OTP must contain numbers only.",
              },
            ]}
            className="mb-5"
          >
            <Input
              size="large"
              prefix={<MdOutlinePassword className="text-xl text-[#999999]" />}
              placeholder="Enter OTP"
              maxLength={5}
              inputMode="numeric"
              autoComplete="one-time-code"
              className="!w-full !border !border-[#E0E0E0] placeholder:!text-[#999999] !text-base !rounded-lg !px-4 !py-2.5"
            />
          </Form.Item>

          {/* Verify Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-[#1ABC9C] hover:bg-[#16a085] transition-colors rounded-full text-white text-base font-semibold disabled:opacity-50"
          >
            {isLoading ? "Verifying..." : "Verify Account"}
          </button>
        </Form>

        {/* Resend Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-[#666666]">Didn&apos;t receive the code? </span>
          <button
            type="button"
            onClick={handleResend}
            disabled={isResending}
            className="text-[#1ABC9C] font-semibold hover:underline disabled:opacity-50"
          >
            {isResending ? "Sending..." : "Resend Code"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccountVerify;