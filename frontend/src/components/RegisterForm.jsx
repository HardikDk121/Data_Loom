import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from './ui/form';
import { Input } from './ui/input';
import { Button } from "@/components/ui/button"
import { Dialog } from '@radix-ui/react-dialog';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const FormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    username: z.string().min(2),
});

function RegisterForm() {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            username: "",
        },
    })
    return (
        <Card className={`w-full h-full col-start-4 col-end-10 bg-neutral-950 rounded-lg shadow-lg`}>
            <CardHeader>
                <CardTitle className={`text-slate-100 text-3xl  `}>Register</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form>
                        <div className="space-y-4">

                        <FormField control={form.control} name="username" render={({ field }) => (
                            <FormItem>
                                <FormLabel className={`text-slate-100`}>Username</FormLabel>
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
                <Button variant={`Link`} className={`text-blue-400 hover:text-blue-400 hover:underline`}>Log in </Button>
            </CardFooter>
        </Card>

    )
}
export default RegisterForm;