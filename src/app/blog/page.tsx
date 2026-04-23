import { Column, Heading, Text, Meta, Schema } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, } from "@/resources";
import { Subscribe } from "@/components/blog/Subscribe";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingX="24" paddingTop="24" paddingBottom="32" gap="8" horizontal="center" align="center">
        <Heading variant="display-strong-m" align="center">
          {person.firstName}&apos;s Blog
        </Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak" align="center">
          {blog.title}
        </Text>
      </Column>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Earlier posts
        </Heading>
        <Posts range={[4]} columns="2" />
        <Subscribe />
      </Column>
    </Column>
  );
}
