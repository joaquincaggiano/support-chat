import { NavLink, useParams } from "react-router";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import type { Client } from "../interfaces/chat.interface";

interface Props {
  clients: Client[];
}

const ContactList = ({ clients }: Props) => {
  const { id } = useParams();

  return (
    <ScrollArea className="h-[calc(100vh-134px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {clients.map((client) => {
              return (
                <NavLink
                  key={client.id}
                  to={`/chat/client/${client.id}`}
                  className={({ isActive, isPending }) =>
                    `w-full justify-start flex p-2 rounded-md ${
                      isActive ? "bg-black" : isPending ? "bg-primary/10" : ""
                    }`
                  }
                >
                  <div
                    className={`h-6 w-6 rounded-full ${
                      id === client.id
                        ? "bg-white text-black"
                        : "bg-gray-300 text-white"
                    } mr-2 flex-shrink-0 flex items-center justify-center text-xs`}
                  >
                    {client.id.slice(0, 2)}
                  </div>
                  <span
                    className={
                      id === client.id ? "text-white" : "text-gray-400"
                    }
                  >
                    {client.name}
                  </span>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default ContactList;
