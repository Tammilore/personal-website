import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import type { FC } from 'react';

type ContactTemplateProps = {
  readonly avatar: string;
  readonly name: string;
  readonly message: string;
};

export const ContactTemplate: FC<ContactTemplateProps> = ({
  avatar,
  name,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New message from {name}</Preview>
    <Tailwind>
      <Body className="bg-white my-auto font-sans">
        <Container className="border border-solid border-neutral-200 rounded my-10 p-5 w-[465px]">
          <Section className="mt-8">
            <Img
              src={avatar}
              width="40"
              height="40"
              alt=""
              className="my-0 rounded-full overflow-hidden"
            />
          </Section>
          <Heading className="text-black text-2xl font-normal p-0 mt-8 mx-0">
            New message from {name}
          </Heading>
          <Text className="text-black text-sm leading-6">{message}</Text>
          <Hr className="bg-neutral-200 my-6 mx-0 w-full" />
          <Text className="text-neutral-600 text-xs leading-6">
            This message was sent via the contact form on haydenbleasel.com
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

const ContactTemplateDemo: FC = () => (
  <ContactTemplate
    avatar="https://www.gravatar.com/avatar/4a05a9a78b063aef0445047e31e693f6cd79aa4ad804a0bcc7753bb7e9f9cc07"
    name="John Smith"
    message="Hello, this is a message from the contact form."
  />
);

export default ContactTemplateDemo;
