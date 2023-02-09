'use client';

import { useSession } from "next-auth/react";

type Props = {
  chatId: string;
};


function Chat({ chatId }: Props ) {
  const { data: session } = useSession();

  return (
    <div className="flex-1">Chat</div>
  )
}

export default Chat
