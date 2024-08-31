"use server"

import { prisma } from "@/db/prisma"

export const createSubscription = async (email: string) => {
  const isEmailAlreadySubscribed = await prisma.newsletter.findFirst({
    where: {
      email,
    },
  })
  if (isEmailAlreadySubscribed) {
    return { error: "Email is already subscribed" }
  }

  await prisma.newsletter.create({
    data: {
      email,
    },
  })
}
