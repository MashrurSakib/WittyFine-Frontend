import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { toast } from 'react-hot-toast';
import { axiosInstance } from '../../utils/axios/axiosInstance';

const FAQ_RESPONSES = {
  'services': "We offer a comprehensive range of digital marketing services including SEO, Social Media Marketing, Content Marketing, PPC Advertising, Email Marketing, and Web Development.",
  'content creation': "Yes, we provide professional content creation services including blog posts, social media content, email newsletters, and website copy.",
  'consultation': "Absolutely! You can schedule a free 30-minute consultation with our experts. Would you like me to help you schedule one?",
  'location': "Our agency is located in Aftabnagar, Dhaka. We also work remotely with clients worldwide.",
  'pricing': "We offer flexible pricing packages tailored to your business needs. Would you like me to send you our pricing guide?",
  'industries': "We serve various industries including E-commerce, Technology, Healthcare, Education, Real Estate, and more.",
  'portfolio': "Absolutely! You can check out our portfolio section of our website.",
  'previous work': "Absolutely! You can check out our portfolio section of our website.",
  'international': "Yes, we work with clients around the globe and can schedule virtual meetings at your convenience.",
  'results': "It depends on your goals and strategy, but most clients start seeing measurable results within 4–8 weeks.",
  'branding': "Yes, we specialize in branding and rebranding—everything from logo design to full visual identity and messaging.",
  'ads': "Yes, we handle both Google Ads and all Meta platforms (Facebook, Instagram), including strategy, setup, and optimization.",
  'different': "We offer a personalized, data-driven approach with transparent reporting and a dedicated team focused on real results.",
  'budget': "We're flexible! While some services require a minimum spend, we work with startups and scale packages based on need.",
  'support': "Yes, all our clients receive regular performance reports and access to our team for continuous optimization.",
  'cancel': "We offer flexible contracts, and you're free to cancel with notice. We're confident in earning your continued business.",
  'manager': "Yes, every client is assigned a dedicated account manager to ensure smooth communication and project success.",
  'custom': "Definitely! We'll assess your goals and create a tailored marketing plan that fits your business and budget.",
  'seo': "Yes, we provide in-depth SEO audits and one-on-one consultations to identify opportunities and optimize your website's visibility.",
  'email': "Absolutely! We create, schedule, and optimize email campaigns using platforms like Mailchimp, Klaviyo, and others.",
  'influencer': "Yes, we help identify, manage, and collaborate with influencers relevant to your brand and target audience.",
  'redesign': "Yes! We specialize in redesigning outdated or underperforming websites to boost conversions and user experience.",
  'analytics': "Definitely. We integrate tools like Google Analytics, Meta Pixel, and Hotjar to track performance and improve ROI.",
  'video': "Yes, we offer professional video content creation, including reels, ads, testimonials, and branded explainers.",
  'testing': "Yes! A/B testing is a key part of our strategy to improve ad performance and user engagement.",
  'platforms': "We build on React (custom), WordPress, Shopify, and Webflow depending on your business needs.",
  'certified': "Yes, we are certified partners with Google Ads and Meta Business Suite, which helps us optimize better for clients.",
  'start': "Just reach out via our contact page or chatbot, and we'll schedule a free discovery call to learn about your goals."
};

const GREETINGS = ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'];

const CONTACT_EMAIL = "contact@wittyfine.com"; // Replace with your actual email

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto-open chatbot after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setMessages([{
        id: 1,
        text: "Hello! 👋 Welcome to WittyFine Marketing Agency. How can I help you today?",
        isBot: true,
        timestamp: new Date(),
        status: 'read'
      }]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const isGreeting = (message) => {
    const lowerMessage = message.toLowerCase().trim();
    return GREETINGS.some(greeting => lowerMessage === greeting);
  };

  const getGreetingResponse = () => {
    const hour = new Date().getHours();
    let greeting = "Hello! 👋";
    
    if (hour >= 5 && hour < 12) {
      greeting = "Good morning! ☀️";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good afternoon! 🌤️";
    } else {
      greeting = "Good evening! 🌙";
    }
    
    return `${greeting} How can I help you today?`;
  };

  const handleFAQResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Check for FAQ keywords
    for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Check for specific questions
    if (lowerMessage.includes('what services') || lowerMessage.includes('services')) {
      return FAQ_RESPONSES.services;
    }
    if (lowerMessage.includes('content creation') || lowerMessage.includes('content')) {
      return FAQ_RESPONSES['content creation'];
    }
    /*if (lowerMessage.includes('consultation') || lowerMessage.includes('schedule')) {
      return FAQ_RESPONSES.consultation;
    }*/
    if (lowerMessage.includes('location') || lowerMessage.includes('where')) {
      return FAQ_RESPONSES.location;
    }
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      return FAQ_RESPONSES.pricing;
    }
    if (lowerMessage.includes('industries') || lowerMessage.includes('sectors')) {
      return FAQ_RESPONSES.industries;
    }
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || 
        lowerMessage.includes('previous work') || lowerMessage.includes('projects') ||
        lowerMessage.includes('case studies')) {
      return FAQ_RESPONSES.portfolio;
    }
    if (lowerMessage.includes('international') || lowerMessage.includes('global') || 
        lowerMessage.includes('worldwide') || lowerMessage.includes('overseas') ||
        lowerMessage.includes('foreign') || lowerMessage.includes('other countries')) {
      return FAQ_RESPONSES.international;
    }
    if (lowerMessage.includes('results') || lowerMessage.includes('how long') || 
        lowerMessage.includes('timeframe') || lowerMessage.includes('when will i see')) {
      return FAQ_RESPONSES.results;
    }
    if (lowerMessage.includes('branding') || lowerMessage.includes('rebranding') || 
        lowerMessage.includes('logo') || lowerMessage.includes('visual identity')) {
      return FAQ_RESPONSES.branding;
    }
    if (lowerMessage.includes('google ads') || lowerMessage.includes('facebook ads') || 
        lowerMessage.includes('meta') || lowerMessage.includes('instagram ads') ||
        lowerMessage.includes('paid ads') || lowerMessage.includes('advertising')) {
      return FAQ_RESPONSES.ads;
    }
    if (lowerMessage.includes('different') || lowerMessage.includes('unique') || 
        lowerMessage.includes('special') || lowerMessage.includes('why choose') ||
        lowerMessage.includes('what makes you')) {
      return FAQ_RESPONSES.different;
    }
    if (lowerMessage.includes('budget') || lowerMessage.includes('minimum') || 
        lowerMessage.includes('cost') || lowerMessage.includes('price') ||
        lowerMessage.includes('investment')) {
      return FAQ_RESPONSES.budget;
    }
    if (lowerMessage.includes('support') || lowerMessage.includes('reporting') || 
        lowerMessage.includes('reports') || lowerMessage.includes('optimization') ||
        lowerMessage.includes('ongoing')) {
      return FAQ_RESPONSES.support;
    }
    if (lowerMessage.includes('cancel') || lowerMessage.includes('terminate') || 
        lowerMessage.includes('end contract') || lowerMessage.includes('stop service')) {
      return FAQ_RESPONSES.cancel;
    }
    if (lowerMessage.includes('account manager') || lowerMessage.includes('dedicated') || 
        lowerMessage.includes('point of contact') || lowerMessage.includes('who will manage')) {
      return FAQ_RESPONSES.manager;
    }
    if (lowerMessage.includes('custom') || lowerMessage.includes('tailored') || 
        lowerMessage.includes('personalized') || lowerMessage.includes('specific plan') ||
        lowerMessage.includes('marketing plan')) {
      return FAQ_RESPONSES.custom;
    }
    if (lowerMessage.includes('seo') || lowerMessage.includes('search engine') || 
        lowerMessage.includes('audit') || lowerMessage.includes('optimization')) {
      return FAQ_RESPONSES.seo;
    }
    if (lowerMessage.includes('email') || lowerMessage.includes('mailchimp') || 
        lowerMessage.includes('klaviyo') || lowerMessage.includes('newsletter')) {
      return FAQ_RESPONSES.email;
    }
    if (lowerMessage.includes('influencer') || lowerMessage.includes('influencers') || 
        lowerMessage.includes('collaboration') || lowerMessage.includes('partnership')) {
      return FAQ_RESPONSES.influencer;
    }
    if (lowerMessage.includes('redesign') || lowerMessage.includes('website redesign') || 
        lowerMessage.includes('update website') || lowerMessage.includes('modernize')) {
      return FAQ_RESPONSES.redesign;
    }
    if (lowerMessage.includes('analytics') || lowerMessage.includes('tracking') || 
        lowerMessage.includes('conversion') || lowerMessage.includes('performance') ||
        lowerMessage.includes('roi')) {
      return FAQ_RESPONSES.analytics;
    }
    if (lowerMessage.includes('video') || lowerMessage.includes('reels') || 
        lowerMessage.includes('testimonials') || lowerMessage.includes('explainers')) {
      return FAQ_RESPONSES.video;
    }
    if (lowerMessage.includes('a/b testing') || lowerMessage.includes('ab testing') || 
        lowerMessage.includes('split testing') || lowerMessage.includes('landing page test')) {
      return FAQ_RESPONSES.testing;
    }
    if (lowerMessage.includes('platform') || lowerMessage.includes('wordpress') || 
        lowerMessage.includes('shopify') || lowerMessage.includes('webflow') ||
        lowerMessage.includes('react')) {
      return FAQ_RESPONSES.platforms;
    }
    if (lowerMessage.includes('certified') || lowerMessage.includes('partner') || 
        lowerMessage.includes('google partner') || lowerMessage.includes('meta partner')) {
      return FAQ_RESPONSES.certified;
    }
    if (lowerMessage.includes('get started') || lowerMessage.includes('how to start') || 
        lowerMessage.includes('begin') || lowerMessage.includes('onboard') ||
        lowerMessage.includes('first step')) {
      return FAQ_RESPONSES.start;
    }

    return null;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);
    setError(null);

    try {
      // Check for greeting first
      if (isGreeting(inputMessage)) {
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            text: getGreetingResponse(),
            isBot: true,
            timestamp: new Date(),
            status: 'read'
          }]);
        }, 1000);
        return;
      }

      // Check for contact keyword
      if (inputMessage.toLowerCase().includes('contact')) {
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            text: `You can reach us at ${CONTACT_EMAIL}. We'll get back to you as soon as possible!`,
            isBot: true,
            timestamp: new Date(),
            status: 'read'
          }]);
        }, 1000);
        return;
      }

      // Check for FAQ response
      const faqResponse = handleFAQResponse(inputMessage);
      
      if (faqResponse) {
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            text: faqResponse,
            isBot: true,
            timestamp: new Date(),
            status: 'read'
          }]);
        }, 1000);
      } else {
        // If no FAQ match, check if user needs more help
        if (inputMessage.toLowerCase().includes('help') || 
            inputMessage.toLowerCase().includes('speak')) {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            text: "I'm not sure how to help with that. You can reach our team directly at [Your Email] or call us at [Your Phone Number]. We're here to help!",
            isBot: true,
            timestamp: new Date(),
            status: 'read'
          }]);
        } else {
          // Call your AI API endpoint for other responses
          const response = await axiosInstance.post('/api/chatbot/respond', {
            message: inputMessage
          });

          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            text: response.data.message,
            isBot: true,
            timestamp: new Date(),
            status: 'read'
          }]);
        }
      }
    } catch (err) {
      setIsTyping(false);
      setError("That's a good question! I don't have the info on that yet, but our team is happy to assist. Please contact us via our Contact Us page.");
      toast.error('Failed to get response from chatbot');
    }
  };

  const handleCopyMessage = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Message copied to clipboard');
  };

  const handleDeleteMessage = (messageId) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
  };

  const renderMessageOptions = (message) => (
    <div className="message-options">
      <button 
        onClick={() => handleCopyMessage(message.text)}
        title="Copy message"
      >
        📋
      </button>
      {!message.isBot && (
        <button 
          onClick={() => handleDeleteMessage(message.id)}
          title="Delete message"
        >
          🗑️
        </button>
      )}
    </div>
  );

  const renderMessageStatus = (status) => {
    switch (status) {
      case 'sent': return '✓';
      case 'delivered': return '✓✓';
      case 'read': return '✓✓';
      default: return '';
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="header-content">
              <h3>Chat with us</h3>
              <span className="status-indicator">Online</span>
            </div>
            <button 
              className="close-button"
              onClick={() => setIsOpen(false)}
              title="Close chat"
            >
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.isBot ? 'bot' : 'user'}`}
              >
                <div className="message-content">
                  {message.text}
                  <div className="message-meta">
                    <span className="message-time">{formatTime(message.timestamp)}</span>
                    {!message.isBot && (
                      <span className="message-status">{renderMessageStatus(message.status)}</span>
                    )}
                  </div>
                </div>
                {renderMessageOptions(message)}
              </div>
            ))}
            {isTyping && (
              <div className="message bot typing-indicator">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            {error && (
              <div className="message bot error-message">
                {error}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              disabled={isTyping}
            />
            <button 
              type="submit"
              disabled={isTyping || inputMessage.trim() === ''}
            >
              Send
            </button>
          </form>
        </div>
      )}
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  );
};

export default Chatbot; 