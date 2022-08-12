import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Blog({ email, title, body }) {
  return (
    <Card sx={{ maxWidth: 275, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {email}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2">{body}</Typography>
      </CardContent>
    </Card>
  );
}
