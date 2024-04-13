"use client";

import { IEvent } from "@/lib/database/models/event.model";
import { useUser } from "@clerk/nextjs";
import React from "react";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return <div className="flex items-center gap-3"></div>;
};

export default CheckoutButton;
