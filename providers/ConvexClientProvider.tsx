"use client";
import { ClerkProvider, SignIn, SignUp, useAuth } from "@clerk/nextjs";
import React from "react";
import {
  Authenticated,
  AuthLoading,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import LoadingLogo from "@/components/shared/LoadingLogo";
import dynamic from "next/dynamic";

type Props = { children: React.ReactNode };

const DynamicConvexProviderWithClerk = dynamic(
  () => import("convex/react-clerk").then((mod) => mod.ConvexProviderWithClerk),
  { ssr: false },
);

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

const convex = new ConvexReactClient(CONVEX_URL);
const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider dynamic>
      <DynamicConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <LoadingLogo />
        </AuthLoading>
        <Unauthenticated>
          <div
            className={"flex w-full gap-4 items-center justify-center h-full"}
          >
            <SignIn routing={"hash"} />
            <SignUp routing={"hash"} />
          </div>
        </Unauthenticated>
      </DynamicConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
