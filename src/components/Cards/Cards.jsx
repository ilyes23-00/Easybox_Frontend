import {
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";


export default function Cards(props) {
  // eslint-disable-next-line react/prop-types
  const { title, paragraph, picture } = props;
  return (
    <Card className="w-96 hover:bg-[#F99D58] hover:text-white transition-all cursor-pointer">
      <CardHeader variant="gradient" color="blue" className="mb-4 grid h-48 place-items-center" >
        <img  src={picture} loading='lazy'alt="Services Providers" className="hover:scale-110 transition-all"  />
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <h2 className="font-bold">{title}</h2>
        <p>{ paragraph}</p>
      </CardBody>
      
    </Card>
  );
}