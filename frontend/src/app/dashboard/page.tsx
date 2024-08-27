import DashNav from "@/components/chatGroup/DashNav";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";


export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div>
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />
      <div className="container">
        <h1 className="text-2xl font-bold mt-8">Dashboard</h1>
        <p className="mt-4">Welcome to your dashboard.</p>
      </div>
    </div>
  );
}
