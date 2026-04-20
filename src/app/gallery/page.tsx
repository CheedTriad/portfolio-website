import { Column, Flex, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Flex maxWidth="l" direction="column" gap="l" paddingX="l" paddingY="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column gap="s" maxWidth="s" horizontal="center" style={{ textAlign: "center" }}>
      <Heading variant="display-strong-m" style={{textAlign: "center"}}>My Photobook</Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Shot on a Panasonic Lumix FZ200, a TZ-90, and an iPhone 11 that is
          genuinely running on borrowed time. All taken within the last decade,
          purely because the light was doing something interesting that I
          couldn't ignore.
        </Text>
        <Text variant="body-default-xs" onBackground="neutral-weak">
          Free to use for personal purposes. Commercial use? Drop me a message
          first. I'm reasonable, I just want to know where my photos are going.
        </Text>
      </Column>
      <GalleryView />
    </Flex>
  );
}