"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const EssentialMovers: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{
          my: 4,
          "&::after": {
            content: '""',
            display: "block",
            height: "2px",
            width: "85%",
            backgroundColor: theme.palette.common.black,
            marginLeft: "16px",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: theme.typography.fontWeightBold }}
        >
          Tuition
        </Typography>
      </Box>

      <Box sx={{ ml: "10%", mr: "10%" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: theme.typography.fontWeightBold }}
        >
          Please note: In studio Payment Policy Update July 2024.
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontWeight: theme.typography.fontWeightRegular }}
        >
          *Previous 3% in studio payment credits from (example: August 1st )
          Tuition/All in Payments applies to the following month (example:
          September 1st) Tuition totals. <br />
          *3% in studio incentive does not apply to dancewear purchases. <br />
          *3% In Studio payment incentives do not apply to Competition Entry
          Payments/Comp All in Payments <br />
          *3% In Studio Payment Incentives do not apply to Choreography Fees
          (Dec 1 and Feb 1) or Solo Choreo Fees
        </Typography>
      </Box>

      <Box sx={{ ml: "10%", mr: "10%", mt: "2%" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: theme.typography.fontWeightBold }}
        >
          We offer four Tuition Options at Essential Elements. <br />
          Classic, Essential All In/Atticus All in, Tuition Only in Full and
          Year In Full. <br /> <br />
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontWeight: theme.typography.fontWeightRegular }}
        >
          <strong>CLASSIC TUITION: </strong>first and last month tuition and
          registration fee due at the time of registration. First tuition
          payment due October 1st, 2024. Final Tuition Payment Due May 1st,
          2025. Classes continue through our Annual Recital Experience in June
          2025. <br />
          <br />
          <strong>ESSENTIAL ALL IN:</strong> Ten Months of Tuition, Costume Fees
          and Recital Fees totaled and divided into 10 equal payments. Payment
          #1 Due on August 1, 2024. Payment #10 Due on May 1, 2025. Registration
          Fee Due with August Payment. Dancewear cannot be included in these
          totals. <br />
          <br />
          <strong>ATTICUS ALL IN: </strong>See Essential All In. Company Fees
          are also calculated into this total. Mockingbird Families enjoy the
          option of 10 month or 12 month All In. 10 month: Payment #1 due August
          1, 2024, Payment #10 Due May1, 2025 12 month: Payment #1 due July 1,
          2024. Payment #12 due June 1, 2025. Registration Fee due at the time
          of your first installment. *Dancewear, Competition Fees and Add on
          Opportunities cannot be included in these totals. *See Competition All
          in Payment Option in Annual August Company Letters. <br />
          <br />
          <strong>TUITION ONLY IN FULL:</strong> 10 months of tuition paid in
          full at the time of registration. A 10% incentive applied to total*
          Max Value $200 REGISTRATION FEE applies at the time of registration.
          YEAR IN FULL: 10 months of tuition, Costume Fees, and Recital Fee in
          Full. A 10% incentive applied to total* Max Value $250. REGISTRATION
          FEE applies at the time of registration.
        </Typography>
      </Box>

      <Box sx={{ ml: "10%", mr: "10%", mt: "2%" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: theme.typography.fontWeightBold }}
        >
          Other Fees:
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontWeight: theme.typography.fontWeightRegular }}
        >
          <strong>COSTUME FEES</strong> are non refundable after November 15th,
          each season. If your dancer drops classes mid season, you are welcome
          to come to the studio during MAY 2025 evening office hours to pick up
          your dancers costume(s) <br />
          October 15th: $60 per costume.January 15th: $45 per costume.
          <br />
          Late Fees apply at studio days end on the 5th of the month. $30 per
          costume or $75 total for 3 plus costumes.
          <br /> <br /> <strong>RECITAL FEE:</strong> Due April 15th. Non
          Refundable and Non Transferable This includes 4 general admission
          tickets, recital shirt, rehearsal fees, and recorded recital
          experience. This fee is required for all students participating in our
          Annual Recital Experience. <br /> <br />
          <strong>Late Fees: </strong>A late Fee of $30 will be added to account
          at the end of the studio day (10pm) on the 5th of the month in the
          event of late Tuition Payment. A late Fee of $30 will be added to
          account at the end of the studio day (10pm) on the 15th of the month
          in the event of late Studio Fees (Costumes, Recital, Competition entry
          fees, Company fees)
        </Typography>
      </Box>

      <Box sx={{ ml: "10%", mr: "10%", mt: "2%" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: theme.typography.fontWeightBold }}
        >
          Tuition Statements & Billing
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontWeight: theme.typography.fontWeightRegular }}
        >
          All accounts are billed on or about the 20th of the month for the
          upcoming 1st of the month due date. Each family will receive an
          updated statement from the Essential Portal and an additional email
          will immediately follow with personalized link from our Essential
          SquareMarketplace. Payments may be made through our
          EssentialMarketplace or In Studio (cash or personal check) Payments
          CANNOT be made via our Essential Parent Portal as this is a platform
          for account tracking and communication only. <br/> <br/>
          
          PLEASE BE CERTAIN to
          visit the bottom of monthly statement for announcements and updates.
          If you do not read your entire statement, you will be missing
          important information each month. The director is not responsible for
          any missed communication, should your contact information not be
          current on our Essential Parent Portal. <br/> <br/>
          
          Essential Elements also offers
          direct withdrawal options for all necessary payments. Prospective
          families must enroll annually by September 1st. Please inquire at the
          time of annual enrollment. A $30 fee will be added to account at days
          end on the 1st of the month should tuition transaction be declined. 
           A
          $30 fee will be added to account at days end on the 15th of the month
          should studio fee transaction be declined. <br/> <br/> 
          
          STUDIO CLOSINGS: ALL STUDIO
          CLOSINGS DUE TO INCLEMENT WEATHER WILL BE COMMUNICATED ON THE DAY OF
          THE CLOSING BY 2:00PM. INFORMATION WILL ARRIVE VIA EMAIL ON FILE.
          ADDITONAL INFORMATION WILL BE POSTED ON OUR SOCIAL MEDIA OUTLETS. ALL
          DAYS HAVE ONE CLOSING FACTORED INTO THE ANNUAL SCHEDULE. SHOULD A
          CLOSING BE REQUIRED AFTER THE FIRST OCCURANCE, A MAKEUP DAY/TIME WILL
          BE ISSUED FOR THOSE CLASS HOURS. <br/> <br/> MOCKINGBIRD FAMILIES, YOUR PROTOCOLS
          MIGHT DIFFER, AS WE ABSORB ITEMS LIKE THESE WITHIN OUR LENGTHY
          REHERSAL SCHEDULE OVER THE COURSE OF THE SEASON.
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontWeight: theme.typography.fontWeightBold,
          mt: "2%",
          ml: "30%",
        }}
      >
        Please contact eedancestudio@gmail.com for information about tuition
        pricing.
      </Typography>
    </Box>
  );
};

export default EssentialMovers;
