import { Box, Grid, Typography, Container } from "@mui/material";
import { Stack } from "@mui/system";

const footerData = {
  Communities: [
    {
      label: "Stream",
      link: "/",
    },
    {
      label: "Watch",
      link: "/",
    },
    {
      label: "Develop",
      link: "/",
    },
    {
      label: "Advertise",
      link: "/",
    },
    {
      label: "twitch.tv",
      link: "/",
    },
  ],
  Company: [
    {
      label: "Jobs",
      link: "/",
    },
    {
      label: "Merch",
      link: "https://www.amazon.com/twitchmerch",
    },
    {
      label: "Brand",
      link: "/",
    },
    {
      label: "TwitchCon",
      link: "/",
    },
    {
      label: "Meetups",
      link: "/",
    },
  ],
  Newsroom: [
    {
      label: "News",
      link: "/",
    },
    {
      label: "Press",
      link: "/",
    },
  ],
  Products: [
    {
      label: "Bits",
      link: "/",
    },
    {
      label: "Subs",
      link: "/",
    },
    {
      label: "Turbo",
      link: "/",
    },
    {
      label: "Prime",
      link: "https://gaming.amazon.com/home",
    },
    {
      label: "Extensios",
      link: "/",
    },
    {
      label: "Gift Card",
      link: "https://www.amazon.com/Twitch-Gift-Cards-Email-Delivery/dp/B0893JQ2X2/?utm_source=footer",
    },
  ],
  Resources: [
    {
      label: "Creator Camp",
      link: "/",
    },
    {
      label: "Legal",
      link: "/",
    },
    {
      label: "Help Center",
      link: "/",
    },
    {
      label: "Security",
      link: "/",
    },
  ],
  Connect: [
    {
      label: "Twitter",
      link: "https://twitter.com/Twitch",
    },
    {
      label: "Facebook",
      link: "https://www.facebook.com/Twitch",
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/twitch/",
    },
  ],
};

export const Footer = () => {
  return (
    <Container maxWidth={"xl"}>
      <Box>
        <Grid container spacing={6}>
          {Object.keys(footerData).map((footerHeader, i) => (
            <Grid item xs key={footerHeader}>
              <Typography
                fontFamily={"'Roboto', sans-serif"}
                sx={{ fontSize: { xs: "8px", md: "12px" } }}
                fontWeight={400}
              >
                {footerHeader}
              </Typography>
              <Stack direction={"column"} gap="12px">
                {footerData[footerHeader].map(({ label, link }) => (
                  <Typography
                    fontFamily={"'Roboto', sans-serif"}
                    sx={{ fontSize: { xs: "14px", md: "21px" } }}
                    fontWeight={450}
                  >
                    {label}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: {
              xl: "210px",
              md: "210px",
              s: "10px",
              xs: "5px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
              <Typography
                fontFamily={"'Roboto', sans-serif"}
                fontSize={"12px"}
                fontWeight={450}
              >
                Terms of Service
              </Typography>
              <Typography
                fontFamily={"'Roboto', sans-serif"}
                fontSize={"12px"}
                fontWeight={450}
              >
                Privacy Policy
              </Typography>
              <Typography
                fontFamily={"'Roboto', sans-serif"}
                fontSize={"12px"}
                fontWeight={450}
              >
                Ad Choices
              </Typography>
              <Typography
                fontFamily={"'Roboto', sans-serif"}
                fontSize={"12px"}
                fontWeight={450}
              >
                Cookie Policy
              </Typography>
              <Typography
                fontFamily={"'Roboto', sans-serif"}
                fontSize={"12px"}
                fontWeight={450}
              >
                Partners
              </Typography>
              <Typography
                fontFamily={"'Roboto', sans-serif"}
                fontSize={"12px"}
                fontWeight={450}
              >
                Affiliates
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography
              fontFamily={"'Roboto', sans-serif"}
              fontSize={"12px"}
              fontWeight={450}
            >
              Â© 2022 Pinecone Interactive, Inc.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
