import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import TransactionsPage from "@/components/transactions/page";

export const metadata = {
  title: "Transactions",
  description: "Transactions description",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return <TransactionsPage />;
}
