"use client";
// import { useState } from "react";
import Link from "next/link";
import { Form, message,  } from "antd";
// import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import InputComponent from "@/components/UI/InputComponent";

// ===================== INTEGRATION IMPORTS (COMMENTED OUT) =====================
// import { useLoginMutation } from "@/redux/features/auth/authApi";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { selectCurrentUser, selectToken, setUser } from "@/redux/features/auth/authSlice";
// import { isAdminRole } from "@/utils/role";
// import Swal from "sweetalert2";
// ============================================================================

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  // ===================== INTEGRATION STATE (COMMENTED OUT) =====================
  // const router = useRouter();
  // const dispatch = useAppDispatch();
  // const token = useAppSelector(selectToken);
  // const currentUser = useAppSelector(selectCurrentUser);
  // const [login, { isLoading }] = useLoginMutation();
  // const [pageLoading, setPageLoading] = useState(true);
  // ============================================================================

  // ===================== UI ONLY STATE =====================
  // const [isLoading, setIsLoading] = useState(false);
  // const [pageLoading, setPageLoading] = useState(false);
  // ========================================================

  // ===================== INTEGRATION EFFECTS (COMMENTED OUT) =====================
  // useEffect(() => {
  //   if (token) {
  //     router.replace(isAdminRole(currentUser?.role) ? "/admin-dashboard" : "/");
  //     return;
  //   }

  //   const timer = setTimeout(() => {
  //     setPageLoading(false);
  //   }, 100);

  //   return () => clearTimeout(timer);
  // }, [token, currentUser?.role, router]);
  // ==============================================================================

  // ===================== FORM SUBMIT HANDLER (UI ONLY) =====================
  const onFinish = async (values: LoginFormValues) => {
    // ==================== INTEGRATION CODE (COMMENTED OUT) ====================
    // const loginData = {
    //   email: values.email,
    //   password: values.password,
    // };

    // try {
    //   const res = await login(loginData).unwrap();
    //   console.log("Login Response: ", res);
    //   if (res?.statusCode === 200) {
    //     dispatch(
    //       setUser({
    //         user: res.data.user,
    //         token: res.data.tokens?.accessToken,
    //         refreshToken: res.data.tokens?.refreshToken,
    //       })
    //     );
    //     message.success("Logged in successfully");
    //     router.push(isAdminRole(res.data.user?.role) ? "/admin-dashboard" : "/");
    //   }
    // } catch (error: any) {
    //   console.error("Login Error: ", error);
    //   Swal.fire({
    //     title: "Something went wrong",
    //     text: `${error?.data?.message}`,
    //     icon: "error",
    //   });
    // }
    // ============================================================================

    // ==================== UI ONLY - DEMO LOG ====================
    console.log("Form Values:", {
      email: values.email,
      password: values.password,
    });
    message.success("Login form submitted (UI only - integration commented)");
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
        <h1 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">
          Account Login
        </h1>

        <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
          {/* Email/Phone Field */}
          <Form.Item
            label={
              <span className="text-base font-medium text-[#1A1A1A]">
                Phone / E-Mail
              </span>
            }
            name="email"
            rules={[
              { required: true, message: "Please enter your email or phone" },
              {
                validator: (_, value) => {
                  if (!value) return Promise.resolve();
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  const phoneRegex = /^\d{10,}$/;
                  if (emailRegex.test(value) || phoneRegex.test(value.replace(/\D/g, ""))) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Please enter a valid email or phone"));
                },
              },
            ]}
            className="mb-5"
          >
            <InputComponent
              size="large"
              icon={MdEmail}
              placeholder="Your email/phone number"
              className="!w-full !border !border-[#E0E0E0] placeholder:!text-[#999999] !text-base !rounded-lg !px-4 !py-2.5"
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
            rules={[{ required: true, message: "Please enter your password" }]}
            className="mb-2"
          >
            <InputComponent
              placeholder="Password"
              icon={FaLock}
              isPassword={true}
              size="large"
              className="!w-full !border !border-[#E0E0E0] placeholder:!text-[#999999] !text-base !rounded-lg !px-4 !py-2.5"
            />
          </Form.Item>

          {/* Forgot Password Link */}
          <div className="flex justify-end mb-6">
            <Link
              href="/forgot-password"
              className="text-sm text-[#1ABC9C] hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            // disabled={isLoading}
            className="w-full py-3 bg-[#1ABC9C] hover:bg-[#16a085] transition-colors rounded-full text-white text-base font-semibold disabled:opacity-50"
          >
            {/* {isLoading ? "Signing in..." : "Sign In"} */} Sign In
          </button>
        </Form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-[#666666]">Don&apos;t have an account? </span>
          <Link
            href="/register"
            className="text-[#1ABC9C] font-semibold hover:underline"
          >
            Create one
          </Link>
        </div>

        {/* Social Login - UI ONLY */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#666666] mb-4">Or login with</p>
          <div className="flex justify-center gap-6">
            {/* ==================== GOOGLE LOGIN (UI ONLY) ==================== */}
            <button
              type="button"
              onClick={() => console.log("Google login clicked")}
              className="w-12 h-12 rounded-full border border-[#E0E0E0] flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <FcGoogle size={32} />
            </button>
            {/* ============================================================== */}

            {/* ==================== FACEBOOK LOGIN (UI ONLY) ==================== */}
            <button
              type="button"
              onClick={() => console.log("Facebook login clicked")}
              className="w-12 h-12 rounded-full border border-[#E0E0E0] flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <FaFacebook size={32} color="#1877F2" />
            </button>
            {/* ================================================================ */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;