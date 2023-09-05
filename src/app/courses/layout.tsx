import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description: "Courses page by cousea",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
