"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface CustomersCardProps {
  imgUrl: string;
  agency: string;
  rate: number;
  comment: string;
  name: string;
  position: string;
}

export const CustomersCard = ({
  initialData,
}: {
  initialData: CustomersCardProps;
}) => {
  const [isShowComment, setIsShowComment] = React.useState<boolean>(false);

  const { imgUrl, agency, rate, comment, name, position } = initialData;

  const fadeTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <div
      onMouseEnter={() => setIsShowComment(true)}
      onMouseLeave={() => setIsShowComment(false)}
    >
      <img src={imgUrl} alt={agency} className="object-cover w-full h-full" />
      <motion.div
        initial={{ height: 212 }}
        animate={{ height: isShowComment ? 260 : 212 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 drop-shadow-xl left-0 w-full min-h-[212px] bg-white bg-opacity-10 backdrop-blur-lg flex items-end justify-start"
      >
        <div className="text-left p-6 pb-8 space-y-1">
          {!isShowComment && (
            <motion.div
              {...fadeTransition}
              className="flex items-center justify-start gap-x-1 py-4"
            >
              {[...Array(rate)].map((_, index) => (
                <FaStar key={index} className="text-white h-4 w-4" />
              ))}
            </motion.div>
          )}
          {isShowComment && (
            <motion.p
              {...fadeTransition}
              className="text !text-white !text-lg py-4"
            >
              {comment}
            </motion.p>
          )}
          <p className="text !text-white !text-3xl !font-semibold">{name}</p>
          <p className="text !text-white !text-lg !font-medium pt-2">
            {position}
          </p>
          <p className="text !text-white">{agency}</p>
        </div>
      </motion.div>
    </div>
  );
};
