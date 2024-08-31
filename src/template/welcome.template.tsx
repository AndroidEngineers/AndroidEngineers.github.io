import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components"

function WelcomeEmail({ userName }: { userName: string }) {
  const subject = `Welcome to Android Enginners!🥳`

  return {
    emailJsx: (
      <Html>
        <Head />
        <Preview>{subject}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
              <Text className="text-black text-[14px] leading-[24px]">
                Hi {userName},
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                Welcome to Android Enginners! 🎉 We&apos;re excited to have you
                on board.
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                We&apos;re committed to improving education through technology,
                and we’re excited to share this journey with you.
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                If you ever have questions, feedback, or just want to chat, feel
                free to reply to this email—we&apos;d love to hear from you!
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    ),
    subject,
  }
}

module.exports = WelcomeEmail
