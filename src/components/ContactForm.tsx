import { Button, Input, Textarea } from "@nextui-org/react"
import { FC } from "react"

export const ContactForm: FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold text-center">Contact Us</h3>
        <p className="text-center text-lg mt-4">
          We are always here to help you. Please feel free to contact us.
        </p>
      </div>
      <form className="grid grid-cols-2 gap-4 mt-8">
        <div className="flex flex-col gap-2">
          <Input label="Name" name="name" variant="bordered" />
        </div>
        <div className="flex flex-col gap-2">
          <Input label="Email" type="email" name="email" variant="bordered" />
        </div>
        <div className="flex flex-col col-span-2 gap-2">
          <Textarea
            label="Your message here..."
            name="message"
            className=""
            variant="bordered"
          />
        </div>
        <div className="col-start-2 flex justify-end">
          <Button className="bg-primary text-secondary p-2 ">
            Send Message
          </Button>
        </div>
      </form>
    </section>
  )
}
