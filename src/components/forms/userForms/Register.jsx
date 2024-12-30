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
    <div
      style={{
        width: '100vw', // Full viewport width
        height: '100%', // Full height of the content (or adjust to '100vh' for full screen height)
        margin: '0', // Remove any default margin
        padding: '0', // Remove any default padding
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
      }}
    >
      <h1
        style={{
          color: '#002147',
          fontWeight: '600',
          fontSize: '26px', // Matches h4 variant style
          textAlign: 'center',
        }}
      >
        Create Account!
      </h1>

      <p
        style={{
          color: 'darkgray',
          fontSize: '10px', // Matches subtitle1 variant style
          textAlign: 'center',
          lineHeight: '1.5', // Ensures good readability
        }}
      >
        <span style={{ padding: '0px 2px' }}>Join</span>
        <span style={{ color: 'navy' }}> Express Bank </span>
        <span>and manage your finances with ease.</span>
      </p>
      <Card
        sx={{
          maxWidth: 500,
          mx: 'auto',
          mt: 4,
          width: { xs: '100%', lg: '70%' },
          background: {
            xs: 'white', // Background for mobile screens
            lg: 'rgba(158, 158, 158, 0.14)',     // Background for desktop screens
          },
        }}
      >
        <CardHeader
          title={null} // Removes the title text
          subheader={null} // Removes the subheader text
        />
        <CardContent 
        >
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
                      marginBottom: '5%',
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
                      marginBottom: '5%',
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
                      marginBottom: '5%',
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
                      marginBottom: '5%',
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
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
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
                      marginBottom: '5%',
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
                      marginBottom: '5%',
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
                      marginBottom: '5%',
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
                      marginBottom: '5%',
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
              sx={{
                mt: 3,
                width: { xs: '100%', lg: '90%' },
                display: 'block', // Makes the TextField behave like a block element
                margin: 'auto', // This centers the TextField horizontally
              }}
              disabled={isLoading}
              style={{
                backgroundColor: '#002147',
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} />
              ) : (
                <>
                  {/* {step === 1 ? 'Continue' : 'Create Account'} */}
                  {step === 1
                    ? `${'Continue'.charAt(0).toUpperCase()}${'Continue'
                        .slice(1)
                        .toLowerCase()}`
                    : `${'Create Account'
                        .charAt(0)
                        .toUpperCase()}${'Create Account'
                        .slice(1)
                        .toLowerCase()}`}

                  {/* <FaUserPlus style={{ marginLeft: 8 }} /> */}
                </>
              )}
            </Button>

            <p
              style={{
                color: 'darkgray',
                fontSize: '12px', // Matches subtitle1 variant style
                textAlign: 'left',
                lineHeight: '1.5', // Ensures good readability
                margin: "auto",
                width: "90%",
                paddingTop: "5%"
              }}
            >
              <span style={{ padding: '0px 2px' }}>By signing up you agree to our </span>
              <span style={{ color: 'navy' }}> Terms & Conditions </span>
              
            </p>

            <Typography variant="body2" align="center" sx={{ mt: 1  }}
            style={{
              textAlign: "left",
              margin: " 4px auto",
                width: "88%",
                fontSize: "14px",
              
            }}>
              Already have an account?{' '}
              <Link
                to="/login"
                style={{
                  color: '#1976d2',
                  textDecoration: 'none',
                  textTransform: 'lowercase',
                }}
              
              >
                Sign in
              </Link>
            </Typography>

            <p className="text-xs text-center text-gray-500 mt-4">
              Your information is securely encrypted.
            </p>

            <div className="relative lg:w-[90%] w-[94%] mx-auto mt-2 mb-3" >

              <div className="absolute inset-0 flex items-center">

                <div className="w-full border-t border-gray-300" />
              </div>

              <div className="relative flex justify-center text-xs uppercase">

                <span
                  className="bg-white"
                  style={{
                    color: 'lightgrey',
                    textTransform: 'lowercase',
                  }}
                >
                  or
                </span>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 justify-center items-center w-full">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border rounded hover:bg-white-40 w-[90%] lg:w-[80%] mx-auto"
                style={{
                  border: '0.05px solid navy',
                }}
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4 mr-2"
                />
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border rounded hover:bg-white-40 w-[90%] lg:w-[80%] mx-auto"
                style={{
                  border: '0.05px solid navy',
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="w-4 h-4 mr-2"
                />
                Apple
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
