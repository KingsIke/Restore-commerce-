import { useState } from 'react';
import { LockOutlined } from '@mui/icons-material'
import { Box, Button, Container, Paper,  Typography, InputAdornment, IconButton, TextField } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { loginSchema, type LoginSchema } from '../../lib/schemas/loginSchema';
import {useForm} from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { useLazyUserInfoQuery, useLoginMutation } from './accountApi';
import { Visibility, VisibilityOff } from '@mui/icons-material';
export const LoginForm = () => {
    const [ login, {isLoading}] = useLoginMutation()
    const [fetchUserInfo] = useLazyUserInfoQuery();
    const location = useLocation()


    const {register, handleSubmit, formState: {errors}} = useForm<LoginSchema>({
        mode: 'onTouched',
        resolver: zodResolver(loginSchema)
    });

    const navigate = useNavigate();
    const onSubmit =async  (data: LoginSchema) => {
        await login(data).unwrap();
        await fetchUserInfo()
        navigate(location.state?.from || '/catalog')
        console.log(data);
    }

    const [showPassword, setShowPassword] = useState(false);

const handleTogglePassword = () => setShowPassword((prev) => !prev);
  return (
    <Container component={Paper} maxWidth='sm' sx={{borderRedius: 3}}>
        <Box display='flex' flexDirection='column' alignItems= 'center' marginTop='8'>
            <LockOutlined sx={{mt:3, color: 'secondary.main',fontSize:40}}/>
            <Typography  variant='h5'>
                Sign In
            </Typography>
            <Box
                component='form'
                width='100%'
                display='flex'
                flexDirection='column'
                gap={3}
                marginY={3}
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    fullWidth
                    label='Email'
                    autoFocus
                    {...register('email' )}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    fullWidth
                    label='Password'
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleTogglePassword}
                                    edge="end"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
              
                <Button variant='contained' type='submit'disabled={isLoading}>
                    Sign in
                </Button>

                <Typography sx={{textAlign: 'center'}}>
                    Don't have an account?
                    <Typography component={Link} to='/register' color='primary' sx={{ml:2}}>
                        Sign UP
                    </Typography>
                </Typography>
            </Box>
        </Box>
    </Container>
  )
}
