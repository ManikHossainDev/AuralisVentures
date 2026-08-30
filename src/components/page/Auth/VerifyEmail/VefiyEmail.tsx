"use client";
import { useState } from "react";
import { Form, message } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import InputComponent from "@/components/UI/InputComponent";
import { MdOutlinePassword } from "react-icons/md";

// ===================== INTEGRATION IMPORTS (COMMENTED OUT) =====================
// import { useEffect } from "react";
// import { Spin } from "antd";
// import { useForgetPasswordMutation, useVerifyEmailMutation } from "@/redux/features/auth/authApi";
// import { selectForgotPassToken, setForgotPassToken, setResetToken } from "@/redux/features/auth/authSlice";
// import { useSelector } from "react-redux";
// import Swal from "sweetalert2";
// import { useAppDispatch } from "@/redux/hooks";
// ============================================================================

interface OTPFormValues {
  otp: string;
}

const VerifyEmail: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  // ===================== INTEGRATION STATE (COMMENTED OUT) =====================
  // const token = useSelector(selectForgotPassToken);
  // const dispatch = useAppDispatch();
  // const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  // const [forgetPassword] = useForgetPasswordMutation();
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
    // const data = {
    //   forgotPassToken: token,
    //   email: email,
    //   otp: values?.otp,
    // };
    // try {
    //   const res = await verifyEmail(data).unwrap();
    //   console.log("verifyEmail", res);

    //   if (res?.statusCode === 200) {
    //     dispatch(setResetToken(res.data?.accessToken));
    //     router.push("/reset-password");
    //   }
    // } catch (error: any) {
    //   console.error("Email verification error:", error);
    //   const errorMessage =
    //     error?.data?.message ||
    //     error?.message ||
    //     "Failed to verify email. Please try again.";
    //   Swal.fire({
    //     title: "Error",
    //     text: errorMessage,
    //     icon: "error",
    //   });
    // }
    // ============================================================================

    // ==================== UI ONLY - DEMO LOG ====================
    setIsLoading(true);
    console.log("Verify Email Form Values:", {
      email,
      otp: values.otp,
    });
    setTimeout(() => {
      setIsLoading(false);
      message.success("Email verified (UI only - integration commented)");
      router.push("/reset-password");
    }, 800);
    // ===========================================================
  };

  // ===================== RESEND HANDLER (UI ONLY) =====================
  const handleResend = async () => {
    // ==================== INTEGRATION CODE (COMMENTED OUT) ====================
    // try {
    //   const res = await forgetPassword({ email }).unwrap();
    //   console.log("forgetPassword", res);

    //   if (res?.statusCode === 200) {
    //     Swal.fire({
    //       title: "Success",
    //       text: "A new code has been sent to your email",
    //       icon: "success",
    //     });
    //     dispatch(setForgotPassToken(res.data?.forgotPassToken));
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
    setIsResending(true);
    console.log("Resend code clicked for:", email);
    setTimeout(() => {
      setIsResending(false);
      message.success("A new code has been sent (UI only - integration commented)");
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
          Verify email
        </h1>
        <p className="text-sm text-[#666666] mb-1 text-center">
          Please check your email and enter the code
        </p>

        {email && (
          <p className="mt-2 mb-8 break-all text-xs text-[#999999] text-center">
            {email}
          </p>
        )}
        {!email && <div className="mb-8" />}

        <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
          {/* OTP Field */}
          <Form.Item
            name="otp"
            rules={[
              { required: true, message: "Please enter the OTP" },
              { len: 5, message: "OTP must be 5 digits" },
            ]}
            className="mb-5"
          >
            <InputComponent
              size="large"
              icon={MdOutlinePassword}
              placeholder="Enter OTP"
              className="!w-full !border !border-[#E0E0E0] placeholder:!text-[#999999] !text-base !rounded-lg !px-4 !py-2.5"
            />
          </Form.Item>

          {/* Verify Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-[#1ABC9C] hover:bg-[#16a085] transition-colors rounded-full text-white text-base font-semibold disabled:opacity-50"
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </Form>

        {/* Resend Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-[#666666]">Didn&apos;t receive code? </span>
          <button
            type="button"
            onClick={handleResend}
            disabled={isResending}
            className="text-[#1ABC9C] font-semibold hover:underline disabled:opacity-50"
          >
            {isResending ? "Sending..." : "Resend"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VerifyEmail;