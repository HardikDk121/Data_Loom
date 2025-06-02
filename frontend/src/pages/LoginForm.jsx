import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import {
  Card,
  CardContent,

  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react';
import BackgroundImage from '../layout/BackgroundImage';
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (data) => {

    try {
      const API_URL = import.meta.env.VITE_API_BASE_URL;
      console.log(API_URL);
      const response = await axios.post(`${API_URL}/users/login`, data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
      setError("");
      const name = response.data.name;
      navigate("/", { state: { name } });
    }
    catch (error) {
      setError(error.response.data?.message || "Invalid credentials");
      console.error("Error submitting form:", error.response?.data || error.message);
    }
  }
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });
  return (<>
    <BackgroundImage />
    <Card className={` bg-neutral-950 border-none rounded-none shadow-lg text-white col-span-4 row-span-12 h-full text-center flex flex-center justify-center  `}>
      <CardHeader>
        <CardTitle className={`text-slate-100 text-3xl font-extrabold`}>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="space-y-4">
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="
                                        Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              {error && (
                <Alert variant="destructive" className="mb-4  ">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className=" m-1 bg-rose-600 hover:bg-rose-950">Login</Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <p className={`text-slate-100`}> New to data Loom ? </p>
        <Link to="/Register">
          <Button variant={`Link`} className={`text-blue-400 hover:text-blue-400 hover:underline`}>Register </Button>
        </Link>
      </CardFooter>
    </Card>
    {/* Show alert only if there's an error */}

  </>
  )
}
export default LoginForm;
