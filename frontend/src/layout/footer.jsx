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
        <Grid container spacing={6} sx={{ gap: "100px" }}>
          <svg width={48} height={53} viewBox="0 0 30 34">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.4994 15.3919L22.5006 20.1262H17.4994L13.1233 24.2708V20.1262H7.49939V2.36833H27.4994V15.3919ZM6.24909 0L0 5.91853V27.2289H7.49939V33.1475L13.7485 27.2289H18.7497L30 16.5737V0H6.24909ZM23.7509 6.69873H21.2502V13.8008H23.7509V6.69873ZM14.3766 6.6709H16.8773V13.7739H14.3766V6.6709Z"
              fill="#FFFFFF"
            ></path>
          </svg>
          {Object.keys(footerData).map((footerHeader, i) => (
            <Grid
              item
              xs
              key={footerHeader}
              sx={{
                padding: "0 !important",
              }}
            >
              <Typography
                fontFamily={"'Roboto', sans-serif"}
                fontSize={"14px"}
                fontWeight={600}
              >
                {footerHeader}
              </Typography>
              <Stack direction={"column"} gap="12px">
                {footerData[footerHeader].map(({ label, link }) => (
                  <Typography
                    fontFamily={"'Roboto', sans-serif"}
                    fontSize={"22px"}
                    fontWeight={600}
                  >
                    {label}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Box
          fontFamily={"'Roboto', sans-serif"}
          fontSize={"12px"}
          fontWeight={600}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "210px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "24px",
            }}
          >
            <Typography
              fontFamily={"'Roboto', sans-serif"}
              fontSize={"12px"}
              fontWeight={600}
            >
              Terms of Service
            </Typography>
            <Typography
              fontFamily={"'Roboto', sans-serif"}
              fontSize={"12px"}
              fontWeight={600}
            >
              Privacy Policy
            </Typography>
            <Typography
              fontFamily={"'Roboto', sans-serif"}
              fontSize={"12px"}
              fontWeight={600}
            >
              Ad Choices
            </Typography>
            <Typography
              fontFamily={"'Roboto', sans-serif"}
              fontSize={"12px"}
              fontWeight={600}
            >
              Cookie Policy
            </Typography>
            <Typography
              fontFamily={"'Roboto', sans-serif"}
              fontSize={"12px"}
              fontWeight={600}
            >
              Partners
            </Typography>
            <Typography
              fontFamily={"'Roboto', sans-serif"}
              fontSize={"12px"}
              fontWeight={600}
            >
              Affiliates
            </Typography>
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
              fontWeight={600}
            >
              © 2022 Pinecone Interactive, Inc.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
