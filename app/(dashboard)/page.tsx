"use client";

import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { UserButton } from "@clerk/nextjs";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { onOpen } = useNewAccount();
  const { data: accounts, isLoading, isError } = useGetAccounts();

  if (isLoading) {
    return <div>Is Loading... </div>;
  }

  return (
    <div>
      <UserButton />
      <Button onClick={onOpen}>Add an Account</Button>
      <div>
        {accounts?.map((account) => (
          <p>{account.name}</p>
        ))}
      </div>
    </div>
  );
}
