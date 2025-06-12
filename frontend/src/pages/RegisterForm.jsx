import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from 'lucide-react';
import BackgroundImage from '../layout/BackgroundImage';
const FormSchema = z.object(
  {
    email: z.string().email("Invaild email format"),
    password: z.string().min(8, "Password must be atleast 8 characters"),
    confirmPassword: z.string().min(8, "Password must be atleast 8 characters")
    ,
    name: z.string().min(2),
  },
).refine((data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });



function RegisterForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (data) => {
    try {
      delete data.confirmPassword;
      console.log(data);
      const API_URL = import.meta.env.VITE_API_BASE_URL;
      console.log(API_URL);
      const response = await axios.post(`${API_URL}/users/register`, data, {
        headers: { "Content-Type": "application/json" },
      });
      setError("");
      console.log(response.data);
      const name = response.data.name;
      const id = response.data.id;
      navigate("/", { state: { name, id } });
    }
    catch (error) {
      setError(error.response.data?.message || "Something went wrong please try again later");
      console.error("Error submitting form:", error.response?.data || error.message, error.response.status);
    }
  }
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
  })
  return (
    <>
      <BackgroundImage />
      <Card className={` bg-gray-950 hadow-lg border-none rounded-none col-span-4 row-span-12 flex flex-coulmn justify-center`}>
        <CardHeader>
          <CardTitle className={`text-slate-100 text-3xl font-extrabold `}>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="space-y-4">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={`text-slate-100`}>name</FormLabel>
                    <FormControl>
                      <Input placeholder="ex.jhon Doe" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={`text-slate-100`}>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="ex.Jhondoe7@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField control={form.control} name="password" render={({ field }) => (

                  <FormItem>
                    <FormLabel className={`text-slate-100`}>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={`text-slate-100`}>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Confirm Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <Button type="submit" className=" m-1 bg-rose-600 hover:bg-rose-950">Register</Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p className={`text-slate-100`}> Already a user ? </p>
          <Link to="/login">
            <Button variant={`Link`} className={`text-blue-400 hover:text-blue-400 hover:underline`}>Log in
            </Button>
          </Link>
        </CardFooter>
      </Card>
      {/* Show alert only if there's an error */}
      {error && (
        <Alert variant="destructive" className="mt-4 block col-start-4 col-end-10 ">
          <AlertCircle className="" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </>

  )
}
export default RegisterForm;
