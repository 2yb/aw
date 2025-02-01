"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircle, Mail } from "lucide-react";
import { AnimatedIcon } from "@/components/AnimatedIcon";

interface ForgotPasswordProps {
  onBackToLoginClick: () => void;
}

export function ForgotPassword({ onBackToLoginClick }: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [chatbotMessage, setChatbotMessage] = useState(
    "Hi there! I'm here to help you recover your password. Can you please provide your email address?"
  );

  const handleResetPassword = () => {
    if (validateEmail(email)) {
      setChatbotMessage(
        `Great! I've sent a password reset link to ${email}. Please check your inbox and follow the instructions.`
      );
    } else {
      setChatbotMessage(
        "I'm sorry, but that doesn't look like a valid email address. Could you please check and try again?"
      );
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center text-gray-800">
            Password Recovery
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">{chatbotMessage}</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <AnimatedIcon icon={MessageCircle} color="#3B82F6" />
          </div>
        </CardContent>
        <CardFooter className="flex-col space-y-2">
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
          <Button
            variant="link"
            onClick={onBackToLoginClick}
            className="text-blue-600 hover:text-blue-800"
          >
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
