"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WavesIcon as Wave } from "lucide-react";
import { AnimatedIcon } from "@/components/AnimatedIcon";

interface LogoutProps {
  user: { name: string; role: string };
  onLogout: () => void;
}

export function Logout({ user, onLogout }: LogoutProps) {
  const [auditReports, setAuditReports] = useState(0);

  useEffect(() => {
    // Simulate fetching user activity
    setAuditReports(Math.floor(Math.random() * 5) + 1);
  }, []);

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
            Goodbye, {user.name}!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-700">
            You analyzed {auditReports} audit report
            {auditReports !== 1 ? "s" : ""} today.
          </p>
          <p className="text-center text-gray-700">
            Great job keeping Canara Bank secure!
          </p>
          <div className="flex justify-center">
            <AnimatedIcon icon={Wave} color="#3B82F6" />
          </div>
        </CardContent>
        <CardFooter className="flex-col space-y-2">
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            onClick={onLogout}
          >
            Log out
          </Button>
          <Button variant="link" className="text-blue-600 hover:text-blue-800">
            Continue where you left off next time
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
