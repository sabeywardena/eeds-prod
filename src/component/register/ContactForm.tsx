import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';

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

    // Example form validation
    if (!formData.name || !formData.email || !formData.body) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      // Replace with your form submission logic
      console.log('Form Data:', formData);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', body: '' });
      setError(null);
    } catch (err) {
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
                  border: 'none', // Remove all borders
                },
                '& input': {
                  borderBottom: '1px solid black', // Black bottom border
                  paddingBottom: '8px', // Optional: add some padding to align with the text
                  paddingLeft: '0px', // Optional: adjust padding to ensure border width alignment
                  paddingRight: '0px', // Optional: adjust padding to ensure border width alignment
                },
                '&:hover input': {
                  borderBottom: '1px solid black', // Maintain bottom border on hover
                },
                '&.Mui-focused input': {
                  borderBottom: '1px solid black', // Maintain bottom border when focused
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
                  border: 'none', // Remove all borders
                },
                '& input': {
                  borderBottom: '1px solid black', // Black bottom border
                  paddingBottom: '8px', // Optional: add some padding to align with the text
                  paddingLeft: '0px', // Optional: adjust padding to ensure border width alignment
                  paddingRight: '0px', // Optional: adjust padding to ensure border width alignment
                },
                '&:hover input': {
                  borderBottom: '1px solid black', // Maintain bottom border on hover
                },
                '&.Mui-focused input': {
                  borderBottom: '1px solid black', // Maintain bottom border when focused
                },
              },
            }}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Typography variant="body1">
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
                  border: 'none', // Remove all borders
                },
                '& textarea': {
                  borderBottom: '1px solid black', // Black bottom border
                  paddingBottom: '8px', // Optional: add some padding to align with the text
                  paddingLeft: '0px', // Optional: adjust padding to ensure border width alignment
                  paddingRight: '0px', // Optional: adjust padding to ensure border width alignment
                },
                '&:hover textarea': {
                  borderBottom: '1px solid black', // Maintain bottom border on hover
                },
                '&.Mui-focused textarea': {
                  borderBottom: '1px solid black', // Maintain bottom border when focused
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
