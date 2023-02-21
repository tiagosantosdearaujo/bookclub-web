import {
  LoguinScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen,
} from "../screens";

export const unauthRoutes = [
  {
    path: "/",
    element: <LoguinScreen />,
  },
  {
    path: "/signup",
    element: <RegisterScreen />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordScreen />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordScreen />,
  },
];
