import { useLoaderData, useNavigation, useParams } from "react-router";
import ContactInformation from "./ContactInformation";
import ContactInformationSkeleton from "./ContactInformationSkeleton";
import NoContactSelected from "./NoContactSelected";

const ContactInformationCard = () => {
  const { id } = useParams();
  // Debemos saber cual es el padre de este componente, para saber que data nos traerá useLoaderData
  const { client } = useLoaderData();

  const { state } = useNavigation();

  const isPending = state === "loading";

  if (client) {
    return <ContactInformation client={client} />;
  }

  if (!id) {
    return <NoContactSelected />;
  }

  if (!client) {
    return <NoContactSelected />;
  }

  if (isPending) {
    return <ContactInformationSkeleton />;
  }
};

export default ContactInformationCard;
