"use client";

import { useState } from "react";

import { Proxy } from "./columns";
import { RenewSheet } from "./renew-sheet";
import { Button } from "@/components/ui/button";
import { useProxyStore } from "@/stores/reducers/use-proxy-store";

export const CellButtonRenew = ({ data }: { data: Proxy }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { proxy, setProxy } = useProxyStore();

  const handleSelect = (data: Proxy) => {
    setProxy(data);
    setIsOpen(true);
  };

  return (
    <>
      <Button size="sm" onClick={() => handleSelect(data)}>
        Renew
      </Button>
      {isOpen && !!data && (
        <RenewSheet
          data={data}
          isOpen={isOpen && !!data}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
