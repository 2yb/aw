"use client";

import { useState, useEffect } from "react";
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
import { Shield, Smartphone, RefreshCw, Mail } from "lucide-react";
import { AnimatedIcon } from "@/components/AnimatedIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MFAVerificationProps {
  phoneNumber: string;
  onVerify: () => void;
  onCancel: () => void;
}

export function MFAVerification({
  phoneNumber,
  onVerify,
  onCancel,
}: MFAVerificationProps) {
  const [phoneCode, setPhoneCode] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleVerify = () => {
    if (phoneCode.length === 6 && emailCode.length === 6) {
      onVerify();
    }
  };

  const handleResendCode = () => {
    setTimeLeft(60);
    // Implement resend code logic here
    console.log("Resending codes to phone and email");
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
            Verify Your Identity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">
            We've sent 6-digit codes to your phone number ending in{" "}
            {phoneNumber.slice(-4)} and your email address.
          </p>
          <div className="space-y-2">
            <Label htmlFor="phone-code" className="text-gray-700">
              Phone Code
            </Label>
            <Input
              id="phone-code"
              value={phoneCode}
              onChange={(e) =>
                setPhoneCode(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              className="text-center text-2xl tracking-widest"
              maxLength={6}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-code" className="text-gray-700">
              Email Code
            </Label>
            <Input
              id="email-code"
              value={emailCode}
              onChange={(e) =>
                setEmailCode(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              className="text-center text-2xl tracking-widest"
              maxLength={6}
            />
          </div>
          <div className="flex justify-between">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AnimatedIcon icon={Shield} color="#10B981" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Secure Verification</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AnimatedIcon icon={Smartphone} color="#F59E0B" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Phone Authentication</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AnimatedIcon icon={Mail} color="#3B82F6" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email Authentication</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
        <CardFooter className="flex-col space-y-2">
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            onClick={handleVerify}
            disabled={phoneCode.length !== 6 || emailCode.length !== 6}
          >
            Verify
          </Button>
          <div className="flex justify-between w-full">
            <Button
              variant="link"
              onClick={onCancel}
              className="text-blue-600 hover:text-blue-800"
            >
              Cancel
            </Button>
            <Button
              variant="link"
              onClick={handleResendCode}
              disabled={timeLeft > 0}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Resend Codes {timeLeft > 0 && `(${timeLeft}s)`}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
