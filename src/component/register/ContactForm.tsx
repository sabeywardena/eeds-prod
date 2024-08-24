import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  body: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    body: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    if (!formData.name || !formData.email || !formData.body) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }
  
    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.body,
      };
  
      const result = await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log('Email sent successfully:', result);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', body: '' });
      setError(null);
    } catch (err) {
      console.error('Failed to submit the form:', err);
      setError('Failed to submit the form.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <Typography variant="body1">
            Name
          </Typography>
          <TextField
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="none"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
                '& input': {
                  borderBottom: '1px solid black',
                  paddingBottom: '8px', 
                  paddingLeft: '0px', 
                  paddingRight: '0px', 
                },
                '&:hover input': {
                  borderBottom: '1px solid black', 
                },
                '&.Mui-focused input': {
                  borderBottom: '1px solid black', 
                },
              },
            }}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Typography variant="body1">
            Email
          </Typography>
          <TextField
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="none"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none', 
                },
                '& input': {
                  borderBottom: '1px solid black', 
                  paddingBottom: '8px', 
                  paddingLeft: '0px', 
                  paddingRight: '0px', 
                },
                '&:hover input': {
                  borderBottom: '1px solid black', 
                },
                '&.Mui-focused input': {
                  borderBottom: '1px solid black',
                },
              },
            }}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Typography variant="body1" gutterBottom>
            Type your message here:
          </Typography>
          <TextField
            name="body"
            value={formData.body}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="none"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: '1px solid black', 
                },
                '& textarea': {
                  borderBottom: 'none',
                },
                '&:hover fieldset': {
                  border: '1px solid black', 
                },
                '&.Mui-focused fieldset': {
                  border: '1px solid black', 
                },
              },
            }}
          />
        </div>
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
