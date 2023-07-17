import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
      ChevronDownIcon,
      CubeTransparentIcon,
      Bars3Icon,
      XMarkIcon,
      Square3Stack3DIcon,
      LinkIcon,
      CommandLineIcon,
      DevicePhoneMobileIcon,
      ComputerDesktopIcon,
      VideoCameraIcon,
      FilmIcon,
      PaintBrushIcon,
      TicketIcon,
      PrinterIcon
} from "@heroicons/react/24/outline";

// import font awsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';



 
const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};
 
const navListMenuItems = [
  {
    color: "blue",
    icon: CommandLineIcon,
    title: "Web Development",
    description: "Our expert team creates innovative and functional websites tailored to your specific needs, ensuring a seamless user experience.",
  },
  {
    color: "orange",
    icon: DevicePhoneMobileIcon,
    title: "App Dev",
    description: "We design and develop cutting-edge mobile applications that bring your ideas to life, providing intuitive interfaces and powerful functionalities.",
  },
  {
    color: "green",
    icon: ComputerDesktopIcon,
    title: "DeskTop",
    description: "Our skilled developers craft robust desktop applications that optimize productivity and efficiency for your business or personal needs",
  },
  {
    color: "blue-gray",
    icon: VideoCameraIcon,
    title: "Video Publicity",
    description: "Captivate your audience with visually stunning video advertisements that effectively convey your brand message and drive engagement.",
  },
  {
    color: "purple",
    icon: FilmIcon,
    title: "Event ",
    description: "From planning to execution, we deliver exceptional event management services, ensuring every detail is carefully orchestrated for a memorable experience.",
  },
  {
    color: "teal",
    icon: PaintBrushIcon,
    title: "Infography",
    description: "Our creative team transforms complex information into visually compelling infographics, enabling you to communicate data and concepts effectively.",
  },
  {
    color: "cyan",
    icon: TicketIcon,
    title: "Social Media Ads",
    description: "Amplify your online presence and reach your target audience through strategic social media advertising campaigns that drive conversions and brand awareness.",
  },
  {
    color: "pink",
    icon: PrinterIcon,
    title: "Printing",
    description: "Experience hassle-free printing and fulfillment services, allowing you to bring your designs to life on a wide range of customizable products.",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Our Solutions
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          Home
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href=""
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <LinkIcon className="h-[18px] w-[18px]" />
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}
 
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <img src="../../src/assets/images/logo.png"/>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex items-center">
            <a className="h-[18px] w-[18px] mx-2  hover:text-blue-800 transition-all" href="https://www.facebook.com/EasyBox23">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a className="h-[18px] w-[18px] mx-2 hover:text-rose-800 transition-all" href="https://www.instagram.com/_easy__box_">
               <FontAwesomeIcon icon={faInstagram} size="xl"/>
            </a>
            <a className="h-[18px] w-[18px] mx-2  hover:text-green-800 transition-all" href="https://wa.me/0671155621">
               <FontAwesomeIcon icon={faWhatsapp} size="xl" />
            </a>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2  lg:hidden">
            <a className="h-[18px] w-[18px] mx-2 hover:text-blue-800 transition-all" href="https://www.facebook.com/EasyBox23">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a className="h-[18px] w-[18px] mx-2 hover:text-rose-800 transition-all" href="https://www.instagram.com/_easy__box_">
               <FontAwesomeIcon icon={faInstagram} size="xl"/>
            </a>
            <a className="h-[18px] w-[18px] mx-2 hover:text-green-800 transition-all" href="https://wa.me/0671155621">
               <FontAwesomeIcon icon={faWhatsapp} size="xl" />
            </a>
        </div>
      </Collapse>
    </Navbar>
  );
}