import React, { useState } from 'react';
import axios from 'axios';
import './ChatBox.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const systemPrompt = {
    role: 'system',
    content: `
    You are an AI assistant for a Contract Management System.
    You must ONLY answer questions related to:
    - Contracts
    - Contract lifecycle (creation, negotiation, review, etc.)
    - Legal terms
    - Contract templates
    - Stakeholders
    - Deadlines
    - Risk detection
    - Clause suggestions
    
    If a question is unrelated to contracts, respond with:
    "I can only assist with contract management-related questions."
  `,
  };

  const apiKey =
    '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';

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputText.trim()) return;

    setIsLoading(true);

    // Add user message
    setMessages((prev) => [...prev, { role: 'user', content: inputText }]);
    setInputText('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            systemPrompt,
            ...messages,
            { role: 'user' as const, content: inputText },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const assistantMessage = response.data.choices[0].message.content;

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: assistantMessage },
      ]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Failed to get response from AI. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-box-container">
      {/* Toggle Button */}
      <button className="toggle-button" onClick={handleToggleChat}>
        <i className="fas fa-comment-alt"></i>
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chat-window">
          <header>Contract Management Assistant</header>
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.role}`}>
                <strong>
                  {message.role === 'user' ? 'You:' : 'Assistant:'}
                </strong>{' '}
                {message.content}
              </div>
            ))}
            {isLoading && <div className="message loading">...</div>}
          </div>
          <form onSubmit={handleSubmit} className="input-form">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask something..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
