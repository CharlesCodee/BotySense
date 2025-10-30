import { useState, useEffect, useRef } from "react";
import ChatBotMessage from "./ChatBotMessage";

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const chatRef = useRef(null);

  useEffect(() => {
    // Message d'accueil lorsque le composant est monté
    if (isOpen && messages.length === 0) {
      const welcomeMessage = "Bonjour! Comment puis-je vous aider aujourd'hui?";
      setMessages([{ text: welcomeMessage, sender: "chat", isHTML: true }]);
    }

    // Faire défiler la boîte de discussion vers le bas à chaque mise à jour de messages
    if (chatRef?.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    // const response = [ "D'accord, je vous envoie un lien vers un produit exelent pour votre demande.", "Voici les liens des 3 shampooings les mieux notés par nos clients.", "Très bien, voici les produits qui ne contiennent pas de phenoxyethanol.", "Bien sûr, voici nos colorations cuivre"];
    const keywords = [
      "masque",
      "shampooing",
      "allergique",
      "coloration",
      "merci",
    ];
    const userMessage = input.toLowerCase();

    // Logique pour déterminer la réponse appropriée en fonction des mots-clés
    let chatResponse =
      "Je suis en cours d'apprentissage, veuillez reformuler votre demande.";

    if (keywords.some((keyword) => userMessage.includes(keyword))) {
      // Utilisateur a mentionné un mot-clé spécifique
      if (userMessage.includes("masque")) {
        chatResponse = (
          <div>
            D'accord, je vous envoie un lien vers un produit excellent pour
            votre demande.{" "}
            <a href="http://localhost:3000/Products/17" target="_blank">
              Cliquez ici
            </a>
          </div>
        );
      } else if (userMessage.includes("shampooing")) {
        chatResponse = (
          <div>
            Voici le lien du shampooing le mieux noté par nos clients.{" "}
            <a href="http://localhost:3000/Products/4" target="_blank">
              Cliquez ici
            </a>
          </div>
        );
      } else if (userMessage.includes("allergique")) {
        chatResponse = (
          <div>
            Très bien, voici les produits qui ne contiennent pas de
            phenoxyethanol.
            <a href="http://localhost:3000/Products/2" target="_blank">
              Cliquez ici
            </a>
          </div>
        );
      } else if (userMessage.includes("coloration")) {
        chatResponse = (
          <div>
            Bien sûr, voici nos colorations cuivre.
            <a href="http://localhost:3000/Products/23" target="_blank">
              Cliquez ici
            </a>
          </div>
        );
      } else if (userMessage.includes("merci")) {
        chatResponse = "De rien.";
      }
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);
    setInput("");

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: chatResponse, sender: "chat", isHTML: true },
      ]);
    }, 1000);
  };

  return (
    <>
      <div className="containerChatBot" onClick={() => setIsOpen(!isOpen)}>
        <img src="/images/robot.png" alt="" className="robot" />
        {isOpen && (
          <div className="bulle">
            <p>Hello!</p>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="chatBot-component">
          <div style={{ flexGrow: 1 }}></div>
          <div className="chat" ref={chatRef}>
            {messages.map((message, index) => (
              <p
                className={
                  message.sender === "user" ? "user-message" : "ai-message"
                }
                key={index}
              >
                {message.isHTML ? (
                  <ChatBotMessage text={message.text}></ChatBotMessage>
                ) : (
                  <div className="reponse-msg">{message.text}</div>
                )}
              </p>
            ))}
          </div>

          <div className="input-container">
            <input
              type="text"
              className="input"
              value={input}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="button" className="send" onClick={handleSend}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
