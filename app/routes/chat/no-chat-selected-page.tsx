import { MessageSquare } from "lucide-react";

const NoChatSelectedPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
      <MessageSquare className="h-12 w-12 mb-4" />
      <p className="text-lg">No hay un chat seleccionado</p>
    </div>
  );
};

export default NoChatSelectedPage;
