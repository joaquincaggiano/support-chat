import ContactInformation from "./ContactInformation";
import ContactInformationSkeleton from "./ContactInformationSkeleton";
import NoContactSelected from "./NoContactSelected";

const ContactInformationCard = () => {
  return <NoContactSelected />;

  return <ContactInformationSkeleton />;

  return <ContactInformation />;
};

export default ContactInformationCard;
