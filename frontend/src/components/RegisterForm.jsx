import {z} from 'zod';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    username: z.string().min(2),
});
function RegisterForm()
{
    return(
        <div></div>
    )
}
export default RegisterForm;