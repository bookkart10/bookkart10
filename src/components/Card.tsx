import {
  Card,
  CardBody,
  Typography,

} from "@material-tailwind/react";
 
export default function Example() {
  return (
    <Card className="w-4/12 p-4 bg-[#FFF1F1] rounded-md shadow-lg">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by walk
          and near to &quot;Naviglio&quot; where you can enjoy the main night life
          in Barcelona.
        </Typography>
      </CardBody>
    </Card>
  );
}