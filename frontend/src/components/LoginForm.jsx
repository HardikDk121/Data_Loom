import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {zodResolver} from '@hookform/resolvers/zod';
import { Form } from './ui/form';
const formSchema = z.object({
    email: z.string().email(),

});

function LoginForm()
{
    return(
        <Form>
            
        </Form>
    )
}
export default LoginForm;