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
import {
  Fingerprint,
  Key,
  Scan,
  Smartphone,
  User,
  Lock,
  Phone,
} from "lucide-react";
import { AnimatedIcon } from "@/components/AnimatedIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LoginProps {
  onSignupClick: () => void;
  onForgotPasswordClick: () => void;
  onLogin: (userData: { name: string; role: string; phone: string }) => void;
}

export function Login({
  onSignupClick,
  onForgotPasswordClick,
  onLogin,
}: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    if (username && password && phone) {
      onLogin({ name: username, role: "Bank Official", phone: phone });
    }
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
            Welcome Back
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-gray-700">
              Username
            </Label>
            <div className="relative">
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your username"
              />
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">
              Phone Number
            </Label>
            <div className="relative">
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
              <Phone
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AnimatedIcon icon={Fingerprint} color="#3B82F6" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Biometric Authentication</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AnimatedIcon icon={Scan} color="#6366F1" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Face Recognition</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AnimatedIcon icon={Key} color="#8B5CF6" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Security Token</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AnimatedIcon icon={Smartphone} color="#EC4899" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Multi-Factor Authentication</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
        <CardFooter className="flex-col space-y-2">
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            onClick={handleLogin}
          >
            Log In
          </Button>
          <div className="flex justify-between w-full">
            <Button
              variant="link"
              onClick={onSignupClick}
              className="text-blue-600 hover:text-blue-800"
            >
              Sign up
            </Button>
            <Button
              variant="link"
              onClick={onForgotPasswordClick}
              className="text-blue-600 hover:text-blue-800"
            >
              Forgot password?
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
