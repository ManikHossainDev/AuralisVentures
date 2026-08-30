import CetagorysDetails from "@/components/page/Cetagorys/CetagorysDetails";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  return <CetagorysDetails id={id} />;
};

export default Page;