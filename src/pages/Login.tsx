import React from "react";
import { useDispatch } from "react-redux";
import { loginAsync } from "@/store/authSlice";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CenterAlign from "@/components/CenterAlign";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase-config";

// Updated schema to include password validation
const FormSchema = z.object({
  email: z.string().nonempty({
    message: "Email is required.",
  }),
  password: z.string().nonempty({
    message: "Password is required.",
  }),
});

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: z.infer<typeof FormSchema>) => {
    const { email, password } = data;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userOmitted = (({ uid, email, displayName, photoURL }) => ({  uid, email, displayName, photoURL }))(user);
      const accessToken = await user.getIdToken();
      dispatch(loginAsync({ user: { ...userOmitted, accessToken } }));
      toast({
        title: "Login Successful!",
        description: "Redirecting to Home...",
      });
      navigate("/");
    } catch (error) {
      const errorMessage = (error as any).message || "An error occurred";
      toast({ title: "Login Failed", description: errorMessage });
    }
  };

  return (
    <CenterAlign>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className="w-1/3 space-y-6">
          <h1>Login</h1>
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </CenterAlign>
  );
};

export default Login;
