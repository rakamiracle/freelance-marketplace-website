import { useState } from 'react';
import { Send, Search, Phone, Video, MoreVertical, Paperclip, Smile, Star, CheckCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { ScrollArea } from '../components/ui/scroll-area';
import { Separator } from '../components/ui/separator';

const conversations = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MXx8fHwxNzYwNTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Sounds great! I\'ll send the designs by tomorrow.',
    time: '2m ago',
    unread: 2,
    online: true,
    project: 'E-commerce Website'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    avatar: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1NTQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'The backend API is ready for testing',
    time: '1h ago',
    unread: 0,
    online: true,
    project: 'Mobile App Development'
  },
  {
    id: 3,
    name: 'Emma Watson',
    avatar: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Thank you for the feedback!',
    time: '3h ago',
    unread: 1,
    online: false,
    project: 'Content Writing'
  },
  {
    id: 4,
    name: 'TechStartup Inc.',
    avatar: 'https://images.unsplash.com/photo-1602465750834-d43bfa8bbb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'When can you start the project?',
    time: '1d ago',
    unread: 0,
    online: false,
    project: 'Website Redesign'
  }
];

const messages = [
  {
    id: 1,
    sender: 'them',
    text: 'Hi! I reviewed your portfolio and I\'m impressed with your work.',
    time: '10:30 AM',
    read: true
  },
  {
    id: 2,
    sender: 'me',
    text: 'Thank you! I\'d love to work on your project. Can you share more details?',
    time: '10:32 AM',
    read: true
  },
  {
    id: 3,
    sender: 'them',
    text: 'Sure! We need a modern e-commerce website with payment integration.',
    time: '10:35 AM',
    read: true
  },
  {
    id: 4,
    sender: 'them',
    text: 'The timeline is about 6 weeks. Does that work for you?',
    time: '10:35 AM',
    read: true
  },
  {
    id: 5,
    sender: 'me',
    text: 'Yes, that works perfectly! I can start next week.',
    time: '10:40 AM',
    read: true
  },
  {
    id: 6,
    sender: 'me',
    text: 'I\'ll prepare a detailed proposal with timeline and milestones.',
    time: '10:40 AM',
    read: true
  },
  {
    id: 7,
    sender: 'them',
    text: 'Sounds great! I\'ll send the designs by tomorrow.',
    time: '10:45 AM',
    read: true
  }
];

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [messageText, setMessageText] = useState('');

  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-6">
        <Card className="h-full border-0 bg-white shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-3 h-full">
            {/* Conversations List */}
            <div className="md:col-span-1 border-r border-gray-100">
              {/* Search */}
              <div className="p-4 border-b border-gray-100">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    placeholder="Search conversations..." 
                    className="pl-10 rounded-full border-gray-200"
                  />
                </div>
              </div>

              {/* Conversations */}
              <ScrollArea className="h-[calc(100%-73px)]">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedChat(conversation)}
                    className={`p-4 cursor-pointer transition-colors border-b border-gray-50 hover:bg-purple-50 ${
                      selectedChat.id === conversation.id ? 'bg-purple-50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-gray-700 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="truncate">{conversation.name}</p>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate mb-1">{conversation.lastMessage}</p>
                        <Badge variant="outline" className="text-xs border-gray-200 text-gray-700">
                          {conversation.project}
                        </Badge>
                      </div>
                      {conversation.unread > 0 && (
                        <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 border-0 w-6 h-6 flex items-center justify-center p-0">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </div>

            {/* Chat Area */}
            <div className="md:col-span-2 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={selectedChat.avatar} />
                      <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
                    </Avatar>
                    {selectedChat.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-gray-700 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div>
                    <p>{selectedChat.name}</p>
                    <p className="text-sm text-gray-500">{selectedChat.online ? 'Online' : 'Offline'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Video className="w-5 h-5 text-gray-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </Button>
                </div>
              </div>

              {/* Project Context */}
              <div className="p-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 border-0">
                      {selectedChat.project}
                    </Badge>
                    <span className="text-sm text-gray-600">Active Project</span>
                  </div>
                  <Button variant="link" className="text-blue-600 text-sm">
                    View Details
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {/* Date Separator */}
                  <div className="flex items-center gap-3 my-6">
                    <Separator className="flex-1" />
                    <span className="text-xs text-gray-500">Today</span>
                    <Separator className="flex-1" />
                  </div>

                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] ${message.sender === 'me' ? 'order-2' : 'order-1'}`}>
                        {message.sender === 'them' && (
                          <div className="flex items-center gap-2 mb-1">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={selectedChat.avatar} />
                              <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-gray-500">{selectedChat.name}</span>
                          </div>
                        )}
                        <div
                          className={`rounded-2xl px-4 py-3 ${
                            message.sender === 'me'
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm'
                              : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                        </div>
                        <div className={`flex items-center gap-1 mt-1 ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-xs text-gray-500">{message.time}</span>
                          {message.sender === 'me' && (
                            <CheckCheck className="w-3 h-3 text-blue-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" className="rounded-full flex-shrink-0">
                    <Paperclip className="w-5 h-5 text-gray-600" />
                  </Button>
                  
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type a message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="rounded-full pr-12 border-gray-200 focus:border-gray-400"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && messageText.trim()) {
                          setMessageText('');
                        }
                      }}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full"
                    >
                      <Smile className="w-5 h-5 text-gray-600" />
                    </Button>
                  </div>

                  <Button
                    className="rounded-full w-10 h-10 p-0 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 flex-shrink-0"
                    disabled={!messageText.trim()}
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
