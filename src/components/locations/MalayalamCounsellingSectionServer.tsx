import MalayalamCounsellingSectionClient from "./MalayalamCounsellingSectionClient";

interface Props {
  title: string;
  description: string;
  steps: string[];
  related: {
    title: string;
    description: string;
    linkText: string;
    link: string;
  };
}

export default function MalayalamCounsellingSection(props: Props) {
  return <MalayalamCounsellingSectionClient {...props} />;
}