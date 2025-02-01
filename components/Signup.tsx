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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Briefcase, Code, Mail, Lock, Phone } from "lucide-react";
import { AnimatedIcon } from "@/components/AnimatedIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SignupProps {
  onLoginClick: () => void;
}

export function Signup({ onLoginClick }: SignupProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = () => {
    if (validateInputs()) {
      console.log("Signing up:", { name, email, password, role, phone });
    }
  };

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+[1-9]\d{1,14}$/;

    return (
      name.length > 0 &&
      emailRegex.test(email) &&
      password.length >= 8 &&
      role.length > 0 &&
      phoneRegex.test(phone)
    );
  };

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   exit={{ opacity: 0, y: -20 }}
    //   transition={{ duration: 0.3 }}
    //   className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-900 via-purple-800 to-blue-600"
    // >
    //   <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg">
    //     <CardHeader className="text-center">
    //       <CardTitle className="text-3xl font-extrabold tracking-wide text-white drop-shadow-md">
    //         <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text animate-glow">
    //           Join AwDitor
    //         </span>
    //       </CardTitle>
    //     </CardHeader>

    //     <CardContent className="space-y-4">
    //       <div className="space-y-2">
    //         <Label htmlFor="name" className="text-gray-200">
    //           Name
    //         </Label>
    //         <div className="relative">
    //           <Input
    //             id="name"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             className="pl-10 border-gray-500 focus:border-blue-500 focus:ring-blue-500 bg-transparent text-white"
    //             placeholder="Enter your name"
    //           />
    //           <User
    //             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
    //             size={18}
    //           />
    //         </div>
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="email" className="text-gray-200">
    //           Email
    //         </Label>
    //         <div className="relative">
    //           <Input
    //             id="email"
    //             type="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             className="pl-10 border-gray-500 focus:border-blue-500 focus:ring-blue-500 bg-transparent text-white"
    //             placeholder="Enter your email"
    //           />
    //           <Mail
    //             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
    //             size={18}
    //           />
    //         </div>
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="password" className="text-gray-200">
    //           Password
    //         </Label>
    //         <div className="relative">
    //           <Input
    //             id="password"
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             className="pl-10 border-gray-500 focus:border-blue-500 focus:ring-blue-500 bg-transparent text-white"
    //             placeholder="Enter your password"
    //           />
    //           <Lock
    //             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
    //             size={18}
    //           />
    //         </div>
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="phone" className="text-gray-200">
    //           Phone (with country code)
    //         </Label>
    //         <div className="relative">
    //           <Input
    //             id="phone"
    //             type="tel"
    //             value={phone}
    //             onChange={(e) => setPhone(e.target.value)}
    //             className="pl-10 border-gray-500 focus:border-blue-500 focus:ring-blue-500 bg-transparent text-white"
    //             placeholder="+1234567890"
    //           />
    //           <Phone
    //             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
    //             size={18}
    //           />
    //         </div>
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="role" className="text-gray-200">
    //           Role
    //         </Label>
    //         <Select onValueChange={setRole}>
    //           <SelectTrigger className="border-gray-500 focus:border-blue-500 focus:ring-blue-500 bg-transparent text-white">
    //             <SelectValue placeholder="Select your role" />
    //           </SelectTrigger>
    //           <SelectContent className="bg-gray-800 text-white">
    //             <SelectItem value="bank-official">Bank Official</SelectItem>
    //             <SelectItem value="auditor">Auditor</SelectItem>
    //             <SelectItem value="developer">Developer</SelectItem>
    //           </SelectContent>
    //         </Select>
    //       </div>
    //     </CardContent>

    //     <CardFooter className="flex flex-col space-y-2">
    //       <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
    //         Sign up
    //       </Button>
    //       <Button
    //         variant="link"
    //         onClick={onLoginClick}
    //         className="text-blue-300 hover:text-blue-500"
    //       >
    //         Already have an account? Log in
    //       </Button>
    //     </CardFooter>
    //   </Card>
    // </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center h-screen px-4 bg-gradient-to-br from-gray-900 via-purple-800 to-blue-600"
    >
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-extrabold tracking-wide text-white drop-shadow-md">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text animate-glow">
              Join AwDitor
            </span>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-gray-200 text-sm">
              Name
            </Label>
            <div className="relative">
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 h-9 border-gray-500 focus:border-blue-500 focus:ring-blue-500 bg-transparent text-white"
                placeholder="Enter your name"
              />
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-gray-200 text-sm">
              Email
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-9 border-gray-500 focus:border-blue-500 focus:ring-blue-500 bg-transparent text-white"
                placeholder="Enter your email"
              />
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="password" className="text-gray-200 text-sm">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 h-9 border-gray-500 focus:border-blue-500 focus:ring-blue-500 bg-transparent text-white"
                placeholder="Enter your password"
              />
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone" className="text-gray-200 text-sm">
              Phone (with country code)
            </Label>
            <div className="relative">
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-10 h-9 border-gray-500 focus:border-blue-500 focus:ring-blue-500 bg-transparent text-white"
                placeholder="+1234567890"
              />
              <Phone
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="role" className="text-gray-200 text-sm">
              Role
            </Label>
            <Select onValueChange={setRole}>
              <SelectTrigger className="h-9 border-gray-500 focus:border-blue-500 focus:ring-blue-500 bg-transparent text-white">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="bank-official">Bank Official</SelectItem>
                <SelectItem value="auditor">Auditor</SelectItem>
                <SelectItem value="developer">Developer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2 pt-2">
          <Button className="w-full h-9 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
            Sign up
          </Button>
          <Button
            variant="link"
            onClick={onLoginClick}
            className="text-blue-300 hover:text-blue-500 h-8"
          >
            Already have an account? Log in
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
