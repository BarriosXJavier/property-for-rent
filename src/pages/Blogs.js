import { styled } from '@mui/system';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
// import tw from 'tailwindcss';

const BlogCardContainer = styled(Card)(() => ({
  maxWidth: 345,
}));

const BlogCardImage = styled(CardMedia)(() => ({
  height: 140,
}));

const BlogCardContent = styled(CardContent)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const Blogs = () => {
  return (
    <BlogCardContainer>
      <CardActionArea>
        <BlogCardImage
          image="https://source.unsplash.com/random/400x400"
          title="Blog Image"
        />
        <BlogCardContent>
          <Typography gutterBottom variant="h5" component="h2">
            House Hunting 101: How to Find Your Dream Rental Home
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Looking for the perfect house to rent can be both exciting and overwhelming. With so many options available, it's important to have a clear idea of what you're looking for before you start your search. Start by creating a list of your must-haves and deal-breakers, such as the number of bedrooms, location, and pet policy. Once you have a clear idea of what you want, you can start browsing rental listings and scheduling property viewings.

            During the viewing process, be sure to take your time and thoroughly inspect the property. Look for any signs of damage or wear and tear, such as water stains, cracks in the walls or floors, and malfunctioning appliances. Don't be afraid to ask the landlord or property manager any questions you may have about the property or the rental agreement. Once you've found the perfect rental home, be sure to carefully review the lease agreement before signing, and make sure you understand all of the terms and conditions. With a little bit of research and patience, you can find the perfect rental home that fits your budget and lifestyle.
          </Typography>
        </BlogCardContent>
      </CardActionArea>
    </BlogCardContainer>
  );
};

export default Blogs;
