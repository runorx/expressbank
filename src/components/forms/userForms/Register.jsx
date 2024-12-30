import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  CircularProgress,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  FaDollarSign,
  FaUserPlus,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import { register } from '../../../state/features/User/Auth/authSlice';

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
    postCode: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.userAuth
  );

  const validateFirstStep = () => {
    const stepErrors = {};
    if (!formData.firstName) stepErrors.firstName = 'First name is required';
    if (!formData.lastName) stepErrors.lastName = 'Last name is required';
    if (!formData.email) stepErrors.email = 'Email is required';
    if (!formData.password) stepErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      stepErrors.confirmPassword = "Passwords don't match";
    }
    return stepErrors;
  };

  const validateSecondStep = () => {
    const stepErrors = {};
    if (!formData.address) stepErrors.address = 'Address is required';
    if (!formData.phone) stepErrors.phone = 'Phone is required';
    if (!formData.postCode) stepErrors.postCode = 'Postal code is required';
    return stepErrors;
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const stepErrors = validateFirstStep();
    if (Object.keys(stepErrors).length === 0) {
      localStorage.setItem('registrationData', JSON.stringify(formData));
      setStep(2);
    } else {
      setErrors(stepErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stepErrors = validateSecondStep();
    if (Object.keys(stepErrors).length === 0) {
      const userData = {
        name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        email: formData.email.trim(),
        password: formData.password,
        phone: formData.phone.trim(),
        addresse: formData.address.trim(),
        postal: formData.postCode.trim(),
      };
      dispatch(register(userData));
    } else {
      setErrors(stepErrors);
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem('registrationData');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
  }, [isSuccess, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Card sx={{ maxWidth: 500, mx: 'auto', mt: 4,  width:{xs: '100%', lg: '70%'}}}>
      <CardHeader
        title={
          <Typography
            variant="h4"
            align="center"
            style={{
              color: '#002147',
              fontWeight: '600',
            }}
          >
            Create Account!
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1" align="center"> 
             <span
              style={{
                color: '#002147',
                padding: "0px 2px",
                fontSize: "12px"
              }}
            >
              Join
            </span>
            <span
              style={{
                color: '#002147',
                fontSize: "12px"
              }}
            >
              Express Bank{' '}
            </span>
            <span
              style={{
      
                fontSize: "12px"
              }}
            >
             and manage your finances with ease.
            </span>
            
          </Typography>
        }
      />

      <CardContent>
        <form
          onSubmit={step === 1 ? handleContinue : handleSubmit}
          style={{
            margin: 'auto',
          }}
        >
          {step === 1 ? (
            <>
              <TextField
                label="First Name"
                fullWidth
                margin="normal"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                error={!!errors.firstName}
                helperText={errors.firstName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaUserPlus
                        style={{
                          color: '#002147',
                        }}
                      />
                    </InputAdornment>
                  ),

                  style: {
                    height: '45px',
                    marginBottom: "5%",
                   
                  },
                }}
                sx={{
                  width: {
                    xs: '100%', // 90% on mobile
                    lg: '90%', // 80% on large screens
                
                  },
                  display: 'block', // Makes the TextField behave like a block element
                  margin: 'auto', // This centers the TextField horizontally
                }}
              />

              <TextField
                label="Last Name"
                fullWidth
                margin="normal"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                error={!!errors.lastName}
                helperText={errors.lastName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaUserPlus
                        style={{
                          color: '#002147',
                        }}
                      />
                    </InputAdornment>
                  ),
                  style: {
                    height: '45px',
                    marginBottom: "5%"
                  },
                }}
                sx={{
                  width: {
                    xs: '100%', // 90% on mobile
                    lg: '90%', // 80% on large screens
                 
                  },
                  display: 'block', // Makes the TextField behave like a block element
                  margin: 'auto', // This centers the TextField horizontally
                }}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaEnvelope
                        style={{
                          color: '#002147',
                        }}
                      />
                    </InputAdornment>
                  ),
                  style: {
                    height: '45px',
                    marginBottom: "5%"
                  },
                }}
                sx={{
                  width: {
                    xs: '100%', // 90% on mobile
                    lg: '90%', // 80% on large screens
                
                  },
                  display: 'block', // Makes the TextField behave like a block element
                  margin: 'auto', // This centers the TextField horizontally
                }}
              />
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock
                        style={{
                          color: '#002147',
                        }}
                        
                      />

                    </InputAdornment>
                  ),
                  style: {
                    height: '45px',
                    marginBottom: "5%"
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility}>
                        {showPassword ? (
                          <FaEyeSlash
                            style={{
                              color: '#002147',
                            }}
                          />
                        ) : (
                          <FaEye
                            style={{
                              color: '#002147',
                            }}
                          />
                        )}
                      </IconButton>

                    </InputAdornment>
                  ),
                  style: {
                    height: '45px',
                    marginBottom: "5%"
                  },
                }}
                sx={{
                  width: {
                    xs: '100%', // 90% on mobile
                    lg: '90%', // 80% on large screens
                
                  },
                  display: 'block', // Makes the TextField behave like a block element
                  margin: 'auto', // This centers the TextField horizontally
                }}
              />
              <TextField
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock
                        style={{
                          color: '#002147',
                        }}
                      />
                    </InputAdornment>
                  ),
                  
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleConfirmPasswordVisibility}>
                        {showConfirmPassword ? (
                          <FaEyeSlash
                            style={{
                              color: '#002147',
                            }}
                          />
                        ) : (
                          <FaEye
                            style={{
                              color: '#002147',
                            }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                  style: {
                    height: '45px',
                    marginBottom: "5%"
                  },
                }}
                sx={{
                  width: {
                    xs: '100%', // 90% on mobile
                    lg: '90%', // 80% on large screens
                
                  },
                  display: 'block', // Makes the TextField behave like a block element
                  margin: 'auto', // This centers the TextField horizontally
                }}
              />
            </>
          ) : (
            <>
              <TextField
                label="Full Address"
                fullWidth
                margin="normal"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                error={!!errors.address}
                helperText={errors.address}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaBuilding
                        style={{
                          color: '#002147',
                        }}
                      />
                    </InputAdornment>
                  ),
                  style: {
                    height: '45px',
                    marginBottom: "5%"
                  },
                }}
                sx={{
                  width: {
                    xs: '100%', // 90% on mobile
                    lg: '90%', // 80% on large screens
                
                  },
                  display: 'block', // Makes the TextField behave like a block element
                  margin: 'auto', // This centers the TextField horizontally
                }}
              />
              <TextField
                label="Phone Number"
                type="tel"
                fullWidth
                margin="normal"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                error={!!errors.phone}
                helperText={errors.phone}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaPhone
                        style={{
                          color: '#002147',
                        }}
                      />
                    </InputAdornment>
                  ),
                  style: {
                    height: '45px',
                    marginBottom: "5%"
                  },
                  
                }}

                sx={{
                  width: {
                    xs: '100%', // 90% on mobile
                    lg: '90%', // 80% on large screens
                
                  },
                  display: 'block', // Makes the TextField behave like a block element
                  margin: 'auto', // This centers the TextField horizontally
                }}
              />
              <TextField
                label="Postal Code"
                fullWidth
                margin="normal"
                value={formData.postCode}
                onChange={(e) =>
                  setFormData({ ...formData, postCode: e.target.value })
                }
                error={!!errors.postCode}
                helperText={errors.postCode}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaMapMarkerAlt
                        style={{
                          color: '#002147',
                        }}
                      />
                    </InputAdornment>
                  ),
                  style: {
                    height: '45px',
                    marginBottom: "5%"
                  },
                }}
                sx={{
                  width: {
                    xs: '100%', // 90% on mobile
                    lg: '90%', // 80% on large screens
                
                  },
                  display: 'block', // Makes the TextField behave like a block element
                  margin: 'auto', // This centers the TextField horizontally
                }}
              />
            </>
          )}

          {(isError || isSuccess) && (
            <Typography color={isError ? 'error' : 'success'} sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, width: {xs: '100%', lg: '90%'}, display: 'block', // Makes the TextField behave like a block element
            margin: 'auto', // This centers the TextField horizontally
         }}
            disabled={isLoading}
            style={{
              backgroundColor: '#002147',
              fontWeight: "600"

            }}
          >
            {isLoading ? (
              <CircularProgress size={24} />
            ) : (
              <>
                {step === 1 ? 'Continue' : 'Create Account'}
                {/* <FaUserPlus style={{ marginLeft: 8 }} /> */}
              </>
            )}
          </Button>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <Link
              to="/login"
              style={{ color: '#1976d2', textDecoration: 'none' }}
            >
              Sign in
            </Link>
          </Typography>
        </form>
      </CardContent>
    </Card>
  );
}
