import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Course",
  description: "Courses page by cousea",
};

export default function CreateCoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
