import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, IconButton, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
import theme from "@/theme";

interface StaffBioModalProps {
  open: boolean;
  onClose: () => void;
  person: {
    src: string;
    name: string;
    title: string;
    bio: string;
  } | null;
}

const StaffBioModal: React.FC<StaffBioModalProps> = ({ open, onClose, person }) => {
  if (!person) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
          {person.name}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            width: 120,
            height: 200,
            overflow: "hidden",
            position: "relative",
            borderRadius: 2,
            mx: 'auto',
            mb: 2,
          }}
        >
          <Image
            src={person.src}
            alt={person.name}
            layout="fill"
            objectFit="cover"
            style={{ objectPosition: "center" }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.text.primary,
          }}
        >
          {person.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: theme.palette.text.primary,
            maxHeight: '400px',
            overflowY: 'auto',
            textAlign: 'left',
          }}
        >
          {person.bio}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default StaffBioModal;
