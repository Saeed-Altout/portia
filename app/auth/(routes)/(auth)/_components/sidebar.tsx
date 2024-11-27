import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Sidebar = () => {
  const currentYear = new Date().getFullYear();
  const clients = [
    {
      id: 1,
      name: "Client 1",
      imgUrl: "/images/users/client1.jpg",
    },
    {
      id: 2,
      name: "Client 2",
      imgUrl: "/images/users/client2.jpg",
    },
    {
      id: 3,
      name: "Client 3",
      imgUrl: "/images/users/client3.jpg",
    },
    {
      id: 4,
      name: "Client 4",
      imgUrl: "/images/users/client4.jpg",
    },
    {
      id: 5,
      name: "Client 5",
      imgUrl: "/images/users/client5.jpg",
    },
  ];

  return (
    <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-tr from-[#000019] to-[#111280]">
      <div className="max-w-[672px] flex flex-col gap-y-12 px-10">
        <Image src="/icons/favicon.svg" alt="Logo icon" width={80} height={80} className="h-20 w-20" priority />
        <div className="space-y-1 lg:space-y-6">
          <h1 className="text-white font-medium text-[50px] leading-[65px]">
            Start turning your Browsing to Unlimited Efficiency.
          </h1>
          <p className="text-white font-medium text-xl leading-6 lg:leading-8">
            Create your account and get full access to our dashboard. Trusted by over 40,000 professionals.
          </p>
          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center justify-start space-x-[-10px]">
              {clients.map((client) => (
                <Avatar key={client.id} className="h-10 w-10 border-white border-2">
                  <AvatarImage src={client.imgUrl} />
                  <AvatarFallback>{client.name.split("")[0] + client.name.split("")[1]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-start">
                {[...Array(5)].map((_, index) => (
                  <Image src="/icons/star.svg" alt="Star icon" width={20} height={20} key={index} priority />
                ))}
                <p className="ml-1 text-white font-medium">5.0</p>
              </div>
              <p className="text-white">© Portia.io {currentYear}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
