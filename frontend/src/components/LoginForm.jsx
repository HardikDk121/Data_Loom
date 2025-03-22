import { z } from 'zod';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from './ui/form';
import { Input } from './ui/input';
import {
    Card,
    CardContent,

    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});
const handleSubmit = (data) =>{
    console.log(data);
    console.log("Submitted");
}
function LoginForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    return (
        <Card className={`col-start-4 col-end-10 row-span-8  bg-neutral-950 rounded-lg shadow-lg text-white  `}>
            <CardHeader>
                <CardTitle>Login</CardTitle>
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
                            <Button type="submit" className=" m-1 bg-rose-600 hover:bg-rose-950">Register</Button>
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
    )
}
export default LoginForm;