import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import useScroll from "../hooks/useScroll";

export interface CardDefaultProps {
  title: string;
  description: string;
  bottonName: string;
  imageSrc: string;
}

export function CardDefault({
  title,
  description,
  bottonName,
  imageSrc,
}: CardDefaultProps) {
  const { redirectionContactUs } = useScroll();
  return (
    <Card className="h-full w-full justify-self-center place-self-center">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={imageSrc} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="brown" className="mb-2">
          {title}
        </Typography>
        <Typography
          variant="small"
          color="brown"
          className="mb-6 font-medium leading-[1]"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 items-center flex justify-center">
        <Button onClick={redirectionContactUs} color="brown">
          {bottonName}
        </Button>
      </CardFooter>
    </Card>
  );
}
