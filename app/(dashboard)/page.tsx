"use client";

import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const { data: accounts, isLoading, isError } = useGetAccounts();

  if (isLoading) {
    return <div>Is Loading... </div>;
  }

  return (
    <Button>
      <UserButton />
      <div>
        {accounts?.map((account) => (
          <p>{account.name}</p>
        ))}
      </div>
    </Button>
  );
}
