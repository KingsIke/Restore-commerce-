import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "./accountApi"
import  { type RegisterSchema, registerSchema } from "../../lib/schemas/registerSchema";
import { Box, Button, Container, InputAdornment, Paper, TextField, Typography, IconButton} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { LockOutlined } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from "react";

export const RegisterForm = () => {
      const navigate = useNavigate();
      const [showPassword, setShowPassword] = useState(false);

const handleTogglePassword = () => setShowPassword((prev) => !prev);
  
  const [registerUser] = useRegisterMutation();
  const {register, handleSubmit, setError, formState: {errors, isValid, isLoading}} = useForm<RegisterSchema> ({
    mode: 'onTouched',
    resolver: zodResolver(registerSchema)
  })
  const onSubmit = async (data: RegisterSchema) => {
    try{
  await registerUser(data).unwrap();
    navigate('/login')
    }catch (error: any) {
    console.log(error);
    const apiError = error?.data;

    if (apiError?.errors) {
        if (apiError.errors.DuplicateEmail) {
            setError('email', { message: apiError.errors.DuplicateEmail[0] });
        }
        if (apiError.errors.DuplicateUserName) {
            setError('email', { message: apiError.errors.DuplicateUserName[0] });
        }
    } else if (typeof error?.data === 'string') {
        setError('root.serverError', { message: error.data });
    }
}
  
  }
  return (
    <Container component={Paper} maxWidth='sm' sx={{borderRedius: 3}}>
            <Box display='flex' flexDirection='column' alignItems= 'center' marginTop='8'>
                <LockOutlined sx={{mt:3, color: 'secondary.main',fontSize:40}}/>
                <Typography  variant='h5'>
                   Register
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
                    <Button variant='contained' type='submit'disabled={isLoading || !isValid}>
                        Register
                    </Button>
    
                    <Typography sx={{textAlign: 'center'}}>
                        Already have an account?
                        <Typography component={Link} to='/login' color='primary' sx={{ml:2}}>
                            Sign in 
                        </Typography>
                    </Typography>
                </Box>
            </Box>
        </Container>
  )
}
