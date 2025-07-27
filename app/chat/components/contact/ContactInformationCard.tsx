import { useLoaderData, useNavigation, useParams } from "react-router";
import ContactInformation from "./ContactInformation";
import ContactInformationSkeleton from "./ContactInformationSkeleton";
import NoContactSelected from "./NoContactSelected";
import type { Client } from "~/chat/interfaces/chat.interface";

const ContactInformationCard = () => {
  const { id } = useParams();
  // Debemos saber cual es el padre de este componente, para saber que data nos traerá useLoaderData
  const { clients = [] } = useLoaderData();

  const { state } = useNavigation();

  const isPending = state === "loading";

  if (!id) {
    return <NoContactSelected />;
  }

  const client = clients.find((client: Client) => client.id === id);

  if (!client) {
    return <NoContactSelected />;
  }

  if (isPending) {
    return <ContactInformationSkeleton />;
  }

  return <ContactInformation client={client} />;
};

export default ContactInformationCard;
