import MalayalamCounsellingSectionClient from "./MalayalamCounsellingSectionClient";

interface Props {
  countryName: string;
  displayName: string;
}

export default function MalayalamCounsellingSection(props: Props) {
  return <MalayalamCounsellingSectionClient {...props} />;
}
