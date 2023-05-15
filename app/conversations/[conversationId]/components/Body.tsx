'use client';

import useConversation from "@/app/hooks/useConversation";
import { FullMessageType } from "@/app/types";
import { useRef, useState } from "react";

interface BodyProps {
    initialMessages: FullMessageType[];
}


const Body: React.FC<BodyProps> = ({ initialMessages = [] }) => {
    const bottomRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState(initialMessages);

    const { conversationId } = useConversation();


    return (
        <div className="flex-1 overflow-y-auto">
            Body
        </div>
    );
}

export default Body;