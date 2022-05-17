import { useNavigate } from "react-router-dom";
import {
  DownArrowIcon,
  LogoIcon,
  NotificationIcon,
  NotificationPingIcon,
  SettingIcon,
} from "../../Components/Icons";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row md:justify-between">
        <div className="ml-11 py-5" onClick={() => navigate("/")}>
          <LogoIcon />
        </div>
        <div className="mr-11 flex items-center">
          <div className="h-full border-l border-gray-100">
            <SettingIcon className="h-full mx-5" />
          </div>
          <div className="h-full border-x border-gray-100">
            <div className="relative h-full mx-5 mt-0.5">
              <NotificationIcon className="h-full" />
              <NotificationPingIcon className="absolute top-6 right-1.5" />
            </div>
          </div>
          <div className="flex items-center ml-10">
            <img src="images/Profile.png" alt="profile_image" />
            <div className="ml-2">
              <h5 className="font-medium text-base leading-6">Amara Kyle</h5>
              <h6 className="text-blue-500 font-light text-xs leading-3">
                BCM Manager
              </h6>
            </div>
            <DownArrowIcon className="ml-12" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
