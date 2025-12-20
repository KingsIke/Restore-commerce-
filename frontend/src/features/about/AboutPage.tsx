import { Box, Container, Typography } from "@mui/material";
import icon from "../../assets/icon.ico";


export const AboutPage = () => {
  const aboutText = `I'm also known as KINGS=IKE!, a Junior Full Stack Developer. I've been coding for about 3 years now. As a Full Stack developer, I've worked on-site and remotely both as an Internships and Associate Developer with startups and large companies, to help build & scale their vision and mission. Along my journey, I realized my passion existed in helping others excel and pursue their dreams as upcoming developers 🎖. With this passion, I know that am going to make an impact in my community and across the globe at large. In addition to my technical skills, I have undergone trainings in soft skills on Agile methodology using scrum,jira for Effective communication, teamwork,time management and emotional intelligence. I understand the importance of these skills in fostering a positive and productive work environment. Also not forgetting am a programmer with passion for bodybuilding, fashion design, swimming, and music. These hobbies allow me to showcase my creativity, maintain a healthy lifestyle, and unwind from the demands of my work🥇.`;

  const imageUrl = "https://cdn.sanity.io/images/pa4j5gzb/production/6f4831fa1ab4f3fed78065972cab36336c290734-1080x1080.jpg";

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
        My Background
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'stretch' }}>
     
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            // src={imageUrl}
            src={icon}
            alt="KINGS=IKE!"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              objectFit: 'cover',
            }}
          />
        </Box>

        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'text.primary' }}>
            {aboutText}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
