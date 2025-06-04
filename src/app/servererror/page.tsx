"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner"; // Or your own Spinner
import Button from "@/components/Button/Button";
import PageLayout from "@/components/Layouts/PageLayout";

const ErrorIcon = AlertCircle;

export default function ServerErrorPage() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 1000); // Show loader for 1s
    return () => clearTimeout(timer);
  }, []);

  if (!showPage) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-neutral-dimmed-heavy">
        <TailSpin height="50" width="50" color="#ffffff" />
      </div>
    );
  }

  return (
    <PageLayout noPadding fullHeight>
      <div className="flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 1 }}
        >
          <ErrorIcon className="text-[100px] text-elements-secondary-main" />
        </motion.div>
        <h1 className="text-4xl font-bold text-text-primary mt-6">
          500 - Something went wrong
        </h1>
        <p className="text-text-secondary mt-2">
          We`&apos;`re working to fix this. Please try again later or return to
          the homepage.
        </p>
        <Button
          href="/"
          type="continue"
          extraClassNames="mt-6 bg-elements-secondary-main hover:bg-elements-secondary-hover text-white px-6 py-3"
        >
          Go Home
        </Button>
      </div>
    </PageLayout>
  );
}
